/* script.js – Mountain Dew Wiki interaction logic */

(function () {
  "use strict";

  /* ------------------------------------------------------------------ */
  /*  Helpers                                                             */
  /* ------------------------------------------------------------------ */

  function $(sel, ctx) {
    return (ctx || document).querySelector(sel);
  }

  function $$(sel, ctx) {
    return Array.from((ctx || document).querySelectorAll(sel));
  }

  function escHtml(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  /* ------------------------------------------------------------------ */
  /*  Color-contrast helper – pick black or white text                   */
  /* ------------------------------------------------------------------ */

  function hexToRgb(hex) {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return { r, g, b };
  }

  function luminance({ r, g, b }) {
    const toLinear = (c) => {
      const s = c / 255;
      return s <= 0.03928 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4);
    };
    return 0.2126 * toLinear(r) + 0.7152 * toLinear(g) + 0.0722 * toLinear(b);
  }

  function contrastText(hex) {
    if (!hex || !hex.startsWith("#")) return "#ffffff";
    try {
      const lum = luminance(hexToRgb(hex));
      return lum > 0.35 ? "#1a2e1a" : "#ffffff";
    } catch {
      return "#ffffff";
    }
  }

  /* ------------------------------------------------------------------ */
  /*  Badge helper                                                        */
  /* ------------------------------------------------------------------ */

  const BADGE_LABELS = {
    current: "Current",
    discontinued: "Discontinued",
    limited: "Limited / Seasonal",
    regional: "Regional",
    energy: "Energy",
  };

  function badgeHtml(status) {
    const label = BADGE_LABELS[status] || status;
    return `<span class="card-badge badge-${escHtml(status)}">${escHtml(label)}</span>`;
  }

  /* ------------------------------------------------------------------ */
  /*  Build a flavor card element                                         */
  /* ------------------------------------------------------------------ */

  function buildCard(flavor) {
    const card = document.createElement("article");
    card.className = "flavor-card";
    card.dataset.id = flavor.id;
    card.dataset.status = flavor.status;
    card.dataset.name = flavor.name.toLowerCase();
    card.dataset.tags = (flavor.tags || []).join(" ").toLowerCase();
    card.dataset.flavor = (flavor.flavor || "").toLowerCase();
    card.dataset.desc = (flavor.desc || "").toLowerCase();

    const accentColor = flavor.color || "#00a550";
    const textColor = contrastText(accentColor);

    const tagsHtml = (flavor.tags || [])
      .slice(0, 3)
      .map((t) => `<span class="tag">${escHtml(t)}</span>`)
      .join("");

    card.innerHTML = `
      <div class="card-accent" style="background:${escHtml(accentColor)}"></div>
      <div class="card-header">
        <span class="card-emoji" aria-hidden="true">${escHtml(flavor.emoji || "🟢")}</span>
        <div class="card-title-wrap">
          <div class="card-name">${escHtml(flavor.name)}</div>
          <div class="card-year">Introduced: ${escHtml(flavor.year)}</div>
          ${badgeHtml(flavor.status)}
        </div>
      </div>
      <div class="card-body">
        <p class="card-desc">${escHtml(flavor.desc)}</p>
      </div>
      ${tagsHtml ? `<div class="card-footer">${tagsHtml}</div>` : ""}
    `;

    card.addEventListener("click", () => openModal(flavor));
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openModal(flavor);
      }
    });
    card.setAttribute("tabindex", "0");
    card.setAttribute("role", "button");
    card.setAttribute("aria-label", `View details for ${flavor.name}`);

    return card;
  }

  /* ------------------------------------------------------------------ */
  /*  Render grids                                                        */
  /* ------------------------------------------------------------------ */

  function renderGrid(containerId, statusFilter) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const flavors = DEW_FLAVORS.filter((f) => f.status === statusFilter);
    const frag = document.createDocumentFragment();
    flavors.forEach((f) => frag.appendChild(buildCard(f)));
    container.appendChild(frag);
  }

  /* ------------------------------------------------------------------ */
  /*  Hero stats                                                          */
  /* ------------------------------------------------------------------ */

  function updateStats() {
    const counts = { current: 0, discontinued: 0, limited: 0 };
    DEW_FLAVORS.forEach((f) => {
      if (counts[f.status] !== undefined) counts[f.status]++;
    });
    const el = (id) => document.getElementById(id);
    if (el("stat-current")) el("stat-current").textContent = counts.current;
    if (el("stat-discontinued")) el("stat-discontinued").textContent = counts.discontinued;
    if (el("stat-limited")) el("stat-limited").textContent = counts.limited;
  }

  /* ------------------------------------------------------------------ */
  /*  Timeline                                                            */
  /* ------------------------------------------------------------------ */

  function renderTimeline() {
    const container = document.getElementById("timeline-list");
    if (!container) return;

    const sorted = [...TIMELINE_EVENTS].sort((a, b) =>
      parseInt(a.year) - parseInt(b.year)
    );

    const frag = document.createDocumentFragment();
    sorted.forEach((ev) => {
      const item = document.createElement("div");
      item.className = "timeline-item";
      item.innerHTML = `
        <div class="timeline-year">${escHtml(ev.year)}</div>
        <div class="timeline-title">${escHtml(ev.title)}</div>
        <div class="timeline-body">${escHtml(ev.body)}</div>
      `;
      frag.appendChild(item);
    });
    container.appendChild(frag);
  }

  /* ------------------------------------------------------------------ */
  /*  Trivia                                                              */
  /* ------------------------------------------------------------------ */

  function renderTrivia() {
    const container = document.getElementById("trivia-list");
    if (!container) return;

    const frag = document.createDocumentFragment();
    TRIVIA.forEach((fact) => {
      const li = document.createElement("li");
      li.textContent = fact;
      frag.appendChild(li);
    });
    container.appendChild(frag);
  }

  /* ------------------------------------------------------------------ */
  /*  Search                                                              */
  /* ------------------------------------------------------------------ */

  function initSearch() {
    const input = document.getElementById("search-input");
    const countEl = document.getElementById("search-count");
    if (!input) return;

    input.addEventListener("input", debounce(handleSearch, 200));

    function handleSearch() {
      const query = input.value.trim().toLowerCase();
      const allCards = $$(".flavor-card");

      if (!query) {
        allCards.forEach((card) => card.classList.remove("hidden"));
        if (countEl) countEl.textContent = "";
        return;
      }

      let visible = 0;
      allCards.forEach((card) => {
        const haystack = [
          card.dataset.name,
          card.dataset.tags,
          card.dataset.flavor,
          card.dataset.desc,
          card.dataset.status,
        ].join(" ");
        const match = haystack.includes(query);
        card.classList.toggle("hidden", !match);
        if (match) visible++;
      });

      if (countEl) {
        countEl.textContent =
          visible === 1 ? "1 result" : `${visible} results`;
      }
    }
  }

  /* ------------------------------------------------------------------ */
  /*  Modal                                                               */
  /* ------------------------------------------------------------------ */

  function openModal(flavor) {
    const overlay = document.getElementById("modal-overlay");
    const body = document.getElementById("modal-body");
    if (!overlay || !body) return;

    const details = flavor.details || {};

    const metaRows = [
      details.introduced && `<div class="modal-meta-row"><strong>Introduced:</strong> ${escHtml(details.introduced)}</div>`,
      details.discontinued && `<div class="modal-meta-row"><strong>Discontinued:</strong> ${escHtml(details.discontinued)}</div>`,
      details.manufacturer && `<div class="modal-meta-row"><strong>Manufacturer:</strong> ${escHtml(details.manufacturer)}</div>`,
      flavor.flavor && `<div class="modal-meta-row"><strong>Flavor Profile:</strong> ${escHtml(flavor.flavor)}</div>`,
      details.caffeine && `<div class="modal-meta-row"><strong>Caffeine:</strong> ${escHtml(details.caffeine)}</div>`,
      details.calories && `<div class="modal-meta-row"><strong>Calories:</strong> ${escHtml(details.calories)}</div>`,
      details.notes && `<div class="modal-meta-row"><strong>Notes:</strong> ${escHtml(details.notes)}</div>`,
    ]
      .filter(Boolean)
      .join("");

    const tagsHtml = (flavor.tags || [])
      .map((t) => `<span class="tag">${escHtml(t)}</span>`)
      .join("");

    body.innerHTML = `
      <div class="modal-emoji" aria-hidden="true">${escHtml(flavor.emoji || "🟢")}</div>
      <div class="modal-name">${escHtml(flavor.name)}</div>
      <div class="modal-year">${escHtml(flavor.year)} &nbsp;|&nbsp; ${badgeHtml(flavor.status)}</div>
      <p class="modal-desc">${escHtml(flavor.desc)}</p>
      <div class="modal-meta">${metaRows}</div>
      ${tagsHtml ? `<div class="modal-tags">${tagsHtml}</div>` : ""}
    `;

    overlay.removeAttribute("hidden");
    document.body.style.overflow = "hidden";

    // Focus the close button for accessibility
    const closeBtn = document.getElementById("modal-close");
    if (closeBtn) closeBtn.focus();
  }

  function closeModal() {
    const overlay = document.getElementById("modal-overlay");
    if (overlay) overlay.setAttribute("hidden", "");
    document.body.style.overflow = "";
  }

  function initModal() {
    const overlay = document.getElementById("modal-overlay");
    const closeBtn = document.getElementById("modal-close");

    if (closeBtn) closeBtn.addEventListener("click", closeModal);

    if (overlay) {
      overlay.addEventListener("click", (e) => {
        if (e.target === overlay) closeModal();
      });
    }

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeModal();
    });
  }

  /* ------------------------------------------------------------------ */
  /*  Utility: debounce                                                   */
  /* ------------------------------------------------------------------ */

  function debounce(fn, delay) {
    let timer;
    return function (...args) {
      clearTimeout(timer);
      timer = setTimeout(() => fn.apply(this, args), delay);
    };
  }

  /* ------------------------------------------------------------------ */
  /*  Scroll animations (Intersection Observer)                          */
  /* ------------------------------------------------------------------ */

  function initScrollAnimations() {
    if (!window.IntersectionObserver) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    $$(".wiki-section").forEach((section) => {
      section.style.opacity = "0";
      section.style.transform = "translateY(30px)";
      section.style.transition = "opacity 0.5s ease, transform 0.5s ease";
      observer.observe(section);
    });
  }

  /* ------------------------------------------------------------------ */
  /*  Active nav link on scroll                                           */
  /* ------------------------------------------------------------------ */

  function initActiveNav() {
    const sections = $$("article[id], section[id]");
    const navLinks = $$(".main-nav a");

    if (!sections.length || !navLinks.length) return;

    const onScroll = debounce(() => {
      let current = "";
      sections.forEach((sec) => {
        const top = sec.getBoundingClientRect().top;
        if (top <= 120) current = sec.id;
      });

      navLinks.forEach((link) => {
        const href = link.getAttribute("href");
        link.classList.toggle("active-nav", href === `#${current}`);
      });
    }, 100);

    window.addEventListener("scroll", onScroll, { passive: true });
  }

  /* ------------------------------------------------------------------ */
  /*  Init                                                                */
  /* ------------------------------------------------------------------ */

  document.addEventListener("DOMContentLoaded", function () {
    renderGrid("current-grid", "current");
    renderGrid("discontinued-grid", "discontinued");
    renderGrid("limited-grid", "limited");
    renderTimeline();
    renderTrivia();
    updateStats();
    initSearch();
    initModal();
    initScrollAnimations();
    initActiveNav();
  });
})();
