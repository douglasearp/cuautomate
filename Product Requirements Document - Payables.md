# Payables Module - Project Specification

## Overview
The Payables module manages all aspects of accounts payable, from vendor management to bill processing and payment execution. This module streamlines the procure-to-pay process for small businesses with automated workflows, approval hierarchies, and comprehensive payment tracking.

## Project Structure

```
src/
├── features/
│   └── payables/
│       ├── components/
│       │   ├── vendors/
│       │   │   ├── VendorList.tsx
│       │   │   ├── VendorForm.tsx
│       │   │   ├── VendorDetail.tsx
│       │   │   ├── VendorImport.tsx
│       │   │   └── VendorPaymentMethods.tsx
│       │   ├── approvals/
│       │   │   ├── ApprovalQueue.tsx
│       │   │   ├── ApprovalWorkflow.tsx
│       │   │   ├── ApprovalHistory.tsx
│       │   │   └── ApprovalRules.tsx
│       │   ├── bills/
│       │   │   ├── BillList.tsx
│       │   │   ├── BillForm.tsx
│       │   │   ├── BillDetail.tsx
│       │   │   ├── BillUpload.tsx
│       │   │   ├── BillScanner.tsx
│       │   │   └── BillRecurring.tsx
│       │   └── payments/
│       │       ├── PaymentBatch.tsx
│       │       ├── PaymentHistory.tsx
│       │       ├── PaymentMethods.tsx
│       │       ├── PaymentScheduler.tsx
│       │       └── PaymentReconciliation.tsx
│       ├── hooks/
│       │   ├── useVendors.ts
│       │   ├── useApprovals.ts
│       │   ├── useBills.ts
│       │   └── usePayments.ts
│       ├── services/
│       │   ├── vendorService.ts
│       │   ├── approvalService.ts
│       │   ├── billService.ts
│       │   └── paymentService.ts
│       ├── types/
│       │   └── payables.ts
│       └── utils/
│           ├── payableCalculations.ts
│           ├── approvalLogic.ts
│           └── paymentValidation.ts
```

## Navigation Structure

```typescript
const payablesNavigation = {
  main: 'Payables',
  subItems: [
    {
      key: 'vendors',
      label: 'Vendors',
      icon: 'Users',
      path: '/payables/vendors'
    },
    {
      key: 'approvals',
      label: 'Approvals',
      icon: 'CheckCircle',
      path: '/payables/approvals',
      badge: 'pending_count'
    },
    {
      key: 'bills',
      label: 'Bills',
      icon: 'FileText',
      path: '/payables/bills'
    },
    {
      key: 'payments',
      label: 'Payments Out',
      icon: 'CreditCard',
      path: '/payables/payments'
    }
  ]
}
```

## Type Definitions

```typescript
// Core Payables Types
export interface Vendor {
  id: string;
  vendorNumber: string;
  companyName: string;
  contactName?: string;
  email?: string;
  phone?: string;
  website?: string;
  address: Address;
  taxId?: string;
  paymentTerms: PaymentTerms;
  preferredPaymentMethod: PaymentMethod;
  accountNumber?: string;
  routingNumber?: string;
  isActive: boolean;
  tags: string[];
  notes?: string;
  createdAt: Date;
  updatedAt: Date;
  totalOwed: number;
  creditLimit?: number;
  currency: string;
}

export interface Bill {
  id: string;
  billNumber: string;
  vendorId: string;
  vendor: Vendor;
  invoiceNumber?: string;
  poNumber?: string;
  billDate: Date;
  dueDate: Date;
  subtotal: number;
  taxAmount: number;
  totalAmount: number;
  amountPaid: number;
  amountDue: number;
  status: BillStatus;
  approvalStatus: ApprovalStatus;
  paymentStatus: PaymentStatus;
  description?: string;
  lineItems: BillLineItem[];
  attachments: Attachment[];
  glAccounts: GLAccount[];
  approvalHistory: ApprovalAction[];
  paymentHistory: PaymentRecord[];
  recurringSchedule?: RecurringSchedule;
  createdAt: Date;
  updatedAt: Date;
  createdBy: string;
  lastModifiedBy: string;
}

export interface BillLineItem {
  id: string;
  description: string;
  quantity: number;
  unitPrice: number;
  amount: number;
  glAccountId: string;
  projectId?: string;
  departmentId?: string;
  taxable: boolean;
  taxAmount?: number;
}

export interface ApprovalWorkflow {
  id: string;
  name: string;
  description?: string;
  isActive: boolean;
  rules: ApprovalRule[];
  steps: ApprovalStep[];
  createdAt: Date;
  updatedAt: Date;
}

export interface ApprovalRule {
  id: string;
  condition: ApprovalCondition;
  operator: ComparisonOperator;
  value: string | number;
  logicOperator?: LogicOperator;
}

export interface ApprovalStep {
  id: string;
  stepNumber: number;
  approverType: ApproverType;
  approvers: string[];
  requiredApprovals: number;
  isParallel: boolean;
  timeoutHours?: number;
  escalationApprovers?: string[];
}

export interface ApprovalAction {
  id: string;
  billId: string;
  stepId: string;
  approverId: string;
  approverName: string;
  action: ApprovalActionType;
  comments?: string;
  timestamp: Date;
  ipAddress?: string;
}

export interface PaymentBatch {
  id: string;
  batchNumber: string;
  paymentDate: Date;
  paymentMethod: PaymentMethod;
  bankAccountId: string;
  totalAmount: number;
  billCount: number;
  status: PaymentBatchStatus;
  bills: string[];
  paymentRecords: PaymentRecord[];
  createdAt: Date;
  createdBy: string;
  processedAt?: Date;
  processedBy?: string;
}

export interface PaymentRecord {
  id: string;
  billId: string;
  batchId?: string;
  paymentMethod: PaymentMethod;
  amount: number;
  paymentDate: Date;
  referenceNumber?: string;
  bankAccountId: string;
  status: PaymentStatus;
  failureReason?: string;
  reconciledAt?: Date;
  reconciledBy?: string;
  createdAt: Date;
  createdBy: string;
}

// Enums and Status Types
export enum BillStatus {
  DRAFT = 'draft',
  PENDING_APPROVAL = 'pending_approval',
  APPROVED = 'approved',
  REJECTED = 'rejected',
  SCHEDULED = 'scheduled',
  PAID = 'paid',
  PARTIALLY_PAID = 'partially_paid',
  OVERDUE = 'overdue',
  CANCELLED = 'cancelled'
}

export enum ApprovalStatus {
  NOT_REQUIRED = 'not_required',
  PENDING = 'pending',
  IN_PROGRESS = 'in_progress',
  APPROVED = 'approved',
  REJECTED = 'rejected',
  ESCALATED = 'escalated',
  EXPIRED = 'expired'
}

export enum PaymentStatus {
  PENDING = 'pending',
  SCHEDULED = 'scheduled',
  PROCESSING = 'processing',
  COMPLETED = 'completed',
  FAILED = 'failed',
  CANCELLED = 'cancelled',
  RECONCILED = 'reconciled'
}

export enum PaymentMethod {
  CHECK = 'check',
  ACH = 'ach',
  WIRE = 'wire',
  CREDIT_CARD = 'credit_card',
  CASH = 'cash',
  OTHER = 'other'
}

export enum ApprovalActionType {
  APPROVED = 'approved',
  REJECTED = 'rejected',
  DELEGATED = 'delegated',
  ESCALATED = 'escalated'
}

export enum ApprovalCondition {
  AMOUNT_GREATER_THAN = 'amount_greater_than',
  AMOUNT_LESS_THAN = 'amount_less_than',
  VENDOR_ID = 'vendor_id',
  GL_ACCOUNT = 'gl_account',
  DEPARTMENT = 'department',
  PROJECT = 'project'
}

export enum ComparisonOperator {
  EQUALS = 'equals',
  NOT_EQUALS = 'not_equals',
  GREATER_THAN = 'greater_than',
  LESS_THAN = 'less_than',
  CONTAINS = 'contains'
}

export enum ApproverType {
  USER = 'user',
  ROLE = 'role',
  MANAGER = 'manager',
  DEPARTMENT_HEAD = 'department_head'
}

export enum PaymentBatchStatus {
  DRAFT = 'draft',
  READY = 'ready',
  PROCESSING = 'processing',
  COMPLETED = 'completed',
  FAILED = 'failed',
  PARTIALLY_COMPLETED = 'partially_completed'
}

// Supporting Types
export interface PaymentTerms {
  termType: 'net' | 'eom' | 'discount';
  days: number;
  discountDays?: number;
  discountPercentage?: number;
}

export interface RecurringSchedule {
  frequency: 'weekly' | 'monthly' | 'quarterly' | 'annually';
  interval: number;
  startDate: Date;
  endDate?: Date;
  nextDueDate: Date;
  isActive: boolean;
}

export interface Address {
  street1: string;
  street2?: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
}

export interface Attachment {
  id: string;
  fileName: string;
  fileSize: number;
  mimeType: string;
  url: string;
  uploadedAt: Date;
  uploadedBy: string;
}

// API Response Types
export interface VendorsResponse {
  vendors: Vendor[];
  totalCount: number;
  pageInfo: PageInfo;
}

export interface BillsResponse {
  bills: Bill[];
  totalCount: number;
  summary: {
    totalOutstanding: number;
    overdueAmount: number;
    dueThisWeek: number;
    dueNextWeek: number;
  };
  pageInfo: PageInfo;
}

export interface ApprovalQueueResponse {
  pendingApprovals: ApprovalQueueItem[];
  totalCount: number;
  myPendingCount: number;
  pageInfo: PageInfo;
}

export interface ApprovalQueueItem {
  billId: string;
  bill: Bill;
  stepId: string;
  stepName: string;
  submittedAt: Date;
  submittedBy: string;
  urgency: 'low' | 'medium' | 'high';
  daysWaiting: number;
}

export interface PaymentBatchResponse {
  batches: PaymentBatch[];
  totalCount: number;
  summary: {
    totalScheduled: number;
    totalProcessing: number;
    totalCompleted: number;
  };
  pageInfo: PageInfo;
}

// Filter and Search Types
export interface VendorFilters {
  search?: string;
  status?: 'active' | 'inactive';
  paymentMethod?: PaymentMethod;
  tags?: string[];
  sortBy?: 'name' | 'totalOwed' | 'createdAt';
  sortOrder?: 'asc' | 'desc';
}

export interface BillFilters {
  search?: string;
  vendorId?: string;
  status?: BillStatus[];
  approvalStatus?: ApprovalStatus[];
  paymentStatus?: PaymentStatus[];
  dueDateRange?: DateRange;
  amountRange?: NumberRange;
  tags?: string[];
  glAccountId?: string;
  sortBy?: 'dueDate' | 'amount' | 'createdAt';
  sortOrder?: 'asc' | 'desc';
}

export interface PaymentFilters {
  search?: string;
  paymentMethod?: PaymentMethod[];
  status?: PaymentStatus[];
  dateRange?: DateRange;
  amountRange?: NumberRange;
  bankAccountId?: string;
  sortBy?: 'paymentDate' | 'amount' | 'createdAt';
  sortOrder?: 'asc' | 'desc';
}

export interface DateRange {
  startDate: Date;
  endDate: Date;
}

export interface NumberRange {
  min?: number;
  max?: number;
}

export interface PageInfo {
  page: number;
  pageSize: number;
  totalPages: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
}

// Form Types
export interface VendorFormData {
  companyName: string;
  contactName?: string;
  email?: string;
  phone?: string;
  website?: string;
  address: Address;
  taxId?: string;
  paymentTerms: PaymentTerms;
  preferredPaymentMethod: PaymentMethod;
  accountNumber?: string;
  routingNumber?: string;
  creditLimit?: number;
  tags: string[];
  notes?: string;
}

export interface BillFormData {
  vendorId: string;
  invoiceNumber?: string;
  poNumber?: string;
  billDate: Date;
  dueDate: Date;
  description?: string;
  lineItems: BillLineItemFormData[];
  taxAmount: number;
  attachments?: File[];
  recurringSchedule?: RecurringScheduleFormData;
}

export interface BillLineItemFormData {
  description: string;
  quantity: number;
  unitPrice: number;
  glAccountId: string;
  projectId?: string;
  departmentId?: string;
  taxable: boolean;
}

export interface RecurringScheduleFormData {
  frequency: 'weekly' | 'monthly' | 'quarterly' | 'annually';
  interval: number;
  startDate: Date;
  endDate?: Date;
}

export interface PaymentBatchFormData {
  paymentDate: Date;
  paymentMethod: PaymentMethod;
  bankAccountId: string;
  billIds: string[];
}

// Dashboard and Analytics Types
export interface PayablesDashboard {
  summary: PayablesSummary;
  recentActivity: PayablesActivity[];
  upcomingPayments: UpcomingPayment[];
  approvalQueue: ApprovalQueueSummary;
  vendorSpending: VendorSpending[];
  cashFlowProjection: CashFlowItem[];
}

export interface PayablesSummary {
  totalOutstanding: number;
  overdueAmount: number;
  dueThisWeek: number;
  dueNextWeek: number;
  averagePaymentDays: number;
  activeVendors: number;
  pendingApprovals: number;
}

export interface PayablesActivity {
  id: string;
  type: 'bill_created' | 'bill_approved' | 'payment_made' | 'vendor_added';
  description: string;
  amount?: number;
  timestamp: Date;
  userId: string;
  userName: string;
}

export interface UpcomingPayment {
  billId: string;
  vendorName: string;
  amount: number;
  dueDate: Date;
  daysUntilDue: number;
  isOverdue: boolean;
}

export interface ApprovalQueueSummary {
  totalPending: number;
  myPending: number;
  escalated: number;
  averageWaitTime: number;
}

export interface VendorSpending {
  vendorId: string;
  vendorName: string;
  totalSpent: number;
  billCount: number;
  averageBillAmount: number;
}

export interface CashFlowItem {
  date: Date;
  scheduledPayments: number;
  projectedPayments: number;
}
```

## Feature Specifications

### 1. Vendors Module
- **Vendor Management**: Create, edit, and manage vendor profiles with complete contact and payment information
- **Payment Methods**: Support for multiple payment methods (ACH, Check, Wire, Credit Card)
- **Vendor Portal**: Optional vendor self-service portal for invoice submission
- **Vendor Analytics**: Spending analysis, payment history, and performance metrics
- **Bulk Import**: CSV/Excel import functionality for vendor data migration
- **1099 Management**: Track 1099-eligible vendors and generate year-end reports

### 2. Approvals Module
- **Workflow Engine**: Configurable approval workflows based on amount thresholds, GL accounts, vendors, or departments
- **Multi-step Approvals**: Sequential and parallel approval processes
- **Delegation**: Temporary approval delegation during absences
- **Mobile Approvals**: Mobile-optimized approval interface for on-the-go approvals
- **Escalation Rules**: Automatic escalation for overdue approvals
- **Audit Trail**: Complete approval history with timestamps and IP tracking

### 3. Bills Module
- **Bill Entry**: Manual bill entry with line-item detail and GL account coding
- **OCR Scanning**: Automatic data extraction from uploaded bill images/PDFs
- **Bill Matching**: Three-way matching with POs and receipts
- **Recurring Bills**: Automated recurring bill creation and processing
- **Bill Approval**: Integration with approval workflows
- **Document Management**: Attachment handling and document storage

### 4. Payments Out Module
- **Batch Payments**: Group multiple bills for efficient payment processing
- **Payment Scheduling**: Schedule payments for optimal cash flow management
- **Multiple Payment Methods**: Support for checks, ACH, wire transfers, and credit cards
- **Bank Integration**: Direct integration with banking systems for payment execution
- **Payment Tracking**: Real-time payment status and delivery confirmation
- **Reconciliation**: Automated matching of payments with bank transactions

## Integration Points

### Banking Integration
```typescript
interface BankingIntegration {
  connectBank: (credentials: BankCredentials) => Promise<BankConnection>;
  syncTransactions: (accountId: string, fromDate: Date) => Promise<Transaction[]>;
  initiateACH: (payment: ACHPayment) => Promise<PaymentResult>;
  initiateWire: (payment: WirePayment) => Promise<PaymentResult>;
  printCheck: (checkData: CheckData) => Promise<PrintResult>;
}
```

### Accounting Integration
```typescript
interface AccountingIntegration {
  syncGLAccounts: () => Promise<GLAccount[]>;
  createJournalEntry: (entry: JournalEntry) => Promise<string>;
  syncVendors: () => Promise<Vendor[]>;
  postPayableEntries: (bills: Bill[]) => Promise<PostingResult>;
}
```

## Security Considerations

- **Role-based Access Control**: Granular permissions for vendors, bills, approvals, and payments
- **Segregation of Duties**: Enforce separation between bill entry, approval, and payment execution
- **Audit Logging**: Comprehensive audit trail for all payables activities
- **Data Encryption**: Encrypt sensitive vendor and payment information
- **PCI Compliance**: Ensure payment card industry compliance for credit card payments
- **Bank-level Security**: Implement bank-grade security for payment processing

## Performance Considerations

- **Pagination**: Implement server-side pagination for large datasets
- **Caching**: Cache frequently accessed vendor and GL account data
- **Batch Processing**: Optimize bulk operations for bill imports and payments
- **Real-time Updates**: WebSocket integration for real-time approval notifications
- **Mobile Optimization**: Responsive design with mobile-first approach
- **Offline Capability**: Support for offline bill entry and approval on mobile devices

## Reporting and Analytics

- **Aged Payables Report**: Track outstanding bills by aging periods
- **Vendor Spending Analysis**: Analyze spending patterns by vendor, department, and GL account
- **Cash Flow Forecasting**: Project future cash needs based on bill due dates
- **Payment Performance**: Track payment timing and take advantage of early payment discounts
- **Approval Metrics**: Monitor approval bottlenecks and processing times
- **1099 Reporting**: Generate year-end 1099 forms for eligible vendors

