'use client';

import { useState } from 'react';
import { 
  BarChart3, 
  TrendingUp, 
  TrendingDown, 
  DollarSign,
  Users,
  Calendar,
  Download,
  Filter
} from 'lucide-react';

// Mock revenue data
const mockRevenueData = [
  {
    period: 'Jan',
    actualRevenue: 85000,
    projectedRevenue: 80000,
    growth: 12.5
  },
  {
    period: 'Feb',
    actualRevenue: 92000,
    projectedRevenue: 85000,
    growth: 8.2
  },
  {
    period: 'Mar',
    actualRevenue: 78000,
    projectedRevenue: 90000,
    growth: -2.1
  },
  {
    period: 'Apr',
    actualRevenue: 105000,
    projectedRevenue: 95000,
    growth: 15.8
  },
  {
    period: 'May',
    actualRevenue: 115000,
    projectedRevenue: 100000,
    growth: 18.3
  },
  {
    period: 'Jun',
    actualRevenue: 125000,
    projectedRevenue: 110000,
    growth: 22.1
  },
  {
    period: 'Jul',
    actualRevenue: 135000,
    projectedRevenue: 120000,
    growth: 25.4
  },
  {
    period: 'Aug',
    actualRevenue: 145000,
    projectedRevenue: 130000,
    growth: 28.7
  },
  {
    period: 'Sep',
    actualRevenue: 155000,
    projectedRevenue: 140000,
    growth: 31.2
  },
  {
    period: 'Oct',
    actualRevenue: 165000,
    projectedRevenue: 150000,
    growth: 33.8
  },
  {
    period: 'Nov',
    actualRevenue: 175000,
    projectedRevenue: 160000,
    growth: 36.1
  },
  {
    period: 'Dec',
    actualRevenue: 185000,
    projectedRevenue: 170000,
    growth: 38.5
  }
];

export default function AnalyticsPage() {
  const [selectedPeriod, setSelectedPeriod] = useState('30d');

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      {/* Page Header */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Analytics</h1>
              <p className="text-gray-600">Business intelligence and performance metrics</p>
            </div>
            <div className="flex items-center space-x-4">
              <select
                value={selectedPeriod}
                onChange={(e) => setSelectedPeriod(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0ea5e9] focus:border-transparent"
              >
                <option value="7d">Last 7 Days</option>
                <option value="30d">Last 30 Days</option>
                <option value="90d">Last 90 Days</option>
                <option value="1y">Last Year</option>
              </select>
              <button className="btn-primary">
                <Download className="h-4 w-4 mr-2" />
                Export Report
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* KPI Cards */}
        <div className="grid lg:grid-cols-4 gap-6 mb-8">
          <div className="card">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-gray-900">Total Revenue</h3>
              <DollarSign className="h-5 w-5 text-[#0ea5e9]" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">
              $125,000
            </div>
            <div className="flex items-center text-green-600">
              <TrendingUp className="h-4 w-4 mr-1" />
              <span className="text-sm font-semibold">+15.3% from last period</span>
            </div>
          </div>

          <div className="card">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-gray-900">Active Customers</h3>
              <Users className="h-5 w-5 text-[#14b8a6]" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">
              156
            </div>
            <div className="flex items-center text-green-600">
              <TrendingUp className="h-4 w-4 mr-1" />
              <span className="text-sm font-semibold">+8.2% from last period</span>
            </div>
          </div>

          <div className="card">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-gray-900">Collection Rate</h3>
              <BarChart3 className="h-5 w-5 text-[#38bdf8]" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">
              96.8%
            </div>
            <div className="flex items-center text-green-600">
              <TrendingUp className="h-4 w-4 mr-1" />
              <span className="text-sm font-semibold">+2.1% from last period</span>
            </div>
          </div>

          <div className="card">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-gray-900">Days Sales Outstanding</h3>
              <Calendar className="h-5 w-5 text-[#14b8a6]" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">
              28.5
            </div>
            <div className="flex items-center text-green-600">
              <TrendingDown className="h-4 w-4 mr-1" />
              <span className="text-sm font-semibold">-3.2 days from last period</span>
            </div>
          </div>
        </div>

        {/* Revenue Trends Chart */}
        <div className="card mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-gray-900">Revenue Trends</h2>
            <div className="flex items-center space-x-2">
              <div className="flex items-center space-x-1">
                <div className="w-3 h-3 bg-[#0ea5e9] rounded-full"></div>
                <span className="text-sm text-gray-600">Actual Revenue</span>
              </div>
              <div className="flex items-center space-x-1">
                <div className="w-3 h-3 bg-[#14b8a6] rounded-full opacity-40"></div>
                <span className="text-sm text-gray-600">Projected Revenue</span>
              </div>
            </div>
          </div>
          
          <div className="h-80 bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
            <div className="flex items-end justify-between h-full space-x-4">
              {mockRevenueData.map((data, index) => {
                const maxValue = Math.max(...mockRevenueData.map(d => Math.max(d.actualRevenue, d.projectedRevenue)));
                const actualHeight = (data.actualRevenue / maxValue) * 80;
                const projectedHeight = (data.projectedRevenue / maxValue) * 80;
                
                return (
                  <div key={index} className="flex flex-col items-center flex-1 group">
                    <div className="w-full bg-gray-100 rounded-lg mb-2 relative h-full min-h-[200px] border border-gray-200">
                      {/* Projected Revenue Bar (background) */}
                      <div 
                        className="chart-bar bg-[#14b8a6] rounded-lg absolute bottom-0 w-full shadow-sm hover:shadow-md"
                        style={{ 
                          '--bar-height': `${Math.max(10, projectedHeight)}%`,
                          '--animation-delay': `${index * 150}ms`,
                          opacity: 0.4
                        } as React.CSSProperties}
                      ></div>
                      
                      {/* Actual Revenue Bar (foreground) */}
                      <div 
                        className="chart-bar bg-[#0ea5e9] rounded-lg absolute bottom-0 w-full shadow-md hover:shadow-lg group-hover:bg-[#0284c7]"
                        style={{ 
                          '--bar-height': `${Math.max(10, actualHeight)}%`,
                          '--animation-delay': `${index * 150 + 300}ms`
                        } as React.CSSProperties}
                      ></div>
                      
                      {/* Growth Indicator */}
                      <div 
                        className={`absolute top-0 left-1/2 transform -translate-x-1/2 w-3 h-3 rounded-full shadow-sm animate-pulse ${
                          data.growth >= 0 ? 'bg-green-500' : 'bg-red-500'
                        }`}
                        style={{ 
                          top: `${Math.max(10, Math.max(actualHeight, projectedHeight))}%`,
                          transform: 'translate(-50%, -50%)'
                        }}
                      ></div>
                      
                      {/* Hover Tooltip */}
                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-5 transition-all duration-200 rounded-lg"></div>
                    </div>
                    
                    {/* Period Label */}
                    <div className="text-xs text-gray-600 text-center mb-1">
                      {data.period}
                    </div>
                    
                    {/* Revenue Label */}
                    <div className="text-xs font-semibold text-gray-900 text-center">
                      ${data.actualRevenue.toLocaleString()}
                    </div>
                    
                    {/* Growth Label */}
                    <div className={`text-xs font-semibold text-center mt-1 ${
                      data.growth >= 0 ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {data.growth >= 0 ? '+' : ''}{data.growth}%
                    </div>
                  </div>
                );
              })}
            </div>
            
            {/* Chart Legend */}
            <div className="flex items-center justify-center space-x-6 mt-4 pt-4 border-t border-gray-200">
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-[#0ea5e9] rounded"></div>
                <span className="text-sm text-gray-600">Actual Revenue</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-[#14b8a6] rounded opacity-30"></div>
                <span className="text-sm text-gray-600">Projected Revenue</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-sm text-gray-600">Growth</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <span className="text-sm text-gray-600">Decline</span>
              </div>
            </div>
          </div>
        </div>

        {/* Analytics Grid */}
        <div className="grid lg:grid-cols-2 gap-6">
          <div className="card">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Top Performing Customers</h3>
            <div className="space-y-3">
              {[
                { name: 'ABC Restaurant Group', revenue: 45000, growth: '+12%' },
                { name: 'Tech Startup LLC', revenue: 38000, growth: '+8%' },
                { name: 'Local Manufacturing Co', revenue: 32000, growth: '+15%' },
                { name: 'Government Contract', revenue: 28000, growth: '+5%' },
                { name: 'Healthcare Provider', revenue: 25000, growth: '+18%' }
              ].map((customer, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <div className="font-medium text-gray-900">{customer.name}</div>
                    <div className="text-sm text-gray-600">${customer.revenue.toLocaleString()}</div>
                  </div>
                  <div className="text-sm font-semibold text-green-600">{customer.growth}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="card">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Payment Performance</h3>
            <div className="space-y-4">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-600">On-time Payments</span>
                  <span className="text-sm font-semibold text-green-600">78%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{ width: '78%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-600">Early Payments</span>
                  <span className="text-sm font-semibold text-blue-600">15%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-500 h-2 rounded-full" style={{ width: '15%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-600">Late Payments</span>
                  <span className="text-sm font-semibold text-red-600">7%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-red-500 h-2 rounded-full" style={{ width: '7%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
