import React from "react";
import Head from "next/head";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { 
  Camera, 
  TrendingUp, 
  Users, 
  Award,
  CheckCircle,
  Star,
  DollarSign,
  Calendar,
  BarChart3,
  Target,
  Megaphone,
  Shield
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

export default function Sell() {
  return (
    <>
      <Head>
        <title>Sell Your Home | RE/MAX Excellence</title>
        <meta name="description" content="Get top dollar for your home with RE/MAX Excellence. Professional marketing, expert pricing, and proven results." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div className="bg-background min-h-screen">
        <Header />
        
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-emerald-50 via-white to-green-100 overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-emerald-200/30 to-emerald-300/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-green-200/30 to-green-300/20 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-purple-200/20 to-purple-300/10 rounded-full blur-3xl"></div>
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
              <div className="absolute -top-3 -right-3 w-10 h-10 bg-gradient-to-br from-green-400 to-teal-500 rounded-full opacity-60 animate-bounce"></div>
              <div className="absolute -bottom-3 -left-3 w-8 h-8 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-full opacity-70 animate-ping"></div>
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
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full opacity-80 animate-pulse"></div>
            </div>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-5xl lg:text-6xl font-black text-slate-900 mb-8 font-montserrat leading-tight">
                  Sell Your Home for <span className="text-transparent bg-gradient-to-r from-emerald-500 via-green-600 to-teal-600 bg-clip-text">Top Dollar</span>
                </h1>
                <p className="text-xl text-slate-600 mb-8 font-arial leading-relaxed">
                  Get maximum value with our proven marketing strategies, professional photography, and expert negotiation skills.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-primary hover:bg-primary/90">
                    Get Free Home Valuation
                  </Button>
                  <Button size="lg" variant="outline" className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground">
                    Schedule Consultation
                  </Button>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <Card className="p-8 bg-white/80 backdrop-blur-sm border-0">
                  <h3 className="text-2xl font-bold mb-6 text-center">Get Your Home Value</h3>
                  <div className="space-y-4">
                    <Input placeholder="Property Address" />
                    <div className="grid grid-cols-2 gap-4">
                      <Input placeholder="Bedrooms" />
                      <Input placeholder="Bathrooms" />
                    </div>
                    <Input placeholder="Square Footage" />
                    <Input placeholder="Your Email" />
                    <Button className="w-full bg-primary hover:bg-primary/90">
                      Get Instant Valuation
                    </Button>
                  </div>
                  <p className="text-sm text-muted-foreground text-center mt-4">
                    Get your free, no-obligation home valuation in minutes
                  </p>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 relative overflow-hidden">
          {/* Creative Background Elements */}
          <div className="absolute right-8 top-8 z-10">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-green-500 rounded-full opacity-40 animate-pulse"></div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-br from-green-400 to-teal-500 rounded-full opacity-60 animate-bounce"></div>
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
                Why Sell With <span className="text-primary">RE/MAX Excellence</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Our comprehensive marketing approach and expert guidance ensure you get the best possible price for your home.
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
                      <Camera className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">Professional Marketing</h3>
                    <p className="text-muted-foreground">
                      High-quality photography, virtual tours, and comprehensive digital marketing campaigns.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Card className="h-full border-0 bg-gradient-to-br from-secondary/5 to-secondary/10 hover:from-secondary/10 hover:to-secondary/15 transition-all duration-300">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                      <BarChart3 className="h-8 w-8 text-secondary" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">Market Analysis</h3>
                    <p className="text-muted-foreground">
                      Data-driven pricing strategies based on current market conditions and comparable sales.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Card className="h-full border-0 bg-gradient-to-br from-primary/5 to-primary/10 hover:from-primary/10 hover:to-primary/15 transition-all duration-300">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Target className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">Expert Negotiation</h3>
                    <p className="text-muted-foreground">
                      Skilled negotiators who maximize your sale price and protect your interests.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Marketing Services */}
        <section className="py-20 bg-muted/30 relative overflow-hidden">
          {/* Creative Background Elements */}
          <div className="absolute left-8 top-8 z-10">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-full opacity-40 animate-pulse"></div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full opacity-60 animate-bounce"></div>
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
                Comprehensive Marketing Package
              </h2>
              <p className="text-xl text-muted-foreground">
                Every listing gets our full-service marketing treatment
              </p>
            </motion.div>

            <motion.div 
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {[
                { icon: Camera, title: "Professional Photography", desc: "High-resolution photos that showcase your home's best features" },
                { icon: Megaphone, title: "Digital Marketing", desc: "Social media campaigns, online listings, and targeted advertising" },
                { icon: BarChart3, title: "Market Reports", desc: "Detailed analytics and performance tracking for your listing" },
                { icon: Shield, title: "Legal Protection", desc: "Complete transaction management and legal compliance" }
              ].map((service, index) => (
                <motion.div key={index} variants={fadeInUp}>
                  <Card className="h-full border-0 bg-white/50 backdrop-blur-sm hover:bg-white/80 transition-all duration-300">
                    <CardContent className="p-6 text-center">
                      <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <service.icon className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="text-lg font-bold mb-3">{service.title}</h3>
                      <p className="text-sm text-muted-foreground">{service.desc}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
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
                Your Home Selling Journey
              </h2>
              <p className="text-xl text-muted-foreground">
                A streamlined process designed for maximum results
              </p>
            </motion.div>

            <motion.div 
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid md:grid-cols-5 gap-8"
            >
              {[
                { step: "1", title: "Consultation", desc: "Meet with our expert to discuss your goals and timeline" },
                { step: "2", title: "Preparation", desc: "Professional staging advice and home preparation" },
                { step: "3", title: "Marketing", desc: "Launch comprehensive marketing campaign" },
                { step: "4", title: "Showings", desc: "Coordinate viewings and open houses" },
                { step: "5", title: "Closing", desc: "Negotiate offers and close the sale" }
              ].map((item, index) => (
                <motion.div key={index} variants={fadeInUp} className="text-center">
                  <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl font-bold text-secondary-foreground">{item.step}</span>
                  </div>
                  <h3 className="text-lg font-bold mb-4">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Success Stories */}
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
                Recent Success Stories
              </h2>
              <p className="text-xl text-muted-foreground">
                See how we've helped homeowners achieve their goals
              </p>
            </motion.div>

            <motion.div 
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid md:grid-cols-3 gap-8"
            >
              {[
                {
                  image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                  price: "$1,350,000",
                  location: "Toronto, ON",
                  days: "7 days",
                  above: "15% above asking"
                },
                {
                  image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                  price: "$925,000",
                  location: "Mississauga, ON",
                  days: "12 days",
                  above: "8% above asking"
                },
                {
                  image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                  price: "$675,000",
                  location: "Brampton, ON",
                  days: "5 days",
                  above: "12% above asking"
                }
              ].map((story, index) => (
                <motion.div key={index} variants={fadeInUp}>
                  <Card className="overflow-hidden border-0 bg-white hover:shadow-lg transition-all duration-300">
                    <img 
                      src={story.image} 
                      alt={story.location}
                      className="w-full h-48 object-cover"
                    />
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="text-2xl font-bold text-primary">{story.price}</h3>
                        <div className="text-right">
                          <p className="text-sm font-medium text-green-600">{story.above}</p>
                          <p className="text-sm text-muted-foreground">Sold in {story.days}</p>
                        </div>
                      </div>
                      <p className="text-muted-foreground">{story.location}</p>
                      <div className="flex items-center mt-4">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                        ))}
                        <span className="text-sm text-muted-foreground ml-2">Exceptional Service</span>
                      </div>
                    </CardContent>
                  </Card>
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