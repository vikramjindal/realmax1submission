import React from "react";
import Head from "next/head";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { 
  GraduationCap, 
  Target, 
  Scale, 
  Calculator,
  BookOpen,
  Users,
  Award,
  CheckCircle,
  Clock,
  Video,
  FileText,
  Zap,
  TrendingUp,
  Shield,
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

export default function Training() {
  return (
    <>
      <Head>
        <title>Professional Training | RE/MAX Excellence</title>
        <meta name="description" content="Training that turns good agents into great ones. Comprehensive education programs, AI integration, and continuous learning opportunities." />
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
          
          {/* Creative Floating Balloon Elements */}
          <div className="absolute right-8 top-16 z-10">
            <div className="relative">
              <Image 
                src="https://dontdelete2005142.kloudbean.com/1761170133_Group 14.png" 
                alt="RE/MAX Excellence Logo" 
                width={80} 
                height={80} 
                className="w-20 h-20 object-contain opacity-80 animate-pulse transform rotate-6"
              />
              <div className="absolute -top-3 -right-3 w-10 h-10 bg-gradient-to-br from-brand-medium-blue to-brand-dark-blue rounded-full opacity-60 animate-bounce"></div>
              <div className="absolute -bottom-3 -left-3 w-8 h-8 bg-gradient-to-br from-brand-bright-red to-brand-dark-red rounded-full opacity-70 animate-ping"></div>
            </div>
          </div>
          
          <div className="absolute left-8 top-32 z-10">
            <div className="relative">
              <Image 
                src="https://dontdelete2005142.kloudbean.com/1761170133_Group 14.png" 
                alt="RE/MAX Excellence Logo" 
                width={56} 
                height={56} 
                className="w-14 h-14 object-contain opacity-70 animate-bounce transform -rotate-6"
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
                Turns agents into <span className="text-transparent bg-gradient-to-r from-brand-bright-red via-brand-dark-red to-brand-medium-blue bg-clip-text">performers</span>
              </h1>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8 font-arial leading-relaxed">
                At RE/MAX Excellence, learning never stops. With 3–5 sessions every week, we keep our agents sharp, confident, and ahead of the market. From marketing strategies to legal updates, we give you the skills to close deals and build a career that lasts.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  View Training Schedule
                </Button>
                <Button size="lg" variant="outline" className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground">
                  Join Next Session
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Training Posters Carousel */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
                Comprehensive <span className="text-primary">Training Modules</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Four core areas of expertise to master your real estate career
              </p>
            </motion.div>

            <motion.div 
              className="relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="relative overflow-hidden">
                {/* Auto-scrolling carousel */}
                <div className="flex animate-scroll space-x-8 py-8">
                  {/* First set of posters */}
                  {[
                    "/images/training posters/RE (2).png",
                    "/images/training posters/SOCIAL MEDIA POSTS (13).png",
                    "/images/training posters/SOCIAL MEDIA POSTS (18).png",
                    "/images/training posters/SOCIAL MEDIA POSTS (23).png",
                    "/images/training posters/SOCIAL MEDIA POSTS (28).png",
                    "/images/training posters/SOCIAL MEDIA POSTS (5).png",
                    "/images/training posters/SOCIAL MEDIA POSTS (8).png",
                    "/images/training posters/Untitled (1080 x 1090 px) (3).png"
                  ].map((poster, index) => (
                    <div key={index} className="flex-shrink-0 group">
                      <div className="w-80 h-96 group-hover:scale-105 transition-all duration-500">
                        <Image
                          src={poster}
                          alt={`Training Poster ${index + 1}`}
                          width={320}
                          height={384}
                          className="w-full h-full object-cover rounded-lg shadow-lg group-hover:shadow-2xl transition-all duration-500"
                        />
                      </div>
                    </div>
                  ))}
                  
                  {/* Duplicate set for seamless loop */}
                  {[
                    "/images/training posters/RE (2).png",
                    "/images/training posters/SOCIAL MEDIA POSTS (13).png",
                    "/images/training posters/SOCIAL MEDIA POSTS (18).png",
                    "/images/training posters/SOCIAL MEDIA POSTS (23).png",
                    "/images/training posters/SOCIAL MEDIA POSTS (28).png",
                    "/images/training posters/SOCIAL MEDIA POSTS (5).png",
                    "/images/training posters/SOCIAL MEDIA POSTS (8).png",
                    "/images/training posters/Untitled (1080 x 1090 px) (3).png"
                  ].map((poster, index) => (
                    <div key={`duplicate-${index}`} className="flex-shrink-0 group">
                      <div className="w-80 h-96 group-hover:scale-105 transition-all duration-500">
                        <Image
                          src={poster}
                          alt={`Training Poster ${index + 1}`}
                          width={320}
                          height={384}
                          className="w-full h-full object-cover rounded-lg shadow-lg group-hover:shadow-2xl transition-all duration-500"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Training Features Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid md:grid-cols-3 gap-8"
            >
              <motion.div variants={fadeInUp}>
                <Card className="h-full border-0 bg-gradient-to-br from-pink-50 to-pink-100 hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-pink-200 rounded-full flex items-center justify-center mx-auto mb-6">
                      <TrendingUp className="h-8 w-8 text-pink-600" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-slate-800">1:1 Training & Mentorship</h3>
                    <p className="text-slate-600">
                      Fast-track your career with proven strategies and techniques that deliver immediate results.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Card className="h-full border-0 bg-gradient-to-br from-blue-50 to-blue-100 hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-blue-200 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Users className="h-8 w-8 text-blue-600" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-slate-800">Role Play Sessions</h3>
                    <p className="text-slate-600">
                      Learn from top-performing agents and industry experts with years of proven success.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Card className="h-full border-0 bg-gradient-to-br from-pink-50 to-pink-100 hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-pink-200 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Zap className="h-8 w-8 text-pink-600" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-slate-800">In-House Coaching</h3>
                    <p className="text-slate-600">
                      Stay ahead with the latest industry trends, technology, and best practices.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Training Modules */}
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
                Comprehensive <span className="text-primary">Training Modules</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Four core areas of expertise to master your real estate career
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
                      <Target className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-4">Marketing Mastery</h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      Master digital marketing, social media strategies, and lead generation techniques.
                    </p>
                    <ul className="text-xs text-muted-foreground space-y-2 text-left">
                      <li className="flex items-center">
                        <CheckCircle className="h-3 w-3 text-primary mr-2" />
                        Social media marketing
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-3 w-3 text-primary mr-2" />
                        Content creation
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-3 w-3 text-primary mr-2" />
                        Lead nurturing
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-3 w-3 text-primary mr-2" />
                        Brand building
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Card className="h-full border-0 bg-white hover:shadow-lg transition-all duration-300 group">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-secondary to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                      <GraduationCap className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-4">Pre-Construction Strategy</h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      Specialized training for pre-construction sales and development projects.
                    </p>
                    <ul className="text-xs text-muted-foreground space-y-2 text-left">
                      <li className="flex items-center">
                        <CheckCircle className="h-3 w-3 text-secondary mr-2" />
                        Developer relationships
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-3 w-3 text-secondary mr-2" />
                        Floor plan analysis
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-3 w-3 text-secondary mr-2" />
                        Investment strategies
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-3 w-3 text-secondary mr-2" />
                        Market timing
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Card className="h-full border-0 bg-white hover:shadow-lg transition-all duration-300 group">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-primary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                      <Scale className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-4">Legal & Compliance</h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      Stay compliant with current regulations and legal requirements.
                    </p>
                    <ul className="text-xs text-muted-foreground space-y-2 text-left">
                      <li className="flex items-center">
                        <CheckCircle className="h-3 w-3 text-purple-500 mr-2" />
                        Contract law
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-3 w-3 text-purple-500 mr-2" />
                        Disclosure requirements
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-3 w-3 text-purple-500 mr-2" />
                        Ethics training
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-3 w-3 text-purple-500 mr-2" />
                        Risk management
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Card className="h-full border-0 bg-white hover:shadow-lg transition-all duration-300 group">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                      <Calculator className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-4">Mortgage & Finance</h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      Understand financing options and help clients navigate the mortgage process.
                    </p>
                    <ul className="text-xs text-muted-foreground space-y-2 text-left">
                      <li className="flex items-center">
                        <CheckCircle className="h-3 w-3 text-primary mr-2" />
                        Mortgage products
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-3 w-3 text-primary mr-2" />
                        Qualification process
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-3 w-3 text-primary mr-2" />
                        Credit analysis
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-3 w-3 text-primary mr-2" />
                        Rate negotiations
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </section>


        {/* Training Deliverables Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
                Training <span className="text-primary">Deliverables</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Comprehensive skill development across all essential areas of real estate success
              </p>
            </motion.div>

            <motion.div 
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {/* 7 Day Schedule */}
              <motion.div variants={fadeInUp}>
                <Card className="h-full border-0 bg-gradient-to-br from-blue-50 to-blue-100 hover:shadow-lg transition-all duration-300 group">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <Clock className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-blue-800">7-Day Schedule</h3>
                    <p className="text-blue-700 text-sm">
                      Structured weekly planning and time management system for maximum productivity and consistent results.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Monthly Task Review */}
              <motion.div variants={fadeInUp}>
                <Card className="h-full border-0 bg-gradient-to-br from-green-50 to-green-100 hover:shadow-lg transition-all duration-300 group">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <CheckCircle className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-green-800">Monthly Task Review</h3>
                    <p className="text-green-700 text-sm">
                      Comprehensive monthly assessment and planning sessions to track progress and optimize performance.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Budgets */}
              <motion.div variants={fadeInUp}>
                <Card className="h-full border-0 bg-gradient-to-br from-purple-50 to-purple-100 hover:shadow-lg transition-all duration-300 group">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <Calculator className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-purple-800">Budget Management</h3>
                    <p className="text-purple-700 text-sm">
                      Financial planning and budget allocation strategies for sustainable business growth and profitability.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Follow Up Strategy */}
              <motion.div variants={fadeInUp}>
                <Card className="h-full border-0 bg-gradient-to-br from-orange-50 to-orange-100 hover:shadow-lg transition-all duration-300 group">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <Target className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-orange-800">Follow-Up Strategy</h3>
                    <p className="text-orange-700 text-sm">
                      Systematic follow-up processes and lead nurturing techniques to convert prospects into clients.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Pre-qualifying Buyers */}
              <motion.div variants={fadeInUp}>
                <Card className="h-full border-0 bg-gradient-to-br from-red-50 to-red-100 hover:shadow-lg transition-all duration-300 group">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <Users className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-red-800">Pre-qualifying Buyers</h3>
                    <p className="text-red-700 text-sm">
                      Advanced buyer qualification techniques to identify serious prospects and maximize closing rates.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Objection Handling */}
              <motion.div variants={fadeInUp}>
                <Card className="h-full border-0 bg-gradient-to-br from-teal-50 to-teal-100 hover:shadow-lg transition-all duration-300 group">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <Shield className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-teal-800">Objection Handling</h3>
                    <p className="text-teal-700 text-sm">
                      Proven techniques to address and overcome common client objections and concerns effectively.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Negotiation Skills */}
              <motion.div variants={fadeInUp}>
                <Card className="h-full border-0 bg-gradient-to-br from-indigo-50 to-indigo-100 hover:shadow-lg transition-all duration-300 group">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <Scale className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-indigo-800">Negotiation Skills</h3>
                    <p className="text-indigo-700 text-sm">
                      Advanced negotiation strategies and tactics to secure the best deals for your clients.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Communication Skills */}
              <motion.div variants={fadeInUp}>
                <Card className="h-full border-0 bg-gradient-to-br from-pink-50 to-pink-100 hover:shadow-lg transition-all duration-300 group">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <BookOpen className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-pink-800">Communication Skills</h3>
                    <p className="text-pink-700 text-sm">
                      Professional communication techniques for effective client relationships and business development.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Dress Up */}
              <motion.div variants={fadeInUp}>
                <Card className="h-full border-0 bg-gradient-to-br from-amber-50 to-amber-100 hover:shadow-lg transition-all duration-300 group">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <Award className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-amber-800">Professional Image</h3>
                    <p className="text-amber-700 text-sm">
                      Professional presentation and personal branding strategies to build trust and credibility.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Ken Wilder In-House Coach Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="space-y-6">
                  <div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                      <span className="text-red-600">In-House</span> Real Estate Coach
                    </h2>
                    <h3 className="text-5xl md:text-6xl font-black text-slate-900 mb-6">
                      Ken Wilder
                    </h3>
                  </div>
                  
                  <p className="text-lg text-slate-600 leading-relaxed">
                    Ken Wilder brings over 39 years of real estate experience and 20+ years of coaching expertise. He has guided countless agents and teams to grow their businesses, close more deals, and achieve long-term success through proven strategies and practical coaching. Known for his practical, results-driven approach, Ken blends proven business strategies with mindset development, ensuring his clients not only grow their income but also create balance and longevity in their careers. Whether you're a new agent seeking guidance or a seasoned professional aiming to scale, Ken Wilder's mission is clear: to help you unlock your full potential and build the real estate business you've always envisioned.
                  </p>
                  
                  <div className="pt-4">
                    <Button size="lg" className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold px-8 py-4 text-lg">
                      GET YOUR FREE GUIDE
                    </Button>
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
                <div className="relative">
                  <Image
                    src="https://dontdelete2005142.kloudbean.com/1761170485_Ken Wilder.png"
                    alt="Ken Wilder - In-House Real Estate Coach"
                    width={500}
                    height={600}
                    className="w-full h-auto object-cover rounded-lg shadow-2xl"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* IN-HOUSE COACH Section - Client Request */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
                Meet Your <span className="text-primary">IN-HOUSE COACH</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Dedicated coaching and mentorship to accelerate your success
              </p>
            </motion.div>

            <motion.div 
              className="grid lg:grid-cols-2 gap-12 items-center"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                      <Users className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-2">One-on-One Coaching</h3>
                      <p className="text-muted-foreground">
                        Personalized coaching sessions tailored to your specific needs and career goals.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-secondary to-purple-500 rounded-full flex items-center justify-center">
                      <Target className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-2">Goal Setting & Tracking</h3>
                      <p className="text-muted-foreground">
                        Set ambitious goals and track your progress with regular check-ins and accountability.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-primary rounded-full flex items-center justify-center">
                      <TrendingUp className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-2">Performance Optimization</h3>
                      <p className="text-muted-foreground">
                        Identify areas for improvement and implement strategies to maximize your results.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="w-32 h-32 object-contain opacity-70 animate-pulse shadow-xl transform rotate-12 absolute -top-8 -right-8">
                  <Image src="https://dontdelete2005142.kloudbean.com/1761170133_Group 14.png" alt="RE/MAX Excellence Logo" width={128} height={128} className="w-full h-full" />
                </div>
                <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8 shadow-2xl">
                  <h3 className="text-2xl font-bold mb-4">Coaching Benefits</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-6 w-6 text-green-600" />
                      <span className="text-slate-700">Weekly coaching sessions</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-6 w-6 text-green-600" />
                      <span className="text-slate-700">Performance analytics</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-6 w-6 text-green-600" />
                      <span className="text-slate-700">Actionable feedback</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-6 w-6 text-green-600" />
                      <span className="text-slate-700">24/7 support access</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ABOUT KEN WILDER Section - Client Request */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
                About <span className="text-primary">KEN WILDER</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Your dedicated mentor at RE/MAX Excellence
              </p>
            </motion.div>

            <motion.div 
              className="grid lg:grid-cols-2 gap-12 items-center"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative">
                <div className="w-28 h-28 object-contain opacity-80 animate-bounce shadow-2xl transform -rotate-12 absolute -top-8 -left-8">
                  <Image src="https://dontdelete2005142.kloudbean.com/1761170133_Group 14.png" alt="RE/MAX Excellence Logo" width={112} height={112} className="w-full h-full" />
                </div>
                <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8 shadow-2xl">
                  <h3 className="text-2xl font-bold mb-4">Experience & Expertise</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-6 w-6 text-green-600" />
                      <span className="text-slate-700">39+ years in real estate</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-6 w-6 text-green-600" />
                      <span className="text-slate-700">20+ years of coaching expertise</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-6 w-6 text-green-600" />
                      <span className="text-slate-700">$100M+ in sales volume</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-6 w-6 text-green-600" />
                      <span className="text-slate-700">Top 1% RE/MAX agent</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-6 w-6 text-green-600" />
                      <span className="text-slate-700">Mentored 50+ agents</span>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                      <Award className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-2">Award-Winning Leadership</h3>
                      <p className="text-muted-foreground">
                        Recognized as one of Ontario's top real estate professionals with multiple industry awards.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-secondary to-purple-500 rounded-full flex items-center justify-center">
                      <GraduationCap className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-2">Continuous Learning</h3>
                      <p className="text-muted-foreground">
                        Committed to staying ahead of market trends and sharing knowledge with our team.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-primary rounded-full flex items-center justify-center">
                      <Users className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-2">Team Building</h3>
                      <p className="text-muted-foreground">
                        Built RE/MAX Excellence from the ground up, creating opportunities for ambitious agents.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>


        {/* AI Integration */}
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
                  AI-Enhanced <span className="text-primary">Learning Experience</span>
                </h2>
                <p className="text-xl text-muted-foreground mb-8">
                  Our training programs integrate cutting-edge AI technology to personalize your learning journey and maximize retention.
                </p>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center">
                      <BookOpen className="h-6 w-6 text-pink-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Personalized Learning Paths</h3>
                      <p className="text-muted-foreground">AI adapts content based on your learning style, pace, and career goals.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Video className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Interactive Simulations</h3>
                      <p className="text-muted-foreground">Practice real-world scenarios with AI-powered role-playing exercises.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                      <Award className="h-6 w-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Progress Tracking</h3>
                      <p className="text-muted-foreground">Monitor your development with detailed analytics and achievement badges.</p>
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
                <div className="rounded-2xl overflow-hidden shadow-2xl">
                  <Image 
                    src="https://dontdelete2005142.kloudbean.com/1761169495_Futuristic Tools for todays Agents.png"
                    alt="Futuristic Tools for Today's Agents"
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Training Formats */}
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
                Flexible <span className="text-primary">Learning Options</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Choose the format that works best for your schedule and learning style. We also offer TREEB, MRREB, and RECO sessions to meet your professional development needs.
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
                <Card className="h-full border-0 bg-white hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Users className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">In-Person Workshops</h3>
                    <p className="text-muted-foreground mb-6">
                      Interactive classroom sessions with hands-on activities and networking opportunities.
                    </p>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex items-center justify-center">
                        <Clock className="h-4 w-4 mr-2" />
                        Full-day sessions
                      </div>
                      <div className="flex items-center justify-center">
                        <Users className="h-4 w-4 mr-2" />
                        Small group setting
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Card className="h-full border-0 bg-white hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Video className="h-8 w-8 text-secondary" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">Virtual Sessions</h3>
                    <p className="text-muted-foreground mb-6">
                      Live online training sessions with real-time interaction and Q&A opportunities.
                    </p>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex items-center justify-center">
                        <Clock className="h-4 w-4 mr-2" />
                        Flexible timing
                      </div>
                      <div className="flex items-center justify-center">
                        <Video className="h-4 w-4 mr-2" />
                        Interactive features
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Card className="h-full border-0 bg-white hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                      <FileText className="h-8 w-8 text-purple-500" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">Self-Paced Learning</h3>
                    <p className="text-muted-foreground mb-6">
                      Access comprehensive course materials and videos anytime, anywhere at your own pace.
                    </p>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex items-center justify-center">
                        <Clock className="h-4 w-4 mr-2" />
                        24/7 access
                      </div>
                      <div className="flex items-center justify-center">
                        <FileText className="h-4 w-4 mr-2" />
                        Downloadable resources
                      </div>
                    </div>
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