import React from "react";
import Head from "next/head";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Image from "next/image";
import { 
  UserPlus,
  Users,
  Award,
  Zap,
  Building2,
  Target,
  TrendingUp,
  ArrowRight,
  CheckCircle,
  Star,
  Phone,
  Mail,
  MapPin,
  Calendar,
  GraduationCap
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

export default function JoinUs() {
  return (
    <>
      <Head>
        <title>Join RE/MAX Excellence | Your Future in Real Estate</title>
        <meta name="description" content="Your future in real estate starts here. Join Ontario's youngest, fastest-growing brokerage with tools, training, and support to take your business to the next level." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div className="bg-background min-h-screen">
        <Header />
        
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-green-50 via-white to-emerald-100 overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-green-200/30 to-green-300/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-emerald-200/30 to-emerald-300/20 rounded-full blur-3xl"></div>
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
                        <div className="absolute -top-3 -right-3 w-10 h-10 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full opacity-60 animate-bounce"></div>
                        <div className="absolute -bottom-3 -left-3 w-8 h-8 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-full opacity-70 animate-ping"></div>
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
                        <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full opacity-80 animate-pulse"></div>
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
                Your Future in Real Estate 
                <span className="block text-transparent bg-gradient-to-r from-green-500 via-emerald-600 to-teal-600 bg-clip-text">
                  Starts Here
                </span>
              </h1>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8 font-arial leading-relaxed">
                Whether you're a new agent, an experienced pro, or a team leader, RE/MAX Excellence gives you the tools, training, and support to take your business to the next level.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Onboarding Levels Section */}
        <section className="py-16 bg-gradient-to-br from-slate-50 via-white to-slate-50 relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-br from-brand-bright-red/10 to-brand-dark-red/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-br from-brand-medium-blue/10 to-brand-bright-red/5 rounded-full blur-3xl"></div>
          </div>

          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl lg:text-4xl font-black text-slate-900 mb-6 font-montserrat leading-tight">
                Your <span className="text-transparent bg-gradient-to-r from-brand-bright-red via-brand-dark-red to-brand-medium-blue bg-clip-text">Onboarding Journey</span>
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto font-arial leading-relaxed">
                      From AI-powered lead matching to automated onboarding, we make your transition into RE/MAX Excellence seamless. Our technology ensures you hit the ground running with smart tools and insights from day one.
              </p>
            </motion.div>

            {/* Onboarding Levels - Optimized 2x3 Grid */}
            <motion.div 
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto"
            >
              <motion.div variants={fadeInUp}>
                <Card className="h-full border-0 bg-white/80 backdrop-blur-sm hover:bg-white hover:shadow-2xl transition-all duration-500 group relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-bright-red/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <CardContent className="p-6 text-center relative z-10">
                    <div className="w-14 h-14 bg-gradient-to-br from-brand-bright-red to-brand-dark-red rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg">
                      <span className="text-white font-bold text-xl">1</span>
                    </div>
                    <h3 className="text-lg font-bold mb-3 text-slate-800 group-hover:text-brand-bright-red transition-colors duration-300">Onboarding</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      Get officially welcomed to the team and set up with all necessary accounts and tools.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Card className="h-full border-0 bg-white/80 backdrop-blur-sm hover:bg-white hover:shadow-2xl transition-all duration-500 group relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-dark-red/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <CardContent className="p-6 text-center relative z-10">
                    <div className="w-14 h-14 bg-gradient-to-br from-brand-dark-red to-brand-medium-blue rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg">
                      <span className="text-white font-bold text-xl">2</span>
                    </div>
                    <h3 className="text-lg font-bold mb-3 text-slate-800 group-hover:text-brand-dark-red transition-colors duration-300">Orientation</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      Learn about our culture, processes, and how we support your growth every step of the way.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Card className="h-full border-0 bg-white/80 backdrop-blur-sm hover:bg-white hover:shadow-2xl transition-all duration-500 group relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-medium-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <CardContent className="p-6 text-center relative z-10">
                    <div className="w-14 h-14 bg-gradient-to-br from-brand-medium-blue to-brand-bright-red rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg">
                      <span className="text-white font-bold text-xl">3</span>
                    </div>
                    <h3 className="text-lg font-bold mb-3 text-slate-800 group-hover:text-brand-medium-blue transition-colors duration-300">Welcome Package & Essentials</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      Receive branding materials, resources, and everything you need to start representing clients confidently.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Card className="h-full border-0 bg-white/80 backdrop-blur-sm hover:bg-white hover:shadow-2xl transition-all duration-500 group relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-bright-red/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <CardContent className="p-6 text-center relative z-10">
                    <div className="w-14 h-14 bg-gradient-to-br from-brand-bright-red to-brand-dark-red rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg">
                      <span className="text-white font-bold text-xl">4</span>
                    </div>
                    <h3 className="text-lg font-bold mb-3 text-slate-800 group-hover:text-brand-bright-red transition-colors duration-300">Tutorials & Marketing Assets</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      Access step-by-step tutorials, templates, and ready-to-use marketing materials to hit the ground running.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Card className="h-full border-0 bg-white/80 backdrop-blur-sm hover:bg-white hover:shadow-2xl transition-all duration-500 group relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-dark-red/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <CardContent className="p-6 text-center relative z-10">
                    <div className="w-14 h-14 bg-gradient-to-br from-brand-dark-red to-brand-medium-blue rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg">
                      <span className="text-white font-bold text-xl">5</span>
                    </div>
                    <h3 className="text-lg font-bold mb-3 text-slate-800 group-hover:text-brand-dark-red transition-colors duration-300">Listing Presentation</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      Master the art of presenting properties to sellers with professional listing presentations and strategies.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Card className="h-full border-0 bg-white/80 backdrop-blur-sm hover:bg-white hover:shadow-2xl transition-all duration-500 group relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-medium-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <CardContent className="p-6 text-center relative z-10">
                    <div className="w-14 h-14 bg-gradient-to-br from-brand-medium-blue to-brand-bright-red rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg">
                      <span className="text-white font-bold text-xl">6</span>
                      </div>
                    <h3 className="text-lg font-bold mb-3 text-slate-800 group-hover:text-brand-medium-blue transition-colors duration-300">Buyer Presentation</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      Learn effective buyer presentation techniques to help clients find their perfect home and close deals.
                    </p>
                    </CardContent>
                  </Card>
                </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Application Form */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 font-montserrat">
                Take the <span className="text-primary">First Step</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-arial">
                Fill out the form below and our team will get back to you within 24 hours
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="border-0 shadow-xl">
                <CardContent className="p-8">
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name *</Label>
                        <Input id="firstName" placeholder="Enter your first name" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name *</Label>
                        <Input id="lastName" placeholder="Enter your last name" required />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email *</Label>
                        <Input id="email" type="email" placeholder="Enter your email" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone *</Label>
                        <Input id="phone" type="tel" placeholder="Enter your phone number" required />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="experience">Experience Level *</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select your experience level" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="new">New Agent (0-1 years)</SelectItem>
                            <SelectItem value="experienced">Experienced Agent (2-5 years)</SelectItem>
                            <SelectItem value="veteran">Veteran Agent (5+ years)</SelectItem>
                            <SelectItem value="team-leader">Team Leader</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="location">Preferred Location</Label>
                        <Input id="location" placeholder="City or region" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="brokerage">What is your current brokerage's name? *</Label>
                      <Input 
                        id="brokerage" 
                        placeholder="Brokerage's name"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="referral">How did you hear about us?</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select an option" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="social">Social Media</SelectItem>
                          <SelectItem value="website">Website</SelectItem>
                          <SelectItem value="referral">Referral</SelectItem>
                          <SelectItem value="advertising">Advertising</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="pt-4">
                      <Button type="submit" size="lg" className="w-full bg-brand-bright-red hover:bg-brand-dark-red text-white font-bold text-lg py-6">
                        Apply Now
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 font-montserrat">
                Why <span className="text-primary">RE/MAX Excellence</span>?
              </h2>
            </motion.div>

            <motion.div 
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {[
                { number: "500+", label: "Properties Sold", icon: Building2 },
                { number: "98%", label: "Client Satisfaction", icon: Star },
                { number: "50+", label: "Expert Agents", icon: Users },
                { number: "#1", label: "Growth Rate", icon: TrendingUp }
              ].map((stat, index) => (
                <motion.div key={index} variants={fadeInUp} className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="h-8 w-8 text-primary" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2 font-montserrat">{stat.number}</div>
                  <div className="text-muted-foreground font-arial">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

      </div>
      
      <Footer />
    </>
  );
}
