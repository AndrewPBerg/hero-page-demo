import { cn } from "@/lib/utils"
import type React from "react"

interface GradientTextProps {
  children: React.ReactNode
  className?: string
  variant?: "blue" | "purple" | "gold" | "white"
}

export function GradientText({ children, className, variant = "blue" }: GradientTextProps) {
  const gradientClasses = {
    blue: "bg-gradient-to-r from-[#4D6A8F] via-[#17345A] to-[#788EAC] bg-clip-text text-transparent",
    purple: "bg-gradient-to-r from-[#6366F1] via-[#8B5CF6] to-[#D946EF] bg-clip-text text-transparent",
    gold: "bg-gradient-to-r from-[#F59E0B] via-[#FBBF24] to-[#F59E0B] bg-clip-text text-transparent",
    white: "bg-gradient-to-r from-white via-[#E5E7EB] to-[#D1D5DB] bg-clip-text text-transparent",
  }

  return <span className={cn(gradientClasses[variant], className)}>{children}</span>
}

