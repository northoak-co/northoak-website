import { useRef } from "react";
import { motion, useMotionValue, useAnimationFrame } from "framer-motion";
import andrea from "@/assets/team/andrea.png";
import benson from "@/assets/team/benson.png";
import rizza from "@/assets/team/rizza.png";
import Marvic from "@/assets/team/Marvic.png";
import sarah from "@/assets/team/sarah.png";
import Jammy from "@/assets/team/Jammy.png";
import Gail from "@/assets/team/Gail.png";
import Tim from "@/assets/team/Tim.png";
import ranzam from "@/assets/team/ranzam.png";
import Kelvin from "@/assets/team/Kelvin.png";
import Chinee from "@/assets/team/Chinee.png";
import Chan from "@/assets/team/Chan.png";

const members: { photo: string; role: string; category: string }[] = [
  { photo: andrea,  role: "Support Team Lead",             category: "SUPPORT" },
  { photo: rizza,   role: "Executive Assistant",           category: "BACK OFFICE" },
  { photo: Marvic,  role: "AR Specialist",                 category: "FINANCE" },
  { photo: Kelvin,  role: "Live Chat Specialist",          category: "SUPPORT" },
  { photo: Chan,    role: "Shopify Operations Specialist", category: "BACK OFFICE" },
  { photo: ranzam,  role: "Sales Development Rep",         category: "REVENUE" },
  { photo: benson,  role: "Sr. Support Rep",               category: "SUPPORT" },
  { photo: Gail,    role: "HR Coordinator",                category: "BACK OFFICE" },
  { photo: sarah,   role: "Bookkeeper",                    category: "FINANCE" },
  { photo: Tim,     role: "Salesforce Administrator",       category: "REVENUE" },
  { photo: Chinee,  role: "Graphic Designer",              category: "MARKETING" },
  { photo: Jammy,   role: "Recruiter",                     category: "BACK OFFICE" },
];

const CARD_WIDTH = 250;
const CARD_HEIGHT = 410;
const CARD_GAP = 16;
const SCROLL_SPEED = 68; // px/s
const HALF_WIDTH = members.length * (CARD_WIDTH + CARD_GAP); // seamless loop point
const FOREST = "hsl(102 40% 20%)";

const MemberCard = ({ member, tilt }: { member: (typeof members)[0]; tilt: number }) => (
  <motion.div
    className="shrink-0 flex flex-col overflow-hidden rounded-xl border border-border bg-card shadow-card cursor-pointer"
    style={{ width: CARD_WIDTH, height: CARD_HEIGHT }}
    whileHover={{ scale: 1.07, rotate: tilt, zIndex: 20 }}
    transition={{ type: "spring", stiffness: 320, damping: 14 }}
  >
    <div className="relative flex-1 min-h-0">
      <img
        src={member.photo}
        alt={member.role || "NorthOak team member"}
        className="absolute object-cover object-top rounded-xl pointer-events-none"
        draggable={false}
        style={{ top: "5%", left: "5%", width: "90%", height: "90%" }}
      />
    </div>
    {(member.role || member.category) && (
      <div className="px-3 py-3 flex flex-col gap-2 shrink-0">
        {member.role && (
          <p className="text-[11px] font-medium text-center leading-snug px-3 py-1.5 rounded-full border border-border bg-background text-foreground">
            {member.role}
          </p>
        )}
        {member.category && (
          <p
            className="text-[11px] font-semibold text-center leading-snug px-3 py-1.5 rounded-full text-white"
            style={{ background: FOREST, border: `1px solid ${FOREST}` }}
          >
            {member.category}
          </p>
        )}
      </div>
    )}
  </motion.div>
);

const SLOW_SPEED = 15;          // px/s while hovered
const TRANSITION_SECS = 0.3;   // deceleration / acceleration duration

const RolesHired = () => {
  const x = useMotionValue(0);
  const isHovered = useRef(false);
  const currentSpeed = useRef(SCROLL_SPEED);
  const isDragging = useRef(false);
  const dragStartClientX = useRef(0);
  const dragStartMotionX = useRef(0);

  // Auto-scroll with smooth speed transition
  useAnimationFrame((_, delta) => {
    if (isDragging.current) return;
    const dt = delta / 1000;
    const target = isHovered.current ? SLOW_SPEED : SCROLL_SPEED;
    const step = ((SCROLL_SPEED - SLOW_SPEED) / TRANSITION_SECS) * dt;
    if (currentSpeed.current < target) {
      currentSpeed.current = Math.min(currentSpeed.current + step, target);
    } else if (currentSpeed.current > target) {
      currentSpeed.current = Math.max(currentSpeed.current - step, target);
    }
    let next = x.get() - dt * currentSpeed.current;
    if (next <= -HALF_WIDTH) next += HALF_WIDTH;
    x.set(next);
  });

  const onMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    dragStartClientX.current = e.clientX;
    dragStartMotionX.current = x.get();
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current) return;
    let next = dragStartMotionX.current + (e.clientX - dragStartClientX.current);
    if (next > 0) next -= HALF_WIDTH;
    if (next <= -HALF_WIDTH) next += HALF_WIDTH;
    x.set(next);
  };

  const onMouseUp = () => { isDragging.current = false; };

  return (
    <section className="py-20 md:py-28">
      {/* Header */}
      <div className="max-w-5xl mx-auto px-6 text-center mb-14">
<motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-5"
        >
          Meet Our People
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-2xl mx-auto"
        >
          We hire the top 1% and build a culture with &lt;4% attrition so you get dedicated agents who will grow with your team for the long-run.
        </motion.p>
      </div>

      {/* Carousel */}
      <div className="px-16 md:px-24 lg:px-36">
        <div
          className="overflow-hidden"
          style={{
            padding: "10px 0",
            maskImage:
              "linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,0.6) 6%, rgb(0,0,0) 16%, rgb(0,0,0) 84%, rgba(0,0,0,0.6) 94%, rgba(0,0,0,0) 100%)",
            WebkitMaskImage:
              "linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,0.6) 6%, rgb(0,0,0) 16%, rgb(0,0,0) 84%, rgba(0,0,0,0.6) 94%, rgba(0,0,0,0) 100%)",
          }}
        >
          <motion.ul
            className="flex items-stretch w-max select-none"
            style={{ x, gap: CARD_GAP, cursor: isDragging.current ? "grabbing" : "grab" }}
            onMouseEnter={() => { isHovered.current = true; }}
            onMouseLeave={() => { isHovered.current = false; isDragging.current = false; }}
            onMouseDown={onMouseDown}
            onMouseMove={onMouseMove}
            onMouseUp={onMouseUp}
          >
            {[...members, ...members].map((member, i) => (
              <li key={i} style={{ width: CARD_WIDTH, height: CARD_HEIGHT, flexShrink: 0, position: "relative" }}>
                <MemberCard member={member} tilt={(i % members.length) % 2 === 0 ? -4 : 4} />
              </li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
};

export default RolesHired;
