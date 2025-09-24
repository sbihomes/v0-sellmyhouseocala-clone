"use client"

import type React from "react"

import type { ReactNode } from "react"

interface SmoothScrollLinkProps {
  href: string
  children: ReactNode
  className?: string
  onClick?: () => void
}

export function SmoothScrollLink({ href, children, className = "", onClick }: SmoothScrollLinkProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()

    // Get the target element
    const targetId = href.replace(/.*#/, "")
    const targetElement = document.getElementById(targetId)

    if (targetElement) {
      // Get header height to offset the scroll position
      const headerHeight = document.querySelector("header")?.offsetHeight || 0

      // Calculate the position to scroll to
      const elementPosition = targetElement.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight

      // Scroll to the element
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }

    // Call the onClick handler if provided
    if (onClick) {
      onClick()
    }
  }

  return (
    <a href={href} onClick={handleClick} className={className}>
      {children}
    </a>
  )
}
