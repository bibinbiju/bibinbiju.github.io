import { motion } from "framer-motion";
import { Mail, Linkedin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-12 glass-dark">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <motion.div 
            className="text-2xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="gradient-text">Bibin B</span>
          </motion.div>
          
          <motion.p 
            className="text-muted-foreground mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Frontend JavaScript Specialist | Building the Future of Web
          </motion.p>
          
          <motion.div 
            className="flex justify-center space-x-6 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <motion.a
              href="mailto:bibinvakkom@gmail.com"
              className="glass w-12 h-12 rounded-xl flex items-center justify-center hover:bg-primary/20 transition-all duration-300 transform hover:scale-110"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail className="h-5 w-5" />
            </motion.a>
            
            <motion.a
              href="https://www.linkedin.com/in/bibin-b-biju-542583154"
              target="_blank"
              rel="noopener noreferrer"
              className="glass w-12 h-12 rounded-xl flex items-center justify-center hover:bg-primary/20 transition-all duration-300 transform hover:scale-110"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Linkedin className="h-5 w-5" />
            </motion.a>
            
            <motion.a
              href="tel:+919048778629"
              className="glass w-12 h-12 rounded-xl flex items-center justify-center hover:bg-primary/20 transition-all duration-300 transform hover:scale-110"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Phone className="h-5 w-5" />
            </motion.a>
          </motion.div>
          
          <motion.div 
            className="border-t border-border pt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <p className="text-muted-foreground text-sm">
              © 2024 Bibin B. All rights reserved. | Designed with passion and built with modern web technologies.
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
