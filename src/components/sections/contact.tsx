"use client";
import { useState } from "react";
import { MapPin, Phone, Mail, Linkedin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import ScrollReveal from "@/components/ui/scroll-reveal";
import Image from "next/image";
import { MotionDiv } from "../ui/motion";

export default function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Location",
      value: "Vakkom, Trivandrum, Kerala",
      color: "text-primary",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+91 9048778629",
      color: "text-primary",
    },
    {
      icon: Mail,
      title: "Email",
      value: "bibinvakkom@gmail.com",
      color: "text-primary",
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      value: "https://www.linkedin.com/in/bibin-b-biju",
      color: "text-primary",
    },
  ];

  return (
    <section id="contact" className="py-20 relative">
      {/* Background Image */}
      <Image
        src="/images/backgrounds/contact.png"
        alt="Professional networking and business communication"
        fill
        className="object-cover opacity-10 z-0"
        priority
      />

      <div className="container mx-auto px-6 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              <span className="gradient-text">Get In Touch</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8"></div>
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
              Ready to bring your ideas to life? Let&apos;s discuss your next project
              and create something amazing together.
            </p>
          </div>
        </ScrollReveal>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-stretch">
            {/* Contact Info */}
            <ScrollReveal delay={0.2}>
              <div className="glass rounded-xl p-6 sm:p-8 h-full flex flex-col">
                <h3 className="text-2xl font-semibold mb-8 text-primary">
                  Contact Information
                </h3>
                <div className="space-y-6 flex-grow flex flex-col justify-center">
                  {contactInfo.map((item, index) => (
                    <MotionDiv
                      key={index}
                      className="flex items-center glass rounded-lg p-4"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * index }}
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="glass w-12 h-12 rounded-xl flex items-center justify-center mr-4">
                        <item.icon className={`${item.color}`} />
                      </div>
                      <div>
                        <div className="font-medium">{item.title}</div>
                        <div className="text-muted-foreground text-sm">
                          {item.value}
                        </div>
                      </div>
                    </MotionDiv>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Contact Form */}
            <ScrollReveal delay={0.4}>
              <div className="glass rounded-xl p-6 sm:p-8 h-full flex flex-col">
                <h3 className="text-2xl font-semibold mb-8 text-primary">
                  Send a Message
                </h3>
                <form
                  onSubmit={handleSubmit}
                  className="space-y-6 flex-grow flex flex-col"
                >
                  <div>
                    <Input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="glass bg-transparent border border-border focus:border-primary"
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="glass bg-transparent border border-border focus:border-primary"
                    />
                  </div>
                  <div>
                    <Input
                      type="text"
                      name="subject"
                      placeholder="Subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="glass bg-transparent border border-border focus:border-primary"
                    />
                  </div>
                  <div>
                    <Textarea
                      name="message"
                      placeholder="Your Message"
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      className="glass bg-transparent border border-border focus:border-primary resize-none"
                    />
                  </div>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full glass py-4 rounded-xl hover:bg-primary/20 transition-all duration-300 transform hover:scale-105 animate-glow bg-transparent border-2 border-primary text-primary hover:text-primary-foreground hover:bg-primary mt-auto"
                  >
                    {isSubmitting ? (
                      <MotionDiv
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        className="mr-2"
                      >
                        <Send className="h-4 w-4" />
                      </MotionDiv>
                    ) : (
                      <Send className="mr-2 h-4 w-4" />
                    )}
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
