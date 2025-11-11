import React from "react";
import Head from "next/head";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { useJoinUsModal } from "@/contexts/JoinUsModalContext";
import { 
  Search, 
  MapPin, 
  Home as HomeIcon, 
  DollarSign, 
  Calendar,
  CheckCircle,
  Star,
  Filter,
  Heart,
  Share2
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

export default function Buy() {
  const { openModal } = useJoinUsModal();
  const featuredListings = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      price: "$1,250,000",
      address: "123 Maple Street, Toronto, ON",
      beds: 4,
      baths: 3,
      sqft: "2,500",
      type: "Detached"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      price: "$850,000",
      address: "456 Oak Avenue, Mississauga, ON",
      beds: 3,
      baths: 2,
      sqft: "1,800",
      type: "Townhouse"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      price: "$650,000",
      address: "789 Pine Road, Brampton, ON",
      beds: 2,
      baths: 2,
      sqft: "1,200",
      type: "Condo"
    }
  ];

  return (
    <>
      <Head>
        <title>Buy Your Dream Home | RE/MAX Excellence</title>
        <meta name="description" content="Find your perfect home with RE/MAX Excellence. Browse exclusive listings, get expert guidance, and make your homeownership dreams come true." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div className="bg-background min-h-screen">
        <Header />
        
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-brand-medium-blue/10 via-white to-brand-dark-blue/10 overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-brand-medium-blue/30 to-brand-dark-blue/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-brand-dark-blue/30 to-brand-medium-blue/20 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-brand-bright-red/20 to-brand-dark-red/10 rounded-full blur-3xl"></div>
          </div>
          
          {/* Creative Floating Balloon Elements */}
          <div className="absolute right-8 top-16 z-10">
            <div className="relative">
              <Image 
                src="/images/company-pin-icon.png" 
                alt="RE/MAX Balloon" 
                width={80} 
                height={80} 
                className="w-20 h-20 object-contain opacity-80 animate-pulse transform rotate-6"
              />
              <div className="absolute -top-3 -right-3 w-10 h-10 bg-gradient-to-br from-brand-medium-blue to-brand-dark-blue rounded-full opacity-60 animate-bounce"></div>
              <div className="absolute -bottom-3 -left-3 w-8 h-8 bg-gradient-to-br from-brand-bright-red to-brand-dark-red rounded-full opacity-70 animate-ping"></div>
            </div>
          </div>
          
          <div className="absolute left-8 top-32 z-10">
            <div className="relative">
              <Image 
                src="/images/company-pin-icon.png" 
                alt="RE/MAX Balloon" 
                width={56} 
                height={56} 
                className="w-14 h-14 object-contain opacity-70 animate-bounce transform -rotate-6"
              />
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-brand-bright-red to-brand-dark-red rounded-full opacity-80 animate-pulse"></div>
            </div>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h1 className="text-5xl lg:text-6xl font-black text-slate-900 mb-8 font-montserrat leading-tight">
                Find Your <span className="text-transparent bg-gradient-to-r from-brand-medium-blue via-brand-dark-blue to-brand-bright-red bg-clip-text">Dream Home</span>
              </h1>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8 font-arial leading-relaxed">
                Discover exclusive listings, get expert guidance, and make your homeownership dreams come true with Ontario's fastest-growing brokerage.
              </p>
            </motion.div>

            {/* Search Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="max-w-4xl mx-auto"
            >
              <Card className="p-6 bg-white/80 backdrop-blur-sm border-0">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1">
                    <div className="relative">
                      <MapPin className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                      <Input 
                        placeholder="Enter city, neighborhood, or postal code"
                        className="pl-10 h-12"
                      />
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button onClick={openModal} size="lg" className="h-12 bg-brand-bright-red hover:bg-brand-dark-red text-white font-bold">
                      <Filter className="h-5 w-5 mr-2" />
                      Filters
                    </Button>
                    <Button onClick={openModal} size="lg" className="h-12 bg-brand-bright-red hover:bg-brand-dark-red text-white font-bold">
                      <Search className="h-5 w-5 mr-2" />
                      Search
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
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
                Why Buy With <span className="text-primary">RE/MAX Excellence</span>
              </h2>
            </motion.div>

            <motion.div 
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid md:grid-cols-3 gap-8"
            >
              <motion.div variants={fadeInUp}>
                <Card className="h-full border-0 bg-gradient-to-br from-primary/5 to-primary/10 hover:from-primary/10 hover:to-primary/15 transition-all duration-300">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Search className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">Exclusive Access</h3>
                    <p className="text-muted-foreground">
                      Get first access to new listings and off-market properties before they hit the public market.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Card className="h-full border-0 bg-gradient-to-br from-secondary/5 to-secondary/10 hover:from-secondary/10 hover:to-secondary/15 transition-all duration-300">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                      <DollarSign className="h-8 w-8 text-secondary" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">Expert Negotiation</h3>
                    <p className="text-muted-foreground">
                      Our experienced agents negotiate the best deals and guide you through every step of the process.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Card className="h-full border-0 bg-gradient-to-br from-primary/5 to-primary/10 hover:from-primary/10 hover:to-primary/15 transition-all duration-300">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">Full Support</h3>
                    <p className="text-muted-foreground">
                      From mortgage pre-approval to closing, we provide comprehensive support throughout your journey.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Featured Listings */}
        <section className="py-20 bg-muted/30 relative overflow-hidden">
          {/* Creative Background Elements */}
          <div className="absolute right-8 top-8 z-10">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-brand-medium-blue to-brand-dark-blue rounded-full opacity-40 animate-pulse"></div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-br from-brand-bright-red to-brand-dark-red rounded-full opacity-60 animate-bounce"></div>
            </div>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
                Featured Listings
              </h2>
              <p className="text-xl text-muted-foreground">
                Discover some of our most popular properties
              </p>
            </motion.div>

            <motion.div 
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid md:grid-cols-3 gap-8"
            >
              {featuredListings.map((listing, index) => (
                <motion.div key={listing.id} variants={fadeInUp}>
                  <Card className="overflow-hidden border-0 bg-white hover:shadow-lg transition-all duration-300">
                    <div className="relative">
                      <img 
                        src={listing.image} 
                        alt={listing.address}
                        className="w-full h-64 object-cover"
                      />
                      <div className="absolute top-4 right-4 flex gap-2">
                        <Button onClick={openModal} size="sm" className="bg-brand-bright-red hover:bg-brand-dark-red text-white font-bold">
                          <Heart className="h-4 w-4" />
                        </Button>
                        <Button onClick={openModal} size="sm" className="bg-brand-bright-red hover:bg-brand-dark-red text-white font-bold">
                          <Share2 className="h-4 w-4" />
                        </Button>
                      </div>
                      <div className="absolute bottom-4 left-4">
                        <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                          {listing.type}
                        </span>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="text-2xl font-bold text-primary">{listing.price}</h3>
                        <div className="flex items-center">
                          <Star className="h-4 w-4 text-brand-bright-red fill-current" />
                          <span className="text-sm text-muted-foreground ml-1">4.8</span>
                        </div>
                      </div>
                      <p className="text-muted-foreground mb-4 flex items-center">
                        <MapPin className="h-4 w-4 mr-2" />
                        {listing.address}
                      </p>
                      <div className="flex justify-between text-sm text-muted-foreground">
                        <span>{listing.beds} beds</span>
                        <span>{listing.baths} baths</span>
                        <span>{listing.sqft} sqft</span>
                      </div>
                      <Button onClick={openModal} className="w-full mt-4 bg-brand-bright-red hover:bg-brand-dark-red text-white font-bold">
                        View Details
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>

            <div className="text-center mt-12">
              <Button onClick={openModal} size="lg" className="bg-brand-bright-red hover:bg-brand-dark-red text-white font-bold">
                View All Listings
              </Button>
            </div>
          </div>
        </section>

        {/* Process Section */}
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
                Your Home Buying Journey
              </h2>
              <p className="text-xl text-muted-foreground">
                We make the process simple and stress-free
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
                { step: "1", title: "Get Pre-Approved", desc: "Secure your financing and know your budget" },
                { step: "2", title: "Search Properties", desc: "Browse listings and schedule viewings" },
                { step: "3", title: "Make an Offer", desc: "Submit competitive offers with expert guidance" },
                { step: "4", title: "Close the Deal", desc: "Complete inspections and finalize your purchase" }
              ].map((item, index) => (
                <motion.div key={index} variants={fadeInUp} className="text-center">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl font-bold text-primary-foreground">{item.step}</span>
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