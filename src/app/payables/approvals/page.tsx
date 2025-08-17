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
  CheckCircle2,
  BarChart3,
  Users,
  CreditCard,
  User,
  Send
} from 'lucide-react';

// Mock approval data
const mockApprovals = [
  {
    id: '1',
    billId: 'BILL-001',
    billNumber: 'INV-2025-0001',
    vendorName: 'Tech Solutions Inc',
    amount: 2500,
    submittedAt: new Date('2025-01-15T10:30:00'),
    submittedBy: 'John Smith',
    dueDate: new Date('2025-01-20'),
    urgency: 'medium',
    daysWaiting: 2,
    stepName: 'Manager Approval',
    description: 'Software licensing renewal',
    status: 'pending',
    approvers: ['Sarah Johnson', 'Mike Davis'],
    requiredApprovals: 1,
    currentApprovals: 0
  },
  {
    id: '2',
    billId: 'BILL-002',
    billNumber: 'INV-2025-0002',
    vendorName: 'Office Supplies Co',
    amount: 1800,
    submittedAt: new Date('2025-01-14T14:20:00'),
    submittedBy: 'Lisa Chen',
    dueDate: new Date('2025-01-18'),
    urgency: 'high',
    daysWaiting: 3,
    stepName: 'Department Head Approval',
    description: 'Monthly office supplies',
    status: 'pending',
    approvers: ['David Wilson'],
    requiredApprovals: 1,
    currentApprovals: 0
  },
  {
    id: '3',
    billId: 'BILL-003',
    billNumber: 'INV-2025-0003',
    vendorName: 'Marketing Agency',
    amount: 5000,
    submittedAt: new Date('2025-01-13T09:15:00'),
    submittedBy: 'Alex Brown',
    dueDate: new Date('2025-01-25'),
    urgency: 'low',
    daysWaiting: 4,
    stepName: 'CFO Approval',
    description: 'Digital marketing campaign',
    status: 'in_progress',
    approvers: ['Jennifer Lee', 'Robert Taylor'],
    requiredApprovals: 2,
    currentApprovals: 1
  },
  {
    id: '4',
    billId: 'BILL-004',
    billNumber: 'INV-2025-0004',
    vendorName: 'Cloud Services Ltd',
    amount: 1200,
    submittedAt: new Date('2025-01-12T16:45:00'),
    submittedBy: 'Tom Wilson',
    dueDate: new Date('2025-01-22'),
    urgency: 'medium',
    daysWaiting: 5,
    stepName: 'Manager Approval',
    description: 'Cloud hosting services',
    status: 'approved',
    approvers: ['Sarah Johnson'],
    requiredApprovals: 1,
    currentApprovals: 1
  }
];

export default function ApprovalsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [urgencyFilter, setUrgencyFilter] = useState('all');

  const filteredApprovals = mockApprovals.filter(approval => {
    const matchesSearch = approval.vendorName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         approval.billNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         approval.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || approval.status === statusFilter;
    const matchesUrgency = urgencyFilter === 'all' || approval.urgency === urgencyFilter;
    return matchesSearch && matchesStatus && matchesUrgency;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending': return 'bg-yellow-100 text-yellow-700';
      case 'in_progress': return 'bg-blue-100 text-blue-700';
      case 'approved': return 'bg-green-100 text-green-700';
      case 'rejected': return 'bg-red-100 text-red-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'pending': return <Clock className="h-4 w-4" />;
      case 'in_progress': return <AlertTriangle className="h-4 w-4" />;
      case 'approved': return <CheckCircle className="h-4 w-4" />;
      case 'rejected': return <XCircle className="h-4 w-4" />;
      default: return <Clock className="h-4 w-4" />;
    }
  };

  const getUrgencyColor = (urgency: string) => {
    switch (urgency) {
      case 'high': return 'bg-red-100 text-red-700';
      case 'medium': return 'bg-yellow-100 text-yellow-700';
      case 'low': return 'bg-green-100 text-green-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const getUrgencyIcon = (urgency: string) => {
    switch (urgency) {
      case 'high': return <AlertTriangle className="h-4 w-4" />;
      case 'medium': return <Clock className="h-4 w-4" />;
      case 'low': return <CheckCircle className="h-4 w-4" />;
      default: return <Clock className="h-4 w-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      {/* Page Header */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Approval Management</h1>
              <p className="text-gray-600">Review and approve bills and payment requests</p>
            </div>
            <div className="flex items-center space-x-4">
              <button className="btn-secondary">
                <Download className="h-4 w-4 mr-2" />
                Export Queue
              </button>
              <button className="btn-primary">
                <Plus className="h-4 w-4 mr-2" />
                Create Workflow
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
            <a href="/payables/approvals" className="flex items-center space-x-2 py-4 px-1 border-b-2 border-[#0ea5e9] text-[#0ea5e9] font-medium text-sm">
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
        {/* Search and Filters */}
        <div className="card mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search approvals by vendor, bill number, or description..."
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
                <option value="in_progress">In Progress</option>
                <option value="approved">Approved</option>
                <option value="rejected">Rejected</option>
              </select>
              <select
                value={urgencyFilter}
                onChange={(e) => setUrgencyFilter(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0ea5e9] focus:border-transparent"
              >
                <option value="all">All Urgency</option>
                <option value="high">High</option>
                <option value="medium">Medium</option>
                <option value="low">Low</option>
              </select>
              <button className="btn-secondary">
                <Filter className="h-4 w-4 mr-2" />
                More Filters
              </button>
            </div>
          </div>
        </div>

        {/* Approvals Table */}
        <div className="card">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Bill</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Vendor</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Amount</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Status</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Urgency</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Due Date</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Approvers</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredApprovals.map((approval) => (
                  <tr key={approval.id} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-4 px-4">
                      <div>
                        <div className="font-semibold text-gray-900">{approval.billNumber}</div>
                        <div className="text-sm text-gray-500">{approval.description}</div>
                        <div className="text-xs text-gray-400">
                          Submitted by {approval.submittedBy} • {approval.daysWaiting} days ago
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex items-center">
                        <Building2 className="h-4 w-4 text-gray-400 mr-2" />
                        <span className="font-medium text-gray-900">{approval.vendorName}</span>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <div className="font-semibold text-gray-900">
                        ${approval.amount.toLocaleString()}
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <div className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-semibold ${getStatusColor(approval.status)}`}>
                        {getStatusIcon(approval.status)}
                        <span className="ml-1 capitalize">{approval.status.replace('_', ' ')}</span>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <div className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-semibold ${getUrgencyColor(approval.urgency)}`}>
                        {getUrgencyIcon(approval.urgency)}
                        <span className="ml-1 capitalize">{approval.urgency}</span>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 text-gray-400 mr-2" />
                        <span className="text-gray-900">{approval.dueDate.toLocaleDateString()}</span>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <div className="space-y-1">
                        <div className="text-sm text-gray-900">{approval.stepName}</div>
                        <div className="text-xs text-gray-500">
                          {approval.currentApprovals}/{approval.requiredApprovals} approved
                        </div>
                        <div className="flex items-center space-x-1">
                          {approval.approvers.map((approver, index) => (
                            <div key={index} className="w-6 h-6 bg-[#0ea5e9] rounded-full flex items-center justify-center">
                              <User className="h-3 w-3 text-white" />
                            </div>
                          ))}
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex items-center space-x-2">
                        <button className="text-[#0ea5e9] hover:text-[#0284c7]">
                          <Eye className="h-4 w-4" />
                        </button>
                        {approval.status === 'pending' && (
                          <>
                            <button className="text-green-600 hover:text-green-700">
                              <CheckCircle className="h-4 w-4" />
                            </button>
                            <button className="text-red-600 hover:text-red-700">
                              <XCircle className="h-4 w-4" />
                            </button>
                          </>
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
          {filteredApprovals.length === 0 && (
            <div className="text-center py-12">
              <CheckCircle2 className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No approvals found</h3>
              <p className="text-gray-600 mb-4">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-3 gap-4 mt-8">
          <button className="card hover:border-[#0ea5e9] transition-colors cursor-pointer">
            <div className="flex items-center space-x-3">
              <CheckCircle2 className="h-5 w-5 text-[#0ea5e9]" />
              <span className="font-medium text-gray-900">My Approvals</span>
            </div>
          </button>
          <button className="card hover:border-[#0ea5e9] transition-colors cursor-pointer">
            <div className="flex items-center space-x-3">
              <Clock className="h-5 w-5 text-[#0ea5e9]" />
              <span className="font-medium text-gray-900">Pending Queue</span>
            </div>
          </button>
          <button className="card hover:border-[#0ea5e9] transition-colors cursor-pointer">
            <div className="flex items-center space-x-3">
              <BarChart3 className="h-5 w-5 text-[#0ea5e9]" />
              <span className="font-medium text-gray-900">Approval Reports</span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
