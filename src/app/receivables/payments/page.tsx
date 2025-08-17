'use client';

import { useState } from 'react';
import { 
  Search, 
  Filter, 
  Download, 
  Plus, 
  CreditCard,
  DollarSign,
  Calendar,
  Clock,
  CheckCircle,
  XCircle,
  AlertTriangle,
  MoreHorizontal,
  Eye,
  RefreshCw,
  FileText
} from 'lucide-react';

// Mock payment data
const mockPayments = [
  {
    id: 'PAY-001',
    referenceNumber: 'REF-2025-001',
    invoiceNumber: 'INV-001',
    customer: 'Tech Solutions Inc',
    amount: 12500,
    discountApplied: 0,
    paymentMethod: 'Wire Transfer',
    paymentDate: '2025-01-15',
    processedDate: '2025-01-15',
    status: 'Cleared',
    notes: 'Payment received on time'
  },
  {
    id: 'PAY-002',
    referenceNumber: 'REF-2025-002',
    invoiceNumber: 'INV-002',
    customer: 'Global Manufacturing',
    amount: 8900,
    discountApplied: 200,
    paymentMethod: 'ACH',
    paymentDate: '2025-01-14',
    processedDate: '2025-01-15',
    status: 'Cleared',
    notes: 'Early payment discount applied'
  },
  {
    id: 'PAY-003',
    referenceNumber: 'REF-2025-003',
    invoiceNumber: 'INV-003',
    customer: 'Local Coffee Roasters',
    amount: 5600,
    discountApplied: 0,
    paymentMethod: 'Credit Card',
    paymentDate: '2025-01-13',
    processedDate: '2025-01-13',
    status: 'Cleared',
    notes: 'Online payment'
  },
  {
    id: 'PAY-004',
    referenceNumber: 'REF-2025-004',
    invoiceNumber: 'INV-004',
    customer: 'Digital Marketing Pro',
    amount: 7800,
    discountApplied: 0,
    paymentMethod: 'Check',
    paymentDate: '2025-01-12',
    processedDate: null,
    status: 'Pending',
    notes: 'Check in transit'
  },
  {
    id: 'PAY-005',
    referenceNumber: 'REF-2025-005',
    invoiceNumber: 'INV-005',
    customer: 'Green Energy Solutions',
    amount: 15000,
    discountApplied: 0,
    paymentMethod: 'Wire Transfer',
    paymentDate: '2025-01-11',
    processedDate: null,
    status: 'Failed',
    notes: 'Insufficient funds'
  },
  {
    id: 'PAY-006',
    referenceNumber: 'REF-2025-006',
    invoiceNumber: 'INV-006',
    customer: 'Creative Design Studio',
    amount: 4200,
    discountApplied: 100,
    paymentMethod: 'ACH',
    paymentDate: '2025-01-10',
    processedDate: '2025-01-10',
    status: 'Cleared',
    notes: 'Partial payment received'
  }
];

export default function PaymentsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [methodFilter, setMethodFilter] = useState('all');
  const [selectedPayment, setSelectedPayment] = useState(null);

  const filteredPayments = mockPayments.filter(payment => {
    const matchesSearch = payment.referenceNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         payment.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         payment.notes.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || payment.status === statusFilter;
    const matchesMethod = methodFilter === 'all' || payment.paymentMethod === methodFilter;
    return matchesSearch && matchesStatus && matchesMethod;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Cleared': return 'bg-green-100 text-green-700';
      case 'Pending': return 'bg-yellow-100 text-yellow-700';
      case 'Failed': return 'bg-red-100 text-red-700';
      case 'Cancelled': return 'bg-gray-100 text-gray-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Cleared': return <CheckCircle className="h-4 w-4" />;
      case 'Pending': return <Clock className="h-4 w-4" />;
      case 'Failed': return <XCircle className="h-4 w-4" />;
      case 'Cancelled': return <XCircle className="h-4 w-4" />;
      default: return <AlertTriangle className="h-4 w-4" />;
    }
  };

  const getMethodIcon = (method: string) => {
    switch (method) {
      case 'Wire Transfer': return <CreditCard className="h-4 w-4" />;
      case 'ACH': return <CreditCard className="h-4 w-4" />;
      case 'Credit Card': return <CreditCard className="h-4 w-4" />;
      case 'Check': return <FileText className="h-4 w-4" />;
      case 'Cash': return <DollarSign className="h-4 w-4" />;
      default: return <CreditCard className="h-4 w-4" />;
    }
  };

  const summaryData = {
    totalReceived: mockPayments.filter(p => p.status === 'Cleared').reduce((sum, p) => sum + p.amount, 0),
    pending: mockPayments.filter(p => p.status === 'Pending').reduce((sum, p) => sum + p.amount, 0),
    failed: mockPayments.filter(p => p.status === 'Failed').reduce((sum, p) => sum + p.amount, 0),
    thisMonth: mockPayments.filter(p => p.status === 'Cleared' && new Date(p.paymentDate).getMonth() === new Date().getMonth()).reduce((sum, p) => sum + p.amount, 0)
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      {/* Page Header */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Payment Management</h1>
              <p className="text-gray-600">Track and manage incoming payments</p>
            </div>
            <button className="btn-primary">
              <Plus className="h-4 w-4 mr-2" />
              Record Payment
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Summary Cards */}
        <div className="grid lg:grid-cols-4 gap-6 mb-8">
          <div className="card">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-gray-900">Total Received</h3>
              <CheckCircle className="h-5 w-5 text-green-500" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">
              ${summaryData.totalReceived.toLocaleString()}
            </div>
            <div className="flex items-center text-green-600">
              <span className="text-sm font-semibold">All cleared payments</span>
            </div>
          </div>

          <div className="card">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-gray-900">Pending</h3>
              <Clock className="h-5 w-5 text-yellow-500" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">
              ${summaryData.pending.toLocaleString()}
            </div>
            <div className="flex items-center text-yellow-600">
              <span className="text-sm font-semibold">Awaiting processing</span>
            </div>
          </div>

          <div className="card">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-gray-900">Failed</h3>
              <XCircle className="h-5 w-5 text-red-500" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">
              ${summaryData.failed.toLocaleString()}
            </div>
            <div className="flex items-center text-red-600">
              <span className="text-sm font-semibold">Requires attention</span>
            </div>
          </div>

          <div className="card">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-gray-900">This Month</h3>
              <Calendar className="h-5 w-5 text-[#0ea5e9]" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">
              ${summaryData.thisMonth.toLocaleString()}
            </div>
            <div className="flex items-center text-[#0ea5e9]">
              <span className="text-sm font-semibold">Current month cleared</span>
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
                  placeholder="Search by reference number, customer, or notes..."
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
                <option value="Cleared">Cleared</option>
                <option value="Pending">Pending</option>
                <option value="Failed">Failed</option>
                <option value="Cancelled">Cancelled</option>
              </select>
              <select
                value={methodFilter}
                onChange={(e) => setMethodFilter(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0ea5e9] focus:border-transparent"
              >
                <option value="all">All Methods</option>
                <option value="Wire Transfer">Wire Transfer</option>
                <option value="ACH">ACH</option>
                <option value="Credit Card">Credit Card</option>
                <option value="Check">Check</option>
                <option value="Cash">Cash</option>
              </select>
              <button className="btn-secondary">
                <Filter className="h-4 w-4 mr-2" />
                More Filters
              </button>
              <button className="btn-secondary">
                <Download className="h-4 w-4 mr-2" />
                Export
              </button>
            </div>
          </div>
        </div>

        {/* Payments Table */}
        <div className="card">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Payment Details
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Invoice
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Amount
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Method
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Notes
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredPayments.map((payment) => (
                  <tr key={payment.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div>
                        <div className="text-sm font-medium text-gray-900">{payment.referenceNumber}</div>
                        <div className="text-sm text-gray-500">{payment.customer}</div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-[#0ea5e9] hover:underline cursor-pointer">
                        {payment.invoiceNumber}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div>
                        <div className="text-sm font-medium text-gray-900">
                          ${payment.amount.toLocaleString()}
                        </div>
                        {payment.discountApplied > 0 && (
                          <div className="text-xs text-green-600">
                            -${payment.discountApplied} discount
                          </div>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center space-x-2">
                        {getMethodIcon(payment.paymentMethod)}
                        <span className="text-sm text-gray-900">{payment.paymentMethod}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div>
                        <div className="text-sm text-gray-900">
                          {new Date(payment.paymentDate).toLocaleDateString()}
                        </div>
                        {payment.processedDate && (
                          <div className="text-xs text-gray-500">
                            Processed: {new Date(payment.processedDate).toLocaleDateString()}
                          </div>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center space-x-2">
                        {getStatusIcon(payment.status)}
                        <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getStatusColor(payment.status)}`}>
                          {payment.status}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-900 max-w-xs truncate">
                        {payment.notes}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <div className="flex items-center justify-end space-x-2">
                        <button 
                          className="text-[#0ea5e9] hover:text-[#0284c7]"
                          onClick={() => setSelectedPayment(payment)}
                        >
                          <Eye className="h-4 w-4" />
                        </button>
                        {payment.status === 'Failed' && (
                          <button className="text-yellow-600 hover:text-yellow-700">
                            <RefreshCw className="h-4 w-4" />
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
              <button className="btn-primary">
                <Plus className="h-4 w-4 mr-2" />
                Record Your First Payment
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
