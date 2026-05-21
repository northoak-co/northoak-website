import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const services = [
  { value: "crm-management", label: "CRM Management" },
  { value: "customer-support", label: "Customer Support" },
  { value: "hr-admin", label: "HR Admin" },
  { value: "virtual-assistant", label: "Virtual Assistant" },
  { value: "finance-accounting", label: "Finance & Accounting" },
  { value: "back-office-admin", label: "Back Office Admin" },
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
  services: { title: "What services are you looking for?" },
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
    <div className="w-full max-w-2xl mx-auto">
      {/* Progress */}
      <div className="flex items-center justify-center gap-2 mb-12" aria-label={`Step ${stepIdx + 1} of ${steps.length}`}>
        {steps.map((_, i) => (
          <div
            key={i}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === stepIdx
                ? "w-8 bg-sage"
                : i < stepIdx
                  ? "w-1.5 bg-sage"
                  : "w-1.5 bg-muted-foreground/20"
            }`}
          />
        ))}
      </div>

      <div className="min-h-[640px]">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={stepIdx}
            custom={direction}
            initial={{ opacity: 0, x: direction * 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction * -40 }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-3">
              {stepCopy[step].title}
            </h2>
            <p className="text-muted-foreground text-center mb-10 min-h-[1.5rem]">
              {stepCopy[step].subtitle ?? ""}
            </p>

          {step === "services" && (
            <div className="grid sm:grid-cols-2 gap-3" role="radiogroup">
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
            <div className="space-y-3" role="radiogroup">
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
            <div className="grid sm:grid-cols-2 gap-3" role="radiogroup">
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
            <div className="space-y-3" role="radiogroup">
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
              <div className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First name*</Label>
                    <Input
                      id="firstName"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      className="h-12 rounded-xl"
                      autoComplete="given-name"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last name</Label>
                    <Input
                      id="lastName"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      className="h-12 rounded-xl"
                      autoComplete="family-name"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company">Company name*</Label>
                  <Input
                    id="company"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    className="h-12 rounded-xl"
                    autoComplete="organization"
                    required
                  />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Business phone</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="h-12 rounded-xl"
                      autoComplete="tel"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Business email*</Label>
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="h-12 rounded-xl"
                      autoComplete="email"
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="notes">Additional comments</Label>
                  <Textarea
                    id="notes"
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="min-h-[100px] rounded-xl resize-none"
                  />
                </div>
              </div>
            )}

            {(stepIdx > 0 || isLast) && (
              <div className="flex flex-wrap justify-center items-center gap-3 mt-8">
                {stepIdx > 0 && (
                  <button
                    type="button"
                    onClick={goBack}
                    disabled={isSubmitting}
                    className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-foreground/5 hover:bg-foreground/10 text-sm font-medium text-foreground transition-colors disabled:opacity-50"
                  >
                    <ArrowLeft className="w-4 h-4" /> Back
                  </button>
                )}
                {isLast && (
                  <Button
                    type="button"
                    variant="hero"
                    onClick={handleSubmit}
                    disabled={!canSubmit() || isSubmitting}
                    className="rounded-full px-8"
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
    className={`w-full p-5 rounded-2xl border-2 transition-all ${
      center ? "text-center" : "text-left"
    } ${
      selected
        ? "border-sage bg-sage/5"
        : "border-border hover:border-sage/40 bg-card"
    }`}
  >
    <span className="font-medium text-foreground">{label}</span>
  </button>
);

export default MultiStepIntake;
