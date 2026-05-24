import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Process from "@/components/Process";
import Testimonial from "@/components/Testimonial";
import Partners from "@/components/Partners";
import SavingsCalculator from "@/components/SavingsCalculator";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-x-hidden">
      {/* Soft background blobs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[20%] -left-[10%] w-[600px] h-[600px] bg-sage/5 rounded-full blur-[120px]" />
        <div className="absolute top-[50%] -right-[15%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px]" />
        <div className="absolute top-[80%] left-[20%] w-[400px] h-[400px] bg-sage/4 rounded-full blur-[100px]" />
        <div className="absolute top-[10%] right-[30%] w-[300px] h-[300px] bg-primary/3 rounded-full blur-[80px]" />
      </div>
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Process />
        <Testimonial />
        <Partners />
        <SavingsCalculator />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
