import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Check, MapPin, Mail } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-teal-600 mb-6">
              Get cash for your Ocala house.
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              We buy houses in Ocala, FL in any condition. Get a fair cash offer with no fees or commissions.
            </p>

            <div className="flex gap-4 mb-8">
              <Input placeholder="Enter your Ocala property address" className="flex-1" />
              <Button className="bg-red-600 hover:bg-red-700 text-white px-8">GET A CASH OFFER</Button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-teal-600" />
                <span className="text-sm">No Repairs</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-teal-600" />
                <span className="text-sm">No Fees</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-teal-600" />
                <span className="text-sm">No Commissions</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-teal-600" />
                <span className="text-sm">Close in 7 Days</span>
              </div>
            </div>
          </div>

          <div>
            <img
              src="/white-victorian-house-with-wrap-around-porch-green.jpg"
              alt="Beautiful house in Ocala"
              className="rounded-lg shadow-xl w-full"
            />
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section id="form-section" className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Get Your Cash Offer</h2>
            <p className="text-muted-foreground">
              Just enter your property address and email to receive a no-obligation cash offer for your Ocala home.
            </p>
          </div>

          <Card className="p-8">
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Property Address</label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input placeholder="123 Main St, Ocala, FL 34470" className="pl-10" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input type="email" placeholder="john@example.com" className="pl-10" />
                </div>
              </div>

              <Button className="w-full bg-red-600 hover:bg-red-700 text-white py-6 text-lg">GET MY CASH OFFER</Button>

              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-teal-600" />
                  <span className="text-sm">No obligation - 100% free offer</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-teal-600" />
                  <span className="text-sm">We buy houses in any condition</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-teal-600" />
                  <span className="text-sm">Close on your timeline - as fast as 7 days</span>
                </div>
              </div>

              <p className="text-xs text-muted-foreground text-center">
                By submitting this form, you agree to receive communications from us. We respect your privacy and will
                never share your information.
              </p>
            </form>
          </Card>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">How It Works</h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-teal-600">1</span>
            </div>
            <h3 className="text-xl font-bold mb-3">Contact Us</h3>
            <p className="text-muted-foreground">
              Fill out our simple form or call us. We'll gather basic information about your Ocala property.
            </p>
          </div>

          <div className="text-center">
            <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-yellow-600">2</span>
            </div>
            <h3 className="text-xl font-bold mb-3">Get Your Offer</h3>
            <p className="text-muted-foreground">
              We'll evaluate your property and present you with a fair, no-obligation cash offer.
            </p>
          </div>

          <div className="text-center">
            <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-yellow-600">3</span>
            </div>
            <h3 className="text-xl font-bold mb-3">Close On Your Timeline</h3>
            <p className="text-muted-foreground">
              Accept the offer and close on your timeline. Get cash in as little as 7 days.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-2">How fast can you buy my house?</h3>
              <p className="text-muted-foreground">
                We can close in as little as 7 days, or on your timeline. You decide when you want to close.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-2">Do I need to make repairs?</h3>
              <p className="text-muted-foreground">
                No. We buy houses in any condition. You don't need to make any repairs or improvements.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-2">Are there any fees or commissions?</h3>
              <p className="text-muted-foreground">
                No. We don't charge any fees or commissions. The offer we make is the amount you receive.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-2">What areas of Ocala do you buy in?</h3>
              <p className="text-muted-foreground">
                We buy houses throughout Ocala and surrounding areas including Silver Springs, Belleview, and Dunnellon.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to sell your Ocala house?</h2>
        <p className="text-lg text-muted-foreground mb-8">Get a fair cash offer with no obligations today.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-6 text-lg">GET A CASH OFFER</Button>
          <Button variant="outline" size="lg" className="px-8 py-6 text-lg bg-transparent" asChild>
            <a href="tel:708-299-5225">CALL 708-299-5225</a>
          </Button>
        </div>
      </section>
    </div>
  )
}
