"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { useToast } from "@/hooks/use-toast"
import { Mail, CheckCircle2, Clock } from "lucide-react"
import { GooglePlacesInput } from "./google-places-input"
import { useFormContext } from "@/context/form-context"
import { SuccessNotification } from "./success-notification"
import { track } from "@vercel/analytics"

export function DetailedForm() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const { sharedAddress } = useFormContext()
  const emailInputRef = useRef<HTMLInputElement>(null)

  const [formData, setFormData] = useState({
    email: "",
    address: "",
  })

  // Update the address when sharedAddress changes
  useEffect(() => {
    if (sharedAddress) {
      setFormData((prev) => ({ ...prev, address: sharedAddress }))

      // Focus the email input if we have a shared address
      if (emailInputRef.current) {
        emailInputRef.current.focus()
      }
    }
  }, [sharedAddress])

  const handleAddressChange = (value: string) => {
    setFormData((prev) => ({ ...prev, address: value }))
  }

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, email: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/submit-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error("Failed to submit form")
      }

      // Track form submission event
      track("form_submission", {
        location: "detailed_form",
        hasAddress: Boolean(formData.address),
        hasEmail: Boolean(formData.email),
      })

      // Show success toast with 24-hour message
      toast({
        title: "Request Received!",
        description: "Thank you for your submission. We'll reach out with a cash offer within 24 hours!",
        variant: "default",
        duration: 8000,
        action: (
          <div className="flex items-center gap-2 text-green-600">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="h-5 w-5" />
              <Clock className="h-4 w-4" />
            </div>
          </div>
        ),
      })

      // Show the success notification
      setShowSuccess(true)

      // Reset form
      setFormData({
        email: "",
        address: "",
      })
    } catch (error) {
      // Track form error event
      track("form_error", {
        location: "detailed_form",
        error: (error as Error).message,
      })

      toast({
        title: "Error",
        description: "There was a problem submitting your form. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div className="space-y-4">
          <div className="relative">
            <Label htmlFor="address-input" className="text-base font-medium mb-1.5 block">
              Property Address
            </Label>
            <GooglePlacesInput
              id="address-input"
              value={formData.address}
              onChange={handleAddressChange}
              placeholder="123 Main St, Ocala, FL 34470"
              required
              className="h-12 text-base"
            />
          </div>

          <div className="relative">
            <Label htmlFor="email" className="text-base font-medium mb-1.5 block">
              Email Address
            </Label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
              <Input
                id="email"
                ref={emailInputRef}
                placeholder="john@example.com"
                type="email"
                value={formData.email}
                onChange={handleEmailChange}
                required
                className="h-12 pl-10 text-base"
              />
            </div>
          </div>
        </div>

        <Button
          type="submit"
          className="w-full bg-red-600 hover:bg-red-700 text-white font-bold text-lg h-14"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <div className="flex items-center gap-2">
              <svg
                className="animate-spin -ml-1 mr-2 h-5 w-5 text-white"
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
            "GET MY CASH OFFER"
          )}
        </Button>

        <div className="space-y-3">
          <div className="flex items-start gap-2">
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5 text-primary flex-shrink-0 mt-0.5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
            <span className="text-sm">No obligation - 100% free offer</span>
          </div>
          <div className="flex items-start gap-2">
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5 text-primary flex-shrink-0 mt-0.5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
            <span className="text-sm">We buy houses in any condition</span>
          </div>
          <div className="flex items-start gap-2">
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5 text-primary flex-shrink-0 mt-0.5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
            <span className="text-sm">Close on your timeline - as fast as 10 days</span>
          </div>
        </div>

        <p className="text-xs text-center text-muted-foreground">
          By submitting this form, you agree to receive communications from us. We respect your privacy and will never
          share your information.
        </p>
      </form>

      <SuccessNotification show={showSuccess} onClose={() => setShowSuccess(false)} />
    </>
  )
}
