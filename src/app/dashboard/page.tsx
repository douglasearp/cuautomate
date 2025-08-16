'use client';

import { useState } from 'react';
import { 
  TrendingUp, 
  TrendingDown, 
  DollarSign, 
  Clock, 
  AlertTriangle, 
  CheckCircle,
  ArrowUpRight,
  ArrowDownRight,
  Eye,
  MessageSquare,
  Calendar,
  BarChart3,
  Zap,
  Brain,
  Users,
  CreditCard
} from 'lucide-react';

// Mock data from specifications
const mockData = {
  healthScore: {
    current: 87,
    trend: '+5',
    factors: {
      cashFlow: 92,
      paymentTiming: 85,
      vendorRelations: 89,
      creditUtilization: 83
    },
    recommendations: [
      "Enable early payment discounts to improve cash flow",
      "Automate vendor payments to capture 2% discount"
    ]
  },
  cashFlow: {
    currentBalance: 45000,
    projectedBalance: 52000,
    inflow: 12500,
    outflow: 8500,
    netFlow: 4000
  },
  aiInsights: [
    {
      type: 'opportunity',
      priority: 'high',
      title: 'Early Payment Discount Opportunity',
      description: 'Vendor ABC Corp offers 2% discount for payments within 10 days. Potential savings: $340/month',
      action: 'Enable auto-payment',
      impact: '$4,080 annual savings'
    },
    {
      type: 'warning',
      priority: 'medium',
      title: 'Cash Flow Dip Predicted',
      description: 'Your cash flow may drop below $5,000 on Friday. Consider sending early payment reminders.',
      action: 'Send payment reminders',
      impact: 'Maintain positive cash flow'
    }
  ],
  notifications: [
    {
      id: 'notif_001',
      type: 'payment_received',
      title: '🎉 Payment Received',
      message: 'ABC Company paid Invoice #1234 ($2,500)',
      timestamp: '2025-08-16T09:15:00Z',
      priority: 'high',
      actions: ['View Invoice', 'Send Thank You']
    },
    {
      id: 'notif_002',
      type: 'ai_recommendation',
      title: '💡 AI Suggestion',
      message: 'Send gentle reminder to XYZ Corp - 87% chance of payment today',
      timestamp: '2025-08-16T08:45:00Z',
      priority: 'medium',
      actions: ['Send Reminder', 'Schedule for Later', 'Dismiss']
    }
  ],
  quickActions: [
    { name: 'Send payment reminders', icon: MessageSquare, color: 'blue' },
    { name: 'Create new invoice', icon: DollarSign, color: 'green' },
    { name: 'Pay urgent bills', icon: CreditCard, color: 'orange' },
    { name: 'Update cash flow forecast', icon: TrendingUp, color: 'purple' },
    { name: 'Schedule vendor calls', icon: Users, color: 'indigo' },
    { name: 'Export financial report', icon: BarChart3, color: 'gray' }
  ]
};

export default function DashboardPage() {
  const [selectedTimeframe, setSelectedTimeframe] = useState('30d');

  const getHealthColor = (score: number) => {
    if (score >= 80) return 'text-green-600';
    if (score >= 60) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getHealthStatus = (score: number) => {
    if (score >= 80) return 'Excellent';
    if (score >= 60) return 'Good';
    return 'Needs Attention';
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      {/* Page Header */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
              <p className="text-gray-600">Welcome back, Sarah</p>
            </div>
            <div className="flex items-center space-x-4">
              <button className="btn-primary">
                <Zap className="h-4 w-4 mr-2" />
                Quick Actions
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Financial Health Score Card */}
        <div className="grid lg:grid-cols-3 gap-6 mb-8">
          <div className="lg:col-span-2">
            <div className="card">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-900">Financial Health Score</h2>
                <div className="flex items-center space-x-2">
                  <span className={`text-sm font-semibold ${getHealthColor(mockData.healthScore.current)}`}>
                    {getHealthStatus(mockData.healthScore.current)}
                  </span>
                  <div className="flex items-center text-green-600">
                    <TrendingUp className="h-4 w-4 mr-1" />
                    <span className="text-sm font-semibold">{mockData.healthScore.trend}</span>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center space-x-8">
                <div className="relative">
                  <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 100 100">
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      stroke="currentColor"
                      strokeWidth="8"
                      fill="transparent"
                      className="text-gray-200"
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      stroke="currentColor"
                      strokeWidth="8"
                      fill="transparent"
                      strokeDasharray={`${(mockData.healthScore.current / 100) * 251.2} 251.2`}
                      className={`${getHealthColor(mockData.healthScore.current)} transition-all duration-1000`}
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-2xl font-bold text-gray-900">{mockData.healthScore.current}</span>
                  </div>
                </div>
                
                <div className="flex-1">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-gray-600">Cash Flow</span>
                        <span className="text-sm font-semibold text-green-600">{mockData.healthScore.factors.cashFlow}</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-green-500 h-2 rounded-full" style={{ width: `${mockData.healthScore.factors.cashFlow}%` }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-gray-600">Payment Timing</span>
                        <span className="text-sm font-semibold text-yellow-600">{mockData.healthScore.factors.paymentTiming}</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-yellow-500 h-2 rounded-full" style={{ width: `${mockData.healthScore.factors.paymentTiming}%` }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-gray-600">Vendor Relations</span>
                        <span className="text-sm font-semibold text-green-600">{mockData.healthScore.factors.vendorRelations}</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-green-500 h-2 rounded-full" style={{ width: `${mockData.healthScore.factors.vendorRelations}%` }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-gray-600">Credit Utilization</span>
                        <span className="text-sm font-semibold text-blue-600">{mockData.healthScore.factors.creditUtilization}</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-blue-500 h-2 rounded-full" style={{ width: `${mockData.healthScore.factors.creditUtilization}%` }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Cash Flow Summary */}
          <div className="card">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Cash Flow Summary</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Current Balance</span>
                <span className="text-2xl font-bold text-gray-900">${mockData.cashFlow.currentBalance.toLocaleString()}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Projected (30d)</span>
                <span className="text-lg font-semibold text-green-600">${mockData.cashFlow.projectedBalance.toLocaleString()}</span>
              </div>
              <div className="border-t pt-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-600">Inflow</span>
                  <span className="text-sm font-semibold text-green-600">+${mockData.cashFlow.inflow.toLocaleString()}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Outflow</span>
                  <span className="text-sm font-semibold text-red-600">-${mockData.cashFlow.outflow.toLocaleString()}</span>
                </div>
                <div className="flex items-center justify-between mt-2 pt-2 border-t">
                  <span className="text-sm font-semibold text-gray-900">Net Flow</span>
                  <span className="text-sm font-bold text-green-600">+${mockData.cashFlow.netFlow.toLocaleString()}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* AI Insights and Notifications */}
        <div className="grid lg:grid-cols-2 gap-6 mb-8">
          {/* AI Insights */}
          <div className="card">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold text-gray-900">AI Insights</h3>
              <Brain className="h-5 w-5 text-[#2D5016]" />
            </div>
            <div className="space-y-4">
              {mockData.aiInsights.map((insight, index) => (
                <div key={index} className="border-l-4 border-[#2D5016] pl-4 py-3 bg-[#2D5016]/5 rounded-r-lg">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 mb-1">{insight.title}</h4>
                      <p className="text-sm text-gray-600 mb-2">{insight.description}</p>
                      <div className="flex items-center space-x-4 text-xs">
                        <span className="text-[#2D5016] font-semibold">{insight.impact}</span>
                        <button className="text-[#2D5016] hover:underline">{insight.action}</button>
                      </div>
                    </div>
                    <div className={`px-2 py-1 rounded-full text-xs font-semibold ${
                      insight.priority === 'high' ? 'bg-red-100 text-red-700' : 'bg-yellow-100 text-yellow-700'
                    }`}>
                      {insight.priority}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Notifications */}
          <div className="card">
            <h3 className="text-lg font-bold text-gray-900 mb-6">Recent Activity</h3>
            <div className="space-y-4">
              {mockData.notifications.map((notification) => (
                <div key={notification.id} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                  <div className="flex-shrink-0">
                    {notification.type === 'payment_received' ? (
                      <CheckCircle className="h-5 w-5 text-green-600" />
                    ) : (
                      <Brain className="h-5 w-5 text-[#2D5016]" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-gray-900">{notification.title}</p>
                    <p className="text-sm text-gray-600">{notification.message}</p>
                    <div className="flex items-center space-x-2 mt-2">
                      {notification.actions.map((action, index) => (
                        <button key={index} className="text-xs text-[#2D5016] hover:underline">
                          {action}
                        </button>
                      ))}
                    </div>
                  </div>
                  <span className="text-xs text-gray-500">
                    {new Date(notification.timestamp).toLocaleTimeString()}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="card">
          <h3 className="text-lg font-bold text-gray-900 mb-6">Quick Actions</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {mockData.quickActions.map((action, index) => (
              <button
                key={index}
                className="flex flex-col items-center p-4 bg-gray-50 hover:bg-gray-100 rounded-lg transition-all duration-200 group"
              >
                <div className={`p-3 rounded-lg bg-${action.color}-100 text-${action.color}-600 mb-3 group-hover:scale-110 transition-transform duration-200`}>
                  <action.icon className="h-6 w-6" />
                </div>
                <span className="text-sm font-medium text-gray-700 text-center">{action.name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
