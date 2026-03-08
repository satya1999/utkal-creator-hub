export type UserStatus = "active" | "suspended" | "inactive";
export type CreatorTier = "bronze" | "silver" | "gold" | "platinum";
export type CampaignStatus = "draft" | "active" | "completed" | "paused";
export type LeadStatus = "new" | "contacted" | "qualified" | "converted" | "lost";
export type ContentStatus = "pending" | "approved" | "rejected" | "flagged";
export type UserRole = "admin" | "manager" | "editor" | "viewer";

export interface AdminUser {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  status: UserStatus;
  joinedAt: string;
  avatar?: string;
}

export interface Creator {
  id: string;
  name: string;
  handle: string;
  platform: string;
  followers: number;
  tier: CreatorTier;
  engagementRate: number;
  category: string;
  status: UserStatus;
  campaigns: number;
}

export interface Brand {
  id: string;
  name: string;
  industry: string;
  contact: string;
  email: string;
  activeCampaigns: number;
  totalSpent: number;
  status: UserStatus;
  joinedAt: string;
}

export interface Campaign {
  id: string;
  name: string;
  brand: string;
  creators: number;
  budget: number;
  spent: number;
  status: CampaignStatus;
  startDate: string;
  endDate: string;
  reach: number;
  engagement: number;
}

export interface Lead {
  id: string;
  name: string;
  phone: string;
  business: string;
  source: string;
  status: LeadStatus;
  createdAt: string;
  notes: string;
}

export interface ContentItem {
  id: string;
  title: string;
  creator: string;
  campaign: string;
  type: string;
  status: ContentStatus;
  submittedAt: string;
  views: number;
}

export const mockUsers: AdminUser[] = [
  { id: "u1", name: "Rahul Sharma", email: "rahul@utkal.com", role: "admin", status: "active", joinedAt: "2024-01-15" },
  { id: "u2", name: "Priya Patel", email: "priya@utkal.com", role: "manager", status: "active", joinedAt: "2024-03-20" },
  { id: "u3", name: "Amit Das", email: "amit@utkal.com", role: "editor", status: "active", joinedAt: "2024-05-10" },
  { id: "u4", name: "Sneha Rao", email: "sneha@utkal.com", role: "viewer", status: "suspended", joinedAt: "2024-06-01" },
  { id: "u5", name: "Vikram Singh", email: "vikram@utkal.com", role: "editor", status: "inactive", joinedAt: "2024-02-28" },
];

export const mockCreators: Creator[] = [
  { id: "c1", name: "Ananya Mishra", handle: "@ananya_food", platform: "Instagram", followers: 45000, tier: "gold", engagementRate: 4.8, category: "Food", status: "active", campaigns: 12 },
  { id: "c2", name: "Bikash Rout", handle: "@bikash_travels", platform: "YouTube", followers: 120000, tier: "platinum", engagementRate: 3.2, category: "Travel", status: "active", campaigns: 8 },
  { id: "c3", name: "Deepika Mohanty", handle: "@deepika_style", platform: "Instagram", followers: 28000, tier: "silver", engagementRate: 5.1, category: "Fashion", status: "active", campaigns: 6 },
  { id: "c4", name: "Gaurav Nayak", handle: "@gaurav_fitness", platform: "Instagram", followers: 65000, tier: "gold", engagementRate: 6.3, category: "Fitness", status: "active", campaigns: 15 },
  { id: "c5", name: "Isha Behera", handle: "@isha_beauty", platform: "YouTube", followers: 18000, tier: "bronze", engagementRate: 7.2, category: "Beauty", status: "suspended", campaigns: 3 },
  { id: "c6", name: "Jayanta Pradhan", handle: "@jayanta_tech", platform: "Instagram", followers: 92000, tier: "platinum", engagementRate: 4.1, category: "Tech", status: "active", campaigns: 20 },
];

export const mockBrands: Brand[] = [
  { id: "b1", name: "Spice Garden Restaurant", industry: "Food & Dining", contact: "Rajesh Kumar", email: "rajesh@spicegarden.com", activeCampaigns: 2, totalSpent: 150000, status: "active", joinedAt: "2024-01-10" },
  { id: "b2", name: "FitZone Gym", industry: "Fitness", contact: "Meera Sahoo", email: "meera@fitzone.com", activeCampaigns: 1, totalSpent: 80000, status: "active", joinedAt: "2024-04-15" },
  { id: "b3", name: "GlowUp Salon", industry: "Beauty", contact: "Sunita Panda", email: "sunita@glowup.com", activeCampaigns: 3, totalSpent: 200000, status: "active", joinedAt: "2024-02-20" },
  { id: "b4", name: "TravelEase Agency", industry: "Travel", contact: "Akash Mohanty", email: "akash@travelease.com", activeCampaigns: 0, totalSpent: 45000, status: "inactive", joinedAt: "2024-05-01" },
  { id: "b5", name: "MediCare Clinic", industry: "Healthcare", contact: "Dr. Sanjay", email: "sanjay@medicare.com", activeCampaigns: 1, totalSpent: 120000, status: "active", joinedAt: "2024-03-08" },
];

export const mockCampaigns: Campaign[] = [
  { id: "cm1", name: "Summer Food Festival", brand: "Spice Garden Restaurant", creators: 5, budget: 75000, spent: 62000, status: "active", startDate: "2026-02-01", endDate: "2026-03-31", reach: 250000, engagement: 18500 },
  { id: "cm2", name: "New Year Fitness Challenge", brand: "FitZone Gym", creators: 3, budget: 50000, spent: 50000, status: "completed", startDate: "2026-01-01", endDate: "2026-01-31", reach: 180000, engagement: 12000 },
  { id: "cm3", name: "Bridal Season Promo", brand: "GlowUp Salon", creators: 8, budget: 100000, spent: 45000, status: "active", startDate: "2026-02-15", endDate: "2026-04-15", reach: 320000, engagement: 25000 },
  { id: "cm4", name: "Weekend Getaway Deals", brand: "TravelEase Agency", creators: 2, budget: 30000, spent: 15000, status: "paused", startDate: "2026-01-15", endDate: "2026-02-28", reach: 90000, engagement: 5500 },
  { id: "cm5", name: "Health Awareness Week", brand: "MediCare Clinic", creators: 4, budget: 60000, spent: 58000, status: "completed", startDate: "2026-01-20", endDate: "2026-02-20", reach: 210000, engagement: 15000 },
  { id: "cm6", name: "Spring Menu Launch", brand: "Spice Garden Restaurant", creators: 6, budget: 80000, spent: 20000, status: "draft", startDate: "2026-04-01", endDate: "2026-05-15", reach: 0, engagement: 0 },
];

export const mockLeads: Lead[] = [
  { id: "l1", name: "Manish Agarwal", phone: "9876543210", business: "Royal Sweets", source: "Website Form", status: "new", createdAt: "2026-03-07", notes: "Interested in Diwali campaign" },
  { id: "l2", name: "Pooja Mishra", phone: "9123456789", business: "Trendy Boutique", source: "WhatsApp", status: "contacted", createdAt: "2026-03-06", notes: "Follow up on Friday" },
  { id: "l3", name: "Suman Dash", phone: "9988776655", business: "Green Leaf Cafe", source: "Referral", status: "qualified", createdAt: "2026-03-05", notes: "Budget: 50K/month" },
  { id: "l4", name: "Kiran Patnaik", phone: "9456781230", business: "Patnaik Motors", source: "Website Form", status: "converted", createdAt: "2026-02-28", notes: "Signed 3-month contract" },
  { id: "l5", name: "Ritu Sahoo", phone: "9012345678", business: "Sahoo Jewellers", source: "Instagram DM", status: "lost", createdAt: "2026-02-25", notes: "Budget too low" },
  { id: "l6", name: "Abhishek Nanda", phone: "9345678901", business: "Nanda Healthcare", source: "Website Form", status: "new", createdAt: "2026-03-08", notes: "Wants video content" },
];

export const mockContent: ContentItem[] = [
  { id: "ct1", title: "Spice Garden Thali Reel", creator: "Ananya Mishra", campaign: "Summer Food Festival", type: "Reel", status: "approved", submittedAt: "2026-03-05", views: 45000 },
  { id: "ct2", title: "FitZone Transformation Video", creator: "Gaurav Nayak", campaign: "New Year Fitness Challenge", type: "Video", status: "approved", submittedAt: "2026-01-15", views: 92000 },
  { id: "ct3", title: "Bridal Makeover Story", creator: "Deepika Mohanty", campaign: "Bridal Season Promo", type: "Story", status: "pending", submittedAt: "2026-03-07", views: 0 },
  { id: "ct4", title: "Beach Resort Review", creator: "Bikash Rout", campaign: "Weekend Getaway Deals", type: "Video", status: "flagged", submittedAt: "2026-02-10", views: 28000 },
  { id: "ct5", title: "Health Tips Carousel", creator: "Jayanta Pradhan", campaign: "Health Awareness Week", type: "Carousel", status: "approved", submittedAt: "2026-02-01", views: 35000 },
  { id: "ct6", title: "Beauty Routine Reel", creator: "Isha Behera", campaign: "Bridal Season Promo", type: "Reel", status: "rejected", submittedAt: "2026-03-02", views: 0 },
  { id: "ct7", title: "New Menu Taste Test", creator: "Ananya Mishra", campaign: "Summer Food Festival", type: "Reel", status: "pending", submittedAt: "2026-03-08", views: 0 },
];

export const dashboardMetrics = {
  totalRevenue: 645000,
  revenueGrowth: 12.5,
  activeClients: 4,
  clientGrowth: 25,
  activeCampaigns: 3,
  campaignGrowth: 50,
  totalReach: 1050000,
  reachGrowth: 18.3,
  newLeads: 8,
  leadGrowth: 33,
  activeCreators: 5,
  creatorGrowth: 10,
};

export const revenueByMonth = [
  { month: "Oct", revenue: 45000 },
  { month: "Nov", revenue: 62000 },
  { month: "Dec", revenue: 78000 },
  { month: "Jan", revenue: 95000 },
  { month: "Feb", revenue: 110000 },
  { month: "Mar", revenue: 125000 },
];

export const campaignsByStatus = [
  { name: "Active", value: 3, fill: "hsl(142 72% 42%)" },
  { name: "Completed", value: 2, fill: "hsl(200 80% 50%)" },
  { name: "Paused", value: 1, fill: "hsl(40 90% 55%)" },
  { name: "Draft", value: 1, fill: "hsl(0 0% 70%)" },
];

export const platformSettings = {
  siteName: "Utkal Creator Hub",
  siteEmail: "hello@utkalcreatorhub.com",
  whatsappNumber: "+919876543210",
  currency: "INR",
  timezone: "Asia/Kolkata",
  notificationsEnabled: true,
  autoApproveContent: false,
  maxCreatorsPerCampaign: 10,
};
