import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { pageMeta } from "@/lib/seo";

export const meta = () =>
  pageMeta({
    title: "Terms of Service | NorthOak",
    description: "NorthOak's terms of service governing the use of our website and operations outsourcing services.",
    path: "/terms-of-service",
  });

const TermsOfService = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-background relative overflow-x-hidden">
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[20%] -left-[10%] w-[600px] h-[600px] bg-sage/5 rounded-full blur-[120px]" />
        <div className="absolute top-[50%] -right-[15%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px]" />
      </div>
      <Header />
      <main className="relative z-10">
        <section className="container mx-auto px-6 py-24 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Terms of Service</h1>
          <p className="text-muted-foreground mb-12">Last updated: February 12, {currentYear}</p>

          <div className="space-y-10 text-foreground/90 leading-relaxed">
            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4">1. Agreement to Terms</h2>
              <p>By accessing or using the services provided by NorthOak ("we," "us," or "our"), including our website at northoak.co and any related services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.</p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4">2. Description of Services</h2>
              <p>NorthOak provides offshore staffing solutions, including but not limited to CRM management, customer support, HR administration, virtual assistant services, finance & accounting support, and back-office administration. Our services connect businesses with skilled professionals to support their operational needs.</p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4">3. Eligibility</h2>
              <p>You must be at least 18 years old and have the legal authority to enter into a binding agreement to use our services. By using our services, you represent and warrant that you meet these requirements.</p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4">4. Client Obligations</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide accurate and complete information when submitting forms or communicating with NorthOak.</li>
                <li>Comply with all applicable laws and regulations in connection with the use of our services.</li>
                <li>Not use our services for any unlawful, fraudulent, or harmful purpose.</li>
                <li>Maintain the confidentiality of any account credentials or sensitive information shared with NorthOak.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4">5. Service Agreements</h2>
              <p>Specific terms related to staffing engagements, including pricing, scope of work, and duration, will be outlined in a separate service agreement between you and NorthOak. These Terms of Service apply in addition to any such service agreement. In the event of a conflict, the service agreement shall prevail.</p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4">6. Payment Terms</h2>
              <p>Payment terms, including fees, billing cycles, and accepted methods of payment, will be specified in the applicable service agreement. Late payments may be subject to additional fees or service suspension at NorthOak's discretion.</p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4">7. Intellectual Property</h2>
              <p>All content on our website, including text, graphics, logos, and software, is the property of NorthOak and is protected by applicable intellectual property laws. You may not reproduce, distribute, or create derivative works from our content without our prior written consent.</p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4">8. Confidentiality</h2>
              <p>Both parties agree to keep confidential any proprietary or sensitive information disclosed during the course of the business relationship. This obligation survives the termination of any service agreement.</p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4">9. Limitation of Liability</h2>
              <p>To the fullest extent permitted by law, NorthOak shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from or related to the use of our services. Our total liability shall not exceed the amounts paid by you for the services in the twelve (12) months preceding the claim.</p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4">10. Disclaimer of Warranties</h2>
              <p>Our services are provided on an "as is" and "as available" basis. NorthOak makes no warranties, express or implied, regarding the quality, reliability, or suitability of the services for any particular purpose.</p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4">11. Termination</h2>
              <p>Either party may terminate the service relationship in accordance with the terms specified in the applicable service agreement. NorthOak reserves the right to suspend or terminate access to its website or services at any time for violations of these Terms of Service.</p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4">12. Governing Law</h2>
              <p>These Terms of Service shall be governed by and construed in accordance with the laws of the United States. Any disputes arising under these terms shall be resolved in the courts of competent jurisdiction.</p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4">13. Changes to Terms</h2>
              <p>NorthOak reserves the right to update or modify these Terms of Service at any time. Changes will be effective upon posting to our website. Your continued use of our services after any modifications constitutes acceptance of the updated terms.</p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4">14. Contact Us</h2>
              <p>If you have any questions about these Terms of Service, please contact us at:</p>
              <p className="mt-2">
                <strong>NorthOak</strong><br />
                Email: <a href="mailto:info@northoak.co" className="text-sage hover:text-sage-dark underline transition-colors">info@northoak.co</a>
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default TermsOfService;
