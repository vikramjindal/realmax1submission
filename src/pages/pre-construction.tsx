import React from "react";
import Head from "next/head";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Input } from "@/components/ui/input";
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
        <section className="relative py-20 bg-white overflow-hidden">
          {/* Decorative RE/MAX Pin Icons */}
          <div className="absolute left-8 top-16 z-10 opacity-60">
            <Image 
              src="/images/company-pin-icon.png" 
              alt="RE/MAX Pin" 
              width={60} 
              height={60} 
              className="w-15 h-15 object-contain"
            />
          </div>
          
          <div className="absolute right-16 top-24 z-10 opacity-50">
            <Image 
              src="/images/company-pin-icon.png" 
              alt="RE/MAX Pin" 
              width={80} 
              height={80} 
              className="w-20 h-20 object-contain"
            />
          </div>

          <div className="absolute right-8 bottom-32 z-10 opacity-40">
            <Image 
              src="/images/company-pin-icon.png" 
              alt="RE/MAX Pin" 
              width={50} 
              height={50} 
              className="w-12 h-12 object-contain"
            />
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                {/* Badge */}
                <div className="inline-flex items-center bg-gradient-to-r from-orange-100 to-yellow-100 rounded-full px-4 py-2 mb-6">
                  <span className="text-orange-600 font-semibold text-sm">🎯 Early Investment Access</span>
                </div>

                <h1 className="text-5xl lg:text-6xl font-black text-slate-900 mb-6 leading-tight">
                  VIP Access to the Hottest{" "}
                  <span className="text-transparent bg-gradient-to-r from-orange-500 via-yellow-500 to-orange-600 bg-clip-text">
                    Pre-Construction
                  </span>{" "}
                  Projects
                </h1>
                
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                  Get exclusive VIP access to the best projects, prime locations, and builder incentives before they hit the market.
                </p>
                
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg rounded-md">
                  Book Consultation
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-6 shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="Pre-Construction Development"
                    className="w-full rounded-2xl"
                  />
                </div>
              </motion.div>
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
                Perfect for <span className="text-primary">Every Buyer</span>
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
                <Card className="h-full border-0 bg-gradient-to-br from-primary/5 to-primary/10 hover:from-primary/10 hover:to-primary/15 transition-all duration-300">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                      <HomeIcon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">First-Time Buyers</h3>
                    <p className="text-muted-foreground mb-6">
                      Get into the market with lower down payments, extended deposit schedules, and first-time buyer incentives.
                    </p>
                    <ul className="text-left space-y-2 text-sm">
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-primary mr-2" />
                        Lower initial deposits
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-primary mr-2" />
                        Extended payment plans
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-primary mr-2" />
                        Government incentives
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Card className="h-full border-0 bg-gradient-to-br from-secondary/5 to-secondary/10 hover:from-secondary/10 hover:to-secondary/15 transition-all duration-300">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                      <TrendingUp className="h-8 w-8 text-secondary" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">Investors</h3>
                    <p className="text-muted-foreground mb-6">
                      Maximize returns with pre-construction pricing, assignment opportunities, and rental income potential.
                    </p>
                    <ul className="text-left space-y-2 text-sm">
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-secondary mr-2" />
                        Pre-construction pricing
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-secondary mr-2" />
                        Assignment rights
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-secondary mr-2" />
                        High rental demand
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Card className="h-full border-0 bg-gradient-to-br from-primary/5 to-primary/10 hover:from-primary/10 hover:to-primary/15 transition-all duration-300">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Users className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">Upgraders & Families</h3>
                    <p className="text-muted-foreground mb-6">
                      Move up to your dream home with modern amenities, larger spaces, and family-friendly communities.
                    </p>
                    <ul className="text-left space-y-2 text-sm">
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-primary mr-2" />
                        Modern amenities
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-primary mr-2" />
                        Family-friendly design
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-primary mr-2" />
                        Community features
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* AI/Tech Section */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
                  AI-Powered <span className="text-primary">Market Intelligence</span>
                </h2>
                <p className="text-xl text-muted-foreground mb-8">
                  Our advanced technology analyzes market trends, developer track records, and investment potential to help you make informed decisions.
                </p>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                      <Target className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Smart Project Analysis</h3>
                      <p className="text-muted-foreground">AI evaluates location, developer history, and market conditions to identify the best opportunities.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center">
                      <Zap className="h-6 w-6 text-secondary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Predictive Pricing</h3>
                      <p className="text-muted-foreground">Advanced algorithms predict future property values and rental income potential.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center">
                      <Award className="h-6 w-6 text-purple-500" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Risk Assessment</h3>
                      <p className="text-muted-foreground">Comprehensive risk analysis helps you make confident investment decisions.</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8">
                  <img 
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="AI Analytics Dashboard"
                    className="w-full rounded-lg"
                  />
                </div>
              </motion.div>
            </div>
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
                Featured <span className="text-primary">Projects</span>
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
                        <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                          {project.status}
                        </span>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                        {project.name}
                      </h3>
                      <p className="text-muted-foreground mb-4 flex items-center">
                        <MapPin className="h-4 w-4 mr-2" />
                        {project.location}
                      </p>
                      
                      <div className="space-y-2 mb-6 text-sm">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Starting from:</span>
                          <span className="font-bold text-primary">{project.priceFrom}</span>
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

                      <Button className="w-full bg-primary hover:bg-primary/90">
                        View Details
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>

            <div className="text-center mt-12">
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                View All Projects
              </Button>
            </div>
          </div>
        </section>

        {/* Pre-Construction Flyers Section - Client Request */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
                Pre-Construction <span className="text-primary">Flyers & Marketing</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Actual marketing materials and flyers - not generic listings
              </p>
            </motion.div>

            <motion.div 
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {/* Skyline Towers Flyer */}
              <motion.div variants={fadeInUp}>
                <Card className="h-full border-0 bg-gradient-to-br from-blue-50 to-indigo-100 hover:shadow-xl transition-all duration-300 group">
                  <CardContent className="p-6">
                    <div className="text-center mb-6">
                      <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                        <Building2 className="h-10 w-10 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-blue-800 mb-2">SKYLINE TOWERS</h3>
                      <p className="text-blue-600 font-semibold">Downtown Toronto</p>
                    </div>
                    
                    <div className="space-y-3 mb-6">
                      <div className="bg-white/60 rounded-lg p-3 text-center">
                        <div className="text-2xl font-bold text-blue-800">$650,000</div>
                        <div className="text-sm text-blue-600">Starting From</div>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <div className="bg-white/60 rounded-lg p-2 text-center">
                          <div className="text-sm font-bold text-blue-800">FALL 2025</div>
                          <div className="text-xs text-blue-600">Completion</div>
                        </div>
                        <div className="bg-white/60 rounded-lg p-2 text-center">
                          <div className="text-sm font-bold text-blue-800">450</div>
                          <div className="text-xs text-blue-600">Units</div>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2 mb-6">
                      <div className="flex items-center space-x-2">
                        <Star className="h-4 w-4 text-yellow-500" />
                        <span className="text-sm text-blue-700">Luxury Amenities</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Star className="h-4 w-4 text-yellow-500" />
                        <span className="text-sm text-blue-700">Transit Access</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Star className="h-4 w-4 text-yellow-500" />
                        <span className="text-sm text-blue-700">City Views</span>
                      </div>
                    </div>

                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                      Download Flyer
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Riverside Commons Flyer */}
              <motion.div variants={fadeInUp}>
                <Card className="h-full border-0 bg-gradient-to-br from-green-50 to-emerald-100 hover:shadow-xl transition-all duration-300 group">
                  <CardContent className="p-6">
                    <div className="text-center mb-6">
                      <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                        <Building2 className="h-10 w-10 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-green-800 mb-2">RIVERSIDE COMMONS</h3>
                      <p className="text-green-600 font-semibold">Mississauga</p>
                    </div>
                    
                    <div className="space-y-3 mb-6">
                      <div className="bg-white/60 rounded-lg p-3 text-center">
                        <div className="text-2xl font-bold text-green-800">$480,000</div>
                        <div className="text-sm text-green-600">Starting From</div>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <div className="bg-white/60 rounded-lg p-2 text-center">
                          <div className="text-sm font-bold text-green-800">SPRING 2026</div>
                          <div className="text-xs text-green-600">Completion</div>
                        </div>
                        <div className="bg-white/60 rounded-lg p-2 text-center">
                          <div className="text-sm font-bold text-green-800">320</div>
                          <div className="text-xs text-green-600">Units</div>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2 mb-6">
                      <div className="flex items-center space-x-2">
                        <Star className="h-4 w-4 text-yellow-500" />
                        <span className="text-sm text-green-700">Waterfront</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Star className="h-4 w-4 text-yellow-500" />
                        <span className="text-sm text-green-700">Family-Friendly</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Star className="h-4 w-4 text-yellow-500" />
                        <span className="text-sm text-green-700">Green Spaces</span>
                      </div>
                    </div>

                    <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                      Download Flyer
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Urban Heights Flyer */}
              <motion.div variants={fadeInUp}>
                <Card className="h-full border-0 bg-gradient-to-br from-purple-50 to-violet-100 hover:shadow-xl transition-all duration-300 group">
                  <CardContent className="p-6">
                    <div className="text-center mb-6">
                      <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-violet-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                        <Building2 className="h-10 w-10 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-purple-800 mb-2">URBAN HEIGHTS</h3>
                      <p className="text-purple-600 font-semibold">Brampton</p>
                    </div>
                    
                    <div className="space-y-3 mb-6">
                      <div className="bg-white/60 rounded-lg p-3 text-center">
                        <div className="text-2xl font-bold text-purple-800">$420,000</div>
                        <div className="text-sm text-purple-600">Starting From</div>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <div className="bg-white/60 rounded-lg p-2 text-center">
                          <div className="text-sm font-bold text-purple-800">WINTER 2025</div>
                          <div className="text-xs text-purple-600">Completion</div>
                        </div>
                        <div className="bg-white/60 rounded-lg p-2 text-center">
                          <div className="text-sm font-bold text-purple-800">280</div>
                          <div className="text-xs text-purple-600">Units</div>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2 mb-6">
                      <div className="flex items-center space-x-2">
                        <Star className="h-4 w-4 text-yellow-500" />
                        <span className="text-sm text-purple-700">Modern Design</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Star className="h-4 w-4 text-yellow-500" />
                        <span className="text-sm text-purple-700">Smart Home</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Star className="h-4 w-4 text-yellow-500" />
                        <span className="text-sm text-purple-700">Retail Below</span>
                      </div>
                    </div>

                    <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                      Download Flyer
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Investment Opportunity Flyer */}
              <motion.div variants={fadeInUp}>
                <Card className="h-full border-0 bg-gradient-to-br from-orange-50 to-amber-100 hover:shadow-xl transition-all duration-300 group">
                  <CardContent className="p-6">
                    <div className="text-center mb-6">
                      <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-amber-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                        <TrendingUp className="h-10 w-10 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-orange-800 mb-2">INVESTMENT SPECIAL</h3>
                      <p className="text-orange-600 font-semibold">Limited Time Offer</p>
                    </div>
                    
                    <div className="space-y-3 mb-6">
                      <div className="bg-white/60 rounded-lg p-3 text-center">
                        <div className="text-2xl font-bold text-orange-800">VIP ACCESS</div>
                        <div className="text-sm text-orange-600">Priority Booking</div>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <div className="bg-white/60 rounded-lg p-2 text-center">
                          <div className="text-sm font-bold text-orange-800">FLEXIBLE</div>
                          <div className="text-xs text-orange-600">Deposits</div>
                        </div>
                        <div className="bg-white/60 rounded-lg p-2 text-center">
                          <div className="text-sm font-bold text-orange-800">ASSIGNMENT</div>
                          <div className="text-xs text-orange-600">Rights</div>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2 mb-6">
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm text-orange-700">Pre-construction Pricing</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm text-orange-700">Assignment Rights</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm text-orange-700">Rental Income Potential</span>
                      </div>
                    </div>

                    <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white">
                      Get VIP Access
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>

              {/* First-Time Buyer Flyer */}
              <motion.div variants={fadeInUp}>
                <Card className="h-full border-0 bg-gradient-to-br from-pink-50 to-rose-100 hover:shadow-xl transition-all duration-300 group">
                  <CardContent className="p-6">
                    <div className="text-center mb-6">
                      <div className="w-20 h-20 bg-gradient-to-br from-pink-500 to-rose-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                        <HomeIcon className="h-10 w-10 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-pink-800 mb-2">FIRST-TIME BUYERS</h3>
                      <p className="text-pink-600 font-semibold">Special Programs</p>
                    </div>
                    
                    <div className="space-y-3 mb-6">
                      <div className="bg-white/60 rounded-lg p-3 text-center">
                        <div className="text-2xl font-bold text-pink-800">5% DOWN</div>
                        <div className="text-sm text-pink-600">Minimum Deposit</div>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <div className="bg-white/60 rounded-lg p-2 text-center">
                          <div className="text-sm font-bold text-pink-800">GOVERNMENT</div>
                          <div className="text-xs text-pink-600">Incentives</div>
                        </div>
                        <div className="bg-white/60 rounded-lg p-2 text-center">
                          <div className="text-sm font-bold text-pink-800">EXTENDED</div>
                          <div className="text-xs text-pink-600">Timeline</div>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2 mb-6">
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm text-pink-700">Lower Initial Deposits</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm text-pink-700">Extended Payment Plans</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm text-pink-700">Government Incentives</span>
                      </div>
                    </div>

                    <Button className="w-full bg-pink-600 hover:bg-pink-700 text-white">
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Consultation Flyer */}
              <motion.div variants={fadeInUp}>
                <Card className="h-full border-0 bg-gradient-to-br from-teal-50 to-cyan-100 hover:shadow-xl transition-all duration-300 group">
                  <CardContent className="p-6">
                    <div className="text-center mb-6">
                      <div className="w-20 h-20 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                        <Users className="h-10 w-10 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-teal-800 mb-2">FREE CONSULTATION</h3>
                      <p className="text-teal-600 font-semibold">Expert Guidance</p>
                    </div>
                    
                    <div className="space-y-3 mb-6">
                      <div className="bg-white/60 rounded-lg p-3 text-center">
                        <div className="text-2xl font-bold text-teal-800">NO COST</div>
                        <div className="text-sm text-teal-600">Initial Meeting</div>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <div className="bg-white/60 rounded-lg p-2 text-center">
                          <div className="text-sm font-bold text-teal-800">EXPERT</div>
                          <div className="text-xs text-teal-600">Advice</div>
                        </div>
                        <div className="bg-white/60 rounded-lg p-2 text-center">
                          <div className="text-sm font-bold text-teal-800">PERSONALIZED</div>
                          <div className="text-xs text-teal-600">Strategy</div>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2 mb-6">
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm text-teal-700">Market Analysis</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm text-teal-700">Investment Strategy</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm text-teal-700">Financing Options</span>
                      </div>
                    </div>

                    <Button className="w-full bg-teal-600 hover:bg-teal-700 text-white">
                      Book Consultation
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
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
                { step: "1", title: "Consultation", desc: "Discuss your needs, budget, and preferences with our experts" },
                { step: "2", title: "Project Selection", desc: "Review curated projects that match your criteria" },
                { step: "3", title: "Secure Your Unit", desc: "Reserve your preferred unit with flexible deposit terms" },
                { step: "4", title: "Move-In Ready", desc: "Enjoy your new home when construction is complete" }
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
                <Button size="lg" className="bg-white text-brand-bright-red hover:bg-white/90 font-bold px-8 py-4 text-xl">
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