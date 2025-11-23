"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown, Download } from "lucide-react";
import Image from "next/image";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
} from "react-icons/si";
import { FaAws } from "react-icons/fa6";

const techIcons = [
  { name: "React", Icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", Icon: SiNextdotjs, color: "#FFFFFF" },
  { name: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
  { name: "Tailwind", Icon: SiTailwindcss, color: "#06B6D4" },
  { name: "AWS", Icon: FaAws, color: "#FF9900" },
];

export default function Hero() {
  const titles = [
    "Frontend Architect",
    "Founding Engineer",
    "React & TypeScript Expert",
  ];

  const handleScroll = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0a]"
    >
      {/* Infinite floating tech icons across full screen */}
      <div className="absolute inset-0 pointer-events-none">
        {techIcons.map((tech, i) => {
          const duration = 40 + i * 8; // 40–72s per icon
          const startX = Math.random() * 100;
          const startY = Math.random() * 100;

          return (
            <motion.div
              key={tech.name}
              className="absolute"
              initial={{
                x: `${startX}vw`,
                y: `${startY}vh`,
                opacity: 0,
              }}
              animate={{
                x: [`${startX}vw`, `${(startX + 50) % 100}vw`, `${startX}vw`],
                y: [`${startY}vh`, `${(startY + 40) % 100}vh`, `${startY}vh`],
                opacity: [0, 0.6, 0.6, 0],
              }}
              transition={{
                duration,
                repeat: Infinity,
                ease: "linear",
                delay: i * 3,
              }}
              style={{
                left: 0,
                top: 0,
                x: "-50%",
                y: "-50%",
              }}
            >
              <motion.div
                animate={{
                  rotate: [0, 360],
                  y: [0, -20, 0],
                }}
                transition={{
                  rotate: { duration: 30, repeat: Infinity, ease: "linear" },
                  y: { duration: 12, repeat: Infinity, ease: "easeInOut" },
                }}
                className="text-6xl md:text-8xl opacity-70 drop-shadow-2xl"
                style={{ color: tech.color }}
              >
                <tech.Icon />
              </motion.div>
            </motion.div>
          );
        })}
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-10"
        >
          <div className="relative w-48 h-48 mx-auto group">
            <div className="absolute inset-0 rounded-full bg-linear-to-r from-cyan-500 to-blue-600 opacity-0 group-hover:opacity-40 blur-3xl transition-opacity duration-500" />
            <Image
              src="/images/me-2.jpeg"
              alt="Oguntuyo Oluwakorede Isaac"
              width={400}
              height={400}
              className="relative rounded-full w-full h-full object-cover border-4 border-[#1a1a1a] group-hover:border-cyan-500 transition-all duration-500 group-hover:scale-105 shadow-2xl"
              priority
            />
          </div>
        </motion.div>

        {/* Name */}
        <motion.h1
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-[#e0e0e0] tracking-tight"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
        >
          Oluwakorede Oguntuyo
        </motion.h1>

        {/* Rotating Title */}
        <motion.div
          className="text-2xl md:text-3xl lg:text-4xl text-cyan-400 mb-8 h-12 font-semibold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <AnimatedTitle titles={titles} />
        </motion.div>

        {/* Description */}
        <motion.p
          className="text-lg md:text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          I ship pixel-perfect, scalable interfaces for startups and enterprise
          clients — from solo MVPs to bank-grade financial systems.
          <br className="hidden sm:block" />
          Currently available for work.
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-5 justify-center items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.8 }}
        >
          <Button
            size="lg"
            onClick={() => handleScroll("projects")}
            className="bg-cyan-500 hover:bg-cyan-400 text-black font-bold px-10 py-6 text-lg rounded-full shadow-2xl shadow-cyan-500/40 transition-all duration-300 group"
          >
            View My Work
            <ArrowDown className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 px-10 py-6 text-lg rounded-full backdrop-blur-sm transition-all"
            onClick={() => window.open("/Oguntuyo Oluwakorede Resume.pdf", "_blank")}
          >
            <Download className="mr-2 h-5 w-5" />
            Download Résumé
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

function AnimatedTitle({ titles }: { titles: string[] }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % titles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [titles.length]);

  return (
    <motion.span
      key={index}
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -25 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="inline-block"
    >
      {titles[index]}
    </motion.span>
  );
}