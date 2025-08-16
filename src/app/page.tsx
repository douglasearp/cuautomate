import Link from 'next/link';
import { ArrowRight, Shield, Zap, TrendingUp, Users, CreditCard, BarChart3, Brain } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden gradient-bg text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                Transform Your
                <span className="block text-[#38bdf8]">Financial Operations</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
                AI-powered automation that makes cash flow management as simple as checking email. 
                Position your credit union as the definitive SMB fintech partner.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link href="/dashboard" className="btn-accent text-lg px-8 py-4">
                  Start Free Trial
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <button className="bg-white/20 hover:bg-white/30 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-200 backdrop-blur-sm">
                  Watch Demo
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 animate-bounce-slow">
                          <div className="w-4 h-4 bg-[#38bdf8] rounded-full opacity-60"></div>
        </div>
        <div className="absolute top-40 right-20 animate-pulse-slow">
          <div className="w-6 h-6 bg-white rounded-full opacity-40"></div>
        </div>
        <div className="absolute bottom-20 left-1/4 animate-bounce-slow" style={{ animationDelay: '1s' }}>
                          <div className="w-3 h-3 bg-[#38bdf8] rounded-full opacity-50"></div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <p className="text-gray-600 text-lg">Trusted by leading credit unions and small businesses</p>
          </div>
                      <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              <div className="flex items-center space-x-2">
                <Shield className="h-6 w-6 text-[#0ea5e9]" />
                <span className="font-semibold text-gray-700">FDIC Insured</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="h-6 w-6 text-[#0ea5e9]" />
                <span className="font-semibold text-gray-700">SOC 2 Type II</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="h-6 w-6 text-[#0ea5e9]" />
                <span className="font-semibold text-gray-700">PCI DSS Level 1</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="h-6 w-6 text-[#0ea5e9]" />
                <span className="font-semibold text-gray-700">ISO 27001</span>
              </div>
            </div>
        </div>
      </section>

      {/* Feature Showcase */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
              AI-First Financial Intelligence
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Predictive analytics, autonomous optimization, and contextual communications 
              that transform how you manage your business finances.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="card-hover animate-slide-up">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-[#0ea5e9]/10 rounded-lg">
                  <Brain className="h-8 w-8 text-[#0ea5e9]" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Predictive Cash Flow</h3>
              <p className="text-gray-600 mb-4">
                95% accuracy in cash flow predictions with AI-powered analytics and real-time insights.
              </p>
                              <div className="flex items-center text-[#0ea5e9] font-semibold">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </div>
            </div>

            {/* Feature 2 */}
            <div className="card-hover animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <div className="flex items-center mb-4">
                <div className="p-3 bg-[#14b8a6]/10 rounded-lg">
                  <Zap className="h-8 w-8 text-[#14b8a6]" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Autonomous Payments</h3>
              <p className="text-gray-600 mb-4">
                Smart payment routing and optimization that captures discounts and improves cash flow.
              </p>
                              <div className="flex items-center text-[#14b8a6] font-semibold">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </div>
            </div>

            {/* Feature 3 */}
            <div className="card-hover animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="flex items-center mb-4">
                <div className="p-3 bg-[#38bdf8]/10 rounded-lg">
                  <Users className="h-8 w-8 text-[#38bdf8]" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Relationship Intelligence</h3>
              <p className="text-gray-600 mb-4">
                Contextual communications that preserve relationships while optimizing collections.
              </p>
                              <div className="flex items-center text-[#38bdf8] font-semibold">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </div>
            </div>

            {/* Feature 4 */}
            <div className="card-hover animate-slide-up" style={{ animationDelay: '0.3s' }}>
              <div className="flex items-center mb-4">
                <div className="p-3 bg-[#14b8a6]/10 rounded-lg">
                  <CreditCard className="h-8 w-8 text-[#14b8a6]" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Multi-Rail Payments</h3>
              <p className="text-gray-600 mb-4">
                FedNow integration with real-time settlement and intelligent payment method selection.
              </p>
                              <div className="flex items-center text-[#14b8a6] font-semibold">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </div>
            </div>

            {/* Feature 5 */}
            <div className="card-hover animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <div className="flex items-center mb-4">
                <div className="p-3 bg-[#3B82F6]/10 rounded-lg">
                  <BarChart3 className="h-8 w-8 text-[#3B82F6]" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Advanced Analytics</h3>
              <p className="text-gray-600 mb-4">
                Deep insights into payment patterns, customer behavior, and financial health scoring.
              </p>
              <div className="flex items-center text-[#3B82F6] font-semibold">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </div>
            </div>

            {/* Feature 6 */}
            <div className="card-hover animate-slide-up" style={{ animationDelay: '0.5s' }}>
              <div className="flex items-center mb-4">
                <div className="p-3 bg-[#F59E0B]/10 rounded-lg">
                  <TrendingUp className="h-8 w-8 text-[#F59E0B]" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Growth Optimization</h3>
              <p className="text-gray-600 mb-4">
                Proactive recommendations that improve cash flow and accelerate business growth.
              </p>
              <div className="flex items-center text-[#F59E0B] font-semibold">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Propositions */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in">
              <h2 className="text-4xl font-bold text-gradient mb-6">
                Get Paid 25% Faster
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                AI-powered reminders that preserve relationships while dramatically improving your collection rates.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[#14b8a6] rounded-full"></div>
                  <span className="text-gray-700">30% reduction in Days Sales Outstanding</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[#14b8a6] rounded-full"></div>
                  <span className="text-gray-700">80% less manual work</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[#14b8a6] rounded-full"></div>
                  <span className="text-gray-700">95% customer satisfaction</span>
                </div>
              </div>
            </div>
            <div className="relative">
                              <div className="card bg-gradient-to-br from-[#0ea5e9] to-[#14b8a6] text-white p-8">
                <h3 className="text-2xl font-bold mb-4">Instant Cash Flow Control</h3>
                <p className="mb-6">Real-time payments with FedNow integration for same-day settlement.</p>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Payment Success Rate</span>
                    <span className="font-bold">99.9%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Settlement Time</span>
                    <span className="font-bold">Same Day</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Processing Cost</span>
                    <span className="font-bold">$0.045</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-bg text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Financial Operations?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of businesses already using PayOnward to optimize their cash flow and accelerate growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/dashboard" className="btn-accent text-lg px-8 py-4">
              Start Your Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <button className="bg-white/20 hover:bg-white/30 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-200 backdrop-blur-sm">
              Schedule a Demo
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
