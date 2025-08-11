import Image from "next/image";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ui/scroll-reveal";

const stats = [
  { number: "6+", label: "Years Experience", color: "from-blue-500 to-cyan-500" },
  { number: "50+", label: "Projects Completed", color: "from-purple-500 to-pink-500" },
  { number: "15+", label: "Technologies Mastered", color: "from-green-500 to-teal-500" },
  { number: "100%", label: "Client Satisfaction", color: "from-orange-500 to-red-500" },
];

const skills = [
  { icon: "💻", title: "Frontend Development", desc: "React.js, TypeScript, Next.js" },
  { icon: "🎨", title: "UI/UX Implementation", desc: "Responsive Design, Animations" },
  { icon: "⚡", title: "Performance Optimization", desc: "Scalable, Fast Applications" },
];

// Reusable stat card
const StatCard = ({ number, label, color, delay }) => (
  <motion.div
    className="glass-enhanced rounded-2xl p-4 sm:p-6 text-center relative overflow-hidden group cursor-pointer"
    initial={{ opacity: 0, y: 30, scale: 0.9 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    transition={{ delay, duration: 0.5, type: "spring" }}
    whileHover={{ scale: 1.05, y: -5 }}
    whileTap={{ scale: 0.95 }}
  >
    <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-20 transition-opacity`} />
    <motion.div
      className={`text-2xl sm:text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r ${color} bg-clip-text text-transparent`}
      animate={{ scale: [1, 1.1, 1] }}
      transition={{ duration: 3, repeat: Infinity, repeatDelay: 3 }}
    >
      {number}
    </motion.div>
    <div className="text-muted-foreground text-xs sm:text-sm font-medium">{label}</div>
  </motion.div>
);

export default function About() {
  return (
    <section id="about" className="py-20 relative">
      {/* Background */}
      <Image
        src="/images/backgrounds/about.png"
        alt="Abstract technology circuit patterns"
        fill
        className="object-cover opacity-10 z-0"
        priority
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Heading */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">About Me</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto" />
          </div>
        </ScrollReveal>

        <div className="max-w-7xl mx-auto">
          {/* Profile & Content */}
          <ScrollReveal delay={0.2}>
            <motion.div className="glass-enhanced rounded-3xl p-8 md:p-12 mb-8">
              <div className="flex flex-col lg:flex-row items-center gap-12">
                {/* Profile Image */}
                <motion.div whileHover={{ scale: 1.05, rotateY: 10 }} transition={{ duration: 0.4 }}>
                  <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-primary/30 shadow-2xl">
                    <Image
                      src="/images/profile.png"
                      alt="Software developer coding on multiple monitors"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <motion.div
                    className="absolute -inset-4 rounded-full bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 blur-xl -z-10"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  />
                </motion.div>

                {/* Text Content */}
                <div className="flex-1 text-center lg:text-left">
                  <motion.h3
                    className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent"
                    initial={{ x: -30, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                  >
                    About Me
                  </motion.h3>
                  <motion.div
                    className="space-y-4 text-base sm:text-lg text-muted-foreground leading-relaxed"
                    initial={{ x: -30, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                  >
                    <p>
                      I'm a passionate <span className="text-primary font-semibold">Frontend Engineer</span> with over 6 years of experience building scalable, performant web applications with React.js, TypeScript, and Next.js.
                    </p>
                    <p>
                      I've worked in <span className="text-secondary font-semibold">fintech, healthcare, construction, and retail</span>, delivering pixel-perfect UIs and complex real-time features.
                    </p>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </ScrollReveal>

          {/* Stats */}
          <ScrollReveal delay={0.4}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              {stats.map((stat, i) => (
                <StatCard key={stat.label} {...stat} delay={0.6 + i * 0.1} />
              ))}
            </div>
          </ScrollReveal>

          {/* Skills */}
          <ScrollReveal delay={0.6}>
            <motion.div className="glass-enhanced rounded-3xl p-8 mt-8">
              <h4 className="text-2xl font-bold text-center mb-8 text-primary">Core Specializations</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {skills.map((item, i) => (
                  <motion.div
                    key={item.title}
                    className="text-center p-6 glass rounded-xl"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 + i * 0.1, duration: 0.5 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="text-4xl mb-4">{item.icon}</div>
                    <h5 className="text-lg font-semibold text-foreground mb-2">{item.title}</h5>
                    <p className="text-muted-foreground text-sm">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
