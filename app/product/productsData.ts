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
}

export const initialProductsData: ProductItem[] = [
  // 1. Banjara Hills
  {
    id: 1,
    name: "Ananya Sharma",
    city: "Hyderabad / Banjara Hills",
    title: "Hey I am Ananya provide all service Real meet and video call 💋✨",
    description: "I am high class independent companion with attractive figure. Sexy curvy figure will get u mad. Very neat and clean. Available 24/7 for luxury hotel and home visits with complete privacy guaranteed.",
    phone: "+91 91357 51868",
    hasWhatsapp: true,
    whatsappNumber: "919135751868",
    age: 23,
    rating: 4.9,
    status: "Available Now",
    image: "/images/image1.avif",
    aboutMe: "GUARANTEE FULL SATISFACTION & IN CASE OF ANY UNHAPPY EXPERIENCE, WE WOULD REFUND YOUR FEES, WITHOUT ANY QUESTIONS ASKED 👉 WILL PROVIDE YOU WITH SEXY MODELS WHO WILL DANCE & DRINK WITH YOU AND ALSO PROVIDE YOU SEXUAL BODY TO BODY MASSAGE WITH SEX. 👉YOU MAY TAKE THEM OUT FOR A PARTY OR ALSO FOR ANY PRIVATE PARTIES. 👉THESE GIRLS ARE INTERESTED IN HAVING SOME FUN WITH YOU AND WILL ENSURE THAT YOU HAVE COMPLETE FUN.\n\nBookings Opens Now Excellent High profile Independent Female Model VIP High Class And Top Class Service with us will be Best part in your Life ever. professional service provider with more than 30 girls. Are you looking for discreet companionship and entertainment? You've come to the right place. Your fantasies fulfilled.",
  },
  {
    id: 2,
    name: "Pooja Hegde",
    city: "Hyderabad / Banjara Hills",
    title: "VIP Companion & Model Service in Banjara Hills 👑",
    description: "Charming and friendly VIP companion. Professional service for corporate events, dinner dates, and luxury hotel stays. Real meet available.",
    phone: "+91 91357 51868",
    hasWhatsapp: true,
    whatsappNumber: "919135751868",
    age: 24,
    rating: 4.8,
    status: "Available Now",
    image: "/images/image31.avif",
    aboutMe: "High profile Independent Female Model VIP High Class Service. Professional service provider with discrete companionship and entertainment guaranteed.",
  },

  // 2. Jubilee Hills
  {
    id: 3,
    name: "Priya Reddy",
    city: "Hyderabad / Jubilee Hills",
    title: "Premium College Escort Service in Jubilee Hills 🔥",
    description: "Sophisticated and educated companion available in Jubilee Hills. 100% genuine photos, sweet nature and fully confidential service guaranteed.",
    phone: "+91 91357 51868",
    hasWhatsapp: true,
    whatsappNumber: "919135751868",
    age: 22,
    rating: 4.9,
    status: "Available Now",
    image: "/images/image3.avif",
    aboutMe: "100% genuine photos, sweet nature and fully confidential service guaranteed for luxury hotel outcalls and home visits.",
  },

  // 3. Madhapur
  {
    id: 4,
    name: "Sneha Rao",
    city: "Hyderabad / Madhapur",
    title: "Independent IT Park Escort in Madhapur 🌸",
    description: "Located near IT hub Madhapur. Sweet, friendly demeanor, instant booking for outcall and incall services with top hospitality.",
    phone: "+91 91357 51868",
    hasWhatsapp: true,
    whatsappNumber: "919135751868",
    age: 24,
    rating: 4.7,
    status: "Available Now",
    image: "/images/image29.avif",
    aboutMe: "Sweet, friendly demeanor, instant booking for outcall and incall services with top hospitality in Madhapur area.",
  },

  // 4. Hitech City
  {
    id: 5,
    name: "Riya Sen",
    city: "Hyderabad / Hitech City",
    title: "Celebrity & Model Escort Service in Hitech City 💃",
    description: "High class model companion in Hitech City. Perfect for business travelers seeking premium companion experience with full privacy.",
    phone: "+91 91357 51868",
    hasWhatsapp: true,
    whatsappNumber: "919135751868",
    age: 21,
    rating: 4.9,
    status: "Available Now",
    image: "/images/image5.avif",
    aboutMe: "High class model companion in Hitech City. Perfect for business travelers seeking premium companion experience with full privacy.",
  },

  // 5. Gachibowli
  {
    id: 6,
    name: "Kavya Verma",
    city: "Hyderabad / Gachibowli",
    title: "Luxury Escort & Dating Partner in Gachibowli 💕",
    description: "Gentle and attentive escort partner in Gachibowli. Fast response on call and WhatsApp for instant hotel visits.",
    phone: "+91 91357 51868",
    hasWhatsapp: true,
    whatsappNumber: "919135751868",
    age: 25,
    rating: 4.6,
    status: "Available Now",
    image: "/images/image25.avif",
    aboutMe: "Gentle and attentive escort partner in Gachibowli. Fast response on call and WhatsApp for instant hotel visits.",
  },

  // 6. Kondapur
  {
    id: 7,
    name: "Divya Kapoor",
    city: "Hyderabad / Kondapur",
    title: "Independent Escort Companion in Kondapur ✨",
    description: "Quiet and respectful escort in Kondapur area. Direct call booking available with 100% privacy assurance.",
    phone: "+91 91357 51868",
    hasWhatsapp: true,
    whatsappNumber: "919135751868",
    age: 23,
    rating: 4.8,
    status: "online",
    image: "/images/image7.avif",
    aboutMe: "Quiet and respectful escort in Kondapur area. Direct call booking available with 100% privacy assurance.",
  },

  // 7. Kukatpally
  {
    id: 8,
    name: "Neha Singh",
    city: "Hyderabad / Kukatpally",
    title: "High Profile Call Girl Service in Kukatpally 🌹",
    description: "Attractive and friendly companion in Kukatpally. Available for evening dates, hotel visits and long drives.",
    phone: "+91 91357 51868",
    hasWhatsapp: true,
    whatsappNumber: "919135751868",
    age: 22,
    rating: 4.9,
    status: "Available Now",
    image: "/images/image8.avif",
    aboutMe: "Attractive and friendly companion in Kukatpally. Available for evening dates, hotel visits and long drives.",
  },

  // 8. Miyapur
  {
    id: 9,
    name: "Simran Gill",
    city: "Hyderabad / Miyapur",
    title: "Independent Young Escort Girl in Miyapur 💋",
    description: "Beautiful independent girl in Miyapur. Polite, punctual and committed to providing a peaceful experience.",
    phone: "+91 91357 51868",
    hasWhatsapp: true,
    whatsappNumber: "919135751868",
    age: 24,
    rating: 4.7,
    status: "Available Now",
    image: "/images/image9.avif",
    aboutMe: "Beautiful independent girl in Miyapur. Polite, punctual and committed to providing a peaceful experience.",
  },

  // 9. Ameerpet
  {
    id: 10,
    name: "Aarti Patel",
    city: "Hyderabad / Ameerpet",
    title: "College Student Escort Service in Ameerpet 🎓",
    description: "Fun-loving college student escort in Ameerpet. Flexible timings, affordable packages, instant WhatsApp chat.",
    phone: "+91 91357 51868",
    hasWhatsapp: true,
    whatsappNumber: "919135751868",
    age: 23,
    rating: 4.8,
    status: "Available Now",
    image: "/images/image10.avif",
    aboutMe: "Fun-loving college student escort in Ameerpet. Flexible timings, affordable packages, instant WhatsApp chat.",
  },

  // 10. Begumpet
  {
    id: 11,
    name: "Ishita Roy",
    city: "Hyderabad / Begumpet",
    title: "Corporate Companion & VIP Escort in Begumpet 💼",
    description: "Elegant corporate companion in Begumpet near airport road. Professional, discrete and well-mannered.",
    phone: "+91 91357 51868",
    hasWhatsapp: true,
    whatsappNumber: "919135751868",
    age: 22,
    rating: 4.6,
    status: "Busy",
    image: "/images/image11.avif",
    aboutMe: "Elegant corporate companion in Begumpet near airport road. Professional, discrete and well-mannered.",
  },

  // 11. Secunderabad
  {
    id: 12,
    name: "Meera Joshi",
    city: "Hyderabad / Secunderabad",
    title: "Independent Escort Service in Secunderabad 🌺",
    description: "Charming independent escort in Secunderabad. Ideal companion for relaxing evenings and hotel stays.",
    phone: "+91 91357 51868",
    hasWhatsapp: true,
    whatsappNumber: "919135751868",
    age: 25,
    rating: 4.9,
    status: "Available Now",
    image: "/images/image12.avif",
    aboutMe: "Charming independent escort in Secunderabad. Ideal companion for relaxing evenings and hotel stays.",
  },

  // 12. Somajiguda
  {
    id: 13,
    name: "Shreya Das",
    city: "Hyderabad / Somajiguda",
    title: "Five Star Hotel Escort Partner in Somajiguda ⭐",
    description: "Sophisticated escort girl in Somajiguda business hub. Specially available for luxury 5-star hotel outcalls.",
    phone: "+91 91357 51868",
    hasWhatsapp: true,
    whatsappNumber: "919135751868",
    age: 21,
    rating: 4.8,
    status: "Available Now",
    image: "/images/image13.avif",
    aboutMe: "Sophisticated escort girl in Somajiguda business hub. Specially available for luxury 5-star hotel outcalls.",
  },

  // 13. Punjagutta
  {
    id: 14,
    name: "Natasha Malik",
    city: "Hyderabad / Punjagutta",
    title: "Fashion Model Escort in Punjagutta 💄",
    description: "Glamorous fashion model companion in Punjagutta. Warm nature, hygienic, and committed to discretion.",
    phone: "+91 91357 51868",
    hasWhatsapp: true,
    whatsappNumber: "919135751868",
    age: 23,
    rating: 4.9,
    status: "Available Now",
    image: "/images/image14.avif",
    aboutMe: "Glamorous fashion model companion in Punjagutta. Warm nature, hygienic, and committed to discretion.",
  },

  // 14. Tolichowki
  {
    id: 15,
    name: "Sonal Chauhan",
    city: "Hyderabad / Tolichowki",
    title: "Independent Escort & Companion in Tolichowki 🌟",
    description: "Friendly independent girl in Tolichowki. Quick response on WhatsApp with direct phone call support.",
    phone: "+91 91357 51868",
    hasWhatsapp: true,
    whatsappNumber: "919135751868",
    age: 24,
    rating: 4.7,
    status: "Available Now",
    image: "/images/image15.avif",
    aboutMe: "Friendly independent girl in Tolichowki. Quick response on WhatsApp with direct phone call support.",
  },

  // 15. Mehdipatnam
  {
    id: 16,
    name: "Nisha Agarwal",
    city: "Hyderabad / Mehdipatnam",
    title: "Desi College Girl Escort in Mehdipatnam 💖",
    description: "Lovely desi college girl in Mehdipatnam. Sweet conversationalist and attentive companion.",
    phone: "+91 91357 51868",
    hasWhatsapp: true,
    whatsappNumber: "919135751868",
    age: 22,
    rating: 4.8,
    status: "Available Now",
    image: "/images/image16.avif",
    aboutMe: "Lovely desi college girl in Mehdipatnam. Sweet conversationalist and attentive companion.",
  },

  // 16. Attapur
  {
    id: 17,
    name: "Tanvi Shah",
    city: "Hyderabad / Attapur",
    title: "High Class Housewife Escort in Attapur ✨",
    description: "Mature and caring companion in Attapur. Safe, secure, and hassle-free meeting arrangements.",
    phone: "+91 91357 51868",
    hasWhatsapp: true,
    whatsappNumber: "919135751868",
    age: 23,
    rating: 4.6,
    status: "Available Now",
    image: "/images/image17.avif",
    aboutMe: "Mature and caring companion in Attapur. Safe, secure, and hassle-free meeting arrangements.",
  },

  // 17. Manikonda
  {
    id: 18,
    name: "Maya Deshmukh",
    city: "Hyderabad / Manikonda",
    title: "Luxury Gated Community Escort in Manikonda 🏰",
    description: "High profile companion residing in Manikonda. Available for outstation travels and local weekend stays.",
    phone: "+91 91357 51868",
    hasWhatsapp: true,
    whatsappNumber: "919135751868",
    age: 24,
    rating: 4.9,
    status: "Available Now",
    image: "/images/image18.avif",
    aboutMe: "High profile companion residing in Manikonda. Available for outstation travels and local weekend stays.",
  },

  // 18. Nallagandla
  {
    id: 19,
    name: "Kriti Malhotra",
    city: "Hyderabad / Nallagandla",
    title: "Independent High Class Escort in Nallagandla 💫",
    description: "Elegant companion in Nallagandla. Top rated verified feedback.",
    phone: "+91 91357 51868",
    hasWhatsapp: true,
    whatsappNumber: "919135751868",
    age: 22,
    rating: 4.8,
    status: "Available Now",
    image: "/images/image19.avif",
    aboutMe: "Elegant companion in Nallagandla. Top rated verified profile with excellent feedback.",
  },

  // 19. Chandanagar
  {
    id: 20,
    name: "Payal Rajput",
    city: "Hyderabad / Chandanagar",
    title: "Independent Escort Partner in Chandanagar 🌸",
    description: "Polite independent profile in Chandanagar. Simple booking process via direct phone call.",
    phone: "+91 91357 51868",
    hasWhatsapp: true,
    whatsappNumber: "919135751868",
    age: 25,
    rating: 4.7,
    status: "Offline",
    image: "/images/image20.avif",
    aboutMe: "Polite independent profile in Chandanagar. Simple booking process via direct phone call.",
  },

  // 20. LB Nagar
  {
    id: 21,
    name: "Swati Mishra",
    city: "Hyderabad / LB Nagar",
    title: "High Profile Call Girl Service in LB Nagar 💖",
    description: "Friendly companion in LB Nagar area. 100% real photos, safety first policy and privacy guaranteed.",
    phone: "+91 91357 51868",
    hasWhatsapp: true,
    whatsappNumber: "919135751868",
    age: 23,
    rating: 4.8,
    status: "Available Now",
    image: "/images/image21.avif",
    aboutMe: "Friendly companion in LB Nagar area. 100% real photos, safety first policy and privacy guaranteed.",
  },

  // 21. Dilsukhnagar
  {
    id: 22,
    name: "Rashmi Gautham",
    city: "Hyderabad / Dilsukhnagar",
    title: "Independent Escort Girl in Dilsukhnagar 🔥",
    description: "Attractive girl available for home and hotel outcall services in Dilsukhnagar.",
    phone: "+91 91357 51868",
    hasWhatsapp: true,
    whatsappNumber: "919135751868",
    age: 24,
    rating: 4.9,
    status: "Available Now",
    image: "/images/image22.avif",
    aboutMe: "Attractive girl available for home and hotel outcall services in Dilsukhnagar.",
  },

  // 22. Uppal
  {
    id: 23,
    name: "Deepika Nambiar",
    city: "Hyderabad / Uppal",
    title: "College Student Escort in Uppal Stadium Area ⚾",
    description: "Young college escort near Uppal. Fun, energetic and well-mannered companion for outings.",
    phone: "+91 91357 51868",
    hasWhatsapp: true,
    whatsappNumber: "919135751868",
    age: 22,
    rating: 4.7,
    status: "Available Now",
    image: "/images/image23.avif",
    aboutMe: "Young college escort near Uppal. Fun, energetic and well-mannered companion for outings.",
  },

  // 23. Nagole
  {
    id: 24,
    name: "Shruti Iyer",
    city: "Hyderabad / Nagole",
    title: "Verified Independent Companion in Nagole 🌷",
    description: "Sweet and honest companion in Nagole. Direct phone call booking and quick WhatsApp response.",
    phone: "+91 91357 51868",
    hasWhatsapp: true,
    whatsappNumber: "919135751868",
    age: 23,
    rating: 4.8,
    status: "Available Now",
    image: "/images/image24.avif",
    aboutMe: "Sweet and honest companion in Nagole. Direct phone call booking and quick WhatsApp response.",
  },

  // 24. Kompally
  {
    id: 25,
    name: "Trisha Mukherjee",
    city: "Hyderabad / Kompally",
    title: "VIP Resort & Hotel Escort in Kompally 🏖️",
    description: "High class model companion for resort stays and highway hotel visits in Kompally.",
    phone: "+91 91357 51868",
    hasWhatsapp: true,
    whatsappNumber: "919135751868",
    age: 25,
    rating: 4.9,
    status: "Available Now",
    image: "/images/image25.avif",
    aboutMe: "High class model companion for resort stays and highway hotel visits in Kompally.",
  },

  // 25. Suchitra
  {
    id: 26,
    name: "Aditi Bhatia",
    city: "Hyderabad / Suchitra",
    title: "Young Independent Girl Escort in Suchitra 🎀",
    description: "Polite young companion in Suchitra area. Available for daytime and overnight bookings.",
    phone: "+91 91357 51868",
    hasWhatsapp: true,
    whatsappNumber: "919135751868",
    age: 21,
    rating: 4.6,
    status: "Available Now",
    image: "/images/image26.avif",
    aboutMe: "Polite young companion in Suchitra area. Available for daytime and overnight bookings.",
  },

  // 26. Shamshabad
  {
    id: 27,
    name: "Radhika Merchant",
    city: "Hyderabad / Shamshabad",
    title: "Airport Transit & VIP Escort in Shamshabad ✈️",
    description: "Located near RGIA Airport. Ideal companion for travelers and layovers with prompt service.",
    phone: "+91 91357 51868",
    hasWhatsapp: true,
    whatsappNumber: "919135751868",
    age: 24,
    rating: 4.9,
    status: "Available Now",
    image: "/images/image27.avif",
    aboutMe: "Located near RGIA Airport. Ideal companion for travelers and layovers with prompt service.",
  },

  // 27. Nizampet
  {
    id: 28,
    name: "Jyoti Saxena",
    city: "Hyderabad / Nizampet",
    title: "Independent Escort & Dating Partner in Nizampet 💐",
    description: "Charming independent partner in Nizampet. Clean, safe, and professional companion service.",
    phone: "+91 91357 51868",
    hasWhatsapp: true,
    whatsappNumber: "919135751868",
    age: 22,
    rating: 4.8,
    status: "Available Now",
    image: "/images/image28.avif",
    aboutMe: "Charming independent partner in Nizampet. Clean, safe, and professional companion service.",
  },

  // 28. Alwal
  {
    id: 29,
    name: "Mansi Joshi",
    city: "Hyderabad / Alwal",
    title: "High Profile Call Girl Service in Alwal 🌺",
    description: "Respectful companion in Alwal area. Booking available directly via phone line.",
    phone: "+91 91357 51868",
    hasWhatsapp: true,
    whatsappNumber: "919135751868",
    age: 23,
    rating: 4.7,
    status: "Busy",
    image: "/images/image29.avif",
    aboutMe: "Respectful companion in Alwal area. Booking available directly via phone line.",
  },

  // 29. Hafeezpet
  {
    id: 30,
    name: "Priyanka Nair",
    city: "Hyderabad / Hafeezpet",
    title: "Independent Escort Girl in Hafeezpet 💖",
    description: "Located near Hafeezpet local area. Friendly, energetic companion with prompt WhatsApp contact.",
    phone: "+91 91357 51868",
    hasWhatsapp: true,
    whatsappNumber: "919135751868",
    age: 24,
    rating: 4.8,
    status: "Available Now",
    image: "/images/image30.avif",
    aboutMe: "Located near Hafeezpet local area. Friendly, energetic companion with prompt WhatsApp contact.",
  },

  // 30. Kothapet
  {
    id: 31,
    name: "Sunita Rao",
    city: "Hyderabad / Kothapet",
    title: "Desi College Escort Service in Kothapet 💋",
    description: "Sweet desi college girl in Kothapet. High quality companion service for home and hotel outcalls.",
    phone: "+91 91357 51868",
    hasWhatsapp: true,
    whatsappNumber: "919135751868",
    age: 22,
    rating: 4.9,
    status: "Available Now",
    image: "/images/image2.avif",
    aboutMe: "Sweet desi college girl in Kothapet. High quality companion service for home and hotel outcalls.",
  },
];
