import { useState } from "react";
import { useNavigate, Link } from "react-router";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, X } from "lucide-react";
import logo from "@/assets/logo.png";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const services = [
  { value: "customer-support", label: "Support" },
  { value: "sales-gtm", label: "Revenue" },
  { value: "marketing", label: "Marketing" },
  { value: "finance-accounting", label: "Finance" },
  { value: "back-office-admin", label: "Back Office" },
];

const timelines = [
  { value: "immediate", label: "Immediately" },
  { value: "next-month", label: "Next month" },
  { value: "within-90", label: "Within 90 days" },
  { value: "discovery", label: "Not sure, I'm in discovery phase" },
];

const teamSizes = [
  { value: "just-1", label: "Just 1" },
  { value: "small-team", label: "Small Team (2-5)" },
  { value: "big-team", label: "Big Team (6-10)" },
  { value: "bigger-team", label: "Bigger Team (10+)" },
];

const journeys = [
  { value: "actively-looking", label: "Actively looking to outsource" },
  { value: "switching", label: "Already outsourcing — looking to switch providers" },
  { value: "adding-capacity", label: "Already outsourcing — looking to add more capacity" },
  { value: "exploring", label: "Just exploring" },
];

type StepKey = "services" | "timeline" | "teamSize" | "journey" | "contact";
const steps: StepKey[] = ["services", "timeline", "teamSize", "journey", "contact"];

const stepCopy: Record<StepKey, { title: string; subtitle?: string }> = {
  services: { title: "What service are you looking for?" },
  timeline: { title: "How soon are you looking to get started?" },
  teamSize: { title: "How many new team members do you need?" },
  journey: { title: "What best describes your journey in outsourcing?" },
  contact: {
    title: "Where can we reach you?",
    subtitle: "We'll be in touch within one business day.",
  },
};

const labelFor = <T extends { value: string; label: string }>(list: T[], value: string) =>
  list.find((o) => o.value === value)?.label ?? value;

const MultiStepIntake = () => {
  const navigate = useNavigate();
  const [stepIdx, setStepIdx] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);

  const [service, setService] = useState("");
  const [timeline, setTimeline] = useState("");
  const [teamSize, setTeamSize] = useState("");
  const [journey, setJourney] = useState("");

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [notes, setNotes] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const step = steps[stepIdx];
  const isLast = stepIdx === steps.length - 1;

  const canSubmit = () => !!email && !!firstName && !!company;

  const goBack = () => {
    if (stepIdx > 0) {
      setDirection(-1);
      setStepIdx(stepIdx - 1);
    }
  };

  // Pick an option and auto-advance to the next step. Short delay so the
  // selected state visibly registers before the transition.
  const pickAndAdvance = (setter: (v: string) => void) => (value: string) => {
    setter(value);
    window.setTimeout(() => {
      setDirection(1);
      setStepIdx((idx) => Math.min(idx + 1, steps.length - 1));
    }, 220);
  };

  const handleSubmit = async () => {
    if (!canSubmit()) return;
    setIsSubmitting(true);
    try {
      const serviceLabel = labelFor(services, service);
      const timelineLabel = labelFor(timelines, timeline);
      const teamSizeLabel = labelFor(teamSizes, teamSize);
      const journeyLabel = labelFor(journeys, journey);

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          company,
          services: [serviceLabel],
          notes,
          firstName,
          lastName,
          phone,
          timeline: timelineLabel,
          teamSize: teamSizeLabel,
          journey: journeyLabel,
        }),
      });

      if (!response.ok) throw new Error(`Request failed: ${response.status}`);

      toast({
        title: "Thank you!",
        description: "Redirecting you to book your call...",
      });

      window.location.href = "https://calendly.com/northoak/25min";
    } catch (err) {
      console.error("Multi-step intake submission error:", err);
      toast({
        title: "Submission failed",
        description: "Please try again, or email hello@northoak.co.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full flex flex-col flex-1">
      {/* Progress + logo + close — full width */}
      <div className="-mx-1.5 md:-mx-5 lg:-mx-11 flex items-center gap-5 mb-20" aria-label={`Step ${stepIdx + 1} of ${steps.length}`}>
        <Link to="/" className="shrink-0">
          <img src={logo} alt="NorthOak" className="h-8 w-auto object-contain relative -top-[5px]" />
        </Link>
        <div className="flex-1 flex items-center gap-2">
          {steps.map((_, i) => (
            <div
              key={i}
              className={`flex-1 h-2 rounded-full transition-all duration-300 ${
                i <= stepIdx ? "bg-sage" : "bg-muted-foreground/20"
              }`}
            />
          ))}
        </div>
        <button
          type="button"
          onClick={() => navigate(-1)}
          aria-label="Close"
          className="shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-sage/20 hover:bg-sage/35 text-sage transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      <div className="max-w-4xl mx-auto w-full flex-1 flex flex-col justify-center min-h-[400px]">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={stepIdx}
            custom={direction}
            initial={{ opacity: 0, x: direction * 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction * -40 }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground text-center mb-4">
              {stepCopy[step].title}
            </h2>
            <p className="text-lg text-muted-foreground text-center mb-6 min-h-[1.75rem]">
              {stepCopy[step].subtitle ?? ""}
            </p>

          {step === "services" && (
            <div className="space-y-4" role="radiogroup">
              {services.map((s) => (
                <OptionCard
                  key={s.value}
                  label={s.label}
                  selected={service === s.value}
                  onClick={() => pickAndAdvance(setService)(s.value)}
                />
              ))}
            </div>
          )}

          {step === "timeline" && (
            <div className="space-y-4" role="radiogroup">
              {timelines.map((t) => (
                <OptionCard
                  key={t.value}
                  label={t.label}
                  selected={timeline === t.value}
                  onClick={() => pickAndAdvance(setTimeline)(t.value)}
                />
              ))}
            </div>
          )}

          {step === "teamSize" && (
            <div className="grid sm:grid-cols-2 gap-4" role="radiogroup">
              {teamSizes.map((t) => (
                <OptionCard
                  key={t.value}
                  label={t.label}
                  selected={teamSize === t.value}
                  onClick={() => pickAndAdvance(setTeamSize)(t.value)}
                  center
                />
              ))}
            </div>
          )}

          {step === "journey" && (
            <div className="space-y-4" role="radiogroup">
              {journeys.map((j) => (
                <OptionCard
                  key={j.value}
                  label={j.label}
                  selected={journey === j.value}
                  onClick={() => pickAndAdvance(setJourney)(j.value)}
                />
              ))}
            </div>
          )}

            {step === "contact" && (
              <div className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="text-base">First name*</Label>
                    <Input
                      id="firstName"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      className="h-14 rounded-2xl text-base"
                      autoComplete="given-name"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="text-base">Last name</Label>
                    <Input
                      id="lastName"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      className="h-14 rounded-2xl text-base"
                      autoComplete="family-name"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company" className="text-base">Company name*</Label>
                  <Input
                    id="company"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    className="h-14 rounded-2xl text-base"
                    autoComplete="organization"
                    required
                  />
                </div>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-base">Business phone</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="h-14 rounded-2xl text-base"
                      autoComplete="tel"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-base">Business email*</Label>
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="h-14 rounded-2xl text-base"
                      autoComplete="email"
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="notes" className="text-base">Additional comments</Label>
                  <Textarea
                    id="notes"
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="min-h-[150px] rounded-2xl resize-none text-base"
                  />
                </div>
              </div>
            )}

            {(stepIdx > 0 || isLast) && (
              <div className="flex flex-wrap justify-center items-center gap-4 mt-12">
                {stepIdx > 0 && (
                  <button
                    type="button"
                    onClick={goBack}
                    disabled={isSubmitting}
                    className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-foreground/5 hover:bg-foreground/10 text-base font-medium text-foreground transition-colors disabled:opacity-50"
                  >
                    <ArrowLeft className="w-5 h-5" /> Back
                  </button>
                )}
                {isLast && (
                  <Button
                    type="button"
                    variant="hero"
                    onClick={handleSubmit}
                    disabled={!canSubmit() || isSubmitting}
                    className="rounded-full px-12 py-3 text-base"
                  >
                    {isSubmitting ? "Submitting..." : "Submit"}
                  </Button>
                )}
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

const OptionCard = ({
  label,
  selected,
  onClick,
  center,
}: {
  label: string;
  selected: boolean;
  onClick: () => void;
  center?: boolean;
}) => (
  <button
    type="button"
    role="radio"
    aria-checked={selected}
    onClick={onClick}
    className={`w-full p-7 rounded-3xl border-2 transition-all ${
      center ? "text-center" : "text-left"
    } ${
      selected
        ? "border-sage bg-sage/5"
        : "border-border hover:border-sage/40 bg-card"
    }`}
  >
    <span className="text-lg font-medium text-foreground">{label}</span>
  </button>
);

export default MultiStepIntake;
