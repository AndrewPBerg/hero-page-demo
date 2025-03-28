"use client"

import type React from "react"

import { useEffect, useRef } from "react"
import { GradientText } from "@/components/ui/gradient-text"
import { Shield } from "lucide-react"

export default function HeroSection() {
  const headingRef = useRef<HTMLHeadingElement>(null)
  const subheadingRef = useRef<HTMLParagraphElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Simple animations without GSAP
    const animateElement = (ref: React.RefObject<HTMLElement>, delay: number, initialY: number) => {
      if (!ref.current) return

      ref.current.style.opacity = "0"
      ref.current.style.transform = `translateY(${initialY}px)`

      setTimeout(() => {
        if (ref.current) {
          ref.current.style.transition = "opacity 0.8s ease, transform 0.8s ease"
          ref.current.style.opacity = "1"
          ref.current.style.transform = "translateY(0)"
        }
      }, delay)
    }

    animateElement(headingRef, 300, 50)
    animateElement(subheadingRef, 600, 30)
    animateElement(ctaRef, 900, 20)
    animateElement(imageRef, 600, 0)
  }, [])

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 pb-10 px-6 md:px-10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 md:gap-20 items-center">
        <div className="order-2 md:order-1">
          <h1
            ref={headingRef}
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight"
            style={{ opacity: 0 }}
          >
            <GradientText variant="white">DNS Fuzzing</GradientText>
            <span className="text-white block mt-2">Protecting Your Digital Identity</span>
          </h1>
          <p
            ref={subheadingRef}
            className="mt-6 text-lg md:text-xl text-white/80 max-w-lg leading-relaxed"
            style={{ opacity: 0 }}
          >
            Advanced security tools designed to detect and prevent domain name impersonation attacks, protecting your
            brand and customers from phishing attempts.
          </p>
          <div ref={ctaRef} className="mt-10 flex flex-wrap gap-4" style={{ opacity: 0 }}>
            <button className="bg-white text-[#17345A] px-6 py-3 rounded-full font-medium hover:bg-white/90 transition-colors flex items-center gap-2">
              <Shield className="w-5 h-5" />
              Get Protected
            </button>
            <button className="bg-transparent border border-white/30 text-white px-6 py-3 rounded-full font-medium hover:bg-white/10 transition-colors">
              Learn More
            </button>
          </div>
        </div>

        <div ref={imageRef} className="order-1 md:order-2 relative" style={{ opacity: 0 }}>
          <div className="relative w-full aspect-square max-w-md mx-auto">
            <div className="absolute inset-0 bg-gradient-to-br from-[#788EAC]/30 to-[#17345A]/30 rounded-3xl backdrop-blur-sm border border-white/20"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <Shield className="w-3/4 h-3/4 text-white/30" />
            </div>

            {/* Interactive hotspots */}
            <div className="absolute top-1/4 left-1/4 w-8 h-8 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center cursor-pointer group">
              <span className="w-3 h-3 rounded-full bg-primary group-hover:animate-pulse"></span>
              <div className="absolute left-full ml-2 bg-background/90 backdrop-blur-sm p-2 rounded text-xs w-40 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                Real-time domain monitoring and alerts
              </div>
            </div>

            <div className="absolute bottom-1/4 right-1/4 w-8 h-8 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center cursor-pointer group">
              <span className="w-3 h-3 rounded-full bg-primary group-hover:animate-pulse"></span>
              <div className="absolute right-full mr-2 bg-background/90 backdrop-blur-sm p-2 rounded text-xs w-40 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                Advanced AI-powered threat detection
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

