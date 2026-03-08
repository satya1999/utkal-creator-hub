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
    businessType: "Family Restaurant in Balasore",
    background: "A popular family restaurant in Balasore town known for its authentic Odia thali, struggling to attract the younger crowd despite excellent food quality.",
    problem: "While older residents knew the restaurant well, Gen-Z and millennials in Balasore were choosing newer Instagram-famous cafés. The owner had no digital presence whatsoever.",
    strategy: "Partnered with 5 Balasore food influencers for authentic dining experience reels, created AI-enhanced promotional videos showcasing their signature Macha Besara and Dalma, and shot behind-the-scenes kitchen footage.",
    results: [
      "40% increase in weekend footfall within 2 months",
      "Instagram following grew from 200 to 2,500",
      "3 viral reels with 50K+ combined views across Balasore & Bhadrak",
      "Regular stream of customer-generated content tagging the restaurant",
    ],
    quote: "I never imagined Instagram could bring so many new faces to my restaurant. Young people from Bhadrak and Jaleswar are also coming now!",
  },
  {
    id: "cloud-kitchen",
    industry: "Cloud Kitchen",
    icon: "🍕",
    businessType: "Cloud Kitchen in Bhubaneswar",
    background: "A newly launched cloud kitchen in Saheed Nagar, Bhubaneswar, offering fusion Odia-Italian cuisine with zero brand recognition.",
    problem: "As a delivery-only business competing in Bhubaneswar's crowded food scene against established names, building trust was nearly impossible through traditional marketing.",
    strategy: "Created mouth-watering food prep videos highlighting the Odia-Italian fusion concept, partnered with Bhubaneswar micro-influencers for honest reviews, and built consistent Instagram presence reaching audiences in Cuttack and Bhubaneswar.",
    results: [
      "Orders doubled within 6 weeks across Bhubaneswar & Cuttack",
      "Built a loyal base of 500+ repeat customers",
      "Achieved 4.5-star rating on Swiggy and Zomato",
      "Content strategy reduced customer acquisition cost by 60%",
    ],
  },
  {
    id: "travel",
    industry: "Travel & Pilgrimage",
    icon: "🛕",
    businessType: "Pilgrimage Tour Agency in Puri",
    background: "A family-run travel agency in Puri specializing in pilgrimage tours to Jagannath Temple, Konark Sun Temple, Chilika Lake, and other sacred Odisha sites.",
    problem: "Younger pilgrims were booking through MakeMyTrip and Goibibo. The agency's newspaper ads in Sambad and Dharitri weren't reaching the digital-first audience.",
    strategy: "Produced cinematic videos of Puri Jagannath Rath Yatra, Konark dance festival, and Chilika's Irrawaddy dolphins. Collaborated with Odisha travel influencers and created AI-animated route maps for temple circuits.",
    results: [
      "35% increase in bookings from under-40 age group",
      "YouTube channel reached 5K subscribers in 3 months",
      "Became top-searched pilgrimage agency for 'Odisha temple tour'",
      "Inquiries from NRIs in 6 countries for Rath Yatra packages",
    ],
    quote: "People from Kolkata, Hyderabad, even USA are calling us after seeing those temple videos. Our Puri-Konark-Chilika package is now a bestseller.",
  },
  {
    id: "healthcare",
    industry: "Healthcare",
    icon: "🏥",
    businessType: "Multi-Specialty Clinic in Cuttack",
    background: "A multi-specialty clinic in Cuttack's Buxi Bazaar area looking to compete with big hospitals in Bhubaneswar for patients from Cuttack, Jajpur, and Kendrapara districts.",
    problem: "Patients from surrounding districts were traveling 30km to Bhubaneswar hospitals, perceiving local clinics as inferior. The clinic needed to build trust and showcase their modern facilities.",
    strategy: "Created professional facility tour videos, doctor introduction reels featuring their AIIMS-trained specialists, patient testimonial content, and health awareness videos in Odia language.",
    results: [
      "Patient appointments increased 25% from Cuttack, Jajpur & Kendrapara",
      "Odia health awareness videos reached 100K+ viewers",
      "Google reviews jumped from 15 to 120+ with 4.6 average",
      "Reduced patient outflow to Bhubaneswar hospitals by 30%",
    ],
  },
  {
    id: "salon",
    industry: "Beauty & Wellness",
    icon: "💇‍♀️",
    businessType: "Bridal Salon in Berhampur",
    background: "A premium bridal salon in Berhampur (Ganjam district) offering traditional Odia bridal makeup and modern styling, competing against Bhubaneswar-based salons.",
    problem: "Brides-to-be from Ganjam, Gajapati, and Koraput districts were traveling to Bhubaneswar for bridal packages, assuming local salons couldn't match metro quality.",
    strategy: "Showcased stunning before-after bridal transformation reels, partnered with South Odisha lifestyle influencers, and created content featuring Sambalpuri saree styling and traditional Odia bridal looks.",
    results: [
      "Bridal bookings increased 50% during wedding season",
      "Attracted clients from Ganjam, Gajapati, Rayagada & Koraput",
      "Instagram grew from 500 to 8,000 followers in 4 months",
      "Became the most-tagged salon in South Odisha on Instagram",
    ],
    quote: "Girls from Koraput and Rayagada are now coming to us instead of going to Bhubaneswar. Our traditional Odia bridal look reel got 2 lakh views!",
  },
  {
    id: "gym",
    industry: "Fitness",
    icon: "💪",
    businessType: "Gym & Fitness Studio in Rourkela",
    background: "A modern gym in Rourkela (Sundargarh district) with state-of-the-art equipment, struggling to fill memberships despite being the best-equipped gym in Western Odisha.",
    problem: "The gym relied on word-of-mouth and local banners. Steel city professionals and students from NIT Rourkela weren't aware of the facility's premium offerings.",
    strategy: "Created transformation video series with local members, partnered with Rourkela fitness influencers, and produced content targeting NIT students and RSP employees with special membership offers.",
    results: [
      "Monthly memberships increased by 65% in 3 months",
      "Attracted 200+ NIT Rourkela students with campus campaigns",
      "Content reached audiences in Sambalpur and Jharsuguda too",
      "Became the #1 rated gym in Rourkela on Google Maps",
    ],
  },
];
