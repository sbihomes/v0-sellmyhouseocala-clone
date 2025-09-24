"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Phone, Menu, X } from "lucide-react"
import { SimpleAddressForm } from "@/components/form-submit"
import { SmoothScrollLink } from "@/components/smooth-scroll-link"
import { DetailedForm } from "@/components/detailed-form"
import { FormProvider } from "@/context/form-context"
import { useState } from "react"

export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setMobileMenuOpen(false)
  }

  return (
    <FormProvider>
      <div className="flex min-h-screen flex-col">
        <header className="border-b sticky top-0 bg-background z-50">
          <div className="container flex h-16 items-center justify-between py-4">
            <Link href="/" className="flex items-center gap-2 z-20">
              <span className="font-bold text-xl md:text-2xl">Sell My House Ocala</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <nav className="flex items-center gap-6">
                <SmoothScrollLink href="#how-it-works" className="text-sm font-medium hover:text-primary">
                  How it Works
                </SmoothScrollLink>
                <SmoothScrollLink href="#faq" className="text-sm font-medium hover:text-primary">
                  FAQ
                </SmoothScrollLink>
              </nav>
              <div className="flex items-center">
                <a href="tel:3525551234" className="flex items-center gap-2 text-xl font-bold text-red-600">
                  <Phone className="h-5 w-5" />
                  352-634-8211
                </a>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center gap-4 z-20">
              <a href="tel:3525551234" className="flex items-center gap-1 text-lg font-bold text-red-600">
                <Phone className="h-5 w-5" />
                <span className="sr-only sm:not-sr-only">352-555-1234</span>
              </a>
              <button
                onClick={toggleMobileMenu}
                className="p-2 text-gray-600 focus:outline-none"
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
              <div className="fixed inset-0 bg-background z-10 pt-20 px-6">
                <nav className="flex flex-col items-center gap-6 text-lg">
                  <SmoothScrollLink
                    href="#how-it-works"
                    className="py-3 font-medium hover:text-primary w-full text-center border-b"
                    onClick={closeMobileMenu}
                  >
                    How it Works
                  </SmoothScrollLink>
                  <SmoothScrollLink
                    href="#faq"
                    className="py-3 font-medium hover:text-primary w-full text-center border-b"
                    onClick={closeMobileMenu}
                  >
                    FAQ
                  </SmoothScrollLink>
                  <SmoothScrollLink
                    href="#form-section"
                    className="py-3 font-medium bg-red-600 text-white rounded-md px-6 mt-4 w-full text-center"
                    onClick={closeMobileMenu}
                  >
                    Get a Cash Offer
                  </SmoothScrollLink>
                </nav>
              </div>
            )}
          </div>
        </header>

        <main className="flex-1">
          {/* Hero Section */}
          <section className="relative overflow-hidden border-b" id="top">
            <div className="container grid md:grid-cols-2 items-center py-8 md:py-16">
              <div className="space-y-4 md:space-y-6">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary tracking-tight">
                  Get cash for your
                  <br />
                  Ocala house.
                </h1>
                <p className="text-base sm:text-lg text-muted-foreground max-w-md">
                  We buy houses in Ocala, FL in any condition. Get a fair cash offer with no fees or commissions.
                </p>

                {/* Mobile Hero Image */}
                <div className="block md:hidden relative mt-4 mb-6">
                  <Image
                    src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=1000"
                    alt="Run-down house in Florida"
                    width={600}
                    height={400}
                    className="object-cover rounded-lg shadow-md w-full h-48"
                    priority
                  />
                </div>

                <div className="max-w-md">
                  <SimpleAddressForm />
                </div>
                <div className="flex flex-wrap gap-x-4 gap-y-2 pt-2">
                  <div className="flex items-center gap-2">
                    <svg
                      viewBox="0 0 24 24"
                      className="h-5 w-5 text-primary"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                    <span className="text-sm">No Repairs</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg
                      viewBox="0 0 24 24"
                      className="h-5 w-5 text-primary"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                    <span className="text-sm">No Fees</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg
                      viewBox="0 0 24 24"
                      className="h-5 w-5 text-primary"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                    <span className="text-sm">No Commissions</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg
                      viewBox="0 0 24 24"
                      className="h-5 w-5 text-primary"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                    <span className="text-sm">Close in 7 Days</span>
                  </div>
                </div>
              </div>
              <div className="hidden md:block relative mt-8 md:mt-0">
                <Image
                  src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=1000"
                  alt="Run-down house in Florida"
                  width={600}
                  height={400}
                  className="object-cover rounded-lg shadow-md"
                  priority
                />
              </div>
            </div>
          </section>

          {/* Form Section */}
          <section className="py-10 md:py-16 bg-muted" id="form-section">
            <div className="container">
              <div className="max-w-xl mx-auto">
                <div className="text-center mb-6 md:mb-8">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4">Get Your Cash Offer</h2>
                  <p className="text-muted-foreground text-sm sm:text-base px-4 md:px-0">
                    Just enter your property address and email to receive a no-obligation cash offer for your Ocala
                    home.
                  </p>
                </div>
                <div className="bg-background p-5 md:p-8 rounded-lg shadow-md mx-4 md:mx-0">
                  <DetailedForm />
                </div>
              </div>
            </div>
          </section>

          {/* How It Works Section */}
          <section className="py-10 md:py-16" id="how-it-works">
            <div className="container px-4 md:px-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 md:mb-12">How It Works</h2>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 max-w-4xl mx-auto">
                <div className="p-5 md:p-6 rounded-lg text-center bg-green-100">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center mx-auto mb-4 bg-amber-400">
                    <span className="text-lg md:text-xl font-bold text-primary">1</span>
                  </div>
                  <h3 className="text-lg font-bold mb-2">Contact Us</h3>
                  <p className="text-sm text-muted-foreground">
                    Fill out our simple form or call us. We'll gather basic information about your Ocala property.
                  </p>
                </div>
                <div className="p-5 md:p-6 rounded-lg text-center bg-green-100">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center mx-auto mb-4 bg-amber-400">
                    <span className="text-lg md:text-xl font-bold text-primary">2</span>
                  </div>
                  <h3 className="text-lg font-bold mb-2">Get Your Offer</h3>
                  <p className="text-sm text-muted-foreground">
                    We'll evaluate your property and present you with a fair, no-obligation cash offer.
                  </p>
                </div>
                <div className="p-5 md:p-6 rounded-lg text-center sm:col-span-2 md:col-span-1 text-black bg-green-100">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center mx-auto mb-4 bg-amber-400">
                    <span className="text-lg md:text-xl font-bold text-primary">3</span>
                  </div>
                  <h3 className="text-lg font-bold mb-2">Close On Your Timeline</h3>
                  <p className="text-sm text-muted-foreground">
                    Accept the offer and close on your timeline. Get cash in as little as 7 days.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="py-10 md:py-16 bg-muted" id="faq">
            <div className="container px-4 md:px-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 md:mb-12">Frequently Asked Questions</h2>
              <div className="grid sm:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
                <div className="bg-background p-5 md:p-6 rounded-lg">
                  <h3 className="text-lg font-bold mb-2">How fast can you buy my house?</h3>
                  <p className="text-muted-foreground text-sm">
                    We can close in as little as 7 days, or on your timeline. You decide when you want to close.
                  </p>
                </div>
                <div className="bg-background p-5 md:p-6 rounded-lg">
                  <h3 className="text-lg font-bold mb-2">Do I need to make repairs?</h3>
                  <p className="text-muted-foreground text-sm">
                    No. We buy houses in any condition. You don't need to make any repairs or improvements.
                  </p>
                </div>
                <div className="bg-background p-5 md:p-6 rounded-lg">
                  <h3 className="text-lg font-bold mb-2">Are there any fees or commissions?</h3>
                  <p className="text-muted-foreground text-sm">
                    No. We don't charge any fees or commissions. The offer we make is the amount you receive.
                  </p>
                </div>
                <div className="bg-background p-5 md:p-6 rounded-lg">
                  <h3 className="text-lg font-bold mb-2">What areas of Ocala do you buy in?</h3>
                  <p className="text-muted-foreground text-sm">
                    We buy houses throughout Ocala and surrounding areas including Silver Springs, Belleview, and
                    Dunnellon.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="relative py-16 md:py-20 overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
              <Image
                src="https://images.unsplash.com/photo-1590736969955-71cc94901144?q=80&w=1200"
                alt="Downtown Ocala, Florida"
                fill
                className="object-cover"
                priority={false}
              />
              {/* Dark overlay for text readability */}
              <div className="absolute inset-0 text-yellow-100 bg-yellow-100"></div>
            </div>

            {/* Content */}
            <div className="container text-center px-4 md:px-6 relative z-10">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 md:mb-4 text-black">
                Ready to sell your Ocala house?
              </h2>
              <p className="text-base md:text-lg mb-6 max-w-2xl mx-auto text-black">
                Get a fair cash offer with no obligations today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white font-bold px-6 md:px-8" asChild>
                  <SmoothScrollLink href="#form-section">GET A CASH OFFER</SmoothScrollLink>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="font-bold px-6 md:px-8 border-white hover:bg-white hover:text-black text-black bg-green-300"
                  asChild
                >
                  <a href="tel:3525551234">CALL 352-634-8211</a>
                </Button>
              </div>
            </div>
          </section>
        </main>

        <footer className="border-t py-8">
          <div className="container px-4 md:px-6">
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <h3 className="font-bold text-lg mb-4">Sell My House Ocala</h3>
                <p className="text-muted-foreground text-sm">
                  We buy houses in Ocala and surrounding areas for cash. Get a fair offer with no obligations.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-4">Contact</h3>
                <p className="text-muted-foreground text-sm mb-2">
                  Phone:{" "}
                  <a href="tel:3525551234" className="hover:text-primary">
                    352-634-8211
                  </a>
                </p>
                <p className="text-muted-foreground text-sm">
                  Email:{" "}
                  <a href="mailto:info@sellmyhouseocala.com" className="hover:text-primary">
                    jack@sellmyhouseocala.com
                  </a>
                </p>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-4">Quick Links</h3>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li>
                    <SmoothScrollLink href="#how-it-works" className="hover:text-primary">
                      How It Works
                    </SmoothScrollLink>
                  </li>
                  <li>
                    <SmoothScrollLink href="#faq" className="hover:text-primary">
                      FAQ
                    </SmoothScrollLink>
                  </li>
                  <li>
                    <a href="#" className="hover:text-primary">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-primary">
                      Terms of Service
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground space-y-2">
              <p>© {new Date().getFullYear()} Sell My House Ocala. All rights reserved.</p>
              <p>
                Designed and hosted by{" "}
                <a
                  href="https://sbihomes.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Designs by SBI HOMES   
                </a>
              </p>
            </div>
          </div>
        </footer>
      </div>
    </FormProvider>
  )
}
