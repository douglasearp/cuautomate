# Add Biller - Mobile Navigation Flow & UX Implementation

## Navigation Integration Overview

This document outlines the complete navigation flow for integrating the "Add Biller" functionality into the primary mobile navigation, following world-class UX/UI principles for optimal user experience and minimal disruption to existing site architecture.

## Primary Navigation Integration

### 1. Main Navigation Structure

#### Primary Tab Addition
```
Existing Navigation:
[Home] [Payments] [Accounts] [More]

Updated Navigation:
[Home] [Payments] [Bills] [Accounts] [More]
```

#### Navigation Icon & Placement
- **Position**: Third tab (between Payments and Accounts)
- **Icon**: Bills/Invoice icon with subtle animation indicator for unpaid bills
- **Label**: "Bills" (concise, universally understood)
- **Badge**: Red notification dot for overdue bills, blue for upcoming bills

### 2. Bills Tab - Main Landing Page

#### Hero Section
```
┌─────────────────────────────────────┐
│  🔍 Search billers...               │
│  📍 Olathe, KS                     │
└─────────────────────────────────────┘
```

#### Quick Actions Row
```
┌───────┬───────┬───────┬───────────┐
│  ⚡   │  💧   │  📱   │    📋    │
│Utilities│Water │Mobile │  View     │
│       │      │      │   All     │
└───────┴───────┴───────┴───────────┘
```

#### Recent & Favorite Billers Section
```
┌─────────────────────────────────────┐
│ Recent Billers                      │
│ ┌─── Evergy ─────────── $125.48 ──┐ │
│ │ 🏢 Electric • Due Tomorrow        │ │
│ │                    [Pay Now]     │ │
│ └───────────────────────────────────┘ │
│                                     │
│ ┌─── State Farm ───── $89.50 ─────┐ │
│ │ 🚗 Auto Insurance • Due in 3 days │ │
│ │                    [Pay Now]     │ │
│ └───────────────────────────────────┘ │
└─────────────────────────────────────┘
```

## Sub-Navigation Architecture

### 3. Add Biller Flow - Multi-Step Process

#### Step 1: Search & Discovery
```
Header: [← Back] Add New Biller [Skip]

Search Interface:
┌─────────────────────────────────────┐
│ 🔍 Search for your biller...        │
│ Examples: "Evergy", "State Farm"    │
└─────────────────────────────────────┘

┌─────────────────────────────────────┐
│ 📸 Scan Bill        📍 Use Location │
└─────────────────────────────────────┘

Category Quick Select:
┌────────────────────────────────────┐
│ 💡 Utilities  🏥 Healthcare       │
│ 🚗 Insurance  🏛️  Government       │
│ 🎓 Education  💳 Credit Cards     │
│ 🏠 Loans      📱 Phone/Internet   │
└────────────────────────────────────┘
```

#### Step 2: Biller Selection & Verification
```
Header: [← Back] Select Biller [Next]

Search Results:
┌─────────────────────────────────────┐
│ 🏢 Evergy                          │
│ Electric Utility • Kansas City, MO  │
│ ⚡ Instant • 💳 All Methods        │
│ ────────────────────────────        │
│ 🏢 Evergy West                     │
│ Electric Utility • Topeka, KS      │
│ ⚡ Instant • 💳 All Methods        │
└─────────────────────────────────────┘

Selected Biller Detail:
┌─────────────────────────────────────┐
│ ✅ Evergy - Kansas City             │
│                                     │
│ 📞 1-800-EVERGY                    │
│ 🌐 evergy.com                       │
│ 📍 Serves: Kansas, Missouri         │
│ 💳 Accepts: ACH, Card, FedNow       │
│ ⏱️ Processing: Instant posting       │
│                                     │
│ Account Pattern: ####-####-####     │
└─────────────────────────────────────┘
```

#### Step 3: Account Setup
```
Header: [← Back] Add Account Details [Save]

Account Information:
┌─────────────────────────────────────┐
│ Account Number *                    │
│ ┌─────────────────────────────────┐ │
│ │ 1234-5678-9012                  │ │
│ └─────────────────────────────────┘ │
│ ✅ Valid format                     │
│                                     │
│ Account Nickname (Optional)         │
│ ┌─────────────────────────────────┐ │
│ │ Home Electric                   │ │
│ └─────────────────────────────────┘ │
│                                     │
│ 📊 Typical Amount: $125             │
│ 📅 Due Date: 15th of each month    │
│                                     │
│ 🔔 Remind me 3 days before due     │
│ 💰 Set up AutoPay                  │
└─────────────────────────────────────┘
```

### 4. Advanced Search & Filter Navigation

#### Category Browse Interface
```
Header: [← Back] Browse Categories [Search]

Category Grid:
┌─────────────────────────────────────┐
│ 💡 Utilities               🔴 12    │
│ Electric, Gas, Water, Trash         │
│ ────────────────────────────        │
│ 🚗 Insurance              🟡 3     │
│ Auto, Home, Health, Life            │
│ ────────────────────────────        │
│ 🏛️ Government              🟢 1     │
│ Taxes, Licenses, Fines              │
└─────────────────────────────────────┘
```

#### Location-Based Results
```
Header: [← Back] Local Billers [Change Location]

Current Location: Olathe, KS
┌─────────────────────────────────────┐
│ Recommended for You                 │
│                                     │
│ 🏢 Evergy (Your Area)              │
│ ⭐⭐⭐⭐⭐ 4.5 • Used by 89% local │
│                                     │
│ 💧 WaterOne                        │
│ ⭐⭐⭐⭐ 4.2 • Used by 76% local    │
│                                     │
│ 🗑️ Waste Management                │
│ ⭐⭐⭐ 3.8 • Used by 45% local      │
└─────────────────────────────────────┘
```

### 5. Barcode Scanning Flow

#### Camera Interface
```
Header: [✕ Close] Scan Bill [💡 Tips]

┌─────────────────────────────────────┐
│                                     │
│    ┌─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─┐    │
│    │                         │    │
│    │     📄 Center your      │    │
│    │      bill here          │    │
│    │                         │    │
│    └─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─┘    │
│                                     │
│ 💡 Look for biller name and        │
│    account number                   │
└─────────────────────────────────────┘

Controls:
[📸 Capture] [🔦 Flash] [📁 Gallery]
```

#### Scan Results Processing
```
Header: [← Back] Scan Results [Edit]

Extracted Information:
┌─────────────────────────────────────┐
│ ✅ Biller Found: Evergy             │
│ ✅ Account: 1234-5678-9012          │
│ ✅ Amount: $125.48                  │
│ ✅ Due Date: March 15, 2025         │
│                                     │
│ 🤖 AI Confidence: 95%               │
│ 📝 Review before saving             │
└─────────────────────────────────────┘

Action Buttons:
[✏️ Edit Info] [💾 Save Biller] [🔄 Rescan]
```

## Navigation State Management

### 6. Tab Badge System

#### Notification States
```javascript
// Badge Logic
{
  overdueBills: 2,        // Red badge with count
  upcomingBills: 5,       // Blue badge with count
  scheduledPayments: 3,   // Green badge with count
  failedPayments: 1       // Orange badge with exclamation
}
```

#### Visual Indicators
- **Red Badge**: Overdue bills (urgent action needed)
- **Blue Badge**: Bills due within 3 days
- **Green Badge**: Scheduled payments processing
- **Orange Badge**: Failed/attention needed
- **Pulse Animation**: New bills added

### 7. Bottom Sheet Navigation

#### Quick Actions Sheet
```
Slide Up Menu:
┌─────────────────────────────────────┐
│ ════                                │
│                                     │
│ 🔍 Add New Biller                  │
│ 📸 Scan Bill                       │
│ 📍 Find Local Billers              │
│ 📊 View All Categories             │
│ ⚙️ Bill Settings                   │
│ 💡 Payment Tips                    │
└─────────────────────────────────────┘
```

## Accessibility & UX Considerations

### 8. Inclusive Design Elements

#### Voice & Accessibility
- **Voice Commands**: "Add new biller", "Find utilities"
- **Screen Reader**: Semantic HTML, ARIA labels
- **High Contrast**: Theme toggle support
- **Large Text**: Scalable font support
- **Gesture Support**: Swipe, tap, long-press actions

#### Error Prevention
- **Smart Validation**: Real-time account format checking
- **Confirmation Steps**: Review before adding biller
- **Undo Actions**: Recently deleted billers recoverable
- **Clear Feedback**: Success/error states with explanations

### 9. Performance Optimization

#### Loading States
```
Search Loading:
┌─────────────────────────────────────┐
│ 🔍 Searching billers...             │
│ ████████████████████░░░ 75%         │
└─────────────────────────────────────┘

Skeleton Loading:
┌─────────────────────────────────────┐
│ ▓▓▓▓ ▓▓▓▓▓▓▓▓▓▓▓▓                  │
│ ▓▓▓▓▓▓▓ ▓▓▓▓▓▓▓                     │
│ ▓▓▓▓▓▓▓▓▓▓▓ ▓▓▓▓                    │
└─────────────────────────────────────┘
```

#### Offline Capabilities
- **Cached Billers**: Recent searches stored locally
- **Offline Queue**: Payments queued for connectivity
- **Sync Indicators**: Cloud sync status display

## Implementation Notes for Cursor

### 10. File Structure & Components

#### Recommended Component Architecture
```
/components/bills/
├── BillsMain.jsx                    // Main bills landing page
├── AddBillerFlow/
│   ├── SearchBiller.jsx            // Step 1: Search interface
│   ├── BillerSelection.jsx         // Step 2: Select & verify
│   ├── AccountSetup.jsx            // Step 3: Account details
│   └── BarcodeScanner.jsx          // Camera scanning
├── BillerCard.jsx                   // Individual biller display
├── CategoryBrowser.jsx              // Category grid view
└── shared/
    ├── SearchBar.jsx               // Reusable search component
    ├── LoadingStates.jsx           // Loading skeletons
    └── NotificationBadge.jsx       // Tab badges

/navigation/
├── TabNavigation.jsx               // Updated primary navigation
├── BillsTabContent.jsx             // Bills tab router
└── BottomSheet.jsx                 // Quick actions menu

/hooks/
├── useBillerSearch.js              // Search & filter logic
├── useBarcodeScanner.js            // Camera & OCR integration
└── useLocationServices.js          // Geolocation for local billers
```

#### State Management Integration
```javascript
// Redux/Context structure for bills
{
  bills: {
    savedBillers: [],
    recentSearches: [],
    locationData: {},
    notifications: {
      overdue: [],
      upcoming: [],
      failed: []
    }
  }
}
```

### 11. Integration Checklist

#### Pre-Implementation
- [ ] Backup existing navigation components
- [ ] Create feature flag for Bills tab
- [ ] Set up analytics tracking for new flows
- [ ] Prepare API endpoints for biller directory

#### Navigation Updates
- [ ] Add Bills tab to primary navigation
- [ ] Update tab spacing/layout for 5 tabs
- [ ] Implement notification badge system
- [ ] Add routing for bills section

#### Component Development
- [ ] Build search interface with auto-complete
- [ ] Implement category browsing
- [ ] Create barcode scanning interface
- [ ] Add account setup forms
- [ ] Build loading states and error handling

#### Testing & Validation
- [ ] Test navigation flow on various screen sizes
- [ ] Validate accessibility with screen readers
- [ ] Test offline functionality
- [ ] Performance testing for search/scan features

This implementation ensures seamless integration of the biller directory functionality while maintaining excellent UX principles and not disrupting the existing site architecture.

### 12. Mock Data Services for Next.js

#### Mock Data Structure (`/lib/mockData/billers.js`)
```javascript
export const mockBillers = [
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
  }
];

export const mockCategories = [
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

export const mockDashboardMetrics = {
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
```

#### Service Layer (`/lib/services/billerService.js`)
```javascript
import { mockBillers, mockCategories, mockDashboardMetrics } from '../mockData/billers';
import { mockNetworkStatus } from '../mockData/networks';

class BillerService {
  // Simulate API delay
  delay(ms = 500) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async searchBillers(query = '', filters = {}) {
    await this.delay(300);
    
    let results = [...mockBillers];
    
    // Filter by search query
    if (query.trim()) {
      const searchTerm = query.toLowerCase();
      results = results.filter(biller => 
        biller.name.toLowerCase().includes(searchTerm) ||
        biller.category.toLowerCase().includes(searchTerm) ||
        biller.subCategory.toLowerCase().includes(searchTerm) ||
        biller.location.toLowerCase().includes(searchTerm)
      );
    }
    
    // Filter by category
    if (filters.category && filters.category !== 'all') {
      results = results.filter(biller => 
        biller.category.toLowerCase() === filters.category.toLowerCase()
      );
    }
    
    // Filter by location
    if (filters.location) {
      results = results.filter(biller => 
        biller.location.toLowerCase().includes(filters.location.toLowerCase())
      );
    }
    
    // Filter by payment networks
    if (filters.networks && filters.networks.length > 0) {
      results = results.filter(biller => 
        filters.networks.some(network => biller.networks.includes(network))
      );
    }
    
    return {
      billers: results,
      total: results.length,
      query,
      filters
    };
  }

  async getBillerById(id) {
    await this.delay(200);
    const biller = mockBillers.find(b => b.id === parseInt(id));
    
    if (!biller) {
      throw new Error(`Biller with id ${id} not found`);
    }
    
    return biller;
  }

  async addBiller(billerData) {
    await this.delay(800);
    
    // Validation
    if (!billerData.name || !billerData.accountNumber) {
      throw new Error('Name and account number are required');
    }
    
    const newBiller = {
      id: mockBillers.length + 1,
      name: billerData.name,
      category: billerData.category,
      subCategory: billerData.subCategory || '',
      location: billerData.location || 'Unknown',
      billerCode: `BL${String(mockBillers.length + 1).padStart(6, '0')}`,
      accountNumber: billerData.accountNumber,
      accountNickname: billerData.accountNickname,
      accountPattern: billerData.accountPattern || '########',
      networks: billerData.preferredNetworks || ['ACH'],
      processingTime: this.getProcessingTime(billerData.preferredNetworks?.[0] || 'ACH'),
      status: 'Active',
      rating: 0,
      usageCount: 0,
      contactInfo: billerData.contactInfo || {},
      dateAdded: new Date().toISOString(),
      icon: this.getCategoryIcon(billerData.category)
    };
    
    mockBillers.push(newBiller);
    
    return newBiller;
  }

  async updateBiller(id, updates) {
    await this.delay(500);
    
    const billerIndex = mockBillers.findIndex(b => b.id === parseInt(id));
    if (billerIndex === -1) {
      throw new Error(`Biller with id ${id} not found`);
    }
    
    mockBillers[billerIndex] = {
      ...mockBillers[billerIndex],
      ...updates,
      updatedAt: new Date().toISOString()
    };
    
    return mockBillers[billerIndex];
  }

  async deleteBiller(id) {
    await this.delay(300);
    
    const billerIndex = mockBillers.findIndex(b => b.id === parseInt(id));
    if (billerIndex === -1) {
      throw new Error(`Biller with id ${id} not found`);
    }
    
    const deletedBiller = mockBillers.splice(billerIndex, 1)[0];
    return deletedBiller;
  }

  async getCategories() {
    await this.delay(200);
    return mockCategories;
  }

  async getDashboardMetrics() {
    await this.delay(400);
    
    // Update metrics with current data
    const totalCount = mockBillers.length;
    const activeCount = mockBillers.filter(b => b.status === 'Active').length;
    
    return {
      ...mockDashboardMetrics,
      totalBillers: {
        ...mockDashboardMetrics.totalBillers,
        value: totalCount
      },
      activeBillers: {
        value: activeCount,
        label: "Active billers",
        change: `${Math.round((activeCount / totalCount) * 100)}% active`,
        trend: "stable"
      }
    };
  }

  async getNetworkStatus() {
    await this.delay(300);
    return mockNetworkStatus;
  }

  async validateAccountNumber(billerId, accountNumber) {
    await this.delay(200);
    
    const biller = mockBillers.find(b => b.id === parseInt(billerId));
    if (!biller) {
      return { valid: false, error: "Biller not found" };
    }
    
    // Simple pattern validation
    const pattern = biller.accountPattern;
    let isValid = true;
    let errorMessage = null;
    
    if (!accountNumber || accountNumber.trim().length === 0) {
      isValid = false;
      errorMessage = "Account number is required";
    } else if (accountNumber.length < 6) {
      isValid = false;
      errorMessage = "Account number too short";
    } else if (accountNumber.length > 20) {
      isValid = false;
      errorMessage = "Account number too long";
    }
    
    return {
      valid: isValid,
      formatted: isValid ? accountNumber.replace(/\s+/g, '') : null,
      error: errorMessage,
      pattern: pattern
    };
  }

  async scanBill(imageData) {
    await this.delay(2000); // Simulate OCR processing time
    
    // Mock OCR results - in real implementation, this would process the image
    const mockResults = [
      {
        billerName: "Evergy",
        accountNumber: "1234-5678-9012",
        amount: "$125.48",
        dueDate: "2025-03-15",
        confidence: 0.95,
        billerId: 1
      },
      {
        billerName: "WaterOne", 
        accountNumber: "87654321",
        amount: "$45.67",
        dueDate: "2025-03-10",
        confidence: 0.88,
        billerId: 3
      },
      {
        billerName: "AT&T Business",
        accountNumber: "ATT-123-4567",
        amount: "$234.50",
        dueDate: "2025-03-20",
        confidence: 0.92,
        billerId: 4
      }
    ];
    
    // Return random result for demo
    const result = mockResults[Math.floor(Math.random() * mockResults.length)];
    
    return {
      success: true,
      ...result,
      rawText: `Mock OCR extracted text for ${result.billerName}...`,
      processingTime: "2.3s"
    };
  }

  // Helper methods
  getProcessingTime(network) {
    const processingTimes = {
      'ACH': '1-2 business days',
      'FedNow': 'Instant',
      'RTP': 'Instant',
      'Stripe': 'Instant',
      'TabaPay': 'Same day',
      'Venmo': 'Instant'
    };
    return processingTimes[network] || 'Standard';
  }

  getCategoryIcon(category) {
    const icons = {
      'Utilities': '💡',
      'Insurance': '🚗',
      'Government': '🏛️',
      'Healthcare': '🏥',
      'Education': '🎓',
      'Financial': '💳',
      'Telecommunications': '📱'
    };
    return icons[category] || '🏢';
  }

  // Bulk operations
  async bulkUpdateBillers(billerIds, updates) {
    await this.delay(1000);
    
    const updatedBillers = [];
    
    for (const id of billerIds) {
      const billerIndex = mockBillers.findIndex(b => b.id === parseInt(id));
      if (billerIndex !== -1) {
        mockBillers[billerIndex] = {
          ...mockBillers[billerIndex],
          ...updates,
          updatedAt: new Date().toISOString()
        };
        updatedBillers.push(mockBillers[billerIndex]);
      }
    }
    
    return {
      updated: updatedBillers.length,
      billers: updatedBillers
    };
  }

  async exportBillers(format = 'json') {
    await this.delay(800);
    
    const exportData = mockBillers.map(biller => ({
      id: biller.id,
      name: biller.name,
      category: biller.category,
      location: biller.location,
      billerCode: biller.billerCode,
      networks: biller.networks.join(', '),
      status: biller.status,
      dateAdded: biller.dateAdded || new Date().toISOString()
    }));
    
    if (format === 'csv') {
      const headers = Object.keys(exportData[0]).join(',');
      const rows = exportData.map(row => Object.values(row).join(','));
      return {
        data: [headers, ...rows].join('\n'),
        filename: `billers-export-${Date.now()}.csv`,
        contentType: 'text/csv'
      };
    }
    
    return {
      data: JSON.stringify(exportData, null, 2),
      filename: `billers-export-${Date.now()}.json`,
      contentType: 'application/json'
    };
  }
}

// Export singleton instance
export const billerService = new BillerService();
```

#### Network Service (`/lib/services/networkService.js`)
```javascript
export const mockNetworkStatus = {
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
    institutionCount: 15000,
    billerCount: null,
    color: "green",
    lastUpdate: new Date().toISOString(),
    capabilities: ["Bank verification", "Account linking", "Balance checks"],
    processingTime: "Instant verification"
  }
};

class NetworkService {
  delay(ms = 300) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async getNetworkStatus() {
    await this.delay();
    
    // Simulate real-time status updates
    const currentTime = new Date().toISOString();
    const updatedStatus = { ...mockNetworkStatus };
    
    Object.keys(updatedStatus).forEach(key => {
      updatedStatus[key].lastUpdate = currentTime;
      
      // Randomly simulate status changes for demo
      if (Math.random() > 0.95) {
        const statuses = ['operational', 'degraded', 'maintenance'];
        updatedStatus[key].status = statuses[Math.floor(Math.random() * statuses.length)];
      }
    });
    
    return updatedStatus;
  }

  async getNetworkById(networkId) {
    await this.delay(200);
    return mockNetworkStatus[networkId] || null;
  }

  async testNetworkConnection(networkId) {
    await this.delay(1500);
    
    const network = mockNetworkStatus[networkId];
    if (!network) {
      throw new Error(`Network ${networkId} not found`);
    }
    
    // Simulate connection test
    const success = Math.random() > 0.1; // 90% success rate
    
    return {
      networkId,
      networkName: network.name,
      success,
      responseTime: `${Math.floor(Math.random() * 200) + 50}ms`,
      timestamp: new Date().toISOString(),
      message: success ? 'Connection successful' : 'Connection failed - please try again'
    };
  }

  async getNetworkMetrics(networkId, timeRange = '24h') {
    await this.delay(500);
    
    // Generate mock metrics
    const hours = timeRange === '24h' ? 24 : timeRange === '7d' ? 168 : 720;
    const dataPoints = Math.min(hours, 48); // Limit data points
    
    const metrics = {
      networkId,
      timeRange,
      uptime: mockNetworkStatus[networkId]?.uptime || 99.0,
      dataPoints: [],
      summary: {
        totalTransactions: Math.floor(Math.random() * 10000) + 5000,
        successRate: mockNetworkStatus[networkId]?.uptime || 99.0,
        averageResponseTime: `${Math.floor(Math.random() * 100) + 50}ms`,
        errorCount: Math.floor(Math.random() * 50)
      }
    };
    
    // Generate time series data
    for (let i = 0; i < dataPoints; i++) {
      const timestamp = new Date(Date.now() - (i * (hours * 60 * 60 * 1000) / dataPoints));
      metrics.dataPoints.push({
        timestamp: timestamp.toISOString(),
        transactions: Math.floor(Math.random() * 500) + 100,
        successRate: 95 + Math.random() * 5, // 95-100%
        responseTime: Math.floor(Math.random() * 200) + 30
      });
    }
    
    return metrics;
  }
}

export const networkService = new NetworkService();
```

#### Implementation Checklist for Next.js

#### Phase 1: Project Setup
- [ ] Install required dependencies: `npm install next react react-dom`
- [ ] Set up file structure following Next.js conventions
- [ ] Create mock data files in `/lib/mockData/`
- [ ] Set up service layer in `/lib/services/`
- [ ] Configure CSS modules or styled-components

#### Phase 2: API Routes
- [ ] Create API routes in `/pages/api/payables/`
- [ ] Implement search endpoint: `/api/payables/billers/search.js`
- [ ] Implement CRUD endpoints for billers
- [ ] Add network status endpoint: `/api/payables/networks/status.js`
- [ ] Add bill scanning endpoint with mock OCR

#### Phase 3: Core Pages
- [ ] Create main biller directory page: `/pages/payables/biller-directory/index.js`
- [ ] Implement add biller wizard: `/pages/payables/biller-directory/add.js`
- [ ] Create dynamic biller detail page: `/pages/payables/biller-directory/[billerId].js`
- [ ] Set up proper Next.js routing and navigation

#### Phase 4: React Components
- [ ] Build reusable UI components (Button, Modal, Card, Table)
- [ ] Create biller-specific components (BillerTable, BillerCard, etc.)
- [ ] Implement search and filtering components
- [ ] Add form components for biller management

#### Phase 5: Custom Hooks & State Management
- [ ] Implement `useBillerDirectory` hook for data management
- [ ] Create `usePaymentNetworks` hook for network status
- [ ] Add `useDebounce` hook for search optimization
- [ ] Set up local storage hooks for user preferences

#### Phase 6: Advanced Features
- [ ] Integrate camera API for barcode scanning
- [ ] Add CSV/JSON export functionality
- [ ] Implement bulk operations for billers
- [ ] Create real-time network status polling

#### Phase 7: Styling & UX
- [ ] Create CSS modules for component styling
- [ ] Implement responsive design for mobile/desktop
- [ ] Add loading states and error boundaries
- [ ] Ensure accessibility compliance (ARIA labels, keyboard navigation)

#### Phase 8: Testing & Deployment
- [ ] Add unit tests for components and services
- [ ] Test all API endpoints with mock data
- [ ] Perform cross-browser compatibility testing
- [ ] Deploy to Vercel or preferred hosting platform

This implementation provides a complete Next.js application structure with mock data services that simulate a real biller directory system, perfect for demonstration and development purposes.# Biller Directory - Desktop Navigation Integration & UX Implementation

## Navigation Integration Overview

This document outlines the complete navigation flow for integrating the "Biller Directory" functionality into the PayOnward desktop application, following the existing navigation structure and maintaining consistency with the current PayApp UI design.

## Primary Navigation Integration

### 1. Sidebar Navigation Structure

#### Updated Navigation Menu
```
Existing Navigation:
📊 Dashboard
📄 Invoices  
💰 Cash Flow
📨 Receivables
💳 Payables        ← CURRENT ACTIVE
🤖 AI Assistant
📈 Analytics
⚙️  Settings

Enhanced Navigation:
📊 Dashboard
📄 Invoices  
💰 Cash Flow
📨 Receivables
💳 Payables        ← EXPANDED SECTION
  └── 💼 Vendor Management
  └── 🏢 Biller Directory    ← NEW
  └── 📋 Bill Tracking
  └── 💸 Payment Processing
🤖 AI Assistant
📈 Analytics
⚙️  Settings
```

#### Payables Section Expansion
- **Current**: Single "Payables" menu item
- **Enhanced**: Expandable section with sub-navigation
- **Visual Indicator**: Chevron icon to show expansion state
- **Active State**: Blue highlight matches current design system

### 2. Biller Directory - Main Interface

#### Page Header (Following PayOnward Design System)
```
┌─────────────────────────────────────────────────────────────────┐
│ Biller Directory Management                    🔵 Add New Biller │
│ Manage your biller relationships and payment networks           │
└─────────────────────────────────────────────────────────────────┘
```

#### Tab Navigation (Matching Payables Management Style)
```
📊 Dashboard  👥 Billers  ✅ Approved  📋 Directory  💸 Payment Networks
```

#### Dashboard Overview Cards (Consistent with Current Metrics)
```
┌─────────────────┐ ┌─────────────────┐ ┌─────────────────┐ ┌─────────────────┐
│ Total Billers   │ │ Active Networks │ │ This Month      │ │ Success Rate    │
│                 │ │                 │ │                 │ │                 │
│      287        │ │        7        │ │      $89,500    │ │      99.2%      │
│ Configured      │ │ ACH, FedNow+    │ │ Bills paid      │ │ Payment success │
└─────────────────┘ └─────────────────┘ └─────────────────┘ └─────────────────┘
```

## Sub-Navigation Architecture

### 3. Biller Directory Interface

#### Search & Filter Bar
```
┌─────────────────────────────────────────────────────────────────┐
│ 🔍 Search billers by name, category, or service type...         │
│                                                                 │
│ 📍 Location: Olathe, KS    📑 Category: All    💳 Networks: All │
└─────────────────────────────────────────────────────────────────┘
```

#### Category Filter Chips (Following PayOnward Button Style)
```
[🏠 All Categories] [💡 Utilities] [🚗 Insurance] [🏛️ Government] 
[🏥 Healthcare] [🎓 Education] [💳 Financial] [📱 Telecom] [+ More]
```

#### Biller Directory Table View
```
┌──────────────────────────────────────────────────────────────────────────────────┐
│ Biller Name          │ Category    │ Networks      │ Processing │ Status │ Action  │
├──────────────────────────────────────────────────────────────────────────────────┤
│ 🏢 Evergy            │ Utilities   │ ACH, FedNow   │ Instant   │ ✅ Active│ [Setup]│
│ ⚡ Kansas City, MO   │ Electric    │ RTP, Card     │           │         │         │
├──────────────────────────────────────────────────────────────────────────────────┤
│ 🚗 State Farm        │ Insurance   │ ACH, Stripe   │ 1-2 days  │ 📋 Setup │ [Add]  │
│ 🛡️  Auto & Home      │ Auto/Home   │ Venmo         │           │ Required│         │
├──────────────────────────────────────────────────────────────────────────────────┤
│ 💧 WaterOne          │ Utilities   │ ACH, RTP      │ Same day  │ ✅ Active│ [Edit] │
│ 🏠 Residential Water │ Water/Sewer │               │           │         │         │
└──────────────────────────────────────────────────────────────────────────────────┘
```

### 4. Add New Biller Modal (Following PayOnward Modal Pattern)

#### Step 1: Search & Discovery Modal
```
┌─────────────────────────────────────────────────────────────────┐
│ ✕ Add New Biller                                    [1 of 3]   │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│ 🔍 Search for your biller                                       │
│ ┌─────────────────────────────────────────────────────────────┐ │
│ │ e.g., "Evergy", "State Farm", "Chase Bank"                 │ │
│ └─────────────────────────────────────────────────────────────┘ │
│                                                                 │
│ Quick Actions:                                                  │
│ ┌─────────────┐ ┌─────────────┐ ┌─────────────────────────────┐ │
│ │📸 Scan Bill │ │📍 Use GPS   │ │🏢 Browse by Category        │ │
│ └─────────────┘ └─────────────┘ └─────────────────────────────┘ │
│                                                                 │
│ Popular Categories:                                             │
│ 💡 Utilities  🚗 Insurance  🏥 Healthcare  🎓 Education        │
│ 🏛️ Government  💳 Credit Cards  📱 Telecom  🏠 Loans           │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│                               [Cancel] [Search] │
└─────────────────────────────────────────────────────────────────┘
```

#### Step 2: Biller Selection & Verification
```
┌─────────────────────────────────────────────────────────────────┐
│ ← Back: Select Biller                              [2 of 3]    │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│ Search Results for "Evergy":                                    │
│                                                                 │
│ ┌─ ✅ Recommended Match ─────────────────────────────────────┐  │
│ │ 🏢 Evergy - Kansas City                                    │  │
│ │ Electric Utility • Serves Kansas & Missouri                │  │
│ │                                                            │  │
│ │ 📞 1-800-EVERGY      🌐 evergy.com                        │  │
│ │ 💳 Accepts: ACH, FedNow, RTP, Cards                       │  │
│ │ ⏱️ Processing: Instant posting                             │  │
│ │ 📋 Account Format: ####-####-####                         │  │
│ │                                                            │  │
│ │ ⭐⭐⭐⭐⭐ 4.8/5 (1,247 businesses use this)               │  │
│ └────────────────────────────────────────────────────────────┘  │
│                                                                 │
│ Other Matches:                                                  │
│ □ 🏢 Evergy West (Topeka Region)                               │
│ □ 🏢 Evergy Missouri West                                      │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│                         [← Previous] [Next: Setup Account →]   │
└─────────────────────────────────────────────────────────────────┘
```

#### Step 3: Account Configuration
```
┌─────────────────────────────────────────────────────────────────┐
│ ← Back: Configure Account                          [3 of 3]    │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│ 🏢 Evergy - Kansas City                                        │
│                                                                 │
│ Account Information:                                            │
│ ┌─────────────────────────────────────────────────────────────┐ │
│ │ Account Number * (Required)                                 │ │
│ │ ┌─────────────────────────────────────────────────────────┐ │ │
│ │ │ 1234-5678-9012                                          │ │ │
│ │ └─────────────────────────────────────────────────────────┘ │ │
│ │ ✅ Valid format • Pattern matched                           │ │
│ └─────────────────────────────────────────────────────────────┘ │
│                                                                 │
│ ┌─────────────────────────────────────────────────────────────┐ │
│ │ Account Nickname (Optional)                                 │ │
│ │ ┌─────────────────────────────────────────────────────────┐ │ │
│ │ │ Main Office Electric                                    │ │ │
│ │ └─────────────────────────────────────────────────────────┘ │ │
│ └─────────────────────────────────────────────────────────────┘ │
│                                                                 │
│ Payment Settings:                                               │
│ ☑️ Enable automatic payment processing                          │
│ ☑️ Send notification 3 days before due date                    │
│ ☐ Set up recurring payments                                    │
│                                                                 │
│ Preferred Payment Network:                                      │
│ ⚪ ACH (Standard - 1-2 business days)                          │
│ 🔵 FedNow (Instant - Available 24/7) ← Recommended            │
│ ⚪ RTP (Real-time - Business hours)                            │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│                         [← Previous] [🔵 Add Biller] │
└─────────────────────────────────────────────────────────────────┘
```

### 5. Advanced Features Integration

#### Smart Search with Auto-Complete
```
Search Dropdown:
┌─────────────────────────────────────────────────────────────────┐
│ 🔍 "Ever..." ↵                                                  │
├─────────────────────────────────────────────────────────────────┤
│ 💡 Suggestions:                                                │
│ 🏢 Evergy (Electric - Kansas City)                            │
│ 🏢 Evergy West (Electric - Topeka)                            │
│ ⚡ Evergreen Energy (Renewable Energy)                         │
│                                                                 │
│ 📍 Popular in Your Area:                                       │
│ 💧 WaterOne                                                    │
│ 🗑️ Waste Management                                            │
│ 📱 AT&T                                                        │
└─────────────────────────────────────────────────────────────────┘
```

#### Bill Barcode Scanning Interface
```
┌─────────────────────────────────────────────────────────────────┐
│ ✕ Scan Bill                                     📸 Camera Mode  │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│        ┌─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─┐              │
│        │                                         │              │
│        │         📄 Position your bill           │              │
│        │         within the frame                │              │
│        │                                         │              │
│        │       🎯 Focus on biller name           │              │
│        │       and account information           │              │
│        │                                         │              │
│        └─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─┘              │
│                                                                 │
│ 💡 Tips: Ensure good lighting and hold camera steady           │
│                                                                 │
│ ┌─────────────┐ ┌─────────────┐ ┌─────────────────────────────┐ │
│ │📸 Capture   │ │🔦 Flash     │ │📁 Upload from Files        │ │
│ └─────────────┘ └─────────────┘ └─────────────────────────────┘ │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│                                          [Cancel] [📸 Capture] │
└─────────────────────────────────────────────────────────────────┘
```

### 6. Payment Network Integration Dashboard

#### Network Status Overview
```
┌─────────────────────────────────────────────────────────────────┐
│ Payment Networks Status                     🟢 All Systems Up   │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│ ┌─ ACH Network ─────────┐ ┌─ FedNow ──────────┐ ┌─ RTP ────────┐ │
│ │ 🟢 Operational        │ │ 🟢 Operational    │ │ 🟢 Operational│ │
│ │ 1,247 billers        │ │ 892 billers       │ │ 634 billers   │ │
│ │ 99.8% uptime         │ │ 99.9% uptime      │ │ 99.7% uptime  │ │
│ └───────────────────────┘ └───────────────────┘ └───────────────┘ │
│                                                                 │
│ ┌─ Stripe ─────────────┐ ┌─ TabaPay ─────────┐ ┌─ Venmo ──────┐ │
│ │ 🟢 Operational        │ │ 🟢 Operational    │ │ 🟡 Maintenance│ │
│ │ 2,156 billers        │ │ 445 billers       │ │ 234 billers   │ │
│ │ 99.9% uptime         │ │ 99.6% uptime      │ │ Scheduled 2PM │ │
│ └───────────────────────┘ └───────────────────┘ └───────────────┘ │
│                                                                 │
│ ┌─ Plaid (Verification)─────────────────────────────────────────┐ │
│ │ 🟢 Bank verification services operational                     │ │
│ │ 15,000+ supported financial institutions                     │ │
│ └───────────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────┘
```

## Desktop UX Considerations

### 7. Responsive Design Elements

#### Desktop-Optimized Layout
- **Two-column layout**: Left sidebar navigation + main content area
- **Table views**: Sortable columns for biller management  
- **Bulk actions**: Checkbox selection for multiple billers
- **Keyboard shortcuts**: Tab navigation, Enter to select, ESC to close modals
- **Hover states**: Clear interactive feedback on all clickable elements

#### Data Management Features
```
Biller Management Toolbar:
┌─────────────────────────────────────────────────────────────────┐
│ ☑️ Select All  📥 Export  📤 Import  🔄 Sync  ⚙️ Settings        │
│                                                                 │
│ 🔍 Search: _________________ 📅 Added: Last 30 days ▼          │
│                                                                 │
│ Showing 1-50 of 287 billers                          [1][2][3] │
└─────────────────────────────────────────────────────────────────┘
```

### 8. Integration with Existing Payables Workflow

#### Workflow Connection Points
```
Current Payables Flow:
Vendors → Bills → Approvals → Outgoing Payments

Enhanced Flow with Biller Directory:
Vendors → Biller Directory → Bills → Approvals → Payment Networks → Outgoing Payments
          ↑                         ↑              ↑
    Setup & Config           Automated Processing  Multi-Network
```

#### Quick Actions Integration
- **From Vendor Page**: "Set up as Biller" button
- **From Bills Page**: "Find Biller Network" option
- **From Payments Page**: Network selection based on biller capabilities
- **AI Assistant**: Smart suggestions for optimal payment networks

### 9. Security & Compliance Dashboard

#### Security Monitoring Interface
```
┌─────────────────────────────────────────────────────────────────┐
│ Security & Compliance Status                    🔒 Secure       │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│ 🔐 Encryption: AES-256 end-to-end ✅                           │
│ 🏛️ Compliance: PCI DSS Level 1, SOC 2 Type II ✅               │
│ 🔍 Monitoring: Real-time fraud detection ✅                    │
│ 🔑 Authentication: MFA required ✅                              │
│                                                                 │
│ Recent Security Events:                                         │
│ • No suspicious activity detected (Last 30 days)               │
│ • 3,247 successful payments processed                           │
│ • 0 failed security checks                                     │
│                                                                 │
│ 📊 Risk Score: Low (2/100) 🟢                                  │
└─────────────────────────────────────────────────────────────────┘
```

## Implementation Notes for Cursor

### 10. Next.js Component Architecture

#### File Structure for Next.js App
```
/pages/
├── payables/
│   ├── index.js                    // /payables - Main payables dashboard
│   ├── vendors.js                  // /payables/vendors - Vendor management  
│   ├── biller-directory/
│   │   ├── index.js               // /payables/biller-directory - Main directory
│   │   ├── add.js                 // /payables/biller-directory/add - Add biller wizard
│   │   └── [billerId].js          // /payables/biller-directory/[id] - Biller details
│   ├── bills.js                   // /payables/bills - Bill tracking
│   └── payments.js                // /payables/payments - Payment processing

/components/
├── layout/
│   ├── Layout.js                  // Main app layout with navigation
│   ├── SidebarNav.js              // Updated sidebar with Payables expansion
│   └── PayablesLayout.js          // Payables section layout wrapper
├── billers/
│   ├── BillerDirectoryMain.js     // Main directory dashboard
│   ├── BillerSearchBar.js         // Search and filter component
│   ├── BillerTable.js             // Directory table with sorting
│   ├── BillerCard.js              // Individual biller card component
│   ├── AddBillerWizard.js         // Multi-step add biller modal
│   ├── NetworkStatusDashboard.js  // Payment network status
│   ├── BarcodeScanner.js          // Bill scanning component
│   └── CategoryBrowser.js         // Category filtering interface
├── ui/
│   ├── Modal.js                   // Reusable modal component
│   ├── Button.js                  // PayOnward-styled buttons
│   ├── Card.js                    // Metrics card components  
│   ├── Table.js                   // Sortable table component
│   ├── SearchInput.js             // Search input with autocomplete
│   └── LoadingSpinner.js          // Loading states

/hooks/
├── useBillerDirectory.js          // Biller search & management
├── usePaymentNetworks.js          // Network status & integration
├── useBarcodeScanner.js           // Camera & OCR functionality
├── useLocalStorage.js             // Persist user preferences
└── useDebounce.js                 // Debounced search input

/lib/
├── mockData/
│   ├── billers.js                 // Mock biller directory data
│   ├── networks.js                // Mock payment network status
│   ├── categories.js              // Mock category data
│   └── metrics.js                 // Mock dashboard metrics
├── services/
│   ├── billerService.js           // Biller CRUD operations (mock)
│   ├── networkService.js          // Network status service (mock)  
│   └── ocrService.js              // Bill scanning service (mock)
└── utils/
    ├── validation.js              // Account number validation
    ├── formatters.js              // Data formatting utilities
    └── constants.js               // App constants & enums

/styles/
├── globals.css                    // Global styles
├── components/
│   ├── billers.module.css         // Biller-specific styles
│   ├── navigation.module.css      // Navigation styles
│   └── modals.module.css          // Modal styles
└── payables.module.css            // Payables section styles

/public/
├── icons/
│   ├── billers/                   // Biller category icons
│   └── networks/                  // Payment network logos
└── images/
    └── placeholders/              // Placeholder images for demo
```

### 11. Next.js Implementation Examples

#### Main Biller Directory Page (`/pages/payables/biller-directory/index.js`)
```javascript
import { useState, useEffect } from 'react';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import PayablesLayout from '../../../components/layout/PayablesLayout';
import BillerDirectoryMain from '../../../components/billers/BillerDirectoryMain';
import { billerService } from '../../../lib/services/billerService';

export default function BillerDirectoryPage({ initialMetrics, initialNetworkStatus }) {
  return (
    <>
      <Head>
        <title>Biller Directory - PayOnward</title>
        <meta name="description" content="Manage your biller relationships and payment networks" />
      </Head>
      
      <PayablesLayout>
        <BillerDirectoryMain 
          initialMetrics={initialMetrics}
          initialNetworkStatus={initialNetworkStatus}
        />
      </PayablesLayout>
    </>
  );
}

// Server-side data fetching for initial load
export const getServerSideProps = async (context) => {
  try {
    const [metrics, networkStatus] = await Promise.all([
      billerService.getDashboardMetrics(),
      billerService.getNetworkStatus()
    ]);
    
    return {
      props: {
        initialMetrics: metrics,
        initialNetworkStatus: networkStatus,
      },
    };
  } catch (error) {
    console.error('Failed to load initial data:', error);
    return {
      props: {
        initialMetrics: null,
        initialNetworkStatus: null,
      },
    };
  }
};
```

#### API Routes for Mock Data (`/pages/api/payables/billers/`)
```javascript
// /pages/api/payables/billers/search.js
import { mockBillers } from '../../../../lib/mockData/billers';

export default function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }
  
  const { query, category, location, networks } = req.query;
  
  let results = mockBillers;
  
  // Filter by search query
  if (query) {
    results = results.filter(biller => 
      biller.name.toLowerCase().includes(query.toLowerCase()) ||
      biller.category.toLowerCase().includes(query.toLowerCase())
    );
  }
  
  // Filter by category
  if (category && category !== 'all') {
    results = results.filter(biller => 
      biller.category.toLowerCase() === category.toLowerCase()
    );
  }
  
  // Filter by location
  if (location) {
    results = results.filter(biller => 
      biller.location.toLowerCase().includes(location.toLowerCase())
    );
  }
  
  // Filter by supported networks
  if (networks) {
    const networkArray = networks.split(',');
    results = results.filter(biller => 
      networkArray.some(network => biller.networks.includes(network))
    );
  }
  
  // Simulate API delay for realistic demo
  setTimeout(() => {
    res.status(200).json({
      billers: results,
      total: results.length,
      query,
      filters: { category, location, networks }
    });
  }, 300);
}

// /pages/api/payables/billers/add.js
export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }
  
  const { billerData } = req.body;
  
  // Validate required fields
  if (!billerData.name || !billerData.accountNumber) {
    return res.status(400).json({ 
      message: 'Missing required fields: name and accountNumber' 
    });
  }
  
  // Simulate processing delay
  setTimeout(() => {
    const newBiller = {
      id: mockBillers.length + 1,
      ...billerData,
      status: 'Active',
      dateAdded: new Date().toISOString(),
      billerCode: `BL${String(mockBillers.length + 1).padStart(6, '0')}`
    };
    
    mockBillers.push(newBiller);
    
    res.status(201).json({
      message: 'Biller added successfully',
      biller: newBiller
    });
  }, 800);
}

// /pages/api/payables/networks/status.js
import { mockNetworkStatus } from '../../../../lib/mockData/networks';

export default function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }
  
  // Simulate real-time network status
  setTimeout(() => {
    res.status(200).json(mockNetworkStatus);
  }, 200);
}
```

#### Custom Hooks for Data Management
```javascript
// /hooks/useBillerDirectory.js
import { useState, useEffect, useCallback } from 'react';
import { useDebounce } from './useDebounce';

export const useBillerDirectory = () => {
  const [billers, setBillers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({
    category: 'all',
    location: '',
    networks: []
  });
  
  const debouncedQuery = useDebounce(searchQuery, 300);
  
  const searchBillers = useCallback(async () => {
    setLoading(true);
    
    try {
      const params = new URLSearchParams({
        query: debouncedQuery,
        category: filters.category,
        location: filters.location,
        networks: filters.networks.join(',')
      });
      
      const response = await fetch(`/api/payables/billers/search?${params}`);
      
      if (!response.ok) {
        throw new Error('Failed to search billers');
      }
      
      const data = await response.json();
      setBillers(data.billers);
    } catch (error) {
      console.error('Search failed:', error);
      setBillers([]);
    } finally {
      setLoading(false);
    }
  }, [debouncedQuery, filters]);
  
  useEffect(() => {
    searchBillers();
  }, [searchBillers]);
  
  const addBiller = async (billerData) => {
    try {
      const response = await fetch('/api/payables/billers/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ billerData }),
      });
      
      if (!response.ok) {
        throw new Error('Failed to add biller');
      }
      
      const result = await response.json();
      
      // Refresh the biller list
      await searchBillers();
      
      return result;
    } catch (error) {
      console.error('Add biller failed:', error);
      throw error;
    }
  };
  
  return {
    billers,
    loading,
    searchQuery,
    setSearchQuery,
    filters,
    setFilters,
    addBiller,
    refetch: searchBillers
  };
};

// /hooks/usePaymentNetworks.js
import { useState, useEffect } from 'react';

export const usePaymentNetworks = () => {
  const [networkStatus, setNetworkStatus] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const fetchNetworkStatus = async () => {
      try {
        const response = await fetch('/api/payables/networks/status');
        const data = await response.json();
        setNetworkStatus(data);
      } catch (error) {
        console.error('Failed to fetch network status:', error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchNetworkStatus();
    
    // Set up polling for real-time updates
    const interval = setInterval(fetchNetworkStatus, 30000); // Every 30 seconds
    
    return () => clearInterval(interval);
  }, []);
  
  return { networkStatus, loading, refetch: () => fetchNetworkStatus() };
};

// /hooks/useDebounce.js
import { useState, useEffect } from 'react';

export const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);
  
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);
  
  return debouncedValue;
};
```

#### React Component Examples
```javascript
// /components/billers/BillerSearchBar.js
import { useState } from 'react';
import styles from '../../styles/components/billers.module.css';

const BillerSearchBar = ({ onSearch, onFilterChange, loading }) => {
  const [query, setQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  
  const handleSearch = (e) => {
    const value = e.target.value;
    setQuery(value);
    onSearch(value);
  };
  
  return (
    <div className={styles.searchContainer}>
      <div className={styles.searchInput}>
        <input
          type="text"
          placeholder="Search billers by name, category, or service type..."
          value={query}
          onChange={handleSearch}
          className={styles.input}
          disabled={loading}
        />
        <button 
          className={styles.filterToggle}
          onClick={() => setShowFilters(!showFilters)}
        >
          🔽 Filters
        </button>
      </div>
      
      {showFilters && (
        <div className={styles.filterPanel}>
          <div className={styles.filterRow}>
            <label>Location:</label>
            <input 
              type="text" 
              placeholder="e.g., Olathe, KS"
              onChange={(e) => onFilterChange({ location: e.target.value })}
            />
          </div>
          
          <div className={styles.filterRow}>
            <label>Category:</label>
            <select onChange={(e) => onFilterChange({ category: e.target.value })}>
              <option value="all">All Categories</option>
              <option value="utilities">Utilities</option>
              <option value="insurance">Insurance</option>
              <option value="government">Government</option>
              <option value="healthcare">Healthcare</option>
            </select>
          </div>
        </div>
      )}
    </div>
  );
};

export default BillerSearchBar;

// /components/billers/BillerTable.js
import { useState } from 'react';
import styles from '../../styles/components/billers.module.css';

const BillerTable = ({ billers, onSelectBiller, loading }) => {
  const [sortField, setSortField] = useState('name');
  const [sortDirection, setSortDirection] = useState('asc');
  
  const sortedBillers = [...billers].sort((a, b) => {
    const aValue = a[sortField];
    const bValue = b[sortField];
    
    if (sortDirection === 'asc') {
      return aValue > bValue ? 1 : -1;
    } else {
      return aValue < bValue ? 1 : -1;
    }
  });
  
  const handleSort = (field) => {
    if (field === sortField) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };
  
  if (loading) {
    return <div className={styles.loading}>Loading billers...</div>;
  }
  
  return (
    <div className={styles.tableContainer}>
      <table className={styles.billerTable}>
        <thead>
          <tr>
            <th onClick={() => handleSort('name')}>
              Biller Name {sortField === 'name' && (sortDirection === 'asc' ? '↑' : '↓')}
            </th>
            <th onClick={() => handleSort('category')}>
              Category {sortField === 'category' && (sortDirection === 'asc' ? '↑' : '↓')}
            </th>
            <th>Networks</th>
            <th>Processing</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {sortedBillers.map((biller) => (
            <tr key={biller.id} className={styles.billerRow}>
              <td>
                <div className={styles.billerInfo}>
                  <strong>{biller.name}</strong>
                  <br />
                  <small>{biller.location}</small>
                </div>
              </td>
              <td>
                <span className={styles.category}>
                  {biller.category}
                </span>
                <br />
                <small>{biller.subCategory}</small>
              </td>
              <td>
                <div className={styles.networks}>
                  {biller.networks.map(network => (
                    <span key={network} className={styles.networkBadge}>
                      {network}
                    </span>
                  ))}
                </div>
              </td>
              <td>{biller.processingTime}</td>
              <td>
                <span className={`${styles.status} ${styles[biller.status.toLowerCase()]}`}>
                  {biller.status}
                </span>
              </td>
              <td>
                <button 
                  className={styles.actionButton}
                  onClick={() => onSelectBiller(biller)}
                >
                  {biller.status === 'Active' ? 'Edit' : 'Setup'}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BillerTable;
```

### 12. Mock Data Integration for Demo

#### Mock Data Structure
```javascript
// mockBillerDirectory.js
export const mockBillers = [
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
    }
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
    }
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
    }
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
    }
  }
];

// mockNetworkStatus.js
export const mockNetworkStatus = {
  ach: {
    name: "ACH Network",
    status: "operational",
    uptime: 99.8,
    billerCount: 1247,
    color: "green"
  },
  fednow: {
    name: "FedNow",
    status: "operational",
    uptime: 99.9,
    billerCount: 892,
    color: "green"
  },
  rtp: {
    name: "RTP",
    status: "operational",
    uptime: 99.7,
    billerCount: 634,
    color: "green"
  },
  stripe: {
    name: "Stripe",
    status: "operational",
    uptime: 99.9,
    billerCount: 2156,
    color: "green"
  },
  tabapay: {
    name: "TabaPay",
    status: "operational",
    uptime: 99.6,
    billerCount: 445,
    color: "green"
  },
  venmo: {
    name: "Venmo",
    status: "maintenance",
    uptime: 99.4,
    billerCount: 234,
    color: "yellow",
    message: "Scheduled maintenance 2PM"
  },
  plaid: {
    name: "Plaid Verification",
    status: "operational",
    uptime: 99.8,
    institutionCount: 15000,
    color: "green"
  }
};

// mockCategories.js
export const mockCategories = [
  { id: 1, name: "Utilities", icon: "💡", count: 45, subcategories: ["Electric", "Gas", "Water", "Waste"] },
  { id: 2, name: "Insurance", icon: "🚗", count: 28, subcategories: ["Auto", "Health", "Home", "Life"] },
  { id: 3, name: "Government", icon: "🏛️", count: 15, subcategories: ["Federal", "State", "Local", "Taxes"] },
  { id: 4, name: "Healthcare", icon: "🏥", count: 32, subcategories: ["Hospitals", "Clinics", "Pharmacies"] },
  { id: 5, name: "Education", icon: "🎓", count: 18, subcategories: ["Universities", "K-12", "Training"] },
  { id: 6, name: "Financial", icon: "💳", count: 67, subcategories: ["Credit Cards", "Loans", "Banking"] },
  { id: 7, name: "Telecommunications", icon: "📱", count: 22, subcategories: ["Internet", "Phone", "Cable"] }
];

// mockMetrics.js
export const mockDashboardMetrics = {
  totalBillers: {
    value: 287,
    label: "Configured",
    change: "+12 this month",
    trend: "up"
  },
  activeNetworks: {
    value: 7,
    label: "ACH, FedNow+",
    change: "All operational",
    trend: "stable"
  },
  monthlyVolume: {
    value: "$89,500",
    label: "Bills paid",
    change: "+15% vs last month",
    trend: "up"
  },
  successRate: {
    value: "99.2%",
    label: "Payment success",
    change: "0.3% improvement",
    trend: "up"
  }
};
```

#### Mock Service Functions
```javascript
// services/mockBillerService.js
export class MockBillerService {
  static async searchBillers(query, filters = {}) {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));
    
    let results = mockBillers;
    
    // Filter by query
    if (query) {
      results = results.filter(biller => 
        biller.name.toLowerCase().includes(query.toLowerCase()) ||
        biller.category.toLowerCase().includes(query.toLowerCase())
      );
    }
    
    // Filter by category
    if (filters.category) {
      results = results.filter(biller => biller.category === filters.category);
    }
    
    // Filter by location
    if (filters.location) {
      results = results.filter(biller => 
        biller.location.toLowerCase().includes(filters.location.toLowerCase())
      );
    }
    
    return {
      billers: results,
      total: results.length,
      page: 1,
      hasMore: false
    };
  }
  
  static async getBillerById(id) {
    await new Promise(resolve => setTimeout(resolve, 200));
    return mockBillers.find(biller => biller.id === parseInt(id));
  }
  
  static async addBiller(billerData) {
    await new Promise(resolve => setTimeout(resolve, 800));
    
    const newBiller = {
      id: mockBillers.length + 1,
      ...billerData,
      status: "Active",
      dateAdded: new Date().toISOString()
    };
    
    mockBillers.push(newBiller);
    return newBiller;
  }
  
  static async getNetworkStatus() {
    await new Promise(resolve => setTimeout(resolve, 300));
    return mockNetworkStatus;
  }
  
  static async getCategories() {
    await new Promise(resolve => setTimeout(resolve, 200));
    return mockCategories;
  }
  
  static async getDashboardMetrics() {
    await new Promise(resolve => setTimeout(resolve, 400));
    return mockDashboardMetrics;
  }
  
  static async scanBill(imageData) {
    // Simulate OCR processing
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Return mock OCR results
    return {
      billerName: "Evergy",
      accountNumber: "1234-5678-9012",
      amount: "$125.48",
      dueDate: "2025-03-15",
      confidence: 0.95,
      billerId: 1
    };
  }
  
  static async validateAccount(billerId, accountNumber) {
    await new Promise(resolve => setTimeout(resolve, 300));
    
    const biller = mockBillers.find(b => b.id === billerId);
    if (!biller) return { valid: false, error: "Biller not found" };
    
    // Simple pattern validation simulation
    const pattern = biller.accountPattern;
    const isValid = accountNumber.length >= 8; // Simplified validation
    
    return {
      valid: isValid,
      formatted: isValid ? accountNumber : null,
      error: isValid ? null : "Invalid account number format"
    };
  }
}

// Usage in React components
import { MockBillerService } from '../services/mockBillerService';

// Example usage in component
const [billers, setBillers] = useState([]);
const [loading, setLoading] = useState(false);

const searchBillers = async (query) => {
  setLoading(true);
  try {
    const results = await MockBillerService.searchBillers(query);
    setBillers(results.billers);
  } catch (error) {
    console.error('Search failed:', error);
  } finally {
    setLoading(false);
  }
};
```

#### Mock Data Integration in Components
```javascript
// Example: BillerDirectoryMain.jsx with mock data
import { useEffect, useState } from 'react';
import { MockBillerService } from '../../services/mockBillerService';

const BillerDirectoryMain = () => {
  const [metrics, setMetrics] = useState(null);
  const [networkStatus, setNetworkStatus] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const loadDashboardData = async () => {
      try {
        const [metricsData, networkData] = await Promise.all([
          MockBillerService.getDashboardMetrics(),
          MockBillerService.getNetworkStatus()
        ]);
        
        setMetrics(metricsData);
        setNetworkStatus(networkData);
      } catch (error) {
        console.error('Failed to load dashboard data:', error);
      } finally {
        setLoading(false);
      }
    };
    
    loadDashboardData();
  }, []);
  
  if (loading) {
    return <div>Loading dashboard...</div>;
  }
  
  return (
    <div className="biller-directory-main">
      {/* Render metrics cards and network status */}
    </div>
  );
};
```

This implementation seamlessly integrates the biller directory functionality into the existing PayOnward interface while maintaining the current navigation structure and design system consistency.
