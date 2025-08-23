'use client';

import { useState } from 'react';
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
  CheckCircle2,
  FileText,
  CreditCard,
  Users
} from 'lucide-react';

// Mock vendor data
const mockVendors = [
  {
    id: '1',
    vendorNumber: 'V001',
    companyName: 'Tech Solutions Inc',
    contactName: 'John Smith',
    email: 'john@techsolutions.com',
    phone: '(555) 123-4567',
    website: 'www.techsolutions.com',
    address: {
      street1: '123 Tech Street',
      street2: 'Suite 100',
      city: 'San Francisco',
      state: 'CA',
      zipCode: '94105',
      country: 'USA'
    },
    taxId: '12-3456789',
    paymentTerms: { termType: 'net', days: 30 },
    preferredPaymentMethod: 'ach',
    accountNumber: '****1234',
    routingNumber: '****5678',
    isActive: true,
    tags: ['Technology', 'Software'],
    notes: 'Primary IT vendor',
    totalOwed: 25000,
    creditLimit: 50000,
    currency: 'USD',
    lastPaymentDate: new Date('2025-01-10'),
    lastPaymentAmount: 5000
  },
  {
    id: '2',
    vendorNumber: 'V002',
    companyName: 'Office Supplies Co',
    contactName: 'Sarah Johnson',
    email: 'sarah@officesupplies.com',
    phone: '(555) 987-6543',
    website: 'www.officesupplies.com',
    address: {
      street1: '456 Office Ave',
      street2: '',
      city: 'New York',
      state: 'NY',
      zipCode: '10001',
      country: 'USA'
    },
    taxId: '98-7654321',
    paymentTerms: { termType: 'net', days: 15 },
    preferredPaymentMethod: 'check',
    accountNumber: '',
    routingNumber: '',
    isActive: true,
    tags: ['Office Supplies', 'Stationery'],
    notes: 'Monthly office supplies',
    totalOwed: 8500,
    creditLimit: 25000,
    currency: 'USD',
    lastPaymentDate: new Date('2025-01-05'),
    lastPaymentAmount: 3200
  },
  {
    id: '3',
    vendorNumber: 'V003',
    companyName: 'Marketing Agency',
    contactName: 'Mike Davis',
    email: 'mike@marketingagency.com',
    phone: '(555) 456-7890',
    website: 'www.marketingagency.com',
    address: {
      street1: '789 Marketing Blvd',
      street2: 'Floor 3',
      city: 'Los Angeles',
      state: 'CA',
      zipCode: '90210',
      country: 'USA'
    },
    taxId: '45-6789012',
    paymentTerms: { termType: 'net', days: 30 },
    preferredPaymentMethod: 'wire',
    accountNumber: '****5678',
    routingNumber: '****9012',
    isActive: true,
    tags: ['Marketing', 'Advertising'],
    notes: 'Digital marketing services',
    totalOwed: 15000,
    creditLimit: 75000,
    currency: 'USD',
    lastPaymentDate: new Date('2025-01-12'),
    lastPaymentAmount: 8000
  },
  {
    id: '4',
    vendorNumber: 'V004',
    companyName: 'Cloud Services Ltd',
    contactName: 'Lisa Chen',
    email: 'lisa@cloudservices.com',
    phone: '(555) 321-0987',
    website: 'www.cloudservices.com',
    address: {
      street1: '321 Cloud Street',
      street2: '',
      city: 'Austin',
      state: 'TX',
      zipCode: '73301',
      country: 'USA'
    },
    taxId: '32-1098765',
    paymentTerms: { termType: 'net', days: 45 },
    preferredPaymentMethod: 'ach',
    accountNumber: '****9012',
    routingNumber: '****3456',
    isActive: false,
    tags: ['Cloud Services', 'Hosting'],
    notes: 'Cloud hosting services',
    totalOwed: 0,
    creditLimit: 100000,
    currency: 'USD',
    lastPaymentDate: new Date('2024-12-20'),
    lastPaymentAmount: 12000
  }
];

export default function VendorsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [selectedVendor, setSelectedVendor] = useState<any>(null);

  const filteredVendors = mockVendors.filter(vendor => {
    const matchesSearch = vendor.companyName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         vendor.contactName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         vendor.email?.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || 
                         (statusFilter === 'active' && vendor.isActive) ||
                         (statusFilter === 'inactive' && !vendor.isActive);
    return matchesSearch && matchesStatus;
  });

  const getPaymentMethodIcon = (method: string) => {
    switch (method) {
      case 'ach': return <CreditCard className="h-4 w-4 text-green-600" />;
      case 'check': return <FileText className="h-4 w-4 text-blue-600" />;
      case 'wire': return <DollarSign className="h-4 w-4 text-purple-600" />;
      default: return <CreditCard className="h-4 w-4 text-gray-600" />;
    }
  };

  const getPaymentMethodLabel = (method: string) => {
    switch (method) {
      case 'ach': return 'ACH';
      case 'check': return 'Check';
      case 'wire': return 'Wire';
      default: return method;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      {/* Page Header */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Vendor Management</h1>
              <p className="text-gray-600">Manage your vendor relationships and payment information</p>
            </div>
            <button className="btn-primary">
              <Plus className="h-4 w-4 mr-2" />
              Add Vendor
            </button>
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
            <a href="/payables/vendors" className="flex items-center space-x-2 py-4 px-1 border-b-2 border-[#0ea5e9] text-[#0ea5e9] font-medium text-sm">
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
        {/* Search and Filters */}
        <div className="card mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search vendors by name, contact, or email..."
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
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
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

        {/* Vendors Grid */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredVendors.map((vendor) => (
            <div key={vendor.id} className="card hover:border-[#0ea5e9] transition-colors">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-[#0ea5e9] rounded-lg flex items-center justify-center">
                    <Building2 className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{vendor.companyName}</h3>
                    <p className="text-sm text-gray-500">#{vendor.vendorNumber}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                    vendor.isActive 
                      ? 'bg-green-100 text-green-700' 
                      : 'bg-gray-100 text-gray-700'
                  }`}>
                    {vendor.isActive ? 'Active' : 'Inactive'}
                  </span>
                  <button className="p-1 hover:bg-gray-100 rounded">
                    <MoreHorizontal className="h-4 w-4 text-gray-600" />
                  </button>
                </div>
              </div>

              <div className="space-y-3 mb-4">
                {vendor.contactName && (
                  <div className="flex items-center space-x-2 text-sm">
                    {/* <User className="h-4 w-4 text-gray-400" /> */}
                    <span className="text-gray-900">{vendor.contactName}</span>
                  </div>
                )}
                {vendor.email && (
                  <div className="flex items-center space-x-2 text-sm">
                    <Mail className="h-4 w-4 text-gray-400" />
                    <span className="text-gray-900">{vendor.email}</span>
                  </div>
                )}
                {vendor.phone && (
                  <div className="flex items-center space-x-2 text-sm">
                    <Phone className="h-4 w-4 text-gray-400" />
                    <span className="text-gray-900">{vendor.phone}</span>
                  </div>
                )}
                {vendor.website && (
                  <div className="flex items-center space-x-2 text-sm">
                    <Globe className="h-4 w-4 text-gray-400" />
                    <span className="text-gray-900">{vendor.website}</span>
                  </div>
                )}
              </div>

              <div className="border-t border-gray-200 pt-4 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Total Owed:</span>
                  <span className="text-sm font-semibold text-gray-900">
                    ${vendor.totalOwed.toLocaleString()}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Credit Limit:</span>
                  <span className="text-sm font-semibold text-gray-900">
                    ${vendor.creditLimit?.toLocaleString() || 'N/A'}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Payment Method:</span>
                  <div className="flex items-center space-x-1">
                    {getPaymentMethodIcon(vendor.preferredPaymentMethod)}
                    <span className="text-sm text-gray-900">
                      {getPaymentMethodLabel(vendor.preferredPaymentMethod)}
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Payment Terms:</span>
                  <span className="text-sm font-semibold text-gray-900">
                    Net {vendor.paymentTerms.days}
                  </span>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-4 mt-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <button 
                      onClick={() => setSelectedVendor(vendor)}
                      className="text-[#0ea5e9] hover:text-[#0284c7] text-sm font-medium"
                    >
                      <Eye className="h-4 w-4 inline mr-1" />
                      View Details
                    </button>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button className="text-gray-600 hover:text-gray-800">
                      <Edit className="h-4 w-4" />
                    </button>
                    <button className="text-gray-600 hover:text-red-600">
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredVendors.length === 0 && (
          <div className="text-center py-12">
            <Building2 className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No vendors found</h3>
            <p className="text-gray-600 mb-4">Try adjusting your search or filter criteria</p>
            <button className="btn-primary">
              <Plus className="h-4 w-4 mr-2" />
              Add Your First Vendor
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
