import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("pages/Index.tsx"),
  route("get-started", "pages/GetStarted.tsx"),
  route("pricing", "pages/Pricing.tsx"),
  route("careers", "pages/Careers.tsx"),

  route("roles/crm-management", "pages/roles/CRMManagement.tsx"),
  route("roles/customer-support", "pages/roles/CustomerSupport.tsx"),
  route("roles/hr-admin", "pages/roles/HRAdmin.tsx"),
  route("roles/virtual-assistant", "pages/roles/VirtualAssistant.tsx"),
  route("roles/finance-accounting", "pages/roles/FinanceAccounting.tsx"),
  route("roles/back-office-admin", "pages/roles/BackOfficeAdmin.tsx"),

  route("savings-calculator", "pages/SavingsCalculatorPage.tsx"),
  route("terms-of-service", "pages/TermsOfService.tsx"),
  route("privacy-policy", "pages/PrivacyPolicy.tsx"),

  route("*", "pages/NotFound.tsx"),
] satisfies RouteConfig;
