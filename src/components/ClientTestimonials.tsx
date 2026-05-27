import { useRef, useEffect } from "react";
import { motion, useMotionValue, useAnimationFrame } from "framer-motion";
import { Star } from "lucide-react";
import davidAvatar from "../assets/team/david-bernasconi.jpeg";
import neilAvatar from "../assets/team/neil-c.jpeg";
import alphaeusAvatar from "../assets/team/alphaeus-t.jpeg";

const testimonials = [
  {
    stars: 5,
    title: "Results Are Real and Showing Clearly",
    body: "Really appreciate all of NorthOak's hard work. Results are real and showing clearly in the way customers communicate with us. We've gone from unmanaged negative feedback to not receiving any negative support feedback in recent weeks.",
    name: "Neil C.",
    avatar: neilAvatar,
    role: "Founder",
    company: "Superwhisper",
    companySize: "1–10",
    industry: "AI SaaS",
    service: "Support",
  },
  {
    stars: 5,
    title: "Thoughtful, Practical, and Clear",
    body: "Everything NorthOak has put together for us is thoughtful, practical, and clear — it really comes through in all the high quality touch points I've had with the team, and many others have expressed the same.",
    name: "Donnie Y.",
    avatar: "https://cdn.prod.website-files.com/65d631f6892f8b862233316f/6719b8ddbe9ad00b35d783a3_1715108275589-modified.png",
    role: "Head of Operations",
    company: "Prequel",
    companySize: "11–50",
    industry: "EdTech",
    service: "Revenue",
  },
  {
    stars: 5,
    title: "Never Looked So Good",
    body: "As we grow our sales, we're definitely going to continue scaling up with NorthOak. As previously mentioned, your support is always greatly appreciated and CS at Everpress has never looked so good!",
    name: "David B.",
    avatar: davidAvatar,
    role: "General Manager",
    company: "Everpress",
    companySize: "11–50",
    industry: "Ecommerce",
    service: "Support",
  },
  {
    stars: 5,
    title: "Our Go-To for Immediate Business Needs",
    body: "NorthOak has been instrumental in how we deliver two key products. Both areas have seen tremendous growth and in scaling up our success, NorthOak has been our go-to for addressing immediate business needs that require human intervention.",
    name: "Alphaeus T.",
    avatar: alphaeusAvatar,
    role: "Strategy & Ops Manager",
    company: "Venn",
    companySize: "11–50",
    industry: "Fintech",
    service: "Back Office",
  },
];

const SCROLL_SPEED = 35;     // px/s base speed
const SLOW_SPEED = 8;        // px/s on hover
const TRANSITION_SECS = 0.4; // speed ramp duration

const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex gap-1">
    {Array.from({ length: 5 }, (_, i) => {
      const filled = i < Math.floor(rating);
      const half = !filled && i < rating;
      return (
        <span key={i} className="relative inline-block">
          <Star className="w-3.5 h-3.5 text-sage/20" fill="currentColor" />
          {(filled || half) && (
            <span
              className="absolute inset-0 overflow-hidden"
              style={{ width: half ? "50%" : "100%" }}
            >
              <Star className="w-3.5 h-3.5 text-sage" fill="currentColor" />
            </span>
          )}
        </span>
      );
    })}
  </div>
);

const TestimonialCard = ({ t }: { t: typeof testimonials[number] }) => (
  <div
    className="group relative flex flex-col h-full rounded-3xl overflow-hidden p-7 md:p-8 border border-sage/25 transition-shadow duration-300 w-[340px] md:w-[400px] shrink-0"
    style={{
      background:
        "linear-gradient(180deg, hsl(102 35% 92%) 0%, hsl(102 25% 94%) 40%, hsl(102 20% 95%) 100%)",
      boxShadow:
        "0 4px 40px -12px hsl(var(--sage) / 0.2), inset 0 1px 0 0 hsl(var(--sage) / 0.15)",
    }}
  >
    <div
      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
      style={{
        background:
          "radial-gradient(circle at 30% 30%, hsl(102 44% 51% / 0.12) 0%, transparent 60%)",
      }}
    />

    <div className="relative z-10">
      <StarRating rating={t.stars} />
    </div>

    <h3 className="relative z-10 font-display font-semibold text-foreground text-lg mt-5 leading-snug">
      {t.title}
    </h3>

    <p className="relative z-10 text-foreground/75 text-sm leading-relaxed mt-4">
      {t.body}
    </p>

    <div className="relative z-10 mt-auto">
      {"companySize" in t && (
        <p className="text-muted-foreground/60 text-xs mt-6">
          Company Size: {t.companySize}
        </p>
      )}
      {"industry" in t && (
        <p className="text-muted-foreground/60 text-xs mt-1">
          Industry: {t.industry}
        </p>
      )}
      {"service" in t && (
        <p className="text-muted-foreground/60 text-xs mt-1">
          Service: {t.service}
        </p>
      )}
      <hr className="border-sage/20 mt-4" />
      {"avatar" in t ? (
        <div className="flex items-center gap-3 mt-4">
          <img
            src={t.avatar}
            alt={t.name}
            className="w-14 h-14 rounded-full object-cover border border-sage/40"
          />
          <div>
            <p className="font-semibold text-foreground text-sm">{t.name}</p>
            <p className="text-muted-foreground text-sm">{t.role}, {t.company}</p>
          </div>
        </div>
      ) : (
        <p className="font-semibold text-foreground text-sm mt-4">{t.role}</p>
      )}
    </div>
  </div>
);

const ClientTestimonials = () => {
  const trackRef = useRef<HTMLUListElement>(null);
  const halfWidthRef = useRef(0);
  const x = useMotionValue(0);
  const isHovered = useRef(false);
  const currentSpeed = useRef(SCROLL_SPEED);
  const looped = [...testimonials, ...testimonials];

  useEffect(() => {
    if (trackRef.current) {
      halfWidthRef.current = trackRef.current.scrollWidth / 2;
    }
  }, []);

  useAnimationFrame((_, delta) => {
    const dt = delta / 1000;
    const target = isHovered.current ? SLOW_SPEED : SCROLL_SPEED;
    const step = ((SCROLL_SPEED - SLOW_SPEED) / TRANSITION_SECS) * dt;
    if (currentSpeed.current < target) {
      currentSpeed.current = Math.min(currentSpeed.current + step, target);
    } else if (currentSpeed.current > target) {
      currentSpeed.current = Math.max(currentSpeed.current - step, target);
    }
    let next = x.get() - dt * currentSpeed.current;
    if (halfWidthRef.current > 0 && next <= -halfWidthRef.current) {
      next += halfWidthRef.current;
    }
    x.set(next);
  });

  return (
    <section className="py-20 md:py-28 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Trusted by growing teams like yours
          </h2>
          <p className="text-muted-foreground text-lg mt-4 max-w-xl mx-auto">
            Don't take our word for it. Here's what our clients have to say.
          </p>
        </motion.div>
      </div>

      {/* Scrolling cards */}
      <div
        className="overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
        }}
      >
        <motion.ul
          ref={trackRef}
          className="flex items-stretch w-max select-none"
          style={{ x, gap: 24 }}
          onMouseEnter={() => { isHovered.current = true; }}
          onMouseLeave={() => { isHovered.current = false; }}
        >
          {looped.map((t, i) => (
            <li key={i} className="shrink-0">
              <TestimonialCard t={t} />
            </li>
          ))}
        </motion.ul>
      </div>

    </section>
  );
};

export default ClientTestimonials;
