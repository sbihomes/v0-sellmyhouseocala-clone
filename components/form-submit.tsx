"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"
import { GooglePlacesInput } from "./google-places-input"
import { useFormContext } from "@/context/form-context"
import { CheckCircle2 } from "lucide-react"
import { track } from "@vercel/analytics"

export function SimpleAddressForm() {
  const { toast } = useToast()
  const [address, setAddress] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { setSharedAddress } = useFormContext()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!address.trim()) {
      toast({
        title: "Address Required",
        description: "Please enter your property address.",
        variant: "destructive",
      })
      return
    }

    setIsSubmitting(true)

    try {
      // Set the shared address
      setSharedAddress(address)

      // Track address submission
      track("address_submission", {
        location: "hero_form",
        addressLength: address.length,
      })

      // Show success toast
      toast({
        title: "Address Received!",
        description: "Please provide your email to get your cash offer.",
        variant: "default",
        duration: 3000,
        action: (
          <div className="flex items-center gap-2 text-green-600">
            <CheckCircle2 className="h-5 w-5" />
            <span>Success</span>
          </div>
        ),
      })

      // Scroll to detailed form
      const formSection = document.querySelector("#form-section")
      if (formSection) {
        const headerHeight = document.querySelector("header")?.offsetHeight || 0
        const elementPosition = formSection.getBoundingClientRect().top
        const offsetPosition = elementPosition + window.pageYOffset - headerHeight

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        })

        // Focus the email field after scrolling
        setTimeout(() => {
          const emailField = document.getElementById("email")
          if (emailField) {
            emailField.focus()
          }
        }, 1000) // Give time for the scroll to complete
      }
    } catch (error) {
      // Track error
      track("address_submission_error", {
        error: (error as Error).message,
      })

      toast({
        title: "Error",
        description: "There was a problem submitting your request. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
      <div className="relative flex-1">
        <GooglePlacesInput
          value={address}
          onChange={setAddress}
          placeholder="Enter your Ocala property address"
          required
          className="h-12 text-base"
        />
      </div>
      <Button
        type="submit"
        className="bg-red-600 hover:bg-red-700 h-12 px-6 font-bold text-white"
        disabled={isSubmitting}
        onClick={() => {
          // Track button click
          if (address.trim()) {
            track("address_button_click")
          }
        }}
      >
        {isSubmitting ? (
          <div className="flex items-center gap-2">
            <svg
              className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            SUBMITTING...
          </div>
        ) : (
          "GET A CASH OFFER"
        )}
      </Button>
    </form>
  )
}
