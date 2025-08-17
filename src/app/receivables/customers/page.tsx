'use client';

import { useState } from 'react';
// import ReceivablesLayout from '@/components/ReceivablesLayout';
import { 
  Search, 
  Filter, 
  Download, 
  Plus, 
  Building2,
  Mail,
  Phone,
  Globe,
  DollarSign,
  Calendar,
  MoreHorizontal,
  Edit,
  Trash2,
  Eye,
  BarChart3,
  Users,
  FileText,
  CreditCard
} from 'lucide-react';

// Mock customer data
const mockCustomers = [
  {
    id: '1',
    companyName: 'Tech Solutions Inc',
    industry: 'Technology',
    website: 'www.techsolutions.com',
    email: 'contact@techsolutions.com',
    phone: '(555) 123-4567',
    creditLimit: 50000,
    paymentTerms: 'Net 30',
    status: 'Active',
    outstandingBalance: 12500,
    lastPayment: '2025-01-10'
  },
  {
    id: '2',
    companyName: 'Global Manufacturing',
    industry: 'Manufacturing',
    website: 'www.globalmfg.com',
    email: 'accounts@globalmfg.com',
    phone: '(555) 234-5678',
    creditLimit: 75000,
    paymentTerms: 'Net 45',
    status: 'Active',
    outstandingBalance: 8900,
    lastPayment: '2025-01-08'
  },
  {
    id: '3',
    companyName: 'Local Coffee Roasters',
    industry: 'Food & Beverage',
    website: 'www.localcoffee.com',
    email: 'sarah@localcoffee.com',
    phone: '(555) 345-6789',
    creditLimit: 25000,
    paymentTerms: 'Net 15',
    status: 'Active',
    outstandingBalance: 5600,
    lastPayment: '2025-01-12'
  },
  {
    id: '4',
    companyName: 'Digital Marketing Pro',
    industry: 'Marketing',
    website: 'www.digitalmarketingpro.com',
    email: 'info@digitalmarketingpro.com',
    phone: '(555) 456-7890',
    creditLimit: 35000,
    paymentTerms: 'Net 30',
    status: 'Inactive',
    outstandingBalance: 7800,
    lastPayment: '2024-12-15'
  },
  {
    id: '5',
    companyName: 'Green Energy Solutions',
    industry: 'Energy',
    website: 'www.greenenergy.com',
    email: 'billing@greenenergy.com',
    phone: '(555) 567-8901',
    creditLimit: 100000,
    paymentTerms: 'Net 60',
    status: 'Active',
    outstandingBalance: 0,
    lastPayment: '2025-01-14'
  },
  {
    id: '6',
    companyName: 'Creative Design Studio',
    industry: 'Design',
    website: 'www.creativedesign.com',
    email: 'hello@creativedesign.com',
    phone: '(555) 678-9012',
    creditLimit: 40000,
    paymentTerms: 'Net 30',
    status: 'Suspended',
    outstandingBalance: 15000,
    lastPayment: '2024-11-20'
  }
];

export default function CustomersPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [selectedCustomer, setSelectedCustomer] = useState(null);

  const filteredCustomers = mockCustomers.filter(customer => {
    const matchesSearch = customer.companyName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         customer.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || customer.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active': return 'bg-green-100 text-green-700';
      case 'Inactive': return 'bg-gray-100 text-gray-700';
      case 'Suspended': return 'bg-red-100 text-red-700';
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
              <h1 className="text-2xl font-bold text-gray-900">Customer Management</h1>
              <p className="text-gray-600">Manage your customer relationships and credit limits</p>
            </div>
            <button className="btn-primary">
              <Plus className="h-4 w-4 mr-2" />
              Add Customer
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
            <a href="/receivables/customers" className="flex items-center space-x-2 py-4 px-1 border-b-2 border-[#0ea5e9] text-[#0ea5e9] font-medium text-sm">
              <Users className="h-4 w-4" />
              <span>Customers</span>
            </a>
            <a href="/receivables/invoices" className="flex items-center space-x-2 py-4 px-1 border-b-2 border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 font-medium text-sm">
              <FileText className="h-4 w-4" />
              <span>Invoices</span>
            </a>
            <a href="/receivables/payments" className="flex items-center space-x-2 py-4 px-1 border-b-2 border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 font-medium text-sm">
              <CreditCard className="h-4 w-4" />
              <span>Payments</span>
            </a>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

      {/* Search and Filters */}
        <div className="card mb-8">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search customers by name or email..."
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
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
                <option value="Suspended">Suspended</option>
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

        {/* Customer Grid */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredCustomers.map((customer) => (
            <div key={customer.id} className="card hover:shadow-lg transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-[#0ea5e9] rounded-lg flex items-center justify-center">
                    <Building2 className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{customer.companyName}</h3>
                    <p className="text-sm text-gray-600">{customer.industry}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getStatusColor(customer.status)}`}>
                    {customer.status}
                  </span>
                  <button className="p-1 rounded hover:bg-gray-100">
                    <MoreHorizontal className="h-4 w-4 text-gray-600" />
                  </button>
                </div>
              </div>

              <div className="space-y-3 mb-4">
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <Mail className="h-4 w-4" />
                  <span>{customer.email}</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <Phone className="h-4 w-4" />
                  <span>{customer.phone}</span>
                </div>
                {customer.website && (
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Globe className="h-4 w-4" />
                    <span>{customer.website}</span>
                  </div>
                )}
              </div>

              <div className="border-t border-gray-200 pt-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-gray-600">Credit Limit</p>
                    <p className="font-semibold text-gray-900">${customer.creditLimit.toLocaleString()}</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Payment Terms</p>
                    <p className="font-semibold text-gray-900">{customer.paymentTerms}</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Outstanding</p>
                    <p className={`font-semibold ${customer.outstandingBalance > 0 ? 'text-red-600' : 'text-green-600'}`}>
                      ${customer.outstandingBalance.toLocaleString()}
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-600">Last Payment</p>
                    <p className="font-semibold text-gray-900">
                      {new Date(customer.lastPayment).toLocaleDateString()}
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-200">
                <button 
                  className="flex items-center space-x-1 text-sm text-[#0ea5e9] hover:underline"
                  onClick={() => setSelectedCustomer(customer)}
                >
                  <Eye className="h-4 w-4" />
                  <span>View Details</span>
                </button>
                <div className="flex items-center space-x-2">
                  <button className="p-2 rounded hover:bg-gray-100">
                    <Edit className="h-4 w-4 text-gray-600" />
                  </button>
                  <button className="p-2 rounded hover:bg-gray-100">
                    <Trash2 className="h-4 w-4 text-gray-600" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredCustomers.length === 0 && (
          <div className="text-center py-12">
            <Building2 className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No customers found</h3>
            <p className="text-gray-600 mb-4">Try adjusting your search or filter criteria</p>
            <button className="btn-primary">
              <Plus className="h-4 w-4 mr-2" />
              Add Your First Customer
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
