import { mockBillers, mockCategories, mockDashboardMetrics, mockNetworkStatus, Biller, Category, DashboardMetrics, NetworkStatus } from '../mockData/billers';

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
    
    // Filter by status
    if (filters.status && filters.status !== 'all') {
      results = results.filter(biller => biller.status === filters.status);
    }
    
    return {
      billers: results,
      total: results.length,
      query,
      filters
    };
  }

  async getBillerById(id: number) {
    await this.delay(200);
    const biller = mockBillers.find(b => b.id === id);
    
    if (!biller) {
      throw new Error(`Biller with id ${id} not found`);
    }
    
    return biller;
  }

  async addBiller(billerData: Partial<Biller>) {
    await this.delay(800);
    
    // Validation
    if (!billerData.name || !billerData.category) {
      throw new Error('Name and category are required');
    }
    
    const newBiller: Biller = {
      id: mockBillers.length + 1,
      name: billerData.name,
      category: billerData.category,
      subCategory: billerData.subCategory || '',
      location: billerData.location || 'Unknown',
      billerCode: `BL${String(mockBillers.length + 1).padStart(6, '0')}`,
      accountPattern: billerData.accountPattern || '########',
      networks: billerData.networks || ['ACH'],
      processingTime: this.getProcessingTime(billerData.networks?.[0] || 'ACH'),
      status: 'Active',
      rating: 0,
      usageCount: 0,
      contactInfo: billerData.contactInfo || {
        phone: '',
        website: '',
        email: ''
      },
      icon: this.getCategoryIcon(billerData.category),
      description: billerData.description || '',
      dateAdded: new Date().toISOString()
    };
    
    mockBillers.push(newBiller);
    
    return newBiller;
  }

  async updateBiller(id: number, updates: Partial<Biller>) {
    await this.delay(500);
    
    const billerIndex = mockBillers.findIndex(b => b.id === id);
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

  async deleteBiller(id: number) {
    await this.delay(300);
    
    const billerIndex = mockBillers.findIndex(b => b.id === id);
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
        trend: "stable" as const
      }
    };
  }

  async getNetworkStatus() {
    await this.delay(300);
    return mockNetworkStatus;
  }

  async validateAccountNumber(billerId: number, accountNumber: string) {
    await this.delay(200);
    
    const biller = mockBillers.find(b => b.id === billerId);
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

  async scanBill(imageData: string) {
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
  getProcessingTime(network: string) {
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

  getCategoryIcon(category: string) {
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
  async bulkUpdateBillers(billerIds: number[], updates: Partial<Biller>) {
    await this.delay(1000);
    
    const updatedBillers = [];
    
    for (const id of billerIds) {
      const billerIndex = mockBillers.findIndex(b => b.id === id);
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
