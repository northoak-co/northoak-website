import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Info } from "lucide-react";

const DEFAULT_US_ANNUAL = 68_000;
const BAR_H = 200;

const ROLES: { label: string; salary: number | null; noRange: [number, number] | null }[] = [
  { label: "Select a role…",               salary: null,   noRange: null },
  { label: "Operations Coordinator",        salary: 55_000, noRange: [24_000, 38_000] },
  { label: "Executive Assistant",           salary: 65_000, noRange: [28_000, 42_000] },
  { label: "Customer Support Specialist",   salary: 45_000, noRange: [18_000, 28_000] },
  { label: "CRM / Marketing Coordinator",   salary: 52_000, noRange: [22_000, 34_000] },
  { label: "Finance & Accounting",          salary: 65_000, noRange: [28_000, 44_000] },
  { label: "HR Administrator",              salary: 55_000, noRange: [24_000, 36_000] },
  { label: "Data Entry / Admin Support",    salary: 40_000, noRange: [15_000, 24_000] },
  { label: "Project Manager",               salary: 85_000, noRange: [36_000, 54_000] },
  { label: "Custom",                        salary: null,   noRange: null },
];

// Overhead breakdown based on BLS / SHRM benchmarks
const OVERHEAD_PCT = 0.35;
// salary sits at the bottom, overhead at the top of the stacked bar
const SALARY_FRAC = 1 / (1 + OVERHEAD_PCT); // ~74%
const OVERHEAD_FRAC = OVERHEAD_PCT / (1 + OVERHEAD_PCT); // ~26%

// CSS gradient renders salary (bottom, darker) → overhead (top, lighter)
const US_BAR_GRADIENT = `linear-gradient(
  to top,
  #9ca3af 0%,
  #9ca3af ${SALARY_FRAC * 100 - 0.3}%,
  #fff     ${SALARY_FRAC * 100 - 0.3}%,
  #fff     ${SALARY_FRAC * 100 + 0.3}%,
  #d4d4d8  ${SALARY_FRAC * 100 + 0.3}%,
  #d4d4d8  100%
)`;

const overheadItems = [
  { label: "Benefits & health insurance", pct: "15%" },
  { label: "Payroll taxes (FICA, FUTA, SUTA)", pct: "10%" },
  { label: "Recruiting & backfill (amortized)", pct: "5%" },
  { label: "Training & onboarding", pct: "3%" },
  { label: "HR & management overhead", pct: "2%" },
];

const fmt = (n: number) => "$" + Math.round(n).toLocaleString("en-US");

const SavingsCalculator = () => {
  const [people, setPeople] = useState(1);
  const [years, setYears] = useState(3);
  const [usAnnual, setUsAnnual] = useState(DEFAULT_US_ANNUAL);
  const [selectedRole, setSelectedRole] = useState<string>("Select a role…");
  const [showOverhead, setShowOverhead] = useState(false);
  const [usHover, setUsHover] = useState<"salary" | "overhead" | null>(null);

  const effectiveUs = usAnnual > 0 ? usAnnual : DEFAULT_US_ANNUAL;
  const trueCostPerPerson = effectiveUs * (1 + OVERHEAD_PCT);

  const selectedRoleData = ROLES.find((r) => r.label === selectedRole);
  const noRangeLow  = selectedRoleData?.noRange?.[0] ?? Math.round(effectiveUs * 0.35);
  const noRangeHigh = selectedRoleData?.noRange?.[1] ?? Math.round(effectiveUs * 0.55);
  const noAnnual = Math.round((noRangeLow + noRangeHigh) / 2);

  const usCost = people * years * trueCostPerPerson;
  const noCost = people * years * noAnnual;
  const savings = usCost - noCost;

  const noBarH = Math.min(Math.round(BAR_H * (noAnnual / trueCostPerPerson)), BAR_H);

  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sage font-medium text-sm tracking-wide uppercase mb-4 block"
          >
            Savings Calculator
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-3xl md:text-4xl font-bold text-foreground"
          >
            What You Save With NorthOak
          </motion.h2>
        </div>

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {/* Left: Inputs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-card border border-border rounded-2xl p-8 flex flex-col justify-center gap-8"
          >
            {/* Role selector + US hire cost */}
            <div>
              <label className="text-foreground font-medium block mb-3">
                Role You're Hiring For
              </label>
              <select
                value={selectedRole}
                onChange={(e) => {
                  const role = ROLES.find((r) => r.label === e.target.value);
                  setSelectedRole(e.target.value);
                  if (role?.salary != null) setUsAnnual(role.salary);
                }}
                className="w-full px-4 py-2.5 border border-border rounded-xl bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-sage/30 focus:border-sage transition-colors mb-5"
              >
                {ROLES.map((r) => (
                  <option key={r.label} value={r.label}>{r.label}</option>
                ))}
              </select>

              <label className="text-foreground font-medium block mb-3">
                Average US Hire Cost (per year)
              </label>
              <div className="relative">
                <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground font-medium select-none">
                  $
                </span>
                <input
                  type="number"
                  min={0}
                  step={1000}
                  value={usAnnual || ""}
                  placeholder="68,000"
                  onChange={(e) => setUsAnnual(Number(e.target.value))}
                  className="w-full pl-8 pr-4 py-2.5 border border-border rounded-xl bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-sage/30 focus:border-sage transition-colors"
                />
              </div>

              {/* NorthOak estimated rate */}
              <div className="mt-3 rounded-xl border border-sage/30 bg-sage/8 px-4 py-4">
                <p className="text-sm font-medium text-foreground mb-2">NorthOak Estimated Rate</p>
                <div className="flex items-baseline gap-2 flex-wrap">
                  <motion.span
                    key={`${noRangeLow}-${noRangeHigh}`}
                    initial={{ opacity: 0.5 }}
                    animate={{ opacity: 1 }}
                    className="font-bold text-sage text-xl"
                  >
                    {fmt(Math.round(noRangeLow / 12))}–{fmt(Math.round(noRangeHigh / 12))}<span className="text-sm font-normal text-muted-foreground">/mo</span>
                  </motion.span>
                  <span className="text-xs text-muted-foreground">
                    ({fmt(noRangeLow)}–{fmt(noRangeHigh)}/yr)
                  </span>
                </div>
                <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
                  Estimated range per team member — final rate depends on the seniority level you need.
                </p>
              </div>

              {/* Overhead callout */}
              <div className="mt-3 rounded-xl border border-sage/20 bg-sage/5 px-4 py-3">
                <button
                  type="button"
                  onClick={() => setShowOverhead((v) => !v)}
                  className="flex items-center justify-between w-full text-left"
                >
                  <span className="text-sm text-foreground">
                    True all-in cost{" "}
                    <span className="font-semibold text-sage">{fmt(trueCostPerPerson)}</span>
                    <span className="text-muted-foreground"> (+35% overhead)</span>
                  </span>
                  <Info className="w-4 h-4 text-sage flex-shrink-0 ml-2" />
                </button>

                <AnimatePresence>
                  {showOverhead && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <p className="text-xs text-muted-foreground mt-3 mb-2 leading-relaxed">
                        Beyond salary, full-time US hires carry significant hidden costs—typically
                        35% above base pay, based on BLS and SHRM benchmarks:
                      </p>
                      <ul className="space-y-1">
                        {overheadItems.map((item) => (
                          <li key={item.label} className="flex justify-between text-xs text-muted-foreground">
                            <span>{item.label}</span>
                            <span className="font-medium text-foreground">{item.pct}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Number of team members */}
            <div>
              <div className="flex justify-between items-baseline mb-3">
                <label className="text-foreground font-medium">Number of Outsourced Team Members</label>
                <span className="font-bold text-sage text-xl">{people}</span>
              </div>
              <input
                type="range"
                min={1}
                max={10}
                step={1}
                value={people}
                onChange={(e) => setPeople(Number(e.target.value))}
                className="w-full cursor-pointer"
                style={{ accentColor: "hsl(var(--sage))" }}
              />
              <div className="flex justify-between text-xs text-muted-foreground mt-1.5">
                <span>1</span>
                <span>10</span>
              </div>
            </div>

            {/* Time horizon */}
            <div>
              <div className="flex justify-between items-baseline mb-3">
                <label className="text-foreground font-medium">Time Horizon (Years)</label>
                <span className="font-bold text-sage text-xl">{years}</span>
              </div>
              <input
                type="range"
                min={1}
                max={5}
                step={1}
                value={years}
                onChange={(e) => setYears(Number(e.target.value))}
                className="w-full cursor-pointer"
                style={{ accentColor: "hsl(var(--sage))" }}
              />
              <div className="flex justify-between text-xs text-muted-foreground mt-1.5">
                <span>1</span>
                <span>5</span>
              </div>
            </div>
          </motion.div>

          {/* Right: Chart */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="bg-card border border-border rounded-2xl p-8"
          >
            <p className="text-center text-xl font-semibold text-foreground mb-8">
              Over {years} year{years !== 1 ? "s" : ""}, you'd save{" "}
              <motion.span
                key={savings}
                initial={{ opacity: 0.6, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.2 }}
                className="text-sage font-bold text-2xl"
              >
                {fmt(Math.max(savings, 0))}
              </motion.span>
            </p>

            {/* Bar chart */}
            <div className="relative" style={{ height: BAR_H + 72 }}>
              {/* Dashed reference line: US bar top */}
              <div
                className="absolute inset-x-0 border-t-2 border-dashed border-zinc-300"
                style={{ bottom: 32 + BAR_H }}
              />

              {/* Dashed reference line: NorthOak bar top */}
              <motion.div
                className="absolute inset-x-0 border-t-2 border-dashed border-sage/35"
                animate={{ bottom: 32 + noBarH }}
                transition={{ duration: 0.4 }}
                style={{ bottom: 32 + noBarH }}
              />

              {/* US label */}
              <div
                className="absolute left-0 z-10 bg-white border border-border rounded-xl px-3 py-2 shadow-sm"
                style={{ bottom: 32 + BAR_H - 26 }}
              >
                <span className="text-xs text-muted-foreground block">US Hire (all-in)</span>
                <motion.span
                  key={usCost}
                  initial={{ opacity: 0.6 }}
                  animate={{ opacity: 1 }}
                  className="font-bold text-foreground text-sm block"
                >
                  {fmt(usCost)}
                </motion.span>
              </div>

              {/* NorthOak label */}
              <motion.div
                className="absolute right-0 z-10 bg-white border border-border rounded-xl px-3 py-2 shadow-sm"
                animate={{ bottom: 32 + noBarH - 26 }}
                transition={{ duration: 0.4 }}
                style={{ bottom: 32 + noBarH - 26 }}
              >
                <span className="text-xs text-muted-foreground block">With NorthOak</span>
                <motion.span
                  key={noCost}
                  initial={{ opacity: 0.6 }}
                  animate={{ opacity: 1 }}
                  className="font-bold text-foreground text-sm block"
                >
                  {fmt(noCost)}
                </motion.span>
              </motion.div>

              {/* Bars */}
              <div className="absolute bottom-8 left-0 right-0 flex items-end justify-center gap-16">
                {/* US Hire — stacked interactive bar */}
                <div
                  className="flex flex-col items-center relative"
                  onMouseLeave={() => setUsHover(null)}
                >
                  {/* Hover tooltip — anchored to the midpoint of the hovered section */}
                  <AnimatePresence>
                    {usHover && (
                      <motion.div
                        key={usHover}
                        initial={{ opacity: 0, x: 4 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 4 }}
                        transition={{ duration: 0.15 }}
                        className="absolute z-30 bg-foreground text-background rounded-lg px-3 py-2 text-xs whitespace-nowrap shadow-lg pointer-events-none"
                        style={{
                          left: "calc(100% + 10px)",
                          bottom: usHover === "overhead"
                            ? BAR_H * SALARY_FRAC + (BAR_H * OVERHEAD_FRAC) / 2
                            : (BAR_H * SALARY_FRAC) / 2,
                          transform: "translateY(50%)",
                        }}
                      >
                        {usHover === "salary" ? (
                          <><span className="font-semibold">Base Salary</span><span className="opacity-70 ml-1">{fmt(effectiveUs * people * years)}</span></>
                        ) : (
                          <><span className="font-semibold">Overhead (35%)</span><span className="opacity-70 ml-1">{fmt(effectiveUs * OVERHEAD_PCT * people * years)}</span></>
                        )}
                        <div
                          className="absolute right-full top-1/2 -translate-y-1/2"
                          style={{ width: 0, height: 0, borderTop: "5px solid transparent", borderBottom: "5px solid transparent", borderRight: "6px solid hsl(var(--foreground))" }}
                        />
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Stacked bar: overhead on top, salary on bottom */}
                  <motion.div
                    className="w-20 rounded-t-xl overflow-hidden flex flex-col cursor-pointer"
                    initial={{ height: 0 }}
                    animate={{ height: BAR_H }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                  >
                    <div
                      className="w-full transition-opacity duration-150"
                      style={{
                        height: `${OVERHEAD_FRAC * 100}%`,
                        background: usHover === "overhead" ? "#c4c4c8" : "#d4d4d8",
                      }}
                      onMouseEnter={() => setUsHover("overhead")}
                    />
                    <div
                      className="w-full flex-1 transition-opacity duration-150"
                      style={{ background: usHover === "salary" ? "#8a9199" : "#9ca3af" }}
                      onMouseEnter={() => setUsHover("salary")}
                    />
                  </motion.div>
                </div>

                {/* NorthOak */}
                <div className="flex flex-col items-center">
                  <motion.div
                    className="w-20 rounded-t-xl"
                    style={{
                      background:
                        "linear-gradient(to top, hsl(102 44% 38% / 0.85), hsl(102 55% 70% / 0.3))",
                    }}
                    initial={{ height: 0 }}
                    animate={{ height: noBarH }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  />
                </div>
              </div>

              {/* X-axis labels */}
              <div className="absolute bottom-0 left-0 right-0 flex items-end justify-center gap-16">
                <span className="text-sm text-muted-foreground w-20 text-center">US Hire</span>
                <span className="text-sm text-muted-foreground w-20 text-center">NorthOak</span>
              </div>
            </div>

            {/* Legend */}
            <div className="flex items-center justify-center gap-5 mt-4 flex-wrap">
              <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <span className="w-3 h-3 rounded-sm inline-block bg-[#9ca3af]" />
                Base salary
              </span>
              <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <span className="w-3 h-3 rounded-sm inline-block bg-[#d4d4d8]" />
                Overhead (~35%)
              </span>
              <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <span className="w-3 h-3 rounded-sm inline-block" style={{ background: "hsl(102 44% 38% / 0.75)" }} />
                NorthOak
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SavingsCalculator;
