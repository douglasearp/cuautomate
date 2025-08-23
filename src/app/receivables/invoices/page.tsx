'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  Plus, 
  Search, 
  Filter, 
  Download, 
  Eye, 
  Edit, 
  Send, 
  DollarSign,
  Calendar,
  User,
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  Clock,
  Brain,
  FileText,
  Settings,
  BarChart3,
  Users,
  CreditCard,
  Activity
} from 'lucide-react';

// Mock data from specifications
const mockInvoices = [
  {
    id: 'inv_001',
    number: 'INV-2025-0001',
    customer: 'ABC Restaurant Group',
    amount: 3500.00,
    status: 'sent',
    dueDate: '2025-08-31',
    issueDate: '2025-08-01',
    collectionScore: 78,
    tracking: {
      sent: '2025-08-01T10:00:00Z',
      viewed: '2025-08-03T14:30:00Z',
      viewCount: 3
    }
  },
  {
    id: 'inv_002',
    number: 'INV-2025-0002',
    customer: 'Tech Startup LLC',
    amount: 5000.00,
    status: 'overdue',
    dueDate: '2025-08-25',
    issueDate: '2025-08-10',
    daysOverdue: 7,
    collectionScore: 65,
    lastReminderSent: '2025-08-27T09:00:00Z'
  },
  {
    id: 'inv_003',
    number: 'INV-2025-0003',
    customer: 'Local Manufacturing Co',
    amount: 2500.00,
    status: 'paid',
    dueDate: '2025-08-20',
    issueDate: '2025-08-05',
    paidDate: '2025-08-18T14:30:00Z',
    collectionScore: 92
  }
];

const mockTemplates = [
  {
    id: 'template_001',
    name: 'Professional Services',
    industry: 'consulting',
    features: ['time_tracking', 'project_breakdown', 'milestone_billing'],
    popularity: 85,
    customFields: [
      { name: 'project_phase', type: 'select', required: false },
      { name: 'deliverables', type: 'textarea', required: true }
    ]
  },
  {
    id: 'template_002',
    name: 'Product Sales',
    industry: 'retail',
    features: ['inventory_tracking', 'bulk_items', 'discounts'],
    popularity: 78,
    customFields: [
      { name: 'sku', type: 'text', required: true },
      { name: 'warranty_info', type: 'text', required: false }
    ]
  }
];

const mockLineItemSuggestions = [
  {
    description: 'Website Development - Landing Page Design',
    suggestedPrice: 2500.00,
    confidence: 0.92,
    basedOn: 'history',
    recentUsage: '3 times in last 30 days',
    variations: [
      { description: 'Website Development - Full Site Design', price: 8500.00 },
      { description: 'Website Development - Mobile Optimization', price: 1200.00 }
    ]
  },
  {
    description: 'Marketing Consultation - 2 Hour Session',
    suggestedPrice: 350.00,
    confidence: 0.88,
    basedOn: 'template',
    marketRange: { min: 250, max: 450 }
  }
];

export default function InvoicesPage() {
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [showCreateModal, setShowCreateModal] = useState(false);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'paid': return 'text-green-600 bg-green-100';
      case 'overdue': return 'text-red-600 bg-red-100';
      case 'sent': return 'text-blue-600 bg-blue-100';
      case 'draft': return 'text-gray-600 bg-gray-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'paid': return <CheckCircle className="h-4 w-4" />;
      case 'overdue': return <AlertTriangle className="h-4 w-4" />;
      case 'sent': return <Send className="h-4 w-4" />;
      case 'draft': return <FileText className="h-4 w-4" />;
      default: return <Clock className="h-4 w-4" />;
    }
  };

  const filteredInvoices = mockInvoices.filter(invoice => {
    const matchesStatus = selectedStatus === 'all' || invoice.status === selectedStatus;
    const matchesSearch = invoice.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         invoice.number.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesStatus && matchesSearch;
  });

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
            <button 
              onClick={() => setShowCreateModal(true)}
              className="btn-primary"
            >
              <Plus className="h-4 w-4 mr-2" />
              Create Invoice
            </button>
          </div>
        </div>
      </div>

      {/* Sub Navigation */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex space-x-8">
            <a href="/receivables" className="flex items-center space-x-2 py-4 px-1 border-b-2 border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 font-medium text-sm">
              <BarChart3 className="h-4 w-4" />
              <span>Dashboard</span>
            </a>
            <a href="/receivables/customers" className="flex items-center space-x-2 py-4 px-1 border-b-2 border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 font-medium text-sm">
              <Users className="h-4 w-4" />
              <span>Customers</span>
            </a>
            <a href="/receivables/invoices" className="flex items-center space-x-2 py-4 px-1 border-b-2 border-[#0ea5e9] text-[#0ea5e9] font-medium text-sm">
              <FileText className="h-4 w-4" />
              <span>Invoices</span>
            </a>
            <a href="/receivables/payments" className="flex items-center space-x-2 py-4 px-1 border-b-2 border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 font-medium text-sm">
              <CreditCard className="h-4 w-4" />
              <span>Payments In</span>
            </a>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Filters and Search */}
        <div className="card mb-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search invoices by customer or number..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0ea5e9] focus:border-transparent"
                />
              </div>
            </div>
            <div className="flex gap-2">
              <select
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0ea5e9] focus:border-transparent"
              >
                <option value="all">All Status</option>
                <option value="draft">Draft</option>
                <option value="sent">Sent</option>
                <option value="overdue">Overdue</option>
                <option value="paid">Paid</option>
              </select>
              <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                <Download className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Invoice List */}
        <div className="card">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Invoice</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Customer</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Amount</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Status</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Due Date</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Collection Score</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredInvoices.map((invoice) => (
                  <tr key={invoice.id} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-4 px-4">
                      <div>
                        <div className="font-semibold text-gray-900">{invoice.number}</div>
                        <div className="text-sm text-gray-500">{invoice.issueDate}</div>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex items-center">
                        <User className="h-4 w-4 text-gray-400 mr-2" />
                        <span className="font-medium text-gray-900">{invoice.customer}</span>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <div className="font-semibold text-gray-900">
                        ${invoice.amount.toLocaleString()}
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <div className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-semibold ${getStatusColor(invoice.status)}`}>
                        {getStatusIcon(invoice.status)}
                        <span className="ml-1 capitalize">{invoice.status}</span>
                      </div>
                      {invoice.status === 'overdue' && (
                        <div className="text-xs text-red-600 mt-1">
                          {invoice.daysOverdue} days overdue
                        </div>
                      )}
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 text-gray-400 mr-2" />
                        <span className="text-gray-900">{invoice.dueDate}</span>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex items-center">
                        <div className="w-16 bg-gray-200 rounded-full h-2 mr-2">
                          <div 
                            className={`h-2 rounded-full ${
                              invoice.collectionScore >= 80 ? 'bg-green-500' :
                              invoice.collectionScore >= 60 ? 'bg-yellow-500' : 'bg-red-500'
                            }`}
                            style={{ width: `${invoice.collectionScore}%` }}
                          ></div>
                        </div>
                        <span className="text-sm font-semibold text-gray-900">{invoice.collectionScore}%</span>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex items-center space-x-2">
                        <button className="p-1 hover:bg-gray-100 rounded">
                          <Eye className="h-4 w-4 text-gray-600" />
                        </button>
                        <button className="p-1 hover:bg-gray-100 rounded">
                          <Edit className="h-4 w-4 text-gray-600" />
                        </button>
                        <Link href={`/receivables/invoices/${invoice.id}/activities`} className="p-1 hover:bg-gray-100 rounded">
                          <Activity className="h-4 w-4 text-[#0ea5e9]" />
                        </Link>
                        {invoice.status === 'draft' && (
                          <button className="p-1 hover:bg-gray-100 rounded">
                            <Send className="h-4 w-4 text-gray-600" />
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

        {/* AI Insights Section */}
        <div className="grid lg:grid-cols-2 gap-6 mt-8">
          {/* AI Recommendations */}
          <div className="card">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold text-gray-900">AI Recommendations</h3>
              <Brain className="h-5 w-5 text-[#0ea5e9]" />
            </div>
            <div className="space-y-4">
              <div className="border-l-4 border-[#0ea5e9] pl-4 py-3 bg-[#0ea5e9]/5 rounded-r-lg">
                <h4 className="font-semibold text-gray-900 mb-1">Optimize Invoice #INV-2025-0002</h4>
                <p className="text-sm text-gray-600 mb-2">
                  Tech Startup LLC typically pays 12-15 days late. Consider offering a 2% early payment discount.
                </p>
                <div className="flex items-center space-x-4 text-xs">
                  <span className="text-[#0ea5e9] font-semibold">87% success probability</span>
                  <button className="text-[#0ea5e9] hover:underline">Apply Discount</button>
                </div>
              </div>
              <div className="border-l-4 border-[#F59E0B] pl-4 py-3 bg-[#F59E0B]/5 rounded-r-lg">
                <h4 className="font-semibold text-gray-900 mb-1">Send Follow-up Reminder</h4>
                <p className="text-sm text-gray-600 mb-2">
                  ABC Restaurant Group viewed invoice 3 times. Send a friendly reminder today.
                </p>
                <div className="flex items-center space-x-4 text-xs">
                  <span className="text-[#F59E0B] font-semibold">High engagement</span>
                  <button className="text-[#F59E0B] hover:underline">Send Reminder</button>
                </div>
              </div>
            </div>
          </div>

          {/* Template Suggestions */}
          <div className="card">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold text-gray-900">Smart Templates</h3>
              <Settings className="h-5 w-5 text-gray-600" />
            </div>
            <div className="space-y-4">
              {mockTemplates.map((template) => (
                <div key={template.id} className="border border-gray-200 rounded-lg p-4 hover:border-[#0ea5e9] transition-colors">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-gray-900">{template.name}</h4>
                    <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
                      {template.popularity}% popular
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">Perfect for {template.industry} businesses</p>
                  <div className="flex items-center space-x-2">
                    <button className="text-sm text-[#0ea5e9] hover:underline">Use Template</button>
                    <span className="text-gray-400">•</span>
                    <span className="text-xs text-gray-500">{template.features.length} features</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Line Item Suggestions */}
        <div className="card mt-8">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-bold text-gray-900">AI Line Item Suggestions</h3>
            <Brain className="h-5 w-5 text-[#0ea5e9]" />
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {mockLineItemSuggestions.map((suggestion, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4 hover:border-[#0ea5e9] transition-colors">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold text-gray-900">{suggestion.description}</h4>
                  <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
                    {Math.round(suggestion.confidence * 100)}% confidence
                  </span>
                </div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-lg font-bold text-[#0ea5e9]">
                    ${suggestion.suggestedPrice.toLocaleString()}
                  </span>
                  <span className="text-xs text-gray-500">Based on {suggestion.basedOn}</span>
                </div>
                {suggestion.recentUsage && (
                  <p className="text-xs text-gray-600 mb-2">{suggestion.recentUsage}</p>
                )}
                <button className="text-sm text-[#0ea5e9] hover:underline">Add to Invoice</button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Create Invoice Modal (simplified) */}
      {showCreateModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-2xl mx-4">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-900">Create New Invoice</h2>
              <button 
                onClick={() => setShowCreateModal(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                ✕
              </button>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Customer</label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0ea5e9] focus:border-transparent">
                  <option>Select a customer...</option>
                  <option>ABC Restaurant Group</option>
                  <option>Tech Startup LLC</option>
                  <option>Local Manufacturing Co</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Template</label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0ea5e9] focus:border-transparent">
                  <option>Select a template...</option>
                  <option>Professional Services</option>
                  <option>Product Sales</option>
                </select>
              </div>
              <div className="flex justify-end space-x-3 pt-4">
                <button 
                  onClick={() => setShowCreateModal(false)}
                  className="px-4 py-2 text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button className="btn-primary">
                  Create Invoice
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
