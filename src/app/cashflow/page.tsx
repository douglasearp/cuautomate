'use client';

import { useState } from 'react';
import { 
  TrendingUp, 
  TrendingDown, 
  DollarSign, 
  Calendar,
  AlertTriangle,
  CheckCircle,
  Brain,
  BarChart3,
  PieChart,
  LineChart,
  Target,
  Zap,
  Clock,
  ArrowUpRight,
  ArrowDownRight
} from 'lucide-react';

// Mock data from specifications
const mockCashFlowData = [
  {
    date: '2025-08-16',
    actualBalance: 45000.00,
    inflow: {
      invoicePayments: 12500.00,
      otherIncome: 0.00,
      confidence: 0.95
    },
    outflow: {
      vendorPayments: 8500.00,
      payroll: 15000.00,
      expenses: 2300.00,
      confidence: 0.98
    },
    netFlow: -13300.00,
    projectedBalance: 31700.00
  },
  {
    date: '2025-08-17',
    actualBalance: 31700.00,
    inflow: {
      invoicePayments: 5500.00,
      confidence: 0.78
    },
    outflow: {
      vendorPayments: 3200.00,
      expenses: 800.00,
      confidence: 0.92
    },
    netFlow: 1500.00,
    projectedBalance: 33200.00
  },
  {
    date: '2025-08-18',
    actualBalance: 33200.00,
    inflow: {
      invoicePayments: 8000.00,
      confidence: 0.85
    },
    outflow: {
      vendorPayments: 1200.00,
      expenses: 500.00,
      confidence: 0.95
    },
    netFlow: 6300.00,
    projectedBalance: 39500.00
  },
  {
    date: '2025-08-19',
    actualBalance: 39500.00,
    inflow: {
      invoicePayments: 3000.00,
      confidence: 0.65
    },
    outflow: {
      vendorPayments: 4500.00,
      expenses: 1200.00,
      confidence: 0.88
    },
    netFlow: -2700.00,
    projectedBalance: 36800.00
  },
  {
    date: '2025-08-20',
    actualBalance: 36800.00,
    inflow: {
      invoicePayments: 12000.00,
      confidence: 0.92
    },
    outflow: {
      vendorPayments: 2800.00,
      expenses: 900.00,
      confidence: 0.94
    },
    netFlow: 8300.00,
    projectedBalance: 45100.00
  },
  {
    date: '2025-08-21',
    actualBalance: 45100.00,
    inflow: {
      invoicePayments: 7500.00,
      confidence: 0.88
    },
    outflow: {
      vendorPayments: 1800.00,
      expenses: 600.00,
      confidence: 0.96
    },
    netFlow: 5100.00,
    projectedBalance: 50200.00
  },
  {
    date: '2025-08-22',
    actualBalance: 50200.00,
    inflow: {
      invoicePayments: 9500.00,
      confidence: 0.91
    },
    outflow: {
      vendorPayments: 4200.00,
      expenses: 1100.00,
      confidence: 0.89
    },
    netFlow: 4200.00,
    projectedBalance: 54400.00
  },
  {
    date: '2025-08-23',
    actualBalance: 54400.00,
    inflow: {
      invoicePayments: 15000.00,
      confidence: 0.94
    },
    outflow: {
      vendorPayments: 3500.00,
      expenses: 1200.00,
      confidence: 0.91
    },
    netFlow: 10300.00,
    projectedBalance: 64700.00
  },
  {
    date: '2025-08-24',
    actualBalance: 64700.00,
    inflow: {
      invoicePayments: 8000.00,
      confidence: 0.87
    },
    outflow: {
      vendorPayments: 2800.00,
      expenses: 900.00,
      confidence: 0.93
    },
    netFlow: 4300.00,
    projectedBalance: 69000.00
  },
  {
    date: '2025-08-25',
    actualBalance: 69000.00,
    inflow: {
      invoicePayments: 11000.00,
      confidence: 0.89
    },
    outflow: {
      vendorPayments: 4200.00,
      expenses: 1100.00,
      confidence: 0.90
    },
    netFlow: 5700.00,
    projectedBalance: 74700.00
  }
];

const mockScenarios = [
  {
    id: 'scenario_optimistic',
    name: 'Optimistic Growth',
    description: 'New client signs, existing clients pay early',
    assumptions: [
      { variable: 'new_client_revenue', change: 25000.00 },
      { variable: 'payment_timing', change: -5 }, // 5 days faster
      { variable: 'collection_rate', change: 0.02 } // 2% improvement
    ],
    impact: {
      thirtyDayBalance: 67500.00,
      ninetyDayBalance: 125000.00,
      riskLevel: 'low'
    },
    probability: 0.25
  },
  {
    id: 'scenario_conservative',
    name: 'Economic Slowdown',
    description: 'Delayed payments, reduced new business',
    assumptions: [
      { variable: 'payment_timing', change: 10 }, // 10 days slower
      { variable: 'new_business', change: -0.3 }, // 30% reduction
      { variable: 'collection_rate', change: -0.05 } // 5% worse
    ],
    impact: {
      thirtyDayBalance: 15500.00,
      ninetyDayBalance: 8000.00,
      riskLevel: 'high'
    },
    probability: 0.15
  }
];

const mockOptimizationSuggestions = [
  {
    category: 'timing',
    title: 'Accelerate Invoice #1234 Payment',
    impact: 2500.00,
    effort: 'low',
    timeframe: '2 days',
    description: 'Send personalized reminder to ABC Corp - they typically respond well to friendly follow-ups',
    implementation: [
      'Send AI-generated personalized reminder',
      'Include easy payment link',
      'Follow up via phone if no response in 24 hours'
    ],
    successProbability: 0.78
  },
  {
    category: 'discount',
    title: 'Early Payment Discount Campaign',
    impact: 15000.00,
    effort: 'medium',
    timeframe: '1 week',
    description: 'Offer 2% discount for payments within 10 days on invoices >$1000',
    implementation: [
      'Configure automated discount offers',
      'Update payment terms on website',
      'Send announcement to key customers'
    ],
    estimatedCost: 800.00,
    netBenefit: 14200.00
  }
];

const mockFinancialHealth = {
  overallScore: 78, // out of 100
  liquidityRatio: 2.3, // good
  currentRatio: 1.8, // healthy
  operatingCashFlow: 45000.00,
  burnRate: 22000.00, // monthly
  runwayMonths: 8.5,
  trends: {
    cashPosition: 'improving',
    collections: 'stable',
    expenses: 'increasing',
    profitability: 'improving'
  },
  alerts: [
    {
      type: 'warning',
      message: 'Cash flow will drop below $10,000 threshold next Friday',
      action: 'Consider accelerating collections or delaying non-essential payments'
    }
  ]
};

export default function CashFlowPage() {
  const [selectedTimeframe, setSelectedTimeframe] = useState('30d');
  const [selectedScenario, setSelectedScenario] = useState('baseline');

  const getTrendIcon = (value: number) => {
    if (value > 0) return <TrendingUp className="h-4 w-4 text-green-600" />;
    if (value < 0) return <TrendingDown className="h-4 w-4 text-red-600" />;
    return <div className="h-4 w-4" />;
  };

  const getRiskColor = (riskLevel: string) => {
    switch (riskLevel) {
      case 'low': return 'text-green-600 bg-green-100';
      case 'medium': return 'text-yellow-600 bg-yellow-100';
      case 'high': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      {/* Page Header */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Cash Flow Management</h1>
              <p className="text-gray-600">Predictive analytics and scenario planning</p>
            </div>
            <div className="flex items-center space-x-4">
              <select
                value={selectedTimeframe}
                onChange={(e) => setSelectedTimeframe(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2D5016] focus:border-transparent"
              >
                <option value="7d">7 Days</option>
                <option value="30d">30 Days</option>
                <option value="90d">90 Days</option>
                <option value="1y">1 Year</option>
              </select>
              <button className="btn-primary">
                <Brain className="h-4 w-4 mr-2" />
                AI Insights
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Financial Health Overview */}
        <div className="grid lg:grid-cols-4 gap-6 mb-8">
          <div className="card">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-gray-900">Current Balance</h3>
              <DollarSign className="h-5 w-5 text-[#2D5016]" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">
              ${mockCashFlowData[0].actualBalance.toLocaleString()}
            </div>
            <div className="flex items-center text-green-600">
              <TrendingUp className="h-4 w-4 mr-1" />
              <span className="text-sm font-semibold">+12.5% from last month</span>
            </div>
          </div>

          <div className="card">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-gray-900">30-Day Projection</h3>
              <Target className="h-5 w-5 text-[#8B4513]" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">
              ${mockCashFlowData[mockCashFlowData.length - 1].projectedBalance.toLocaleString()}
            </div>
            <div className="flex items-center text-green-600">
              <ArrowUpRight className="h-4 w-4 mr-1" />
              <span className="text-sm font-semibold">+$2,100 projected</span>
            </div>
          </div>

          <div className="card">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-gray-900">Runway</h3>
              <Clock className="h-5 w-5 text-[#F4A460]" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">
              {mockFinancialHealth.runwayMonths} months
            </div>
            <div className="flex items-center text-green-600">
              <CheckCircle className="h-4 w-4 mr-1" />
              <span className="text-sm font-semibold">Healthy</span>
            </div>
          </div>

          <div className="card">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-gray-900">Health Score</h3>
              <BarChart3 className="h-5 w-5 text-[#10B981]" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">
              {mockFinancialHealth.overallScore}/100
            </div>
            <div className="flex items-center text-green-600">
              <TrendingUp className="h-4 w-4 mr-1" />
              <span className="text-sm font-semibold">Improving</span>
            </div>
          </div>
        </div>

        {/* Cash Flow Chart */}
        <div className="card mb-16">
          {/* Cash Flow Chart Visualization */}
          <div className="h-[28rem] bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-xl font-bold text-gray-900">Cash Flow Forecast</h2>
              <div className="flex items-center space-x-4 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded"></div>
                  <span>Money In</span>
                  <div className="w-3 h-3 bg-red-500 rounded"></div>
                  <span>Money Out</span>
                </div>
              </div>
            </div>
            <div className="flex items-end justify-between h-68 space-x-4 mt-4">
              {mockCashFlowData.map((data, index) => {
                // Calculate total inflow and outflow
                const totalInflow = (data.inflow.invoicePayments || 0) + (data.inflow.otherIncome || 0);
                const totalOutflow = (data.outflow.vendorPayments || 0) + (data.outflow.payroll || 0) + (data.outflow.expenses || 0);
                
                // Find max value for scaling
                const maxValue = Math.max(...mockCashFlowData.map(d => {
                  const inflow = (d.inflow.invoicePayments || 0) + (d.inflow.otherIncome || 0);
                  const outflow = (d.outflow.vendorPayments || 0) + (d.outflow.payroll || 0) + (d.outflow.expenses || 0);
                  return Math.max(inflow, outflow);
                })) || 1; // Prevent division by zero
                
                const inflowHeight = (totalInflow / maxValue) * 60;
                const outflowHeight = (totalOutflow / maxValue) * 60;
                
                return (
                  <div key={index} className="flex flex-col items-center flex-1 group">
                    <div className="w-full bg-gray-100 rounded-lg mb-2 relative h-full min-h-[160px] border border-gray-200">
                      {/* Money Out Bar (Red) - Left side */}
                      <div 
                        className="chart-bar bg-red-500 rounded-lg absolute bottom-0 left-0 w-[45%] shadow-sm hover:shadow-md group-hover:bg-red-600"
                        style={{ 
                          '--bar-height': `${Math.max(5, outflowHeight)}%`,
                          '--animation-delay': `${index * 150}ms`
                        } as React.CSSProperties}
                      ></div>
                      
                      {/* Money In Bar (Green) - Right side */}
                      <div 
                        className="chart-bar bg-green-500 rounded-lg absolute bottom-0 right-0 w-[45%] shadow-sm hover:shadow-md group-hover:bg-green-600"
                        style={{ 
                          '--bar-height': `${Math.max(5, inflowHeight)}%`,
                          '--animation-delay': `${index * 150 + 300}ms`
                        } as React.CSSProperties}
                      ></div>
                      

                      
                      {/* Hover Tooltip */}
                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-5 transition-all duration-200 rounded-lg"></div>
                    </div>
                    
                    {/* Date Label */}
                    <div className="text-xs text-gray-600 text-center mb-0.5">
                      {new Date(data.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                    </div>
                    
                    {/* Combined Money Flow Labels */}
                    <div className="text-xs text-center space-y-0.5">
                      <div className="text-red-600 font-semibold">-${totalOutflow.toLocaleString()}</div>
                      <div className="text-green-600 font-semibold">+${totalInflow.toLocaleString()}</div>
                      <div className={`font-semibold ${
                        data.netFlow >= 0 ? 'text-green-600' : 'text-red-600'
                      }`}>
                        Net: {data.netFlow >= 0 ? '+' : ''}${data.netFlow.toLocaleString()}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            
            {/* Chart Legend */}
            <div className="mt-8 pt-4 border-t border-gray-200">
              <div className="flex flex-wrap items-center justify-center gap-6">
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-green-500 rounded shadow-sm"></div>
                  <span className="text-sm font-medium text-gray-700">Money In</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-red-500 rounded shadow-sm"></div>
                  <span className="text-sm font-medium text-gray-700">Money Out</span>
                </div>
              </div>
              <div className="text-center mt-2">
                <p className="text-xs text-gray-500">
                  Daily cash flow visualization with green bars for money in and red bars for money out
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Scenarios and Optimization */}
        <div className="grid lg:grid-cols-2 gap-6 mb-8">
          {/* Scenario Planning */}
          <div className="card">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold text-gray-900">Scenario Planning</h3>
              <Brain className="h-5 w-5 text-[#2D5016]" />
            </div>
            <div className="space-y-4">
              {mockScenarios.map((scenario) => (
                <div key={scenario.id} className="border border-gray-200 rounded-lg p-4 hover:border-[#2D5016] transition-colors">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-gray-900">{scenario.name}</h4>
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getRiskColor(scenario.impact.riskLevel)}`}>
                      {scenario.impact.riskLevel} risk
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">{scenario.description}</p>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-gray-600">30-day balance:</span>
                      <div className="font-semibold text-gray-900">
                        ${scenario.impact.thirtyDayBalance.toLocaleString()}
                      </div>
                    </div>
                    <div>
                      <span className="text-gray-600">Probability:</span>
                      <div className="font-semibold text-gray-900">
                        {Math.round(scenario.probability * 100)}%
                      </div>
                    </div>
                  </div>
                  <button className="text-sm text-[#2D5016] hover:underline mt-2">
                    View Details
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Optimization Suggestions */}
          <div className="card">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold text-gray-900">AI Optimization</h3>
              <Zap className="h-5 w-5 text-[#F4A460]" />
            </div>
            <div className="space-y-4">
              {mockOptimizationSuggestions.map((suggestion, index) => (
                <div key={index} className="border-l-4 border-[#2D5016] pl-4 py-3 bg-[#2D5016]/5 rounded-r-lg">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 mb-1">{suggestion.title}</h4>
                      <p className="text-sm text-gray-600 mb-2">{suggestion.description}</p>
                      <div className="flex items-center space-x-4 text-xs mb-2">
                        <span className="text-[#2D5016] font-semibold">${suggestion.impact.toLocaleString()} impact</span>
                        <span className="text-gray-500">{suggestion.timeframe}</span>
                        <span className="text-gray-500">{suggestion.effort} effort</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-xs text-gray-600">
                          {Math.round((suggestion.successProbability || 0) * 100)}% success rate
                        </span>
                        <button className="text-xs text-[#2D5016] hover:underline">
                          Implement
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Financial Health Metrics */}
        <div className="card">
          <h3 className="text-lg font-bold text-gray-900 mb-6">Financial Health Metrics</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-600">Liquidity Ratio</span>
                <span className="text-sm font-semibold text-green-600">{mockFinancialHealth.liquidityRatio}</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-green-500 h-2 rounded-full" style={{ width: `${Math.min(100, (mockFinancialHealth.liquidityRatio / 3) * 100)}%` }}></div>
              </div>
              <div className="text-xs text-gray-500 mt-1">Good (target: 2.0+)</div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-600">Current Ratio</span>
                <span className="text-sm font-semibold text-green-600">{mockFinancialHealth.currentRatio}</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-green-500 h-2 rounded-full" style={{ width: `${Math.min(100, (mockFinancialHealth.currentRatio / 2) * 100)}%` }}></div>
              </div>
              <div className="text-xs text-gray-500 mt-1">Healthy (target: 1.5+)</div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-600">Operating Cash Flow</span>
                <span className="text-sm font-semibold text-green-600">${(mockFinancialHealth.operatingCashFlow / 1000).toFixed(0)}k</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-green-500 h-2 rounded-full" style={{ width: `${Math.min(100, (mockFinancialHealth.operatingCashFlow / 50000) * 100)}%` }}></div>
              </div>
              <div className="text-xs text-gray-500 mt-1">Positive</div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-600">Burn Rate</span>
                <span className="text-sm font-semibold text-yellow-600">${(mockFinancialHealth.burnRate / 1000).toFixed(0)}k/mo</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-yellow-500 h-2 rounded-full" style={{ width: `${Math.min(100, (mockFinancialHealth.burnRate / 30000) * 100)}%` }}></div>
              </div>
              <div className="text-xs text-gray-500 mt-1">Manageable</div>
            </div>
          </div>
        </div>

        {/* Alerts */}
        {mockFinancialHealth.alerts.length > 0 && (
          <div className="card mt-8 border-l-4 border-yellow-400 bg-yellow-50">
            <div className="flex items-start">
              <AlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5 mr-3 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-yellow-800 mb-1">Cash Flow Alert</h4>
                <p className="text-sm text-yellow-700 mb-2">{mockFinancialHealth.alerts[0].message}</p>
                <p className="text-sm text-yellow-600">{mockFinancialHealth.alerts[0].action}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
