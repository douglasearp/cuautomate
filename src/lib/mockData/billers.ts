export interface Biller {
  id: number;
  name: string;
  category: string;
  subCategory: string;
  location: string;
  billerCode: string;
  accountPattern: string;
  networks: string[];
  processingTime: string;
  status: 'Active' | 'Setup Required' | 'Inactive';
  rating: number;
  usageCount: number;
  contactInfo: {
    phone: string;
    website: string;
    email: string;
  };
  icon: string;
  description: string;
  dateAdded?: string;
  updatedAt?: string;
}

export interface Category {
  id: number;
  name: string;
  icon: string;
  count: number;
  subcategories: string[];
}

export interface DashboardMetrics {
  totalBillers: {
    value: number;
    label: string;
    change: string;
    trend: 'up' | 'down' | 'stable';
    icon: string;
  };
  activeNetworks: {
    value: number;
    label: string;
    change: string;
    trend: 'up' | 'down' | 'stable';
    icon: string;
  };
  monthlyVolume: {
    value: string;
    label: string;
    change: string;
    trend: 'up' | 'down' | 'stable';
    icon: string;
  };
  successRate: {
    value: string;
    label: string;
    change: string;
    trend: 'up' | 'down' | 'stable';
    icon: string;
  };
}

export interface NetworkStatus {
  name: string;
  status: 'operational' | 'degraded' | 'maintenance' | 'down';
  uptime: number;
  billerCount: number;
  color: string;
  lastUpdate: string;
  capabilities: string[];
  processingTime: string;
  message?: string;
}

export const mockBillers: Biller[] = [
  {
    id: 1,
    name: "Evergy",
    category: "Utilities",
    subCategory: "Electric",
    location: "Kansas City, MO",
    billerCode: "EV001234",
    accountPattern: "####-####-####",
    networks: ["ACH", "FedNow", "RTP", "Card"],
    processingTime: "Instant",
    status: "Active",
    rating: 4.8,
    usageCount: 1247,
    contactInfo: {
      phone: "1-800-EVERGY",
      website: "evergy.com",
      email: "business@evergy.com"
    },
    icon: "⚡",
    description: "Electric utility serving Kansas and Missouri"
  },
  {
    id: 2,
    name: "State Farm",
    category: "Insurance",
    subCategory: "Auto/Home",
    location: "Nationwide",
    billerCode: "SF567890",
    accountPattern: "**######",
    networks: ["ACH", "Stripe", "Venmo"],
    processingTime: "1-2 days",
    status: "Setup Required",
    rating: 4.6,
    usageCount: 892,
    contactInfo: {
      phone: "1-800-STATE-FARM",
      website: "statefarm.com",
      email: "commercial@statefarm.com"
    },
    icon: "🚗",
    description: "Auto and home insurance provider"
  },
  {
    id: 3,
    name: "WaterOne",
    category: "Utilities",
    subCategory: "Water/Sewer",
    location: "Johnson County, KS",
    billerCode: "WO246810",
    accountPattern: "########",
    networks: ["ACH", "RTP"],
    processingTime: "Same day",
    status: "Active",
    rating: 4.2,
    usageCount: 634,
    contactInfo: {
      phone: "913-895-1800",
      website: "waterone.org",
      email: "billing@waterone.org"
    },
    icon: "💧",
    description: "Water and wastewater utility"
  },
  {
    id: 4,
    name: "AT&T Business",
    category: "Telecommunications",
    subCategory: "Internet/Phone",
    location: "Nationwide",
    billerCode: "ATT135792",
    accountPattern: "@@@-@@@-####",
    networks: ["ACH", "FedNow", "Stripe", "TabaPay"],
    processingTime: "Instant",
    status: "Active",
    rating: 4.1,
    usageCount: 2156,
    contactInfo: {
      phone: "1-800-CALL-ATT",
      website: "att.com/business",
      email: "businessbilling@att.com"
    },
    icon: "📱",
    description: "Business telecommunications services"
  },
  {
    id: 5,
    name: "Kansas Gas Service",
    category: "Utilities",
    subCategory: "Natural Gas",
    location: "Kansas",
    billerCode: "KGS987654",
    accountPattern: "####-####",
    networks: ["ACH", "RTP"],
    processingTime: "Same day",
    status: "Active",
    rating: 4.3,
    usageCount: 445,
    contactInfo: {
      phone: "1-800-794-4780",
      website: "kansasgasservice.com",
      email: "business@kgs.com"
    },
    icon: "🔥",
    description: "Natural gas utility provider"
  },
  {
    id: 6,
    name: "Chase Bank",
    category: "Financial",
    subCategory: "Credit Cards",
    location: "Nationwide",
    billerCode: "CHASE123456",
    accountPattern: "####-####-####-####",
    networks: ["ACH", "FedNow", "Stripe"],
    processingTime: "Instant",
    status: "Active",
    rating: 4.4,
    usageCount: 1892,
    contactInfo: {
      phone: "1-800-CHASE",
      website: "chase.com/business",
      email: "business@chase.com"
    },
    icon: "💳",
    description: "Business credit card services"
  },
  {
    id: 7,
    name: "Waste Management",
    category: "Utilities",
    subCategory: "Waste/Recycling",
    location: "Johnson County, KS",
    billerCode: "WM789012",
    accountPattern: "##########",
    networks: ["ACH", "RTP"],
    processingTime: "Same day",
    status: "Active",
    rating: 4.0,
    usageCount: 234,
    contactInfo: {
      phone: "913-895-1800",
      website: "wm.com",
      email: "billing@wm.com"
    },
    icon: "🗑️",
    description: "Commercial waste and recycling services"
  },
  {
    id: 8,
    name: "Blue Cross Blue Shield",
    category: "Healthcare",
    subCategory: "Health Insurance",
    location: "Kansas",
    billerCode: "BCBS345678",
    accountPattern: "###-###-####",
    networks: ["ACH", "FedNow"],
    processingTime: "1-2 days",
    status: "Setup Required",
    rating: 4.5,
    usageCount: 567,
    contactInfo: {
      phone: "1-800-BCBS-KS",
      website: "bcbsks.com",
      email: "business@bcbsks.com"
    },
    icon: "🏥",
    description: "Health insurance provider"
  }
];

export const mockCategories: Category[] = [
  { 
    id: 1, 
    name: "Utilities", 
    icon: "💡", 
    count: 45, 
    subcategories: ["Electric", "Gas", "Water", "Waste", "Telecom"] 
  },
  { 
    id: 2, 
    name: "Insurance", 
    icon: "🚗", 
    count: 28, 
    subcategories: ["Auto", "Health", "Home", "Life", "Business"] 
  },
  { 
    id: 3, 
    name: "Government", 
    icon: "🏛️", 
    count: 15, 
    subcategories: ["Federal", "State", "Local", "Taxes", "Permits"] 
  },
  { 
    id: 4, 
    name: "Healthcare", 
    icon: "🏥", 
    count: 32, 
    subcategories: ["Hospitals", "Clinics", "Pharmacies", "Insurance"] 
  },
  { 
    id: 5, 
    name: "Education", 
    icon: "🎓", 
    count: 18, 
    subcategories: ["Universities", "K-12", "Training", "Childcare"] 
  },
  { 
    id: 6, 
    name: "Financial", 
    icon: "💳", 
    count: 67, 
    subcategories: ["Credit Cards", "Loans", "Banking", "Investment"] 
  },
  { 
    id: 7, 
    name: "Telecommunications", 
    icon: "📱", 
    count: 22, 
    subcategories: ["Internet", "Phone", "Cable", "Streaming"] 
  }
];

export const mockDashboardMetrics: DashboardMetrics = {
  totalBillers: {
    value: 287,
    label: "Configured",
    change: "+12 this month",
    trend: "up",
    icon: "🏢"
  },
  activeNetworks: {
    value: 7,
    label: "ACH, FedNow+",
    change: "All operational",
    trend: "stable",
    icon: "🌐"
  },
  monthlyVolume: {
    value: "$89,500",
    label: "Bills paid",
    change: "+15% vs last month",
    trend: "up",
    icon: "💰"
  },
  successRate: {
    value: "99.2%",
    label: "Payment success",
    change: "0.3% improvement",
    trend: "up",
    icon: "✅"
  }
};

export const mockNetworkStatus: Record<string, NetworkStatus> = {
  ach: {
    name: "ACH Network",
    status: "operational",
    uptime: 99.8,
    billerCount: 1247,
    color: "green",
    lastUpdate: new Date().toISOString(),
    capabilities: ["Standard transfers", "Same-day ACH", "Return handling"],
    processingTime: "1-2 business days"
  },
  fednow: {
    name: "FedNow",
    status: "operational", 
    uptime: 99.9,
    billerCount: 892,
    color: "green",
    lastUpdate: new Date().toISOString(),
    capabilities: ["24/7/365 availability", "Instant settlement", "Real-time notifications"],
    processingTime: "Instant"
  },
  rtp: {
    name: "RTP (Real-Time Payments)",
    status: "operational",
    uptime: 99.7,
    billerCount: 634, 
    color: "green",
    lastUpdate: new Date().toISOString(),
    capabilities: ["Instant payments", "Rich messaging", "Request for payment"],
    processingTime: "Instant"
  },
  stripe: {
    name: "Stripe",
    status: "operational",
    uptime: 99.9,
    billerCount: 2156,
    color: "green",
    lastUpdate: new Date().toISOString(),
    capabilities: ["Credit/debit cards", "Bank transfers", "Digital wallets"],
    processingTime: "Instant"
  },
  tabapay: {
    name: "TabaPay",
    status: "operational",
    uptime: 99.6,
    billerCount: 445,
    color: "green", 
    lastUpdate: new Date().toISOString(),
    capabilities: ["Modern API", "Push-to-card", "Account verification"],
    processingTime: "Same day"
  },
  venmo: {
    name: "Venmo Business",
    status: "maintenance",
    uptime: 99.4,
    billerCount: 234,
    color: "yellow",
    lastUpdate: new Date().toISOString(),
    message: "Scheduled maintenance window: 2:00 PM - 4:00 PM EST",
    capabilities: ["Business payments", "Social features", "Mobile-first"],
    processingTime: "Instant"
  },
  plaid: {
    name: "Plaid Verification",
    status: "operational",
    uptime: 99.8,
    billerCount: 15000,
    color: "green",
    lastUpdate: new Date().toISOString(),
    capabilities: ["Bank verification", "Account linking", "Balance checks"],
    processingTime: "Instant verification"
  }
};
