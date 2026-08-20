import { ProductItem } from "../productsData";

export interface ModelFAQ {
  question: string;
  answer: string;
}

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
  faqs: ModelFAQ[];
  highlights: string[];
  locationDetail: string;
}

export function getModelSpecsAndDetails(product: ProductItem): ModelDetailSpec & { displayImage: string } {
  // Spec variations based on ID for variety across models
  const specVariations = [
    { height: "5'3\"", weight: "46 kg", figure: "32-24-33", hair: "Glossy Black", eyes: "Warm Brown", languages: "Hindi, English, Telugu", personality: "Charming & Affectionate" },
    { height: "5'5\"", weight: "49 kg", figure: "34-26-35", hair: "Dark Brown", eyes: "Hazel", languages: "Hindi, English, Punjabi", personality: "Elegant & Sophisticated" },
    { height: "5'4\"", weight: "48 kg", figure: "34-25-34", hair: "Silky Black", eyes: "Deep Brown", languages: "Hindi, English, Marathi", personality: "Friendly & Enthusiastic" },
    { height: "5'6\"", weight: "51 kg", figure: "36-26-36", hair: "Chestnut Brown", eyes: "Amber Brown", languages: "Hindi, English, Bengali", personality: "Playful & Vibrant" },
    { height: "5'2\"", weight: "45 kg", figure: "32-24-34", hair: "Jet Black", eyes: "Almond Brown", languages: "Hindi, English, Tamil", personality: "Sweet & Attentive" },
    { height: "5'7\"", weight: "52 kg", figure: "34-25-36", hair: "Natural Black", eyes: "Dark Brown", languages: "Hindi, English, Gujarati", personality: "High-Profile & Glamorous" },
  ];

  const spec = specVariations[(product.id - 1) % specVariations.length];
  const locParts = product.city.split("/");
  const subLoc = locParts.length > 1 ? locParts[1].trim() : locParts[0].trim();

  const fallbackImg = `/images/image${((product.id - 1) % 16) + 1}.avif`;
  const displayImage = product.image && product.image.trim() !== ""
    ? product.image
    : fallbackImg;

  // Build unique narrative bios by drawing from product's title, description, and custom locality details
  const bioParagraphs: string[] = [];

  // Paragraph 1: Introduction & Locality Specialization
  bioParagraphs.push(
    `Welcome to the verified profile of ${product.name}, a distinguished ${product.age}-year-old independent companion operating in ${subLoc}, Hyderabad. Known for her natural charm, sophistication, and courteous demeanor, ${product.name} offers premium companionship for gentlemen seeking relaxation, fine dinner dates, executive social gatherings, and private luxury hotel visits.`
  );

  // Paragraph 2: Product Description Integration
  if (product.description && product.description.trim().length > 15) {
    bioParagraphs.push(product.description);
  } else {
    bioParagraphs.push(
      `${product.name} is celebrated for her welcoming personality, neat presentation, and dedicated hospitality. Whether you are visiting Hyderabad on a business trip or seeking a relaxing evening in ${subLoc}, she ensures your experience is comfortable, discrete, and memorable.`
    );
  }

  // Paragraph 3: Additional About Me context if present, or area-specific lifestyle detail
  if (product.aboutMe && product.aboutMe.trim().length > 25) {
    bioParagraphs.push(product.aboutMe);
  } else {
    bioParagraphs.push(
      `Living and operating near ${subLoc}, ${product.name} is well-acquainted with top luxury hotels, fine dining destinations, and peaceful retreats in Hyderabad. She takes immense pride in maintaining strict privacy, clear communication, and dependable punctuality for every appointment.`
    );
  }

  // Paragraph 4: Personality, physical attributes, and conversational style
  bioParagraphs.push(
    `Standing at ${spec.height} with a radiant ${spec.figure} figure, ${spec.hair.toLowerCase()} hair, and expressive ${spec.eyes.toLowerCase()} eyes, ${product.name} is fluent in ${spec.languages}. She provides an authentic girlfriend experience (GFE) where conversations flow effortlessly and every moment feels genuinely special.`
  );

  // Model-specific FAQs for rich on-page SEO content
  const faqs: ModelFAQ[] = [
    {
      question: `How can I book an appointment with ${product.name} in ${subLoc}?`,
      answer: `You can directly reach out to ${product.name} via WhatsApp or phone call at ${product.phone}. Simply share your preferred date, time, duration, and hotel or residential location in ${subLoc} to confirm availability.`,
    },
    {
      question: `What locations and hotels does ${product.name} cover?`,
      answer: `${product.name} primarily provides incall and outcall services in ${subLoc} and surrounding Hyderabad areas including 4-star and 5-star hotels, luxury resorts, and verified private residences.`,
    },
    {
      question: `Is privacy and discretion guaranteed when meeting ${product.name}?`,
      answer: `Yes, 100% confidentiality, safety, and discreet arrangements are guaranteed. No personal data is stored, ensuring total peace of mind for both corporate clients and local visitors.`,
    },
    {
      question: `What are the working timings for ${product.name}?`,
      answer: `${product.name} is available for daytime meetings, evening dinner dates, and overnight stays with flexible scheduling. Advance booking of 1 to 2 hours is recommended.`,
    },
  ];

  const highlights = [
    `100% Verified Profile in ${subLoc}`,
    `Direct WhatsApp & Phone Contact: ${product.phone}`,
    `Available for 5-Star Hotel Outcalls & Luxury Visits`,
    `Fluent in ${spec.languages}`,
    `Strict Discretion & Privacy Guaranteed`,
  ];

  return {
    height: product.height || spec.height,
    weight: product.weight || spec.weight,
    figure: product.figure || spec.figure,
    hair: product.hair || spec.hair,
    eyes: product.eyes || spec.eyes,
    languages: product.languages?.join(", ") || spec.languages,
    timing: product.timing || "Available 24/7",
    badge: product.badge || (product.id % 2 === 0 ? "VIP Exclusive" : "Top Rated"),
    availableFor: product.availableFor || [
      "Dinner Dates",
      "Luxury Hotel Outcall",
      "Social & Corporate Events",
      "Girlfriend Experience (GFE)",
      "Overnight Companionship",
      "Weekend Getaways",
    ],
    bioParagraphs,
    faqs,
    highlights,
    locationDetail: `${subLoc}, Hyderabad`,
    displayImage,
  };
}