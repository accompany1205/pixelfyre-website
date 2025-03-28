import { Mail, MapPin, Phone } from "lucide-react"
import HeroSection from "@/components/hero-section"
import SectionHeading from "@/components/section-heading"
import ContactForm from "@/components/contact-form"

export default function ContactPage() {
  return (
    <div>
      {/* Hero Section */}
      <HeroSection
        title="Get in Touch"
        subtitle="Contact Us"
        description="Have questions about our products or services? We're here to help."
        primaryButtonText="Send a Message"
        primaryButtonLink="#contact-form"
        showGraphic={false}
      />

      {/* Contact Information */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <SectionHeading
                title="Contact Information"
                description="Reach out to us through any of these channels."
                alignment="left"
              />

              <div className="mt-8 space-y-6">
                <div className="flex items-start">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold">Our Location</h3>
                    <p className="mt-1 text-muted-foreground">
                      123 AI Boulevard, Suite 456
                      <br />
                      San Francisco, CA 94105
                      <br />
                      United States
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold">Email Us</h3>
                    <p className="mt-1 text-muted-foreground">
                      General Inquiries: info@pixelfyre.com
                      <br />
                      Sales: sales@pixelfyre.com
                      <br />
                      Support: support@pixelfyre.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold">Call Us</h3>
                    <p className="mt-1 text-muted-foreground">
                      Main Office: +1 (555) 123-4567
                      <br />
                      Sales Team: +1 (555) 987-6543
                      <br />
                      Support: +1 (555) 456-7890
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <h3 className="text-lg font-semibold">Office Hours</h3>
                <p className="mt-1 text-muted-foreground">
                  Monday - Friday: 9:00 AM - 6:00 PM (PST)
                  <br />
                  Saturday - Sunday: Closed
                </p>
              </div>
            </div>

            <div id="contact-form" className="rounded-lg border bg-card p-8 shadow-sm">
              <h2 className="mb-6 text-2xl font-bold">Send Us a Message</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 sm:py-24 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Visit Our Office"
            description="We're located in the heart of San Francisco's tech district."
          />
          <div className="mt-12 aspect-video overflow-hidden rounded-lg shadow-sm">
            {/* Placeholder for a map - in a real implementation, you would use Google Maps or similar */}
            <div className="h-full w-full bg-card flex items-center justify-center">
              <p className="text-muted-foreground">Interactive Map Would Be Embedded Here</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

