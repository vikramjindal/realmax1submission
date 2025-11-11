import Head from 'next/head';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useJoinUsModal } from '@/contexts/JoinUsModalContext';
import { 
  Users, 
  Target, 
  TrendingUp, 
  Award, 
  Globe, 
  Lightbulb,
  Star,
  CheckCircle,
  Building2,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const AboutUs = () => {
  const { openModal } = useJoinUsModal();
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

  const values = [
    {
      icon: <Target className="h-8 w-8 text-brand-bright-red" />,
      title: "Excellence",
      description: "We never settle for anything less than exceptional results"
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-brand-medium-blue" />,
      title: "Innovation",
      description: "Constantly pushing boundaries with fresh ideas and modern approaches"
    },
    {
      icon: <Users className="h-8 w-8 text-brand-dark-blue" />,
      title: "Collaboration",
      description: "Building success together through teamwork and mutual support"
    },
    {
      icon: <Award className="h-8 w-8 text-brand-dark-red" />,
      title: "Integrity",
      description: "Maintaining the highest ethical standards in everything we do"
    }
  ];

  return (
    <>
      <Head>
        <title>About Us | RE/MAX Excellence</title>
        <meta name="description" content="Learn about RE/MAX Excellence, Ontario's youngest and fastest-growing real estate brokerage. Discover our story, mission, and the team behind our success." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="bg-background min-h-screen">
        <Header />

        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-brand-dark-blue via-brand-medium-blue to-brand-dark-blue text-white py-24">
          {/* Decorative RE/MAX Pin Icons */}
          <div className="absolute left-12 top-20 z-10 opacity-40">
            <Image 
              src="/images/company-pin-icon.png" 
              alt="RE/MAX Pin" 
              width={70} 
              height={70} 
              className="w-[70px] h-[70px] object-contain animate-bounce"
            />
          </div>
          
          <div className="absolute right-20 top-32 z-10 opacity-50">
            <Image 
              src="/images/company-pin-icon.png" 
              alt="RE/MAX Pin" 
              width={90} 
              height={90} 
              className="w-[90px] h-[90px] object-contain animate-pulse"
            />
          </div>

          <div className="absolute left-1/4 bottom-24 z-10 opacity-30">
            <Image 
              src="/images/company-pin-icon.png" 
              alt="RE/MAX Pin" 
              width={60} 
              height={60} 
              className="w-[60px] h-[60px] object-contain animate-bounce"
            />
          </div>

          <div className="absolute right-12 bottom-32 z-10 opacity-35">
            <Image 
              src="/images/company-pin-icon.png" 
              alt="RE/MAX Pin" 
              width={80} 
              height={80} 
              className="w-[80px] h-[80px] object-contain animate-pulse"
            />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Badge className="bg-brand-bright-red text-white px-6 py-2 text-sm font-semibold mb-6 rounded-full shadow-lg">
                Our Story
              </Badge>
              <h1 className="text-5xl md:text-7xl font-black mb-6 font-montserrat leading-tight">
                About <span className="text-brand-bright-red">RE/MAX Excellence</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed mb-8">
                We're the new generation of real estate, combining fresh energy with RE/MAX's unmatched global reach to give buyers, sellers, and agents the results they deserve.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Company Overview */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="grid lg:grid-cols-2 gap-12 items-center"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div>
                <h2 className="text-4xl font-bold text-slate-900 mb-6 font-montserrat">
                  Your Trusted Real Estate Partner — With a Fresh Edge
                </h2>
                <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                  At RE/MAX Excellence, we're proud to be the youngest brokerage in the RE/MAX family, and that's our advantage. We bring fresh ideas, modern marketing, and a results-driven approach that keeps us ahead in a fast-changing market.
                </p>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                  Our team is made up of highly motivated agents and industry leaders who believe in doing things smarter, faster, and better. Whether you're a first-time buyer, a seasoned investor, or a Realtor® looking for the best brokerage to grow with, we're here to deliver.
                </p>
                <Button onClick={openModal} className="bg-brand-bright-red hover:bg-brand-dark-red text-white px-8 py-3 text-lg">
                  Learn More About Our Mission
                </Button>
              </div>
              <div className="relative">
                <div className="w-32 h-32 object-contain opacity-70 animate-pulse shadow-xl transform rotate-6 absolute -top-8 -right-8">
                  <Image src="/images/company-pin-icon.png" alt="RE/MAX Pin" width={128} height={128} className="w-full h-full" />
                </div>
                <div className="bg-gradient-to-br from-brand-bright-red/10 to-brand-medium-blue/10 rounded-2xl p-8 shadow-2xl">
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">Why Choose RE/MAX Excellence</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-6 w-6 text-brand-bright-red" />
                      <span className="text-slate-700">Youngest brokerage in the RE/MAX network</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-6 w-6 text-brand-bright-red" />
                      <span className="text-slate-700">Powered by the world's most recognized real estate brand</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-6 w-6 text-brand-bright-red" />
                      <span className="text-slate-700">Millions in sales volume annually</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-6 w-6 text-brand-bright-red" />
                      <span className="text-slate-700">Local expertise with a global reach</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-slate-900 mb-6 font-montserrat">
                Our <span className="text-brand-bright-red">Core Values</span>
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                The principles that guide every decision and action at RE/MAX Excellence.
              </p>
            </motion.div>

            <motion.div 
              className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {values.slice(0, 3).map((value, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="text-center group"
                >
                  <div className="bg-gradient-to-br from-brand-bright-red/10 to-brand-medium-blue/10 rounded-2xl p-8 mb-6 group-hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                    <div className="flex justify-center mb-4">
                      {value.icon}
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">{value.title}</h3>
                    <p className="text-slate-600">{value.description}</p>
                  </div>
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

        <Footer />
      </div>
    </>
  );
};

export default AboutUs;

