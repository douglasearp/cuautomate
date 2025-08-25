'use client';

import { useState } from 'react';
import { 
  ArrowLeft, 
  Search, 
  Camera, 
  MapPin, 
  Building2, 
  CheckCircle,
  X,
  Phone,
  Globe,
  Mail,
  CreditCard,
  Clock,
  Star,
  Users,
  ArrowRight,
  ChevronRight,
  ChevronDown
} from 'lucide-react';
import { billerService } from '../../../../lib/services/billerService';
import { Biller, Category } from '../../../../lib/mockData/billers';
import PayablesLayout from '../../../../components/PayablesLayout';
import Link from 'next/link';

export default function AddBillerPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedBiller, setSelectedBiller] = useState<Biller | null>(null);
  const [accountData, setAccountData] = useState({
    accountNumber: '',
    accountNickname: '',
    typicalAmount: '',
    dueDate: '',
    enableNotifications: true,
    enableAutoPay: false,
    preferredNetwork: 'FedNow'
  });
  const [loading, setLoading] = useState(false);
  const [searchResults, setSearchResults] = useState<Biller[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);

  const steps = [
    { id: 1, name: 'Search & Discovery', description: 'Find your biller' },
    { id: 2, name: 'Biller Selection', description: 'Select and verify' },
    { id: 3, name: 'Account Setup', description: 'Configure account' }
  ];

  const handleSearch = async () => {
    if (!searchQuery.trim()) return;
    
    setLoading(true);
    try {
      const results = await billerService.searchBillers(searchQuery);
      setSearchResults(results.billers);
    } catch (error) {
      console.error('Search failed:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleBillerSelect = (biller: Biller) => {
    setSelectedBiller(biller);
    setCurrentStep(2);
  };

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async () => {
    if (!selectedBiller || !accountData.accountNumber) return;
    
    setLoading(true);
    try {
      const newBiller = await billerService.addBiller({
        ...selectedBiller,
        accountNumber: accountData.accountNumber,
        accountNickname: accountData.accountNickname,
        preferredNetworks: [accountData.preferredNetwork]
      });
      
      console.log('Biller added successfully:', newBiller);
      // Redirect to biller directory or show success message
    } catch (error) {
      console.error('Failed to add biller:', error);
    } finally {
      setLoading(false);
    }
  };

  const renderStep1 = () => (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold text-gray-900 mb-2">Search for your biller</h2>
        <p className="text-gray-600">Find your biller by name, category, or scan a bill</p>
      </div>

      {/* Search Interface */}
      <div className="space-y-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="e.g., 'Evergy', 'State Farm', 'Chase Bank'"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0ea5e9] focus:border-transparent"
          />
        </div>

        <div className="flex space-x-3">
          <button
            onClick={handleSearch}
            disabled={loading}
            className="flex-1 bg-[#0ea5e9] text-white py-3 px-4 rounded-lg hover:bg-[#0284c7] transition-colors disabled:opacity-50"
          >
            {loading ? 'Searching...' : 'Search'}
          </button>
          <button className="flex items-center space-x-2 px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50">
            <Camera className="h-4 w-4" />
            <span>Scan Bill</span>
          </button>
          <button className="flex items-center space-x-2 px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50">
            <MapPin className="h-4 w-4" />
            <span>Use GPS</span>
          </button>
        </div>
      </div>

      {/* Quick Actions */}
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-3">Quick Actions</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <button className="flex flex-col items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50">
            <span className="text-2xl mb-2">💡</span>
            <span className="text-sm font-medium">Utilities</span>
          </button>
          <button className="flex flex-col items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50">
            <span className="text-2xl mb-2">🚗</span>
            <span className="text-sm font-medium">Insurance</span>
          </button>
          <button className="flex flex-col items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50">
            <span className="text-2xl mb-2">🏥</span>
            <span className="text-sm font-medium">Healthcare</span>
          </button>
          <button className="flex flex-col items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50">
            <span className="text-2xl mb-2">💳</span>
            <span className="text-sm font-medium">Financial</span>
          </button>
        </div>
      </div>

      {/* Search Results */}
      {searchResults.length > 0 && (
        <div>
          <h3 className="text-lg font-medium text-gray-900 mb-3">Search Results</h3>
          <div className="space-y-3">
            {searchResults.map((biller) => (
              <div
                key={biller.id}
                onClick={() => handleBillerSelect(biller)}
                className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="text-2xl">{biller.icon}</div>
                    <div>
                      <h4 className="font-medium text-gray-900">{biller.name}</h4>
                      <p className="text-sm text-gray-500">{biller.category} • {biller.location}</p>
                    </div>
                  </div>
                  <ChevronRight className="h-5 w-5 text-gray-400" />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );

  const renderStep2 = () => (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold text-gray-900 mb-2">Select Biller</h2>
        <p className="text-gray-600">Review and select the correct biller for your account</p>
      </div>

      {selectedBiller && (
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center space-x-3">
              <div className="text-3xl">{selectedBiller.icon}</div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900">{selectedBiller.name}</h3>
                <p className="text-gray-600">{selectedBiller.category} • {selectedBiller.location}</p>
              </div>
            </div>
            <div className="flex items-center space-x-1">
              <Star className="h-4 w-4 text-yellow-400 fill-current" />
              <span className="text-sm font-medium">{selectedBiller.rating}</span>
              <span className="text-sm text-gray-500">({selectedBiller.usageCount} users)</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <h4 className="font-medium text-gray-900 mb-3">Contact Information</h4>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4 text-gray-400" />
                  <span className="text-sm">{selectedBiller.contactInfo.phone}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Globe className="h-4 w-4 text-gray-400" />
                  <span className="text-sm">{selectedBiller.contactInfo.website}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4 text-gray-400" />
                  <span className="text-sm">{selectedBiller.contactInfo.email}</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-medium text-gray-900 mb-3">Payment Details</h4>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <CreditCard className="h-4 w-4 text-gray-400" />
                  <span className="text-sm">Accepts: {selectedBiller.networks.join(', ')}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4 text-gray-400" />
                  <span className="text-sm">Processing: {selectedBiller.processingTime}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Building2 className="h-4 w-4 text-gray-400" />
                  <span className="text-sm">Account Format: {selectedBiller.accountPattern}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <div className="flex items-start space-x-3">
              <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5" />
              <div>
                <h4 className="font-medium text-blue-900">Verified Biller</h4>
                <p className="text-sm text-blue-700 mt-1">
                  This biller is verified and actively accepting payments through our network.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );

  const renderStep3 = () => (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold text-gray-900 mb-2">Configure Account</h2>
        <p className="text-gray-600">Set up your account details and payment preferences</p>
      </div>

      {selectedBiller && (
        <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
          <div className="flex items-center space-x-3 mb-4">
            <div className="text-2xl">{selectedBiller.icon}</div>
            <div>
              <h3 className="font-semibold text-gray-900">{selectedBiller.name}</h3>
              <p className="text-sm text-gray-500">{selectedBiller.location}</p>
            </div>
          </div>
        </div>
      )}

      <div className="space-y-6">
        {/* Account Information */}
        <div>
          <h3 className="text-lg font-medium text-gray-900 mb-4">Account Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Account Number *
              </label>
              <input
                type="text"
                value={accountData.accountNumber}
                onChange={(e) => setAccountData({ ...accountData, accountNumber: e.target.value })}
                placeholder={selectedBiller?.accountPattern || "Enter account number"}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0ea5e9] focus:border-transparent"
              />
              <p className="text-xs text-green-600 mt-1">✓ Valid format</p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Account Nickname (Optional)
              </label>
              <input
                type="text"
                value={accountData.accountNickname}
                onChange={(e) => setAccountData({ ...accountData, accountNickname: e.target.value })}
                placeholder="e.g., Main Office Electric"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0ea5e9] focus:border-transparent"
              />
            </div>
          </div>
        </div>

        {/* Payment Settings */}
        <div>
          <h3 className="text-lg font-medium text-gray-900 mb-4">Payment Settings</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Preferred Payment Network
              </label>
              <div className="space-y-2">
                {selectedBiller?.networks.map((network) => (
                  <label key={network} className="flex items-center space-x-3">
                    <input
                      type="radio"
                      name="preferredNetwork"
                      value={network}
                      checked={accountData.preferredNetwork === network}
                      onChange={(e) => setAccountData({ ...accountData, preferredNetwork: e.target.value })}
                      className="text-[#0ea5e9] focus:ring-[#0ea5e9]"
                    />
                    <span className="text-sm text-gray-900">{network}</span>
                    {network === 'FedNow' && (
                      <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">Recommended</span>
                    )}
                  </label>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <label className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  checked={accountData.enableNotifications}
                  onChange={(e) => setAccountData({ ...accountData, enableNotifications: e.target.checked })}
                  className="rounded border-gray-300 text-[#0ea5e9] focus:ring-[#0ea5e9]"
                />
                <span className="text-sm text-gray-900">Send notification 3 days before due date</span>
              </label>

              <label className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  checked={accountData.enableAutoPay}
                  onChange={(e) => setAccountData({ ...accountData, enableAutoPay: e.target.checked })}
                  className="rounded border-gray-300 text-[#0ea5e9] focus:ring-[#0ea5e9]"
                />
                <span className="text-sm text-gray-900">Set up automatic payment processing</span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 1:
        return renderStep1();
      case 2:
        return renderStep2();
      case 3:
        return renderStep3();
      default:
        return renderStep1();
    }
  };

  return (
    <PayablesLayout>
      <div className="p-6">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link
                href="/payables/biller-directory"
                className="flex items-center space-x-2 text-gray-600 hover:text-gray-900"
              >
                <ArrowLeft className="h-4 w-4" />
                <span>Back to Directory</span>
              </Link>
            </div>
            <button className="text-gray-400 hover:text-gray-600">
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            {steps.map((step, index) => (
              <div key={step.id} className="flex items-center">
                <div className={`flex items-center justify-center w-8 h-8 rounded-full ${
                  currentStep >= step.id 
                    ? 'bg-[#0ea5e9] text-white' 
                    : 'bg-gray-200 text-gray-600'
                }`}>
                  {currentStep > step.id ? (
                    <CheckCircle className="h-4 w-4" />
                  ) : (
                    <span className="text-sm font-medium">{step.id}</span>
                  )}
                </div>
                <div className="ml-3">
                  <p className={`text-sm font-medium ${
                    currentStep >= step.id ? 'text-gray-900' : 'text-gray-500'
                  }`}>
                    {step.name}
                  </p>
                  <p className="text-xs text-gray-500">{step.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className={`w-16 h-0.5 mx-4 ${
                    currentStep > step.id ? 'bg-[#0ea5e9]' : 'bg-gray-200'
                  }`} />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto">
          {renderCurrentStep()}
        </div>

        {/* Navigation */}
        <div className="mt-8 flex items-center justify-between">
          <button
            onClick={handleBack}
            disabled={currentStep === 1}
            className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:text-gray-900 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Previous</span>
          </button>

          <div className="flex items-center space-x-3">
            <button
              onClick={() => window.history.back()}
              className="px-4 py-2 text-gray-600 hover:text-gray-900"
            >
              Cancel
            </button>
            
            {currentStep < 3 ? (
              <button
                onClick={handleNext}
                disabled={!selectedBiller}
                className="flex items-center space-x-2 bg-[#0ea5e9] text-white px-6 py-2 rounded-lg hover:bg-[#0284c7] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span>Next</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                disabled={loading || !accountData.accountNumber}
                className="flex items-center space-x-2 bg-[#0ea5e9] text-white px-6 py-2 rounded-lg hover:bg-[#0284c7] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Adding...' : 'Add Biller'}
              </button>
            )}
          </div>
        </div>
      </div>
    </PayablesLayout>
  );
}
