"use client"

import type React from "react"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Github, Linkedin, Mail, Calendar } from "lucide-react"

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [formState, setFormState] = useState({ name: "", email: "", message: "" })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setSubmitted(true)
    setFormState({ name: "", email: "", message: "" })

    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section id="contact" className="pb-32 pt-14 px-4 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-t from-cyan-900/20 via-black to-black" />

      <div className="max-w-5xl mx-auto relative z-10" ref={ref}>
        <motion.h2
          className="text-4xl md:text-6xl font-bold mb-8 text-center bg-linear-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          Get In Touch
        </motion.h2>

        <motion.p
          className="text-center text-gray-400 text-lg mb-12 max-w-2xl mx-auto text-balance"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {"Let's build something amazing together. Drop me a message or schedule a call."}
        </motion.p>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  placeholder="Your Name"
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  required
                  className="bg-gray-900/50 border-cyan-500/30 focus:border-cyan-500 text-white placeholder:text-gray-500"
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="your.email@example.com"
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  required
                  className="bg-gray-900/50 border-cyan-500/30 focus:border-cyan-500 text-white placeholder:text-gray-500"
                />
              </div>
              <div>
                <Textarea
                  placeholder="Your message..."
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  required
                  rows={6}
                  className="bg-gray-900/50 border-cyan-500/30 focus:border-cyan-500 text-white placeholder:text-gray-500 resize-none"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-linear-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white py-6 text-lg"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : submitted ? "Message Sent! ✓" : "Send Message"}
              </Button>
            </form>
          </motion.div>

          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Connect with me</h3>
              <div className="space-y-4">
                <a
                  href="https://github.com/isaacoog1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-gray-300 hover:text-cyan-400 transition-colors group"
                >
                  <Github className="h-6 w-6 group-hover:scale-110 transition-transform" />
                  <span>GitHub</span>
                </a>
                <a
                  href="https://linkedin.com/in/oluwakorede-oguntuyo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-gray-300 hover:text-cyan-400 transition-colors group"
                >
                  <Linkedin className="h-6 w-6 group-hover:scale-110 transition-transform" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href="mailto:oguntuyokoredeshile@gmail.com"
                  className="flex items-center gap-4 text-gray-300 hover:text-cyan-400 transition-colors group"
                >
                  <Mail className="h-6 w-6 group-hover:scale-110 transition-transform" />
                  <span>oguntuyokoredeshile@gmail.com</span>
                </a>
                <a
                  href="https://calendly.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-gray-300 hover:text-cyan-400 transition-colors group"
                >
                  <Calendar className="h-6 w-6 group-hover:scale-110 transition-transform" />
                  <span>Book a 15-min chat</span>
                </a>
              </div>
            </div>

            <div className="bg-gray-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-lg p-6">
              <p className="text-gray-300">
                <span className="text-cyan-400 font-semibold">Location:</span> Lagos, Nigeria 🇳🇬
              </p>
              <p className="text-gray-300 mt-2">
                <span className="text-cyan-400 font-semibold">Availability:</span> Open to freelance & full-time
                opportunities
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
