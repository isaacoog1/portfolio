"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Badge } from "@/components/ui/badge"

const skills = [
  "React.js",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "Tailwind CSS",
  "Redux/RTK",
  "TanStack Query",
  "Node.js",
  "AWS",
  "Framer Motion",
  "HTML5",
  "CSS",
  "CI/CD",
  "Figma",
  "Vercel",
  "Git/GitHub",
]

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="skills" className="pb-32 pt-14 px-4 bg-linear-to-b from-black via-gray-900 to-black">
      <div className="max-w-5xl mx-auto" ref={ref}>
        <motion.h2
          className="text-4xl md:text-6xl font-bold mb-16 text-center bg-linear-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          Skills & Technologies
        </motion.h2>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ scale: 1.05, rotate: 2 }}
            >
              <Badge
                variant="outline"
                className="w-full py-4 text-base justify-center bg-gray-900/50 backdrop-blur-sm border-cyan-500/30 text-cyan-400 hover:border-cyan-500 hover:bg-cyan-500/10 transition-all cursor-default"
              >
                {skill}
              </Badge>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
