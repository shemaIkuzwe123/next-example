export const CATEGORIES = [
  "All",
  "Table",
  "Lighting",
  "Furniture",
  "Textiles",
  "Objects",
] as const;

export type Category = (typeof CATEGORIES)[number];
export type ProductCategory = Exclude<Category, "All">;

export type Product = {
  id: string;
  name: string;
  category: ProductCategory;
  price: number;
  colorway: string;
  tag?: "Bestseller" | "New" | "Small batch" | "Last few";
  blurb: string;
  description: string;
  details: string[];
  leadTime: string;
};

export const FREE_SHIPPING_THRESHOLD = 150;
export const STANDARD_SHIPPING = 12;

export const products: Product[] = [
  {
    id: "cove-carafe",
    name: "Cove Carafe",
    category: "Table",
    price: 88,
    colorway: "Terracotta",
    tag: "Bestseller",
    blurb: "Hand-thrown stoneware, glazed the colour of late afternoon.",
    description:
      "Thrown on a kick wheel in a two-person studio outside Porto, the Cove Carafe holds just over a litre — enough for the table, not so much that the water goes warm. The matte glaze pools slightly at the shoulder, so no two drip exactly alike.",
    details: [
      "Stoneware, food-safe matte glaze",
      "1.1 L capacity",
      "Hand wash, no dishwasher",
      "Made in Portugal",
    ],
    leadTime: "Ships in 2–3 days",
  },
  {
    id: "dune-lamp",
    name: "Dune Table Lamp",
    category: "Lighting",
    price: 210,
    colorway: "Clay",
    blurb:
      "A low dome of glazed clay that throws light the way a sunset would.",
    description:
      "The Dune is dimmed at the source: the clay dome absorbs most of the bulb's glare and gives back a warm pool of light. It takes a standard E27 bulb and fades from reading-bright to candle-low with the inline dimmer.",
    details: [
      "Glazed stoneware shade, steel stem",
      "E27 socket, inline dimmer",
      "220 × 340 × 340 mm",
      "Assembled in Copenhagen",
    ],
    leadTime: "Ships in 1 week",
  },
  {
    id: "fold-chair",
    name: "Fold Lounge Chair",
    category: "Furniture",
    price: 640,
    colorway: "Oat",
    tag: "New",
    blurb: "A low oak frame with a linen sling you can properly sink into.",
    description:
      "Designed to be the chair you argue over. The frame is solid European oak, joined without visible hardware, and the sling is a heavy washed linen stretched over a single span. When the linen gives out in ten years' time, we sell the replacement — not a new chair.",
    details: [
      "Solid oak frame, OSMO oiled",
      "Washed linen sling, replaceable",
      "720 w × 780 d × 740 h mm",
      "Flat-packed, assembles in 15 min",
    ],
    leadTime: "Ships in 2 weeks",
  },
  {
    id: "ripple-bowl",
    name: "Ripple Bowl",
    category: "Table",
    price: 54,
    colorway: "Moss",
    blurb: "Wide, shallow, and quietly pleased to hold fruit or keys.",
    description:
      "Pressed rather than thrown, the Ripple has concentric rings that catch the light like hand-blown glass — but it is stoneware, and it forgives a dropped pear. Unstack it from the Cove Carafe for a still life that arranges itself.",
    details: [
      "Pressed stoneware, satin glaze",
      "Ø 320 × 90 mm",
      "Dishwasher safe",
      "Made in Portugal",
    ],
    leadTime: "Ships in 2–3 days",
  },
  {
    id: "loom-throw",
    name: "Loom Throw",
    category: "Textiles",
    price: 128,
    colorway: "Rust",
    tag: "Bestseller",
    blurb: "A rust-and-cream weave heavy enough to mean it.",
    description:
      "Woven on a 1920s dobbie loom in the Basque country from undyed wool and a rust weft. At 1.4 kg it is less a blanket than a presence — the kind of throw that stays where you put it. The fringe is knotted by hand and will not unravel.",
    details: [
      "70% wool, 30% cotton",
      "130 × 190 cm, 1.4 kg",
      "Dry clean or air out",
      "Woven in Spain",
    ],
    leadTime: "Ships in 2–3 days",
  },
  {
    id: "pillar-candles",
    name: "Pillar Candle Set",
    category: "Objects",
    price: 32,
    colorway: "Bone",
    blurb: "Three pillars of unscented wax that burn straight down.",
    description:
      "Poured in a family workshop that has made church candles since 1911. The wax is a slow-burning rapeseed blend, unscented, with a cotton wick that needs trimming once. Sold as a set of three heights for arranging without thinking.",
    details: [
      "Set of 3, heights 21 / 15 / 11 cm",
      "Unscented rapeseed wax",
      "Burn time 40–55 h each",
      "Poured in Germany",
    ],
    leadTime: "Ships in 2–3 days",
  },
  {
    id: "arc-vase",
    name: "Arc Vase",
    category: "Objects",
    price: 96,
    colorway: "Ink",
    tag: "Small batch",
    blurb: "A tall black curve. Happy with three dried stems or none.",
    description:
      "Thrown tall and pulled once to give the body its asymmetric bend. The ink glaze is thick and semi-matte, letting the silhouette do the talking. Made in editions of 120 — each one numbered under the base.",
    details: [
      "Glazed stoneware, numbered edition",
      "320 mm tall, watertight",
      "Hand wash",
      "Edition of 120, Netherlands",
    ],
    leadTime: "Ships in 1 week",
  },
  {
    id: "gather-tray",
    name: "Gather Tray",
    category: "Table",
    price: 72,
    colorway: "Oak",
    blurb: "The tray that graduates from breakfast bedside to hallway bowl.",
    description:
      "Steam-bent oak with carved hand slots, oiled to a soft matte finish. It is the object that ends up holding everything else — keys, post, two of the candles above, a lemon. Edges are hand-planed, so it feels older than it is.",
    details: [
      "Steam-bent white oak",
      "420 × 280 × 60 mm",
      "Re-oil yearly",
      "Made in Denmark",
    ],
    leadTime: "Ships in 2–3 days",
  },
  {
    id: "ridge-stool",
    name: "Ridge Stool",
    category: "Furniture",
    price: 280,
    colorway: "Ash",
    tag: "New",
    blurb: "A seat, a side table, a step, whatever the hour demands.",
    description:
      "Turned ash, splayed for stability, finished with a seat spend enough to sit on bare-legged. At 45 cm it sits beside the sofa, under the rail by the door, or in the bath with a book on top. Holds 150 kg and all of your intentions.",
    details: [
      "Solid ash, hard-waxed",
      "Ø 340 × 450 mm",
      "Holds 150 kg",
      "Made in Poland",
    ],
    leadTime: "Ships in 1 week",
  },
  {
    id: "orbit-pendant",
    name: "Orbit Pendant",
    category: "Lighting",
    price: 320,
    colorway: "Parchment",
    blurb:
      "A paper-lantern sphere with a brass core. Soft, even, otherworldly.",
    description:
      "A washi-paper sphere stretched over a slim brass armature, hung from a fabric cord. The light spreads evenly through the paper, so the room reads gauzy and the source disappears. Dimmable with the cord's inline switch.",
    details: [
      "Washi paper, brass armature",
      "Ø 380 mm, cord 300 cm",
      "E27, dimmable",
      "Assembled in Copenhagen",
    ],
    leadTime: "Ships in 2 weeks",
  },
  {
    id: "cloud-cushion",
    name: "Cloud Cushion",
    category: "Textiles",
    price: 84,
    colorway: "Chalk",
    blurb: "Overfilled and unbothered. The good kind of decoration.",
    description:
      "A plump, seam-proud cushion in chalk linen with a brushed cotton back. It is stuffed past the point of etiquette on purpose — it should look like it has already been used. Cover unzips for washing; the partner cushion in rust sold separately.",
    details: [
      "Washed linen, brushed cotton back",
      "550 × 550 mm",
      "Feather-duck insert included",
      "Sewn in Lithuania",
    ],
    leadTime: "Ships in 2–3 days",
  },
  {
    id: "column-table",
    name: "Column Side Table",
    category: "Furniture",
    price: 190,
    colorway: "Travertine finish",
    tag: "Last few",
    blurb: "One fluted column, one round top. Pure postcard.",
    description:
      "A classical column, shrunk and given a matte travertine-finish lacquer over ash. Fluted shaft, round top, no visible joints. Fewer than 40 remain in this run — we will not faux-scold you, but there it is.",
    details: [
      "Ash with mineral finish",
      "Ø 380 × 520 mm",
      "Wipe clean",
      "Made in Italy",
    ],
    leadTime: "Ships in 3–4 days",
  },
];

export function getProduct(id: string) {
  return products.find((p) => p.id === id);
}

export function formatPrice(value: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: value % 1 === 0 ? 0 : 2,
  }).format(value);
}
