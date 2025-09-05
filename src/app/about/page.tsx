"use client";

import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import { 
  Crown, 
  Gem, 
  Heart, 
  Shield, 
  Star, 
  Users, 
  Sparkles,
  Clock,
  MapPin,
  Phone,
  Mail
} from "lucide-react";

const stats = [
  { number: "25+", label: "Years of Experience", icon: Clock },
  { number: "10,000+", label: "Happy Customers", icon: Users },
  { number: "500+", label: "Unique Designs", icon: Gem },
  { number: "100%", label: "Authentic Gold", icon: Shield }
];

const values = [
  {
    icon: Crown,
    title: "Craftsmanship Excellence",
    description: "Every piece is handcrafted by skilled artisans using traditional techniques passed down through generations."
  },
  {
    icon: Gem,
    title: "Premium Quality",
    description: "We use only the finest 22K and 18K gold, ensuring each piece meets the highest standards of purity and beauty."
  },
  {
    icon: Heart,
    title: "Customer Satisfaction",
    description: "Your happiness is our priority. We provide lifetime polish service and personalized attention to every customer."
  },
  {
    icon: Shield,
    title: "Trust & Authenticity",
    description: "Every piece comes with a certificate of authenticity, guaranteeing the quality and purity of your jewelry."
  }
];

const team = [
  {
    name: "Vinay Kumar",
    role: "Master Craftsman & Founder",
    experience: "25+ years",
    description: "With over two decades of experience in gold jewelry making, Vinay brings traditional techniques and modern innovation to every piece."
  },
  {
    name: "Priya Sharma",
    role: "Design Director",
    experience: "15+ years",
    description: "Priya&apos;s creative vision and understanding of contemporary trends help create jewelry that&apos;s both timeless and fashionable."
  },
  {
    name: "Rajesh Patel",
    role: "Quality Assurance",
    experience: "20+ years",
    description: "Rajesh ensures every piece meets our exacting standards, from material selection to final inspection."
  }
];

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-primary/5">
          <div className="absolute top-10 left-10 w-32 h-32 border border-primary/20 rounded-full animate-pulse"></div>
          <div className="absolute top-20 right-20 w-24 h-24 border border-secondary/30 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/4 w-40 h-40 border border-primary/15 rounded-full animate-pulse delay-2000"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
              <Crown className="w-4 h-4 text-primary animate-pulse" />
              <span className="text-sm font-medium text-primary uppercase tracking-wider">Our Story</span>
              <Sparkles className="w-4 h-4 text-primary animate-pulse" />
            </div>
            
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-foreground mb-6">
              About <span className="text-primary">Vnay Gold Creations</span>
            </h1>
                            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              For over two decades, we have been crafting exquisite gold jewelry that celebrates life&apos;s most precious moments. 
              
              Our commitment to quality, authenticity, and customer satisfaction has made us a trusted name in the jewelry industry.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Reveal key={index} y={20} once>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-foreground mb-2">{stat.number}</div>
                  <div className="text-muted-foreground font-medium">{stat.label}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <Reveal y={20} once>
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">
                  A Legacy of <span className="text-primary">Excellence</span>
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Founded in 1998 by Master Craftsman Vinay Kumar, Vnay Gold Creations began as a small workshop 
                  with a simple mission: to create beautiful, authentic gold jewelry that would be treasured for generations.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  What started as a family business has grown into a trusted name in the jewelry industry, 
                  serving thousands of customers across the region. Our commitment to traditional craftsmanship 
                  combined with modern design sensibilities sets us apart.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Every piece we create is a testament to our dedication to quality, authenticity, and the 
                  timeless beauty of gold jewelry. We believe that jewelry is not just an accessory, but a 
                  symbol of love, celebration, and life&apos;s precious moments.
                </p>
              </div>
            </Reveal>
            
            <Reveal y={20} once delay={200}>
              <div className="relative">
                <div className="aspect-[4/3] bg-gradient-to-br from-primary/10 via-secondary/5 to-primary/5 rounded-2xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-8xl mb-4">👨‍🎨</div>
                    <p className="text-muted-foreground">Master Craftsman at Work</p>
                  </div>
                </div>
                
                {/* Floating decorative elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center animate-bounce delay-1000">
                  <Sparkles className="w-4 h-4 text-primary" />
                </div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-secondary/20 rounded-full flex items-center justify-center animate-pulse delay-2000">
                  <Star className="w-3 h-3 text-secondary" />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
              Our <span className="text-primary">Values</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              These core principles guide everything we do, from design to customer service
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Reveal key={index} y={20} once>
                <div className="text-center group">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                    <value.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
              Meet Our <span className="text-primary">Team</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The skilled artisans and experts behind every beautiful piece
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Reveal key={index} y={20} once>
                <div className="text-center group">
                  <div className="w-32 h-32 bg-gradient-to-br from-primary/10 via-secondary/5 to-primary/5 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-105 transition-transform duration-300">
                    <div className="text-6xl">👨‍💼</div>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{member.name}</h3>
                  <p className="text-primary font-medium mb-2">{member.role}</p>
                  <p className="text-sm text-muted-foreground mb-4">{member.experience}</p>
                  <p className="text-muted-foreground leading-relaxed">{member.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
              Visit Our <span className="text-primary">Workshop</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experience our craftsmanship firsthand and see how your jewelry is created
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Reveal y={20} once>
              <div className="text-center group">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                  <MapPin className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">Location</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Main Street, Gold Market<br />
                  City Center, State 123456<br />
                  India
                </p>
              </div>
            </Reveal>

            <Reveal y={20} once delay={200}>
              <div className="text-center group">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                  <Phone className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">Phone</h3>
                <p className="text-muted-foreground leading-relaxed">
                  +91 98765 43210<br />
                  +91 87654 32109<br />
                  Mon-Sat: 10AM-8PM
                </p>
              </div>
            </Reveal>

            <Reveal y={20} once delay={400}>
              <div className="text-center group">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                  <Mail className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">Email</h3>
                <p className="text-muted-foreground leading-relaxed">
                  info@vnaygold.com<br />
                  orders@vnaygold.com<br />
                  We respond within 24 hours
                </p>
              </div>
            </Reveal>
          </div>

          <div className="text-center mt-12">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <span className="mr-2">📅</span>
              Book a Visit
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
