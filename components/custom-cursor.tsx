"use client"

import { useEffect, useState } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"

export default function CustomCursor() {
  const [cursorText, setCursorText] = useState("")
  const [isVisible, setIsVisible] = useState(false)
  const [isHovering, setIsHovering] = useState(false)

  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)

  const springConfig = { damping: 25, stiffness: 700 }
  const cursorXSpring = useSpring(cursorX, springConfig)
  const cursorYSpring = useSpring(cursorY, springConfig)

  useEffect(() => {
    // Hide default cursor on desktop only
    if (window.innerWidth > 768) {
      document.body.style.cursor = "none"
    }

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
      setIsVisible(true)
    }

    const handleMouseLeave = () => {
      setIsVisible(false)
    }

    // Detect section
    const detectSection = () => {
      const sections = [
        { id: "home", text: "Scroll ↓" },
        { id: "about", text: "" },
        { id: "projects", text: "View" },
        { id: "experience", text: "" },
        { id: "skills", text: "" },
        { id: "contact", text: "Say Hi" },
      ]

      for (const section of sections) {
        const element = document.getElementById(section.id)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            setCursorText(section.text)
            break
          }
        }
      }

      // Check if at footer
      const footer = document.querySelector("footer")
      if (footer) {
        const rect = footer.getBoundingClientRect()
        if (rect.top <= window.innerHeight) {
          setCursorText("↑ Top")
        }
      }
    }

    // Detect hovering on clickable elements
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.tagName === "A" || target.tagName === "BUTTON" || target.closest("a") || target.closest("button")) {
        setIsHovering(true)
        setCursorText("Click")
      } else {
        setIsHovering(false)
        detectSection()
      }
    }

    window.addEventListener("mousemove", moveCursor)
    window.addEventListener("mouseleave", handleMouseLeave)
    window.addEventListener("scroll", detectSection)
    window.addEventListener("mouseover", handleMouseOver)
    detectSection()

    return () => {
      window.removeEventListener("mousemove", moveCursor)
      window.removeEventListener("mouseleave", handleMouseLeave)
      window.removeEventListener("scroll", detectSection)
      window.removeEventListener("mouseover", handleMouseOver)
      document.body.style.cursor = "auto"
    }
  }, [cursorX, cursorY])

  // Hide on mobile
  if (typeof window !== "undefined" && window.innerWidth <= 768) {
    return null
  }

  return (
    <>
      {/* Main cursor dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-white rounded-full pointer-events-none z-100 mix-blend-difference"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: "-50%",
          translateY: "-50%",
          opacity: isVisible ? 1 : 0,
        }}
      />

      {/* Cursor text/ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-99"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isHovering || cursorText ? 1 : 0,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ duration: 0.2 }}
      >
        <div className="relative">
          <div className="w-16 h-16 border-2 border-[#00ff99] rounded-full flex items-center justify-center">
            <span className="text-[#00ff99] text-xs font-semibold">{cursorText}</span>
          </div>
        </div>
      </motion.div>
    </>
  )
}
