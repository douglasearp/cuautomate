'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { 
  Building2, 
  Users, 
  FileText, 
  CreditCard, 
  CheckCircle2,
  ChevronDown,
  ChevronRight
} from 'lucide-react';
import { useState } from 'react';

interface PayablesLayoutProps {
  children: React.ReactNode;
}

const payablesNavigation = [
  { name: 'Dashboard', href: '/payables', icon: Building2 },
  { name: 'Vendor Management', href: '/payables/vendors', icon: Users },
  { name: 'Biller Directory', href: '/payables/biller-directory', icon: FileText },
  { name: 'Bills', href: '/payables/bills', icon: FileText },
  { name: 'Approvals', href: '/payables/approvals', icon: CheckCircle2 },
  { name: 'Outgoing Payments', href: '/payables/payments', icon: CreditCard },
];

export default function PayablesLayout({ children }: PayablesLayoutProps) {
  const pathname = usePathname();
  const [isExpanded, setIsExpanded] = useState(true);

  const isPayablesActive = pathname.startsWith('/payables');

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sub-navigation for Payables */}
      {isPayablesActive && (
        <div className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-8">
                <div className="flex items-center space-x-2 py-4">
                  <Building2 className="h-5 w-5 text-[#0ea5e9]" />
                  <span className="font-semibold text-gray-900">Payables</span>
                  <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="ml-2 p-1 rounded hover:bg-gray-100"
                  >
                    {isExpanded ? (
                      <ChevronDown className="h-4 w-4 text-gray-500" />
                    ) : (
                      <ChevronRight className="h-4 w-4 text-gray-500" />
                    )}
                  </button>
                </div>
                
                {isExpanded && (
                  <nav className="flex space-x-8">
                    {payablesNavigation.map((item) => {
                      const isActive = pathname === item.href;
                      return (
                        <Link
                          key={item.name}
                          href={item.href}
                          className={`flex items-center space-x-2 py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                            isActive
                              ? 'border-[#0ea5e9] text-[#0ea5e9]'
                              : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                          }`}
                        >
                          <item.icon className="h-4 w-4" />
                          <span>{item.name}</span>
                        </Link>
                      );
                    })}
                  </nav>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Main content */}
      <main className="lg:pl-64">
        {children}
      </main>
    </div>
  );
}
