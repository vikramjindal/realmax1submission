import React from "react";
import Head from "next/head";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { useJoinUsModal } from "@/contexts/JoinUsModalContext";
import { 
  Building, 
  Building2,
  Users, 
  TrendingUp, 
  Home as HomeIcon,
  CheckCircle,
  Star,
  MapPin,
  Calendar,
  DollarSign,
  Zap,
  Target,
  Award,
  ArrowRight
} from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function PreConstruction() {
  const { openModal } = useJoinUsModal();
  const projects = [
    {
      id: 1,
      name: "Skyline Towers",
      location: "Downtown Toronto",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      priceFrom: "$650,000",
      completion: "Fall 2025",
      units: "450 units",
      status: "Selling Fast",
      features: ["Luxury Amenities", "Transit Access", "City Views"]
    },
    {
      id: 2,
      name: "Riverside Commons",
      location: "Mississauga",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      priceFrom: "$480,000",
      completion: "Spring 2026",
      units: "320 units",
      status: "Now Selling",
      features: ["Waterfront", "Family-Friendly", "Green Spaces"]
    },
    {
      id: 3,
      name: "Urban Heights",
      location: "Brampton",
      image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      priceFrom: "$420,000",
      completion: "Winter 2025",
      units: "280 units",
      status: "VIP Access",
      features: ["Modern Design", "Smart Home", "Retail Below"]
    }
  ];

  return (
    <>
      <Head>
        <title>Pre-Construction Properties | RE/MAX Excellence</title>
        <meta name="description" content="Unlock your dream home before it's built. Exclusive pre-construction opportunities for first-time buyers, investors, and families." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div className="bg-background min-h-screen">
        <Header />
        
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center overflow-hidden">
          {/* Background Image with Overlay */}
          <div 
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: 'url(https://dontdelete2005142.kloudbean.com/1762890586_Generated%20Image%20November%2012,%202025%20-%201_15AM.png)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-brand-dark-blue/90 via-brand-dark-blue/80 to-brand-dark-blue/90"></div>
          </div>
          
          {/* Left Company Pin Icon */}
          <div className="absolute left-8 top-32 z-10">
            <div className="relative">
              <Image 
                src="/images/company-pin-icon.png" 
                alt="Company Pin Icon" 
                width={60} 
                height={60} 
                className="opacity-80 animate-bounce shadow-2xl" 
              />
              <div className="absolute -top-3 -right-3 w-8 h-8 bg-brand-bright-red/60 rounded-full opacity-60 animate-pulse"></div>
              <div className="absolute -bottom-3 -left-3 w-6 h-6 bg-brand-bright-red/70 rounded-full opacity-70 animate-ping"></div>
            </div>
          </div>

          {/* Right Company Pin Icon */}
          <div className="absolute right-8 top-24 z-10">
            <div className="relative">
              <Image 
                src="/images/company-pin-icon.png" 
                alt="Company Pin Icon" 
                width={60} 
                height={60} 
                className="opacity-70 animate-bounce shadow-xl transform -rotate-12" 
              />
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-brand-dark-blue/80 rounded-full opacity-80 animate-pulse"></div>
            </div>
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
            <div className="flex items-center min-h-screen">
              <div className="text-left space-y-8 max-w-2xl">
                <h1 className="text-5xl lg:text-7xl font-black text-white leading-tight font-montserrat">
                  <span className="block">VIP ACCESS TO</span>
                  <span className="block text-brand-bright-red">
                    PRE-CONSTRUCTION
                  </span>
                  <span className="block">PROJECTS</span>
                </h1>
                
                <p className="text-2xl lg:text-3xl text-white font-semibold leading-relaxed">
                  Get exclusive VIP access to the best projects, prime locations, and builder incentives before they hit the market.
                </p>
                
                <div className="flex justify-start">
                  <Button onClick={openModal} className="bg-brand-bright-red hover:bg-brand-dark-red text-white font-bold px-10 py-5 text-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 rounded-lg flex items-center space-x-4">
                    <Building className="w-8 h-8" />
                    <span>Book Consultation</span>
                    <ArrowRight className="w-8 h-8" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Target Audience Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
                Perfect for <span className="text-brand-bright-red">Every Buyer</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Whether you're buying your first home, investing, or upgrading
              </p>
            </motion.div>

            <motion.div 
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid md:grid-cols-3 gap-8"
            >
              <motion.div variants={fadeInUp}>
                <Card className="h-full border-0 bg-white hover:shadow-lg transition-all duration-300 border border-red-100">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-brand-bright-red rounded-full flex items-center justify-center mx-auto mb-6">
                      <HomeIcon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">First-Time Buyers</h3>
                    <p className="text-muted-foreground mb-6">
                      Get into the market with lower down payments, extended deposit schedules, and first-time buyer incentives.
                    </p>
                    <ul className="text-left space-y-2 text-sm">
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-brand-bright-red mr-2" />
                        Lower initial deposits
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-brand-bright-red mr-2" />
                        Extended payment plans
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-brand-bright-red mr-2" />
                        Government incentives
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Card className="h-full border-0 bg-white hover:shadow-lg transition-all duration-300 border border-blue-100">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-brand-dark-blue rounded-full flex items-center justify-center mx-auto mb-6">
                      <TrendingUp className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">Investors</h3>
                    <p className="text-muted-foreground mb-6">
                      Maximize returns with pre-construction pricing, assignment opportunities, and rental income potential.
                    </p>
                    <ul className="text-left space-y-2 text-sm">
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-brand-dark-blue mr-2" />
                        Pre-construction pricing
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-brand-dark-blue mr-2" />
                        Assignment rights
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-brand-dark-blue mr-2" />
                        High rental demand
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Card className="h-full border-0 bg-white hover:shadow-lg transition-all duration-300 border border-red-100">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-brand-bright-red rounded-full flex items-center justify-center mx-auto mb-6">
                      <Users className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">Upgraders & Families</h3>
                    <p className="text-muted-foreground mb-6">
                      Move up to your dream home with modern amenities, larger spaces, and family-friendly communities.
                    </p>
                    <ul className="text-left space-y-2 text-sm">
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-brand-bright-red mr-2" />
                        Modern amenities
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-brand-bright-red mr-2" />
                        Family-friendly design
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-brand-bright-red mr-2" />
                        Community features
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Featured Projects */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
                Featured <span className="text-brand-bright-red">Projects</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Exclusive pre-construction opportunities available now
              </p>
            </motion.div>

            <motion.div 
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid lg:grid-cols-3 gap-8"
            >
              {projects.map((project, index) => (
                <motion.div key={project.id} variants={fadeInUp}>
                  <Card className="h-full overflow-hidden border-0 bg-white hover:shadow-lg transition-all duration-300 group">
                    <div className="relative">
                      <img 
                        src={project.image} 
                        alt={project.name}
                        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 right-4">
                        <span className="bg-brand-bright-red text-white px-3 py-1 rounded-full text-sm font-medium">
                          {project.status}
                        </span>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-2xl font-bold mb-2 group-hover:text-brand-bright-red transition-colors">
                        {project.name}
                      </h3>
                      <p className="text-muted-foreground mb-4 flex items-center">
                        <MapPin className="h-4 w-4 mr-2" />
                        {project.location}
                      </p>
                      
                      <div className="space-y-2 mb-6 text-sm">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Starting from:</span>
                          <span className="font-bold text-brand-bright-red">{project.priceFrom}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Completion:</span>
                          <span className="font-medium">{project.completion}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Total units:</span>
                          <span className="font-medium">{project.units}</span>
                        </div>
                      </div>

                      <div className="mb-6">
                        <div className="flex flex-wrap gap-2">
                          {project.features.map((feature, idx) => (
                            <span key={idx} className="bg-muted text-muted-foreground px-2 py-1 rounded text-xs">
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>

                      <Button onClick={openModal} className="w-full bg-brand-bright-red hover:bg-brand-dark-red text-white font-bold">
                        View Details
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>

            <div className="text-center mt-12">
              <Button onClick={openModal} size="lg" className="bg-brand-bright-red hover:bg-brand-dark-red text-white font-bold">
                View All Projects
              </Button>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
                Your Pre-Construction Journey
              </h2>
              <p className="text-xl text-muted-foreground">
                Simple steps to secure your dream home
              </p>
            </motion.div>

            <motion.div 
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid md:grid-cols-4 gap-8"
            >
              {[
                { step: "1", title: "Consultation", desc: "Discuss your needs, budget, and preferences with our experts", color: "red" },
                { step: "2", title: "Project Selection", desc: "Review curated projects that match your criteria", color: "blue" },
                { step: "3", title: "Secure Your Unit", desc: "Reserve your preferred unit with flexible deposit terms", color: "red" },
                { step: "4", title: "Move-In Ready", desc: "Enjoy your new home when construction is complete", color: "blue" }
              ].map((item, index) => (
                <motion.div key={index} variants={fadeInUp} className="text-center">
                  <div className={`w-16 h-16 ${item.color === 'red' ? 'bg-brand-bright-red' : 'bg-brand-dark-blue'} rounded-full flex items-center justify-center mx-auto mb-6`}>
                    <span className="text-2xl font-bold text-white">{item.step}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-brand-bright-red via-brand-medium-blue to-brand-dark-blue">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
                Let's Build Your Brand Together
              </h2>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button onClick={openModal} size="lg" className="bg-brand-bright-red hover:bg-brand-dark-red text-white font-bold px-8 py-4 text-xl">
                  Join Us
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
      
      {/* Footer */}
      <Footer />
    </>
  );
}