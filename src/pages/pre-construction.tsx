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

  return (
    <>
      <Head>
        <title>Pre-Construction Properties | REMAX Excellence</title>
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
                
                <p className="text-2xl lg:text-3xl text-white leading-relaxed">
                  Early access. Exclusive incentives. Full marketing support — everything you need to succeed in pre-construction, all in one place.
                </p>
                
                <div className="flex justify-start">
                  <Button onClick={openModal} className="bg-brand-bright-red hover:bg-black text-white font-bold px-10 py-5 text-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 rounded-lg flex items-center space-x-4">
                    <Building className="w-8 h-8" />
                    <span>Book Consultation</span>
                    <ArrowRight className="w-8 h-8" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Exclusive In-House Services Section */}
        <section className="py-24 bg-gradient-to-br from-white via-slate-50 to-white relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 right-10 w-80 h-80 bg-gradient-to-br from-red-200/20 to-pink-300/15 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 left-10 w-72 h-72 bg-gradient-to-br from-blue-200/20 to-indigo-300/15 rounded-full blur-3xl"></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 font-montserrat">
                Exclusive <span className="text-brand-bright-red">In-House Services</span>
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                Exclusive support and access designed to help you succeed in real estate.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* In-House Pre-Construction Access */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <Card className="h-full bg-white border border-slate-200 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2">
                  <CardContent className="p-8">
                    <div className="w-20 h-20 bg-gradient-to-br from-brand-bright-red to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                      <HomeIcon className="h-10 w-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-center text-slate-900">
                      In-House<br/>Pre-Construction Access
                    </h3>
                    <p className="text-slate-600 mb-6 text-center leading-relaxed">
                      Get first-hand access to all major projects with priority pricing, floor plans, and early incentives.
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-brand-bright-red mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-slate-700">Access before the public</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-brand-bright-red mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-slate-700">Builder incentives</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-brand-bright-red mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-slate-700">Exclusive VIP launches</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Dedicated Admin Support */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Card className="h-full bg-white border border-slate-200 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2">
                  <CardContent className="p-8">
                    <div className="w-20 h-20 bg-gradient-to-br from-brand-dark-blue to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                      <TrendingUp className="h-10 w-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-center text-slate-900">
                      Dedicated Admin Support
                    </h3>
                    <p className="text-slate-600 mb-6 text-center leading-relaxed">
                      Focus on your clients while we handle the details—our team provides full administrative support for your deals.
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-brand-dark-blue mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-slate-700">Deal paperwork assistance</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-brand-dark-blue mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-slate-700">Scheduling & coordination</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-brand-dark-blue mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-slate-700">Ongoing client support</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Coaching & Training */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <Card className="h-full bg-white border border-slate-200 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2">
                  <CardContent className="p-8">
                    <div className="w-20 h-20 bg-gradient-to-br from-brand-bright-red to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                      <Users className="h-10 w-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-center text-slate-900">
                      Coaching & Training
                    </h3>
                    <p className="text-slate-600 mb-6 text-center leading-relaxed">
                      Learn directly from our in-house real estate coach, Ken Wilder, with over 20 years of coaching experience.
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-brand-bright-red mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-slate-700">Business growth strategies</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-brand-bright-red mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-slate-700">Lead generation systems</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-brand-bright-red mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-slate-700">Sales & closing training</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Why Work With Our Pre-Construction Division */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Left Content */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 font-montserrat leading-tight">
                  Why Work With Our <span className="text-brand-bright-red">Pre-Construction Division</span>
                </h2>
                <p className="text-lg text-slate-600 mb-12 leading-relaxed">
                  At <span className="font-bold text-slate-900">REMAX Excellence</span>, our Pre-Construction team provides agents and clients with unmatched access to the GTA's top new developments. From platinum launches to curated investor opportunities, we deliver value at every stage.
                </p>

                <div className="space-y-8">
                  {/* Platinum Project Access */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="flex gap-6"
                  >
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-brand-bright-red rounded-2xl flex items-center justify-center shadow-lg">
                        <span className="text-white text-2xl font-black">1</span>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900 mb-3">Platinum Project Access</h3>
                      <p className="text-slate-600 leading-relaxed">
                        Priority access to VIP pricing, early floor plans, and off-market units.
                      </p>
                    </div>
                  </motion.div>

                  {/* Exclusive Incentives */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="flex gap-6"
                  >
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-brand-bright-red rounded-2xl flex items-center justify-center shadow-lg">
                        <span className="text-white text-2xl font-black">2</span>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900 mb-3">Exclusive Incentives</h3>
                      <p className="text-slate-600 leading-relaxed">
                        Extended deposits, capped charges, assignment options and builder credits.
                      </p>
                    </div>
                  </motion.div>

                  {/* Full-Service Marketing */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex gap-6"
                  >
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-brand-bright-red rounded-2xl flex items-center justify-center shadow-lg">
                        <span className="text-white text-2xl font-black">3</span>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900 mb-3">Full-Service Marketing</h3>
                      <p className="text-slate-600 leading-relaxed">
                        Plug-and-play social posts, newsletters, brochures and media assets to help you sell faster.
                      </p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>

              {/* Right Content - Call to Action Card */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="lg:sticky lg:top-8"
              >
                <Card className="bg-white border border-slate-200 shadow-2xl hover:shadow-3xl transition-all duration-500 overflow-hidden">
                  <div className="bg-brand-bright-red p-8 text-white">
                    <h3 className="text-3xl font-bold mb-3">Quick Contact</h3>
                    <p className="text-white/90 leading-relaxed">
                      Have a project in mind? Want to join our platinum network or register for a builder presentation?
                    </p>
                  </div>
                  <CardContent className="p-8">
                    <div className="space-y-6">
                      <div className="text-center py-8">
                        <Building2 className="h-20 w-20 text-brand-bright-red mx-auto mb-6" />
                        <p className="text-slate-600 mb-6 text-lg leading-relaxed">
                          Get exclusive access to VIP pricing, floor plans, and builder incentives.
                        </p>
                      </div>
                      
                      <Button 
                        onClick={openModal} 
                        size="lg" 
                        className="w-full bg-brand-bright-red hover:bg-black text-white font-bold py-6 text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
                      >
                        <Calendar className="h-5 w-5 mr-2" />
                        Request Information
                      </Button>

                      <div className="border-t border-slate-200 pt-6 space-y-3">
                        <div className="flex items-center text-slate-600">
                          <CheckCircle className="h-5 w-5 text-brand-bright-red mr-3 flex-shrink-0" />
                          <span className="text-sm">VIP Priority Pricing</span>
                        </div>
                        <div className="flex items-center text-slate-600">
                          <CheckCircle className="h-5 w-5 text-brand-bright-red mr-3 flex-shrink-0" />
                          <span className="text-sm">Extended Deposits & Credits</span>
                        </div>
                        <div className="flex items-center text-slate-600">
                          <CheckCircle className="h-5 w-5 text-brand-bright-red mr-3 flex-shrink-0" />
                          <span className="text-sm">Full Marketing Support</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

{/* Builder Tours & In-House Presentations */}
        <section className="py-24 bg-gradient-to-br from-white via-slate-50 to-white relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-80 h-80 bg-gradient-to-br from-blue-200/20 to-indigo-300/15 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-72 h-72 bg-gradient-to-br from-red-200/20 to-pink-300/15 rounded-full blur-3xl"></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 font-montserrat leading-tight">
                  Builder Tours & <span className="text-brand-bright-red">In-House Presentations</span>
                </h2>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                  Get hands-on with our builder tours and attend in-house presentations to ask the hard questions and gain confidence before launch.
                </p>

                <ul className="space-y-4 mb-8">
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-brand-bright-red mr-3 mt-1 flex-shrink-0" />
                    <span className="text-slate-700 text-lg">Guided site tours with developer reps</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-brand-bright-red mr-3 mt-1 flex-shrink-0" />
                    <span className="text-slate-700 text-lg">Presentation days hosted at our brokerage</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-brand-bright-red mr-3 mt-1 flex-shrink-0" />
                    <span className="text-slate-700 text-lg">Q&A sessions, pricing breakdowns and registration guidance</span>
                  </li>
                </ul>

                <div className="flex flex-wrap gap-4">
                  <Button onClick={openModal} size="lg" className="bg-brand-bright-red hover:bg-black text-white font-bold px-8 py-4 shadow-xl hover:shadow-2xl transition-all duration-300">
                    Register for Next Tour
                  </Button>
                  <Button onClick={openModal} size="lg" variant="outline" className="border-2 border-slate-300 hover:border-brand-bright-red hover:text-brand-bright-red hover:bg-brand-bright-red/10 font-bold px-8 py-4 shadow-lg transition-all duration-300">
                    See Presentation Schedule
                  </Button>
                </div>
              </motion.div>

              {/* Right Image/Video Placeholder */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <Card className="bg-white border border-slate-200 shadow-2xl overflow-hidden">
                  <div className="bg-slate-100 aspect-video flex items-center justify-center">
                    <div className="text-center">
                      <Building2 className="h-20 w-20 text-slate-400 mx-auto mb-4" />
                      <p className="text-slate-500 font-medium">[Tour Photo / Video]</p>
                    </div>
                  </div>
                </Card>
                <Card className="mt-6 bg-white border border-slate-200 shadow-xl">
                  <CardContent className="p-6">
                    <p className="text-slate-700 leading-relaxed">
                      <span className="font-bold text-slate-900">Past tours fill up fast —</span> join our mailing list to receive invites and priority registration.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Marketing Assets & Agent Tools */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 font-montserrat">
                Marketing Assets & <span className="text-brand-bright-red">Agent Tools</span>
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                Everything is provided ready-to-use so you can focus on clients and deals — not design.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 mb-8">
              {/* Social Media Packs */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <Card className="h-full bg-white border border-slate-200 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">Social Media Packs</h3>
                    <p className="text-slate-600 mb-6 leading-relaxed">
                      Instagram, Facebook, LinkedIn templates + Reel covers and WhatsApp posters.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-slate-100 rounded-lg p-6 flex items-center justify-center border border-slate-200">
                        <span className="text-slate-500 text-sm font-medium">Image</span>
                      </div>
                      <div className="bg-slate-100 rounded-lg p-6 flex items-center justify-center border border-slate-200">
                        <span className="text-slate-500 text-sm font-medium">Image</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Project Image Library */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Card className="h-full bg-white border border-slate-200 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">Project Image Library</h3>
                    <p className="text-slate-600 mb-6 leading-relaxed">
                      Renderings, floor plans, brochures and amenity previews in high resolution.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-slate-100 rounded-lg p-6 flex items-center justify-center border border-slate-200">
                        <span className="text-slate-500 text-sm font-medium">Plan</span>
                      </div>
                      <div className="bg-slate-100 rounded-lg p-6 flex items-center justify-center border border-slate-200">
                        <span className="text-slate-500 text-sm font-medium">Render</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Email & Newsletter Kits */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <Card className="h-full bg-white border border-slate-200 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">Email & Newsletter Kits</h3>
                    <p className="text-slate-600 mb-6 leading-relaxed">
                      Plug-and-play campaign content with copy + visuals ready to send.
                    </p>
                    <div className="bg-slate-100 rounded-lg p-12 flex items-center justify-center border border-slate-200">
                      <span className="text-slate-500 text-sm font-medium">Template Preview</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Customizable Print Materials */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Card className="h-full bg-white border border-slate-200 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">Customizable Print Materials</h3>
                    <p className="text-slate-600 leading-relaxed">
                      Feature sheets, price lists and flyers editable with your branding.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Video & Media Assets */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <Card className="h-full bg-white border border-slate-200 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">Video & Media Assets</h3>
                    <p className="text-slate-600 leading-relaxed">
                      Launch teasers, builder presentation highlights and event recaps.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Platinum Projects & Featured Launches */}
        <section className="py-24 bg-gradient-to-br from-white via-slate-50 to-white relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 right-10 w-80 h-80 bg-gradient-to-br from-red-200/20 to-pink-300/15 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 left-10 w-72 h-72 bg-gradient-to-br from-blue-200/20 to-indigo-300/15 rounded-full blur-3xl"></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-wrap justify-between items-center mb-16 gap-4">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-4xl md:text-5xl font-black text-slate-900 font-montserrat">
                  Platinum Projects & <span className="text-brand-bright-red">Featured Launches</span>
                </h2>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Button onClick={openModal} variant="link" className="text-brand-bright-red hover:text-black font-bold text-lg p-0">
                  Browse all projects →
                </Button>
              </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <Card className="h-full bg-white border border-slate-200 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden group">
                  <div className="bg-slate-100 aspect-[4/3] flex items-center justify-center border-b border-slate-200">
                    <span className="text-slate-400 font-medium">[Project Image 1]</span>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-brand-bright-red transition-colors">
                      Project Name 1
                    </h3>
                    <p className="text-slate-600 mb-4 leading-relaxed">
                      Brief project tagline or highlight line that sells it.
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-900 font-bold">From $XXX,XXX</span>
                      <Button onClick={openModal} variant="link" className="text-brand-bright-red hover:text-black font-bold p-0">
                        View details →
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Card className="h-full bg-white border border-slate-200 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden group">
                  <div className="bg-slate-100 aspect-[4/3] flex items-center justify-center border-b border-slate-200">
                    <span className="text-slate-400 font-medium">[Project Image 2]</span>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-brand-bright-red transition-colors">
                      Project Name 2
                    </h3>
                    <p className="text-slate-600 mb-4 leading-relaxed">
                      Brief project tagline or highlight line that sells it.
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-900 font-bold">From $XXX,XXX</span>
                      <Button onClick={openModal} variant="link" className="text-brand-bright-red hover:text-black font-bold p-0">
                        View details →
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <Card className="h-full bg-white border border-slate-200 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden group">
                  <div className="bg-slate-100 aspect-[4/3] flex items-center justify-center border-b border-slate-200">
                    <span className="text-slate-400 font-medium">[Project Image 3]</span>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-brand-bright-red transition-colors">
                      Project Name 3
                    </h3>
                    <p className="text-slate-600 mb-4 leading-relaxed">
                      Brief project tagline or highlight line that sells it.
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-900 font-bold">From $XXX,XXX</span>
                      <Button onClick={openModal} variant="link" className="text-brand-bright-red hover:text-black font-bold p-0">
                        View details →
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

{/* CTA Section */}
        <section className="py-24 bg-gradient-to-r from-brand-bright-red via-brand-medium-blue to-brand-dark-blue relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-20 w-64 h-64 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 right-20 w-80 h-80 bg-white rounded-full blur-3xl"></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-6xl font-black text-white mb-10 font-montserrat leading-tight">
                Ready to Access Platinum Projects?
              </h2>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button onClick={openModal} className="bg-brand-bright-red hover:bg-black text-white font-bold px-10 py-5 text-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 rounded-lg flex items-center space-x-4">
                  <Building className="w-8 h-8" />
                  <span>Get Started Today</span>
                  <ArrowRight className="w-8 h-8" />
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