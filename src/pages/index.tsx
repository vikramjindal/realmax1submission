import React, { useState, useEffect } from "react";
import Head from "next/head";

import { motion } from "framer-motion";

import Header from "@/components/Header";

import Footer from "@/components/Footer";

import TeamSection from "@/components/TeamSection";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useJoinUsModal } from "@/contexts/JoinUsModalContext";


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
  const { openModal } = useJoinUsModal();

  return (

    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div 

        className="absolute inset-0 z-0"

        style={{

          backgroundImage: 'url(/images/hero-background.png)',
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
          <div className="absolute -top-3 -right-3 w-8 h-8 bg-gradient-to-br from-red-300 to-red-500 rounded-full opacity-60 animate-pulse"></div>
          <div className="absolute -bottom-3 -left-3 w-6 h-6 bg-gradient-to-br from-red-200 to-red-400 rounded-full opacity-70 animate-ping"></div>
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

                 <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-blue-300 to-blue-500 rounded-full opacity-80 animate-pulse"></div>

             </div>

            </div>
            


      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
        <div className="flex items-center min-h-screen">
          <div className="text-left space-y-8 max-w-2xl">
            <h1 className="text-5xl lg:text-7xl font-black text-white leading-tight font-montserrat">
              <span className="block">REMAX</span>

              <span className="block text-brand-bright-red">
                EXCELLENCE
              </span>

            </h1>
            
            

            <p className="text-2xl lg:text-3xl text-white font-semibold leading-relaxed">
              One of the Youngest, Fastest-Growing Real Estate Brokerage
            </p>
            
            <div className="flex justify-start">
              <Button onClick={openModal} className="bg-brand-bright-red hover:bg-brand-dark-red text-white font-bold px-10 py-5 text-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 rounded-lg flex items-center space-x-4">
                <Users className="w-8 h-8" />
                <span>Join Our Team</span>
                <ArrowRight className="w-8 h-8" />
              </Button>

          </div>




            <div className="text-left space-y-3">
              <div className="text-5xl lg:text-6xl font-black text-white">
                120+ Motivated Agents
                </div>

              <div className="text-2xl text-white/80">
                Growing daily
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

  const { openModal } = useJoinUsModal();

  const [currentAgentIndex, setCurrentAgentIndex] = useState(0);

  const agents = [
    { src: "/images/gallery/Aman.png", name: "Aman" },
    { src: "/images/gallery/Kulwinder Gill.png", name: "Kulwinder Gill" },
    { src: "/images/gallery/Mandeep Dhesi.png", name: "Mandeep Dhesi" },
    { src: "/images/gallery/Manjot Brar.png", name: "Manjot Brar" },
    { src: "/images/gallery/Manjot Kaur.png", name: "Manjot Kaur" },
    { src: "/images/gallery/Tanvir Jhajj.png", name: "Tanvir Jhajj" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAgentIndex((prevIndex) => (prevIndex + 1) % agents.length);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, [agents.length]);


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
        
        

        {/* SECTION 1: Your Trusted Real Estate Partner */}
        <section className="py-24 bg-gradient-to-r from-brand-dark-blue via-brand-dark-blue to-brand-dark-blue relative overflow-hidden">
          {/* Background Elements */}

          <div className="absolute inset-0">

            <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-red-500/20 to-red-600/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-red-400/20 to-red-500/10 rounded-full blur-3xl"></div>
          </div>
          
          

          {/* Company Pin Icon */}
          <div className="absolute right-16 top-1/2 z-10">
                       <div className="relative">

                         <Image 

                src="/images/company-pin-icon.png"
                alt="Company Pin Icon"
                width={80}
                height={80}
                className="opacity-60 animate-pulse transform rotate-12"
              />
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-red-400 to-red-500 rounded-full opacity-70 animate-bounce"></div>
              <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-gradient-to-br from-red-400 to-red-600 rounded-full opacity-80 animate-ping"></div>
                       </div>

                     </div>
          
          

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

            <motion.div 

              className="text-center"
              initial={{ opacity: 0, y: 30 }}

              whileInView={{ opacity: 1, y: 0 }}

              transition={{ duration: 0.6 }}

              viewport={{ once: true }}

            >

              <h2 className="text-5xl lg:text-6xl font-black text-white mb-8 font-montserrat leading-tight">

                Your Trusted Real Estate Partner

                <span className="block text-brand-bright-red">
                  With a Fresh Edge

                </span>

              </h2>

              <p className="text-xl text-white max-w-4xl mx-auto font-arial leading-relaxed">

                At RE/MAX Excellence, we're proud to be one of the youngest brokerage in the RE/MAX family, and that's our advantage. We bring fresh ideas, modern marketing, and a results-driven approach that keeps us ahead in a fast-changing market.
              </p>

            </motion.div>

          </div>
        </section>
        
        {/* SECTION 2: Home of Top Performers */}
        <section className="py-24 bg-gradient-to-br from-white via-slate-50 to-white relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-20 right-10 w-80 h-80 bg-gradient-to-br from-blue-200/20 to-indigo-300/15 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 left-10 w-72 h-72 bg-gradient-to-br from-purple-200/20 to-pink-300/15 rounded-full blur-3xl"></div>
          </div>

          {/* Company Pin Icon Background */}
          <div className="absolute right-16 top-1/2 z-10">
            <div className="relative">
              <Image
                src="/images/company-pin-icon.png"
                alt="Company Pin Icon"
                width={200}
                height={200}
                className="opacity-10 animate-pulse transform rotate-12"
              />
            </div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <motion.div

              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}

                viewport={{ once: true }}

            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 mb-8 font-montserrat leading-tight px-2">
                HOME OF <span className="text-transparent bg-gradient-to-r from-brand-bright-red to-brand-dark-red bg-clip-text">TOP PERFORMERS</span>
              </h2>
            </motion.div>

            {/* Two Column Layout */}
            <div className="grid lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
              {/* Left Column - Home of Top Performers */}
                  <motion.div 

                className="bg-white rounded-3xl p-4 sm:p-6 lg:p-8 shadow-2xl border border-slate-200 hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2 group"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="flex flex-col lg:flex-row items-center lg:items-start lg:space-x-8 space-y-6 lg:space-y-0">
                      {/* Agent Image Carousel with Name */}
                      <div className="flex flex-col items-center space-y-4">
                        <div className="relative">
                          <div className="w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 shadow-2xl group-hover:shadow-3xl transition-shadow duration-500 relative rounded-2xl overflow-hidden">
                            {/* Current Agent Image */}
                            <Image
                              key={currentAgentIndex}
                              src={agents[currentAgentIndex].src}
                              alt={agents[currentAgentIndex].name}
                              width={320}
                              height={320}
                              className="w-full h-full object-contain transition-opacity duration-1000"
                            />
                          </div>

                          <div className="absolute -top-3 -right-3 w-12 h-12 bg-gradient-to-br from-brand-bright-red to-brand-dark-red rounded-full flex items-center justify-center shadow-lg">
                            <Crown className="w-6 h-6 text-white" />
                          </div>
                        </div>

                        {/* Agent Name and Disclaimer */}
                        <div className="text-center">
                          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 transition-opacity duration-1000">
                            {agents[currentAgentIndex].name}
                          </h3>
                          <p className="text-xs text-slate-500 mt-2">
                            *Selected based on performance
                          </p>
                        </div>
                      </div>

                      {/* Agent Info - #1 HOME OF TOP PERFORMERS */}
                      <div className="flex-1 text-center lg:text-left">
                        <div className="text-6xl sm:text-7xl lg:text-8xl font-black text-slate-900 mb-4">#1</div>
                        <div className="text-xl lg:text-2xl font-bold text-slate-900 mb-2 leading-tight">HOME OF TOP PERFORMERS</div>
                      </div>

                </div>

              </motion.div>



              {/* Right Column - Why Choose RE/MAX Excellence */}
              <motion.div

                className="bg-white rounded-3xl p-4 sm:p-6 lg:p-8 shadow-2xl border border-slate-200 hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2 group"
                initial={{ opacity: 0, x: 50 }}

                whileInView={{ opacity: 1, x: 0 }}

                transition={{ duration: 0.8 }}
                viewport={{ once: true }}

              >

                  <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6 font-montserrat">WHY CHOOSE RE/MAX EXCELLENCE?</h3>

                  <div className="space-y-6">

                    {[

                      {

                        icon: Crown,

                      title: "COLLABORATIVE CULTURE",
                      description: "We foster a supportive, inclusive, and high-energy environment where agents thrive together — not in isolation.",
                      color: "from-brand-dark-blue to-brand-medium-blue"
                      },

                      {

                        icon: Zap,

                      title: "YOUNG & DYNAMIC TEAM",
                      description: "Driven by fresh perspectives and digital-first strategies, our young team is adapting fast to the ever-changing real estate market.",
                      color: "from-brand-bright-red to-brand-dark-red"
                      },

                      {

                        icon: Shield,

                      title: "FULL-SERVICE SUPPORT",
                      description: "From in-house marketing to training and mentorship, we equip you with everything you need for smooth, successful transactions.",
                      color: "from-brand-medium-blue to-brand-dark-blue"
                      }

                    ].map((feature, index) => (

                      <div key={index} className="flex items-start space-x-4">

                      <div className={`w-12 h-12 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                          <feature.icon className="w-6 h-6 text-white" />

                        </div>

                        <div>

                          <h4 className="font-bold text-slate-900 mb-2 font-montserrat">{feature.title}</h4>

                        <p className="text-slate-600 font-arial text-sm leading-relaxed">{feature.description}</p>
                        </div>

                      </div>

                    ))}

                  </div>

              </motion.div>

            </div>

          </div>

        </section>

        
        
        <TeamSection />
        
        

        
        {/* SECTION 3: For Home Buyers & Sellers */}
        <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">

          {/* Background Elements */}

          <div className="absolute inset-0">

            <div className="absolute top-20 right-10 w-80 h-80 bg-gradient-to-br from-blue-200/20 to-indigo-300/15 rounded-full blur-3xl"></div>

            <div className="absolute bottom-20 left-10 w-72 h-72 bg-gradient-to-br from-green-200/20 to-emerald-300/15 rounded-full blur-3xl"></div>

          </div>
          
          

          {/* Company Pin Icon */}
                     <div className="absolute left-16 bottom-1/3 z-10">

                       <div className="relative">

                         <Image 

                src="/images/company-pin-icon.png" 
                alt="Company Pin Icon" 
                           width={64} 

                           height={64} 

                className="opacity-60 animate-pulse transform -rotate-6" 
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

                <span className="text-brand-dark-blue">Making Every</span> <span className="text-brand-bright-red">Move Count</span>
              </h2>

              <p className="text-xl text-slate-600 max-w-4xl mx-auto font-arial leading-relaxed">

                Whether you're just starting out or looking to level up, our culture, training, and support system ensure you achieve the success you deserve.
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

                  <h3 className="text-3xl font-bold text-brand-dark-blue mb-6 font-montserrat">For New Agents</h3>
                  <p className="text-lg text-slate-700 mb-6 font-arial leading-relaxed">

                    We pair you with an agent who understands your needs, connects you with the right properties, and negotiates fiercely on your behalf.

                  </p>

                  <div className="space-y-4">

                    {[

                      "Hands-on mentorship & training",
                      "Accountability & skill-building sessions",
                      "In-house marketing & admin support",
                      "A young, dynamic culture that helps you grow faster"
                    ].map((benefit, index) => (

                      <div key={index} className="flex items-center space-x-3">

                        <div className="w-6 h-6 bg-gradient-to-br from-brand-medium-blue to-brand-dark-blue rounded-full flex items-center justify-center flex-shrink-0">
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

                  <h3 className="text-3xl font-bold text-brand-dark-blue mb-6 font-montserrat">For Experienced Agents</h3>
                  <p className="text-lg text-slate-700 mb-6 font-arial leading-relaxed">

                    Our innovative marketing strategies, from professional staging and drone photography to targeted social media ads, ensure your property gets noticed by the right buyers.

                  </p>

                  <div className="space-y-4">

                    {[

                      "Advanced lead-generation strategies",
                      "Full-service marketing & branding tools",
                      "AI-driven solutions (virtual staging, digital ads, CRMs)",
                      "Maximum exposure strategy"

                    ].map((benefit, index) => (

                      <div key={index} className="flex items-center space-x-3">

                        <div className="w-6 h-6 bg-gradient-to-br from-brand-dark-blue to-brand-medium-blue rounded-full flex items-center justify-center flex-shrink-0">
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

              <Button onClick={openModal} className="bg-brand-bright-red hover:bg-brand-dark-red text-white font-bold px-8 py-4 text-xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 rounded-xl">
                <UserPlus className="w-6 h-6 mr-3" />
                Join Our Team
                <ArrowRight className="w-6 h-6 ml-3" />

              </Button>

            </motion.div>

          </div>

        </section>



        {/* SECTION 3: For Realtors® — Join Us */}

        <section className="py-24 bg-gradient-to-br from-brand-dark-blue via-brand-dark-blue to-brand-dark-blue relative overflow-hidden">
          {/* Background Elements */}

          <div className="absolute inset-0">

            <div className="absolute top-20 left-10 w-80 h-80 bg-gradient-to-br from-brand-bright-red/10 to-brand-dark-red/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-72 h-72 bg-gradient-to-br from-brand-medium-blue/10 to-brand-dark-blue/10 rounded-full blur-3xl"></div>
          </div>
          
          

          {/* Company Pin Icon */}
                     <div className="absolute right-16 top-1/2 z-10">

                       <div className="relative">

                         <Image 

                src="/images/company-pin-icon.png" 
                alt="Company Pin Icon" 
                           width={64} 

                           height={64} 

                className="opacity-40 animate-pulse transform rotate-12" 
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

                For Realtors® — <span className="text-transparent bg-gradient-to-r from-brand-bright-red to-brand-dark-red bg-clip-text">Join Us</span>
              </h2>

              <p className="text-xl text-slate-300 max-w-4xl mx-auto font-arial leading-relaxed">

                Our agents enjoy hands-on training, smart tools, and a vibrant workplace that celebrates growth and success. Here, you're not just another name on the roster, you're part of building a legacy.
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
                
                <div className="grid grid-cols-2 gap-6">

                  {[

                    { icon: Users, title: "Hands-on Training", color: "from-brand-bright-red to-brand-dark-red" },
                    { icon: Zap, title: "Smart Tools", color: "from-brand-medium-blue to-brand-dark-blue" },
                    { icon: Target, title: "Marketing Support", color: "from-brand-dark-red to-brand-bright-red" },
                    { icon: Award, title: "Growth Culture", color: "from-brand-dark-blue to-brand-medium-blue" }
                  ].map((feature, index) => (

                    <motion.div 

                      key={index}

                      className="group relative p-8 bg-brand-dark-blue/80 backdrop-blur-sm rounded-2xl border border-brand-bright-red/30 hover:bg-brand-dark-blue hover:border-brand-bright-red transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl"
                      whileHover={{ y: -8 }}

                    >

                      <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg`}>
                        <feature.icon className="w-8 h-8 text-white" />
                      </div>

                      <h3 className="text-white font-bold text-center font-montserrat text-lg">{feature.title}</h3>
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

                <div className="bg-brand-dark-blue/80 backdrop-blur-sm rounded-3xl p-10 border border-brand-bright-red/30 shadow-2xl">
                  <h3 className="text-3xl font-bold text-white mb-8 font-montserrat">Current Programs</h3>
                  <div className="space-y-6">

                    <div className="bg-gradient-to-r from-brand-bright-red/30 to-brand-dark-red/30 rounded-2xl p-8 border border-brand-bright-red/50 shadow-lg">
                      <div className="flex items-center space-x-4 mb-4">

                        <div className="w-16 h-16 bg-gradient-to-r from-brand-bright-red to-brand-dark-red rounded-2xl flex items-center justify-center shadow-lg">
                          <Target className="w-8 h-8 text-white" />
                        </div>

                        <div>

                          <h4 className="text-white font-bold text-xl">Accountability Program</h4>
                          <p className="text-brand-bright-red/90 text-sm font-semibold">Currently Running</p>
                        </div>

                      </div>

                      <p className="text-slate-200 font-arial text-lg leading-relaxed">
                        Our comprehensive accountability course helps agents stay focused, track progress, and achieve their goals through structured support and mentorship.

                      </p>

                    </div>
                    
                    

                    <div className="bg-gradient-to-r from-brand-medium-blue/30 to-brand-dark-blue/30 rounded-2xl p-8 border border-brand-medium-blue/50 shadow-lg">
                      <div className="flex items-center space-x-4 mb-4">

                        <div className="w-16 h-16 bg-gradient-to-r from-brand-medium-blue to-brand-dark-blue rounded-2xl flex items-center justify-center shadow-lg">
                          <TrendingUp className="w-8 h-8 text-white" />
                        </div>

                        <div>

                          <h4 className="text-white font-bold text-xl">Growth Accelerator</h4>
                          <p className="text-brand-medium-blue/90 text-sm font-semibold">Coming Soon</p>
                        </div>

                      </div>

                      <p className="text-slate-200 font-arial text-lg leading-relaxed">
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

              <Button onClick={openModal} className="bg-brand-bright-red hover:bg-brand-dark-red text-white font-bold px-8 py-4 text-xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 rounded-xl">
                <UserPlus className="w-6 h-6 mr-3" />

                Join Our Team
                <ArrowRight className="w-6 h-6 ml-3" />

              </Button>

            </motion.div>

          </div>

        </section>



        {/* SECTION 4: Client Testimonials */}

        <section className="py-24 bg-gradient-to-r from-brand-dark-blue via-brand-dark-blue to-brand-dark-blue relative overflow-hidden">

          {/* Background Elements */}

          <div className="absolute inset-0">

            <div className="absolute top-20 right-10 w-64 h-64 bg-gradient-to-br from-red-500/20 to-red-600/10 rounded-full blur-3xl"></div>

            <div className="absolute bottom-20 left-10 w-80 h-80 bg-gradient-to-br from-red-400/20 to-red-500/10 rounded-full blur-3xl"></div>

          </div>
          
          

          {/* Company Pin Icon */}
                     <div className="absolute left-20 top-1/3 z-10">

                       <div className="relative">

                         <Image 

                src="/images/company-pin-icon.png" 
                alt="Company Pin Icon" 
                           width={64} 

                           height={64} 

                className="opacity-60 animate-pulse transform -rotate-12" 
                         />

                         <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-red-400 to-red-500 rounded-full opacity-70 animate-bounce"></div>

                         <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-gradient-to-br from-red-400 to-red-600 rounded-full opacity-80 animate-ping"></div>

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

                What Our <span className="text-brand-bright-red">Clients Say</span>
              </h2>

              <p className="text-xl text-white max-w-3xl mx-auto font-arial leading-relaxed">

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

                  className="group relative p-8 bg-white/10 backdrop-blur-sm rounded-3xl shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"

                >

                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-red-400/30 to-red-500/20 rounded-full opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
                  <div className="relative z-10">

                    <div className="flex items-center mb-4">

                      {[...Array(testimonial.rating)].map((_, i) => (

                        <Star key={i} className="w-5 h-5 text-brand-bright-red fill-current" />
                      ))}

                    </div>

                    <p className="text-white mb-6 font-arial leading-relaxed italic">

                      "{testimonial.content}"

                    </p>

                    <div>

                      <h4 className="font-bold text-white font-montserrat">{testimonial.name}</h4>

                      <p className="text-gray-300 text-sm">{testimonial.role}</p>

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

                <div className="bg-gradient-to-br from-brand-bright-red to-brand-medium-blue rounded-xl p-8 aspect-[9/16] flex items-center justify-center mb-4">
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

                  className="w-full bg-gradient-to-r from-brand-bright-red to-brand-dark-red hover:from-brand-dark-red hover:to-brand-bright-red text-white font-bold py-3 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 rounded-xl"
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
