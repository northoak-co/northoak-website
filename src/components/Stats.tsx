import { motion } from "framer-motion";

const stats = [
  {
    value: "10+",
    label: "Satisfied Clients",
    description: "From small startups to large corporations, our tailored strategies have fueled success across various industries.",
  },
  {
    value: "90%",
    label: "Client Retention Rate",
    description: "Nearly all of our clients choose to continue their journey with us, a testament to the lasting value we deliver.",
  },
  {
    value: "45%",
    label: "Average Client Growth",
    description: "On average, our clients see a 45% increase in their key performance metrics within the first year.",
  },
];

const Stats = () => {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sage font-medium text-sm tracking-wide uppercase mb-4 block"
          >
            Our Statistics
          </motion.span>
          <motion.h2
            initial={{ y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-3xl md:text-4xl font-bold text-foreground"
          >
            The proof is in the performance
          </motion.h2>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center p-8 bg-card rounded-2xl border border-border"
            >
              <motion.span
                initial={{ scale: 0.5 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + index * 0.1, type: "spring" }}
                className="font-display text-5xl md:text-6xl font-bold text-sage block mb-2"
              >
                {stat.value}
              </motion.span>
              <h3 className="font-display text-lg font-semibold text-foreground mb-3">
                {stat.label}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
