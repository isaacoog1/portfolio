"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      className="py-32 px-4 bg-black relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-linear-to-b from-black via-gray-900/50 to-black" />

      <div className="max-w-4xl mx-auto relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-8 bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            About Me
          </h2>

          <div className="space-y-6 text-lg md:text-xl text-gray-300 leading-relaxed">
            <motion.p
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-balance"
            >
              Founder turned enterprise frontend engineer. Built and scaled my
              own food-delivery startup (Hebron Bites) to 500+ users in 6 weeks,
              then shipped financial-grade systems for top-tier banks and
              conglomerates.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-balance"
            >
              Obsessed with performance, accessibility, and clean TypeScript
              code.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
