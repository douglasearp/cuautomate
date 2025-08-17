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
  Edit,
  Send,
  Upload,
  BarChart3,
  CheckCircle2,
  Users,
  CreditCard
} from 'lucide-react';

// Mock bills data
const mockBills = [
  {
    id: '1',
    billNumber: 'BILL-2025-0001',
    vendorId: '1',
    vendor: 'Tech Solutions Inc',
    invoiceNumber: 'INV-2025-0001',
    poNumber: 'PO-2025-001',
    billDate: new Date('2025-01-15'),
    dueDate: new Date('2025-01-20'),
    subtotal: 2500,
    taxAmount: 200,
    totalAmount: 2700,
    amountPaid: 0,
    amountDue: 2700,
    status: 'pending_approval',
    approvalStatus: 'pending',
    paymentStatus: 'pending',
    description: 'Software licensing renewal',
    lineItems: [
      { description: 'Software License', quantity: 1, unitPrice: 2500, amount: 2500 }
    ],
    attachments: ['invoice.pdf'],
    glAccounts: ['Software Expenses'],
    approvalHistory: [],
    paymentHistory: [],
    recurringSchedule: null,
    createdAt: new Date('2025-01-15'),
    updatedAt: new Date('2025-01-15'),
    createdBy: 'John Smith',
    lastModifiedBy: 'John Smith'
  },
  {
    id: '2',
    billNumber: 'BILL-2025-0002',
    vendorId: '2',
    vendor: 'Office Supplies Co',
    invoiceNumber: 'INV-2025-0002',
    poNumber: 'PO-2025-002',
    billDate: new Date('2025-01-14'),
    dueDate: new Date('2025-01-18'),
    subtotal: 1800,
    taxAmount: 144,
    totalAmount: 1944,
    amountPaid: 0,
    amountDue: 1944,
    status: 'approved',
    approvalStatus: 'approved',
    paymentStatus: 'scheduled',
    description: 'Monthly office supplies',
    lineItems: [
      { description: 'Office Supplies', quantity: 1, unitPrice: 1800, amount: 1800 }
    ],
    attachments: ['invoice.pdf', 'receipt.pdf'],
    glAccounts: ['Office Supplies'],
    approvalHistory: [
      { approver: 'Sarah Johnson', action: 'approved', timestamp: new Date('2025-01-15') }
    ],
    paymentHistory: [],
    recurringSchedule: null,
    createdAt: new Date('2025-01-14'),
    updatedAt: new Date('2025-01-15'),
    createdBy: 'Lisa Chen',
    lastModifiedBy: 'Sarah Johnson'
  },
  {
    id: '3',
    billNumber: 'BILL-2025-0003',
    vendorId: '3',
    vendor: 'Marketing Agency',
    invoiceNumber: 'INV-2025-0003',
    poNumber: 'PO-2025-003',
    billDate: new Date('2025-01-13'),
    dueDate: new Date('2025-01-25'),
    subtotal: 5000,
    taxAmount: 400,
    totalAmount: 5400,
    amountPaid: 0,
    amountDue: 5400,
    status: 'draft',
    approvalStatus: 'not_required',
    paymentStatus: 'pending',
    description: 'Digital marketing campaign',
    lineItems: [
      { description: 'Marketing Services', quantity: 1, unitPrice: 5000, amount: 5000 }
    ],
    attachments: ['proposal.pdf'],
    glAccounts: ['Marketing Expenses'],
    approvalHistory: [],
    paymentHistory: [],
    recurringSchedule: null,
    createdAt: new Date('2025-01-13'),
    updatedAt: new Date('2025-01-13'),
    createdBy: 'Alex Brown',
    lastModifiedBy: 'Alex Brown'
  },
  {
    id: '4',
    billNumber: 'BILL-2025-0004',
    vendorId: '4',
    vendor: 'Cloud Services Ltd',
    invoiceNumber: 'INV-2025-0004',
    poNumber: 'PO-2025-004',
    billDate: new Date('2025-01-12'),
    dueDate: new Date('2025-01-22'),
    subtotal: 1200,
    taxAmount: 96,
    totalAmount: 1296,
    amountPaid: 1296,
    amountDue: 0,
    status: 'paid',
    approvalStatus: 'approved',
    paymentStatus: 'completed',
    description: 'Cloud hosting services',
    lineItems: [
      { description: 'Cloud Hosting', quantity: 1, unitPrice: 1200, amount: 1200 }
    ],
    attachments: ['invoice.pdf'],
    glAccounts: ['IT Services'],
    approvalHistory: [
      { approver: 'Sarah Johnson', action: 'approved', timestamp: new Date('2025-01-13') }
    ],
    paymentHistory: [
      { paymentDate: new Date('2025-01-15'), amount: 1296, method: 'ACH' }
    ],
    recurringSchedule: null,
    createdAt: new Date('2025-01-12'),
    updatedAt: new Date('2025-01-15'),
    createdBy: 'Tom Wilson',
    lastModifiedBy: 'System'
  }
];

export default function BillsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [vendorFilter, setVendorFilter] = useState('all');

  const filteredBills = mockBills.filter(bill => {
    const matchesSearch = bill.vendor.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         bill.billNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         bill.invoiceNumber?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         bill.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || bill.status === statusFilter;
    const matchesVendor = vendorFilter === 'all' || bill.vendorId === vendorFilter;
    return matchesSearch && matchesStatus && matchesVendor;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'draft': return 'bg-gray-100 text-gray-700';
      case 'pending_approval': return 'bg-yellow-100 text-yellow-700';
      case 'approved': return 'bg-green-100 text-green-700';
      case 'rejected': return 'bg-red-100 text-red-700';
      case 'scheduled': return 'bg-blue-100 text-blue-700';
      case 'paid': return 'bg-green-100 text-green-700';
      case 'overdue': return 'bg-red-100 text-red-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'draft': return <FileText className="h-4 w-4" />;
      case 'pending_approval': return <Clock className="h-4 w-4" />;
      case 'approved': return <CheckCircle className="h-4 w-4" />;
      case 'rejected': return <XCircle className="h-4 w-4" />;
      case 'scheduled': return <Calendar className="h-4 w-4" />;
      case 'paid': return <CheckCircle className="h-4 w-4" />;
      case 'overdue': return <AlertTriangle className="h-4 w-4" />;
      default: return <FileText className="h-4 w-4" />;
    }
  };

  const getPaymentStatusColor = (status: string) => {
    switch (status) {
      case 'pending': return 'bg-yellow-100 text-yellow-700';
      case 'scheduled': return 'bg-blue-100 text-blue-700';
      case 'processing': return 'bg-purple-100 text-purple-700';
      case 'completed': return 'bg-green-100 text-green-700';
      case 'failed': return 'bg-red-100 text-red-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      {/* Page Header */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Bill Management</h1>
              <p className="text-gray-600">Create, track, and manage your bills and expenses</p>
            </div>
            <div className="flex items-center space-x-4">
              <button className="btn-secondary">
                <Upload className="h-4 w-4 mr-2" />
                Upload Bills
              </button>
              <button className="btn-primary">
                <Plus className="h-4 w-4 mr-2" />
                Create Bill
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
            <a href="/payables/bills" className="flex items-center space-x-2 py-4 px-1 border-b-2 border-[#0ea5e9] text-[#0ea5e9] font-medium text-sm">
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
        {/* Search and Filters */}
        <div className="card mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search bills by vendor, bill number, or description..."
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
                <option value="draft">Draft</option>
                <option value="pending_approval">Pending Approval</option>
                <option value="approved">Approved</option>
                <option value="rejected">Rejected</option>
                <option value="scheduled">Scheduled</option>
                <option value="paid">Paid</option>
                <option value="overdue">Overdue</option>
              </select>
              <select
                value={vendorFilter}
                onChange={(e) => setVendorFilter(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0ea5e9] focus:border-transparent"
              >
                <option value="all">All Vendors</option>
                <option value="1">Tech Solutions Inc</option>
                <option value="2">Office Supplies Co</option>
                <option value="3">Marketing Agency</option>
                <option value="4">Cloud Services Ltd</option>
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

        {/* Bills Table */}
        <div className="card">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Bill</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Vendor</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Amount</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Status</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Payment Status</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Due Date</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredBills.map((bill) => (
                  <tr key={bill.id} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-4 px-4">
                      <div>
                        <div className="font-semibold text-gray-900">{bill.billNumber}</div>
                        <div className="text-sm text-gray-500">{bill.description}</div>
                        {bill.invoiceNumber && (
                          <div className="text-xs text-gray-400">
                            Invoice: {bill.invoiceNumber}
                          </div>
                        )}
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex items-center">
                        <Building2 className="h-4 w-4 text-gray-400 mr-2" />
                        <span className="font-medium text-gray-900">{bill.vendor}</span>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <div>
                        <div className="font-semibold text-gray-900">
                          ${bill.totalAmount.toLocaleString()}
                        </div>
                        <div className="text-sm text-gray-500">
                          Due: ${bill.amountDue.toLocaleString()}
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <div className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-semibold ${getStatusColor(bill.status)}`}>
                        {getStatusIcon(bill.status)}
                        <span className="ml-1 capitalize">{bill.status.replace('_', ' ')}</span>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <div className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-semibold ${getPaymentStatusColor(bill.paymentStatus)}`}>
                        <span className="capitalize">{bill.paymentStatus}</span>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 text-gray-400 mr-2" />
                        <span className="text-gray-900">{bill.dueDate.toLocaleDateString()}</span>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex items-center space-x-2">
                        <button className="text-[#0ea5e9] hover:text-[#0284c7]">
                          <Eye className="h-4 w-4" />
                        </button>
                        {bill.status === 'draft' && (
                          <button className="text-gray-600 hover:text-gray-800">
                            <Edit className="h-4 w-4" />
                          </button>
                        )}
                        {bill.status === 'draft' && (
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
          {filteredBills.length === 0 && (
            <div className="text-center py-12">
              <FileText className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No bills found</h3>
              <p className="text-gray-600 mb-4">Try adjusting your search or filter criteria</p>
              <button className="btn-primary">
                <Plus className="h-4 w-4 mr-2" />
                Create Your First Bill
              </button>
            </div>
          )}
        </div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-4 gap-4 mt-8">
          <button className="card hover:border-[#0ea5e9] transition-colors cursor-pointer">
            <div className="flex items-center space-x-3">
              <Plus className="h-5 w-5 text-[#0ea5e9]" />
              <span className="font-medium text-gray-900">Create Bill</span>
            </div>
          </button>
          <button className="card hover:border-[#0ea5e9] transition-colors cursor-pointer">
            <div className="flex items-center space-x-3">
              <Upload className="h-5 w-5 text-[#0ea5e9]" />
              <span className="font-medium text-gray-900">Upload Bills</span>
            </div>
          </button>
          <button className="card hover:border-[#0ea5e9] transition-colors cursor-pointer">
            <div className="flex items-center space-x-3">
              <Calendar className="h-5 w-5 text-[#0ea5e9]" />
              <span className="font-medium text-gray-900">Recurring Bills</span>
            </div>
          </button>
          <button className="card hover:border-[#0ea5e9] transition-colors cursor-pointer">
            <div className="flex items-center space-x-3">
              <BarChart3 className="h-5 w-5 text-[#0ea5e9]" />
              <span className="font-medium text-gray-900">Bill Reports</span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
