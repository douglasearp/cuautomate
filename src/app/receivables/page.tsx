'use client';

import { useState } from 'react';
import { 
  DollarSign, 
  Clock, 
  TrendingUp, 
  Users, 
  FileText,
  CreditCard,
  BarChart3,
  Calendar,
  AlertTriangle,
  CheckCircle,
  XCircle,
  ArrowUpRight
} from 'lucide-react';

// Mock data for receivables dashboard
const mockReceivablesData = {
  metrics: {
    totalOutstanding: 125000,
    overdueAmount: 45000,
    paidThisMonth: 89000,
    averageDaysToPayment: 28,
    totalCustomers: 45,
    activeInvoices: 67
  },
  agingReport: [
    { period: 'Current (0-30 days)', amount: 65000, percentage: 52, color: 'bg-green-500' },
    { period: '31-60 days', amount: 35000, percentage: 28, color: 'bg-yellow-500' },
    { period: '61-90 days', amount: 15000, percentage: 12, color: 'bg-orange-500' },
    { period: '90+ days', amount: 10000, percentage: 8, color: 'bg-red-500' }
  ],
  paymentMethods: [
    { method: 'Wire Transfer', amount: 45000, percentage: 35 },
    { method: 'ACH', amount: 38000, percentage: 30 },
    { method: 'Credit Card', amount: 25000, percentage: 20 },
    { method: 'Check', amount: 17000, percentage: 15 }
  ],
  recentInvoices: [
    { id: 'INV-001', customer: 'Tech Solutions Inc', amount: 12500, dueDate: '2025-01-15', status: 'Sent' },
    { id: 'INV-002', customer: 'Global Manufacturing', amount: 8900, dueDate: '2025-01-20', status: 'Viewed' },
    { id: 'INV-003', customer: 'Local Coffee Roasters', amount: 5600, dueDate: '2025-01-25', status: 'Partial' },
    { id: 'INV-004', customer: 'Digital Marketing Pro', amount: 7800, dueDate: '2025-01-30', status: 'Overdue' }
  ],
  upcomingPayments: [
    { customer: 'Tech Solutions Inc', amount: 12500, dueDate: '2025-01-15', daysLeft: 5 },
    { customer: 'Global Manufacturing', amount: 8900, dueDate: '2025-01-20', daysLeft: 10 },
    { customer: 'Local Coffee Roasters', amount: 5600, dueDate: '2025-01-25', daysLeft: 15 },
    { customer: 'Digital Marketing Pro', amount: 7800, dueDate: '2025-01-30', daysLeft: 20 }
  ]
};

export default function ReceivablesPage() {
  const [selectedPeriod, setSelectedPeriod] = useState('30d');

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      {/* Page Header */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Receivables Management</h1>
              <p className="text-gray-600">Track and manage your accounts receivable</p>
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Key Metrics */}
        <div className="grid lg:grid-cols-3 gap-6 mb-8">
          <div className="card">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-gray-900">Total Outstanding</h3>
              <DollarSign className="h-5 w-5 text-[#0ea5e9]" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">
              ${mockReceivablesData.metrics.totalOutstanding.toLocaleString()}
            </div>
            <div className="flex items-center text-green-600">
              <TrendingUp className="h-4 w-4 mr-1" />
              <span className="text-sm font-semibold">+8.2% from last month</span>
            </div>
          </div>

          <div className="card">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-gray-900">Overdue Amount</h3>
              <AlertTriangle className="h-5 w-5 text-red-500" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">
              ${mockReceivablesData.metrics.overdueAmount.toLocaleString()}
            </div>
            <div className="flex items-center text-red-600">
              <ArrowUpRight className="h-4 w-4 mr-1" />
              <span className="text-sm font-semibold">+12.5% from last month</span>
            </div>
          </div>

          <div className="card">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-gray-900">Paid This Month</h3>
              <CheckCircle className="h-5 w-5 text-green-500" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">
              ${mockReceivablesData.metrics.paidThisMonth.toLocaleString()}
            </div>
            <div className="flex items-center text-green-600">
              <TrendingUp className="h-4 w-4 mr-1" />
              <span className="text-sm font-semibold">+15.3% from last month</span>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 mb-8">
          <div className="card">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-gray-900">Avg Days to Payment</h3>
              <Clock className="h-5 w-5 text-[#0ea5e9]" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">
              {mockReceivablesData.metrics.averageDaysToPayment} days
            </div>
            <div className="flex items-center text-green-600">
              <TrendingUp className="h-4 w-4 mr-1" />
              <span className="text-sm font-semibold">-2.1 days from last month</span>
            </div>
          </div>

          <div className="card">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-gray-900">Total Customers</h3>
              <Users className="h-5 w-5 text-[#0ea5e9]" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">
              {mockReceivablesData.metrics.totalCustomers}
            </div>
            <div className="flex items-center text-green-600">
              <TrendingUp className="h-4 w-4 mr-1" />
              <span className="text-sm font-semibold">+3 new this month</span>
            </div>
          </div>

          <div className="card">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-gray-900">Active Invoices</h3>
              <FileText className="h-5 w-5 text-[#0ea5e9]" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">
              {mockReceivablesData.metrics.activeInvoices}
            </div>
            <div className="flex items-center text-green-600">
              <TrendingUp className="h-4 w-4 mr-1" />
              <span className="text-sm font-semibold">+5 from last month</span>
            </div>
          </div>
        </div>

        {/* Charts and Tables */}
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* Aging Report */}
          <div className="card">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Aging Report</h2>
            <div className="space-y-4">
              {mockReceivablesData.agingReport.map((item, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className={`w-4 h-4 ${item.color} rounded-full`}></div>
                    <span className="text-sm font-medium text-gray-700">{item.period}</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-32 bg-gray-200 rounded-full h-2">
                      <div 
                        className={`h-2 ${item.color} rounded-full`}
                        style={{ width: `${item.percentage}%` }}
                      ></div>
                    </div>
                    <span className="text-sm font-semibold text-gray-900">
                      ${item.amount.toLocaleString()}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Payment Methods */}
          <div className="card">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Payment Methods</h2>
            <div className="space-y-4">
              {mockReceivablesData.paymentMethods.map((item, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <CreditCard className="h-4 w-4 text-[#0ea5e9]" />
                    <span className="text-sm font-medium text-gray-700">{item.method}</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-32 bg-gray-200 rounded-full h-2">
                      <div 
                        className="h-2 bg-[#0ea5e9] rounded-full"
                        style={{ width: `${item.percentage}%` }}
                      ></div>
                    </div>
                    <span className="text-sm font-semibold text-gray-900">
                      ${item.amount.toLocaleString()}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Recent Invoices and Upcoming Payments */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Recent Invoices */}
          <div className="card">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-900">Recent Invoices</h2>
              <button className="text-sm text-[#0ea5e9] hover:underline">View All</button>
            </div>
            <div className="space-y-4">
              {mockReceivablesData.recentInvoices.map((invoice, index) => (
                <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-[#0ea5e9] transition-colors">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3">
                      <span className="font-semibold text-gray-900">{invoice.id}</span>
                      <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                        invoice.status === 'Sent' ? 'bg-blue-100 text-blue-700' :
                        invoice.status === 'Viewed' ? 'bg-green-100 text-green-700' :
                        invoice.status === 'Partial' ? 'bg-yellow-100 text-yellow-700' :
                        'bg-red-100 text-red-700'
                      }`}>
                        {invoice.status}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600">{invoice.customer}</p>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold text-gray-900">${invoice.amount.toLocaleString()}</div>
                    <div className="text-sm text-gray-600">Due {new Date(invoice.dueDate).toLocaleDateString()}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Upcoming Payments */}
          <div className="card">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-900">Upcoming Payments</h2>
              <button className="text-sm text-[#0ea5e9] hover:underline">View All</button>
            </div>
            <div className="space-y-4">
              {mockReceivablesData.upcomingPayments.map((payment, index) => (
                <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-[#0ea5e9] transition-colors">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3">
                      <Calendar className="h-4 w-4 text-[#0ea5e9]" />
                      <span className="font-semibold text-gray-900">{payment.customer}</span>
                    </div>
                    <p className="text-sm text-gray-600">Due in {payment.daysLeft} days</p>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold text-gray-900">${payment.amount.toLocaleString()}</div>
                    <div className="text-sm text-gray-600">{new Date(payment.dueDate).toLocaleDateString()}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
