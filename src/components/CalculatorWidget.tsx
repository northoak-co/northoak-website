import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Info } from "lucide-react";

export const DEFAULT_US_ANNUAL = 68_000;
export const OVERHEAD_PCT = 0.35;
export const SALARY_FRAC = 1 / (1 + OVERHEAD_PCT);
export const OVERHEAD_FRAC = OVERHEAD_PCT / (1 + OVERHEAD_PCT);
export const BAR_H = 300;

export const ROLES: { label: string; salary: number | null; noRange: [number, number] | null }[] = [
  { label: "Select a role…",               salary: null,   noRange: null },
  { label: "Operations Coordinator",        salary: 55_000, noRange: [24_000, 38_000] },
  { label: "Executive Assistant",           salary: 65_000, noRange: [28_000, 42_000] },
  { label: "Customer Support Specialist",   salary: 45_000, noRange: [24_000, 28_000] },
  { label: "CRM / Marketing Coordinator",   salary: 52_000, noRange: [24_000, 34_000] },
  { label: "Finance & Accounting",          salary: 65_000, noRange: [28_000, 44_000] },
  { label: "HR Administrator",              salary: 55_000, noRange: [24_000, 36_000] },
  { label: "Data Entry / Admin Support",    salary: 40_000, noRange: [24_000, 30_000] },
  { label: "Project Manager",               salary: 85_000, noRange: [36_000, 54_000] },
  { label: "Custom",                        salary: null,   noRange: null },
];

export const overheadItems = [
  { label: "Benefits & health insurance", pct: "15%" },
  { label: "Payroll taxes (FICA, FUTA, SUTA)", pct: "10%" },
  { label: "Recruiting & backfill (amortized)", pct: "5%" },
  { label: "Training & onboarding", pct: "3%" },
  { label: "HR & management overhead", pct: "2%" },
];

export const fmt = (n: number) => "$" + Math.round(n).toLocaleString("en-US");

const CalculatorWidget = () => {
  const [people, setPeople] = useState(1);
  const [years, setYears] = useState(2);
  const [usAnnual, setUsAnnual] = useState(DEFAULT_US_ANNUAL);
  const [selectedRole, setSelectedRole] = useState<string>("Select a role…");
  const [showOverhead, setShowOverhead] = useState(false);
  const [usHover, setUsHover] = useState<"salary" | "overhead" | null>(null);

  const effectiveUs = usAnnual > 0 ? usAnnual : DEFAULT_US_ANNUAL;
  const trueCostPerPerson = effectiveUs * (1 + OVERHEAD_PCT);

  const selectedRoleData = ROLES.find((r) => r.label === selectedRole);
  const noRangeLow  = selectedRoleData?.noRange?.[0] ?? 24_000;
  const noRangeHigh = selectedRoleData?.noRange?.[1] ?? 42_000;
  const noAnnual = Math.round((noRangeLow + noRangeHigh) / 2);

  const usCost = people * years * trueCostPerPerson;
  const noCost = people * years * noAnnual;
  const savings = usCost - noCost;
  const noBarH = Math.min(Math.round(BAR_H * (noAnnual / trueCostPerPerson)), BAR_H);

  return (
    <div className="grid lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
      {/* Inputs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-card border border-border rounded-2xl p-8 flex flex-col justify-center gap-8"
      >
        {/* Role selector + costs */}
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

          {/* In-House Cost */}
          <div className="mt-5">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-zinc-400 inline-block flex-shrink-0" />
              <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">In-House Cost</span>
            </div>
            <div className="rounded-xl border border-border bg-muted/30 px-4 py-4 space-y-3">
              <div>
                <label className="text-sm text-muted-foreground block mb-1.5">
                  Average US hire cost (per year)
                </label>
                <div className="relative">
                  <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground font-medium select-none">$</span>
                  <input
                    type="number"
                    min={0}
                    step={1000}
                    value={usAnnual || ""}
                    placeholder="68,000"
                    onChange={(e) => setUsAnnual(Number(e.target.value))}
                    className="w-full pl-8 pr-4 py-2 border border-border rounded-xl bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-zinc-200 focus:border-zinc-400 transition-colors text-sm"
                  />
                </div>
              </div>
              <div className="border-t border-border pt-3">
                <button
                  type="button"
                  onClick={() => setShowOverhead((v) => !v)}
                  className="flex items-center justify-between w-full text-left"
                >
                  <span className="text-sm text-foreground">
                    True all-in cost{" "}
                    <span className="font-semibold text-foreground">{fmt(trueCostPerPerson)}</span>
                    <span className="text-muted-foreground"> (+35% overhead)</span>
                  </span>
                  <Info className="w-4 h-4 text-muted-foreground flex-shrink-0 ml-2" />
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
          </div>

          {/* NorthOak rate */}
          <div className="mt-4">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-sage inline-block flex-shrink-0" />
              <span className="text-xs font-semibold text-sage uppercase tracking-wide">With NorthOak</span>
            </div>
            <div className="rounded-xl border border-sage/30 bg-sage/8 px-4 py-3">
              <span className="text-sm text-foreground">
                Starts at{" "}
                <motion.span
                  key={noRangeLow}
                  initial={{ opacity: 0.5 }}
                  animate={{ opacity: 1 }}
                  className="font-semibold text-sage"
                >
                  {fmt(Math.round(noRangeLow / 12 / 100) * 100)}/mo
                </motion.span>
              </span>
            </div>
          </div>
        </div>

        {/* Team members slider */}
        <div>
          <div className="flex justify-between items-baseline mb-3">
            <label className="text-foreground font-medium">Number of Outsourced Team Members</label>
            <span className="font-bold text-sage text-xl">{people}</span>
          </div>
          <input
            type="range" min={1} max={10} step={1}
            value={people}
            onChange={(e) => setPeople(Number(e.target.value))}
            className="w-full cursor-pointer"
            style={{ accentColor: "hsl(var(--sage))" }}
          />
          <div className="flex justify-between text-xs text-muted-foreground mt-1.5">
            <span>1</span><span>10</span>
          </div>
        </div>

        {/* Time horizon slider */}
        <div>
          <div className="flex justify-between items-baseline mb-3">
            <label className="text-foreground font-medium">Time Horizon (Years)</label>
            <span className="font-bold text-sage text-xl">{years}</span>
          </div>
          <input
            type="range" min={1} max={5} step={1}
            value={years}
            onChange={(e) => setYears(Number(e.target.value))}
            className="w-full cursor-pointer"
            style={{ accentColor: "hsl(var(--sage))" }}
          />
          <div className="flex justify-between text-xs text-muted-foreground mt-1.5">
            <span>1</span><span>5</span>
          </div>
        </div>
      </motion.div>

      {/* Chart */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.15 }}
        className="bg-card border border-border rounded-2xl p-8 flex flex-col justify-center"
      >
        <div className="text-center mb-8">
          <p className="text-sm text-muted-foreground mb-1">
            Estimated savings over {years} year{years !== 1 ? "s" : ""}
          </p>
          <motion.p
            key={savings}
            initial={{ opacity: 0.6, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.2 }}
            className="text-sage font-bold text-5xl leading-none mb-2"
          >
            {fmt(Math.max(savings, 0))}
          </motion.p>
          <motion.p
            key={`pct-${savings}`}
            initial={{ opacity: 0.6 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
            className="text-sm font-medium text-muted-foreground"
          >
            Save {usCost > 0 ? Math.round((Math.max(savings, 0) / usCost) * 100) : 0}% compared to hiring in-house.
          </motion.p>
        </div>

        <div className="relative" style={{ height: BAR_H + 72 }}>
          <div className="absolute inset-x-0 border-t-2 border-dashed border-zinc-300" style={{ bottom: 32 + BAR_H }} />
          <motion.div
            className="absolute inset-x-0 border-t-2 border-dashed border-sage/35"
            animate={{ bottom: 32 + noBarH }}
            transition={{ duration: 0.4 }}
            style={{ bottom: 32 + noBarH }}
          />

          <div className="absolute left-0 z-10 bg-white border border-border rounded-xl px-3 py-2 shadow-sm" style={{ bottom: 32 + BAR_H - 26 }}>
            <span className="text-xs text-muted-foreground block">US Hire (all-in)</span>
            <motion.span key={usCost} initial={{ opacity: 0.6 }} animate={{ opacity: 1 }} className="font-bold text-foreground text-sm block">{fmt(usCost)}</motion.span>
          </div>

          <motion.div
            className="absolute right-0 z-10 bg-white border border-border rounded-xl px-3 py-2 shadow-sm"
            animate={{ bottom: 32 + noBarH - 26 }}
            transition={{ duration: 0.4 }}
            style={{ bottom: 32 + noBarH - 26 }}
          >
            <span className="text-xs text-muted-foreground block">With NorthOak</span>
            <motion.span key={noCost} initial={{ opacity: 0.6 }} animate={{ opacity: 1 }} className="font-bold text-foreground text-sm block">{fmt(noCost)}</motion.span>
          </motion.div>

          <div className="absolute bottom-8 left-0 right-0 flex items-end justify-center gap-16">
            {/* US Hire stacked bar */}
            <div className="flex flex-col items-center relative" onMouseLeave={() => setUsHover(null)}>
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
              <motion.div
                className="w-20 rounded-t-xl overflow-hidden flex flex-col cursor-pointer"
                initial={{ height: 0 }}
                animate={{ height: BAR_H }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <div
                  className="w-full transition-colors duration-150"
                  style={{ height: `${OVERHEAD_FRAC * 100}%`, background: usHover === "overhead" ? "#c4c4c8" : "#d4d4d8" }}
                  onMouseEnter={() => setUsHover("overhead")}
                />
                <div
                  className="w-full flex-1 transition-colors duration-150"
                  style={{ background: usHover === "salary" ? "#8a9199" : "#9ca3af" }}
                  onMouseEnter={() => setUsHover("salary")}
                />
              </motion.div>
            </div>

            {/* NorthOak bar */}
            <div className="flex flex-col items-center">
              <motion.div
                className="w-20 rounded-t-xl"
                style={{ background: "linear-gradient(to top, hsl(102 44% 38% / 0.85), hsl(102 55% 70% / 0.3))" }}
                initial={{ height: 0 }}
                animate={{ height: noBarH }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              />
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 flex items-end justify-center gap-16">
            <span className="text-sm text-muted-foreground w-20 text-center">US Hire</span>
            <span className="text-sm text-muted-foreground w-20 text-center">NorthOak</span>
          </div>
        </div>

        {/* Time savings blurb */}
        <div className="mt-6 pt-5 border-t border-border">
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2">
            You also save time
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Beyond the dollars, outsourcing through NorthOak means you're not spending time on hiring, onboarding, training, performance management, culture fit concerns, or backfilling turnover — we handle all of it so your team can stay focused on growth.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default CalculatorWidget;
