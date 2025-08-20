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
                          src="/images/ballon.png" 
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
                          src="/images/ballon.png" 
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
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-500 to-green-600 rounded-full text-white text-sm font-semibold shadow-lg mb-6">
                <UserPlus className="w-4 h-4 mr-2" />
                Join Our Growing Team
              </div>
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

        {/* AI/Tech Angle Statement */}
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
                      AI-Powered Onboarding & Support
                    </h3>
                    <p className="text-lg text-muted-foreground max-w-4xl mx-auto font-arial leading-relaxed">
                      From AI-powered lead matching to automated onboarding, we make your transition into RE/MAX Excellence seamless. Our technology ensures you hit the ground running with smart tools and insights from day one.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          </div>
        </section>

        {/* For Different Agent Types */}
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
                Designed for <span className="text-primary">Every Stage</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-arial">
                We have specialized programs and support for agents at every level of their career
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
                  title: "For New Agents",
                  description: "Hands-on mentorship, training, and first-deal guidance to launch your career successfully.",
                  icon: GraduationCap,
                  benefits: ["Comprehensive training program", "Mentorship from top performers", "First-deal support", "Marketing materials provided"]
                },
                {
                  title: "For Experienced Agents",
                  description: "Marketing, tech, and lead-generation support to grow your existing business.",
                  icon: TrendingUp,
                  benefits: ["Advanced marketing tools", "Lead generation systems", "Technology integration", "Business scaling support"]
                },
                {
                  title: "For Team Leaders",
                  description: "Resources to scale your team and increase profitability with proven systems.",
                  icon: Users,
                  benefits: ["Team management tools", "Recruitment support", "Profit optimization", "Leadership training"]
                }
              ].map((type, index) => (
                <motion.div key={index} variants={fadeInUp}>
                  <Card className="h-full border-0 bg-gradient-to-br from-primary/5 to-primary/10 hover:from-primary/10 hover:to-primary/15 transition-all duration-300">
                    <CardContent className="p-8 text-center">
                      <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                        <type.icon className="h-10 w-10 text-primary" />
                      </div>
                      <h3 className="text-2xl font-bold mb-4 font-montserrat">{type.title}</h3>
                      <p className="text-muted-foreground mb-6 font-arial leading-relaxed">
                        {type.description}
                      </p>
                      <ul className="text-left space-y-2">
                        {type.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-center space-x-2 text-sm text-muted-foreground">
                            <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
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
                      <Label htmlFor="message">Why do you want to join RE/MAX Excellence? *</Label>
                      <Textarea 
                        id="message" 
                        placeholder="Tell us about your goals and what you're looking for in a brokerage..."
                        rows={4}
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
                      <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 text-lg py-6">
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

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-primary to-secondary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 font-montserrat">
                Ready to Start Your Journey?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto font-arial">
                Join the fastest-growing brokerage in Ontario and take your career to new heights.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="outline" className="bg-white/10 border-white text-white hover:bg-white hover:text-primary">
                  Contact Us
                </Button>
                <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                  Learn More
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-foreground text-background py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-8">
              {/* Company Info */}
              <div className="md:col-span-2">
                <div className="flex items-center space-x-2 mb-6">
                  <div className="text-2xl font-bold">
                    <span className="text-primary">RE/MAX</span>
                    <span className="text-secondary ml-2">Excellence</span>
                  </div>
                </div>
                <p className="text-background/80 mb-6 max-w-md">
                  Ontario's youngest, fastest-growing real estate brokerage. Your trusted partner with a fresh edge.
                </p>
              </div>

              {/* Quick Links */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  <li><a href="/" className="text-background/80 hover:text-primary transition-colors">Home</a></li>
                  <li><a href="/marketing" className="text-background/80 hover:text-primary transition-colors">Marketing</a></li>
                  <li><a href="/training" className="text-background/80 hover:text-primary transition-colors">Training</a></li>
                  <li><a href="/careers" className="text-background/80 hover:text-primary transition-colors">Careers</a></li>
                </ul>
              </div>

              {/* Contact Info */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Contact</h3>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <Phone className="h-4 w-4 text-primary" />
                    <span className="text-background/80">(416) 555-0123</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Mail className="h-4 w-4 text-primary" />
                    <span className="text-background/80">careers@remaxexcellence.ca</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <MapPin className="h-4 w-4 text-primary" />
                    <span className="text-background/80">Toronto, Ontario</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="border-t border-background/20 mt-12 pt-8 text-center">
              <p className="text-background/60 mb-2">
                © 2024 RE/MAX Excellence. All rights reserved.
              </p>
              <p className="text-background/60 text-sm font-arial">
                Each Office Independently Owned and Operated
              </p>
            </div>
          </div>
        </footer>
      </div>
      
      {/* Footer */}
      <Footer />
    </>
  );
}
