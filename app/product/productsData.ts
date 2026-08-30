export interface ProductItem {
  id: number;
  name: string;
  city: string;
  title: string;
  description: string;
  phone: string;
  hasWhatsapp: boolean;
  whatsappNumber: string;
  age: number;
  rating: number;
  status: string;
  image: string; // Image path or URL
  aboutMe?: string;
  services?: string[];
  locationDetail?: string;
  height?: string;
  weight?: string;
  figure?: string;
  hair?: string;
  eyes?: string;
  languages?: string[];
  timing?: string;
  badge?: string;
  availableFor?: string[];
  metaTitle?: string;
  metaDescription?: string;
  metaKeywords?: string[];
}

export const initialProductsData: ProductItem[] = [
  // 1. Banjara Hills
  {
    id: 1,
    name: "Ananya Sharma",
    city: "Hyderabad / Banjara Hills",
    title: "Hey I am Ananya provide all service Real meet and video call 💋✨",
    description: "I am high class independent companion with attractive figure. Sexy curvy figure will get u mad. Very neat and clean. Available 24/7 for luxury hotel and home visits with complete privacy guaranteed.",
    phone: "+91 99057 52614",
    hasWhatsapp: true,
    whatsappNumber: "919905752614",
    age: 23,
    rating: 4.9,
    status: "Available Now",
    image: "/images/image1.avif",
    aboutMe: "GUARANTEE FULL SATISFACTION & IN CASE OF ANY UNHAPPY EXPERIENCE, WE WOULD REFUND YOUR FEES, WITHOUT ANY QUESTIONS ASKED 👉 WILL PROVIDE YOU WITH SEXY MODELS WHO WILL DANCE & DRINK WITH YOU AND ALSO PROVIDE YOU SEXUAL BODY TO BODY MASSAGE WITH SEX. 👉YOU MAY TAKE THEM OUT FOR A PARTY OR ALSO FOR ANY PRIVATE PARTIES. 👉THESE GIRLS ARE INTERESTED IN HAVING SOME FUN WITH YOU AND WILL ENSURE THAT YOU HAVE COMPLETE FUN.\n\nBookings Opens Now Excellent High profile Independent Female Model VIP High Class And Top Class Service with us will be Best part in your Life ever. professional service provider with more than 30 girls. Are you looking for discreet companionship and entertainment? You've come to the right place. Your fantasies fulfilled.",
    metaTitle: "Ananya Sharma - Call Girl in Banjara Hills | Escort Service Banjara Hills Hyderabad",
    metaDescription: "Book Ananya Sharma (23 yrs), top independent call girl in Banjara Hills, Hyderabad. 100% verified VIP escort service for luxury hotel visits & dinner dates. Call: +91 99057 52614.",
    metaKeywords: [
      "Ananya Sharma escort",
      "call girl Banjara Hills",
      "call girl in Banjara Hills Hyderabad",
      "escort service Banjara Hills",
      "Banjara Hills call girl",
      "independent escort Banjara Hills",
      "VIP call girl Banjara Hills",
      "Riya escort service Banjara Hills"
    ],
  },
  {
    id: 2,
    name: "Pooja Hegde",
    city: "Hyderabad / Banjara Hills",
    title: "VIP Companion & Model Service in Banjara Hills 👑",
    description: "Charming and friendly VIP companion. Professional service for corporate events, dinner dates, and luxury hotel stays. Real meet available.",
    phone: "+91 99057 52614",
    hasWhatsapp: true,
    whatsappNumber: "919905752614",
    age: 24,
    rating: 4.8,
    status: "Available Now",
    image: "/images/image31.avif",
    aboutMe: "High profile Independent Female Model VIP High Class Service. Professional service provider with discrete companionship and entertainment guaranteed.",
    metaTitle: "Pooja Hegde - VIP Call Girl & Model Escort in Banjara Hills Hyderabad",
    metaDescription: "Pooja Hegde (24 yrs) VIP model companion in Banjara Hills, Hyderabad. Verified high-class escort for corporate dinner dates & luxury 5-star stays. Call: +91 99057 52614.",
    metaKeywords: [
      "Pooja Hegde escort",
      "VIP call girl Banjara Hills",
      "model escort Banjara Hills",
      "call girl Banjara Hills Hyderabad",
      "escort service Banjara Hills",
      "luxury escort Banjara Hills",
      "high profile call girl Hyderabad"
    ],
  },

  // 2. Jubilee Hills
  {
    id: 3,
    name: "Priya Reddy",
    city: "Hyderabad / Jubilee Hills",
    title: "Premium College Escort Service in Jubilee Hills 🔥",
    description: "Sophisticated and educated companion available in Jubilee Hills. 100% genuine photos, sweet nature and fully confidential service guaranteed.",
    phone: "+91 99057 52614",
    hasWhatsapp: true,
    whatsappNumber: "919905752614",
    age: 22,
    rating: 4.9,
    status: "Available Now",
    image: "/images/image3.avif",
    aboutMe: "100% genuine photos, sweet nature and fully confidential service guaranteed for luxury hotel outcalls and home visits.",
    metaTitle: "Priya Reddy - College Girl Escort in Jubilee Hills | Call Girl Jubilee Hills Hyderabad",
    metaDescription: "Meet Priya Reddy (22 yrs), sweet & educated college call girl in Jubilee Hills, Hyderabad. 100% genuine verified escort for outcall & hotel visits. Call: +91 99057 52614.",
    metaKeywords: [
      "Priya Reddy escort",
      "call girl Jubilee Hills",
      "college call girl Jubilee Hills",
      "escort service Jubilee Hills Hyderabad",
      "Jubilee Hills escort service",
      "independent call girl Jubilee Hills",
      "Riya escort service Jubilee Hills"
    ],
  },

  // 3. Madhapur
  {
    id: 4,
    name: "Sneha Rao",
    city: "Hyderabad / Madhapur",
    title: "Independent IT Park Escort in Madhapur 🌸",
    description: "Located near IT hub Madhapur. Sweet, friendly demeanor, instant booking for outcall and incall services with top hospitality.",
    phone: "+91 99057 52614",
    hasWhatsapp: true,
    whatsappNumber: "919905752614",
    age: 24,
    rating: 4.7,
    status: "Available Now",
    image: "/images/image29.avif",
    aboutMe: "Sweet, friendly demeanor, instant booking for outcall and incall services with top hospitality in Madhapur area.",
    metaTitle: "Sneha Rao - Independent Call Girl in Madhapur | Escort Service Madhapur Hyderabad",
    metaDescription: "Sneha Rao (24 yrs), independent call girl in Madhapur IT corridor, Hyderabad. Available 24/7 for hotel visits, corporate companionship & instant booking. Call: +91 99057 52614.",
    metaKeywords: [
      "Sneha Rao escort",
      "call girl Madhapur",
      "call girl in Madhapur Hyderabad",
      "escort service Madhapur",
      "Madhapur escort service",
      "IT park call girl Madhapur",
      "independent escort Madhapur"
    ],
  },

  // 4. Hitech City
  {
    id: 5,
    name: "Riya Sen",
    city: "Hyderabad / Hitech City",
    title: "Celebrity & Model Escort Service in Hitech City 💃",
    description: "High class model companion in Hitech City. Perfect for business travelers seeking premium companion experience with full privacy.",
    phone: "+91 99057 52614",
    hasWhatsapp: true,
    whatsappNumber: "919905752614",
    age: 21,
    rating: 4.9,
    status: "Available Now",
    image: "/images/image5.avif",
    aboutMe: "High class model companion in Hitech City. Perfect for business travelers seeking premium companion experience with full privacy.",
    metaTitle: "Riya Sen - High Profile Call Girl in Hitech City | Escort Service Hitech City Hyderabad",
    metaDescription: "Riya Sen (21 yrs), celebrity model companion & call girl in Hitech City, Hyderabad. Premium escort service for business travelers & VIP hotel stays. Call: +91 99057 52614.",
    metaKeywords: [
      "Riya Sen escort",
      "call girl Hitech City",
      "escort service Hitech City Hyderabad",
      "Hitech City escort service",
      "celebrity escort Hitech City",
      "model call girl Hitech City",
      "call girl near Hitech City"
    ],
  },

  // 5. Gachibowli
  {
    id: 6,
    name: "Kavya Verma",
    city: "Hyderabad / Gachibowli",
    title: "Luxury Escort & Dating Partner in Gachibowli 💕",
    description: "Gentle and attentive escort partner in Gachibowli. Fast response on call and WhatsApp for instant hotel visits.",
    phone: "+91 99057 52614",
    hasWhatsapp: true,
    whatsappNumber: "919905752614",
    age: 25,
    rating: 4.6,
    status: "Available Now",
    image: "/images/image25.avif",
    aboutMe: "Gentle and attentive escort partner in Gachibowli. Fast response on call and WhatsApp for instant hotel visits.",
    metaTitle: "Kavya Verma - Luxury Call Girl in Gachibowli | Escort Service Gachibowli Hyderabad",
    metaDescription: "Book Kavya Verma (25 yrs) for luxury escort service in Gachibowli, Hyderabad. Gentle, attentive dating partner for 5-star hotel visits & evening dates. Call: +91 99057 52614.",
    metaKeywords: [
      "Kavya Verma escort",
      "call girl Gachibowli",
      "call girl in Gachibowli Hyderabad",
      "escort service Gachibowli",
      "Gachibowli escort service",
      "luxury call girl Gachibowli",
      "financial district escort Hyderabad"
    ],
  },

  // 6. Kondapur
  {
    id: 7,
    name: "Divya Kapoor",
    city: "Hyderabad / Kondapur",
    title: "Independent Escort Companion in Kondapur ✨",
    description: "Quiet and respectful escort in Kondapur area. Direct call booking available with 100% privacy assurance.",
    phone: "+91 99057 52614",
    hasWhatsapp: true,
    whatsappNumber: "919905752614",
    age: 23,
    rating: 4.8,
    status: "online",
    image: "/images/image7.avif",
    aboutMe: "Quiet and respectful escort in Kondapur area. Direct call booking available with 100% privacy assurance.",
    metaTitle: "Divya Kapoor - Independent Call Girl in Kondapur | Escort Service Kondapur Hyderabad",
    metaDescription: "Divya Kapoor (23 yrs), verified independent escort & call girl in Kondapur, Hyderabad. Available 24/7 for safe hotel outcalls with 100% privacy. Call: +91 99057 52614.",
    metaKeywords: [
      "Divya Kapoor escort",
      "call girl Kondapur",
      "call girl in Kondapur Hyderabad",
      "escort service Kondapur",
      "Kondapur escort service",
      "independent call girl Kondapur",
      "Kondapur call girls"
    ],
  },

  // 7. Kukatpally
  {
    id: 8,
    name: "Neha Singh",
    city: "Hyderabad / Kukatpally",
    title: "High Profile Call Girl Service in Kukatpally 🌹",
    description: "Attractive and friendly companion in Kukatpally. Available for evening dates, hotel visits and long drives.",
    phone: "+91 99057 52614",
    hasWhatsapp: true,
    whatsappNumber: "919905752614",
    age: 22,
    rating: 4.9,
    status: "Available Now",
    image: "/images/image8.avif",
    aboutMe: "Attractive and friendly companion in Kukatpally. Available for evening dates, hotel visits and long drives.",
    metaTitle: "Neha Singh - High Profile Call Girl in Kukatpally | Escort Service Kukatpally Hyderabad",
    metaDescription: "Neha Singh (22 yrs), attractive call girl in Kukatpally, Hyderabad. Available for evening dates, luxury hotel outcalls & long drives. Call: +91 99057 52614.",
    metaKeywords: [
      "Neha Singh escort",
      "call girl Kukatpally",
      "call girl in Kukatpally Hyderabad",
      "escort service Kukatpally",
      "Kukatpally call girl service",
      "Kukatpally escorts",
      "Riya escort Kukatpally"
    ],
  },

  // 8. Miyapur
  {
    id: 9,
    name: "Simran Gill",
    city: "Hyderabad / Miyapur",
    title: "Independent Young Escort Girl in Miyapur 💋",
    description: "Beautiful independent girl in Miyapur. Polite, punctual and committed to providing a peaceful experience.",
    phone: "+91 99057 52614",
    hasWhatsapp: true,
    whatsappNumber: "919905752614",
    age: 24,
    rating: 4.7,
    status: "Available Now",
    image: "/images/image9.avif",
    aboutMe: "Beautiful independent girl in Miyapur. Polite, punctual and committed to providing a peaceful experience.",
    metaTitle: "Simran Gill - Young Call Girl in Miyapur | Escort Service Miyapur Hyderabad",
    metaDescription: "Simran Gill (24 yrs), beautiful independent call girl in Miyapur, Hyderabad. Punctual, polite & discreet companionship for relaxing stays. Call: +91 99057 52614.",
    metaKeywords: [
      "Simran Gill escort",
      "call girl Miyapur",
      "call girl in Miyapur Hyderabad",
      "escort service Miyapur",
      "Miyapur call girl service",
      "independent escort Miyapur",
      "Miyapur escorts"
    ],
  },

  // 9. Ameerpet
  {
    id: 10,
    name: "Aarti Patel",
    city: "Hyderabad / Ameerpet",
    title: "College Student Escort Service in Ameerpet 🎓",
    description: "Fun-loving college student escort in Ameerpet. Flexible timings, affordable packages, instant WhatsApp chat.",
    phone: "+91 99057 52614",
    hasWhatsapp: true,
    whatsappNumber: "919905752614",
    age: 23,
    rating: 4.8,
    status: "Available Now",
    image: "/images/image10.avif",
    aboutMe: "Fun-loving college student escort in Ameerpet. Flexible timings, affordable packages, instant WhatsApp chat.",
    metaTitle: "Aarti Patel - College Call Girl in Ameerpet | Escort Service Ameerpet Hyderabad",
    metaDescription: "Aarti Patel (23 yrs), fun-loving college student call girl in Ameerpet, Hyderabad. Affordable rates, flexible timings & instant WhatsApp booking. Call: +91 99057 52614.",
    metaKeywords: [
      "Aarti Patel escort",
      "call girl Ameerpet",
      "college call girl Ameerpet",
      "escort service Ameerpet Hyderabad",
      "Ameerpet call girls",
      "Ameerpet escort service",
      "cheap call girl Ameerpet"
    ],
  },

  // 10. Begumpet
  {
    id: 11,
    name: "Ishita Roy",
    city: "Hyderabad / Begumpet",
    title: "Corporate Companion & VIP Escort in Begumpet 💼",
    description: "Elegant corporate companion in Begumpet near airport road. Professional, discrete and well-mannered.",
    phone: "+91 99057 52614",
    hasWhatsapp: true,
    whatsappNumber: "919905752614",
    age: 22,
    rating: 4.6,
    status: "Busy",
    image: "/images/image11.avif",
    aboutMe: "Elegant corporate companion in Begumpet near airport road. Professional, discrete and well-mannered.",
    metaTitle: "Ishita Roy - Corporate VIP Escort in Begumpet | Call Girl Begumpet Hyderabad",
    metaDescription: "Ishita Roy (22 yrs), elegant corporate escort & call girl in Begumpet, Hyderabad. Discrete, well-mannered companion for hotel visits & business travel. Call: +91 99057 52614.",
    metaKeywords: [
      "Ishita Roy escort",
      "call girl Begumpet",
      "VIP escort Begumpet",
      "escort service Begumpet Hyderabad",
      "Begumpet call girl service",
      "corporate companion Begumpet",
      "Begumpet escorts"
    ],
  },

  // 11. Secunderabad
  {
    id: 12,
    name: "Meera Joshi",
    city: "Hyderabad / Secunderabad",
    title: "Independent Escort Service in Secunderabad 🌺",
    description: "Charming independent escort in Secunderabad. Ideal companion for relaxing evenings and hotel stays.",
    phone: "+91 99057 52614",
    hasWhatsapp: true,
    whatsappNumber: "919905752614",
    age: 25,
    rating: 4.9,
    status: "Available Now",
    image: "/images/image12.avif",
    aboutMe: "Charming independent escort in Secunderabad. Ideal companion for relaxing evenings and hotel stays.",
    metaTitle: "Meera Joshi - Independent Call Girl in Secunderabad | Escort Service Secunderabad",
    metaDescription: "Meera Joshi (25 yrs), charming independent call girl in Secunderabad, Hyderabad. Verified companion for relaxing hotel stays & private outcalls. Call: +91 99057 52614.",
    metaKeywords: [
      "Meera Joshi escort",
      "call girl Secunderabad",
      "call girl in Secunderabad",
      "escort service Secunderabad",
      "Secunderabad escort service",
      "independent escort Secunderabad",
      "Secunderabad call girls"
    ],
  },

  // 12. Somajiguda
  {
    id: 13,
    name: "Shreya Das",
    city: "Hyderabad / Somajiguda",
    title: "Five Star Hotel Escort Partner in Somajiguda ⭐",
    description: "Sophisticated escort girl in Somajiguda business hub. Specially available for luxury 5-star hotel outcalls.",
    phone: "+91 99057 52614",
    hasWhatsapp: true,
    whatsappNumber: "919905752614",
    age: 21,
    rating: 4.8,
    status: "Available Now",
    image: "/images/image13.avif",
    aboutMe: "Sophisticated escort girl in Somajiguda business hub. Specially available for luxury 5-star hotel outcalls.",
    metaTitle: "Shreya Das - 5 Star Hotel Escort in Somajiguda | Call Girl Somajiguda Hyderabad",
    metaDescription: "Shreya Das (21 yrs), sophisticated call girl in Somajiguda, Hyderabad. Specially available for luxury 5-star hotel visits & VIP companion services. Call: +91 99057 52614.",
    metaKeywords: [
      "Shreya Das escort",
      "call girl Somajiguda",
      "escort service Somajiguda",
      "Somajiguda call girl Hyderabad",
      "luxury hotel escort Somajiguda",
      "Somajiguda escort service",
      "VIP call girl Somajiguda"
    ],
  },

  // 13. Punjagutta
  {
    id: 14,
    name: "Natasha Malik",
    city: "Hyderabad / Punjagutta",
    title: "Fashion Model Escort in Punjagutta 💄",
    description: "Glamorous fashion model companion in Punjagutta. Warm nature, hygienic, and committed to discretion.",
    phone: "+91 99057 52614",
    hasWhatsapp: true,
    whatsappNumber: "919905752614",
    age: 23,
    rating: 4.9,
    status: "Available Now",
    image: "/images/image14.avif",
    aboutMe: "Glamorous fashion model companion in Punjagutta. Warm nature, hygienic, and committed to discretion.",
    metaTitle: "Natasha Malik - Fashion Model Escort in Punjagutta | Call Girl Punjagutta Hyderabad",
    metaDescription: "Natasha Malik (23 yrs), glamorous fashion model & call girl in Punjagutta, Hyderabad. Warm, hygienic & 100% discreet escort service. Call: +91 99057 52614.",
    metaKeywords: [
      "Natasha Malik escort",
      "call girl Punjagutta",
      "escort service Punjagutta Hyderabad",
      "Punjagutta escort service",
      "model call girl Punjagutta",
      "fashion model escort Punjagutta",
      "Punjagutta call girls"
    ],
  },

  // 14. Tolichowki
  {
    id: 15,
    name: "Sonal Chauhan",
    city: "Hyderabad / Tolichowki",
    title: "Independent Escort & Companion in Tolichowki 🌟",
    description: "Friendly independent girl in Tolichowki. Quick response on WhatsApp with direct phone call support.",
    phone: "+91 99057 52614",
    hasWhatsapp: true,
    whatsappNumber: "919905752614",
    age: 24,
    rating: 4.7,
    status: "Available Now",
    image: "/images/image15.avif",
    aboutMe: "Friendly independent girl in Tolichowki. Quick response on WhatsApp with direct phone call support.",
    metaTitle: "Sonal Chauhan - Independent Call Girl in Tolichowki | Escort Service Tolichowki",
    metaDescription: "Sonal Chauhan (24 yrs), friendly independent call girl in Tolichowki, Hyderabad. Direct phone & WhatsApp booking for safe, discrete outcall service. Call: +91 99057 52614.",
    metaKeywords: [
      "Sonal Chauhan escort",
      "call girl Tolichowki",
      "call girl in Tolichowki Hyderabad",
      "escort service Tolichowki",
      "Tolichowki escort service",
      "independent escort Tolichowki",
      "Tolichowki call girls"
    ],
  },

  // 15. Mehdipatnam
  {
    id: 16,
    name: "Nisha Agarwal",
    city: "Hyderabad / Mehdipatnam",
    title: "Desi College Girl Escort in Mehdipatnam 💖",
    description: "Lovely desi college girl in Mehdipatnam. Sweet conversationalist and attentive companion.",
    phone: "+91 99057 52614",
    hasWhatsapp: true,
    whatsappNumber: "919905752614",
    age: 22,
    rating: 4.8,
    status: "Available Now",
    image: "/images/image16.avif",
    aboutMe: "Lovely desi college girl in Mehdipatnam. Sweet conversationalist and attentive companion.",
    metaTitle: "Nisha Agarwal - Desi College Call Girl in Mehdipatnam | Escort Service Mehdipatnam",
    metaDescription: "Nisha Agarwal (22 yrs), sweet desi college call girl in Mehdipatnam, Hyderabad. Attentive companion for dates, hotel outcalls & private meetings. Call: +91 99057 52614.",
    metaKeywords: [
      "Nisha Agarwal escort",
      "call girl Mehdipatnam",
      "college call girl Mehdipatnam",
      "escort service Mehdipatnam Hyderabad",
      "Mehdipatnam call girl service",
      "desi escort Mehdipatnam",
      "Mehdipatnam escorts"
    ],
  },

  // 16. Attapur
  {
    id: 17,
    name: "Tanvi Shah",
    city: "Hyderabad / Attapur",
    title: "High Class Housewife Escort in Attapur ✨",
    description: "Mature and caring companion in Attapur. Safe, secure, and hassle-free meeting arrangements.",
    phone: "+91 99057 52614",
    hasWhatsapp: true,
    whatsappNumber: "919905752614",
    age: 23,
    rating: 4.6,
    status: "Available Now",
    image: "/images/image17.avif",
    aboutMe: "Mature and caring companion in Attapur. Safe, secure, and hassle-free meeting arrangements.",
    metaTitle: "Tanvi Shah - Housewife Escort in Attapur | Call Girl Attapur Hyderabad",
    metaDescription: "Tanvi Shah (23 yrs), caring and mature housewife companion & call girl in Attapur, Hyderabad. Safe, secure, and hassle-free escort service. Call: +91 99057 52614.",
    metaKeywords: [
      "Tanvi Shah escort",
      "call girl Attapur",
      "housewife call girl Attapur",
      "escort service Attapur Hyderabad",
      "Attapur escort service",
      "mature escort Attapur",
      "Attapur call girls"
    ],
  },

  // 17. Manikonda
  {
    id: 18,
    name: "Maya Deshmukh",
    city: "Hyderabad / Manikonda",
    title: "Luxury Gated Community Escort in Manikonda 🏰",
    description: "High profile companion residing in Manikonda. Available for outstation travels and local weekend stays.",
    phone: "+91 99057 52614",
    hasWhatsapp: true,
    whatsappNumber: "919905752614",
    age: 24,
    rating: 4.9,
    status: "Available Now",
    image: "/images/image18.avif",
    aboutMe: "High profile companion residing in Manikonda. Available for outstation travels and local weekend stays.",
    metaTitle: "Maya Deshmukh - Luxury Call Girl in Manikonda | Escort Service Manikonda Hyderabad",
    metaDescription: "Maya Deshmukh (24 yrs), high profile luxury call girl in Manikonda, Hyderabad. Available for outstation travel, weekend getaways & hotel visits. Call: +91 99057 52614.",
    metaKeywords: [
      "Maya Deshmukh escort",
      "call girl Manikonda",
      "escort service Manikonda Hyderabad",
      "Manikonda call girl service",
      "luxury escort Manikonda",
      "high profile call girl Manikonda",
      "Manikonda escorts"
    ],
  },

  // 18. Nallagandla
  {
    id: 19,
    name: "Kriti Malhotra",
    city: "Hyderabad / Nallagandla",
    title: "Independent High Class Escort in Nallagandla 💫",
    description: "Elegant companion in Nallagandla. Top rated verified feedback.",
    phone: "+91 99057 52614",
    hasWhatsapp: true,
    whatsappNumber: "919905752614",
    age: 22,
    rating: 4.8,
    status: "Available Now",
    image: "/images/image19.avif",
    aboutMe: "Elegant companion in Nallagandla. Top rated verified profile with excellent feedback.",
    metaTitle: "Kriti Malhotra - High Class Call Girl in Nallagandla | Escort Service Nallagandla",
    metaDescription: "Kriti Malhotra (22 yrs), top-rated elegant call girl & escort in Nallagandla, Hyderabad. 100% verified profile for premium hotel visits. Call: +91 99057 52614.",
    metaKeywords: [
      "Kriti Malhotra escort",
      "call girl Nallagandla",
      "escort service Nallagandla Hyderabad",
      "Nallagandla escort service",
      "high class call girl Nallagandla",
      "independent escort Nallagandla",
      "Nallagandla call girls"
    ],
  },

  // 19. Chandanagar
  {
    id: 20,
    name: "Payal Rajput",
    city: "Hyderabad / Chandanagar",
    title: "Independent Escort Partner in Chandanagar 🌸",
    description: "Polite independent profile in Chandanagar. Simple booking process via direct phone call.",
    phone: "+91 99057 52614",
    hasWhatsapp: true,
    whatsappNumber: "919905752614",
    age: 25,
    rating: 4.7,
    status: "Offline",
    image: "/images/image20.avif",
    aboutMe: "Polite independent profile in Chandanagar. Simple booking process via direct phone call.",
    metaTitle: "Payal Rajput - Independent Call Girl in Chandanagar | Escort Service Chandanagar",
    metaDescription: "Payal Rajput (25 yrs), polite independent call girl in Chandanagar, Hyderabad. Easy phone booking for private, safe hotel & home visits. Call: +91 99057 52614.",
    metaKeywords: [
      "Payal Rajput escort",
      "call girl Chandanagar",
      "escort service Chandanagar Hyderabad",
      "Chandanagar call girl service",
      "independent escort Chandanagar",
      "Chandanagar escorts",
      "Riya escort Chandanagar"
    ],
  },

  // 20. LB Nagar
  {
    id: 21,
    name: "Swati Mishra",
    city: "Hyderabad / LB Nagar",
    title: "High Profile Call Girl Service in LB Nagar 💖",
    description: "Friendly companion in LB Nagar area. 100% real photos, safety first policy and privacy guaranteed.",
    phone: "+91 99057 52614",
    hasWhatsapp: true,
    whatsappNumber: "919905752614",
    age: 23,
    rating: 4.8,
    status: "Available Now",
    image: "/images/image21.avif",
    aboutMe: "Friendly companion in LB Nagar area. 100% real photos, safety first policy and privacy guaranteed.",
    metaTitle: "Swati Mishra - High Profile Call Girl in LB Nagar | Escort Service LB Nagar Hyderabad",
    metaDescription: "Swati Mishra (23 yrs), friendly call girl in LB Nagar, Hyderabad. 100% real photos, safety first & complete privacy for hotel outcalls. Call: +91 99057 52614.",
    metaKeywords: [
      "Swati Mishra escort",
      "call girl LB Nagar",
      "call girl in LB Nagar Hyderabad",
      "escort service LB Nagar",
      "LB Nagar escort service",
      "high profile call girl LB Nagar",
      "LB Nagar call girls"
    ],
  },

  // 21. Dilsukhnagar
  {
    id: 22,
    name: "Rashmi Gautham",
    city: "Hyderabad / Dilsukhnagar",
    title: "Independent Escort Girl in Dilsukhnagar 🔥",
    description: "Attractive girl available for home and hotel outcall services in Dilsukhnagar.",
    phone: "+91 99057 52614",
    hasWhatsapp: true,
    whatsappNumber: "919905752614",
    age: 24,
    rating: 4.9,
    status: "Available Now",
    image: "/images/image22.avif",
    aboutMe: "Attractive girl available for home and hotel outcall services in Dilsukhnagar.",
    metaTitle: "Rashmi Gautham - Independent Call Girl in Dilsukhnagar | Escort Service Dilsukhnagar",
    metaDescription: "Rashmi Gautham (24 yrs), attractive independent call girl in Dilsukhnagar, Hyderabad. Available 24/7 for hotel and home outcall services. Call: +91 99057 52614.",
    metaKeywords: [
      "Rashmi Gautham escort",
      "call girl Dilsukhnagar",
      "escort service Dilsukhnagar Hyderabad",
      "Dilsukhnagar call girl service",
      "independent escort Dilsukhnagar",
      "Dilsukhnagar escorts",
      "call girl near Dilsukhnagar"
    ],
  },

  // 22. Uppal
  {
    id: 23,
    name: "Deepika Nambiar",
    city: "Hyderabad / Uppal",
    title: "College Student Escort in Uppal Stadium Area ⚾",
    description: "Young college escort near Uppal. Fun, energetic and well-mannered companion for outings.",
    phone: "+91 99057 52614",
    hasWhatsapp: true,
    whatsappNumber: "919905752614",
    age: 22,
    rating: 4.7,
    status: "Available Now",
    image: "/images/image23.avif",
    aboutMe: "Young college escort near Uppal. Fun, energetic and well-mannered companion for outings.",
    metaTitle: "Deepika Nambiar - College Call Girl in Uppal | Escort Service Uppal Hyderabad",
    metaDescription: "Deepika Nambiar (22 yrs), energetic college call girl near Uppal Stadium, Hyderabad. Friendly, well-mannered escort for outings & hotel visits. Call: +91 99057 52614.",
    metaKeywords: [
      "Deepika Nambiar escort",
      "call girl Uppal",
      "college call girl Uppal",
      "escort service Uppal Hyderabad",
      "Uppal call girl service",
      "Uppal escort service",
      "Uppal call girls"
    ],
  },

  // 23. Nagole
  {
    id: 24,
    name: "Shruti Iyer",
    city: "Hyderabad / Nagole",
    title: "Verified Independent Companion in Nagole 🌷",
    description: "Sweet and honest companion in Nagole. Direct phone call booking and quick WhatsApp response.",
    phone: "+91 99057 52614",
    hasWhatsapp: true,
    whatsappNumber: "919905752614",
    age: 23,
    rating: 4.8,
    status: "Available Now",
    image: "/images/image24.avif",
    aboutMe: "Sweet and honest companion in Nagole. Direct phone call booking and quick WhatsApp response.",
    metaTitle: "Shruti Iyer - Verified Call Girl in Nagole | Escort Service Nagole Hyderabad",
    metaDescription: "Shruti Iyer (23 yrs), sweet and honest verified call girl in Nagole, Hyderabad. Direct phone call and fast WhatsApp booking for hotel visits. Call: +91 99057 52614.",
    metaKeywords: [
      "Shruti Iyer escort",
      "call girl Nagole",
      "escort service Nagole Hyderabad",
      "Nagole call girl service",
      "independent escort Nagole",
      "Nagole escorts",
      "Riya escort Nagole"
    ],
  },

  // 24. Kompally
  {
    id: 25,
    name: "Trisha Mukherjee",
    city: "Hyderabad / Kompally",
    title: "VIP Resort & Hotel Escort in Kompally 🏖️",
    description: "High class model companion for resort stays and highway hotel visits in Kompally.",
    phone: "+91 99057 52614",
    hasWhatsapp: true,
    whatsappNumber: "919905752614",
    age: 25,
    rating: 4.9,
    status: "Available Now",
    image: "/images/image25.avif",
    aboutMe: "High class model companion for resort stays and highway hotel visits in Kompally.",
    metaTitle: "Trisha Mukherjee - VIP Resort Escort in Kompally | Call Girl Kompally Hyderabad",
    metaDescription: "Trisha Mukherjee (25 yrs), high class VIP model escort in Kompally, Hyderabad. Ideal for resort stays, highway hotel outcalls & weekend getaways. Call: +91 99057 52614.",
    metaKeywords: [
      "Trisha Mukherjee escort",
      "call girl Kompally",
      "VIP escort Kompally",
      "escort service Kompally Hyderabad",
      "Kompally resort escort",
      "model call girl Kompally",
      "Kompally call girls"
    ],
  },

  // 25. Suchitra
  {
    id: 26,
    name: "Aditi Bhatia",
    city: "Hyderabad / Suchitra",
    title: "Young Independent Girl Escort in Suchitra 🎀",
    description: "Polite young companion in Suchitra area. Available for daytime and overnight bookings.",
    phone: "+91 99057 52614",
    hasWhatsapp: true,
    whatsappNumber: "919905752614",
    age: 21,
    rating: 4.6,
    status: "Available Now",
    image: "/images/image26.avif",
    aboutMe: "Polite young companion in Suchitra area. Available for daytime and overnight bookings.",
    metaTitle: "Aditi Bhatia - Young Independent Call Girl in Suchitra | Escort Service Suchitra",
    metaDescription: "Aditi Bhatia (21 yrs), polite young call girl in Suchitra, Hyderabad. Available 24/7 for daytime dates & overnight hotel bookings. Call: +91 99057 52614.",
    metaKeywords: [
      "Aditi Bhatia escort",
      "call girl Suchitra",
      "escort service Suchitra Hyderabad",
      "Suchitra call girl service",
      "young escort Suchitra",
      "independent call girl Suchitra",
      "Suchitra escorts"
    ],
  },

  // 26. Shamshabad
  {
    id: 27,
    name: "Radhika Merchant",
    city: "Hyderabad / Shamshabad",
    title: "Airport Transit & VIP Escort in Shamshabad ✈️",
    description: "Located near RGIA Airport. Ideal companion for travelers and layovers with prompt service.",
    phone: "+91 99057 52614",
    hasWhatsapp: true,
    whatsappNumber: "919905752614",
    age: 24,
    rating: 4.9,
    status: "Available Now",
    image: "/images/image27.avif",
    aboutMe: "Located near RGIA Airport. Ideal companion for travelers and layovers with prompt service.",
    metaTitle: "Radhika Merchant - Airport VIP Escort in Shamshabad | Call Girl Shamshabad Hyderabad",
    metaDescription: "Radhika Merchant (24 yrs), VIP call girl near RGIA Airport Shamshabad, Hyderabad. Prompt service for airport transits, layovers & luxury hotels. Call: +91 99057 52614.",
    metaKeywords: [
      "Radhika Merchant escort",
      "call girl Shamshabad",
      "airport escort Hyderabad",
      "escort service Shamshabad Hyderabad",
      "RGIA airport call girl",
      "VIP escort Shamshabad",
      "Shamshabad call girls"
    ],
  },

  // 27. Nizampet
  {
    id: 28,
    name: "Jyoti Saxena",
    city: "Hyderabad / Nizampet",
    title: "Independent Escort & Dating Partner in Nizampet 💐",
    description: "Charming independent partner in Nizampet. Clean, safe, and professional companion service.",
    phone: "+91 99057 52614",
    hasWhatsapp: true,
    whatsappNumber: "919905752614",
    age: 22,
    rating: 4.8,
    status: "Available Now",
    image: "/images/image28.avif",
    aboutMe: "Charming independent partner in Nizampet. Clean, safe, and professional companion service.",
    metaTitle: "Jyoti Saxena - Independent Call Girl in Nizampet | Escort Service Nizampet Hyderabad",
    metaDescription: "Jyoti Saxena (22 yrs), charming independent call girl in Nizampet, Hyderabad. Clean, safe and professional companion service for hotel visits. Call: +91 99057 52614.",
    metaKeywords: [
      "Jyoti Saxena escort",
      "call girl Nizampet",
      "escort service Nizampet Hyderabad",
      "Nizampet call girl service",
      "independent escort Nizampet",
      "Nizampet call girls",
      "Riya escort Nizampet"
    ],
  },

  // 28. Alwal
  {
    id: 29,
    name: "Mansi Joshi",
    city: "Hyderabad / Alwal",
    title: "High Profile Call Girl Service in Alwal 🌺",
    description: "Respectful companion in Alwal area. Booking available directly via phone line.",
    phone: "+91 99057 52614",
    hasWhatsapp: true,
    whatsappNumber: "919905752614",
    age: 23,
    rating: 4.7,
    status: "Busy",
    image: "/images/image29.avif",
    aboutMe: "Respectful companion in Alwal area. Booking available directly via phone line.",
    metaTitle: "Mansi Joshi - High Profile Call Girl in Alwal | Escort Service Alwal Hyderabad",
    metaDescription: "Mansi Joshi (23 yrs), respectful high profile call girl in Alwal, Hyderabad. Available for discreet outcall visits and dinner companionship. Call: +91 99057 52614.",
    metaKeywords: [
      "Mansi Joshi escort",
      "call girl Alwal",
      "escort service Alwal Hyderabad",
      "Alwal call girl service",
      "high profile call girl Alwal",
      "Alwal escort service",
      "Alwal call girls"
    ],
  },

  // 29. Hafeezpet
  {
    id: 30,
    name: "Priyanka Nair",
    city: "Hyderabad / Hafeezpet",
    title: "Independent Escort Girl in Hafeezpet 💖",
    description: "Located near Hafeezpet local area. Friendly, energetic companion with prompt WhatsApp contact.",
    phone: "+91 99057 52614",
    hasWhatsapp: true,
    whatsappNumber: "919905752614",
    age: 24,
    rating: 4.8,
    status: "Available Now",
    image: "/images/image30.avif",
    aboutMe: "Located near Hafeezpet local area. Friendly, energetic companion with prompt WhatsApp contact.",
    metaTitle: "Priyanka Nair - Independent Call Girl in Hafeezpet | Escort Service Hafeezpet",
    metaDescription: "Priyanka Nair (24 yrs), friendly independent call girl in Hafeezpet, Hyderabad. Fast WhatsApp booking and verified service for hotel visits. Call: +91 99057 52614.",
    metaKeywords: [
      "Priyanka Nair escort",
      "call girl Hafeezpet",
      "escort service Hafeezpet Hyderabad",
      "Hafeezpet call girl service",
      "independent escort Hafeezpet",
      "Hafeezpet call girls",
      "Riya escort Hafeezpet"
    ],
  },

  // 30. Kothapet
  {
    id: 31,
    name: "Sunita Rao",
    city: "Hyderabad / Kothapet",
    title: "Desi College Escort Service in Kothapet 💋",
    description: "Sweet desi college girl in Kothapet. High quality companion service for home and hotel outcalls.",
    phone: "+91 99057 52614",
    hasWhatsapp: true,
    whatsappNumber: "919905752614",
    age: 22,
    rating: 4.9,
    status: "Available Now",
    image: "/images/image2.avif",
    aboutMe: "Sweet desi college girl in Kothapet. High quality companion service for home and hotel outcalls.",
    metaTitle: "Sunita Rao - Desi College Call Girl in Kothapet | Escort Service Kothapet Hyderabad",
    metaDescription: "Sunita Rao (22 yrs), sweet desi college call girl in Kothapet, Hyderabad. High quality verified companion service for hotel outcalls. Call: +91 99057 52614.",
    metaKeywords: [
      "Sunita Rao escort",
      "call girl Kothapet",
      "college call girl Kothapet",
      "escort service Kothapet Hyderabad",
      "Kothapet call girl service",
      "desi escort Kothapet",
      "Kothapet call girls"
    ],
  },
];
