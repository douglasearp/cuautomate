'use client';

import { useState } from 'react';
import { 
  DollarSign, 
  Clock, 
  TrendingUp, 
  Building2, 
  FileText,
  CreditCard,
  BarChart3,
  Calendar,
  AlertTriangle,
  CheckCircle,
  XCircle,
  ArrowUpRight,
  Users,
  CheckCircle2
} from 'lucide-react';

// Mock data for payables dashboard
const mockPayablesData = {
  totalOutstanding: 125000,
  overdueAmount: 25000,
  dueThisWeek: 35000,
  dueNextWeek: 45000,
  averagePaymentDays: 28,
  activeVendors: 45,
  pendingApprovals: 12
};

const mockRecentActivity = [
  {
    id: '1',
    type: 'bill_created',
    description: 'Bill created for Tech Solutions Inc',
    amount: 2500,
    timestamp: new Date('2025-01-15T10:30:00'),
    vendorName: 'Tech Solutions Inc'
  },
  {
    id: '2',
    type: 'payment_made',
    description: 'Payment processed for Office Supplies Co',
    amount: 1800,
    timestamp: new Date('2025-01-15T09:15:00'),
    vendorName: 'Office Supplies Co'
  },
  {
    id: '3',
    type: 'bill_approved',
    description: 'Bill approved for Marketing Agency',
    amount: 5000,
    timestamp: new Date('2025-01-15T08:45:00'),
    vendorName: 'Marketing Agency'
  },
  {
    id: '4',
    type: 'vendor_added',
    description: 'New vendor added: Cloud Services Ltd',
    amount: null,
    timestamp: new Date('2025-01-14T16:20:00'),
    vendorName: 'Cloud Services Ltd'
  }
];

const mockUpcomingPayments = [
  {
    id: '1',
    vendorName: 'Tech Solutions Inc',
    amount: 2500,
    dueDate: new Date('2025-01-20'),
    daysUntilDue: 5,
    isOverdue: false
  },
  {
    id: '2',
    vendorName: 'Office Supplies Co',
    amount: 1800,
    dueDate: new Date('2025-01-18'),
    daysUntilDue: 3,
    isOverdue: false
  },
  {
    id: '3',
    vendorName: 'Marketing Agency',
    amount: 5000,
    dueDate: new Date('2025-01-15'),
    daysUntilDue: 0,
    isOverdue: true
  },
  {
    id: '4',
    vendorName: 'Cloud Services Ltd',
    amount: 1200,
    dueDate: new Date('2025-01-25'),
    daysUntilDue: 10,
    isOverdue: false
  }
];

const mockVendorSpending = [
  {
    vendorId: '1',
    vendorName: 'Tech Solutions Inc',
    totalSpent: 45000,
    billCount: 12,
    averageBillAmount: 3750
  },
  {
    vendorId: '2',
    vendorName: 'Office Supplies Co',
    totalSpent: 28000,
    billCount: 8,
    averageBillAmount: 3500
  },
  {
    vendorId: '3',
    vendorName: 'Marketing Agency',
    totalSpent: 35000,
    billCount: 6,
    averageBillAmount: 5833
  }
];

export default function PayablesPage() {
  const [selectedPeriod, setSelectedPeriod] = useState('30d');

  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'bill_created': return <FileText className="h-4 w-4 text-blue-600" />;
      case 'payment_made': return <CreditCard className="h-4 w-4 text-green-600" />;
      case 'bill_approved': return <CheckCircle className="h-4 w-4 text-green-600" />;
      case 'vendor_added': return <Building2 className="h-4 w-4 text-purple-600" />;
      default: return <FileText className="h-4 w-4 text-gray-600" />;
    }
  };

  const getActivityColor = (type: string) => {
    switch (type) {
      case 'bill_created': return 'bg-blue-50 border-blue-200';
      case 'payment_made': return 'bg-green-50 border-green-200';
      case 'bill_approved': return 'bg-green-50 border-green-200';
      case 'vendor_added': return 'bg-purple-50 border-purple-200';
      default: return 'bg-gray-50 border-gray-200';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      {/* Page Header */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Payables Management</h1>
              <p className="text-gray-600">Manage your accounts payable and vendor relationships</p>
            </div>
            <div className="flex items-center space-x-4">
              <select 
                value={selectedPeriod}
                onChange={(e) => setSelectedPeriod(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0ea5e9] focus:border-transparent"
              >
                <option value="7d">Last 7 Days</option>
                <option value="30d">Last 30 Days</option>
                <option value="90d">Last 90 Days</option>
                <option value="1y">Last Year</option>
              </select>
              <button className="btn-primary">
                <BarChart3 className="h-4 w-4 mr-2" />
                Generate Report
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Sub Navigation */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex space-x-8">
            <a href="/payables" className="flex items-center space-x-2 py-4 px-1 border-b-2 border-[#0ea5e9] text-[#0ea5e9] font-medium text-sm">
              <BarChart3 className="h-4 w-4" />
              <span>Dashboard</span>
            </a>
            <a href="/payables/vendors" className="flex items-center space-x-2 py-4 px-1 border-b-2 border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 font-medium text-sm">
              <Users className="h-4 w-4" />
              <span>Vendors</span>
            </a>
            <a href="/payables/approvals" className="flex items-center space-x-2 py-4 px-1 border-b-2 border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 font-medium text-sm">
              <CheckCircle2 className="h-4 w-4" />
              <span>Approvals</span>
            </a>
            <a href="/payables/bills" className="flex items-center space-x-2 py-4 px-1 border-b-2 border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 font-medium text-sm">
              <FileText className="h-4 w-4" />
              <span>Bills</span>
            </a>
            <a href="/payables/payments" className="flex items-center space-x-2 py-4 px-1 border-b-2 border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 font-medium text-sm">
              <CreditCard className="h-4 w-4" />
              <span>Outgoing Payments</span>
            </a>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Key Metrics */}
        <div className="grid lg:grid-cols-4 gap-6 mb-8">
          <div className="card">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-gray-900">Total Outstanding</h3>
              <DollarSign className="h-5 w-5 text-[#0ea5e9]" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">
              ${mockPayablesData.totalOutstanding.toLocaleString()}
            </div>
            <div className="flex items-center text-[#0ea5e9]">
              <span className="text-sm font-semibold">Unpaid bills</span>
            </div>
          </div>

          <div className="card">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-gray-900">Overdue</h3>
              <AlertTriangle className="h-5 w-5 text-red-500" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">
              ${mockPayablesData.overdueAmount.toLocaleString()}
            </div>
            <div className="flex items-center text-red-600">
              <span className="text-sm font-semibold">Past due amounts</span>
            </div>
          </div>

          <div className="card">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-gray-900">Due This Week</h3>
              <Clock className="h-5 w-5 text-yellow-500" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">
              ${mockPayablesData.dueThisWeek.toLocaleString()}
            </div>
            <div className="flex items-center text-yellow-600">
              <span className="text-sm font-semibold">Upcoming payments</span>
            </div>
          </div>

          <div className="card">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-gray-900">Pending Approvals</h3>
              <CheckCircle2 className="h-5 w-5 text-orange-500" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">
              {mockPayablesData.pendingApprovals}
            </div>
            <div className="flex items-center text-orange-600">
              <span className="text-sm font-semibold">Awaiting approval</span>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Recent Activity */}
          <div className="lg:col-span-2">
            <div className="card">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold text-gray-900">Recent Activity</h3>
                <button className="text-sm text-[#0ea5e9] hover:underline">View All</button>
              </div>
              <div className="space-y-4">
                {mockRecentActivity.map((activity) => (
                  <div key={activity.id} className={`flex items-start space-x-3 p-3 rounded-lg border ${getActivityColor(activity.type)}`}>
                    {getActivityIcon(activity.type)}
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900">{activity.description}</p>
                      <p className="text-xs text-gray-500">
                        {activity.vendorName} • {activity.timestamp.toLocaleDateString()}
                      </p>
                    </div>
                    {activity.amount && (
                      <div className="text-sm font-semibold text-gray-900">
                        ${activity.amount.toLocaleString()}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Upcoming Payments */}
          <div className="lg:col-span-1">
            <div className="card">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold text-gray-900">Upcoming Payments</h3>
                <button className="text-sm text-[#0ea5e9] hover:underline">View All</button>
              </div>
              <div className="space-y-4">
                {mockUpcomingPayments.map((payment) => (
                  <div key={payment.id} className="flex items-center justify-between p-3 rounded-lg border border-gray-200 hover:border-[#0ea5e9] transition-colors">
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 truncate">{payment.vendorName}</p>
                      <p className={`text-xs ${payment.isOverdue ? 'text-red-600' : 'text-gray-500'}`}>
                        {payment.isOverdue ? 'Overdue' : `${payment.daysUntilDue} days`}
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-semibold text-gray-900">
                        ${payment.amount.toLocaleString()}
                      </div>
                      <div className="text-xs text-gray-500">
                        {payment.dueDate.toLocaleDateString()}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Vendor Spending Analysis */}
        <div className="card mt-8">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-bold text-gray-900">Top Vendor Spending</h3>
            <button className="text-sm text-[#0ea5e9] hover:underline">View All Vendors</button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Vendor</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Total Spent</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Bill Count</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Average Bill</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Actions</th>
                </tr>
              </thead>
              <tbody>
                {mockVendorSpending.map((vendor) => (
                  <tr key={vendor.vendorId} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-4 px-4">
                      <div className="flex items-center">
                        <Building2 className="h-4 w-4 text-gray-400 mr-2" />
                        <span className="font-medium text-gray-900">{vendor.vendorName}</span>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <div className="font-semibold text-gray-900">
                        ${vendor.totalSpent.toLocaleString()}
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <div className="text-gray-900">{vendor.billCount}</div>
                    </td>
                    <td className="py-4 px-4">
                      <div className="text-gray-900">
                        ${vendor.averageBillAmount.toLocaleString()}
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <button className="text-[#0ea5e9] hover:text-[#0284c7] text-sm">
                        View Details
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-4 gap-4 mt-8">
          <button className="card hover:border-[#0ea5e9] transition-colors cursor-pointer">
            <div className="flex items-center space-x-3">
              <Building2 className="h-5 w-5 text-[#0ea5e9]" />
              <span className="font-medium text-gray-900">Add Vendor</span>
            </div>
          </button>
          <button className="card hover:border-[#0ea5e9] transition-colors cursor-pointer">
            <div className="flex items-center space-x-3">
              <FileText className="h-5 w-5 text-[#0ea5e9]" />
              <span className="font-medium text-gray-900">Create Bill</span>
            </div>
          </button>
          <button className="card hover:border-[#0ea5e9] transition-colors cursor-pointer">
            <div className="flex items-center space-x-3">
              <CreditCard className="h-5 w-5 text-[#0ea5e9]" />
              <span className="font-medium text-gray-900">Schedule Payment</span>
            </div>
          </button>
          <button className="card hover:border-[#0ea5e9] transition-colors cursor-pointer">
            <div className="flex items-center space-x-3">
              <BarChart3 className="h-5 w-5 text-[#0ea5e9]" />
              <span className="font-medium text-gray-900">Run Reports</span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
