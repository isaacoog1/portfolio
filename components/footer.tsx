"use client";

import { motion } from "framer-motion";
import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialLinks = [
    { icon: Github, href: "https://github.com/isaacoog1", label: "GitHub" },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/oluwakorede-oguntuyo",
      label: "LinkedIn",
    },
    { icon: Mail, href: "mailto:oguntuyokoredeshile@gmail.com", label: "Email" },
  ];

  return (
    <footer className="relative pt-12 px-4 bg-[#0a0a0a] border-t border-[#1a1a1a]">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <motion.div
            className="flex flex-col md:flex-row items-center gap-2 text-gray-400 text-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span>© 2025 Oguntuyo Oluwakorede Isaac</span>
            <span className="hidden md:inline">•</span>
            <span>Crafted in Lagos, Nigeria</span>
          </motion.div>

          <motion.div
            className="flex items-center gap-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#00ff99] transition-colors"
                aria-label={social.label}
              >
                <social.icon className="h-5 w-5" />
              </a>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Button
              onClick={scrollToTop}
              variant="ghost"
              size="sm"
              className="text-gray-400 hover:text-[#00ff99] hover:bg-transparent"
            >
              <ArrowUp className="mr-2 h-4 w-4" />
              Back to top
            </Button>
          </motion.div>
        </div>

        {/* Easter egg */}
        <motion.div
          className="mt-8 text-center opacity-0 hover:opacity-100 transition-opacity duration-1000"
          initial={{ y: 20 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-xs text-gray-600">
            Thanks for scrolling all the way down!
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
