import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { pageMeta } from "@/lib/seo";

export const meta = () =>
  pageMeta({
    title: "Privacy Policy | NorthOak",
    description: "How NorthOak collects, uses, and protects information about visitors to our website and clients of our operations outsourcing services.",
    path: "/privacy-policy",
  });

const PrivacyPolicy = () => {
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
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Privacy Policy</h1>
          <p className="text-muted-foreground mb-12">Last updated: February 12, {currentYear}</p>

          <div className="space-y-10 text-foreground/90 leading-relaxed">
            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4">1. Introduction</h2>
              <p>NorthOak ("we," "us," or "our") is committed to protecting the privacy of our clients, website visitors, and users. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website at northoak.co or use our staffing services.</p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4">2. Information We Collect</h2>
              <h3 className="text-lg font-medium text-foreground mb-2">Personal Information</h3>
              <p className="mb-3">We may collect personal information that you voluntarily provide to us, including:</p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Name and contact information (email address, phone number)</li>
                <li>Company name and website URL</li>
                <li>Company size and industry</li>
                <li>Information about your staffing needs and service requirements</li>
                <li>Any additional notes or information you choose to provide via our contact forms</li>
              </ul>

              <h3 className="text-lg font-medium text-foreground mb-2">Automatically Collected Information</h3>
              <p className="mb-3">When you visit our website, we may automatically collect certain information, including:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Browser type and version</li>
                <li>Operating system</li>
                <li>IP address</li>
                <li>Pages visited and time spent on our website</li>
                <li>Referring website or source</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4">3. How We Use Your Information</h2>
              <p className="mb-3">We use the information we collect for the following purposes:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>To respond to your inquiries and contact form submissions</li>
                <li>To provide, maintain, and improve our staffing services</li>
                <li>To match you with suitable offshore professionals based on your needs</li>
                <li>To communicate with you about our services, updates, and promotional materials</li>
                <li>To analyze website usage and improve user experience</li>
                <li>To comply with legal obligations and protect our rights</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4">4. Information Sharing and Disclosure</h2>
              <p className="mb-3">We do not sell your personal information. We may share your information in the following circumstances:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Service Providers:</strong> With trusted third-party vendors who assist us in operating our website and delivering our services (e.g., email services, analytics providers).</li>
                <li><strong>Staffing Operations:</strong> With offshore professionals and team members as necessary to fulfill your service requests.</li>
                <li><strong>Legal Requirements:</strong> When required by law, regulation, or legal process.</li>
                <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4">5. Data Security</h2>
              <p>We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.</p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4">6. Cookies and Tracking Technologies</h2>
              <p>Our website may use cookies and similar tracking technologies to enhance your browsing experience and analyze site traffic. You can control cookie preferences through your browser settings. Disabling cookies may affect your experience on our website.</p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4">7. Third-Party Links</h2>
              <p>Our website may contain links to third-party websites, such as scheduling platforms (e.g., Calendly). We are not responsible for the privacy practices or content of these external sites. We encourage you to review their privacy policies before providing any personal information.</p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4">8. Data Retention</h2>
              <p>We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. When your information is no longer needed, we will securely delete or anonymize it.</p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4">9. Your Rights</h2>
              <p className="mb-3">Depending on your jurisdiction, you may have the following rights regarding your personal information:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>The right to access and receive a copy of your personal data</li>
                <li>The right to correct inaccurate or incomplete information</li>
                <li>The right to request deletion of your personal data</li>
                <li>The right to opt out of marketing communications</li>
                <li>The right to restrict or object to certain processing activities</li>
              </ul>
              <p className="mt-3">To exercise any of these rights, please contact us at <a href="mailto:hello@northoak.co" className="text-sage hover:text-sage-dark underline transition-colors">hello@northoak.co</a>.</p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4">10. Children's Privacy</h2>
              <p>Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have inadvertently collected information from a minor, please contact us immediately.</p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4">11. Changes to This Policy</h2>
              <p>We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated "Last updated" date. We encourage you to review this Privacy Policy periodically to stay informed about how we protect your information.</p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4">12. Contact Us</h2>
              <p>If you have any questions or concerns about this Privacy Policy, please contact us at:</p>
              <p className="mt-2">
                <strong>NorthOak</strong><br />
                Email: <a href="mailto:hello@northoak.co" className="text-sage hover:text-sage-dark underline transition-colors">hello@northoak.co</a>
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
