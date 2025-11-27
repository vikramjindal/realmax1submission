import React, { useEffect, useRef } from "react";
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
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
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

// Builder logos array
const builderLogos = [
  { name: "Austin Birch", image: "https://dontdelete2005142.kloudbean.com/1764283324_builders%20logos/images_0012_Austiin-Birch.png" },
  { name: "Great Gulf", image: "https://dontdelete2005142.kloudbean.com/1764283324_builders%20logos/images_0014_GREAT-GULF.png" },
  { name: "Opus Homes", image: "https://dontdelete2005142.kloudbean.com/1764283324_builders%20logos/images_0016_OPUS-Homes.png" },
  { name: "Mattamy Homes", image: "https://dontdelete2005142.kloudbean.com/1764283324_builders%20logos/images_0000_mattamyhomes.png" },
  { name: "Branthaven", image: "https://dontdelete2005142.kloudbean.com/1764283324_builders%20logos/images_0001_BRANTHAVEN.png" },
  { name: "Rosehaven", image: "https://dontdelete2005142.kloudbean.com/1764283324_builders%20logos/images_0002_ROSEHAVEN.png" },
  { name: "CentreCourt", image: "https://dontdelete2005142.kloudbean.com/1764283324_builders%20logos/images_0003_CENTRECOURT.png" },
  { name: "Fieldgate Homes", image: "https://dontdelete2005142.kloudbean.com/1764283324_builders%20logos/images_0006_FIELDGATE-Homes.png" },
  { name: "Ballantry Homes", image: "https://dontdelete2005142.kloudbean.com/1764283324_builders%20logos/images_0004_BALLANTRY.png" },
  { name: "Greenpark Group", image: "https://dontdelete2005142.kloudbean.com/1764283324_builders%20logos/images_0007_GreenPark-Group.png" },
  { name: "Deco", image: "https://dontdelete2005142.kloudbean.com/1764283324_builders%20logos/images_0008_DECO.png" },
  { name: "Treasure Hill", image: "https://dontdelete2005142.kloudbean.com/1764283324_builders%20logos/images_0011_TREASURE-HILL.png" },
];

// Builder Logos Carousel Component
function BuilderLogosCarousel() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  // Auto-scroll functionality
  useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, 3000); // Auto-scroll every 3 seconds

    return () => clearInterval(interval);
  }, [api]);

  return (
    <div className="w-full">
      <Carousel
        setApi={setApi}
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {builderLogos.map((logo, index) => (
            <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/3 lg:basis-1/4 xl:basis-1/5">
              <div className="relative h-48 md:h-56 lg:h-64 bg-white rounded-lg border-2 border-slate-200 shadow-lg hover:shadow-xl hover:border-brand-bright-red transition-all duration-300 flex items-center justify-center p-8 overflow-hidden group">
                <div className="relative w-full h-full flex items-center justify-center">
                  <Image
                    src={logo.image}
                    alt={logo.name}
                    width={250}
                    height={150}
                    className="object-contain w-full h-full max-w-full max-h-full"
                    unoptimized
                    priority={index < 5}
                    onError={(e) => {
                      // Hide image on error - fallback will show
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                    }}
                    onLoad={(e) => {
                      // Hide fallback when image loads successfully
                      const target = e.target as HTMLImageElement;
                      const card = target.closest('.group');
                      if (card) {
                        const fallback = card.querySelector('.fallback-text') as HTMLElement;
                        if (fallback) {
                          fallback.style.display = 'none';
                        }
                      }
                    }}
                  />
                  <div className="fallback-text absolute inset-0 flex flex-col items-center justify-center text-slate-400 text-sm font-medium text-center px-4">
                    <Building2 className="h-12 w-12 text-slate-300 mb-2" />
                    <span>{logo.name}</span>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}

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
                className="h-full"
              >
                <Card className="h-full bg-white border border-slate-200 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2 flex flex-col">
                  <CardContent className="p-8 flex flex-col flex-1">
                    <div className="w-20 h-20 bg-brand-bright-red rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                      <HomeIcon className="h-10 w-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-center text-slate-900 min-h-[4rem] flex items-center justify-center">
                      In-House<br/>Pre-Construction Access
                    </h3>
                    <p className="text-slate-600 mb-6 text-center leading-relaxed flex-grow">
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
                className="h-full"
              >
                <Card className="h-full bg-white border border-slate-200 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2 flex flex-col">
                  <CardContent className="p-8 flex flex-col flex-1">
                    <div className="w-20 h-20 bg-brand-dark-blue rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                      <TrendingUp className="h-10 w-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-center text-slate-900 min-h-[4rem] flex items-center justify-center">
                      Dedicated Admin Support
                    </h3>
                    <p className="text-slate-600 mb-6 text-center leading-relaxed flex-grow">
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
                className="h-full"
              >
                <Card className="h-full bg-white border border-slate-200 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2 flex flex-col">
                  <CardContent className="p-8 flex flex-col flex-1">
                    <div className="w-20 h-20 bg-brand-bright-red rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                      <Users className="h-10 w-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-center text-slate-900 min-h-[4rem] flex items-center justify-center">
                      Coaching & Training
                    </h3>
                    <p className="text-slate-600 mb-6 text-center leading-relaxed flex-grow">
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

              {/* Right Image Carousel */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <Card className="bg-white border border-slate-200 shadow-2xl overflow-hidden">
                  <Carousel
                    opts={{
                      align: "start",
                      loop: true,
                    }}
                    className="w-full"
                  >
                    <CarouselContent>
                      <CarouselItem>
                        <div className="relative w-full aspect-video flex items-center justify-center bg-slate-50">
                          <Image
                            src="https://dontdelete2005142.kloudbean.com/1764280267_SOCIAL MEDIA POSTS (45).jpg"
                            alt="Builder Tour Image 1"
                            width={600}
                            height={400}
                            className="object-contain w-full h-full"
                          />
                        </div>
                      </CarouselItem>
                      <CarouselItem>
                        <div className="relative w-full aspect-video flex items-center justify-center bg-slate-50">
                          <Image
                            src="https://dontdelete2005142.kloudbean.com/1764280267_SOCIAL MEDIA POSTS (46).jpg"
                            alt="Builder Tour Image 2"
                            width={600}
                            height={400}
                            className="object-contain w-full h-full"
                          />
                        </div>
                      </CarouselItem>
                    </CarouselContent>
                    <CarouselPrevious className="left-4 bg-white/80 hover:bg-white border-slate-300" />
                    <CarouselNext className="right-4 bg-white/80 hover:bg-white border-slate-300" />
                  </Carousel>
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

            <div className="grid md:grid-cols-4 gap-8 mb-8">
              {/* Social Media Assets Carousel */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="md:col-span-3"
              >
                <Card className="h-full bg-white border border-slate-200 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">Social Media Assets</h3>
                    <p className="text-slate-600 mb-6 leading-relaxed">
                      Browse our collection of ready-to-use social media templates and assets.
                    </p>
                    <Carousel
                      opts={{
                        align: "start",
                        loop: true,
                      }}
                      className="w-full"
                    >
                      <CarouselContent className="-ml-2 md:-ml-4">
                        <CarouselItem className="pl-2 md:pl-4 basis-1/2">
                          <div className="relative w-full aspect-[4/5] flex items-center justify-center bg-slate-50 rounded-lg overflow-hidden border border-slate-200">
                            <Image
                              src="https://dontdelete2005142.kloudbean.com/1764280685_SOCIAL ASSETS (61) (2).jpg"
                              alt="Social Media Asset 1"
                              width={400}
                              height={500}
                              className="object-cover w-full h-full"
                            />
                          </div>
                        </CarouselItem>
                        <CarouselItem className="pl-2 md:pl-4 basis-1/2">
                          <div className="relative w-full aspect-[4/5] flex items-center justify-center bg-slate-50 rounded-lg overflow-hidden border border-slate-200">
                            <Image
                              src="https://dontdelete2005142.kloudbean.com/1764280685_SOCIAL ASSETS (53) (2).jpg"
                              alt="Social Media Asset 2"
                              width={400}
                              height={500}
                              className="object-cover w-full h-full"
                            />
                          </div>
                        </CarouselItem>
                        <CarouselItem className="pl-2 md:pl-4 basis-1/2">
                          <div className="relative w-full aspect-[4/5] flex items-center justify-center bg-slate-50 rounded-lg overflow-hidden border border-slate-200">
                            <Image
                              src="https://dontdelete2005142.kloudbean.com/1764280685_SOCIAL ASSETS (51) (2).jpg"
                              alt="Social Media Asset 3"
                              width={400}
                              height={500}
                              className="object-cover w-full h-full"
                            />
                          </div>
                        </CarouselItem>
                        <CarouselItem className="pl-2 md:pl-4 basis-1/2">
                          <div className="relative w-full aspect-[4/5] flex items-center justify-center bg-slate-50 rounded-lg overflow-hidden border border-slate-200">
                            <Image
                              src="https://dontdelete2005142.kloudbean.com/1764280685_SOCIAL ASSETS (3) (2).gif"
                              alt="Social Media Asset 4"
                              width={400}
                              height={500}
                              className="object-cover w-full h-full"
                            />
                          </div>
                        </CarouselItem>
                      </CarouselContent>
                      <CarouselPrevious className="left-2 bg-white/90 hover:bg-white border-slate-300 shadow-lg" />
                      <CarouselNext className="right-2 bg-white/90 hover:bg-white border-slate-300 shadow-lg" />
                    </Carousel>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Email & Newsletter Kits */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="md:col-span-1"
              >
                <Card className="h-full bg-white border border-slate-200 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-slate-900 mb-3">Email & Newsletter Kits</h3>
                    <p className="text-slate-600 mb-4 text-sm leading-relaxed">
                      Plug-and-play campaign content with copy + visuals ready to send.
                    </p>
                    <div className="rounded-lg overflow-hidden border border-slate-200 w-full h-[400px]">
                      <div className="relative w-full h-full">
                        <Image
                          src="https://dontdelete2005142.kloudbean.com/1764280813_image 17 (1).png"
                          alt="Email & Newsletter Template Preview"
                          fill
                          className="object-cover"
                        />
                      </div>
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

        {/* Builder Partners Logos */}
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
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 font-montserrat mb-6">
                Our <span className="text-brand-bright-red">Builder Partners</span>
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                We work with the GTA's most trusted builders to bring you exclusive pre-construction opportunities.
              </p>
            </motion.div>

            <BuilderLogosCarousel />
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