"use client";
import { Download, Mail, Linkedin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ui/scroll-reveal";
import Image from "next/image";
import { MotionA, MotionDiv, MotionH1, MotionH2, MotionP } from "../ui/motion";
import APP_ENV from "@/config/appEnv";

export default function Hero() {
  const handleDownloadResume = () => {
    // Create a downloadable resume link
    const link = document.createElement("a");
    link.href = "/resume/Bibin_B_Resume.pdf"; // This would be served from public folder
    link.download = "Bibin_B_Resume.pdf";
    link.click();
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background Image */}

      <Image
        src="/images/backgrounds/hero.png"
        alt="Modern professional workspace"
        fill
        className="object-cover opacity-20 z-0"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-br from-background via-purple-900/20 to-indigo-900/30" />

      {/* Floating Particles */}
      <div className="absolute inset-0 z-10">
        <MotionDiv
          className="particle w-2 h-2 absolute top-1/4 left-1/4"
          animate={{
            y: [0, -100, 0],
            rotate: [0, 180, 360],
            opacity: [1, 0.5, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <MotionDiv
          className="particle w-3 h-3 absolute top-1/3 right-1/4"
          animate={{
            y: [0, -100, 0],
            rotate: [0, 180, 360],
            opacity: [1, 0.5, 1],
          }}
          transition={{
            duration: 4,
            delay: 1,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <MotionDiv
          className="particle w-2 h-2 absolute bottom-1/4 left-1/3"
          animate={{
            y: [0, -100, 0],
            rotate: [0, 180, 360],
            opacity: [1, 0.5, 1],
          }}
          transition={{
            duration: 4,
            delay: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <MotionDiv
          className="particle w-4 h-4 absolute top-1/2 right-1/3"
          animate={{
            y: [0, -100, 0],
            rotate: [0, 180, 360],
            opacity: [1, 0.5, 1],
          }}
          transition={{
            duration: 4,
            delay: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container mx-auto px-6 text-center z-20 relative">
        <MotionDiv
          className="glass-enhanced rounded-3xl p-8 md:p-12 max-w-5xl mx-auto"
          initial={{ y: 100, opacity: 0, scale: 0.8 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          whileHover={{ scale: 1.02 }}
        >
          <ScrollReveal>
            <MotionH1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
              initial={{ scale: 0.8, rotateX: -20 }}
              animate={{ scale: 1, rotateX: 0 }}
              transition={{
                duration: 1,
                delay: 0.3,
                type: "spring",
                damping: 15,
              }}
            >
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent font-extrabold">
                Bibin B
              </span>
            </MotionH1>

            <MotionH2
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-8 text-muted-foreground"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Senior Software Engineer | Frontend JavaScript Specialist
            </MotionH2>

            <MotionP
              className="text-base sm:text-lg md:text-xl mb-10 text-muted-foreground max-w-2xl mx-auto leading-relaxed px-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              6+ years of experience crafting scalable, performant web
              applications with React.js, TypeScript, and Next.js
            </MotionP>

            <MotionDiv
              className="flex flex-col sm:flex-row gap-6 justify-center items-center max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <MotionDiv
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  onClick={handleDownloadResume}
                  className="glass-enhanced px-8 py-4 rounded-xl hover:bg-primary/20 transition-all duration-300 animate-glow bg-transparent border-2 border-primary text-primary hover:text-primary-foreground hover:bg-primary relative overflow-hidden group"
                >
                  <MotionDiv
                    className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.8 }}
                  />
                  <Download className="mr-2 h-4 w-4 animate-bounce-slow" />
                  Download Resume
                </Button>
              </MotionDiv>

              <div className="flex space-x-4">
                <MotionA
                  href={APP_ENV.EMAIL_ID}
                  className="glass w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center hover:bg-primary/20 transition-all duration-300 transform hover:scale-110"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Mail className="h-4 w-4 sm:h-5 sm:w-5" />
                </MotionA>

                <MotionA
                  href={APP_ENV.LINKEDIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center hover:bg-primary/20 transition-all duration-300 transform hover:scale-110"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Linkedin className="h-4 w-4 sm:h-5 sm:w-5" />
                </MotionA>

                <MotionA
                  href="tel:+919048778629"
                  className="glass w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center hover:bg-primary/20 transition-all duration-300 transform hover:scale-110"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Phone className="h-4 w-4 sm:h-5 sm:w-5" />
                </MotionA>
              </div>
            </MotionDiv>
          </ScrollReveal>
        </MotionDiv>
      </div>
    </section>
  );
}
