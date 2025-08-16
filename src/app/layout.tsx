import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PayOnward - AI-Powered Financial Management",
  description: "Transform small business financial operations through AI-powered automation, making cash flow management as simple as checking email.",
  keywords: "financial management, cash flow, AI automation, small business, credit union, payments, invoicing",
  authors: [{ name: "PayOnward" }],
  openGraph: {
    title: "PayOnward - AI-Powered Financial Management",
    description: "Transform small business financial operations through AI-powered automation",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
          <Navigation />
          <main className="lg:pl-64">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
