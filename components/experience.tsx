"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    title: "Founding Engineer",
    company: "Hebron Bites",
    period: "2022–Present",
    description:
      "Founded and built a food-delivery platform from the ground up",
  },
  {
    title: "Frontend Engineer",
    company: "Ohmsflex",
    period: "2024–Present",
    description: "Delivered enterprise solutions for banks and conglomerates",
  },
  {
    title: "Frontend Developer",
    company: "P2Vest Technologies",
    period: "2025–Present",
    description: "Intern → Full-time conversion",
  },
];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="experience"
      className="pb-32 pt-14 px-4 bg-linear-to-b from-black via-gray-900 to-black"
    >
      <div className="max-w-5xl mx-auto" ref={ref}>
        <motion.h2
          className="text-4xl md:text-6xl font-bold mb-16 text-center bg-linear-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          Experience
        </motion.h2>

        <div className="relative">
          {/* Timeline line */}
          <motion.div
            className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-linear-to-b from-cyan-500 via-blue-500 to-purple-500"
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            style={{ transformOrigin: "top" }}
          />

          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } flex-col md:gap-16`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                {/* Timeline dot */}
                <motion.div
                  className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-cyan-500 ring-4 ring-cyan-500/30 z-10"
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                />

                <div
                  className={`w-full md:w-5/12 ${
                    index % 2 === 0 ? "md:text-right" : "md:text-left"
                  } ml-12 md:ml-0`}
                >
                  <motion.div
                    className="bg-gray-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-lg p-6 hover:border-cyan-500/50 transition-colors group"
                    whileHover={{ scale: 1.02 }}
                  >
                    <Briefcase className="h-6 w-6 text-cyan-400 mb-3 inline-block" />
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                      {exp.title}
                    </h3>
                    <p className="text-cyan-400 font-semibold mb-2">
                      {exp.company}
                    </p>
                    <p className="text-gray-400 text-sm mb-3">{exp.period}</p>
                    <p className="text-gray-300">{exp.description}</p>
                  </motion.div>
                </div>

                <div className="hidden md:block w-5/12" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
