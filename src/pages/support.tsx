import React from "react";
import Head from "next/head";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { useJoinUsModal } from "@/contexts/JoinUsModalContext";
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
  const { openModal } = useJoinUsModal();

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
        <section className="relative py-20 bg-white overflow-hidden">
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-5xl lg:text-6xl font-black text-slate-900 mb-8 font-montserrat leading-tight">
                  Everything You Need, <span className="text-brand-bright-red">All Under One Roof</span>
                </h1>
                <p className="text-xl text-slate-600 mb-8 font-arial leading-relaxed">
                  Our comprehensive in-house support team handles the details so you can focus on what you do best - serving your clients and growing your business.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button onClick={openModal} size="lg" className="bg-brand-bright-red hover:bg-brand-dark-red text-white font-bold">
                    Meet Our Support Team
                  </Button>
                  <Button onClick={openModal} size="lg" className="bg-brand-bright-red hover:bg-brand-dark-red text-white font-bold">
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
                <div className="bg-white rounded-2xl p-8 border border-gray-200">
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
                <Card className="h-full border-0 bg-white hover:shadow-lg transition-all duration-300 border border-red-100">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-brand-bright-red rounded-full flex items-center justify-center mx-auto mb-6">
                      <Clock className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">Save Time</h3>
                    <p className="text-muted-foreground">
                      Focus on client relationships while our team handles administrative tasks, paperwork, and coordination.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Card className="h-full border-0 bg-white hover:shadow-lg transition-all duration-300 border border-blue-100">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-brand-dark-blue rounded-full flex items-center justify-center mx-auto mb-6">
                      <Shield className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">Reduce Risk</h3>
                    <p className="text-muted-foreground">
                      Expert oversight ensures compliance, accuracy, and professional handling of all transactions.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Card className="h-full border-0 bg-white hover:shadow-lg transition-all duration-300 border border-red-100">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-brand-bright-red rounded-full flex items-center justify-center mx-auto mb-6">
                      <Heart className="h-8 w-8 text-white" />
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
                Comprehensive <span className="text-brand-bright-red">Support Services</span>
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
              className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto"
            >
              <motion.div variants={fadeInUp}>
                <Card className="h-full border-0 bg-white hover:shadow-lg transition-all duration-300 group">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-brand-bright-red rounded-full flex items-center justify-center mx-auto mb-6">
                      <Users className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-4">Administrative Support</h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      Complete transaction coordination, document preparation, and client communication management.
                    </p>
                    <ul className="text-xs text-muted-foreground space-y-2 text-left">
                      <li className="flex items-center">
                        <CheckCircle className="h-3 w-3 text-brand-bright-red mr-2" />
                        Transaction coordination
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-3 w-3 text-brand-bright-red mr-2" />
                        Document preparation
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-3 w-3 text-brand-bright-red mr-2" />
                        Client follow-up
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-3 w-3 text-brand-bright-red mr-2" />
                        Closing coordination
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Card className="h-full border-0 bg-white hover:shadow-lg transition-all duration-300 group">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-brand-dark-blue rounded-full flex items-center justify-center mx-auto mb-6">
                      <Calculator className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-4">Mortgage Services</h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      In-house mortgage specialists to help your clients secure the best financing options.
                    </p>
                    <ul className="text-xs text-muted-foreground space-y-2 text-left">
                      <li className="flex items-center">
                        <CheckCircle className="h-3 w-3 text-brand-dark-blue mr-2" />
                        Pre-approval assistance
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-3 w-3 text-brand-dark-blue mr-2" />
                        Rate comparison
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-3 w-3 text-brand-dark-blue mr-2" />
                        Application support
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-3 w-3 text-brand-dark-blue mr-2" />
                        Closing coordination
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Card className="h-full border-0 bg-white hover:shadow-lg transition-all duration-300 group">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-brand-bright-red rounded-full flex items-center justify-center mx-auto mb-6">
                      <Wrench className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-4">Vendor Network</h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      Access to trusted professionals for inspections, repairs, staging, and other services.
                    </p>
                    <ul className="text-xs text-muted-foreground space-y-2 text-left">
                      <li className="flex items-center">
                        <CheckCircle className="h-3 w-3 text-brand-bright-red mr-2" />
                        Home inspectors
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-3 w-3 text-brand-bright-red mr-2" />
                        Contractors & repairs
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-3 w-3 text-brand-bright-red mr-2" />
                        Staging services
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-3 w-3 text-brand-bright-red mr-2" />
                        Legal services
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Card className="h-full border-0 bg-white hover:shadow-lg transition-all duration-300 group">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-brand-dark-blue rounded-full flex items-center justify-center mx-auto mb-6">
                      <Headphones className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-4">Agent Support</h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      Dedicated support team to help you with technology, training, and business development.
                    </p>
                    <ul className="text-xs text-muted-foreground space-y-2 text-left">
                      <li className="flex items-center">
                        <CheckCircle className="h-3 w-3 text-brand-dark-blue mr-2" />
                        Technical support
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-3 w-3 text-brand-dark-blue mr-2" />
                        Training assistance
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-3 w-3 text-brand-dark-blue mr-2" />
                        Marketing support
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-3 w-3 text-brand-dark-blue mr-2" />
                        Business coaching
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
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
                Get Support <span className="text-brand-bright-red">When You Need It</span>
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
                <Card className="h-full border-0 bg-white hover:shadow-lg transition-all duration-300 border border-red-100">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-brand-bright-red rounded-full flex items-center justify-center mx-auto mb-6">
                      <Phone className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">Phone Support</h3>
                    <p className="text-muted-foreground mb-4">
                      Speak directly with our support specialists for immediate assistance.
                    </p>
                    <div className="space-y-2">
                      <div>
                        <p className="text-xs text-muted-foreground">Mississauga</p>
                        <a href="tel:9055074436" className="font-medium text-brand-bright-red hover:text-brand-dark-red">(905) 507-4436</a>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">Brampton</p>
                        <a href="tel:5193421961" className="font-medium text-brand-bright-red hover:text-brand-dark-red">519-342-1961</a>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mt-3">Mon-Fri 8AM-8PM</p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Card className="h-full border-0 bg-white hover:shadow-lg transition-all duration-300 border border-blue-100">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-brand-dark-blue rounded-full flex items-center justify-center mx-auto mb-6">
                      <Mail className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">Email Support</h3>
                    <p className="text-muted-foreground mb-4">
                      Send detailed requests and receive comprehensive responses.
                    </p>
                    <p className="font-medium text-brand-dark-blue">support@remaxexcellence.ca</p>
                    <p className="text-sm text-muted-foreground">24-hour response</p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Card className="h-full border-0 bg-white hover:shadow-lg transition-all duration-300 border border-red-100">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-brand-bright-red rounded-full flex items-center justify-center mx-auto mb-6">
                      <MessageCircle className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">Live Chat</h3>
                    <p className="text-muted-foreground mb-4">
                      Get instant answers through our online chat system.
                    </p>
                    <p className="font-medium text-brand-bright-red">Available 24/7</p>
                    <p className="text-sm text-muted-foreground">Instant responses</p>
                  </CardContent>
                </Card>
              </motion.div>
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