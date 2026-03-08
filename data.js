/* data.js – Mountain Dew Wiki flavor database */

const DEW_FLAVORS = [
  /* ===================== CURRENT ===================== */
  {
    id: "original",
    name: "Mountain Dew (Original)",
    year: "1940 / 1964",
    status: "current",
    emoji: "🟡",
    color: "#f5e642",
    flavor: "Citrus",
    desc: "The flagship citrus soda that started it all. A bright yellow-green carbonated drink with a bold, tangy citrus flavor — a blend of orange, lemon, and lime with a hint of sweetness. Originally crafted as a whiskey mixer in Appalachia, reformulated by PepsiCo in 1964.",
    tags: ["citrus", "original", "flagship"],
    details: {
      introduced: "1940 (regional), 1964 (national)",
      manufacturer: "PepsiCo",
      caffeine: "54 mg / 12 oz",
      calories: "170 / 12 oz",
      discontinued: null,
      notes: "Available worldwide. The base formula has been tweaked several times over the decades. Known outside North America as 'Mountain Dew Citrus Blast' in some markets."
    }
  },
  {
    id: "diet",
    name: "Diet Mountain Dew",
    year: "1988",
    status: "current",
    emoji: "🔵",
    color: "#4a90d9",
    flavor: "Citrus (Diet)",
    desc: "The zero-sugar version of the original Mountain Dew. Uses a blend of aspartame and acesulfame potassium to deliver the classic Dew taste without calories. One of the best-selling diet sodas in the United States.",
    tags: ["citrus", "diet", "zero-sugar"],
    details: {
      introduced: "1988",
      manufacturer: "PepsiCo",
      caffeine: "54 mg / 12 oz",
      calories: "0 / 12 oz",
      notes: "Known as 'Diet Dew' by fans. Has maintained a loyal following since launch."
    }
  },
  {
    id: "code-red",
    name: "Mountain Dew Code Red",
    year: "2001",
    status: "current",
    emoji: "🔴",
    color: "#e8001c",
    flavor: "Cherry Citrus",
    desc: "The first major flavor extension of Mountain Dew. Code Red combines cherry flavor with the classic Mountain Dew citrus base, producing a vivid red soda. It became a massive hit upon release and is considered one of the most successful soda launches of the 2000s.",
    tags: ["cherry", "citrus", "red"],
    details: {
      introduced: "2001",
      manufacturer: "PepsiCo",
      caffeine: "54 mg / 12 oz",
      calories: "170 / 12 oz",
      notes: "Sparked the wave of new Dew flavors in the 2000s. A Diet Code Red also exists."
    }
  },
  {
    id: "voltage",
    name: "Mountain Dew Voltage",
    year: "2008",
    status: "current",
    emoji: "⚡",
    color: "#003cb3",
    flavor: "Raspberry Citrus with Ginseng",
    desc: "A bright blue soda with a bold raspberry-citrus taste and a ginseng boost. Voltage was the winner of the first DEWmocracy fan vote in 2008, chosen over Revolution and Supernova. Its electric blue color and tart berry flavor made it an instant fan favorite.",
    tags: ["raspberry", "citrus", "blue", "ginseng", "dewmocracy"],
    details: {
      introduced: "2008",
      manufacturer: "PepsiCo",
      caffeine: "55 mg / 12 oz",
      calories: "170 / 12 oz",
      notes: "Won DEWmocracy 1 fan vote. Has remained a permanent flavor since."
    }
  },
  {
    id: "livewire",
    name: "Mountain Dew LiveWire",
    year: "2003",
    status: "current",
    emoji: "🟠",
    color: "#ff6b00",
    flavor: "Orange",
    desc: "A vibrant orange-flavored Mountain Dew with the brand's signature citrus edge. LiveWire was originally launched as a summer limited edition in 2003 and was so popular that it was made permanent. It has a bright orange hue and a sweet, citrusy orange taste.",
    tags: ["orange", "citrus"],
    details: {
      introduced: "2003 (summer limited), permanent 2004",
      manufacturer: "PepsiCo",
      caffeine: "55 mg / 12 oz",
      calories: "170 / 12 oz",
      notes: "Started as a limited summer flavor, earned permanent status due to popularity."
    }
  },
  {
    id: "baja-blast",
    name: "Mountain Dew Baja Blast",
    year: "2004",
    status: "current",
    emoji: "🌊",
    color: "#00a99d",
    flavor: "Tropical Lime",
    desc: "Originally created exclusively for Taco Bell restaurants, Baja Blast is a tropical lime-flavored Mountain Dew with an instantly recognizable teal-blue color. Its unique appearance comes from a special blue dye added to the green Mountain Dew base. It became so popular that PepsiCo began selling it in bottles and cans.",
    tags: ["tropical", "lime", "teal", "taco bell"],
    details: {
      introduced: "2004",
      manufacturer: "PepsiCo",
      caffeine: "54 mg / 12 oz",
      calories: "160 / 12 oz",
      notes: "Originally a Taco Bell exclusive (fountain). Bottled/canned versions released as limited editions starting 2014, permanent since 2023."
    }
  },
  {
    id: "white-out",
    name: "Mountain Dew White Out",
    year: "2010",
    status: "current",
    emoji: "⚪",
    color: "#e8e8e8",
    flavor: "Smooth Citrus",
    desc: "A smooth, lightly cloudy citrus soda with a softer, more mellow taste compared to the original Mountain Dew. White Out won the DEWmocracy 2 fan vote in 2010, beating out Typhoon and Distortion. Its slightly opaque appearance and refreshing, clean citrus profile set it apart.",
    tags: ["citrus", "smooth", "white", "dewmocracy"],
    details: {
      introduced: "2010",
      manufacturer: "PepsiCo",
      caffeine: "54 mg / 12 oz",
      calories: "170 / 12 oz",
      notes: "Won DEWmocracy 2 fan vote. Remained permanent after the campaign."
    }
  },
  {
    id: "zero-sugar",
    name: "Mountain Dew Zero Sugar",
    year: "2020",
    status: "current",
    emoji: "🟢",
    color: "#00a550",
    flavor: "Citrus (Zero Sugar)",
    desc: "Launched in 2020 as a reformulated, improved zero-sugar option meant to more closely replicate the taste of original Mountain Dew compared to Diet Mountain Dew. Mountain Dew Zero Sugar uses a different sweetener blend and is often praised as tasting closer to the original.",
    tags: ["citrus", "zero-sugar", "diet"],
    details: {
      introduced: "January 2020",
      manufacturer: "PepsiCo",
      caffeine: "68 mg / 12 oz",
      calories: "0 / 12 oz",
      notes: "Contains more caffeine than regular Mountain Dew. Often ranked as one of the best-tasting zero-sugar sodas."
    }
  },
  {
    id: "major-melon",
    name: "Mountain Dew Major Melon",
    year: "2021",
    status: "current",
    emoji: "🍈",
    color: "#ff6eb4",
    flavor: "Watermelon",
    desc: "A bold watermelon-flavored Mountain Dew with a bright pink hue. Major Melon was launched in January 2021, featuring an ad campaign that ran during Super Bowl LV. It became a permanent addition to the lineup and also spawned a zero-sugar variant.",
    tags: ["watermelon", "pink", "fruit"],
    details: {
      introduced: "January 2021",
      manufacturer: "PepsiCo",
      caffeine: "54 mg / 12 oz",
      calories: "170 / 12 oz",
      notes: "First Mountain Dew to be advertised during the Super Bowl. Zero Sugar version also available."
    }
  },
  {
    id: "game-fuel-charged",
    name: "MTN DEW AMP Game Fuel (Charged Cherry Burst)",
    year: "2019",
    status: "current",
    emoji: "🎮",
    color: "#c0392b",
    flavor: "Cherry Burst",
    desc: "A gaming-targeted caffeinated citrus/cherry soda under the MTN DEW Game Fuel brand. Reformulated in 2019 with 90mg of caffeine, theanine, and vitamins A and B. The can features a specially designed grip texture for gamers.",
    tags: ["cherry", "energy", "gaming", "caffeinated"],
    details: {
      introduced: "2019 (reformulated)",
      manufacturer: "PepsiCo",
      caffeine: "90 mg / 16 oz",
      calories: "90 / 16 oz",
      notes: "The Game Fuel line targets esports and gaming culture. Multiple flavor variants exist."
    }
  },

  /* ===================== DISCONTINUED ===================== */
  {
    id: "pitch-black",
    name: "Mountain Dew Pitch Black",
    year: "2004",
    status: "discontinued",
    emoji: "🖤",
    color: "#3a0066",
    flavor: "Grape Citrus",
    desc: "A dark purple, grape-flavored Mountain Dew originally released in October 2004 as a Halloween limited edition. It proved so popular it was brought back multiple times — in 2005, 2011, 2015, and periodically since. Its deep purple-black color and grape-citrus flavor make it one of the most beloved discontinued Dew flavors.",
    tags: ["grape", "purple", "halloween", "citrus"],
    details: {
      introduced: "October 2004",
      discontinued: "Periodically discontinued and re-released",
      manufacturer: "PepsiCo",
      caffeine: "54 mg / 12 oz",
      calories: "170 / 12 oz",
      notes: "One of the most requested \"bring it back\" flavors. Has returned multiple times as a limited edition."
    }
  },
  {
    id: "supernova",
    name: "Mountain Dew Supernova",
    year: "2008",
    status: "discontinued",
    emoji: "🌸",
    color: "#e91e8c",
    flavor: "Strawberry Melon Citrus",
    desc: "A pink/magenta-colored Mountain Dew with strawberry melon citrus flavor. Supernova was one of three contenders in the DEWmocracy 1 fan vote in 2008 (alongside Voltage and Revolution). It finished 3rd but earned a cult following. It was later brought back as a limited edition.",
    tags: ["strawberry", "melon", "pink", "dewmocracy"],
    details: {
      introduced: "2008",
      discontinued: "2008 (re-released limited editions)",
      manufacturer: "PepsiCo",
      caffeine: "54 mg / 12 oz",
      notes: "Lost to Voltage in the DEWmocracy vote but gained a devoted fan base."
    }
  },
  {
    id: "revolution",
    name: "Mountain Dew Revolution",
    year: "2008",
    status: "discontinued",
    emoji: "💜",
    color: "#6b2d8b",
    flavor: "Wild Berry Citrus",
    desc: "A purple wild berry citrus soda created for the DEWmocracy 1 campaign in 2008. Revolution was one of three fan-vote candidates. It finished 2nd, losing to Voltage, and was discontinued after the promotion ended.",
    tags: ["wild berry", "purple", "dewmocracy"],
    details: {
      introduced: "2008",
      discontinued: "2008",
      manufacturer: "PepsiCo",
      notes: "Runner-up in DEWmocracy 1 vote."
    }
  },
  {
    id: "typhoon",
    name: "Mountain Dew Typhoon",
    year: "2010",
    status: "discontinued",
    emoji: "🌀",
    color: "#e77d27",
    flavor: "Tropical Punch Citrus",
    desc: "A tropical punch-flavored Mountain Dew created for the DEWmocracy 2 campaign in 2010. Typhoon had a vibrant orange color and a fruity punch taste. It narrowly lost the fan vote to White Out.",
    tags: ["tropical", "punch", "orange", "dewmocracy"],
    details: {
      introduced: "2010",
      discontinued: "2010",
      manufacturer: "PepsiCo",
      notes: "Runner-up in DEWmocracy 2 behind White Out."
    }
  },
  {
    id: "distortion",
    name: "Mountain Dew Distortion",
    year: "2010",
    status: "discontinued",
    emoji: "💚",
    color: "#5bc85b",
    flavor: "Lime Citrus",
    desc: "A lime-flavored Mountain Dew created as one of three candidates for the DEWmocracy 2 campaign in 2010. It had a bright green color and a tart lime punch flavor, finishing 3rd in the fan vote.",
    tags: ["lime", "green", "dewmocracy"],
    details: {
      introduced: "2010",
      discontinued: "2010",
      manufacturer: "PepsiCo",
      notes: "Finished 3rd in DEWmocracy 2."
    }
  },
  {
    id: "mountain-dew-throwback",
    name: "Mountain Dew Throwback",
    year: "2009",
    status: "discontinued",
    emoji: "🕰️",
    color: "#f5e642",
    flavor: "Original Citrus (Real Sugar)",
    desc: "A retro version of Mountain Dew made with real cane sugar instead of high-fructose corn syrup. It featured vintage-style packaging recalling the original Willy the Hillbilly era. Originally a limited release in 2009 and 2010, it returned for longer periods and was quite popular among fans who preferred the natural sugar taste.",
    tags: ["citrus", "real sugar", "retro", "limited"],
    details: {
      introduced: "2009",
      discontinued: "Periodically available",
      manufacturer: "PepsiCo",
      notes: "Used real cane sugar. Fans often preferred its taste to the HFCS version."
    }
  },
  {
    id: "game-fuel-original",
    name: "Mountain Dew Game Fuel (Original)",
    year: "2007",
    status: "discontinued",
    emoji: "🎯",
    color: "#c84b00",
    flavor: "Citrus Cherry",
    desc: "The original Game Fuel, launched in 2007 as a limited promotional flavor for Halo 3. It had a red-orange color and citrus cherry taste with extra caffeine. The Halo 3 tie-in made it enormously popular, and the Game Fuel brand was later relaunched as a standalone product line.",
    tags: ["cherry", "citrus", "halo", "gaming", "limited"],
    details: {
      introduced: "2007",
      discontinued: "2007 (original; brand relaunched 2019)",
      manufacturer: "PepsiCo",
      notes: "Co-branded with Halo 3. One of the first major video game soda crossovers."
    }
  },
  {
    id: "kickstart-original",
    name: "Mountain Dew Kickstart (Original)",
    year: "2013",
    status: "discontinued",
    emoji: "☀️",
    color: "#ff8800",
    flavor: "Orange Citrus (with juice)",
    desc: "Launched in 2013 as a lightly caffeinated 'morning energy drink' alternative, Kickstart contained 5% juice and was positioned between a soda and an energy drink. It grew into a substantial line with many flavors before being discontinued in 2023.",
    tags: ["orange", "juice", "energy", "morning"],
    details: {
      introduced: "2013",
      discontinued: "2023 (entire Kickstart line)",
      manufacturer: "PepsiCo",
      caffeine: "90 mg / 16 oz",
      notes: "The Kickstart line eventually included over a dozen flavors. Discontinued in 2023."
    }
  },
  {
    id: "black-label",
    name: "Mountain Dew Black Label",
    year: "2016",
    status: "discontinued",
    emoji: "🖤",
    color: "#1a1a2e",
    flavor: "Dark Berry",
    desc: "A premium, craft-style Mountain Dew with dark berry flavor and a sleek black label. It was positioned as a more sophisticated soda aimed at adult consumers. It had a unique herbal bite alongside its berry citrus notes.",
    tags: ["dark berry", "craft", "premium"],
    details: {
      introduced: "2016",
      discontinued: "2017",
      manufacturer: "PepsiCo",
      notes: "Part of Mountain Dew's 'Label Series' exploring craft-inspired flavors."
    }
  },
  {
    id: "ice",
    name: "Mountain Dew Ice",
    year: "2018",
    status: "discontinued",
    emoji: "🧊",
    color: "#c8f0ff",
    flavor: "Lemon Lime (Clear)",
    desc: "A clear, lemon-lime flavored Mountain Dew launched in 2018. It was created to compete with Sprite and 7UP in the clear soda space. Despite initial popularity, it was discontinued. Mountain Dew Ice had no color and a crisp, light citrus taste.",
    tags: ["lemon lime", "clear", "light"],
    details: {
      introduced: "January 2018",
      discontinued: "2019",
      manufacturer: "PepsiCo",
      caffeine: "0 mg (caffeine-free)",
      notes: "One of the rare caffeine-free Mountain Dew variants. Clear soda competing with Sprite/7UP."
    }
  },
  {
    id: "spark",
    name: "Mountain Dew Spark",
    year: "2021",
    status: "discontinued",
    emoji: "🌸",
    color: "#ff9ec8",
    flavor: "Raspberry Lemonade",
    desc: "A raspberry lemonade-flavored Mountain Dew with a pink/rose color. Originally launched as a Walmart exclusive, Spark had a bright, tart berry-lemon flavor. It was popular enough to be widely released but was later discontinued.",
    tags: ["raspberry", "lemonade", "pink", "walmart"],
    details: {
      introduced: "2021",
      discontinued: "2023",
      manufacturer: "PepsiCo",
      notes: "Originally a Walmart exclusive. Wider distribution followed."
    }
  },
  {
    id: "maui-burst",
    name: "Mountain Dew Maui Burst",
    year: "2019",
    status: "discontinued",
    emoji: "🍍",
    color: "#ffcc00",
    flavor: "Pineapple Citrus",
    desc: "A tropical pineapple-flavored Mountain Dew originally launched as a Dollar General exclusive. Its bright yellow color and pineapple citrus flavor were well-received. It moved to wider availability before being discontinued.",
    tags: ["pineapple", "tropical", "yellow", "dollar general"],
    details: {
      introduced: "2019",
      discontinued: "2022",
      manufacturer: "PepsiCo",
      notes: "Started as a Dollar General exclusive. Later available more broadly."
    }
  },

  /* ===================== LIMITED / SEASONAL ===================== */
  {
    id: "baja-flash",
    name: "Mountain Dew Baja Flash",
    year: "2021",
    status: "limited",
    emoji: "🌺",
    color: "#ff7eb9",
    flavor: "Pineapple Coconut",
    desc: "A pineapple-coconut flavored variant of Baja Blast, released as a summer limited edition. Baja Flash features a white/pink color inspired by pina coladas. It was first released as a Taco Bell exclusive alongside Baja Punch before broader canned release.",
    tags: ["pineapple", "coconut", "tropical", "baja", "summer"],
    details: {
      introduced: "2021",
      discontinued: "Seasonal limited",
      manufacturer: "PepsiCo",
      notes: "Part of the expanding Baja flavor family. Returns seasonally."
    }
  },
  {
    id: "baja-punch",
    name: "Mountain Dew Baja Punch",
    year: "2021",
    status: "limited",
    emoji: "🍊",
    color: "#ff5722",
    flavor: "Orange Citrus",
    desc: "An orange citrus-flavored variant of Baja Blast with a bright orange hue, launched as a Taco Bell and retail limited edition. Baja Punch is sweeter and more citrus-forward than the original Baja Blast.",
    tags: ["orange", "citrus", "baja", "taco bell"],
    details: {
      introduced: "2021",
      discontinued: "Seasonal limited",
      manufacturer: "PepsiCo",
      notes: "Released alongside Baja Flash as part of the Baja variety expansion."
    }
  },
  {
    id: "baja-gold",
    name: "Mountain Dew Baja Gold",
    year: "2023",
    status: "limited",
    emoji: "⭐",
    color: "#ffd700",
    flavor: "Pineapple Citrus",
    desc: "A golden yellow Baja variant with a pineapple-citrus flavor profile. Baja Gold was released as a summer limited edition, adding to the growing Baja family lineup with its bright golden color and tropical taste.",
    tags: ["pineapple", "citrus", "baja", "gold", "summer"],
    details: {
      introduced: "Summer 2023",
      discontinued: "Seasonal limited",
      manufacturer: "PepsiCo",
      notes: "Third variety in the expanding Baja line beyond the original Baja Blast."
    }
  },
  {
    id: "voodew",
    name: "Mountain Dew VooDEW",
    year: "2019",
    status: "limited",
    emoji: "🎃",
    color: "#ff9900",
    flavor: "Mystery (changes yearly)",
    desc: "An annual Halloween mystery flavor that Mountain Dew fans try to guess each fall. The white/cream-colored soda has featured different flavors each year — from candy corn and fruit candy to caramel apple and more. Guessing the flavor has become a fan tradition every October.",
    tags: ["mystery", "halloween", "seasonal", "white"],
    details: {
      introduced: "2019",
      discontinued: "Seasonal (annual Halloween release)",
      manufacturer: "PepsiCo",
      notes: "The mystery flavor is revealed after Halloween. Past flavors include candy corn, fruit candy, caramel apple, and others."
    }
  },
  {
    id: "holiday-brew",
    name: "Mountain Dew Holiday Brew",
    year: "2019",
    status: "limited",
    emoji: "🎄",
    color: "#c8001e",
    flavor: "Cherry",
    desc: "A holiday-themed red Mountain Dew released each winter. Mountain Dew Holiday Brew has a cherry flavor with seasonal packaging. It often comes packaged in a 12-pack with festive designs.",
    tags: ["cherry", "red", "christmas", "seasonal"],
    details: {
      introduced: "2019",
      discontinued: "Seasonal (annual winter release)",
      manufacturer: "PepsiCo",
      notes: "Returns every holiday season, similar to VooDEW for Halloween."
    }
  },
  {
    id: "major-melon-zero",
    name: "Mountain Dew Major Melon Zero Sugar",
    year: "2021",
    status: "limited",
    emoji: "🍉",
    color: "#c71585",
    flavor: "Watermelon (Zero Sugar)",
    desc: "The zero-sugar version of Major Melon, delivering the same bold watermelon flavor without any calories. Released shortly after the original Major Melon as part of the brand's push for zero-sugar variants of popular flavors.",
    tags: ["watermelon", "zero-sugar", "pink"],
    details: {
      introduced: "2021",
      discontinued: "Periodically available",
      manufacturer: "PepsiCo",
      caffeine: "54 mg / 12 oz",
      calories: "0 / 12 oz"
    }
  },
  {
    id: "violet",
    name: "Mountain Dew Violet",
    year: "2011",
    status: "limited",
    emoji: "🫐",
    color: "#4b0082",
    flavor: "Blueberry Pomegranate",
    desc: "A deep purple Mountain Dew with blueberry and pomegranate flavors, released in Japan and select Asian markets. Mountain Dew Violet became popular abroad and a sought-after import among American fans.",
    tags: ["blueberry", "pomegranate", "purple", "japan", "international"],
    details: {
      introduced: "2011",
      discontinued: "Limited/regional",
      manufacturer: "PepsiCo Japan",
      notes: "Released in Japan. Popular import among Dew enthusiasts."
    }
  },
  {
    id: "citrus-cherry",
    name: "Mountain Dew Citrus Cherry",
    year: "2016",
    status: "limited",
    emoji: "🍒",
    color: "#dc143c",
    flavor: "Citrus Cherry",
    desc: "A cherry-citrus variant released as part of the DEWcision 2016 fan campaign, pitting it against a revived Baja Blast and a new flavor in a three-way vote. Featured a bright red-orange color with a tart cherry-citrus profile.",
    tags: ["cherry", "citrus", "red", "dewcision"],
    details: {
      introduced: "2016",
      discontinued: "2016",
      manufacturer: "PepsiCo",
      notes: "Part of DEWcision 2016 promotion."
    }
  },
  {
    id: "liberty-brew",
    name: "Mountain Dew Liberty Brew",
    year: "2019",
    status: "limited",
    emoji: "🇺🇸",
    color: "#1a4bc4",
    flavor: "50-Flavor Blend",
    desc: "A patriotic blue Mountain Dew released for the 4th of July 2019 that allegedly blended 50 different flavors — one for each US state. It had a striking blue color (created for the patriotic theme) and a complex, sweet fruit taste.",
    tags: ["blue", "4th of july", "patriotic", "seasonal"],
    details: {
      introduced: "Summer 2019",
      discontinued: "2019",
      manufacturer: "PepsiCo",
      notes: "Marketed as containing 50 different flavors (one per US state)."
    }
  },
  {
    id: "uproar",
    name: "Mountain Dew Uproar",
    year: "2022",
    status: "limited",
    emoji: "🥭",
    color: "#ff7043",
    flavor: "Mango Heat",
    desc: "A mango-flavored Mountain Dew with a hint of spice (capsaicin heat). Uproar was part of MTN DEW's adventurous limited-edition lineup, exploring spicy-sweet flavor territory. Released in 2022 as a fan engagement release.",
    tags: ["mango", "spicy", "heat", "tropical"],
    details: {
      introduced: "2022",
      discontinued: "2022",
      manufacturer: "PepsiCo",
      notes: "Part of the growing trend of spicy sodas."
    }
  }
];

const TIMELINE_EVENTS = [
  {
    year: "1940",
    title: "Mountain Dew is Created",
    body: "Brothers Barney and Ally Hartman create Mountain Dew in Knoxville, Tennessee as a whiskey mixer. The name is Appalachian slang for moonshine."
  },
  {
    year: "1961",
    title: "Tip Corporation Acquires Brand",
    body: "Tip Corporation of Marion, Virginia acquires the brand and launches a reformulated version with Willy the Hillbilly mascot and the 'Yahoo Mountain Dew!' tagline."
  },
  {
    year: "1964",
    title: "PepsiCo Acquires Mountain Dew",
    body: "PepsiCo purchases Mountain Dew from Tip Corporation and begins nationwide distribution. The formula and branding are revised to appeal to a broader market."
  },
  {
    year: "1969",
    title: "National Rollout",
    body: "Mountain Dew is distributed nationally across the United States for the first time under PepsiCo ownership."
  },
  {
    year: "1988",
    title: "Diet Mountain Dew Launches",
    body: "Diet Mountain Dew is introduced, greatly expanding the brand's consumer base and establishing it as one of the top-selling diet sodas in America."
  },
  {
    year: "1992",
    title: "'Do the Dew' Campaign Begins",
    body: "The iconic 'Do the Dew' marketing campaign launches, associating Mountain Dew with extreme sports, Gen X youth culture, and outdoor adventure."
  },
  {
    year: "2001",
    title: "Mountain Dew Code Red",
    body: "The first major flavor extension launches — Code Red (cherry citrus). It becomes one of the most successful soda launches of the decade and opens the floodgates for future flavor variants."
  },
  {
    year: "2003",
    title: "Mountain Dew LiveWire",
    body: "LiveWire, an orange-flavored Mountain Dew, launches as a summer limited edition. Its popularity earns it permanent status the following year."
  },
  {
    year: "2004",
    title: "Baja Blast Hits Taco Bell",
    body: "Mountain Dew Baja Blast is created exclusively for Taco Bell restaurants. Its unique teal-blue color and tropical lime flavor make it a fan sensation."
  },
  {
    year: "2004",
    title: "Pitch Black – First Halloween Flavor",
    body: "Mountain Dew Pitch Black, a grape-citrus soda, launches as the first Halloween limited edition. Its popularity leads to multiple re-releases over the next two decades."
  },
  {
    year: "2007",
    title: "Game Fuel – Halo 3 Partnership",
    body: "Mountain Dew Game Fuel launches as a limited edition tied to the Halo 3 video game release. This groundbreaking gaming partnership shapes future brand strategy."
  },
  {
    year: "2008",
    title: "DEWmocracy 1 – Voltage Wins",
    body: "The first DEWmocracy fan-vote campaign pits Voltage, Revolution, and Supernova against each other. Voltage (raspberry citrus with ginseng) wins and becomes a permanent flavor."
  },
  {
    year: "2009",
    title: "MTN DEW Rebrand",
    body: "PepsiCo redesigns the Mountain Dew logo, officially stylizing it as 'MTN DEW'. This modern branding is still in use today."
  },
  {
    year: "2010",
    title: "DEWmocracy 2 – White Out Wins",
    body: "The second DEWmocracy vote features White Out, Typhoon, and Distortion. White Out (smooth citrus) wins, becoming a permanent flavor."
  },
  {
    year: "2013",
    title: "Mountain Dew Kickstart Launches",
    body: "Mountain Dew Kickstart launches as a lightly caffeinated, juice-containing morning energy drink. It grows into a large product line with many flavors."
  },
  {
    year: "2018",
    title: "Mountain Dew Ice – Clear Soda",
    body: "Mountain Dew Ice launches as a clear, caffeine-free lemon-lime soda. A rare departure from the brand's signature neon colors."
  },
  {
    year: "2019",
    title: "Game Fuel Line Relaunch",
    body: "MTN DEW AMP Game Fuel relaunches as a dedicated gaming energy drink line with elevated caffeine, theanine, and vitamins. Features grip-textured cans designed for gamers."
  },
  {
    year: "2019",
    title: "VooDEW – Annual Mystery Flavor",
    body: "The first VooDEW mystery Halloween flavor launches, starting an annual fan tradition of guessing the secret flavor each October."
  },
  {
    year: "2020",
    title: "Mountain Dew Zero Sugar",
    body: "Mountain Dew Zero Sugar launches, touted as a better-tasting zero-calorie alternative to Diet Mountain Dew, with higher caffeine content."
  },
  {
    year: "2021",
    title: "Major Melon – Super Bowl Debut",
    body: "Mountain Dew Major Melon (watermelon flavor) becomes the first Mountain Dew to advertise during the Super Bowl (Super Bowl LV)."
  },
  {
    year: "2023",
    title: "Baja Blast Goes Permanent",
    body: "After years as a limited/seasonal bottled release, Mountain Dew Baja Blast becomes a permanent addition to the bottled/canned lineup alongside its Taco Bell exclusivity."
  }
];

const TRIVIA = [
  "The name 'Mountain Dew' is an old Appalachian slang term for moonshine whiskey. The drink was literally created as a mixer for whiskey.",
  "The original Mountain Dew label featured a hillbilly cartoon character named 'Willy the Hillbilly' shooting at an outhouse.",
  "Mountain Dew contains more caffeine than most sodas — 54 mg per 12 oz can, compared to Coca-Cola's 34 mg and Pepsi's 38 mg.",
  "Mountain Dew Zero Sugar actually contains MORE caffeine (68 mg per 12 oz) than regular Mountain Dew.",
  "Mountain Dew Baja Blast gets its distinctive teal-blue color from a special dye added to the standard green Mountain Dew base.",
  "The DEWmocracy campaigns let fans vote for permanent new flavors. Three campaigns were held: DEWmocracy 1 (Voltage won, 2008), DEWmocracy 2 (White Out won, 2010), and DEWmocracy 3 (2012).",
  "Mountain Dew is consistently ranked as the #4 best-selling carbonated soft drink in the United States, behind Coca-Cola, Diet Coke, and Pepsi.",
  "Mountain Dew LiveWire was so popular as a 2003 summer limited edition that PepsiCo made it a permanent flavor in 2004.",
  "The Halo 3 Mountain Dew Game Fuel (2007) was one of the first major video game / soda cross-promotions and helped define gaming beverage marketing.",
  "Mountain Dew's annual VooDEW mystery Halloween flavor tradition began in 2019. The mystery flavor is officially revealed after Halloween each year.",
  "PepsiCo purchased Mountain Dew in 1964 for an undisclosed price from Tip Corporation in Marion, Virginia.",
  "Mountain Dew Pitch Black (grape citrus) has been brought back so many times since its 2004 Halloween debut that it has a dedicated fan petition community.",
  "The 'Do the Dew' marketing slogan, launched in 1992, is one of the most recognizable advertising campaigns in soft drink history.",
  "Mountain Dew has released flavors in partnership with video games, including Halo 3, Call of Duty, and World of Warcraft.",
  "Mountain Dew's iconic neon yellow-green color comes from tartrazine (Yellow 5) food dye, which has been used since PepsiCo took over the brand.",
  "Several Mountain Dew flavors (Pitch Black, Throwback, LiveWire) started as limited editions before earning permanent or recurring status due to fan demand.",
  "Mountain Dew's 'Baja' family of flavors (Baja Blast, Baja Flash, Baja Punch, Baja Gold) has grown to include multiple permanent and seasonal variants beyond the original Taco Bell exclusive.",
  "Mountain Dew was originally sold in glass bottles with a hillbilly theme. PepsiCo's rebranding moved it to the sporty, neon aesthetic it has today."
];
