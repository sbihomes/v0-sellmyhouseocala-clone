export function AboutSection() {
  return (
    <section className="py-16 bg-muted" id="about">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">About Us</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          <div>
            <img
              src="/placeholder.svg?height=400&width=500"
              alt="Sell My House Ocala Team"
              className="rounded-lg shadow-lg w-full"
            />
          </div>
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Trusted Local Home Buyers</h3>
            <p>
              At Sell My House Ocala, we're a team of local real estate investors who understand the Ocala market. We've
              helped countless homeowners sell their properties quickly and hassle-free.
            </p>
            <p>
              Our mission is simple: provide homeowners with a fair, fast, and transparent way to sell their houses
              without the stress and uncertainty of traditional real estate transactions.
            </p>
            <p>
              Whether you're facing foreclosure, dealing with a difficult property, relocating for work, or simply want
              to sell without the hassle, we're here to help with a straightforward process and fair cash offers.
            </p>
            <div className="pt-4">
              <h4 className="font-bold text-lg mb-2">Why Choose Us?</h4>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">✓</span>
                  <span>Local experts who understand the Ocala market</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">✓</span>
                  <span>Transparent process with no hidden fees</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">✓</span>
                  <span>Fast closings on your timeline</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">✓</span>
                  <span>We handle all the paperwork and details</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
