import ScrollReveal from "@/components/ui/scroll-reveal";
import ProjectCard from "@/components/ui/project-card";
import { portfolioData } from "@/data/portfolio-data";

export default function Projects() {
  return (
    <section id="projects" className="py-20 relative">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080" 
          alt="Code on multiple screens in dark environment" 
          className="w-full h-full object-cover opacity-10" 
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              <span className="gradient-text">Featured Projects</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
          {portfolioData.projects.map((project, index) => (
            <ScrollReveal key={index} delay={0.2 * index}>
              <ProjectCard project={project} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
