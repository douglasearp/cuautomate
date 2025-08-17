## **Project Structure**

receivables/  
├── components/  
│   ├── Layout/  
│   │   ├── Sidebar.tsx  
│   │   └── Header.tsx  
│   ├── Customers/  
│   │   ├── CustomerList.tsx  
│   │   ├── CustomerForm.tsx  
│   │   └── CustomerDetails.tsx  
│   ├── Invoices/  
│   │   ├── InvoiceList.tsx  
│   │   ├── InvoiceForm.tsx  
│   │   └── InvoiceDetails.tsx  
│   ├── Payments/  
│   │   ├── PaymentList.tsx  
│   │   └── PaymentDetails.tsx  
│   └── Reports/  
│       └── ReportGenerator.tsx  
├── pages/  
│   ├── receivables/  
│   │   ├── index.tsx  
│   │   ├── customers/  
│   │   │   ├── index.tsx  
│   │   │   ├── \[id\].tsx  
│   │   │   └── new.tsx  
│   │   ├── invoices/  
│   │   │   ├── index.tsx  
│   │   │   ├── \[id\].tsx  
│   │   │   └── new.tsx  
│   │   └── payments/  
│   │       └── index.tsx  
│   └── api/  
│       └── receivables/  
├── types/  
│   └── receivables.ts  
└── styles/

    └── receivables.module.css

## **Type Definitions**

### **`types/receivables.ts`**

typescript  
export interface Customer {  
  id: string;  
  companyName: string;  
  companyAddress: {  
    street: string;  
    city: string;  
    state: string;  
    zipCode: string;  
    country: string;  
  };  
  contacts: {  
    primary: Contact;  
    billing?: Contact;  
    accounts?: Contact;  
  };  
  website?: string;  
  taxId: string;  
  industry: string;  
  establishedDate?: Date;  
  creditLimit: number;  
  paymentTerms: string;  
  status: 'Active' | 'Inactive' | 'Suspended';  
  createdAt: Date;  
  updatedAt: Date;  
  notes?: string;  
}

export interface Contact {  
  name: string;  
  title?: string;  
  email: string;  
  phone: string;  
  mobile?: string;  
}

export interface Invoice {  
  id: string;  
  invoiceNumber: string;  
  customerId: string;  
  customer?: Customer;  
  issueDate: Date;  
  dueDate: Date;  
  subtotal: number;  
  taxAmount: number;  
  discountAmount: number;  
  totalAmount: number;  
  status: 'Draft' | 'Sent' | 'Viewed' | 'Partial' | 'Paid' | 'Overdue' | 'Cancelled';  
  paymentTerms: string;  
  description?: string;  
  lineItems: InvoiceLineItem\[\];  
  payments: Payment\[\];  
  createdAt: Date;  
  updatedAt: Date;  
  sentAt?: Date;  
  viewedAt?: Date;  
}

export interface InvoiceLineItem {  
  id: string;  
  description: string;  
  type: 'Product' | 'Service';  
  quantity: number;  
  unitPrice: number;  
  discount: number;  
  taxRate: number;  
  total: number;  
}

export interface Payment {  
  id: string;  
  invoiceId: string;  
  invoice?: Invoice;  
  amount: number;  
  paymentDate: Date;  
  paymentMethod: 'Wire' | 'ACH' | 'Check' | 'Credit Card' | 'Cash';  
  referenceNumber?: string;  
  status: 'Pending' | 'Cleared' | 'Failed' | 'Cancelled';  
  discountApplied: number;  
  notes?: string;  
  createdAt: Date;  
  processedAt?: Date;  
}

export interface ReportFilter {  
  startDate?: Date;  
  endDate?: Date;  
  customerId?: string;  
  status?: string\[\];  
  amountRange?: {  
    min: number;  
    max: number;  
  };  
  paymentTerms?: string\[\];

}

## **Layout Components Structure**

### **`components/Layout/Sidebar.tsx`**

Features:  
\- Navigation menu with icons (Dashboard, Customers, Invoices, Payments In)  
\- Active state highlighting  
\- PE Firm branding  
\- Uses: Users, FileText, CreditCard, BarChart3, Building2 icons from lucide-react

\- Router integration for active states

### **`components/Layout/Header.tsx`**

Features:  
\- Title and subtitle display  
\- Search functionality  
\- Notification bell with badge  
\- Settings button  
\- User profile section

\- Uses: Bell, Search, Settings, User icons from lucide-react

## **Customer Management Structure**

### **`pages/receivables/customers/index.tsx`**

Features:  
\- Customer grid cards layout  
\- Search and filter functionality (by name, email, status)  
\- Export to CSV functionality  
\- Status badges (Active, Inactive, Suspended)  
\- Contact information display (email, phone, website)  
\- Credit limit and payment terms  
\- Add new customer button

\- Professional card design with company icons

### **`components/Customers/CustomerForm.tsx`**

Fields Required:  
\- Company Information:  
  \* Company Name (required)  
  \* Industry dropdown  
  \* Website URL  
  \* Tax ID  
  \* Established Date  
  \* Status (Active/Inactive/Suspended)  
\- Address Information:  
  \* Street Address  
  \* City, State, ZIP  
  \* Country dropdown  
\- Contact Information:  
  \* Primary Contact (Name, Title, Email, Phone, Mobile)  
  \* Billing Contact (optional)  
  \* Accounts Payable Contact (optional)  
\- Financial Information:  
  \* Credit Limit  
  \* Payment Terms dropdown (Net 15, Net 30, Net 45, Net 60\)

\- Notes section (optional)

### **`pages/receivables/customers/[id].tsx`**

Features:  
\- Customer detail view  
\- Contact information tabs  
\- Invoice history for customer  
\- Payment history  
\- Edit customer button  
\- Activity timeline

\- Outstanding balance summary

## **Invoice Management Structure**

### **`pages/receivables/invoices/index.tsx`**

Features:  
\- Summary cards (Total Outstanding, Overdue, Paid This Month, Due This Week)  
\- Invoice table with columns:  
  \* Invoice Number (clickable)  
  \* Customer Name  
  \* Issue Date  
  \* Due Date (with overdue indicators)  
  \* Amount  
  \* Status badges with icons  
  \* Actions menu  
\- Search and filter functionality  
\- Status-based filtering  
\- Export functionality  
\- Create new invoice button

\- Days overdue calculation and display

### **`components/Invoices/InvoiceForm.tsx`**

Fields Required:  
\- Invoice Header:  
  \* Customer selection dropdown  
  \* Invoice Number (auto-generated)  
  \* Issue Date  
  \* Due Date  
  \* Payment Terms  
  \* Description  
\- Line Items (dynamic array):  
  \* Description  
  \* Type (Product/Service)  
  \* Quantity  
  \* Unit Price  
  \* Discount %  
  \* Tax Rate  
  \* Line Total (calculated)  
\- Calculations:  
  \* Subtotal  
  \* Tax Amount  
  \* Discount Amount  
  \* Total Amount

\- Actions: Save as Draft, Send Invoice

### **`pages/receivables/invoices/[id].tsx`**

Features:  
\- Invoice preview (similar to bill.com design)  
\- PDF download functionality  
\- Send invoice via email  
\- Payment tracking section  
\- Payment history  
\- Invoice status updates  
\- Resend functionality

\- Edit invoice (if draft)

## **Payments Management Structure**

### **`pages/receivables/payments/index.tsx`**

Features:  
\- Summary cards (Total Received, Pending, Failed, This Month)  
\- Payment table with columns:  
  \* Payment Details (Reference Number, ID)  
  \* Invoice Number (linked)  
  \* Amount (with discount indicators)  
  \* Payment Method (with icons)  
  \* Payment Date / Processed Date  
  \* Status badges with icons  
  \* Notes  
\- Multi-filter functionality:  
  \* Search by reference number/notes  
  \* Status filter (Pending, Cleared, Failed, Cancelled)  
  \* Payment method filter  
  \* Date range filter  
\- Export functionality

\- Status-based color coding

### **`components/Payments/PaymentDetails.tsx`**

Features:  
\- Payment information display  
\- Associated invoice details  
\- Payment method details  
\- Processing timeline  
\- Failure reason (if applicable)  
\- Retry payment functionality

\- Notes and reference numbers

## **Dashboard Structure**

### **`pages/receivables/index.tsx`**

Features:  
\- 6 Key metric cards:  
  \* Total Outstanding  
  \* Overdue Amount  
  \* Paid This Month  
  \* Average Days to Payment  
  \* Total Customers  
  \* Active Invoices  
\- Aging Report chart (horizontal bars):  
  \* Current (0-30 days)  
  \* 31-60 days  
  \* 61-90 days  
  \* 90+ days  
\- Payment Methods distribution chart  
\- Recent Invoices table  
\- Upcoming Payments list

\- Visual indicators and color coding

## **Reports Structure**

### **`components/Reports/ReportGenerator.tsx`**

Report Types:  
1\. Aging Report  
   \- Filters: Date range, Customer, Amount range  
   \- Export: PDF, Excel, CSV  
2\. Customer Report  
   \- Filters: Status, Industry, Credit limit range  
   \- Export: PDF, Excel, CSV  
3\. Invoice Report  
   \- Filters: Date range, Status, Customer, Amount range  
   \- Export: PDF, Excel, CSV  
4\. Payment Report  
   \- Filters: Date range, Payment method, Status  
   \- Export: PDF, Excel, CSV  
5\. Collections Report  
   \- Overdue invoices  
   \- Collection actions needed  
   \- Customer payment history

Features:  
\- Advanced filtering options  
\- Date range selectors  
\- Multiple export formats  
\- Scheduled report generation

\- Email delivery options

## **API Structure**

### **`pages/api/receivables/customers/index.ts`**

Endpoints:  
\- GET /api/receivables/customers \- List customers with filtering  
\- POST /api/receivables/customers \- Create new customer  
\- PUT /api/receivables/customers/\[id\] \- Update customer

\- DELETE /api/receivables/customers/\[id\] \- Delete customer

### **`pages/api/receivables/invoices/index.ts`**

Endpoints:  
\- GET /api/receivables/invoices \- List invoices with filtering  
\- POST /api/receivables/invoices \- Create new invoice  
\- PUT /api/receivables/invoices/\[id\] \- Update invoice  
\- DELETE /api/receivables/invoices/\[id\] \- Delete invoice  
\- POST /api/receivables/invoices/\[id\]/send \- Send invoice

\- GET /api/receivables/invoices/\[id\]/pdf \- Generate PDF

### **`pages/api/receivables/payments/index.ts`**

Endpoints:  
\- GET /api/receivables/payments \- List payments with filtering  
\- POST /api/receivables/payments \- Record new payment  
\- PUT /api/receivables/payments/\[id\] \- Update payment

\- POST /api/receivables/payments/\[id\]/process \- Process payment

## **Styling Structure**

### **`styles/receivables.module.css`**

Components:  
\- .dashboardCard \- Metric card styling  
\- .statusBadge \- Status indicator styling  
\- .tableRow \- Table row hover effects  
\- .filterBar \- Filter section styling  
\- .exportButton \- Export button styling  
\- .actionMenu \- Dropdown menu styling  
\- .invoicePreview \- Invoice preview layout  
\- .paymentStatus \- Payment status indicators  
\- Responsive breakpoints

\- Print-friendly styles for invoices

## **Additional Features to Implement**

### **Security & Permissions**

\- Role-based access control  
\- User authentication  
\- Data encryption  
\- Audit logging

\- Permission levels (View, Edit, Admin)

### **Integrations**

\- Email service integration (SendGrid, SES)  
\- Payment processor integration (Stripe, PayPal)  
\- Accounting software sync (QuickBooks, Xero)  
\- Bank reconciliation

\- Credit check services

### **Advanced Features**

\- Automated collections workflow  
\- Late fee calculations  
\- Payment reminders  
\- Dunning management  
\- Cash flow forecasting  
\- Customer credit scoring  
\- Multi-currency support

\- Recurring invoices

