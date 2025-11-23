"use client";

import { useState } from "react";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown, Download } from "lucide-react";
import Image from "next/image";

const techIcons = [
  { name: "React", color: "#61DAFB" },
  { name: "Next.js", color: "#FFFFFF" },
  { name: "TypeScript", color: "#3178C6" },
  { name: "Tailwind", color: "#06B6D4" },
  { name: "AWS", color: "#FF9900" },
];

export default function Hero() {
  const titles = [
    "Frontend Architect",
    "Founding Engineer",
    "React & TypeScript Expert",
  ];
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      color: string;
    }> = [];

    techIcons.forEach((tech, i) => {
      const angle = (i / techIcons.length) * Math.PI * 2;
      particles.push({
        x: canvas.width / 2 + Math.cos(angle) * 150,
        y: canvas.height / 2 + Math.sin(angle) * 150,
        vx: Math.random() * 0.5 - 0.25,
        vy: Math.random() * 0.5 - 0.25,
        radius: 30,
        color: tech.color,
      });
    });

    let animationId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color + "20";
        ctx.fill();
        ctx.strokeStyle = p.color + "60";
        ctx.lineWidth = 2;
        ctx.stroke();
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => cancelAnimationFrame(animationId);
  }, []);

  const handleScroll = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0a]"
    >
      <canvas ref={canvasRef} className="absolute inset-0 opacity-30" />

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="relative w-48 h-48 mx-auto group">
            <div className="absolute inset-0 rounded-full bg-linear-to-r from-cyan-200 to-cyan-500 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />
            <Image
              src="/images/me-2.jpeg"
              alt="Oguntuyo Oluwakorede Isaac"
              width={400}
              height={400}
              className="relative rounded-full w-full h-full object-cover border-4 border-[#1a1a1a] group-hover:border-cyan-600 transition-all duration-500 group-hover:scale-105"
              priority
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-balance"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <span className="text-[#e0e0e0]">Oluwakorede Oguntuyo</span>
          </motion.h1>
        </motion.div>

        <motion.div
          className="text-xl md:text-2xl lg:text-3xl text-cyan-100 mb-8 h-10 font-semibold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="inline-block"
          >
            <AnimatedTitle titles={titles} />
          </motion.span>
        </motion.div>

        <motion.p
          className="text-lg md:text-xl text-gray-400 mb-12 max-w-3xl mx-auto text-balance leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          I ship pixel-perfect, scalable interfaces for startups and enterprise
          clients — from solo MVPs to bank-grade financial systems. <br />Currently available for work.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.8 }}
        >
          <Button
            size="lg"
            className="bg-linear-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-6 text-lg group"
            onClick={() => handleScroll("projects")}
          >
            View Projects
            <ArrowDown className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 px-8 py-6 text-lg bg-transparent"
            onClick={() => window.open("/Oguntuyo Oluwakorede Resume.pdf", "_blank")}
          >
            <Download className="mr-2 h-5 w-5" />
            Download Résumé
          </Button>
        </motion.div>

        {/* <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3 }}
        >
          <ArrowDown className="h-8 w-8 text-[#00ff99]" />
        </motion.div> */}
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
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="inline-block font-semibold"
    >
      {titles[index]}
    </motion.span>
  );
}
