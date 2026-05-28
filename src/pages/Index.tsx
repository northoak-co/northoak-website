import Header from "@/components/Header";
import Hero from "@/components/Hero";
import LogoCarousel from "@/components/LogoCarousel";
import Services from "@/components/Services";
import RolesHired from "@/components/RolesHired";
import GuaranteeBanner from "@/components/GuaranteeBanner";
import Process from "@/components/Process";
import ClientTestimonials from "@/components/ClientTestimonials";
import HomeFAQ, { faqs } from "@/components/HomeFAQ";
import SavingsCalculator from "@/components/SavingsCalculator";
import Footer from "@/components/Footer";
import { pageMeta, faqSchema } from "@/lib/seo";

export const meta = () => [
  ...pageMeta({
    title: "NorthOak | Operations Outsourcing for High-Growth Teams",
    description:
      "Vetted remote specialists for CRM, customer support, HR admin, virtual assistance, finance, and back-office operations. Starts at $2,000/mo. Guaranteed service.",
    path: "/",
  }),
  faqSchema(faqs),
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-x-hidden">
      {/* Soft background blobs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-[20%] -left-[10%] w-[600px] h-[600px] bg-sage/5 rounded-full blur-[120px]" />
        <div className="absolute top-[50%] -right-[15%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px]" />
        <div className="absolute top-[80%] left-[20%] w-[400px] h-[400px] bg-sage/4 rounded-full blur-[100px]" />
        <div className="absolute top-[10%] right-[30%] w-[300px] h-[300px] bg-primary/3 rounded-full blur-[80px]" />
      </div>
      <Header />
      <main>
        <Hero />
        <LogoCarousel />
        <GuaranteeBanner />
        <Services />
        <RolesHired />
        <Process />
        <ClientTestimonials />
        <SavingsCalculator />
        <HomeFAQ />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
