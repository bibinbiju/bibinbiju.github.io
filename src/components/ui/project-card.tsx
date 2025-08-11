import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  link?: string;
}

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div
      className="glass-enhanced rounded-xl overflow-hidden transition-all duration-500 h-full flex flex-col group"
      whileHover={{ y: -15, rotateY: 5, scale: 1.03 }}
      initial={{ opacity: 0, y: 50, rotateX: 10 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ duration: 0.8, type: "spring", damping: 20 }}
      style={{ transformStyle: "preserve-3d" }}
    >
      <div className="relative overflow-hidden">
        <motion.img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-48 object-cover transition-transform duration-500" 
          whileHover={{ scale: 1.15, rotate: 1 }}
        />
        <motion.div 
          className="absolute inset-0 bg-gradient-to-t from-black/60 via-primary/20 to-transparent"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
        <motion.div
          className="absolute top-4 right-4 w-8 h-8 bg-primary/80 rounded-full flex items-center justify-center"
          initial={{ scale: 0, rotate: -180 }}
          whileHover={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.3 }}
        >
          <ExternalLink className="h-4 w-4 text-white" />
        </motion.div>
      </div>
      
      <div className="p-4 sm:p-6 flex flex-col flex-grow">
        <h3 className="text-lg sm:text-xl font-semibold mb-3 text-primary">{project.title}</h3>
        <p className="text-muted-foreground mb-4 text-sm leading-relaxed flex-grow">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech, index) => (
            <motion.span
              key={tech}
              className="glass px-3 py-1 text-xs rounded-full hover:bg-primary/20 transition-all duration-300"
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 0.1 * index, type: "spring", damping: 15 }}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              {tech}
            </motion.span>
          ))}
        </div>
        
        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <Button
            className="w-full glass-enhanced py-3 rounded-lg hover:bg-primary/20 transition-all duration-500 bg-transparent border border-primary text-primary hover:text-primary-foreground hover:bg-primary mt-auto relative overflow-hidden group"
            onClick={() => {
              if (project.link) {
                window.open(project.link, '_blank');
              }
            }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20"
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.6 }}
            />
            <ExternalLink className="mr-2 h-4 w-4 group-hover:animate-bounce-slow" />
            View Project
          </Button>
        </motion.div>
      </div>
    </motion.div>
  );
}
