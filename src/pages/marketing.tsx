import React, { useState, useEffect } from "react";
import Head from "next/head";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { useJoinUsModal } from "@/contexts/JoinUsModalContext";
import { 
  Palette, 
  Megaphone, 
  BarChart3, 
  Building,
  Zap,
  Target,
  Sparkles,
  Users,
  TrendingUp,
  Camera,
  Share2,
  Globe,
  Smartphone,
  Mail,
  CheckCircle,
  Calendar,
  Home as HomeIcon
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

export default function Marketing() {
  const { openModal } = useJoinUsModal();
  const [marketingImages, setMarketingImages] = useState<string[]>([]);

  useEffect(() => {
    // List of marketing flyer images - Order: 1-3-2-4-5-6
    const imageList = [
      'https://dontdelete2005142.kloudbean.com/1762877751_Sold_2.png',     // Position 1
      'https://dontdelete2005142.kloudbean.com/1762877751_Sold_1 .png',    // Position 3
      'https://dontdelete2005142.kloudbean.com/1762877751_sale_2.png',     // Position 2
      'https://dontdelete2005142.kloudbean.com/1762877751_Sold_2.png',     // Position 4
      'https://dontdelete2005142.kloudbean.com/1762877751_PreCon_1.jpg',   // Position 5
      'https://dontdelete2005142.kloudbean.com/1762877751_Precon_2.jpg'    // Position 6
    ];
    
    setMarketingImages(imageList);
    console.log('Marketing images loaded:', imageList);
  }, []);

  return (
    <>
      <Head>
        <title>In-House Marketing Services | RE/MAX Excellence</title>
        <meta name="description" content="Fresh, fierce & fearlessly effective marketing services. Professional design, AI-powered campaigns, and cutting-edge strategies." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div className="bg-background min-h-screen">
        <Header />
        
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-brand-bright-red/10 via-white to-brand-medium-blue/10 overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-brand-bright-red/30 to-brand-dark-red/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-brand-medium-blue/30 to-brand-dark-blue/20 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-brand-dark-blue/20 to-brand-medium-blue/10 rounded-full blur-3xl"></div>
          </div>
          
          {/* Company Pin Icon Elements */}
          <div className="absolute right-8 top-16 z-10">
            <div className="relative">
              <Image 
                src="/images/company-pin-icon.png" 
                alt="Company Pin Icon" 
                width={80} 
                height={80} 
                className="opacity-80 animate-pulse transform rotate-6"
              />
              <div className="absolute -top-3 -right-3 w-10 h-10 bg-gradient-to-br from-brand-bright-red to-brand-dark-red rounded-full opacity-60 animate-bounce"></div>
              <div className="absolute -bottom-3 -left-3 w-8 h-8 bg-gradient-to-br from-brand-medium-blue to-brand-dark-blue rounded-full opacity-70 animate-ping"></div>
            </div>
          </div>
          
          <div className="absolute left-8 top-32 z-10">
            <div className="relative">
              <Image 
                src="/images/company-pin-icon.png" 
                alt="Company Pin Icon" 
                width={56} 
                height={56} 
                className="opacity-70 animate-bounce transform -rotate-6"
              />
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-brand-dark-red to-brand-bright-red rounded-full opacity-80 animate-pulse"></div>
            </div>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-5xl lg:text-6xl font-black text-slate-900 mb-8 font-montserrat leading-tight">
                In-House Marketing with <span className="text-brand-bright-red">Edge</span>
              </h1>
              <p className="text-2xl md:text-3xl font-medium text-slate-700 mb-8 font-montserrat">
                Fresh, Fierce & Fearlessly Effective
              </p>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8 font-arial leading-relaxed">
                We don't just use marketing tools, we turn them into your growth engine. From eye-catching campaigns and AI-powered insights to brand-building strategies, we cover all your creative and strategic needs in-house.
              </p>
              <Button onClick={openModal} size="lg" className="bg-brand-bright-red hover:bg-brand-dark-red text-white font-bold px-8 py-4 text-xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 rounded-xl">
                Start Marketing Like a Pro
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Marketing Arsenal Section */}
        <section className="py-20 bg-gradient-to-br from-brand-bright-red/5 via-white to-brand-medium-blue/5 relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-brand-bright-red/10 to-brand-dark-red/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-brand-medium-blue/10 to-brand-dark-blue/5 rounded-full blur-3xl"></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 font-montserrat">
                Our <span className="text-brand-bright-red">Marketing Arsenal</span>
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto font-arial">
                Comprehensive marketing services that deliver results
              </p>
              </motion.div>

            {/* Auto-scrolling Marketing Materials Carousel */}
            <div className="relative overflow-hidden bg-transparent p-0">
              <div className="flex animate-scroll gap-4">
                {/* Dynamic Marketing Flyers - First Set */}
                {marketingImages.length > 0 ? (
                  marketingImages.map((imageUrl, index) => (
                    <div key={`first-${index}`} className="flex-shrink-0 w-72 h-auto overflow-hidden transform hover:scale-105 transition-all duration-300">
                      <Image
                        src={imageUrl}
                        alt={`Marketing Flyer ${index + 1}`}
                        width={288}
                        height={400}
                        className="w-full h-auto object-contain"
                        quality={100}
                        priority={index < 3}
                        unoptimized
                        onError={(e) => {
                          console.error('Image failed to load:', imageUrl);
                        }}
                      />
                    </div>
                  ))
                ) : (
                  <div className="flex-shrink-0 w-72 h-96 bg-gray-200 flex items-center justify-center">
                    <p className="text-gray-500">Loading marketing materials...</p>
                  </div>
                )}
                
                {/* Duplicate ALL images for seamless loop */}
                {marketingImages.length > 0 && marketingImages.map((imageUrl, index) => (
                  <div key={`duplicate-${index}`} className="flex-shrink-0 w-72 h-auto overflow-hidden transform hover:scale-105 transition-all duration-300">
                    <Image
                      src={imageUrl}
                      alt={`Marketing Flyer ${index + 1}`}
                      width={288}
                      height={400}
                      className="w-full h-auto object-contain"
                      quality={100}
                      unoptimized
                      onError={(e) => {
                        console.error('Duplicate image failed to load:', imageUrl);
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Four Quadrant Services Section */}
        <section className="py-24 bg-gradient-to-br from-brand-dark-blue/5 via-white to-brand-bright-red/5 relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-brand-medium-blue/10 to-brand-dark-blue/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-brand-bright-red/10 to-brand-dark-red/5 rounded-full blur-3xl"></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-20"
            >
              <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-8 font-montserrat">
                What <span className="text-brand-bright-red">Agents Get</span>
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto font-arial leading-relaxed">
                Four essential marketing services designed to elevate your real estate business
              </p>
              </motion.div>

            {/* Four Quadrant Grid */}
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* Flyer Design */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="group"
              >
                <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-brand-dark-red mb-4 font-montserrat text-center">Flyer Design</h3>
                    <div className="flex justify-center">
                      <Image
                        src="https://dontdelete2005142.kloudbean.com/1761000695_Flyer design.png"
                        alt="Flyer Design Example"
                        width={350}
                        height={525}
                        className="rounded-xl"
                        quality={100}
                        priority={true}
                      />
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Email Marketing */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="group"
              >
                <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-brand-dark-blue mb-4 font-montserrat text-center">Email Marketing</h3>
                    <div className="flex justify-center">
                      <Image
                        src="https://dontdelete2005142.kloudbean.com/1761000695_Email Marketing_.png"
                        alt="Email Marketing Example"
                        width={350}
                        height={525}
                        className="rounded-xl"
                        quality={100}
                        priority={true}
                      />
                    </div>
                  </div>
                </div>
            </motion.div>

              {/* Social Campaigns */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="group"
              >
                <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-brand-dark-red mb-4 font-montserrat text-center">Social Campaigns</h3>
                    <div className="flex justify-center">
                      <Image
                        src="https://dontdelete2005142.kloudbean.com/1761000695_Social Campaigns_.png"
                        alt="Social Campaigns Example"
                        width={350}
                        height={525}
                        className="rounded-xl"
                        quality={100}
                        priority={true}
                      />
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Pre-construction */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="group"
              >
                <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-brand-dark-blue mb-4 font-montserrat text-center">Pre-construction</h3>
                    <div className="flex justify-center">
                      <Image
                        src="https://dontdelete2005142.kloudbean.com/1762877284_SOCIAL ASSETS - 2025-11-11T110251.860.jpg"
                        alt="Pre-construction Example"
                        width={350}
                        height={525}
                        className="rounded-xl"
                        quality={100}
                        priority={true}
                      />
                    </div>
                  </div>
                </div>
            </motion.div>
            </div>
          </div>
        </section>

        {/* Marketing Services Section */}
        <section className="py-24 bg-gradient-to-br from-brand-bright-red/5 via-white to-brand-medium-blue/5 relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-brand-bright-red/10 to-brand-dark-red/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-brand-medium-blue/10 to-brand-dark-blue/5 rounded-full blur-3xl"></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-20"
            >
              <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-8 font-montserrat">
                Our <span className="text-brand-bright-red">Marketing Services</span>
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto font-arial leading-relaxed">
                Comprehensive marketing solutions designed to elevate your real estate business and maximize your reach
              </p>
            </motion.div>

            {/* Services Grid */}
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* Facebook Ads */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="group"
              >
                <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-brand-dark-red mb-4 font-montserrat text-center">Facebook Ads</h3>
                    <div className="flex justify-center">
                      <video
                        width={350}
                        height={525}
                        className="rounded-xl"
                        controls
                        preload="metadata"
                        onError={(e) => {
                          console.error('Video failed to load:', e);
                        }}
                      >
                        <source src="https://dontdelete2005142.kloudbean.com/1761163685_FBADS.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Welcome Package */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="group"
              >
                <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-brand-dark-blue mb-4 font-montserrat text-center">Welcome Package</h3>
                    <div className="flex justify-center">
                      <Image
                        src="https://dontdelete2005142.kloudbean.com/1761163612_MARKETING%20KIT-01.png"
                        alt="Welcome Package"
                        width={350}
                        height={525}
                        className="rounded-xl"
                        quality={100}
                        priority={true}
                        onError={(e) => {
                          console.error('Image failed to load:', e);
                        }}
                      />
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Social Media Reels/Podcast */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="group"
              >
                <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-brand-dark-red mb-4 font-montserrat text-center">Social Media Reels/Podcast</h3>
                    <div className="flex justify-center">
                      <video
                        width={350}
                        height={525}
                        className="rounded-xl"
                        controls
                        preload="metadata"
                        onError={(e) => {
                          console.error('Video failed to load:', e);
                        }}
                      >
                        <source src="https://dontdelete2005142.kloudbean.com/1761163684_gurv.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Virtual Tours */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="group"
              >
                <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-brand-dark-blue mb-4 font-montserrat text-center">Virtual Tours</h3>
                    <div className="flex justify-center">
                      <Image
                        src="https://dontdelete2005142.kloudbean.com/1761163704_6214c16f032e902b6ee30edb_61dc7edc4959c17ee5501634_dollhouse%20mock%20up%20(1)-p-800%20(1).webp"
                        alt="Virtual Tours"
                        width={350}
                        height={525}
                        className="rounded-xl"
                        quality={100}
                        priority={true}
                        onError={(e) => {
                          console.error('Image failed to load:', e);
                        }}
                      />
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Google Ads */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="group"
              >
                <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-brand-dark-red mb-4 font-montserrat text-center">Google Ads</h3>
                    <div className="flex justify-center">
                      <Image
                        src="https://dontdelete2005142.kloudbean.com/1762879530_google ads.jpg"
                        alt="Google Ads"
                        width={350}
                        height={525}
                        className="rounded-xl"
                        quality={100}
                        onError={(e) => {
                          console.error('Image failed to load:', e);
                        }}
                      />
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Social Media */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="group"
              >
                <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-brand-dark-red mb-4 font-montserrat text-center">Social Media</h3>
                    <div className="flex justify-center">
                      <Image
                        src="https://dontdelete2005142.kloudbean.com/1762879530_social media (6).jpg"
                        alt="Social Media"
                        width={350}
                        height={525}
                        className="rounded-xl"
                        quality={100}
                        onError={(e) => {
                          console.error('Image failed to load:', e);
                        }}
                      />
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Video Shoot/Editing */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="group"
              >
                <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-brand-dark-blue mb-4 font-montserrat text-center">Video Shoot/Editing</h3>
                    <div className="flex justify-center">
                      <Image
                        src="https://dontdelete2005142.kloudbean.com/1762879530_video shoot  editing.jpg"
                        alt="Video Shoot/Editing"
                        width={350}
                        height={525}
                        className="rounded-xl"
                        quality={100}
                        onError={(e) => {
                          console.error('Image failed to load:', e);
                        }}
                      />
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Website/Web Designing */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.9 }}
                className="group"
              >
                <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-brand-dark-red mb-4 font-montserrat text-center">Website/Web Designing</h3>
                    <div className="flex justify-center">
                      <Image
                        src="https://dontdelete2005142.kloudbean.com/1762879530_website.jpg"
                        alt="Website/Web Designing"
                        width={350}
                        height={525}
                        className="rounded-xl"
                        quality={100}
                        onError={(e) => {
                          console.error('Image failed to load:', e);
                        }}
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Opening Statement */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 font-montserrat">
                We're not just another marketing department, we're your creative partners.
              </h2>
            </motion.div>
          </div>
        </section>


        {/* AI Integration */}
        <section className="py-20 bg-gradient-to-r from-brand-dark-blue via-brand-dark-blue to-brand-dark-blue relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-brand-bright-red/20 to-brand-dark-red/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-brand-medium-blue/20 to-brand-dark-blue/10 rounded-full blur-3xl"></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 font-montserrat">
                  AI-Powered <span className="text-brand-bright-red">Marketing Intelligence</span>
                </h2>
                <p className="text-xl text-white mb-8 font-arial">
                  We leverage artificial intelligence to optimize every aspect of your marketing campaigns, from audience targeting to content creation.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-brand-bright-red/20 rounded-full flex items-center justify-center mt-1">
                      <Target className="h-4 w-4 text-brand-bright-red" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-2 text-white">Smart Audience Targeting</h3>
                      <p className="text-gray-300 text-sm">AI analyzes buyer behavior to target the most likely prospects for your listings.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-brand-bright-red/20 rounded-full flex items-center justify-center mt-1">
                      <Sparkles className="h-4 w-4 text-brand-bright-red" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-2 text-white">Content Optimization</h3>
                      <p className="text-gray-300 text-sm">Machine learning optimizes headlines, descriptions, and visuals for maximum engagement.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-brand-bright-red/20 rounded-full flex items-center justify-center mt-1">
                      <TrendingUp className="h-4 w-4 text-brand-bright-red" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-2 text-white">Performance Analytics</h3>
                      <p className="text-gray-300 text-sm">Real-time insights and recommendations to continuously improve campaign performance.</p>
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
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                  <img 
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="AI Marketing Dashboard"
                    className="w-full rounded-lg"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>


        {/* AI Marketing Integration Statement */}
        <section className="py-24 bg-white relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-80 h-80 bg-gradient-to-br from-pink-100/20 to-pink-200/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-purple-100/20 to-purple-200/10 rounded-full blur-3xl"></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-pink-200 to-pink-300 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="w-10 h-10 text-pink-600" />
              </div>
              <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-8 font-montserrat leading-tight">
                AI-Powered Marketing Excellence
              </h2>
            </motion.div>

            {/* Software Tools Carousel */}
            <motion.div 
              className="relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="relative overflow-hidden">
                {/* Auto-scrolling carousel */}
                <div className="flex animate-scroll space-x-12 py-8">
                  {/* First set of tools */}
                  {[
                    { name: "Collov.ai", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqtppn8zI-NDHl3tx8m_mb9EEPSjkBjh6K1A&s" },
                    { name: "Eleven Labs", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBVNpGHzjV-JkT1ekBJqayI93p42HDiK2XSw&s" },
                    { name: "Boldtrail", logo: "https://play-lh.googleusercontent.com/Arz-WvOeHYEzyixj0ObACnjFop814NxwWZuFfnoq-l-Cw-sYKxYaejfR0jMX1Z9SUA" },
                    { name: "SendGrid", logo: "https://cdn.dribbble.com/userupload/21155567/file/original-e0922910e5ed9a602582d9fc27ef9959.jpg?resize=752x&vertical=center" },
                    { name: "FollowUp Boss", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwJE_cdjNHipgrAIPP5GuGpF4S-ukkyigCPw&s" },
                    { name: "CapCut", logo: "https://i.pinimg.com/474x/0d/64/2b/0d642b674f86ef3f50cf08a522237c2e.jpg" },
                    { name: "Canva", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGpJ8UFG03-e_wuIAfqnNlnVzUDZ-4Uxxwiw&s" }
                  ].map((tool, index) => (
                    <div key={index} className="flex-shrink-0 group">
                      <div className="flex flex-col items-center space-y-4 group-hover:scale-110 transition-all duration-500">
                        <div className="w-32 h-32 flex items-center justify-center group-hover:drop-shadow-2xl transition-all duration-500">
                          <Image
                            src={tool.logo}
                            alt={tool.name}
                            width={120}
                            height={120}
                            className="object-contain filter group-hover:brightness-110 transition-all duration-500"
                          />
                    </div>
                        <h3 className="text-lg font-bold text-slate-800 group-hover:text-pink-600 transition-colors duration-300 font-montserrat">
                          {tool.name}
                        </h3>
                      </div>
                    </div>
                  ))}
                  
                  {/* Duplicate set for seamless loop */}
                  {[
                    { name: "Collov.ai", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqtppn8zI-NDHl3tx8m_mb9EEPSjkBjh6K1A&s" },
                    { name: "Eleven Labs", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBVNpGHzjV-JkT1ekBJqayI93p42HDiK2XSw&s" },
                    { name: "Boldtrail", logo: "https://play-lh.googleusercontent.com/Arz-WvOeHYEzyixj0ObACnjFop814NxwWZuFfnoq-l-Cw-sYKxYaejfR0jMX1Z9SUA" },
                    { name: "SendGrid", logo: "https://cdn.dribbble.com/userupload/21155567/file/original-e0922910e5ed9a602582d9fc27ef9959.jpg?resize=752x&vertical=center" },
                    { name: "FollowUp Boss", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwJE_cdjNHipgrAIPP5GuGpF4S-ukkyigCPw&s" },
                    { name: "CapCut", logo: "https://i.pinimg.com/474x/0d/64/2b/0d642b674f86ef3f50cf08a522237c2e.jpg" },
                    { name: "Canva", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGpJ8UFG03-e_wuIAfqnNlnVzUDZ-4Uxxwiw&s" }
                  ].map((tool, index) => (
                    <div key={`duplicate-${index}`} className="flex-shrink-0 group">
                      <div className="flex flex-col items-center space-y-4 group-hover:scale-110 transition-all duration-500">
                        <div className="w-32 h-32 flex items-center justify-center group-hover:drop-shadow-2xl transition-all duration-500">
                          <Image
                            src={tool.logo}
                            alt={tool.name}
                            width={120}
                            height={120}
                            className="object-contain filter group-hover:brightness-110 transition-all duration-500"
                          />
                    </div>
                        <h3 className="text-lg font-bold text-slate-800 group-hover:text-pink-600 transition-colors duration-300 font-montserrat">
                          {tool.name}
                        </h3>
                      </div>
                    </div>
                  ))}
                    </div>
              </div>
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