import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("pages/Index.tsx"),
  route("get-started", "pages/GetStarted.tsx"),
  route("pricing", "pages/Pricing.tsx"),
  route("careers", "pages/Careers.tsx"),
  route("how-it-works", "pages/HowItWorks.tsx"),
  route("security", "pages/Security.tsx"),

  // Service category pages
  route("services/sales-gtm", "pages/services/SalesGTM.tsx"),
  route("services/customer-support", "pages/services/CustomerSupport.tsx"),
  route("services/hr-people-ops", "pages/services/HRPeopleOps.tsx"),
  route("services/finance-accounting", "pages/services/FinanceAccounting.tsx"),
  route("services/back-office-admin", "pages/services/BackOfficeAdmin.tsx"),
  route("services/marketing", "pages/services/Marketing.tsx"),

  // Legacy role pages (kept for backwards compatibility)
  route("roles/crm-management", "pages/roles/CRMManagement.tsx"),
  route("roles/customer-support", "pages/roles/CustomerSupport.tsx"),
  route("roles/hr-admin", "pages/roles/HRAdmin.tsx"),
  route("roles/finance-accounting", "pages/roles/FinanceAccounting.tsx"),
  route("roles/back-office-admin", "pages/roles/BackOfficeAdmin.tsx"),

  // Individual role pages — Sales & GTM
  route("roles/sdr", "pages/roles/SDR.tsx"),
  route("roles/crm-manager", "pages/roles/CRMManager.tsx"),
  route("roles/sales-ops-analyst", "pages/roles/SalesOpsAnalyst.tsx"),
  route("roles/lead-generation-specialist", "pages/roles/LeadGenSpecialist.tsx"),
  route("roles/account-executive", "pages/roles/AccountExecutive.tsx"),

  // Individual role pages — Customer Support
  route("roles/customer-support-agent", "pages/roles/CustomerSupportAgent.tsx"),
  route("roles/customer-success-manager", "pages/roles/CustomerSuccessManager.tsx"),
  route("roles/technical-support-specialist", "pages/roles/TechSupportSpecialist.tsx"),
  route("roles/live-chat-specialist", "pages/roles/LiveChatSpecialist.tsx"),

  // Individual role pages — HR & People Ops
  route("roles/hr-coordinator", "pages/roles/HRCoordinator.tsx"),
  route("roles/recruiter", "pages/roles/Recruiter.tsx"),
  route("roles/onboarding-coordinator", "pages/roles/OnboardingCoordinator.tsx"),
  route("roles/people-ops-specialist", "pages/roles/PeopleOpsSpecialist.tsx"),

  // Individual role pages — Finance & Accounting
  route("roles/bookkeeper", "pages/roles/Bookkeeper.tsx"),
  route("roles/accounts-payable-specialist", "pages/roles/AccountsPayableSpecialist.tsx"),
  route("roles/accounts-receivable-specialist", "pages/roles/AccountsReceivableSpecialist.tsx"),
  route("roles/payroll-specialist", "pages/roles/PayrollSpecialist.tsx"),
  route("roles/financial-analyst", "pages/roles/FinancialAnalyst.tsx"),

  // Individual role pages — Back Office Admin
  route("roles/data-entry-specialist", "pages/roles/DataEntrySpecialist.tsx"),
  route("roles/operations-coordinator", "pages/roles/OperationsCoordinator.tsx"),
  route("roles/document-management-specialist", "pages/roles/DocumentManagementSpecialist.tsx"),
  route("roles/order-processing-specialist", "pages/roles/OrderProcessingSpecialist.tsx"),

  // Individual role pages — Executive Assistance
  route("roles/virtual-assistant", "pages/roles/VirtualAssistant.tsx"),
  route("roles/executive-assistant", "pages/roles/ExecutiveAssistant.tsx"),
  route("roles/personal-assistant", "pages/roles/PersonalAssistant.tsx"),
  route("roles/chief-of-staff-associate", "pages/roles/ChiefOfStaffAssociate.tsx"),

  // Individual role pages — Marketing
  route("roles/content-writer", "pages/roles/ContentWriter.tsx"),
  route("roles/social-media-manager", "pages/roles/SocialMediaManager.tsx"),
  route("roles/email-marketing-specialist", "pages/roles/EmailMarketingSpecialist.tsx"),
  route("roles/seo-specialist", "pages/roles/SEOSpecialist.tsx"),
  route("roles/graphic-designer", "pages/roles/GraphicDesigner.tsx"),

  // Comparison pages
  route("vs/upwork-fiverr", "pages/vs/UpworkFiverr.tsx"),
  route("vs/domestic-hire", "pages/vs/DomesticHire.tsx"),
  route("vs/traditional-bpo", "pages/vs/TraditionalBPO.tsx"),

  route("savings-calculator", "pages/SavingsCalculatorPage.tsx"),
  route("terms-of-service", "pages/TermsOfService.tsx"),
  route("privacy-policy", "pages/PrivacyPolicy.tsx"),

  route("*", "pages/NotFound.tsx"),
] satisfies RouteConfig;
