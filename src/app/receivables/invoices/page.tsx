'use client';

import { useState } from 'react';

import { 
  Search, 
  Filter, 
  Download, 
  Plus, 
  FileText,
  DollarSign,
  Calendar,
  Clock,
  CheckCircle,
  XCircle,
  AlertTriangle,
  MoreHorizontal,
  Eye,
  Send,
  Edit
} from 'lucide-react';

// Mock invoice data
const mockInvoices = [
  {
    id: 'INV-001',
    invoiceNumber: 'INV-2025-001',
    customer: 'Tech Solutions Inc',
    issueDate: '2025-01-01',
    dueDate: '2025-01-31',
    amount: 12500,
    status: 'Sent',
    daysOverdue: 0
  },
  {
    id: 'INV-002',
    invoiceNumber: 'INV-2025-002',
    customer: 'Global Manufacturing',
    issueDate: '2024-12-15',
    dueDate: '2025-01-15',
    amount: 8900,
    status: 'Viewed',
    daysOverdue: 0
  },
  {
    id: 'INV-003',
    invoiceNumber: 'INV-2025-003',
    customer: 'Local Coffee Roasters',
    issueDate: '2024-12-20',
    dueDate: '2025-01-20',
    amount: 5600,
    status: 'Partial',
    daysOverdue: 0
  },
  {
    id: 'INV-004',
    invoiceNumber: 'INV-2025-004',
    customer: 'Digital Marketing Pro',
    issueDate: '2024-11-30',
    dueDate: '2024-12-30',
    amount: 7800,
    status: 'Overdue',
    daysOverdue: 16
  },
  {
    id: 'INV-005',
    invoiceNumber: 'INV-2025-005',
    customer: 'Green Energy Solutions',
    issueDate: '2025-01-05',
    dueDate: '2025-02-05',
    amount: 15000,
    status: 'Paid',
    daysOverdue: 0
  },
  {
    id: 'INV-006',
    invoiceNumber: 'INV-2025-006',
    customer: 'Creative Design Studio',
    issueDate: '2024-11-15',
    dueDate: '2024-12-15',
    amount: 4200,
    status: 'Overdue',
    daysOverdue: 31
  }
];

export default function InvoicesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [selectedInvoice, setSelectedInvoice] = useState(null);

  const filteredInvoices = mockInvoices.filter(invoice => {
    const matchesSearch = invoice.invoiceNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         invoice.customer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || invoice.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Draft': return 'bg-gray-100 text-gray-700';
      case 'Sent': return 'bg-blue-100 text-blue-700';
      case 'Viewed': return 'bg-green-100 text-green-700';
      case 'Partial': return 'bg-yellow-100 text-yellow-700';
      case 'Paid': return 'bg-green-100 text-green-700';
      case 'Overdue': return 'bg-red-100 text-red-700';
      case 'Cancelled': return 'bg-gray-100 text-gray-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Draft': return <FileText className="h-4 w-4" />;
      case 'Sent': return <Send className="h-4 w-4" />;
      case 'Viewed': return <Eye className="h-4 w-4" />;
      case 'Partial': return <AlertTriangle className="h-4 w-4" />;
      case 'Paid': return <CheckCircle className="h-4 w-4" />;
      case 'Overdue': return <XCircle className="h-4 w-4" />;
      case 'Cancelled': return <XCircle className="h-4 w-4" />;
      default: return <FileText className="h-4 w-4" />;
    }
  };

  const summaryData = {
    totalOutstanding: mockInvoices.filter(i => i.status !== 'Paid' && i.status !== 'Cancelled').reduce((sum, i) => sum + i.amount, 0),
    overdue: mockInvoices.filter(i => i.status === 'Overdue').reduce((sum, i) => sum + i.amount, 0),
    paidThisMonth: mockInvoices.filter(i => i.status === 'Paid' && new Date(i.issueDate).getMonth() === new Date().getMonth()).reduce((sum, i) => sum + i.amount, 0),
    dueThisWeek: mockInvoices.filter(i => {
      const dueDate = new Date(i.dueDate);
      const today = new Date();
      const weekFromNow = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);
      return dueDate <= weekFromNow && dueDate >= today && i.status !== 'Paid';
    }).reduce((sum, i) => sum + i.amount, 0)
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      {/* Page Header */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Invoice Management</h1>
              <p className="text-gray-600">Create, send, and track your invoices</p>
            </div>
            <button className="btn-primary">
              <Plus className="h-4 w-4 mr-2" />
              Create Invoice
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

      {/* Summary Cards */}
      <div className="grid lg:grid-cols-4 gap-6 mb-8">
        <div className="card">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-gray-900">Total Outstanding</h3>
            <DollarSign className="h-5 w-5 text-[#0ea5e9]" />
          </div>
          <div className="text-3xl font-bold text-gray-900 mb-2">
            ${summaryData.totalOutstanding.toLocaleString()}
          </div>
          <div className="flex items-center text-[#0ea5e9]">
            <span className="text-sm font-semibold">Unpaid invoices</span>
          </div>
        </div>

        <div className="card">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-gray-900">Overdue</h3>
            <XCircle className="h-5 w-5 text-red-500" />
          </div>
          <div className="text-3xl font-bold text-gray-900 mb-2">
            ${summaryData.overdue.toLocaleString()}
          </div>
          <div className="flex items-center text-red-600">
            <span className="text-sm font-semibold">Past due amounts</span>
          </div>
        </div>

        <div className="card">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-gray-900">Paid This Month</h3>
            <CheckCircle className="h-5 w-5 text-green-500" />
          </div>
          <div className="text-3xl font-bold text-gray-900 mb-2">
            ${summaryData.paidThisMonth.toLocaleString()}
          </div>
          <div className="flex items-center text-green-600">
            <span className="text-sm font-semibold">Current month</span>
          </div>
        </div>

        <div className="card">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-gray-900">Due This Week</h3>
            <Clock className="h-5 w-5 text-yellow-500" />
          </div>
          <div className="text-3xl font-bold text-gray-900 mb-2">
            ${summaryData.dueThisWeek.toLocaleString()}
          </div>
          <div className="flex items-center text-yellow-600">
            <span className="text-sm font-semibold">Upcoming payments</span>
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
                placeholder="Search by invoice number or customer..."
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
              <option value="Draft">Draft</option>
              <option value="Sent">Sent</option>
              <option value="Viewed">Viewed</option>
              <option value="Partial">Partial</option>
              <option value="Paid">Paid</option>
              <option value="Overdue">Overdue</option>
              <option value="Cancelled">Cancelled</option>
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

      {/* Invoices Table */}
      <div className="card">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Invoice Number
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Customer
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Issue Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Due Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Amount
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredInvoices.map((invoice) => (
                <tr key={invoice.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-[#0ea5e9] hover:underline cursor-pointer">
                      {invoice.invoiceNumber}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{invoice.customer}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                      {new Date(invoice.issueDate).toLocaleDateString()}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center space-x-2">
                      <div className="text-sm text-gray-900">
                        {new Date(invoice.dueDate).toLocaleDateString()}
                      </div>
                      {invoice.daysOverdue > 0 && (
                        <span className="text-xs text-red-600 font-semibold">
                          {invoice.daysOverdue} days overdue
                        </span>
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">
                      ${invoice.amount.toLocaleString()}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center space-x-2">
                      {getStatusIcon(invoice.status)}
                      <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getStatusColor(invoice.status)}`}>
                        {invoice.status}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="flex items-center justify-end space-x-2">
                      <button 
                        className="text-[#0ea5e9] hover:text-[#0284c7]"
                        onClick={() => setSelectedInvoice(invoice)}
                      >
                        <Eye className="h-4 w-4" />
                      </button>
                      {invoice.status === 'Draft' && (
                        <button className="text-gray-600 hover:text-gray-800">
                          <Edit className="h-4 w-4" />
                        </button>
                      )}
                      {invoice.status === 'Draft' && (
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
        {filteredInvoices.length === 0 && (
          <div className="text-center py-12">
            <FileText className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No invoices found</h3>
            <p className="text-gray-600 mb-4">Try adjusting your search or filter criteria</p>
            <button className="btn-primary">
              <Plus className="h-4 w-4 mr-2" />
              Create Your First Invoice
            </button>
          </div>
        )}
      </div>
      </div>
    </div>
  );
}
