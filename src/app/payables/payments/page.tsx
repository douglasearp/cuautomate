'use client';

import { useState } from 'react';
import { 
  Search, 
  Filter, 
  Download, 
  Plus, 
  Building2,
  FileText,
  DollarSign,
  Calendar,
  AlertTriangle,
  CheckCircle,
  XCircle,
  Clock,
  MoreHorizontal,
  Eye,
  CreditCard,
  Banknote,
  Send,
  RefreshCw,
  BarChart3,
  CheckCircle2,
  Users
} from 'lucide-react';

// Mock payment data
const mockPayments = [
  {
    id: '1',
    billId: 'BILL-001',
    billNumber: 'BILL-2025-0001',
    vendorName: 'Tech Solutions Inc',
    amount: 2700,
    paymentMethod: 'ach',
    paymentDate: new Date('2025-01-20'),
    referenceNumber: 'ACH-2025-001',
    bankAccountId: 'BANK-001',
    status: 'scheduled',
    failureReason: null,
    reconciledAt: null,
    reconciledBy: null,
    createdAt: new Date('2025-01-15'),
    createdBy: 'John Smith',
    batchId: 'BATCH-001'
  },
  {
    id: '2',
    billId: 'BILL-002',
    billNumber: 'BILL-2025-0002',
    vendorName: 'Office Supplies Co',
    amount: 1944,
    paymentMethod: 'check',
    paymentDate: new Date('2025-01-18'),
    referenceNumber: 'CHECK-2025-001',
    bankAccountId: 'BANK-001',
    status: 'processing',
    failureReason: null,
    reconciledAt: null,
    reconciledBy: null,
    createdAt: new Date('2025-01-16'),
    createdBy: 'Lisa Chen',
    batchId: 'BATCH-001'
  },
  {
    id: '3',
    billId: 'BILL-003',
    billNumber: 'BILL-2025-0003',
    vendorName: 'Marketing Agency',
    amount: 5400,
    paymentMethod: 'wire',
    paymentDate: new Date('2025-01-25'),
    referenceNumber: 'WIRE-2025-001',
    bankAccountId: 'BANK-002',
    status: 'pending',
    failureReason: null,
    reconciledAt: null,
    reconciledBy: null,
    createdAt: new Date('2025-01-17'),
    createdBy: 'Alex Brown',
    batchId: null
  },
  {
    id: '4',
    billId: 'BILL-004',
    billNumber: 'BILL-2025-0004',
    vendorName: 'Cloud Services Ltd',
    amount: 1296,
    paymentMethod: 'ach',
    paymentDate: new Date('2025-01-15'),
    referenceNumber: 'ACH-2025-002',
    bankAccountId: 'BANK-001',
    status: 'completed',
    failureReason: null,
    reconciledAt: new Date('2025-01-16'),
    reconciledBy: 'System',
    createdAt: new Date('2025-01-14'),
    createdBy: 'Tom Wilson',
    batchId: 'BATCH-002'
  },
  {
    id: '5',
    billId: 'BILL-005',
    billNumber: 'BILL-2025-0005',
    vendorName: 'Legal Services Inc',
    amount: 3500,
    paymentMethod: 'ach',
    paymentDate: new Date('2025-01-19'),
    referenceNumber: 'ACH-2025-003',
    bankAccountId: 'BANK-001',
    status: 'failed',
    failureReason: 'Insufficient funds',
    reconciledAt: null,
    reconciledBy: null,
    createdAt: new Date('2025-01-18'),
    createdBy: 'Sarah Johnson',
    batchId: 'BATCH-003'
  }
];

const mockPaymentBatches = [
  {
    id: 'BATCH-001',
    batchNumber: 'BATCH-2025-001',
    paymentDate: new Date('2025-01-20'),
    paymentMethod: 'mixed',
    bankAccountId: 'BANK-001',
    totalAmount: 4644,
    billCount: 2,
    status: 'ready',
    bills: ['BILL-001', 'BILL-002'],
    paymentRecords: ['1', '2'],
    createdAt: new Date('2025-01-15'),
    createdBy: 'John Smith',
    processedAt: null,
    processedBy: null
  },
  {
    id: 'BATCH-002',
    batchNumber: 'BATCH-2025-002',
    paymentDate: new Date('2025-01-15'),
    paymentMethod: 'ach',
    bankAccountId: 'BANK-001',
    totalAmount: 1296,
    billCount: 1,
    status: 'completed',
    bills: ['BILL-004'],
    paymentRecords: ['4'],
    createdAt: new Date('2025-01-14'),
    createdBy: 'Tom Wilson',
    processedAt: new Date('2025-01-15'),
    processedBy: 'System'
  }
];

export default function PaymentsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [methodFilter, setMethodFilter] = useState('all');

  const filteredPayments = mockPayments.filter(payment => {
    const matchesSearch = payment.vendorName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         payment.billNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         payment.referenceNumber?.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || payment.status === statusFilter;
    const matchesMethod = methodFilter === 'all' || payment.paymentMethod === methodFilter;
    return matchesSearch && matchesStatus && matchesMethod;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending': return 'bg-yellow-100 text-yellow-700';
      case 'scheduled': return 'bg-blue-100 text-blue-700';
      case 'processing': return 'bg-purple-100 text-purple-700';
      case 'completed': return 'bg-green-100 text-green-700';
      case 'failed': return 'bg-red-100 text-red-700';
      case 'cancelled': return 'bg-gray-100 text-gray-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'pending': return <Clock className="h-4 w-4" />;
      case 'scheduled': return <Calendar className="h-4 w-4" />;
      case 'processing': return <RefreshCw className="h-4 w-4" />;
      case 'completed': return <CheckCircle className="h-4 w-4" />;
      case 'failed': return <XCircle className="h-4 w-4" />;
      case 'cancelled': return <XCircle className="h-4 w-4" />;
      default: return <Clock className="h-4 w-4" />;
    }
  };

  const getPaymentMethodIcon = (method: string) => {
    switch (method) {
      case 'ach': return <CreditCard className="h-4 w-4 text-green-600" />;
      case 'check': return <FileText className="h-4 w-4 text-blue-600" />;
      case 'wire': return <DollarSign className="h-4 w-4 text-purple-600" />;
      case 'credit_card': return <CreditCard className="h-4 w-4 text-orange-600" />;
      default: return <CreditCard className="h-4 w-4 text-gray-600" />;
    }
  };

  const getPaymentMethodLabel = (method: string) => {
    switch (method) {
      case 'ach': return 'ACH';
      case 'check': return 'Check';
      case 'wire': return 'Wire';
      case 'credit_card': return 'Credit Card';
      default: return method;
    }
  };

  const summaryData = {
    totalScheduled: mockPayments.filter(p => p.status === 'scheduled').reduce((sum, p) => sum + p.amount, 0),
    totalProcessing: mockPayments.filter(p => p.status === 'processing').reduce((sum, p) => sum + p.amount, 0),
    totalCompleted: mockPayments.filter(p => p.status === 'completed').reduce((sum, p) => sum + p.amount, 0),
    totalFailed: mockPayments.filter(p => p.status === 'failed').reduce((sum, p) => sum + p.amount, 0)
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      {/* Page Header */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Outgoing Payments</h1>
              <p className="text-gray-600">Manage and track your outgoing payments to vendors</p>
            </div>
            <div className="flex items-center space-x-4">
              <button className="btn-secondary">
                <Download className="h-4 w-4 mr-2" />
                Export Payments
              </button>
              <button className="btn-primary">
                <Plus className="h-4 w-4 mr-2" />
                Schedule Payment
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Sub Navigation */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex space-x-8">
            <a href="/payables" className="flex items-center space-x-2 py-4 px-1 border-b-2 border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 font-medium text-sm">
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
            <a href="/payables/payments" className="flex items-center space-x-2 py-4 px-1 border-b-2 border-[#0ea5e9] text-[#0ea5e9] font-medium text-sm">
              <CreditCard className="h-4 w-4" />
              <span>Outgoing Payments</span>
            </a>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Summary Cards */}
        <div className="grid lg:grid-cols-4 gap-6 mb-8">
          <div className="card">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-gray-900">Scheduled</h3>
              <Calendar className="h-5 w-5 text-blue-500" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">
              ${summaryData.totalScheduled.toLocaleString()}
            </div>
            <div className="flex items-center text-blue-600">
              <span className="text-sm font-semibold">Pending payments</span>
            </div>
          </div>

          <div className="card">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-gray-900">Processing</h3>
              <RefreshCw className="h-5 w-5 text-purple-500" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">
              ${summaryData.totalProcessing.toLocaleString()}
            </div>
            <div className="flex items-center text-purple-600">
              <span className="text-sm font-semibold">In progress</span>
            </div>
          </div>

          <div className="card">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-gray-900">Completed</h3>
              <CheckCircle className="h-5 w-5 text-green-500" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">
              ${summaryData.totalCompleted.toLocaleString()}
            </div>
            <div className="flex items-center text-green-600">
              <span className="text-sm font-semibold">Successful payments</span>
            </div>
          </div>

          <div className="card">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-gray-900">Failed</h3>
              <XCircle className="h-5 w-5 text-red-500" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">
              ${summaryData.totalFailed.toLocaleString()}
            </div>
            <div className="flex items-center text-red-600">
              <span className="text-sm font-semibold">Failed payments</span>
            </div>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="card mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search payments by vendor, bill number, or reference..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0ea5e9] focus:border-transparent"
                />
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0ea5e9] focus:border-transparent"
              >
                <option value="all">All Status</option>
                <option value="pending">Pending</option>
                <option value="scheduled">Scheduled</option>
                <option value="processing">Processing</option>
                <option value="completed">Completed</option>
                <option value="failed">Failed</option>
                <option value="cancelled">Cancelled</option>
              </select>
              <select
                value={methodFilter}
                onChange={(e) => setMethodFilter(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0ea5e9] focus:border-transparent"
              >
                <option value="all">All Methods</option>
                <option value="ach">ACH</option>
                <option value="check">Check</option>
                <option value="wire">Wire</option>
                <option value="credit_card">Credit Card</option>
              </select>
              <button className="btn-secondary">
                <Filter className="h-4 w-4 mr-2" />
                More Filters
              </button>
            </div>
          </div>
        </div>

        {/* Payments Table */}
        <div className="card">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Payment</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Vendor</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Amount</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Method</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Status</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Payment Date</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredPayments.map((payment) => (
                  <tr key={payment.id} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-4 px-4">
                      <div>
                        <div className="font-semibold text-gray-900">{payment.referenceNumber}</div>
                        <div className="text-sm text-gray-500">{payment.billNumber}</div>
                        <div className="text-xs text-gray-400">
                          Created by {payment.createdBy} • {payment.createdAt.toLocaleDateString()}
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex items-center">
                        <Building2 className="h-4 w-4 text-gray-400 mr-2" />
                        <span className="font-medium text-gray-900">{payment.vendorName}</span>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <div className="font-semibold text-gray-900">
                        ${payment.amount.toLocaleString()}
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex items-center space-x-2">
                        {getPaymentMethodIcon(payment.paymentMethod)}
                        <span className="text-gray-900">
                          {getPaymentMethodLabel(payment.paymentMethod)}
                        </span>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <div className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-semibold ${getStatusColor(payment.status)}`}>
                        {getStatusIcon(payment.status)}
                        <span className="ml-1 capitalize">{payment.status}</span>
                      </div>
                      {payment.failureReason && (
                        <div className="text-xs text-red-600 mt-1">
                          {payment.failureReason}
                        </div>
                      )}
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 text-gray-400 mr-2" />
                        <span className="text-gray-900">{payment.paymentDate.toLocaleDateString()}</span>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex items-center space-x-2">
                        <button className="text-[#0ea5e9] hover:text-[#0284c7]">
                          <Eye className="h-4 w-4" />
                        </button>
                        {payment.status === 'failed' && (
                          <button className="text-orange-600 hover:text-orange-700">
                            <RefreshCw className="h-4 w-4" />
                          </button>
                        )}
                        {payment.status === 'pending' && (
                          <button className="text-green-600 hover:text-green-700">
                            <Send className="h-4 w-4" />
                          </button>
                        )}
                        <button className="text-gray-400 hover:text-gray-600">
                          <MoreHorizontal className="h-4 w-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Empty State */}
          {filteredPayments.length === 0 && (
            <div className="text-center py-12">
              <CreditCard className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No payments found</h3>
              <p className="text-gray-600 mb-4">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>

        {/* Payment Batches */}
        <div className="card mt-8">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-bold text-gray-900">Payment Batches</h3>
            <button className="text-sm text-[#0ea5e9] hover:underline">View All Batches</button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Batch Number</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Payment Date</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Method</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Total Amount</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Bill Count</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Status</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Actions</th>
                </tr>
              </thead>
              <tbody>
                {mockPaymentBatches.map((batch) => (
                  <tr key={batch.id} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-4 px-4">
                      <div className="font-semibold text-gray-900">{batch.batchNumber}</div>
                    </td>
                    <td className="py-4 px-4">
                      <div className="text-gray-900">{batch.paymentDate.toLocaleDateString()}</div>
                    </td>
                    <td className="py-4 px-4">
                      <div className="text-gray-900 capitalize">{batch.paymentMethod}</div>
                    </td>
                    <td className="py-4 px-4">
                      <div className="font-semibold text-gray-900">
                        ${batch.totalAmount.toLocaleString()}
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <div className="text-gray-900">{batch.billCount}</div>
                    </td>
                    <td className="py-4 px-4">
                      <div className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-semibold ${getStatusColor(batch.status)}`}>
                        {getStatusIcon(batch.status)}
                        <span className="ml-1 capitalize">{batch.status}</span>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex items-center space-x-2">
                        <button className="text-[#0ea5e9] hover:text-[#0284c7]">
                          <Eye className="h-4 w-4" />
                        </button>
                        {batch.status === 'ready' && (
                          <button className="text-green-600 hover:text-green-700">
                            <Send className="h-4 w-4" />
                          </button>
                        )}
                      </div>
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
              <Plus className="h-5 w-5 text-[#0ea5e9]" />
              <span className="font-medium text-gray-900">Schedule Payment</span>
            </div>
          </button>
          <button className="card hover:border-[#0ea5e9] transition-colors cursor-pointer">
            <div className="flex items-center space-x-3">
              <CreditCard className="h-5 w-5 text-[#0ea5e9]" />
              <span className="font-medium text-gray-900">Create Batch</span>
            </div>
          </button>
          <button className="card hover:border-[#0ea5e9] transition-colors cursor-pointer">
            <div className="flex items-center space-x-3">
              <RefreshCw className="h-5 w-5 text-[#0ea5e9]" />
              <span className="font-medium text-gray-900">Reconcile</span>
            </div>
          </button>
          <button className="card hover:border-[#0ea5e9] transition-colors cursor-pointer">
            <div className="flex items-center space-x-3">
              <BarChart3 className="h-5 w-5 text-[#0ea5e9]" />
              <span className="font-medium text-gray-900">Payment Reports</span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
