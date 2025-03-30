"use client"

import { useRef, useEffect, type ReactNode } from "react"

interface ScrollAnimationWrapperProps {
  children: ReactNode
  direction?: "left" | "right"
  delay?: number
  className?: string
}

export default function ScrollAnimationWrapper({
  children,
  direction = "left",
  delay = 0,
  className = "",
}: ScrollAnimationWrapperProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add a small delay before adding the class to make the animation feel more deliberate
            setTimeout(() => {
              if (ref.current) {
                ref.current.classList.add("animate-slide-in")
              }
            }, 100)
            observer.unobserve(entry.target)
          }
        })
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [])

  return (
    <div className={`${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  )
}

