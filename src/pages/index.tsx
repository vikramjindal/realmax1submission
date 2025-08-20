import React, { useState } from "react";
import Head from "next/head";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TeamSection from "@/components/TeamSection";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { 
  CheckCircle, 
  Home as HomeIcon, 
  Users, 
  TrendingUp, 
  Award, 
  Star,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Building2,
  Target,
  Zap,
  Shield,
  Globe,
  BarChart3,
  Search,
  UserPlus,
  Video,
  Crown,
  Rocket,
  X
} from "lucide-react";
import Image from "next/image";

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

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2075&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/85 via-slate-900/75 to-slate-900/85"></div>
      </div>
      
             {/* Creative Floating Balloon Elements */}
             <div className="absolute right-6 top-24 z-10">
               <div className="relative">
                 <Image 
                   src="/images/ballon.png" 
                   alt="RE/MAX Balloon" 
                   width={112} 
                   height={112} 
                   className="w-28 h-28 object-contain opacity-80 animate-bounce shadow-2xl"
                 />
                 <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-red-300 to-red-500 rounded-full opacity-60 animate-pulse"></div>
                 <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-gradient-to-br from-red-200 to-red-400 rounded-full opacity-70 animate-ping"></div>
               </div>
             </div>
             
             <div className="absolute left-8 top-32 z-10">
               <div className="relative">
                 <Image 
                   src="/images/ballon.png" 
                   alt="RE/MAX Balloon" 
                   width={80} 
                   height={80} 
                   className="w-20 h-20 object-contain opacity-70 animate-bounce shadow-xl transform -rotate-12"
                 />
                 <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-blue-300 to-blue-500 rounded-full opacity-80 animate-pulse"></div>
               </div>
             </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="text-left space-y-6">
            <div className="inline-flex items-center px-3 py-1.5 bg-gradient-to-r from-red-500 to-red-600 rounded-full text-white text-xs font-semibold shadow-lg">
              <Rocket className="w-3 h-3 mr-2 animate-pulse" />
              Ontario's #1 Growth Brokerage
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-black text-white leading-tight font-montserrat">
              <span className="block">RE/MAX</span>
              <span className="block text-transparent bg-gradient-to-r from-red-400 to-red-600 bg-clip-text">
                Excellence
              </span>
              <span className="block text-xl lg:text-2xl text-blue-200 mt-4 font-semibold">
                The Youngest, Fastest-Growing Real Estate Brokerage in Ontario
              </span>
            </h1>
            
            <p className="text-lg text-blue-100 max-w-lg leading-relaxed font-arial">
              Your Trusted Real Estate Partner — With a Fresh Edge. Join Ontario's youngest, fastest-growing real estate brokerage.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold px-6 py-3 text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border-2 border-red-500 rounded-xl">
                <Search className="w-5 h-5 mr-2" />
                Find Properties
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold px-6 py-3 text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border-2 border-blue-500 rounded-xl">
                <UserPlus className="w-5 h-5 mr-2" />
                Join Our Team
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2075&q=80"
                alt="Beautiful Canadian Home"
                width={500}
                height={350}
                className="rounded-2xl shadow-2xl border-4 border-white/20"
                priority
              />
              
              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3 text-center shadow-lg">
                  <div className="text-blue-600 font-bold text-base mb-1">RE/MAX</div>
                  <div className="text-red-600 font-semibold text-sm">EXCELLENCE</div>
                  <div className="text-slate-600 text-xs">Ontario's Premier Real Estate</div>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-4 -left-4 bg-white rounded-lg p-3 shadow-lg border border-slate-200">
              <div className="text-center">
                <div className="text-xl font-bold text-red-600 mb-1">500+</div>
                <div className="text-slate-600 text-xs font-semibold">Properties Sold</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default function Home() {
  const [selectedReel, setSelectedReel] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openReelModal = (reel: any) => {
    setSelectedReel(reel);
    setIsModalOpen(true);
  };

  const closeReelModal = () => {
    setIsModalOpen(false);
    setSelectedReel(null);
  };

  return (
    <>
      <Head>
        <title>RE/MAX Excellence - The Youngest, Fastest-Growing Brokerage in Ontario</title>
        <meta name="description" content="Your Trusted Real Estate Partner — With a Fresh Edge. Join Ontario's youngest, fastest-growing real estate brokerage." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div className="bg-background min-h-screen">
        <Header />
        <HeroSection />
        
        {/* SECTION 1: Who We Are */}
        <section className="py-24 bg-gradient-to-br from-white via-blue-50 to-indigo-100 relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-red-200/30 to-red-300/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-blue-200/30 to-blue-300/20 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-purple-200/20 to-purple-300/10 rounded-full blur-3xl"></div>
          </div>
          
                     {/* Creative Floating Balloon Elements */}
                     <div className="absolute right-16 top-1/3 z-10">
                       <div className="relative">
                         <Image 
                           src="/images/ballon.png" 
                           alt="RE/MAX Balloon" 
                           width={64} 
                           height={64} 
                           className="w-16 h-16 object-contain opacity-60 animate-pulse transform rotate-6"
                         />
                         <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-full opacity-70 animate-bounce"></div>
                         <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full opacity-80 animate-ping"></div>
                       </div>
                     </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div 
              className="text-center mb-20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-red-500 to-red-600 rounded-full text-white text-sm font-semibold shadow-lg mb-6">
                <Crown className="w-4 h-4 mr-2" />
                Ontario's Premier Brokerage
              </div>
              <h2 className="text-5xl lg:text-6xl font-black text-slate-900 mb-8 font-montserrat leading-tight">
                Your Trusted Real Estate Partner
                <span className="block text-transparent bg-gradient-to-r from-red-500 via-blue-600 to-purple-600 bg-clip-text">
                  With a Fresh Edge
                </span>
              </h2>
              <p className="text-xl text-slate-600 max-w-4xl mx-auto font-arial leading-relaxed">
                At RE/MAX Excellence, we're proud to be the youngest brokerage in the RE/MAX family, and that's our advantage. We bring fresh ideas, modern marketing, and a results-driven approach that keeps us ahead in a fast-changing market.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <p className="text-xl text-slate-700 leading-relaxed font-arial">
                  Our team is made up of highly motivated agents and industry leaders who believe in doing things smarter, faster, and better. Whether you're a first-time buyer, a seasoned investor, or a Realtor® looking for the best brokerage to grow with, we're here to deliver.
                </p>
                
                {/* Enhanced Stats Grid */}
                <div className="grid grid-cols-2 gap-6">
                  <motion.div 
                    className="group relative p-8 bg-white rounded-2xl shadow-xl border border-slate-200 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105"
                    whileHover={{ y: -8 }}
                  >
                    <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-red-500 to-red-600 rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-500"></div>
                    <div className="relative z-10">
                      <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-shadow duration-500">
                        <Users className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-slate-900 mb-2 text-center">50+</h3>
                      <p className="text-slate-600 text-center font-semibold">Motivated Agents</p>
                      <p className="text-slate-500 text-sm text-center mt-2">Growing daily</p>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className="group relative p-8 bg-white rounded-2xl shadow-xl border border-slate-200 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105"
                    whileHover={{ y: -8 }}
                  >
                    <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-500"></div>
                    <div className="relative z-10">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-shadow duration-500">
                        <TrendingUp className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-slate-900 mb-2 text-center">#1</h3>
                      <p className="text-slate-600 text-center font-semibold">Fastest Growing</p>
                      <p className="text-slate-500 text-sm text-center mt-2">In Ontario</p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div className="bg-white rounded-3xl p-10 shadow-2xl border border-slate-200">
                  <h3 className="text-3xl font-bold text-slate-900 mb-6 font-montserrat">Why Choose RE/MAX Excellence?</h3>
                  <div className="space-y-6">
                    {[
                      {
                        icon: Crown,
                        title: "Market Leadership",
                        description: "As part of the world's #1 real estate brand, we bring unmatched credibility."
                      },
                      {
                        icon: Zap,
                        title: "Innovation First",
                        description: "Our young, dynamic approach means cutting-edge tools and fresh strategies."
                      },
                      {
                        icon: Shield,
                        title: "Full Support",
                        description: "From training to marketing, we provide everything you need to succeed."
                      }
                    ].map((feature, index) => (
                      <div key={index} className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                          <feature.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h4 className="font-bold text-slate-900 mb-2 font-montserrat">{feature.title}</h4>
                          <p className="text-slate-600 font-arial">{feature.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        
        <TeamSection />
        
        {/* SECTION 2: For Home Buyers & Sellers */}
        <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-20 right-10 w-80 h-80 bg-gradient-to-br from-blue-200/20 to-indigo-300/15 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 left-10 w-72 h-72 bg-gradient-to-br from-green-200/20 to-emerald-300/15 rounded-full blur-3xl"></div>
          </div>
          
                     {/* Creative Floating Balloon Elements */}
                     <div className="absolute left-16 bottom-1/3 z-10">
                       <div className="relative">
                         <Image 
                           src="/images/ballon.png" 
                           alt="RE/MAX Balloon" 
                           width={64} 
                           height={64} 
                           className="w-16 h-16 object-contain opacity-60 animate-pulse transform -rotate-6"
                         />
                         <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-green-400 to-teal-500 rounded-full opacity-70 animate-bounce"></div>
                         <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-full opacity-80 animate-ping"></div>
                       </div>
                     </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div 
              className="text-center mb-20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl lg:text-6xl font-black text-slate-900 mb-8 font-montserrat leading-tight">
                Making Every <span className="text-transparent bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text">Move Count</span>
              </h2>
              <p className="text-xl text-slate-600 max-w-4xl mx-auto font-arial leading-relaxed">
                Whether you're buying your dream home or selling for maximum value, our innovative approach ensures you get the results you deserve.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div className="bg-white rounded-3xl p-10 shadow-2xl border border-slate-200">
                  <h3 className="text-3xl font-bold text-slate-900 mb-6 font-montserrat">For Buyers</h3>
                  <p className="text-lg text-slate-700 mb-6 font-arial leading-relaxed">
                    We pair you with an agent who understands your needs, connects you with the right properties, and negotiates fiercely on your behalf.
                  </p>
                  <div className="space-y-4">
                    {[
                      "Personalized property matching",
                      "Expert negotiation support",
                      "Market insights and analysis",
                      "Seamless closing process"
                    ].map((benefit, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-emerald-600 rounded-full flex items-center justify-center flex-shrink-0">
                          <CheckCircle className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-slate-700 font-medium">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div className="bg-white rounded-3xl p-10 shadow-2xl border border-slate-200">
                  <h3 className="text-3xl font-bold text-slate-900 mb-6 font-montserrat">For Sellers</h3>
                  <p className="text-lg text-slate-700 mb-6 font-arial leading-relaxed">
                    Our innovative marketing strategies, from professional staging and drone photography to targeted social media ads, ensure your property gets noticed by the right buyers.
                  </p>
                  <div className="space-y-4">
                    {[
                      "Professional staging & photography",
                      "Drone & virtual tours",
                      "Targeted social media marketing",
                      "Maximum exposure strategy"
                    ].map((benefit, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className="w-6 h-6 bg-gradient-to-br from-emerald-500 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                          <CheckCircle className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-slate-700 font-medium">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>

            <motion.div 
              className="text-center mt-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Button className="bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 text-white font-bold px-8 py-4 text-xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border-2 border-blue-500 rounded-xl">
                <Search className="w-6 h-6 mr-3" />
                View Current Listings
                <ArrowRight className="w-6 h-6 ml-3" />
              </Button>
            </motion.div>
          </div>
        </section>

        {/* SECTION 3: For Realtors® — Join Us */}
        <section className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-80 h-80 bg-gradient-to-br from-red-500/10 to-orange-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-72 h-72 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"></div>
          </div>
          
                     {/* Creative Floating Balloon Elements */}
                     <div className="absolute right-16 top-1/2 z-10">
                       <div className="relative">
                         <Image 
                           src="/images/ballon.png" 
                           alt="RE/MAX Balloon" 
                           width={64} 
                           height={64} 
                           className="w-16 h-16 object-contain opacity-40 animate-pulse transform rotate-12"
                         />
                         <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-orange-400 to-yellow-500 rounded-full opacity-50 animate-bounce"></div>
                         <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-full opacity-60 animate-ping"></div>
                       </div>
                     </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div 
              className="text-center mb-20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl lg:text-6xl font-black text-white mb-8 font-montserrat leading-tight">
                The Brokerage Where <span className="text-transparent bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text">Ambitious Agents Thrive</span>
              </h2>
              <p className="text-xl text-slate-300 max-w-4xl mx-auto font-arial leading-relaxed">
                Being the youngest brokerage means we've built our foundation around modern tools, strong mentorship, and a collaborative culture.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <p className="text-xl text-slate-300 leading-relaxed font-arial">
                  Our agents enjoy hands-on training, smart tools, and a vibrant workplace that celebrates growth and success. Here, you're not just another name on the roster, you're part of building a legacy.
                </p>
                
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { icon: Users, title: "Hands-on Training", color: "from-red-500 to-red-600" },
                    { icon: Zap, title: "Smart Tools", color: "from-orange-500 to-orange-600" },
                    { icon: Target, title: "Marketing Support", color: "from-purple-500 to-purple-600" },
                    { icon: Award, title: "Growth Culture", color: "from-pink-500 to-pink-600" }
                  ].map((feature, index) => (
                    <motion.div 
                      key={index}
                      className="group relative p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-500 transform hover:-translate-y-2"
                      whileHover={{ y: -8 }}
                    >
                      <div className={`w-12 h-12 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                        <feature.icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-white font-bold text-center font-montserrat">{feature.title}</h3>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-10 border border-white/20">
                  <h3 className="text-3xl font-bold text-white mb-6 font-montserrat">Current Programs</h3>
                  <div className="space-y-6">
                    <div className="bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-2xl p-6 border border-red-500/30">
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-xl flex items-center justify-center">
                          <Target className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h4 className="text-white font-bold text-lg">Accountability Program</h4>
                          <p className="text-red-200 text-sm">Currently Running</p>
                        </div>
                      </div>
                      <p className="text-slate-200 font-arial">
                        Our comprehensive accountability course helps agents stay focused, track progress, and achieve their goals through structured support and mentorship.
                      </p>
                    </div>
                    
                    <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl p-6 border border-blue-500/30">
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                          <TrendingUp className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h4 className="text-white font-bold text-lg">Growth Accelerator</h4>
                          <p className="text-blue-200 text-sm">Coming Soon</p>
                        </div>
                      </div>
                      <p className="text-slate-200 font-arial">
                        Advanced training for experienced agents looking to scale their business and take their career to the next level.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            <motion.div 
              className="text-center mt-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Button className="bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white font-bold px-8 py-4 text-xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border-2 border-red-400 rounded-xl">
                <UserPlus className="w-6 h-6 mr-3" />
                Learn About Our Agent Programs
                <ArrowRight className="w-6 h-6 ml-3" />
              </Button>
            </motion.div>
          </div>
        </section>

        {/* SECTION 4: Client Testimonials */}
        <section className="py-24 bg-gradient-to-br from-white via-slate-50 to-white relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-20 right-10 w-64 h-64 bg-gradient-to-br from-yellow-200/20 to-orange-200/15 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 left-10 w-80 h-80 bg-gradient-to-br from-green-200/20 to-emerald-200/15 rounded-full blur-3xl"></div>
          </div>
          
                     {/* Creative Floating Balloon Elements */}
                     <div className="absolute left-20 top-1/3 z-10">
                       <div className="relative">
                         <Image 
                           src="/images/ballon.png" 
                           alt="RE/MAX Balloon" 
                           width={64} 
                           height={64} 
                           className="w-16 h-16 object-contain opacity-60 animate-pulse transform -rotate-12"
                         />
                         <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-orange-400 to-red-500 rounded-full opacity-70 animate-bounce"></div>
                         <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-gradient-to-br from-red-400 to-pink-500 rounded-full opacity-80 animate-ping"></div>
                       </div>
                     </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div 
              className="text-center mb-20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl lg:text-6xl font-black text-slate-900 mb-8 font-montserrat leading-tight">
                What Our <span className="text-transparent bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text">Clients Say</span>
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto font-arial leading-relaxed">
                Real stories from real clients who've experienced the RE/MAX Excellence difference.
              </p>
            </motion.div>

            <motion.div 
              className="grid md:grid-cols-3 gap-8"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {[
                {
                  name: "Sarah & Michael Chen",
                  role: "First-time Homebuyers",
                  content: "RE/MAX Excellence made our first home purchase seamless. Our agent was patient, knowledgeable, and fought hard to get us the best deal. We couldn't be happier!",
                  rating: 5
                },
                {
                  name: "Jennifer Rodriguez",
                  role: "Property Seller",
                  content: "Sold my condo in just 2 weeks for above asking price! The marketing strategy was brilliant - professional photos, virtual tours, and targeted social media campaigns.",
                  rating: 5
                },
                {
                  name: "David Thompson",
                  role: "Real Estate Investor",
                  content: "As an investor, I need an agent who understands the market deeply. RE/MAX Excellence delivered exceptional insights and helped me make smart investment decisions.",
                  rating: 5
                }
              ].map((testimonial, index) => (
                <motion.div 
                  key={index} 
                  variants={fadeInUp}
                  className="group relative p-8 bg-white rounded-3xl shadow-xl border border-slate-200 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                >
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-500"></div>
                  <div className="relative z-10">
                    <div className="flex items-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-slate-700 mb-6 font-arial leading-relaxed italic">
                      "{testimonial.content}"
                    </p>
                    <div>
                      <h4 className="font-bold text-slate-900 font-montserrat">{testimonial.name}</h4>
                      <p className="text-slate-600 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
        
        {/* Instagram Reels Carousel */}
        <section className="py-16 bg-white overflow-hidden">
          <div className="relative">
            {/* Infinite Carousel Container */}
            <div className="flex animate-scroll space-x-6">
              {/* First Set of Reels */}
              {[
                {
                  id: "DC1u6bWR4xv",
                  url: "https://www.instagram.com/reel/DC1u6bWR4xv/",
                  title: "Market Update",
                  views: "2.1K views"
                },
                {
                  id: "DNZd5ibMEbO",
                  url: "https://www.instagram.com/aman.bhandaal/reel/DNZd5ibMEbO/",
                  title: "Property Tour",
                  views: "3.5K views"
                },
                {
                  id: "DMsVaZ5x70Z",
                  url: "https://www.instagram.com/aman.bhandaal/reel/DMsVaZ5x70Z/",
                  title: "Home Buying Tips",
                  views: "4.2K views"
                },
                {
                  id: "DMnzxGePEx-",
                  url: "https://www.instagram.com/aman.bhandaal/reel/DMnzxGePEx-/",
                  title: "Success Story",
                  views: "2.8K views"
                },
                {
                  id: "DMYr0l4vgiH",
                  url: "https://www.instagram.com/aman.bhandaal/reel/DMYr0l4vgiH/",
                  title: "Market Insights",
                  views: "1.9K views"
                }
              ].map((reel, index) => (
                <div
                  key={reel.id}
                  className="flex-shrink-0 cursor-pointer group"
                  onClick={() => openReelModal(reel)}
                >
                  {/* Real Instagram Reel Embed */}
                  <div className="relative w-48 h-64 bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-200">
                    <iframe
                      src={`https://www.instagram.com/reel/${reel.id}/embed/`}
                      className="w-full h-full"
                      frameBorder="0"
                      scrolling="no"
                      allowTransparency={true}
                      allowFullScreen={true}
                      title={reel.title}
                    />
                    
                    {/* Overlay for Click Interaction */}
                    <div className="absolute inset-0 bg-transparent hover:bg-black/5 transition-colors duration-300 cursor-pointer" />
                    
                    {/* Reel Info Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-3 pointer-events-none">
                      <h3 className="text-white font-medium text-xs mb-1">{reel.title}</h3>
                      <p className="text-white/80 text-xs">{reel.views}</p>
                    </div>
                  </div>
                </div>
              ))}
              
              {/* Second Set of Reels (for infinite loop) */}
              {[
                {
                  id: "DC1u6bWR4xv",
                  url: "https://www.instagram.com/reel/DC1u6bWR4xv/",
                  title: "Market Update",
                  views: "2.1K views"
                },
                {
                  id: "DNZd5ibMEbO",
                  url: "https://www.instagram.com/aman.bhandaal/reel/DNZd5ibMEbO/",
                  title: "Property Tour",
                  views: "3.5K views"
                },
                {
                  id: "DMsVaZ5x70Z",
                  url: "https://www.instagram.com/aman.bhandaal/reel/DMsVaZ5x70Z/",
                  title: "Home Buying Tips",
                  views: "4.2K views"
                },
                {
                  id: "DMnzxGePEx-",
                  url: "https://www.instagram.com/aman.bhandaal/reel/DMnzxGePEx-/",
                  title: "Success Story",
                  views: "2.5K views"
                },
                {
                  id: "DMYr0l4vgiH",
                  url: "https://www.instagram.com/aman.bhandaal/reel/DMYr0l4vgiH/",
                  title: "Market Insights",
                  views: "1.9K views"
                }
              ].map((reel, index) => (
                <div
                  key={`second-${reel.id}`}
                  className="flex-shrink-0 cursor-pointer group"
                  onClick={() => openReelModal(reel)}
                >
                  {/* Real Instagram Reel Embed */}
                  <div className="relative w-48 h-64 bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-200">
                    <iframe
                      src={`https://www.instagram.com/reel/${reel.id}/embed/`}
                      className="w-full h-full"
                      frameBorder="0"
                      scrolling="no"
                      allowTransparency={true}
                      allowFullScreen={true}
                      title={reel.title}
                    />
                    
                    {/* Overlay for Click Interaction */}
                    <div className="absolute inset-0 bg-transparent hover:bg-black/5 transition-colors duration-300 cursor-pointer" />
                    
                    {/* Reel Info Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-3 pointer-events-none">
                      <h3 className="text-white font-medium text-xs mb-1">{reel.title}</h3>
                      <p className="text-white/80 text-xs">{reel.views}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        <Footer />

        {/* Instagram Reel Modal */}
        {isModalOpen && selectedReel && (
          <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="relative bg-white rounded-2xl max-w-md w-full max-h-[90vh] overflow-hidden">
              {/* Modal Header */}
              <div className="flex items-center justify-between p-4 border-b border-slate-200">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-red-500 to-blue-600 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">{selectedReel.title}</h3>
                    <p className="text-slate-500 text-sm">{selectedReel.views}</p>
                  </div>
                </div>
                <button
                  onClick={closeReelModal}
                  className="w-8 h-8 bg-slate-100 hover:bg-slate-200 rounded-full flex items-center justify-center transition-colors duration-200"
                >
                  <X className="w-5 h-5 text-slate-600" />
                </button>
              </div>
              
              {/* Modal Content */}
              <div className="p-6">
                <div className="bg-gradient-to-br from-red-500 to-blue-600 rounded-xl p-8 aspect-[9/16] flex items-center justify-center mb-4">
                  <div className="text-center text-white">
                    <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-10 h-10 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                    <p className="text-lg font-semibold mb-2">Instagram Reel</p>
                    <p className="text-sm opacity-80">Click below to view on Instagram</p>
                  </div>
                </div>
                
                <Button 
                  className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold py-3 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 rounded-xl"
                  onClick={() => window.open(selectedReel.url, '_blank')}
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  Watch on Instagram
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
