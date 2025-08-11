import { motion } from "framer-motion";
import { Code, Bolt } from "lucide-react";
import ScrollReveal from "@/components/ui/scroll-reveal";
import SkillBar from "@/components/ui/skill-bar";
import { portfolioData } from "@/data/portfolio-data";

export default function Skills() {
  return (
    <section id="skills" className="py-20 relative">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080" 
          alt="Modern technology and programming concept" 
          className="w-full h-full object-cover opacity-10" 
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              <span className="gradient-text">Technical Skills</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* Frontend Skills */}
          <ScrollReveal delay={0.2}>
            <div className="glass-enhanced rounded-xl p-6 sm:p-8 h-full">
              <motion.h3 
                className="text-2xl font-semibold mb-8 text-primary flex items-center"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                <motion.div
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                >
                  <Code className="mr-3" />
                </motion.div>
                Frontend Development
              </motion.h3>
              <div className="space-y-6">
                {portfolioData.skills.frontend.map((skill, index) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    percentage={skill.percentage}
                    delay={index * 0.2}
                  />
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Tools & Technologies */}
          <ScrollReveal delay={0.4}>
            <div className="glass-enhanced rounded-xl p-6 sm:p-8 h-full">
              <motion.h3 
                className="text-2xl font-semibold mb-8 text-secondary flex items-center"
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 4 }}
                >
                  <Bolt className="mr-3" />
                </motion.div>
                Tools & Technologies
              </motion.h3>
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                {portfolioData.skills.tools.map((tool, index) => (
                  <motion.div
                    key={tool.name}
                    className="glass rounded-lg p-4 text-center hover:bg-primary/20 transition-all duration-500 transform cursor-pointer"
                    initial={{ opacity: 0, y: 30, scale: 0.8 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ delay: 0.1 * index, type: "spring", damping: 15 }}
                    whileHover={{ 
                      scale: 1.1, 
                      y: -5,
                      rotateY: 10,
                      boxShadow: "0 20px 40px rgba(0,0,0,0.2)"
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <motion.i 
                      className={`${tool.icon} text-2xl ${tool.color} mb-2 block`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    />
                    <div className="text-sm font-medium">{tool.name}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
