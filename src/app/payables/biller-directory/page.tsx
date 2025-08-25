'use client';

import { useState, useEffect } from 'react';
import { 
  Plus, 
  Search, 
  Filter, 
  Download, 
  Eye, 
  Edit, 
  Settings, 
  BarChart3,
  Building2,
  Globe,
  DollarSign,
  CheckCircle,
  TrendingUp,
  TrendingDown,
  Minus,
  MoreHorizontal,
  RefreshCw,
  Upload,
  FileText,
  CreditCard,
  Users,
  Activity
} from 'lucide-react';
import { billerService } from '../../../lib/services/billerService';
import { Biller, DashboardMetrics, NetworkStatus } from '../../../lib/mockData/billers';
import PayablesLayout from '../../../components/PayablesLayout';

export default function BillerDirectoryPage() {
  const [billers, setBillers] = useState<Biller[]>([]);
  const [metrics, setMetrics] = useState<DashboardMetrics | null>(null);
  const [networkStatus, setNetworkStatus] = useState<Record<string, NetworkStatus> | null>(null);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({
    category: 'all',
    location: '',
    networks: [] as string[],
    status: 'all'
  });
  const [showFilters, setShowFilters] = useState(false);
  const [selectedBillers, setSelectedBillers] = useState<number[]>([]);

  useEffect(() => {
    loadDashboardData();
  }, []);

  useEffect(() => {
    searchBillers();
  }, [searchQuery, filters]);

  const loadDashboardData = async () => {
    try {
      const [metricsData, networkData] = await Promise.all([
        billerService.getDashboardMetrics(),
        billerService.getNetworkStatus()
      ]);
      
      setMetrics(metricsData);
      setNetworkStatus(networkData);
    } catch (error) {
      console.error('Failed to load dashboard data:', error);
    } finally {
      setLoading(false);
    }
  };

  const searchBillers = async () => {
    try {
      const results = await billerService.searchBillers(searchQuery, filters);
      setBillers(results.billers);
    } catch (error) {
      console.error('Search failed:', error);
    }
  };

  const handleBillerAction = (biller: Biller, action: string) => {
    console.log(`${action} biller:`, biller);
    // Implement action handlers
  };

  const handleBulkAction = (action: string) => {
    console.log(`${action} selected billers:`, selectedBillers);
    // Implement bulk actions
  };

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'up':
        return <TrendingUp className="h-4 w-4 text-green-500" />;
      case 'down':
        return <TrendingDown className="h-4 w-4 text-red-500" />;
      default:
        return <Minus className="h-4 w-4 text-gray-500" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active':
        return 'bg-green-100 text-green-800';
      case 'Setup Required':
        return 'bg-yellow-100 text-yellow-800';
      case 'Inactive':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  if (loading) {
    return (
      <PayablesLayout>
        <div className="p-6">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-1/4 mb-6"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="bg-white p-6 rounded-lg shadow">
                  <div className="h-4 bg-gray-200 rounded w-1/2 mb-2"></div>
                  <div className="h-8 bg-gray-200 rounded w-1/3"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </PayablesLayout>
    );
  }

  return (
    <PayablesLayout>
      <div className="p-6">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Biller Directory Management</h1>
              <p className="text-gray-600 mt-1">Manage your biller relationships and payment networks</p>
            </div>
            <button className="bg-[#0ea5e9] text-white px-4 py-2 rounded-lg hover:bg-[#0284c7] transition-colors flex items-center space-x-2">
              <Plus className="h-4 w-4" />
              <span>Add New Biller</span>
            </button>
          </div>
        </div>

        {/* Dashboard Metrics */}
        {metrics && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{metrics.totalBillers.label}</p>
                  <p className="text-2xl font-bold text-gray-900">{metrics.totalBillers.value}</p>
                  <p className="text-xs text-gray-500 mt-1">{metrics.totalBillers.change}</p>
                </div>
                <div className="text-2xl">{metrics.totalBillers.icon}</div>
              </div>
              <div className="flex items-center mt-2">
                {getTrendIcon(metrics.totalBillers.trend)}
                <span className="text-xs text-gray-500 ml-1">vs last month</span>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{metrics.activeNetworks.label}</p>
                  <p className="text-2xl font-bold text-gray-900">{metrics.activeNetworks.value}</p>
                  <p className="text-xs text-gray-500 mt-1">{metrics.activeNetworks.change}</p>
                </div>
                <div className="text-2xl">{metrics.activeNetworks.icon}</div>
              </div>
              <div className="flex items-center mt-2">
                {getTrendIcon(metrics.activeNetworks.trend)}
                <span className="text-xs text-gray-500 ml-1">All operational</span>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{metrics.monthlyVolume.label}</p>
                  <p className="text-2xl font-bold text-gray-900">{metrics.monthlyVolume.value}</p>
                  <p className="text-xs text-gray-500 mt-1">{metrics.monthlyVolume.change}</p>
                </div>
                <div className="text-2xl">{metrics.monthlyVolume.icon}</div>
              </div>
              <div className="flex items-center mt-2">
                {getTrendIcon(metrics.monthlyVolume.trend)}
                <span className="text-xs text-gray-500 ml-1">vs last month</span>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{metrics.successRate.label}</p>
                  <p className="text-2xl font-bold text-gray-900">{metrics.successRate.value}</p>
                  <p className="text-xs text-gray-500 mt-1">{metrics.successRate.change}</p>
                </div>
                <div className="text-2xl">{metrics.successRate.icon}</div>
              </div>
              <div className="flex items-center mt-2">
                {getTrendIcon(metrics.successRate.trend)}
                <span className="text-xs text-gray-500 ml-1">Payment success</span>
              </div>
            </div>
          </div>
        )}

        {/* Search and Filters */}
        <div className="bg-white p-6 rounded-lg shadow mb-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
            <div className="flex-1 max-w-lg">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search billers by name, category, or service type..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0ea5e9] focus:border-transparent"
                />
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
              >
                <Filter className="h-4 w-4" />
                <span>Filters</span>
              </button>
              
              <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                <Download className="h-4 w-4" />
                <span>Export</span>
              </button>
            </div>
          </div>

          {/* Filter Panel */}
          {showFilters && (
            <div className="mt-4 pt-4 border-t border-gray-200">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                  <select
                    value={filters.category}
                    onChange={(e) => setFilters({ ...filters, category: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0ea5e9] focus:border-transparent"
                  >
                    <option value="all">All Categories</option>
                    <option value="utilities">Utilities</option>
                    <option value="insurance">Insurance</option>
                    <option value="government">Government</option>
                    <option value="healthcare">Healthcare</option>
                    <option value="education">Education</option>
                    <option value="financial">Financial</option>
                    <option value="telecommunications">Telecommunications</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                  <input
                    type="text"
                    placeholder="e.g., Olathe, KS"
                    value={filters.location}
                    onChange={(e) => setFilters({ ...filters, location: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0ea5e9] focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                  <select
                    value={filters.status}
                    onChange={(e) => setFilters({ ...filters, status: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0ea5e9] focus:border-transparent"
                  >
                    <option value="all">All Status</option>
                    <option value="Active">Active</option>
                    <option value="Setup Required">Setup Required</option>
                    <option value="Inactive">Inactive</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Networks</label>
                  <select
                    value={filters.networks[0] || 'all'}
                    onChange={(e) => setFilters({ 
                      ...filters, 
                      networks: e.target.value === 'all' ? [] : [e.target.value] 
                    })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0ea5e9] focus:border-transparent"
                  >
                    <option value="all">All Networks</option>
                    <option value="ACH">ACH</option>
                    <option value="FedNow">FedNow</option>
                    <option value="RTP">RTP</option>
                    <option value="Stripe">Stripe</option>
                    <option value="TabaPay">TabaPay</option>
                    <option value="Venmo">Venmo</option>
                  </select>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Biller Table */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-medium text-gray-900">
                Biller Directory ({billers.length} billers)
              </h3>
              <div className="flex items-center space-x-2">
                {selectedBillers.length > 0 && (
                  <button
                    onClick={() => handleBulkAction('edit')}
                    className="px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded hover:bg-gray-200"
                  >
                    Edit {selectedBillers.length} selected
                  </button>
                )}
                <button className="p-2 text-gray-400 hover:text-gray-600">
                  <RefreshCw className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
          
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    <input
                      type="checkbox"
                      onChange={(e) => {
                        if (e.target.checked) {
                          setSelectedBillers(billers.map(b => b.id));
                        } else {
                          setSelectedBillers([]);
                        }
                      }}
                      className="rounded border-gray-300 text-[#0ea5e9] focus:ring-[#0ea5e9]"
                    />
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Biller Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Category
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Networks
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Processing
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {billers.map((biller) => (
                  <tr key={biller.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <input
                        type="checkbox"
                        checked={selectedBillers.includes(biller.id)}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setSelectedBillers([...selectedBillers, biller.id]);
                          } else {
                            setSelectedBillers(selectedBillers.filter(id => id !== biller.id));
                          }
                        }}
                        className="rounded border-gray-300 text-[#0ea5e9] focus:ring-[#0ea5e9]"
                      />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="text-2xl mr-3">{biller.icon}</div>
                        <div>
                          <div className="text-sm font-medium text-gray-900">{biller.name}</div>
                          <div className="text-sm text-gray-500">{biller.location}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div>
                        <div className="text-sm text-gray-900">{biller.category}</div>
                        <div className="text-sm text-gray-500">{biller.subCategory}</div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex flex-wrap gap-1">
                        {biller.networks.map((network) => (
                          <span
                            key={network}
                            className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                          >
                            {network}
                          </span>
                        ))}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {biller.processingTime}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(biller.status)}`}>
                        {biller.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => handleBillerAction(biller, 'view')}
                          className="text-[#0ea5e9] hover:text-[#0284c7]"
                        >
                          <Eye className="h-4 w-4" />
                        </button>
                        <button
                          onClick={() => handleBillerAction(biller, 'edit')}
                          className="text-gray-600 hover:text-gray-900"
                        >
                          <Edit className="h-4 w-4" />
                        </button>
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
        </div>
      </div>
    </PayablesLayout>
  );
}
