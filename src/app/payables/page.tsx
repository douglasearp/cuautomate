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
import PayablesLayout from '../../components/PayablesLayout';

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

export default function PayablesPage() {
  const [selectedPeriod, setSelectedPeriod] = useState('30d');

  return (
    <PayablesLayout>
      <div className="p-6">
        {/* Page Header */}
        <div className="mb-8">
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
              <button className="bg-[#0ea5e9] text-white px-4 py-2 rounded-lg hover:bg-[#0284c7] transition-colors flex items-center space-x-2">
                <BarChart3 className="h-4 w-4" />
                <span>Generate Report</span>
              </button>
            </div>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow">
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

          <div className="bg-white p-6 rounded-lg shadow">
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

          <div className="bg-white p-6 rounded-lg shadow">
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

          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-gray-900">Active Vendors</h3>
              <Users className="h-5 w-5 text-green-500" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">
              {mockPayablesData.activeVendors}
            </div>
            <div className="flex items-center text-green-600">
              <span className="text-sm font-semibold">Vendor relationships</span>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-4 gap-4 mt-8">
          <button className="bg-white p-6 rounded-lg shadow hover:border-[#0ea5e9] transition-colors cursor-pointer">
            <div className="flex items-center space-x-3">
              <Building2 className="h-5 w-5 text-[#0ea5e9]" />
              <span className="font-medium text-gray-900">Add Vendor</span>
            </div>
          </button>
          <button className="bg-white p-6 rounded-lg shadow hover:border-[#0ea5e9] transition-colors cursor-pointer">
            <div className="flex items-center space-x-3">
              <FileText className="h-5 w-5 text-[#0ea5e9]" />
              <span className="font-medium text-gray-900">Create Bill</span>
            </div>
          </button>
          <button className="bg-white p-6 rounded-lg shadow hover:border-[#0ea5e9] transition-colors cursor-pointer">
            <div className="flex items-center space-x-3">
              <CreditCard className="h-5 w-5 text-[#0ea5e9]" />
              <span className="font-medium text-gray-900">Schedule Payment</span>
            </div>
          </button>
          <button className="bg-white p-6 rounded-lg shadow hover:border-[#0ea5e9] transition-colors cursor-pointer">
            <div className="flex items-center space-x-3">
              <BarChart3 className="h-5 w-5 text-[#0ea5e9]" />
              <span className="font-medium text-gray-900">Run Reports</span>
            </div>
          </button>
        </div>
      </div>
    </PayablesLayout>
  );
}
