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
      icon: <Award className="h-8 w-8 text-brand-bright-red" />,
      title: "Integrity",
      description: "Maintaining the highest ethical standards in everything we do"
    }
  ];

  return (
    <>
      <Head>
        <title>About Us | REMAX Excellence</title>
        <meta name="description" content="Learn about REMAX Excellence, Ontario's youngest and fastest-growing real estate brokerage. Discover our story, mission, and the team behind our success." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="bg-background min-h-screen">
        <Header />

        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-brand-dark-blue via-brand-medium-blue to-brand-dark-blue text-white py-24">
          {/* Decorative REMAX Pin Icons */}
          <div className="absolute left-12 top-20 z-10 opacity-40">
            <Image 
              src="/images/company-pin-icon.png" 
              alt="REMAX Pin" 
              width={70} 
              height={70} 
              className="w-[70px] h-[70px] object-contain animate-bounce"
            />
          </div>
          
          <div className="absolute right-20 top-32 z-10 opacity-50">
            <Image 
              src="/images/company-pin-icon.png" 
              alt="REMAX Pin" 
              width={90} 
              height={90} 
              className="w-[90px] h-[90px] object-contain animate-pulse"
            />
          </div>

          <div className="absolute left-1/4 bottom-24 z-10 opacity-30">
            <Image 
              src="/images/company-pin-icon.png" 
              alt="REMAX Pin" 
              width={60} 
              height={60} 
              className="w-[60px] h-[60px] object-contain animate-bounce"
            />
          </div>

          <div className="absolute right-12 bottom-32 z-10 opacity-35">
            <Image 
              src="/images/company-pin-icon.png" 
              alt="REMAX Pin" 
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
                About <span className="text-brand-bright-red">REMAX Excellence</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed mb-8">
                We're the new generation of real estate, combining fresh energy with REMAX's unmatched global reach to give buyers, sellers, and agents the results they deserve.
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
                  At REMAX Excellence, we're proud to be the youngest brokerage in the REMAX family, and that's our advantage. We bring fresh ideas, modern marketing, and a results-driven approach that keeps us ahead in a fast-changing market.
                </p>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                  Our team is made up of highly motivated agents and industry leaders who believe in doing things smarter, faster, and better. Whether you're a first-time buyer, a seasoned investor, or a Realtor® looking for the best brokerage to grow with, we're here to deliver.
                </p>
                <Button onClick={openModal} className="bg-brand-bright-red hover:bg-black text-white px-8 py-3 text-lg">
                  Learn More About Our Mission
                </Button>
              </div>
              <div className="relative">
                <div className="w-32 h-32 object-contain opacity-70 animate-pulse shadow-xl transform rotate-6 absolute -top-8 -right-8">
                  <Image src="/images/company-pin-icon.png" alt="REMAX Pin" width={128} height={128} className="w-full h-full" />
                </div>
                <div className="bg-gradient-to-br from-brand-bright-red/10 to-brand-medium-blue/10 rounded-2xl p-8 shadow-2xl">
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">Why Choose REMAX Excellence</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-6 w-6 text-brand-bright-red" />
                      <span className="text-slate-700">Youngest brokerage in the REMAX network</span>
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

        {/* Leadership Section */}
        <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-brand-bright-red/5 relative overflow-hidden">
          {/* Background decorative elements */}
          <div className="absolute top-20 right-10 w-64 h-64 bg-brand-bright-red/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-10 w-80 h-80 bg-brand-dark-blue/5 rounded-full blur-3xl"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div 
              className="text-center mb-20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Badge className="bg-brand-bright-red text-white px-6 py-2 text-sm font-semibold mb-6 rounded-full shadow-lg">
                Meet Our Leaders
              </Badge>
              <h2 className="text-5xl md:text-6xl font-black text-slate-900 mb-6 font-montserrat">
                The <span className="text-brand-bright-red">Visionaries</span> Behind Excellence
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                Meet the dynamic duo leading Ontario's youngest and fastest-growing REMAX brokerage
              </p>
            </motion.div>

            {/* Aman Bhandal */}
            <motion.div
              className="mb-24"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="relative group">
                  <div className="absolute -inset-4 bg-gradient-to-r from-brand-bright-red to-brand-dark-blue rounded-3xl opacity-20 group-hover:opacity-30 blur-xl transition-all duration-300"></div>
                  <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                    <Image
                      src="https://dontdelete2005142.kloudbean.com/1764091856_amam image.png"
                      alt="Aman Bhandal - Broker/Owner REMAX Excellence"
                      width={600}
                      height={700}
                      className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500"
                      quality={100}
                      priority
                    />
                  </div>
                  {/* Decorative badge */}
                  <div className="absolute -bottom-6 -right-6 bg-brand-bright-red text-white rounded-2xl px-6 py-4 shadow-2xl z-10 transform group-hover:scale-110 transition-transform duration-300">
                    <div className="text-sm font-semibold">Youngest Broker/Owner</div>
                    <div className="text-xs opacity-90">REMAX Ontario Network</div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-4xl font-black text-slate-900 mb-2 font-montserrat">Aman Bhandal</h3>
                    <p className="text-xl text-brand-bright-red font-bold mb-1">Broker/Owner – REMAX Excellence</p>
                    <p className="text-lg text-brand-dark-blue font-semibold">Youngest Broker/Owner in the REMAX Ontario Network</p>
                  </div>

                  <div className="h-1 w-20 bg-gradient-to-r from-brand-bright-red to-brand-dark-blue rounded-full"></div>

                  <div className="space-y-4 text-slate-700 leading-relaxed">
                    <p className="text-lg font-semibold text-slate-900">
                      Welcome to REMAX Excellence, a place built on drive, community, and genuine passion for this business.
                    </p>
                    
                    <p>
                      I'm Aman Bhandal, and I'm proud to lead a team of over 100 hardworking, talented agents who show up every day to make things happen. For me, this isn't just about deals and numbers, it's about people.
                    </p>
                    
                    <p>
                      Our culture is what makes us different. We believe in collaboration instead of competition, and growth without ego. Everyone here helps each other win. That's what Excellence stands for.
                    </p>
                    
                    <p>
                      Whether you're new to real estate or ready to reach your next level, my door's open. Come by the office, grab a coffee, and let's talk about your goals and how to make them real.
                    </p>
                    
                    <p className="text-lg font-semibold text-brand-bright-red italic">
                      Let's grow together, and make this journey one worth remembering.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Gurv Dhillon */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Text first on desktop, image on mobile comes first */}
                <div className="space-y-6 order-2 lg:order-1">
                  <div>
                    <h3 className="text-4xl font-black text-slate-900 mb-2 font-montserrat">Gurv Dhillon</h3>
                    <p className="text-xl text-brand-dark-blue font-bold mb-1">Broker of Record – REMAX Excellence</p>
                  </div>

                  <div className="h-1 w-20 bg-gradient-to-r from-brand-dark-blue to-brand-medium-blue rounded-full"></div>

                  <div className="space-y-4 text-slate-700 leading-relaxed">
                    <p className="text-lg font-semibold text-slate-900">
                      I'm Gurv Dhillon, and to me, real estate has always been about more than sales, it's about building something lasting.
                    </p>
                    
                    <p>
                      At REMAX Excellence, we work hard, we learn fast, and we support each other. No fancy talk, no corporate layers, just real people who want to do great work and grow while doing it.
                    </p>
                    
                    <p>
                      My role is simple: to help agents succeed in their own way. Whether that means sitting down to map out a plan, offering guidance when things get tough, or celebrating the wins that make it all worth it, I'm here for it.
                    </p>
                    
                    <p>
                      And yes, sometimes that means a strategy chat… or just a laugh over a cold one.
                    </p>
                    
                    <p className="text-lg font-semibold text-brand-dark-blue italic">
                      If you're ready to find a brokerage that actually has your back, you've found it. Welcome to Excellence.
                    </p>
                  </div>
                </div>

                <div className="relative group order-1 lg:order-2">
                  <div className="absolute -inset-4 bg-gradient-to-r from-brand-dark-blue to-brand-medium-blue rounded-3xl opacity-20 group-hover:opacity-30 blur-xl transition-all duration-300"></div>
                  <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                    <Image
                      src="https://dontdelete2005142.kloudbean.com/1764091856_gurv (2).png"
                      alt="Gurv Dhillon - Broker of Record REMAX Excellence"
                      width={600}
                      height={700}
                      className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500"
                      quality={100}
                      priority
                    />
                  </div>
                  {/* Decorative badge */}
                  <div className="absolute -bottom-6 -left-6 bg-brand-dark-blue text-white rounded-2xl px-6 py-4 shadow-2xl z-10 transform group-hover:scale-110 transition-transform duration-300">
                    <div className="text-sm font-semibold">Broker of Record</div>
                    <div className="text-xs opacity-90">REMAX Excellence</div>
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
                The principles that guide every decision and action at REMAX Excellence.
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
                <Button onClick={openModal} size="lg" className="bg-brand-bright-red hover:bg-black text-white font-bold px-8 py-4 text-xl">
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

