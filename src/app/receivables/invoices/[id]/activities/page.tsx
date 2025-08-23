'use client';

import { useState } from 'react';
import { 
  Brain, 
  TrendingUp, 
  Clock, 
  Phone, 
  Mail, 
  MessageSquare, 
  Calendar, 
  DollarSign, 
  CheckCircle, 
  AlertTriangle, 
  Users, 
  BarChart3, 
  ArrowRight,
  Eye,
  Send,
  FileText,
  CreditCard,
  Zap,
  Target,
  PieChart,
  LineChart,
  Activity,
  Star,
  Award,
  Lightbulb,
  Shield,
  TrendingDown,
  Plus,
  MoreHorizontal,
  ChevronRight,
  ChevronDown,
  ExternalLink,
  Download,
  Share2,
  Settings,
  RefreshCw,
  Play,
  Pause,
  SkipForward,
  SkipBack,
  Volume2,
  Mic,
  MicOff,
  Video,
  VideoOff,
  Smile,
  Frown,
  Meh,
  ThumbsUp,
  ThumbsDown,
  Heart,
  MessageCircle,
  PhoneCall,
  Voicemail,
  Headphones,
  Speaker,
  VolumeX,
  Volume1,
  Volume3,
  Bell,
  BellOff,
  BellRing,
  Search,
  Filter,
  SortAsc,
  SortDesc,
  Grid,
  List,
  Columns,
  Rows,
  Maximize,
  Minimize,
  Fullscreen,
  FullscreenExit,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  RotateCw,
  Move,
  Crop,
  Scissors,
  Type,
  Bold,
  Italic,
  Underline,
  Strikethrough,
  AlignLeft,
  AlignCenter,
  AlignRight,
  AlignJustify,
  Indent,
  Outdent,
  ListOrdered,
  ListUnordered,
  Quote,
  Code,
  Link,
  Unlink,
  Image,
  Video as VideoIcon,
  Music,
  File,
  Folder,
  FolderOpen,
  FolderPlus,
  FolderMinus,
  FolderX,
  FilePlus,
  FileMinus,
  FileX,
  FileText as FileTextIcon,
  FileImage,
  FileVideo,
  FileAudio,
  FileArchive,
  FileCode,
  FileSpreadsheet,
  FilePresentation,
  FilePdf,
  FileWord,
  FileExcel,
  FilePowerpoint,
  FileZip,
  FileCss,
  FileHtml,
  FileJs,
  FileTs,
  FileJson,
  FileXml,
  FileYaml,
  FileMarkdown,
  FileDatabase,
  FileLock,
  FileUnlock,
  FileCheck,
  FileX as FileXIcon,
  FileSearch,
  FileEdit,
  FileCopy,
  FileMove,
  FileDownload,
  FileUpload,
  FileHeart,
  FileStar,
  FileClock,
  FileCalendar,
  FileUser,
  FileUsers,
  FileSettings,
  FileInfo,
  FileWarning,
  FileAlert,
  FileShield,
  FileKey,
  FileKeyhole,
  FileCertificate,
  FileBadge,
  FileBadgeCheck,
  FileBadgeX,
  FileBadgeAlert,
  FileBadgeWarning,
  FileBadgeInfo,
  FileBadgePlus,
  FileBadgeMinus,
  FileBadgeClock,
  FileBadgeCheck as FileBadgeCheckIcon,
  FileBadgeX as FileBadgeXIcon,
  FileBadgeAlert as FileBadgeAlertIcon,
  FileBadgeWarning as FileBadgeWarningIcon,
  FileBadgeInfo as FileBadgeInfoIcon,
  FileBadgePlus as FileBadgePlusIcon,
  FileBadgeMinus as FileBadgeMinusIcon,
  FileBadgeClock as FileBadgeClockIcon
} from 'lucide-react';

interface InvoiceActivity {
  id: string;
  type: 'invoice_created' | 'email_sent' | 'reminder_sent' | 'call_made' | 'payment_received' | 'discount_offered' | 'meeting_scheduled' | 'ai_recommendation';
  title: string;
  description: string;
  timestamp: string;
  duration?: string;
  contact?: string;
  outcome?: string;
  sentiment?: 'positive' | 'neutral' | 'negative';
  aiInsights?: string;
  attachments?: string[];
  status: 'completed' | 'pending' | 'failed';
}

interface AIRecommendation {
  strategy: string;
  confidence: number;
  reasoning: string;
  expectedOutcome: string;
  riskLevel: 'low' | 'medium' | 'high';
  timeline: string;
}

interface CustomerProfile {
  name: string;
  company: string;
  role: string;
  email: string;
  phone: string;
  paymentStyle: string;
  preferredContact: string;
  decisionTimeframe: string;
  discountSensitivity: string;
  riskScore: number;
  relationshipScore: number;
}

export default function InvoiceActivitiesPage({ params }: { params: { id: string } }) {
  const [selectedActivity, setSelectedActivity] = useState<string | null>(null);
  const [showAIRecommendations, setShowAIRecommendations] = useState(true);
  const [activeTab, setActiveTab] = useState('timeline');

  // Mock data for the invoice activities
  const invoiceId = params.id;
  const invoiceData = {
    id: invoiceId,
    number: 'INV-2048',
    customer: 'Acme Corporation',
    amount: 4200.00,
    dueDate: '2025-08-15',
    status: 'overdue',
    daysOverdue: 8,
    contact: {
      name: 'Jane Rodriguez',
      role: 'CFO',
      email: 'jane@acme.co',
      phone: '(555) 123-4567'
    },
    service: 'Enterprise SaaS Subscription (Q3 2025)',
    paymentHistory: '4.2/5 stars • Usually pays within 35 days',
    tags: ['High-Value Client', 'Discount Eligible', 'AI-Assisted']
  };

  const customerProfile: CustomerProfile = {
    name: 'Jane Rodriguez',
    company: 'Acme Corporation',
    role: 'CFO',
    email: 'jane@acme.co',
    phone: '(555) 123-4567',
    paymentStyle: 'Negotiator-Delayer',
    preferredContact: 'Phone calls (72% response rate)',
    decisionTimeframe: '3-5 business days',
    discountSensitivity: 'Moderate (5-10% effective range)',
    riskScore: 13,
    relationshipScore: 4.8
  };

  const aiRecommendations: AIRecommendation[] = [
    {
      strategy: 'Multi-touch + Discount',
      confidence: 94,
      reasoning: 'Customer shows good faith negotiation, 5% discount maintains 87% profit margin',
      expectedOutcome: 'Payment within 48h if discount approved',
      riskLevel: 'low',
      timeline: 'Next 3 days'
    }
  ];

  const activities: InvoiceActivity[] = [
    {
      id: '1',
      type: 'invoice_created',
      title: 'Invoice Generation',
      description: 'Auto-created via billing system',
      timestamp: '2025-07-15T09:24:00Z',
      status: 'completed',
      aiInsights: 'Customer typically pays 5-7 days late'
    },
    {
      id: '2',
      type: 'email_sent',
      title: 'Smart Email Delivery',
      description: 'Q3 Service Invoice - Acme Corp (INV-2048)',
      timestamp: '2025-07-16T08:00:00Z',
      status: 'completed',
      aiInsights: 'Opened 3 times, payment link clicked once - standard behavior'
    },
    {
      id: '3',
      type: 'reminder_sent',
      title: 'Intelligent Reminder',
      description: 'SMS to CFO personal line',
      timestamp: '2025-08-01T10:15:00Z',
      status: 'completed',
      aiInsights: 'Well-received, read receipt positive'
    },
    {
      id: '4',
      type: 'call_made',
      title: 'Strategic Outreach Call',
      description: 'James Liu → Jane Rodriguez (8m 32s)',
      timestamp: '2025-08-20T14:47:00Z',
      duration: '8m 32s',
      contact: 'Jane Rodriguez, CFO',
      outcome: 'Constructive conversation, requested 5% discount',
      sentiment: 'positive',
      status: 'completed',
      aiInsights: 'Professional, cooperative tone. Genuine desire to pay with terms.'
    },
    {
      id: '5',
      type: 'ai_recommendation',
      title: 'AI Recommendation Engine',
      description: 'Approve 5% discount ($210 reduction)',
      timestamp: '2025-08-20T15:15:00Z',
      status: 'completed',
      aiInsights: 'Confidence: 94%. Success probability: 91%'
    },
    {
      id: '6',
      type: 'payment_received',
      title: 'Payment Success',
      description: '$3,990.00 via ACH Transfer',
      timestamp: '2025-08-22T13:47:00Z',
      status: 'completed',
      aiInsights: 'Prediction accuracy: 96%. Strategy effectiveness: 94%'
    }
  ];

  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'invoice_created': return <FileText className="h-4 w-4" />;
      case 'email_sent': return <Mail className="h-4 w-4" />;
      case 'reminder_sent': return <Bell className="h-4 w-4" />;
      case 'call_made': return <Phone className="h-4 w-4" />;
      case 'payment_received': return <CreditCard className="h-4 w-4" />;
      case 'discount_offered': return <DollarSign className="h-4 w-4" />;
      case 'meeting_scheduled': return <Calendar className="h-4 w-4" />;
      case 'ai_recommendation': return <Brain className="h-4 w-4" />;
      default: return <Activity className="h-4 w-4" />;
    }
  };

  const getActivityColor = (type: string) => {
    switch (type) {
      case 'payment_received': return 'text-green-600 bg-green-100';
      case 'call_made': return 'text-blue-600 bg-blue-100';
      case 'ai_recommendation': return 'text-purple-600 bg-purple-100';
      case 'discount_offered': return 'text-orange-600 bg-orange-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getSentimentIcon = (sentiment?: string) => {
    switch (sentiment) {
      case 'positive': return <Smile className="h-4 w-4 text-green-600" />;
      case 'negative': return <Frown className="h-4 w-4 text-red-600" />;
      default: return <Meh className="h-4 w-4 text-yellow-600" />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      {/* Page Header */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center space-x-3">
                <ArrowRight className="h-5 w-5 text-gray-400" />
                <h1 className="text-2xl font-bold text-gray-900">Invoice Activity Center</h1>
              </div>
              <p className="text-gray-600 mt-1">Advanced Customer Engagement & AI-Driven Collections</p>
            </div>
            <div className="flex items-center space-x-3">
              <button className="btn-secondary">
                <Download className="h-4 w-4 mr-2" />
                Export
              </button>
              <button className="btn-primary">
                <Plus className="h-4 w-4 mr-2" />
                Add Activity
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Quick Intelligence Dashboard */}
            <div className="card">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-bold text-gray-900">Quick Intelligence Dashboard</h2>
                <Brain className="h-5 w-5 text-[#0ea5e9]" />
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {/* Payment Prediction */}
                <div className="bg-gradient-to-br from-green-50 to-green-100 p-4 rounded-lg border border-green-200">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-sm font-semibold text-green-800">Payment Prediction</h3>
                    <TrendingUp className="h-4 w-4 text-green-600" />
                  </div>
                  <div className="text-2xl font-bold text-green-900 mb-1">87%</div>
                  <div className="text-xs text-green-700">Likely to Pay • Next 7 days</div>
                  <div className="text-xs text-green-600 mt-2">
                    Risk Score: Low • Engagement: High
                  </div>
                </div>

                {/* AI Recommendation */}
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-4 rounded-lg border border-purple-200">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-sm font-semibold text-purple-800">AI Recommendation</h3>
                    <Brain className="h-4 w-4 text-purple-600" />
                  </div>
                  <div className="text-sm font-bold text-purple-900 mb-1">Multi-touch + Discount</div>
                  <div className="text-xs text-purple-700">Confidence: 94%</div>
                  <div className="text-xs text-purple-600 mt-2">
                    Personal call first • 3-5% discount
                  </div>
                </div>

                {/* Performance Metrics */}
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-lg border border-blue-200">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-sm font-semibold text-blue-800">Performance</h3>
                    <BarChart3 className="h-4 w-4 text-blue-600" />
                  </div>
                  <div className="text-2xl font-bold text-blue-900 mb-1">82%</div>
                  <div className="text-xs text-blue-700">Response Rate • Above average</div>
                  <div className="text-xs text-blue-600 mt-2">
                    Avg. resolution: 12 days
                  </div>
                </div>

                {/* Next Best Action */}
                <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-4 rounded-lg border border-orange-200">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-sm font-semibold text-orange-800">Next Best Action</h3>
                    <Target className="h-4 w-4 text-orange-600" />
                  </div>
                  <div className="text-sm font-bold text-orange-900 mb-1">Call Tomorrow 2-4pm</div>
                  <div className="text-xs text-orange-700">Optimal timing</div>
                  <div className="text-xs text-orange-600 mt-2">
                    CFO availability: High
                  </div>
                </div>
              </div>
            </div>

            {/* Invoice Overview */}
            <div className="card">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-bold text-gray-900">Invoice Overview</h2>
                <FileText className="h-5 w-5 text-[#0ea5e9]" />
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">
                      {invoiceData.number} | {invoiceData.customer}
                    </h3>
                    <p className="text-2xl font-bold text-[#0ea5e9]">
                      ${invoiceData.amount.toLocaleString()} • Net 30 • {invoiceData.daysOverdue} days overdue
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-600">Timeline</div>
                    <div className="text-xs text-gray-500">July 15 → Aug 15 → Aug 23 (Today)</div>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <div className="flex items-center space-x-2 mb-2">
                      <Users className="h-4 w-4 text-gray-500" />
                      <span className="font-medium">Contact:</span>
                      <span>{invoiceData.contact.name}, {invoiceData.contact.role}</span>
                    </div>
                    <div className="flex items-center space-x-2 mb-2">
                      <Mail className="h-4 w-4 text-gray-500" />
                      <span>{invoiceData.contact.email}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Phone className="h-4 w-4 text-gray-500" />
                      <span>{invoiceData.contact.phone}</span>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex items-center space-x-2 mb-2">
                      <FileText className="h-4 w-4 text-gray-500" />
                      <span className="font-medium">Service:</span>
                      <span>{invoiceData.service}</span>
                    </div>
                    <div className="flex items-center space-x-2 mb-2">
                      <RefreshCw className="h-4 w-4 text-gray-500" />
                      <span className="font-medium">Payment History:</span>
                      <span>{invoiceData.paymentHistory}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="font-medium">Tags:</span>
                      <div className="flex space-x-1">
                        {invoiceData.tags.map((tag, index) => (
                          <span key={index} className="px-2 py-1 bg-[#0ea5e9]/10 text-[#0ea5e9] text-xs rounded-full">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Activity Timeline */}
            <div className="card">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-bold text-gray-900">Activity Timeline</h2>
                <Clock className="h-5 w-5 text-[#0ea5e9]" />
              </div>
              
              <div className="space-y-4">
                {activities.map((activity, index) => (
                  <div key={activity.id} className="relative">
                    {index < activities.length - 1 && (
                      <div className="absolute left-6 top-8 w-0.5 h-12 bg-gray-200"></div>
                    )}
                    
                    <div className="flex items-start space-x-4">
                      <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center ${getActivityColor(activity.type)}`}>
                        {getActivityIcon(activity.type)}
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-sm font-semibold text-gray-900">{activity.title}</h3>
                          <div className="flex items-center space-x-2">
                            <span className="text-xs text-gray-500">
                              {new Date(activity.timestamp).toLocaleDateString()} • {new Date(activity.timestamp).toLocaleTimeString()}
                            </span>
                            {activity.duration && (
                              <span className="text-xs text-gray-400">• {activity.duration}</span>
                            )}
                            {activity.sentiment && getSentimentIcon(activity.sentiment)}
                          </div>
                        </div>
                        
                        <p className="text-sm text-gray-600 mb-2">{activity.description}</p>
                        
                        {activity.contact && (
                          <p className="text-xs text-gray-500 mb-2">
                            <span className="font-medium">Contact:</span> {activity.contact}
                          </p>
                        )}
                        
                        {activity.outcome && (
                          <p className="text-xs text-gray-500 mb-2">
                            <span className="font-medium">Outcome:</span> {activity.outcome}
                          </p>
                        )}
                        
                        {activity.aiInsights && (
                          <div className="bg-blue-50 border border-blue-200 rounded p-2">
                            <div className="flex items-center space-x-1 mb-1">
                              <Brain className="h-3 w-3 text-blue-600" />
                              <span className="text-xs font-medium text-blue-800">AI Insights</span>
                            </div>
                            <p className="text-xs text-blue-700">{activity.aiInsights}</p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* AI Intelligence Center */}
            <div className="card">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-gray-900">AI Intelligence Center</h3>
                <Brain className="h-5 w-5 text-[#0ea5e9]" />
              </div>
              
              <div className="space-y-4">
                {aiRecommendations.map((rec, index) => (
                  <div key={index} className="bg-gradient-to-r from-purple-50 to-blue-50 p-4 rounded-lg border border-purple-200">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-purple-900">{rec.strategy}</h4>
                      <span className="text-sm font-bold text-purple-600">{rec.confidence}%</span>
                    </div>
                    <p className="text-sm text-purple-700 mb-2">{rec.reasoning}</p>
                    <div className="text-xs text-purple-600">
                      Expected: {rec.expectedOutcome} • Risk: {rec.riskLevel}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Customer Profile */}
            <div className="card">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-gray-900">Customer Profile</h3>
                <Users className="h-5 w-5 text-[#0ea5e9]" />
              </div>
              
              <div className="space-y-3">
                <div>
                  <div className="text-sm font-medium text-gray-900">{customerProfile.name}</div>
                  <div className="text-xs text-gray-600">{customerProfile.role} at {customerProfile.company}</div>
                </div>
                
                <div className="space-y-2 text-xs">
                  <div><span className="font-medium">Payment Style:</span> {customerProfile.paymentStyle}</div>
                  <div><span className="font-medium">Preferred Contact:</span> {customerProfile.preferredContact}</div>
                  <div><span className="font-medium">Decision Timeframe:</span> {customerProfile.decisionTimeframe}</div>
                  <div><span className="font-medium">Discount Sensitivity:</span> {customerProfile.discountSensitivity}</div>
                </div>
                
                <div className="grid grid-cols-2 gap-2">
                  <div className="text-center p-2 bg-red-50 rounded">
                    <div className="text-sm font-bold text-red-600">{customerProfile.riskScore}%</div>
                    <div className="text-xs text-red-600">Risk Score</div>
                  </div>
                  <div className="text-center p-2 bg-green-50 rounded">
                    <div className="text-sm font-bold text-green-600">{customerProfile.relationshipScore}/5</div>
                    <div className="text-xs text-green-600">Relationship</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Performance Analytics */}
            <div className="card">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-gray-900">Performance Analytics</h3>
                <BarChart3 className="h-5 w-5 text-[#0ea5e9]" />
              </div>
              
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span>Success Rate:</span>
                  <span className="font-semibold text-green-600">96%</span>
                </div>
                <div className="flex justify-between">
                  <span>Collection Period:</span>
                  <span className="font-semibold">7 days</span>
                </div>
                <div className="flex justify-between">
                  <span>Cost to Collect:</span>
                  <span className="font-semibold">$47</span>
                </div>
                <div className="flex justify-between">
                  <span>Customer Satisfaction:</span>
                  <span className="font-semibold text-green-600">4.8/5</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
