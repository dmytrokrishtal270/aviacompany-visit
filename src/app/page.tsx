"use client";

import { useState } from "react";

// Icons as SVG components
const PlaneIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"/>
  </svg>
);

const HotelIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2Z"/>
    <path d="m9 16 .348-.24c1.465-1.013 3.84-1.013 5.304 0L15 16"/>
    <path d="M8 7h.01"/><path d="M16 7h.01"/><path d="M12 7h.01"/>
    <path d="M12 11h.01"/><path d="M16 11h.01"/><path d="M8 11h.01"/>
    <path d="M10 22v-6.5m4 0V22"/>
  </svg>
);

const PackageIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16.5 9.4 7.55 4.24"/>
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
    <polyline points="3.29 7 12 12 20.71 7"/><line x1="12" x2="12" y1="22" y2="12"/>
  </svg>
);

const SupportIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0z"/>
  </svg>
);

const WhatsAppIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const TelegramIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
  </svg>
);

const EmailIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
  </svg>
);

const PhoneIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>
);

const ClockIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
  </svg>
);

const MapPinIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>
  </svg>
);

const ArrowRightIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
  </svg>
);

const CheckIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 6 9 17l-5-5"/>
  </svg>
);

const CalendarIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/>
  </svg>
);

const UserIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
  </svg>
);

const MessageIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
  </svg>
);

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    destination: "",
    dates: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setSubmitted(true);
    setFormData({ name: "", contact: "", destination: "", dates: "", message: "" });
    
    setTimeout(() => setSubmitted(false), 5000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const services = [
    {
      icon: <PlaneIcon className="w-8 h-8" />,
      title: "Flight Booking",
      description: "Access to thousands of flights worldwide with competitive prices and flexible booking options.",
    },
    {
      icon: <HotelIcon className="w-8 h-8" />,
      title: "Hotel Reservations",
      description: "Book accommodations ranging from budget-friendly to luxury hotels across the globe.",
    },
    {
      icon: <PackageIcon className="w-8 h-8" />,
      title: "Travel Packages",
      description: "Complete flight + hotel packages designed to save you time and money on your travels.",
    },
    {
      icon: <SupportIcon className="w-8 h-8" />,
      title: "Customer Support",
      description: "Dedicated support team available to assist you throughout your booking journey.",
    },
  ];

  const steps = [
    {
      number: "01",
      title: "Submit Your Request",
      description: "Tell us your travel preferences, destination, and dates.",
    },
    {
      number: "02",
      title: "We Select the Best Options",
      description: "Our team curates the best flight and hotel options for you.",
    },
    {
      number: "03",
      title: "We Confirm & Book",
      description: "Once you approve, we handle all booking confirmations.",
    },
  ];

  return (
    <main className="min-h-screen bg-background">
      {/* Background Effects */}
      <div className="fixed inset-0 bg-grid opacity-50 pointer-events-none" />
      <div className="fixed inset-0 bg-radial pointer-events-none" />
      
      {/* Top Bar */}
      <header className="fixed top-0 left-0 right-0 z-50 glass">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-muted text-sm">Powered by</span>
            <span className="font-bold text-accent">KD digitalee</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="https://wa.me/yourphone" target="_blank" rel="noopener noreferrer" 
               className="text-muted hover:text-accent transition-colors p-2 rounded-full hover:bg-surface-light">
              <WhatsAppIcon />
            </a>
            <a href="https://t.me/yourusername" target="_blank" rel="noopener noreferrer"
               className="text-muted hover:text-accent transition-colors p-2 rounded-full hover:bg-surface-light">
              <TelegramIcon />
            </a>
            <a href="mailto:info@example.com"
               className="text-muted hover:text-accent transition-colors p-2 rounded-full hover:bg-surface-light">
              <EmailIcon />
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 pb-16 px-4 overflow-hidden">
        <div className="container mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6" style={{ fontFamily: 'var(--font-syne)' }}>
            <span className="gradient-text">Aerobooker</span>
            <br />
            <span className="text-foreground">Your Travel Journey Starts Here</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted max-w-2xl mx-auto mb-10">
            Your gateway to seamless <span className="text-accent">flight bookings</span> and <span className="text-accent-secondary">hotel reservations</span>
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#contact" className="btn-primary">
              Leave a Request
              <ArrowRightIcon className="w-5 h-5" />
            </a>
            <a href="#about" className="btn-secondary">
              Learn More
            </a>
          </div>

          {/* Under Construction Badge - at bottom */}
          <div className="mt-12 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/30">
            <span className="relative flex h-3 w-3">
              <span className="relative inline-flex rounded-full h-3 w-3 bg-accent"></span>
            </span>
            <span className="text-accent font-medium">Site Under Development — Launching Soon</span>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 relative">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: 'var(--font-syne)' }}>
              About <span className="gradient-text">Aerobooker</span>
            </h2>
          </div>
          
          <div className="card text-center">
            <p className="text-lg text-muted leading-relaxed mb-6">
              <strong className="text-foreground">Aerobooker</strong> is a travel technology platform by KD digitalee OÜ, 
              an Estonian-based company specializing in intermediation services for accommodation and flight bookings. 
              Based in Tallinn, we are dedicated to revolutionizing the way you plan and book your journeys.
            </p>
            <p className="text-lg text-muted leading-relaxed">
              Whether you&apos;re planning a business trip, family vacation, or a romantic getaway, 
              our comprehensive booking system ensures you find the perfect travel arrangements at 
              competitive prices. We partner with leading airlines and hotel chains worldwide to 
              bring you exclusive deals and seamless booking experiences.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-8 mt-8 pt-8 border-t border-border">
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">500+</div>
                <div className="text-sm text-muted">Partner Airlines</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent-secondary">10K+</div>
                <div className="text-sm text-muted">Hotels Worldwide</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">24/7</div>
                <div className="text-sm text-muted">Support Available</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 bg-surface/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: 'var(--font-syne)' }}>
              Our <span className="gradient-text">Services</span>
            </h2>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              Comprehensive travel solutions designed to make your journey effortless
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="card group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-accent/10 text-accent group-hover:bg-accent group-hover:text-background transition-colors">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                    <p className="text-muted">{service.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: 'var(--font-syne)' }}>
              How It <span className="gradient-text">Works</span>
            </h2>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              Simple steps to book your perfect travel experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-accent to-accent-secondary mb-6 animate-pulse-glow">
                  <span className="text-2xl font-bold text-background">{step.number}</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-muted">{step.description}</p>
                
                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-accent to-transparent" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact / Lead Form Section */}
      <section id="contact" className="py-20 px-4 bg-surface/50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: 'var(--font-syne)' }}>
              Get In <span className="gradient-text">Touch</span>
            </h2>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              Leave your travel inquiry and we&apos;ll get back to you with the best options
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="space-y-6">
              <div className="card">
                <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <a href="tel:+3726803160" className="flex items-center gap-4 text-muted hover:text-accent transition-colors">
                    <div className="p-3 rounded-xl bg-accent/10 text-accent">
                      <PhoneIcon />
                    </div>
                    <div>
                      <div className="text-sm text-muted">Phone</div>
                      <div className="text-foreground">+372 680 3160</div>
                    </div>
                  </a>
                  <a href="mailto:krishtaldigital@gmail.com" className="flex items-center gap-4 text-muted hover:text-accent transition-colors">
                    <div className="p-3 rounded-xl bg-accent/10 text-accent">
                      <EmailIcon />
                    </div>
                    <div>
                      <div className="text-sm text-muted">Email</div>
                      <div className="text-foreground">krishtaldigital@gmail.com</div>
                    </div>
                  </a>
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-accent/10 text-accent">
                      <MapPinIcon />
                    </div>
                    <div>
                      <div className="text-sm text-muted">Address</div>
                      <div className="text-foreground">Sõpruse pst 192-160, Mustamäe<br/>Tallinn 13423, Estonia</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-xl bg-accent/10 text-accent">
                      <ClockIcon />
                    </div>
                    <div>
                      <div className="text-sm text-muted">Working Hours</div>
                      <div className="text-foreground">Mon - Fri: 9:00 AM - 6:00 PM</div>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="mt-8 pt-6 border-t border-border">
                  <div className="text-sm text-muted mb-4">Connect with us</div>
                  <div className="flex items-center gap-3">
                    <a href="https://wa.me/yourphone" target="_blank" rel="noopener noreferrer"
                       className="p-3 rounded-xl bg-surface-light text-muted hover:text-green-500 hover:bg-green-500/10 transition-all">
                      <WhatsAppIcon />
                    </a>
                    <a href="https://t.me/yourusername" target="_blank" rel="noopener noreferrer"
                       className="p-3 rounded-xl bg-surface-light text-muted hover:text-blue-400 hover:bg-blue-400/10 transition-all">
                      <TelegramIcon />
                    </a>
                    <a href="mailto:info@example.com"
                       className="p-3 rounded-xl bg-surface-light text-muted hover:text-accent hover:bg-accent/10 transition-all">
                      <EmailIcon />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="card">
              <h3 className="text-xl font-semibold mb-6">Leave a Request</h3>
              
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mb-4">
                    <CheckIcon className="w-8 h-8 text-green-500" />
                  </div>
                  <h4 className="text-xl font-semibold mb-2">Thank You!</h4>
                  <p className="text-muted">We&apos;ve received your request and will get back to you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="relative">
                    <UserIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-muted w-5 h-5" />
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="input"
                      style={{ paddingLeft: '48px' }}
                    />
                  </div>
                  
                  <div className="relative">
                    <EmailIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-muted w-5 h-5" />
                    <input
                      type="text"
                      name="contact"
                      placeholder="Phone or Email"
                      value={formData.contact}
                      onChange={handleInputChange}
                      required
                      className="input"
                      style={{ paddingLeft: '48px' }}
                    />
                  </div>
                  
                  <div className="relative">
                    <MapPinIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-muted w-5 h-5" />
                    <input
                      type="text"
                      name="destination"
                      placeholder="Destination"
                      value={formData.destination}
                      onChange={handleInputChange}
                      className="input"
                      style={{ paddingLeft: '48px' }}
                    />
                  </div>
                  
                  <div className="relative">
                    <CalendarIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-muted w-5 h-5" />
                    <input
                      type="text"
                      name="dates"
                      placeholder="Travel Dates (e.g., Dec 20-27, 2025)"
                      value={formData.dates}
                      onChange={handleInputChange}
                      className="input"
                      style={{ paddingLeft: '48px' }}
                    />
                  </div>
                  
                  <div className="relative">
                    <MessageIcon className="absolute left-4 top-4 text-muted w-5 h-5" />
                    <textarea
                      name="message"
                      placeholder="Additional Message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className="input resize-none"
                      style={{ paddingLeft: '48px' }}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary w-full justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="w-5 h-5 border-2 border-background/30 border-t-background rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Submit Request
                        <ArrowRightIcon className="w-5 h-5" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-border">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Company Info */}
            <div>
              <h4 className="text-xl font-bold mb-4 gradient-text">Aerobooker</h4>
              <p className="text-muted text-sm leading-relaxed mb-3">
                Your trusted partner for flight bookings and hotel reservations. 
                We&apos;re building something amazing for travelers worldwide.
              </p>
              <div className="text-xs text-muted space-y-1">
                <p>KD digitalee OÜ</p>
                <p>Registry code: 17390123</p>
              </div>
            </div>

            {/* Contact Details */}
            <div>
              <h4 className="font-semibold mb-4">Contact Details</h4>
              <div className="space-y-2 text-sm text-muted">
                <a href="tel:+3726803160" className="flex items-center gap-2 hover:text-accent transition-colors">
                  <PhoneIcon className="w-4 h-4" />
                  +372 680 3160
                </a>
                <a href="mailto:krishtaldigital@gmail.com" className="flex items-center gap-2 hover:text-accent transition-colors">
                  <EmailIcon className="w-4 h-4" />
                  krishtaldigital@gmail.com
                </a>
                <div className="flex items-start gap-2">
                  <MapPinIcon className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Sõpruse pst 192-160, Mustamäe, Tallinn 13423, Estonia</span>
                </div>
              </div>
            </div>

            {/* Working Hours */}
            <div>
              <h4 className="font-semibold mb-4">Working Hours</h4>
              <div className="space-y-2 text-sm text-muted">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span>10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-sm text-muted">
              © 2025 Aerobooker — Site under construction. All rights reserved.
            </div>
            <div className="flex items-center gap-2 text-sm">
              <span className="text-muted">Developed by</span>
              <span className="font-bold text-accent">KD digitalee</span>
            </div>
          </div>
        </div>
      </footer>
      </main>
  );
}
