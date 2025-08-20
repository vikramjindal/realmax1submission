import React from "react";
import Head from "next/head";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { 
  Users, 
  Calculator, 
  Wrench, 
  Headphones,
  CheckCircle,
  Star,
  Clock,
  Shield,
  Award,
  Heart,
  Zap,
  Target,
  Phone,
  Mail,
  MessageCircle
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

export default function Support() {
  const teamMembers = [
    {
      name: "Sarah Mitchell",
      role: "Administrative Director",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      specialties: ["Transaction Coordination", "Document Management", "Client Communication"]
    },
    {
      name: "David Chen",
      role: "Mortgage Specialist",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      specialties: ["Mortgage Pre-approval", "Rate Negotiation", "First-Time Buyer Programs"]
    },
    {
      name: "Lisa Rodriguez",
      role: "Vendor Relations Manager",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      specialties: ["Home Inspections", "Contractor Network", "Service Coordination"]
    }
  ];

  return (
    <>
      <Head>
        <title>In-House Support Services | RE/MAX Excellence</title>
        <meta name="description" content="Everything you need, all under one roof. Comprehensive support services including administrative, mortgage, vendor network, and agent support." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div className="bg-background min-h-screen">
        <Header />
        
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-rose-50 via-white to-pink-100 overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-rose-200/30 to-rose-300/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-pink-200/30 to-pink-300/20 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-purple-200/20 to-purple-300/10 rounded-full blur-3xl"></div>
          </div>
          
          {/* Creative Floating Balloon Elements */}
          <div className="absolute right-8 top-16 z-10">
            <div className="relative">
              <Image 
                src="/images/ballon.png" 
                alt="RE/MAX Balloon" 
                width={80} 
                height={80} 
                className="w-20 h-20 object-contain opacity-80 animate-pulse transform rotate-6"
              />
              <div className="absolute -top-3 -right-3 w-10 h-10 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full opacity-60 animate-bounce"></div>
              <div className="absolute -bottom-3 -left-3 w-8 h-8 bg-gradient-to-br from-purple-400 to-indigo-500 rounded-full opacity-70 animate-ping"></div>
            </div>
          </div>
          
          <div className="absolute left-8 top-32 z-10">
            <div className="relative">
              <Image 
                src="/images/ballon.png" 
                alt="RE/MAX Balloon" 
                width={56} 
                height={56} 
                className="w-14 h-14 object-contain opacity-70 animate-bounce transform -rotate-6"
              />
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-indigo-400 to-blue-500 rounded-full opacity-80 animate-pulse"></div>
            </div>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-rose-500 to-rose-600 rounded-full text-white text-sm font-semibold shadow-lg mb-6">
                  <Heart className="w-4 h-4 mr-2" />
                  Dedicated Support Team
                </div>
                <h1 className="text-5xl lg:text-6xl font-black text-slate-900 mb-8 font-montserrat leading-tight">
                  Everything You Need, <span className="text-transparent bg-gradient-to-r from-rose-500 via-pink-600 to-purple-600 bg-clip-text">All Under One Roof</span>
                </h1>
                <p className="text-xl text-slate-600 mb-8 font-arial leading-relaxed">
                  Our comprehensive in-house support team handles the details so you can focus on what you do best - serving your clients and growing your business.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-primary hover:bg-primary/90">
                    Meet Our Support Team
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
                className="relative"
              >
                <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8">
                  <img 
                    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="Support Team"
                    className="w-full rounded-lg"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid md:grid-cols-3 gap-8"
            >
              <motion.div variants={fadeInUp}>
                <Card className="h-full border-0 bg-gradient-to-br from-primary/5 to-primary/15 hover:from-primary/10 hover:to-primary/20 transition-all duration-300">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Clock className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">Save Time</h3>
                    <p className="text-muted-foreground">
                      Focus on client relationships while our team handles administrative tasks, paperwork, and coordination.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Card className="h-full border-0 bg-gradient-to-br from-secondary/5 to-secondary/15 hover:from-secondary/10 hover:to-secondary/20 transition-all duration-300">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Shield className="h-8 w-8 text-secondary" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">Reduce Risk</h3>
                    <p className="text-muted-foreground">
                      Expert oversight ensures compliance, accuracy, and professional handling of all transactions.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Card className="h-full border-0 bg-gradient-to-br from-green-500/5 to-green-500/15 hover:from-green-500/10 hover:to-green-500/20 transition-all duration-300">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Heart className="h-8 w-8 text-green-500" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">Enhance Experience</h3>
                    <p className="text-muted-foreground">
                      Provide exceptional client service with professional support at every step of the process.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
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
                Comprehensive <span className="text-primary">Support Services</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Professional support across all aspects of your real estate business
              </p>
            </motion.div>

            <motion.div 
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              <motion.div variants={fadeInUp}>
                <Card className="h-full border-0 bg-white hover:shadow-lg transition-all duration-300 group">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                      <Users className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-4">Administrative Support</h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      Complete transaction coordination, document preparation, and client communication management.
                    </p>
                    <ul className="text-xs text-muted-foreground space-y-2 text-left">
                      <li className="flex items-center">
                        <CheckCircle className="h-3 w-3 text-primary mr-2" />
                        Transaction coordination
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-3 w-3 text-primary mr-2" />
                        Document preparation
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-3 w-3 text-primary mr-2" />
                        Client follow-up
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-3 w-3 text-primary mr-2" />
                        Closing coordination
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Card className="h-full border-0 bg-white hover:shadow-lg transition-all duration-300 group">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-secondary to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                      <Calculator className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-4">Mortgage Services</h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      In-house mortgage specialists to help your clients secure the best financing options.
                    </p>
                    <ul className="text-xs text-muted-foreground space-y-2 text-left">
                      <li className="flex items-center">
                        <CheckCircle className="h-3 w-3 text-secondary mr-2" />
                        Pre-approval assistance
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-3 w-3 text-secondary mr-2" />
                        Rate comparison
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-3 w-3 text-secondary mr-2" />
                        Application support
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-3 w-3 text-secondary mr-2" />
                        Closing coordination
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Card className="h-full border-0 bg-white hover:shadow-lg transition-all duration-300 group">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-primary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                      <Wrench className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-4">Vendor Network</h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      Access to trusted professionals for inspections, repairs, staging, and other services.
                    </p>
                    <ul className="text-xs text-muted-foreground space-y-2 text-left">
                      <li className="flex items-center">
                        <CheckCircle className="h-3 w-3 text-purple-500 mr-2" />
                        Home inspectors
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-3 w-3 text-purple-500 mr-2" />
                        Contractors & repairs
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-3 w-3 text-purple-500 mr-2" />
                        Staging services
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-3 w-3 text-purple-500 mr-2" />
                        Legal services
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Card className="h-full border-0 bg-white hover:shadow-lg transition-all duration-300 group">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-secondary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                      <Headphones className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-4">Agent Support</h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      Dedicated support team to help you with technology, training, and business development.
                    </p>
                    <ul className="text-xs text-muted-foreground space-y-2 text-left">
                      <li className="flex items-center">
                        <CheckCircle className="h-3 w-3 text-green-500 mr-2" />
                        Technical support
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-3 w-3 text-green-500 mr-2" />
                        Training assistance
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-3 w-3 text-green-500 mr-2" />
                        Marketing support
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-3 w-3 text-green-500 mr-2" />
                        Business coaching
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* AI Enhancement */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
                  AI-Enhanced <span className="text-primary">Support Systems</span>
                </h2>
                <p className="text-xl text-muted-foreground mb-8">
                  Our support services are powered by artificial intelligence to provide faster, more accurate, and more efficient assistance.
                </p>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                      <Zap className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Automated Workflows</h3>
                      <p className="text-muted-foreground">AI streamlines repetitive tasks and ensures nothing falls through the cracks.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center">
                      <Target className="h-6 w-6 text-secondary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Smart Matching</h3>
                      <p className="text-muted-foreground">Intelligent systems match clients with the best service providers and solutions.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center">
                      <Award className="h-6 w-6 text-green-500" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Quality Assurance</h3>
                      <p className="text-muted-foreground">AI monitors service quality and ensures consistent excellence across all touchpoints.</p>
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
                    alt="AI Support Dashboard"
                    className="w-full rounded-lg"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Team Section */}
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
                Meet Our <span className="text-primary">Support Team</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Experienced professionals dedicated to your success
              </p>
            </motion.div>

            <motion.div 
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid md:grid-cols-3 gap-8"
            >
              {teamMembers.map((member, index) => (
                <motion.div key={index} variants={fadeInUp}>
                  <Card className="h-full border-0 bg-white hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-8 text-center">
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-24 h-24 rounded-full mx-auto mb-6 object-cover"
                      />
                      <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
                      <p className="text-primary font-medium mb-4">{member.role}</p>
                      <div className="space-y-2">
                        {member.specialties.map((specialty, idx) => (
                          <span key={idx} className="inline-block bg-muted text-muted-foreground px-3 py-1 rounded-full text-sm mr-2 mb-2">
                            {specialty}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
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
                Get Support <span className="text-primary">When You Need It</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Multiple ways to connect with our support team
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
                      <Phone className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">Phone Support</h3>
                    <p className="text-muted-foreground mb-4">
                      Speak directly with our support specialists for immediate assistance.
                    </p>
                    <p className="font-medium text-primary">(416) 555-HELP</p>
                    <p className="text-sm text-muted-foreground">Mon-Fri 8AM-8PM</p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Card className="h-full border-0 bg-gradient-to-br from-secondary/5 to-secondary/10 hover:from-secondary/10 hover:to-secondary/15 transition-all duration-300">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Mail className="h-8 w-8 text-secondary" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">Email Support</h3>
                    <p className="text-muted-foreground mb-4">
                      Send detailed requests and receive comprehensive responses.
                    </p>
                    <p className="font-medium text-secondary">support@remaxexcellence.ca</p>
                    <p className="text-sm text-muted-foreground">24-hour response</p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Card className="h-full border-0 bg-gradient-to-br from-green-500/5 to-green-500/10 hover:from-green-500/10 hover:to-green-500/15 transition-all duration-300">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                      <MessageCircle className="h-8 w-8 text-green-500" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">Live Chat</h3>
                    <p className="text-muted-foreground mb-4">
                      Get instant answers through our online chat system.
                    </p>
                    <p className="font-medium text-green-500">Available 24/7</p>
                    <p className="text-sm text-muted-foreground">Instant responses</p>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-primary to-secondary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Experience the Difference
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Join RE/MAX Excellence and discover how comprehensive support can transform your real estate business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                  Meet Our Support Team
                </Button>
                <Button size="lg" variant="outline" className="bg-white/10 border-white text-white hover:bg-white hover:text-foreground">
                  Schedule Consultation
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