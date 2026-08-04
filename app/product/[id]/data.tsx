import { ProductItem } from "../productsData";

export interface ModelDetailSpec {
  height: string;
  weight: string;
  figure: string;
  hair: string;
  eyes: string;
  languages: string;
  timing: string;
  badge: string;
  availableFor: string[];
  bioParagraphs: string[];
}

// Map of high quality fallback portrait photos for models


export function getModelSpecsAndDetails(product: ProductItem): ModelDetailSpec & { displayImage: string } {
  // Spec variations based on ID for variety across models
  const specVariations = [
    { height: "5'3\"", weight: "46 kg", figure: "32-24-33", hair: "Black", eyes: "Brown", languages: "Hindi, English, Marathi" },
    { height: "5'5\"", weight: "49 kg", figure: "34-26-35", hair: "Dark Brown", eyes: "Hazel", languages: "Hindi, English, Telugu" },
    { height: "5'4\"", weight: "48 kg", figure: "34-25-34", hair: "Black", eyes: "Dark Brown", languages: "Hindi, English, Punjabi" },
    { height: "5'6\"", weight: "51 kg", figure: "36-26-36", hair: "Chestnut", eyes: "Brown", languages: "Hindi, English" },
  ];

  const spec = specVariations[(product.id - 1) % specVariations.length];
  const locName = product.city.split("/").pop()?.trim() || product.city;

  const fallbackImg = `/images/image${((product.id - 1) % 16) + 1}.avif`;
  const displayImage = product.image && product.image.trim() !== ""
    ? product.image
    : fallbackImg;

  const bioParagraphs = [
    `${product.name} is proof that youth and wisdom aren't mutually exclusive. At just ${product.age} years old, this ${locName}-based companion brings a maturity that belies her age — the result of growing up in a large joint family where she learned to read people, navigate complex social dynamics, and make everyone feel included.`,
    `Currently pursuing her degree at a top institution in ${locName}, ${product.name} treats companionship as her window into worlds her textbooks can't teach. She's genuinely fascinated by her clients' careers, travels, and life stories — and this authentic curiosity makes conversations with her feel like catching up with a friend rather than performing a service.`,
    `Her petite frame and girl-next-door charm — ${spec.hair.toLowerCase()} hair, warm ${spec.eyes.toLowerCase()} eyes, and a smile that's impossible not to return — make her the most approachable companion on our roster. First-time clients especially appreciate ${product.name} because she dissolves any awkwardness within minutes.`,
    `Available evenings and weekends around her schedule, ${product.name} knows ${locName}'s restaurant scene inside out — from legendary local dining spots to the newest café openings. She's equally happy at a street-food crawl or a proper sit-down dinner.`,
    `Languages: ${spec.languages}. Meet ${product.name} — she'll make your first booking feel like your tenth.`,
  ];

  return {
    height: product.height || spec.height,
    weight: product.weight || spec.weight,
    figure: product.figure || spec.figure,
    hair: product.hair || spec.hair,
    eyes: product.eyes || spec.eyes,
    languages: product.languages?.join(", ") || spec.languages,
    timing: product.timing || "Evenings & Weekends",
    badge: product.badge || "Premium",
    availableFor: product.availableFor || [
      "Club Companion",
      "Party Dates",
      "Dinner Companion",
      "Social Events",
      "Private Meetings",
    ],
    bioParagraphs,
    displayImage,
  };
}