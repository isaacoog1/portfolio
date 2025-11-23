"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Hebron Bites",
    subtitle: "Food Delivery for University Campuses",
    description:
      "Founded & shipped full MVP solo in 10 weeks. 500+ active users in first 6 weeks. Complete v2 rebuild with admin dashboard + waiter portal + wallet system.",
    tech: ["React", "TypeScript", "Tailwind", "Node.js"],
    image: "/modern-food-delivery-app-interface.jpg",
    live: "https://www.hebronbites.com",
  },
  {
    title: "Identity Verification & KYC SDK",
    subtitle: "Production web SDK for financial applications",
    description:
      "Plug-and-play for web & mobile wrappers. Secure ID capture + facial verification used in production financial applications.",
    tech: ["React", "TypeScript", "Web Components"],
    image: "/identity-verification-kyc-interface.jpg",
    // live: "#",
  },
  {
    title: "Enterprise HR Recruitment Portal",
    subtitle: "Top-Tier Bank",
    description:
      "Candidate, HR admin, and third-party vendor portals. Full hiring lifecycle management. Sole frontend developer.",
    tech: ["React", "Redux", "TypeScript", "Ant Design"],
    image: "/enterprise-hr-recruitment-dashboard.jpg",
  },
  {
    title: "Employee Loan Platform",
    subtitle: "Salary-Deduction System (In Development)",
    description:
      "Loan application + direct debit repayments with HR/finance dashboards. Currently building.",
    tech: ["React", "TypeScript", "Tailwind"],
    image: "/loan-management-dashboard.jpg",
  },
  {
    title: "SPE Lagos Nigeria Section",
    subtitle: "Official Website + CMS (Volunteer)",
    description:
      "Complete public site + admin content portal. Replacing old static site.",
    tech: ["Next.js 15", "Tailwind", "Ant Design"],
    image: "/professional-organization-website.jpg",
    // live: "#",
    // github: "#",
  },
  {
    title: "Portfolio Website",
    subtitle: "Personal portfolio & digital presence",
    description:
      "Minimalist dark-mode portfolio with smooth animations, custom cursor, and 98+ Lighthouse performance.",
    tech: ["Next.js 15", "Tailwind", "Shadcn/ui", "Framer Motion"],
    image: "/professional-organization-website.jpg",
    live: "https://isaacog.vercel.app",
    github: "#",
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="projects"
      className="pb-32 pt-14 px-4 bg-black relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center, var(--tw-gradient-stops))] from-cyan-900/20 via-black to-black" />

      <div className="max-w-7xl mx-auto relative z-10" ref={ref}>
        <motion.h2
          className="text-4xl md:text-6xl font-bold mb-16 text-center bg-linear-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          Featured Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="group relative overflow-hidden bg-gray-900/50 backdrop-blur-sm border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300 h-full flex flex-col">
                <div className="absolute inset-0 bg-linear-to-br from-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* <div className="relative overflow-hidden aspect-video">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />
                </div> */}

                <div className="p-6 flex flex-col grow relative">
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-cyan-400 text-sm mb-3 font-semibold">
                    {project.subtitle}
                  </p>
                  <p className="text-gray-300 mb-4 grow text-balance">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <Badge
                        key={i}
                        variant="secondary"
                        className="bg-cyan-500/10 text-cyan-400 border-cyan-500/30"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    {project?.live && (
                      <a
                        href={project.live}
                        className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        <span className="text-sm">Live</span>
                      </a>
                    )}
                    {project?.github && (
                      <a
                        href={project.github}
                        className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="h-4 w-4" />
                        <span className="text-sm">Code</span>
                      </a>
                    )}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
