
import { MotionDiv } from "./motion";

interface TimelineItemProps {
  title: string;
  company: string;
  period: string;
  description: string;
  isActive?: boolean;
}

export default function TimelineItem({ title, company, period, description, isActive }: TimelineItemProps) {
  return (
    <div className="timeline-item relative mb-12">
      <MotionDiv
        className={`timeline-dot ${isActive ? 'animate-glow' : ''}`}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2, duration: 0.4 }}
      />
      
      <div className="glass rounded-xl p-4 sm:p-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
          <h3 className="text-lg sm:text-xl font-semibold text-primary">{title}</h3>
          <span className="text-accent font-medium">{period}</span>
        </div>
        <h4 className="text-base sm:text-lg font-medium mb-3">{company}</h4>
        <p className="text-muted-foreground leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
