export interface CaseStudy {
  id: string;
  industry: string;
  icon: string;
  businessType: string;
  background: string;
  problem: string;
  strategy: string;
  results: string[];
  quote?: string;
}

export const caseStudies: CaseStudy[] = [
  {
    id: "restaurant",
    industry: "Restaurant",
    icon: "🍽️",
    businessType: "Local Restaurant in Balasore",
    background: "A popular but struggling local restaurant that relied entirely on word-of-mouth and walk-in traffic.",
    problem: "Despite great food, footfall was declining as newer competitors gained Instagram presence. The owner had no time or skills to create social media content.",
    strategy: "We partnered with 5 local food influencers for authentic dining experience videos, created AI-enhanced promotional reels, and shot behind-the-scenes kitchen footage.",
    results: [
      "40% increase in weekend footfall within 2 months",
      "Instagram following grew from 200 to 2,500",
      "3 viral reels with 50K+ combined views",
      "Regular stream of user-generated content from customers",
    ],
    quote: "I never imagined Instagram could bring so many new faces to my restaurant. Utkal Creator Hub changed everything.",
  },
  {
    id: "cloud-kitchen",
    industry: "Cloud Kitchen",
    icon: "🍕",
    businessType: "Cloud Kitchen in Balasore",
    background: "A newly launched cloud kitchen offering fusion cuisine, with zero brand recognition in the local market.",
    problem: "As a delivery-only business with no physical storefront, building trust and awareness was nearly impossible through traditional marketing.",
    strategy: "Created a series of mouth-watering food preparation videos, partnered with micro-influencers for honest review content, and built a consistent Instagram presence with AI-generated promotional content.",
    results: [
      "Orders doubled within the first 6 weeks",
      "Built a loyal customer base of 500+ repeat orders",
      "Achieved 4.5-star rating on delivery platforms",
      "Content strategy reduced customer acquisition cost by 60%",
    ],
  },
  {
    id: "travel",
    industry: "Travel & Pilgrimage",
    icon: "🛕",
    businessType: "Pilgrimage Travel Agency in Odisha",
    background: "A family-run travel agency specializing in pilgrimage tours across Odisha's sacred sites.",
    problem: "Younger customers were booking through online platforms. The agency's traditional marketing (pamphlets, newspaper ads) wasn't reaching the digital-first audience.",
    strategy: "Produced cinematic temple and destination videos, collaborated with travel influencers for experiential content, and created AI-animated route maps and itinerary showcases.",
    results: [
      "35% increase in bookings from under-40 age group",
      "YouTube channel reached 5K subscribers in 3 months",
      "Became the top-searched local pilgrimage agency on Google",
      "Seasonal booking inquiries increased by 50%",
    ],
    quote: "Our phone hasn't stopped ringing since those videos went live. Even people from outside Odisha are calling us now.",
  },
  {
    id: "healthcare",
    industry: "Healthcare",
    icon: "🏥",
    businessType: "Healthcare Clinic in Balasore",
    background: "A multi-specialty clinic looking to establish itself as the trusted healthcare choice in Balasore district.",
    problem: "Patients were choosing hospitals in Bhubaneswar over local clinics due to perceived quality differences. The clinic needed to build trust and showcase their facilities.",
    strategy: "Created professional facility tour videos, doctor introduction reels, patient testimonial content (with consent), and health awareness educational videos.",
    results: [
      "Patient appointments increased by 25% in 3 months",
      "Health awareness videos reached 100K+ local viewers",
      "Google reviews increased from 15 to 120+",
      "Established the clinic as a trusted local brand",
    ],
  },
];
