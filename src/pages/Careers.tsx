import { motion } from "framer-motion";
import {
  ArrowRight,
  Users,
  MessageCircle,
  Layers,
  Compass,
  Zap,
  RefreshCw,
  Lightbulb,
  Globe,
  Calendar,
  Heart,
  Laptop,
  Building,
  Mail,
  Target,
  Trophy,
  DollarSign,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import ClientLogosCarousel from "@/components/ClientLogosCarousel";
import { pageMeta } from "@/lib/seo";

export const meta = () =>
  pageMeta({
    title: "Careers | NorthOak",
    description:
      "Join NorthOak as an operations specialist. Remote-friendly roles in customer support, finance, CRM administration, HR, virtual assistance, and back-office operations.",
    path: "/careers",
  });

const coreValues = [
  {
    icon: Heart,
    title: "Building an awesome place to work",
    description:
      "We prioritize creating an environment where every team member can thrive, grow, and do their best work.",
    priority: 1,
  },
  {
    icon: Target,
    title: "Creating value for clients",
    description:
      "We're obsessed with delivering exceptional results that transform how our clients operate.",
    priority: 2,
  },
  {
    icon: DollarSign,
    title: "Making lots of money",
    description:
      "We believe in being honest about our goals. When we succeed, everyone on the team benefits.",
    priority: 3,
  },
];

const whoWeAre = [
  {
    icon: Users,
    title: "Team First",
    description: "We put team goals ahead of our own",
  },
  {
    icon: MessageCircle,
    title: "Radical Candor",
    description: "We care personally while challenging directly",
  },
  {
    icon: Layers,
    title: "Flat Hierarchy",
    description: "No titles. Just great teammates collaborating",
  },
];

const howWeWork = [
  {
    icon: Compass,
    title: "Autonomy & Freedom",
    description: "Work when, where, and how you want",
  },
  {
    icon: Zap,
    title: "High Performance",
    description: "Move fast, execute accurately, create impact",
  },
  {
    icon: RefreshCw,
    title: "Kaizen",
    description: "Continuously strive for improvements",
  },
  {
    icon: Lightbulb,
    title: "KISS",
    description: "Keep it simple, always",
  },
];

const benefits = [
  {
    icon: Compass,
    title: "Full Autonomy",
    description:
      "Complete control over when, where, and how you work. No micromanagement, just trust.",
  },
  {
    icon: Calendar,
    title: "Generous PTO",
    description:
      "Up to four weeks of paid time off annually, prorated in your first year.",
  },
  {
    icon: Heart,
    title: "Unlimited Sick Leave",
    description:
      "Take care of yourself. Sick days don't count against your PTO.",
  },
  {
    icon: Globe,
    title: "Remote-First",
    description:
      "Work from anywhere in the world with asynchronous communication.",
  },
  {
    icon: Laptop,
    title: "Modern Tools",
    description:
      "Slack, Notion, Asana, Google Workspace - we use the best tools to get things done.",
  },
  {
    icon: Building,
    title: "No Bureaucracy",
    description:
      "Flat structure means no red tape. Just great teammates solving problems together.",
  },
];

const Careers = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-background pt-4 pb-8 overflow-hidden">
        <div className="mx-auto px-3 md:px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative mx-auto rounded-3xl md:rounded-[2.5rem] border border-sage/25 overflow-hidden"
            style={{
              background:
                "linear-gradient(180deg, hsl(102 35% 92%) 0%, hsl(102 25% 94%) 40%, hsl(102 20% 95%) 100%)",
              boxShadow:
                "0 4px 40px -12px hsl(var(--sage) / 0.2), inset 0 1px 0 0 hsl(var(--sage) / 0.15)",
            }}
          >
            {/* Background orbs */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div
                className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full blur-3xl"
                style={{
                  background:
                    "radial-gradient(circle, hsl(102 44% 51% / 0.3) 0%, transparent 70%)",
                }}
              />
              <div
                className="absolute -bottom-48 -left-32 w-[700px] h-[700px] rounded-full blur-3xl"
                style={{
                  background:
                    "radial-gradient(circle, hsl(102 40% 55% / 0.25) 0%, transparent 70%)",
                }}
              />
            </div>

            <div className="relative z-10 px-6 md:px-12 lg:px-20 pt-32 md:pt-40 pb-16 md:pb-24">
              <div className="max-w-4xl mx-auto text-center">
                {/* Badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.1, duration: 0.5 }}
                  className="inline-flex items-center gap-2 bg-sage/10 border border-sage/20 rounded-full px-4 py-1.5 mb-6"
                >
                  <Trophy className="w-4 h-4 text-sage" />
                  <span className="text-sage font-medium text-sm">
                    We're Hiring
                  </span>
                </motion.div>

                {/* Title */}
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-foreground"
                >
                  Join a High-Performance,
                  <br />
                  <span className="text-sage">People-First</span> Team
                </motion.h1>

                {/* Description */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12"
                >
                  We're a boutique consulting agency that values autonomy,
                  excellence, and building something great together. If you
                  thrive in fast-paced environments and want to make real
                  impact, we want to hear from you.
                </motion.p>

                {/* CTA Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="flex justify-center"
                >
                  <a
                    href="https://apply.workable.com/northoak/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center bg-sage hover:bg-sage-dark transition-colors duration-200 rounded-full overflow-hidden"
                  >
                    <span className="px-6 py-3 text-white font-medium">
                      View Open Positions
                    </span>
                    <span className="flex items-center justify-center w-10 h-10 m-1.5 bg-white rounded-full">
                      <ArrowRight className="w-4 h-4 text-sage" />
                    </span>
                  </a>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About NorthOak Section */}
      <section className="py-20 px-6 md:px-10 bg-background">
        <div className="max-w-4xl mx-auto text-center">
          <motion.span
            initial={{ }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sage font-medium text-sm tracking-wide uppercase mb-4 block"
          >
            About NorthOak
          </motion.span>
          <motion.h2
            initial={{ y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6"
          >
            Operational Expertise, Delivered
          </motion.h2>
          <motion.p
            initial={{ y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground leading-relaxed"
          >
            NorthOak is a boutique consulting agency focused on operational
            expertise and efficiency. We operate with a customer-first
            philosophy and ownership mentality, delivering valuable solutions
            across marketing, support, sales, HR, and finance. Our team is
            global, diverse, and united by a shared commitment to excellence.
          </motion.p>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-8 bg-background">
        <div className="mx-auto px-3 md:px-4">
          <motion.div
            initial={{ y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative rounded-3xl md:rounded-[2.5rem] border border-sage/25 overflow-hidden"
            style={{
              background:
                "linear-gradient(180deg, hsl(102 35% 92%) 0%, hsl(102 25% 94%) 40%, hsl(102 20% 95%) 100%)",
              boxShadow:
                "0 4px 40px -12px hsl(var(--sage) / 0.2), inset 0 1px 0 0 hsl(var(--sage) / 0.15)",
            }}
          >
            {/* Background orbs */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div
                className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full blur-3xl"
                style={{
                  background:
                    "radial-gradient(circle, hsl(102 44% 51% / 0.25) 0%, transparent 70%)",
                }}
              />
              <div
                className="absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full blur-3xl"
                style={{
                  background:
                    "radial-gradient(circle, hsl(102 40% 55% / 0.2) 0%, transparent 70%)",
                }}
              />
            </div>

            <div className="relative z-10 py-16 md:py-20 px-6 md:px-12 lg:px-20">
              <div className="max-w-6xl mx-auto">
                <motion.div
                  initial={{ y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-center mb-12"
                >
                  <span className="text-sage font-medium text-sm tracking-wide uppercase mb-4 block">
                    What Drives Us
                  </span>
                  <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                    Our Core Values
                  </h2>
                  <p className="text-muted-foreground max-w-2xl mx-auto">
                    In order of priority, these are the principles that guide every
                    decision we make.
                  </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-6">
                  {coreValues.map((value, index) => (
                    <motion.div
                      key={value.title}
                      initial={{ y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <Card className="h-full bg-white/80 backdrop-blur-sm border-white/50 hover:shadow-lg transition-shadow relative overflow-hidden">
                        <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-sage/10 flex items-center justify-center">
                          <span className="text-sage font-bold text-sm">
                            {value.priority}
                          </span>
                        </div>
                        <CardContent className="p-6 pt-8">
                          <div className="w-12 h-12 rounded-xl bg-sage/10 flex items-center justify-center mb-4">
                            <value.icon className="w-6 h-6 text-sage" />
                          </div>
                          <h3 className="text-lg font-semibold text-foreground mb-2">
                            {value.title}
                          </h3>
                          <p className="text-muted-foreground text-sm">
                            {value.description}
                          </p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Culture & Principles Section */}
      <section className="py-20 px-6 md:px-10 bg-background">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-sage font-medium text-sm tracking-wide uppercase mb-4 block">
              Our Culture
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              How We Operate
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Who We Are */}
            <motion.div
              initial={{ x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="font-display text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                <span className="w-10 h-10 rounded-lg bg-sage/10 flex items-center justify-center">
                  <Users className="w-5 h-5 text-sage" />
                </span>
                Who We Are
              </h3>
              <div className="space-y-4">
                {whoWeAre.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-4 p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors"
                  >
                    <div className="w-10 h-10 rounded-lg bg-sage/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-sage" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">
                        {item.title}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* How We Work */}
            <motion.div
              initial={{ x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="font-display text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                <span className="w-10 h-10 rounded-lg bg-sage/10 flex items-center justify-center">
                  <Zap className="w-5 h-5 text-sage" />
                </span>
                How We Work
              </h3>
              <div className="space-y-4">
                {howWeWork.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-4 p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors"
                  >
                    <div className="w-10 h-10 rounded-lg bg-sage/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-sage" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">
                        {item.title}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-8 bg-background">
        <div className="mx-auto px-3 md:px-4">
          <motion.div
            initial={{ y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative rounded-3xl md:rounded-[2.5rem] border border-sage/25 overflow-hidden"
            style={{
              background:
                "linear-gradient(180deg, hsl(102 35% 92%) 0%, hsl(102 25% 94%) 40%, hsl(102 20% 95%) 100%)",
              boxShadow:
                "0 4px 40px -12px hsl(var(--sage) / 0.2), inset 0 1px 0 0 hsl(var(--sage) / 0.15)",
            }}
          >
            {/* Background orbs */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div
                className="absolute -top-24 -left-24 w-[400px] h-[400px] rounded-full blur-3xl"
                style={{
                  background:
                    "radial-gradient(circle, hsl(102 44% 51% / 0.2) 0%, transparent 70%)",
                }}
              />
              <div
                className="absolute -bottom-24 -right-24 w-[450px] h-[450px] rounded-full blur-3xl"
                style={{
                  background:
                    "radial-gradient(circle, hsl(102 40% 55% / 0.18) 0%, transparent 70%)",
                }}
              />
            </div>

            <div className="relative z-10 py-16 md:py-20 px-6 md:px-12 lg:px-20">
              <div className="max-w-6xl mx-auto">
                <motion.div
                  initial={{ y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-center mb-12"
                >
                  <span className="text-sage font-medium text-sm tracking-wide uppercase mb-4 block">
                    Benefits & Perks
                  </span>
                  <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                    What We Offer
                  </h2>
                  <p className="text-muted-foreground max-w-2xl mx-auto">
                    We believe in treating our team like the professionals they are.
                    Here's what you can expect.
                  </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {benefits.map((benefit, index) => (
                    <motion.div
                      key={benefit.title}
                      initial={{ y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.08 }}
                    >
                      <Card className="h-full bg-white/80 backdrop-blur-sm border-white/50 hover:shadow-lg transition-shadow">
                        <CardContent className="p-6">
                          <div className="w-12 h-12 rounded-xl bg-sage/10 flex items-center justify-center mb-4">
                            <benefit.icon className="w-6 h-6 text-sage" />
                          </div>
                          <h3 className="text-lg font-semibold text-foreground mb-2">
                            {benefit.title}
                          </h3>
                          <p className="text-muted-foreground text-sm">
                            {benefit.description}
                          </p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Clients Section */}
      <section className="py-20 px-6 md:px-10 bg-background overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <span className="text-sage font-medium text-sm tracking-wide uppercase mb-4 block">
              Our Clients
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Work with Innovative Companies
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We partner with leading companies across e-commerce, fintech,
              education, and tech. Join us to work on diverse, exciting
              projects.
            </p>
          </motion.div>

          <ClientLogosCarousel />
        </div>
      </section>

      {/* Open Positions Section */}
      <section
        id="open-positions"
        className="py-8 bg-background scroll-mt-24"
      >
        <div className="mx-auto px-3 md:px-4">
          <motion.div
            initial={{ y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative rounded-3xl md:rounded-[2.5rem] border border-sage/25 overflow-hidden"
            style={{
              background:
                "linear-gradient(180deg, hsl(102 35% 92%) 0%, hsl(102 25% 94%) 40%, hsl(102 20% 95%) 100%)",
              boxShadow:
                "0 4px 40px -12px hsl(var(--sage) / 0.2), inset 0 1px 0 0 hsl(var(--sage) / 0.15)",
            }}
          >
            {/* Background orbs */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-3xl"
                style={{
                  background:
                    "radial-gradient(circle, hsl(102 44% 51% / 0.15) 0%, transparent 70%)",
                }}
              />
            </div>

            <div className="relative z-10 py-16 md:py-20 px-6 md:px-12 lg:px-20">
              <div className="max-w-4xl mx-auto">
                <motion.div
                  initial={{ y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-center mb-12"
                >
                  <span className="text-sage font-medium text-sm tracking-wide uppercase mb-4 block">
                    Open Positions
                  </span>
                  <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                    Ready to Join?
                  </h2>
                  <p className="text-muted-foreground max-w-2xl mx-auto">
                    We're always looking for exceptional people who share our values.
                    Check out our current openings or reach out if you think you'd be
                    a great fit.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="bg-white/80 backdrop-blur-sm border border-white/50 rounded-2xl p-8 text-center"
                >
                  <div className="w-16 h-16 rounded-2xl bg-sage/10 flex items-center justify-center mx-auto mb-6">
                    <Users className="w-8 h-8 text-sage" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground mb-3">
                    View Current Openings
                  </h3>
                  <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                    Browse our open positions on Workable and find your next
                    opportunity with NorthOak.
                  </p>
                  <a
                    href="https://apply.workable.com/northoak/?lng=en"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-sage hover:bg-sage-dark transition-colors duration-200 rounded-full px-6 py-3 text-white font-medium"
                  >
                    View All Positions
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 md:px-10 bg-background">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative rounded-3xl md:rounded-[2.5rem] border border-sage/25 overflow-hidden p-8 md:p-12 lg:p-16 text-center"
            style={{
              background:
                "linear-gradient(180deg, hsl(102 35% 92%) 0%, hsl(102 25% 94%) 40%, hsl(102 20% 95%) 100%)",
              boxShadow:
                "0 4px 40px -12px hsl(var(--sage) / 0.2), inset 0 1px 0 0 hsl(var(--sage) / 0.15)",
            }}
          >
            {/* Background orbs */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div
                className="absolute -top-24 -right-24 w-[400px] h-[400px] rounded-full blur-3xl"
                style={{
                  background:
                    "radial-gradient(circle, hsl(102 44% 51% / 0.2) 0%, transparent 70%)",
                }}
              />
              <div
                className="absolute -bottom-24 -left-24 w-[400px] h-[400px] rounded-full blur-3xl"
                style={{
                  background:
                    "radial-gradient(circle, hsl(102 40% 55% / 0.18) 0%, transparent 70%)",
                }}
              />
            </div>

            <div className="relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-sage/10 flex items-center justify-center mx-auto mb-6">
                <Mail className="w-7 h-7 text-sage" />
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Don't See a Perfect Fit?
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto mb-8">
                We're always interested in connecting with talented individuals.
                If you're passionate about operational excellence and want to
                join a team that values autonomy and performance, reach out to
                us.
              </p>
              <a
                href="mailto:careers@northoak.co"
                className="inline-flex items-center gap-2 bg-sage hover:bg-sage-dark transition-colors duration-200 rounded-full px-6 py-3 text-white font-medium"
              >
                <Mail className="w-4 h-4" />
                careers@northoak.co
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Careers;
