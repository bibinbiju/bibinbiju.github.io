import { motion } from "framer-motion";
import ScrollReveal from "@/components/ui/scroll-reveal";

export default function About() {
  return (
    <section id="about" className="py-20 relative">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080" 
          alt="Abstract technology circuit patterns" 
          className="w-full h-full object-cover opacity-10" 
        />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">About Me</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
          </div>
        </ScrollReveal>

        <div className="max-w-7xl mx-auto">
          {/* Main Content Card */}
          <ScrollReveal delay={0.2}>
            <motion.div 
              className="glass-enhanced rounded-3xl p-8 md:p-12 mb-8"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex flex-col lg:flex-row items-center gap-12">
                {/* Profile Image Section */}
                <motion.div 
                  className="flex-shrink-0"
                  whileHover={{ scale: 1.05, rotateY: 10 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="relative">
                    <div className="w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-primary/30 shadow-2xl">
                      <img 
                        src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                        alt="Software developer coding on multiple monitors" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <motion.div
                      className="absolute -inset-4 rounded-full bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 blur-xl -z-10"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    />
                  </div>
                </motion.div>

                {/* Content Section */}
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
                      I'm a passionate <span className="text-primary font-semibold">Frontend Engineer</span> with over 6 years of experience 
                      crafting exceptional digital experiences. I specialize in building scalable, performant web applications 
                      using modern technologies like React.js, TypeScript, and Next.js.
                    </p>
                    <p>
                      My expertise spans across various industries including <span className="text-secondary font-semibold">fintech, healthcare, 
                      construction, and retail</span>, where I've successfully delivered pixel-perfect UIs and implemented 
                      complex real-time features.
                    </p>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </ScrollReveal>

          {/* Stats Grid */}
          <ScrollReveal delay={0.4}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              {[
                { number: "6+", label: "Years Experience", color: "from-blue-500 to-cyan-500" },
                { number: "50+", label: "Projects Completed", color: "from-purple-500 to-pink-500" },
                { number: "15+", label: "Technologies Mastered", color: "from-green-500 to-teal-500" },
                { number: "100%", label: "Client Satisfaction", color: "from-orange-500 to-red-500" }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="glass-enhanced rounded-2xl p-4 sm:p-6 text-center relative overflow-hidden group cursor-pointer"
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ delay: 0.6 + index * 0.1, duration: 0.5, type: "spring" }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
                  />
                  <motion.div 
                    className={`text-2xl sm:text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 3, repeat: Infinity, repeatDelay: 3, delay: index * 0.5 }}
                  >
                    {stat.number}
                  </motion.div>
                  <div className="text-muted-foreground text-xs sm:text-sm font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </ScrollReveal>

          {/* Skills Highlights */}
          <ScrollReveal delay={0.6}>
            <motion.div 
              className="glass-enhanced rounded-3xl p-8 mt-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <h4 className="text-2xl font-bold text-center mb-8 text-primary">Core Specializations</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { title: "Frontend Development", desc: "React.js, TypeScript, Next.js", icon: "💻" },
                  { title: "UI/UX Implementation", desc: "Responsive Design, Animations", icon: "🎨" },
                  { title: "Performance Optimization", desc: "Scalable, Fast Applications", icon: "⚡" }
                ].map((item, index) => (
                  <motion.div
                    key={item.title}
                    className="text-center p-6 glass rounded-xl"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
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
