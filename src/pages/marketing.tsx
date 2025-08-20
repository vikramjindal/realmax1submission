import React from "react";
import Head from "next/head";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
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
  Mail
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
        <section className="relative py-20 bg-gradient-to-br from-purple-50 via-white to-pink-100 overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-purple-200/30 to-purple-300/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-pink-200/30 to-pink-300/20 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-purple-200/20 to-purple-300/10 rounded-full blur-3xl"></div>
          </div>
          
          {/* Creative Floating Balloon Elements */}
          <div className="absolute right-8 top-16 z-10">
            <div className="relative">
              <Image 
                src="/images/ballon.png" 
                alt="RE/MAX Balloon" 
                width={80} 
                height={80} 
                className="w-20 h-20 object-contain opacity-80 animate-pulse transform rotate-6"
              />
              <div className="absolute -top-3 -right-3 w-10 h-10 bg-gradient-to-br from-pink-400 to-rose-500 rounded-full opacity-60 animate-bounce"></div>
              <div className="absolute -bottom-3 -left-3 w-8 h-8 bg-gradient-to-br from-rose-400 to-red-500 rounded-full opacity-70 animate-ping"></div>
            </div>
          </div>
          
          <div className="absolute left-8 top-32 z-10">
            <div className="relative">
              <Image 
                src="/images/ballon.png" 
                alt="RE/MAX Balloon" 
                width={56} 
                height={56} 
                className="w-14 h-14 object-contain opacity-70 animate-bounce transform -rotate-6"
              />
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-red-400 to-orange-500 rounded-full opacity-80 animate-pulse"></div>
            </div>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full text-white text-sm font-semibold shadow-lg mb-6">
                <Megaphone className="w-4 h-4 mr-2" />
                Innovative Marketing Solutions
              </div>
              <h1 className="text-5xl lg:text-6xl font-black text-slate-900 mb-8 font-montserrat leading-tight">
                In-House Marketing with <span className="text-transparent bg-gradient-to-r from-purple-500 via-pink-600 to-rose-600 bg-clip-text">Edge</span>
              </h1>
              <p className="text-2xl md:text-3xl font-medium text-slate-700 mb-8 font-montserrat">
                Fresh, Fierce & Fearlessly Effective
              </p>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8 font-arial leading-relaxed">
                As Ontario's youngest, fastest-moving RE/MAX brokerage, we don't just use marketing tools, we turn them into your growth engine. From eye-catching campaigns and AI-powered insights to brand-building strategies, we cover all your creative and strategic needs in-house.
              </p>
              <Button size="lg" className="bg-gradient-to-r from-primary to-secondary text-white hover:opacity-90">
                Start Marketing Like a Pro
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Intro Section */}
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
                    <h3 className="text-2xl font-bold mb-4">Bold & Fearless</h3>
                    <p className="text-muted-foreground">
                      No hesitation. We take bold moves backed by data and digital smarts.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Card className="h-full border-0 bg-gradient-to-br from-secondary/5 to-secondary/15 hover:from-secondary/10 hover:to-secondary/20 transition-all duration-300">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Sparkles className="h-8 w-8 text-secondary" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">Alpha-Beta Marketing</h3>
                    <p className="text-muted-foreground">
                      Test, learn, and optimize. We harness AI, social insights, and cutting-edge strategies to stay ahead.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Card className="h-full border-0 bg-gradient-to-br from-purple-500/5 to-purple-500/15 hover:from-purple-500/10 hover:to-purple-500/20 transition-all duration-300">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Users className="h-8 w-8 text-purple-500" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">Inclusive & Empowering</h3>
                    <p className="text-muted-foreground">
                      Tools, tech, and know-how for every agent, rookie or veteran, so everyone can win.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
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

        {/* Services Section */}
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
                Our Marketing <span className="text-primary">Arsenal</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Comprehensive marketing services that deliver results
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
                      <Palette className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-4">Flyer Design</h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      Eye-catching, professional flyers that showcase your listings with stunning visuals and compelling copy.
                    </p>
                    <ul className="text-xs text-muted-foreground space-y-1">
                      <li>• Custom design templates</li>
                      <li>• High-resolution graphics</li>
                      <li>• Brand-consistent layouts</li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Card className="h-full border-0 bg-white hover:shadow-lg transition-all duration-300 group">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-secondary to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                      <Share2 className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-4">Social Campaigns</h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      Targeted social media campaigns across all platforms to maximize your listing's reach and engagement.
                    </p>
                    <ul className="text-xs text-muted-foreground space-y-1">
                      <li>• Multi-platform posting</li>
                      <li>• Targeted advertising</li>
                      <li>• Engagement optimization</li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Card className="h-full border-0 bg-white hover:shadow-lg transition-all duration-300 group">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-primary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                      <BarChart3 className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-4">Market Reports</h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      Comprehensive market analysis and reports that position you as the local market expert.
                    </p>
                    <ul className="text-xs text-muted-foreground space-y-1">
                      <li>• Data visualization</li>
                      <li>• Trend analysis</li>
                      <li>• Custom branding</li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Card className="h-full border-0 bg-white hover:shadow-lg transition-all duration-300 group">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                      <Building className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-4">Pre-Construction</h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      Specialized marketing materials for pre-construction projects with 3D renderings and floor plans.
                    </p>
                    <ul className="text-xs text-muted-foreground space-y-1">
                      <li>• 3D visualizations</li>
                      <li>• Interactive floor plans</li>
                      <li>• Virtual tours</li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* AI Integration */}
        <section className="py-20 bg-gradient-to-r from-primary/5 to-secondary/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
                  AI-Powered <span className="text-primary">Marketing Intelligence</span>
                </h2>
                <p className="text-xl text-muted-foreground mb-8">
                  We leverage artificial intelligence to optimize every aspect of your marketing campaigns, from audience targeting to content creation.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center mt-1">
                      <Target className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-2">Smart Audience Targeting</h3>
                      <p className="text-muted-foreground text-sm">AI analyzes buyer behavior to target the most likely prospects for your listings.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-secondary/20 rounded-full flex items-center justify-center mt-1">
                      <Sparkles className="h-4 w-4 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-2">Content Optimization</h3>
                      <p className="text-muted-foreground text-sm">Machine learning optimizes headlines, descriptions, and visuals for maximum engagement.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-purple-500/20 rounded-full flex items-center justify-center mt-1">
                      <TrendingUp className="h-4 w-4 text-purple-500" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-2">Performance Analytics</h3>
                      <p className="text-muted-foreground text-sm">Real-time insights and recommendations to continuously improve campaign performance.</p>
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
                    alt="AI Marketing Dashboard"
                    className="w-full rounded-lg"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* What's Changing Section */}
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
                What's <span className="text-primary">Changing</span> in Real Estate Marketing
              </h2>
              <p className="text-xl text-muted-foreground">
                Stay ahead of the curve with our innovative approach
              </p>
            </motion.div>

            <motion.div 
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-8"
            >
              {[
                {
                  icon: Smartphone,
                  title: "Mobile-First Design",
                  desc: "Over 80% of buyers start their search on mobile. Our designs are optimized for mobile viewing and engagement."
                },
                {
                  icon: Camera,
                  title: "Video Content Dominance",
                  desc: "Video content gets 1200% more shares than text and images combined. We create compelling video tours and stories."
                },
                {
                  icon: Globe,
                  title: "Virtual Reality Tours",
                  desc: "VR and 3D tours are becoming standard. We provide immersive experiences that sell properties faster."
                },
                {
                  icon: Mail,
                  title: "Personalized Campaigns",
                  desc: "Generic marketing is dead. We create personalized campaigns that speak directly to your target audience."
                }
              ].map((item, index) => (
                <motion.div key={index} variants={fadeInUp}>
                  <Card className="border-0 bg-white/50 backdrop-blur-sm hover:bg-white/80 transition-all duration-300">
                    <CardContent className="p-8">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                          <item.icon className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                          <p className="text-muted-foreground">{item.desc}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Portfolio Section */}
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
                Our Work <span className="text-primary">Speaks</span> for Itself
              </h2>
              <p className="text-xl text-muted-foreground">
                See how our marketing drives real results
              </p>
            </motion.div>

            <motion.div 
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid md:grid-cols-3 gap-8"
            >
              {[
                {
                  image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                  title: "Luxury Home Campaign",
                  result: "Sold in 3 days",
                  engagement: "500% increase in views"
                },
                {
                  image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                  title: "Pre-Construction Launch",
                  result: "85% sold in pre-launch",
                  engagement: "10,000+ social shares"
                },
                {
                  image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                  title: "Condo Marketing",
                  result: "Multiple offers",
                  engagement: "300% above asking"
                }
              ].map((item, index) => (
                <motion.div key={index} variants={fadeInUp}>
                  <Card className="overflow-hidden border-0 bg-white hover:shadow-lg transition-all duration-300">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-48 object-cover"
                    />
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                      <p className="text-primary font-medium mb-1">{item.result}</p>
                      <p className="text-sm text-muted-foreground">{item.engagement}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* AI Marketing Integration Statement */}
        <section className="py-16 bg-gradient-to-r from-muted/50 to-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-3xl blur-3xl opacity-30"></div>
                <Card className="relative border-0 bg-gradient-to-r from-primary/10 to-secondary/10 backdrop-blur-sm">
                  <CardContent className="p-12 text-center">
                    <div className="w-20 h-20 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Zap className="h-10 w-10 text-primary" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6 font-montserrat">
                      AI-Powered Marketing Excellence
                    </h3>
                    <p className="text-lg text-muted-foreground max-w-4xl mx-auto font-arial leading-relaxed">
                      In today's market, standing out means staying ahead of the curve—and AI is changing the game. At RE/MAX Excellence, we harness AI-powered design tools, predictive analytics, and smart ad targeting to give your listings more reach, your brand more recognition, and your time more freedom. The result? Campaigns that not only look good, but work harder for you, 24/7.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-primary via-secondary to-purple-500">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Let's Build Your Brand Together
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Ready to take your marketing to the next level? Our team is here to help you succeed.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                  Start Marketing Like a Pro
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