'use client';

import { useState, useRef, useEffect } from 'react';
import { 
  Mic, 
  MicOff, 
  Send, 
  Brain, 
  Zap, 
  Settings, 
  MessageSquare,
  DollarSign,
  TrendingUp,
  Users,
  CreditCard,
  BarChart3,
  Calendar,
  AlertTriangle,
  CheckCircle,
  Clock,
  ArrowRight,
  Play,
  Pause
} from 'lucide-react';

// Mock data from specifications
const mockConversation = [
  {
    id: '1',
    type: 'user',
    message: 'Show me today\'s cash flow',
    timestamp: '2025-08-16T09:00:00Z'
  },
  {
    id: '2',
    type: 'ai',
    message: 'Your current cash flow is $45,000. You have $12,500 in expected inflows and $8,500 in outflows today. Net flow: +$4,000. Would you like me to show you the detailed breakdown?',
    timestamp: '2025-08-16T09:00:01Z',
    actions: ['View Details', 'Show Forecast', 'Optimize Cash Flow']
  },
  {
    id: '3',
    type: 'user',
    message: 'Send payment reminders to overdue customers',
    timestamp: '2025-08-16T09:05:00Z'
  },
  {
    id: '4',
    type: 'ai',
    message: 'I found 3 overdue invoices totaling $8,500. I\'ll send personalized reminders to:\n• ABC Restaurant Group ($3,500 - 7 days overdue)\n• Tech Startup LLC ($5,000 - 7 days overdue)\n\nBased on their payment history, I recommend a friendly tone for ABC Restaurant and a more direct approach for Tech Startup. Should I proceed?',
    timestamp: '2025-08-16T09:05:01Z',
    actions: ['Send All Reminders', 'Review First', 'Customize Messages']
  }
];

const mockVoiceCommands = [
  {
    phrase: "Hey PayOnward, show me today's cash flow",
    action: 'navigate_cashflow_today',
    confidence: 0.95,
    alternatives: ['Display today\'s financial position', 'Current cash situation']
  },
  {
    phrase: "Send payment reminders to overdue customers",
    action: 'execute_overdue_reminders',
    parameters: { days_overdue: 'any', send_immediately: true },
    confirmation: 'Found 3 overdue invoices. Send reminders now?'
  },
  {
    phrase: "Create invoice for ABC Company",
    action: 'create_invoice',
    parameters: { customer: 'ABC Company' },
    followUp: 'What amount should I include on this invoice?'
  }
];

const mockAutomations = [
  {
    id: 'auto_001',
    name: 'Early Payment Discount Offer',
    description: 'Automatically offer discounts when cash flow is predicted to drop',
    triggers: [
      {
        type: 'cash_flow_prediction',
        condition: 'balance_below_threshold',
        value: 5000.00,
        timeframe: '7_days'
      }
    ],
    actions: [
      {
        type: 'send_discount_offer',
        discount_percentage: 2.5,
        target_customers: 'high_value',
        message_template: 'early_payment_incentive'
      }
    ],
    performance: {
      triggered: 12,
      successful: 9,
      revenue_impact: 15750.00,
      success_rate: 0.75
    }
  },
  {
    id: 'auto_002',
    name: 'Intelligent Payment Reminders',
    description: 'Send personalized reminders based on customer payment patterns',
    triggers: [
      {
        type: 'invoice_status',
        condition: 'days_past_due',
        value: 3
      }
    ],
    conditions: [
      {
        type: 'customer_segment',
        value: 'relationship_priority_high'
      }
    ],
    actions: [
      {
        type: 'send_personalized_reminder',
        tone: 'friendly',
        channel: 'email',
        include_payment_link: true
      }
    ],
    performance: {
      triggered: 8,
      successful: 7,
      revenue_impact: 12500.00,
      success_rate: 0.875
    }
  }
];

const mockAnalytics = {
  models: [
    {
      name: 'Payment Timing Predictor',
      version: '2.1.3',
      accuracy: 0.94,
      lastTrained: '2025-08-10T00:00:00Z',
      dataPoints: 15678,
      status: 'optimal'
    },
    {
      name: 'Customer Risk Scorer',
      version: '1.8.1',
      accuracy: 0.87,
      lastTrained: '2025-08-05T00:00:00Z',
      dataPoints: 8945,
      status: 'needs_retraining'
    }
  ],
  recentPredictions: [
    {
      type: 'payment_timing',
      customer: 'ABC Restaurant Group',
      invoice: 'INV-2025-0815',
      prediction: 'Will pay in 12-15 days',
      confidence: 0.89,
      actual_outcome: 'paid_day_14',
      accuracy: 'correct'
    }
  ]
};

export default function AIAssistantPage() {
  const [messages, setMessages] = useState(mockConversation);
  const [inputMessage, setInputMessage] = useState('');
  const [isListening, setIsListening] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [activeTab, setActiveTab] = useState('chat');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const newMessage = {
      id: Date.now().toString(),
      type: 'user' as const,
      message: inputMessage,
      timestamp: new Date().toISOString()
    };

    setMessages(prev => [...prev, newMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const aiResponse = {
        id: (Date.now() + 1).toString(),
        type: 'ai' as const,
        message: 'I understand you\'re asking about ' + inputMessage + '. Let me help you with that. Based on your current data, I can provide insights and recommendations.',
        timestamp: new Date().toISOString(),
        actions: ['View Details', 'Take Action', 'Learn More']
      };
      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, 2000);
  };

  // Scroll to bottom when new messages are added
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  const handleVoiceToggle = () => {
    setIsListening(!isListening);
    if (!isListening) {
      // Simulate voice recognition
      setTimeout(() => {
        setInputMessage('Show me today\'s cash flow');
        setIsListening(false);
      }, 3000);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      {/* Page Header */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Brain className="h-8 w-8 text-[#2D5016]" />
              <div>
                <h1 className="text-2xl font-bold text-gray-900">AI Assistant</h1>
                <p className="text-gray-600">Your intelligent financial companion</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button className="btn-primary">
                <Settings className="h-4 w-4 mr-2" />
                Settings
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {/* Main Chat Interface */}
          <div className="lg:col-span-2">
            <div className="card h-[500px] lg:h-[600px] flex flex-col lg:sticky lg:top-8">
              {/* Chat Header */}
              <div className="flex items-center justify-between p-4 border-b border-gray-200">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-[#0ea5e9] rounded-full animate-pulse"></div>
                  <span className="font-semibold text-gray-900">AI Assistant</span>
                  <span className="text-sm text-gray-500">Online</span>
                </div>
                <div className="flex items-center space-x-2">
                  <button 
                    onClick={handleVoiceToggle}
                    className={`p-2 rounded-lg transition-colors ${
                      isListening 
                        ? 'bg-red-100 text-red-600' 
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    {isListening ? <MicOff className="h-4 w-4" /> : <Mic className="h-4 w-4" />}
                  </button>
                </div>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4 min-h-0">
                {messages.map((message) => (
                  <div key={message.id} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-[80%] ${message.type === 'user' ? 'order-2' : 'order-1'}`}>
                      <div className={`rounded-lg p-3 ${
                        message.type === 'user' 
                          ? 'bg-[#0ea5e9] text-white' 
                          : 'bg-gray-100 text-gray-900'
                      }`}>
                        <p className="whitespace-pre-wrap">{message.message}</p>
                        {message.actions && (
                          <div className="flex flex-wrap gap-2 mt-3">
                            {message.actions.map((action, index) => (
                              <button
                                key={index}
                                className={`text-xs px-2 py-1 rounded ${
                                  message.type === 'user'
                                    ? 'bg-white/20 text-white hover:bg-white/30'
                                    : 'bg-[#0ea5e9] text-white hover:bg-[#0284c7]'
                                } transition-colors`}
                              >
                                {action}
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                      <div className={`text-xs text-gray-500 mt-1 ${
                        message.type === 'user' ? 'text-right' : 'text-left'
                      }`}>
                        {new Date(message.timestamp).toLocaleTimeString()}
                      </div>
                    </div>
                    {message.type === 'ai' && (
                      <div className="order-2 ml-2">
                        <div className="w-8 h-8 bg-[#0ea5e9] rounded-full flex items-center justify-center">
                          <Brain className="h-4 w-4 text-white" />
                        </div>
                      </div>
                    )}
                  </div>
                ))}
                
                {isTyping && (
                  <div className="flex justify-start">
                    <div className="flex items-center space-x-2 bg-gray-100 rounded-lg p-3">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                      <span className="text-sm text-gray-600">AI is typing...</span>
                    </div>
                  </div>
                )}
                
                <div ref={messagesEndRef} />
              </div>

              {/* Input */}
              <div className="p-4 border-t border-gray-200">
                <div className="flex items-end space-x-2">
                  <div className="flex-1">
                    <textarea
                      value={inputMessage}
                      onChange={(e) => setInputMessage(e.target.value)}
                      onKeyPress={handleKeyPress}
                      placeholder="Ask me anything about your finances..."
                      className="w-full p-3 border border-gray-300 rounded-lg resize-none focus:ring-2 focus:ring-[#0ea5e9] focus:border-transparent"
                      rows={2}
                    />
                  </div>
                  <button
                    onClick={handleSendMessage}
                    disabled={!inputMessage.trim()}
                    className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Send className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6 max-h-screen overflow-y-auto">
            {/* Quick Actions */}
            <div className="card">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Actions</h3>
              <div className="space-y-2">
                {[
                  { icon: DollarSign, label: 'Check Cash Flow', color: 'blue' },
                  { icon: TrendingUp, label: 'View Analytics', color: 'blue' },
                  { icon: Users, label: 'Customer Insights', color: 'purple' },
                  { icon: CreditCard, label: 'Payment Status', color: 'orange' },
                  { icon: BarChart3, label: 'Financial Reports', color: 'indigo' },
                  { icon: Calendar, label: 'Upcoming Due Dates', color: 'red' }
                ].map((action, index) => (
                  <button
                    key={index}
                    className="w-full flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors text-left"
                  >
                    <div className={`p-2 rounded-lg bg-${action.color}-100 text-${action.color}-600`}>
                      <action.icon className="h-4 w-4" />
                    </div>
                    <span className="text-sm font-medium text-gray-700">{action.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Voice Commands */}
            <div className="card">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Voice Commands</h3>
              <div className="space-y-3">
                {mockVoiceCommands.map((command, index) => (
                  <div key={index} className="p-3 bg-gray-50 rounded-lg">
                    <p className="text-sm font-medium text-gray-900 mb-1">"{command.phrase}"</p>
                    <p className="text-xs text-gray-600">{command.confirmation}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Active Automations */}
            <div className="card">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Active Automations</h3>
              <div className="space-y-3">
                {mockAutomations.map((automation) => (
                  <div key={automation.id} className="p-3 border border-gray-200 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-sm font-semibold text-gray-900">{automation.name}</h4>
                      <div className="flex items-center space-x-1">
                        <div className="w-2 h-2 bg-[#0ea5e9] rounded-full"></div>
                        <span className="text-xs text-gray-500">Active</span>
                      </div>
                    </div>
                    <p className="text-xs text-gray-600 mb-2">{automation.description}</p>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-gray-500">
                        {automation.performance.success_rate * 100}% success
                      </span>
                      <span className="text-[#0ea5e9] font-semibold">
                        ${automation.performance.revenue_impact.toLocaleString()}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* AI Performance */}
            <div className="card">
              <h3 className="text-lg font-bold text-gray-900 mb-4">AI Performance</h3>
              <div className="space-y-3">
                {mockAnalytics.models.map((model) => (
                  <div key={model.name} className="p-3 border border-gray-200 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-sm font-semibold text-gray-900">{model.name}</h4>
                      <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                        model.status === 'optimal' ? 'bg-[#0ea5e9]/10 text-[#0ea5e9]' : 'bg-yellow-100 text-yellow-700'
                      }`}>
                        {model.status}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-xs text-gray-600">
                      <span>Accuracy: {model.accuracy * 100}%</span>
                      <span>v{model.version}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
