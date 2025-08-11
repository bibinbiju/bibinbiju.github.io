import ScrollReveal from "@/components/ui/scroll-reveal";
import TimelineItem from "@/components/ui/timeline-item";
import { portfolioData } from "@/data/portfolio-data";
import Image from "next/image";

export default function Experience() {
  return (
    <section id="experience" className="py-20 relative">
      {/* Background Image */}
      <Image
        src="/images/backgrounds/experience.png"
        alt="Abstract digital technology network"
        fill
        className="object-cover opacity-10 z-0"
        priority
      />

      <div className="container mx-auto px-6 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              <span className="gradient-text">Experience</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
          </div>
        </ScrollReveal>

        <div className="max-w-4xl mx-auto">
          <div className="relative pl-8 sm:pl-16">
            {portfolioData.experience.map((exp, index) => (
              <ScrollReveal key={index} delay={0.2 * index}>
                <TimelineItem
                  title={exp.position}
                  company={exp.company}
                  period={exp.period}
                  description={exp.description}
                  isActive={index === 0}
                />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
