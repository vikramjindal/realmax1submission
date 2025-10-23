import React from "react";
import Head from "next/head";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { 
  Zap, 
  Database, 
  Mail, 
  Smartphone,
  BarChart3,
  Users,
  Calendar,
  FileText,
  Globe,
  Shield,
  Cpu,
  Cloud,
  Target,
  TrendingUp,
  CheckCircle,
  Sparkles
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

export default function Tools() {
  return (
    <>
      <Head>
        <title>Tools & Technology | RE/MAX Excellence</title>
        <meta name="description" content="Built for productivity, powered by innovation. Advanced CRM, AI tools, mobile access, and cutting-edge technology for real estate success." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div className="bg-background min-h-screen">
        <Header />
        
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-violet-50 via-white to-purple-100 overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-violet-200/30 to-violet-300/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-purple-200/30 to-purple-300/20 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-purple-200/20 to-purple-300/10 rounded-full blur-3xl"></div>
          </div>
          
          {/* Creative Floating Balloon Elements */}
          <div className="absolute right-8 top-16 z-10">
            <div className="relative">
              <Image 
                src="/images/company-pin-icon.png" 
                alt="RE/MAX Balloon" 
                width={80} 
                height={80} 
                className="w-20 h-20 object-contain opacity-80 animate-pulse transform rotate-6"
              />
              <div className="absolute -top-3 -right-3 w-10 h-10 bg-gradient-to-br from-purple-400 to-indigo-500 rounded-full opacity-60 animate-bounce"></div>
              <div className="absolute -bottom-3 -left-3 w-8 h-8 bg-gradient-to-br from-indigo-400 to-blue-500 rounded-full opacity-70 animate-ping"></div>
            </div>
          </div>
          
          <div className="absolute left-8 top-32 z-10">
            <div className="relative">
              <Image 
                src="/images/company-pin-icon.png" 
                alt="RE/MAX Balloon" 
                width={56} 
                height={56} 
                className="w-14 h-14 object-contain opacity-70 animate-bounce transform -rotate-6"
              />
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full opacity-80 animate-pulse"></div>
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
                Built for <span className="text-transparent bg-gradient-to-r from-violet-500 via-purple-600 to-indigo-600 bg-clip-text">Productivity</span>, Powered by <span className="text-transparent bg-gradient-to-r from-purple-500 via-indigo-600 to-blue-600 bg-clip-text">Innovation</span>
              </h1>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8 font-arial leading-relaxed">
                Access cutting-edge technology tools designed specifically for real estate professionals. Streamline your workflow, automate tasks, and focus on what matters most - your clients.
              </p>
              <Button size="lg" className="bg-gradient-to-r from-primary to-secondary text-white hover:opacity-90">
                Explore Our Tech Tools
              </Button>
            </motion.div>
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
                      <Zap className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">Boost Productivity</h3>
                    <p className="text-muted-foreground">
                      Automate repetitive tasks and streamline your workflow to focus on high-value activities.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Card className="h-full border-0 bg-gradient-to-br from-secondary/5 to-secondary/15 hover:from-secondary/10 hover:to-secondary/20 transition-all duration-300">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Cpu className="h-8 w-8 text-secondary" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">AI-Powered Insights</h3>
                    <p className="text-muted-foreground">
                      Leverage artificial intelligence for market analysis, lead scoring, and predictive analytics.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Card className="h-full border-0 bg-gradient-to-br from-blue-500/5 to-blue-500/15 hover:from-blue-500/10 hover:to-blue-500/20 transition-all duration-300">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Cloud className="h-8 w-8 text-blue-500" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">Cloud-Based Access</h3>
                    <p className="text-muted-foreground">
                      Access your tools and data from anywhere, anytime, on any device with secure cloud technology.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Tools Showcase */}
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
                Your Complete <span className="text-primary">Tech Stack</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Everything you need to run a successful real estate business
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
                      <Database className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-4">Advanced CRM</h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      Comprehensive customer relationship management with lead tracking, pipeline management, and automated follow-ups.
                    </p>
                    <ul className="text-xs text-muted-foreground space-y-2 text-left">
                      <li className="flex items-center">
                        <CheckCircle className="h-3 w-3 text-primary mr-2" />
                        Contact management
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-3 w-3 text-primary mr-2" />
                        Deal pipeline tracking
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-3 w-3 text-primary mr-2" />
                        Automated workflows
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-3 w-3 text-primary mr-2" />
                        Task management
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Card className="h-full border-0 bg-white hover:shadow-lg transition-all duration-300 group">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-secondary to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                      <Mail className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-4">Automated Marketing</h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      Smart email campaigns, social media scheduling, and personalized marketing automation.
                    </p>
                    <ul className="text-xs text-muted-foreground space-y-2 text-left">
                      <li className="flex items-center">
                        <CheckCircle className="h-3 w-3 text-secondary mr-2" />
                        Email campaigns
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-3 w-3 text-secondary mr-2" />
                        Social media posting
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-3 w-3 text-secondary mr-2" />
                        Lead nurturing
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-3 w-3 text-secondary mr-2" />
                        Performance analytics
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Card className="h-full border-0 bg-white hover:shadow-lg transition-all duration-300 group">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-primary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                      <FileText className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-4">Transaction Tracking</h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      Complete transaction management from listing to closing with document storage and milestone tracking.
                    </p>
                    <ul className="text-xs text-muted-foreground space-y-2 text-left">
                      <li className="flex items-center">
                        <CheckCircle className="h-3 w-3 text-purple-500 mr-2" />
                        Document management
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-3 w-3 text-purple-500 mr-2" />
                        Milestone tracking
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-3 w-3 text-purple-500 mr-2" />
                        Commission calculator
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-3 w-3 text-purple-500 mr-2" />
                        Closing coordination
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Card className="h-full border-0 bg-white hover:shadow-lg transition-all duration-300 group">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-secondary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                      <Smartphone className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-4">Mobile Access</h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      Full-featured mobile apps for iOS and Android with offline capabilities and real-time sync.
                    </p>
                    <ul className="text-xs text-muted-foreground space-y-2 text-left">
                      <li className="flex items-center">
                        <CheckCircle className="h-3 w-3 text-blue-500 mr-2" />
                        Native mobile apps
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-3 w-3 text-blue-500 mr-2" />
                        Offline functionality
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-3 w-3 text-blue-500 mr-2" />
                        Real-time notifications
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-3 w-3 text-blue-500 mr-2" />
                        GPS integration
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
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
                  AI-Powered <span className="text-primary">Intelligence</span>
                </h2>
                <p className="text-xl text-muted-foreground mb-8">
                  Our artificial intelligence capabilities transform how you work, providing insights and automation that give you a competitive edge.
                </p>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                      <Target className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Smart Lead Scoring</h3>
                      <p className="text-muted-foreground">AI analyzes lead behavior and assigns priority scores to help you focus on the most promising prospects.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center">
                      <BarChart3 className="h-6 w-6 text-secondary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Market Predictions</h3>
                      <p className="text-muted-foreground">Predictive analytics help you identify market trends and price movements before they happen.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center">
                      <Sparkles className="h-6 w-6 text-purple-500" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Content Generation</h3>
                      <p className="text-muted-foreground">AI assists with creating listing descriptions, marketing copy, and social media content.</p>
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
                    alt="AI Dashboard"
                    className="w-full rounded-lg"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Interactive Elements */}
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
                Interactive <span className="text-primary">Dashboard Preview</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                See how our tools work together in a unified interface
              </p>
            </motion.div>

            <motion.div 
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {[
                {
                  icon: BarChart3,
                  title: "Analytics Dashboard",
                  desc: "Real-time performance metrics and business insights",
                  color: "primary"
                },
                {
                  icon: Calendar,
                  title: "Schedule Management",
                  desc: "Integrated calendar with automated appointment booking",
                  color: "secondary"
                },
                {
                  icon: Users,
                  title: "Client Portal",
                  desc: "Secure client access to documents and transaction updates",
                  color: "purple-500"
                },
                {
                  icon: Globe,
                  title: "Website Integration",
                  desc: "Seamless integration with your personal real estate website",
                  color: "blue-500"
                },
                {
                  icon: Shield,
                  title: "Security Center",
                  desc: "Advanced security features and compliance monitoring",
                  color: "green-500"
                },
                {
                  icon: TrendingUp,
                  title: "Performance Tracking",
                  desc: "Goal setting and progress monitoring with detailed reports",
                  color: "orange-500"
                }
              ].map((item, index) => (
                <motion.div key={index} variants={fadeInUp}>
                  <Card className="h-full border-0 bg-white hover:shadow-lg transition-all duration-300 group cursor-pointer">
                    <CardContent className="p-8 text-center">
                      <div className={`w-16 h-16 bg-${item.color}/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform`}>
                        <item.icon className={`h-8 w-8 text-${item.color}`} />
                      </div>
                      <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                      <p className="text-muted-foreground text-sm">{item.desc}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Integration Section */}
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
                Seamless <span className="text-primary">Integrations</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Connect with the tools you already use and love
              </p>
            </motion.div>

            <motion.div 
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid md:grid-cols-4 gap-8"
            >
              {[
                "MLS Systems",
                "DocuSign",
                "Google Workspace",
                "Microsoft Office",
                "Mailchimp",
                "Social Media Platforms",
                "Accounting Software",
                "Video Conferencing"
              ].map((integration, index) => (
                <motion.div key={index} variants={fadeInUp}>
                  <Card className="border-0 bg-white/50 backdrop-blur-sm hover:bg-white/80 transition-all duration-300">
                    <CardContent className="p-6 text-center">
                      <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <CheckCircle className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="font-bold">{integration}</h3>
                    </CardContent>
                  </Card>
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