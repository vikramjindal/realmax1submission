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
        <section className="relative py-20 bg-gradient-to-br from-orange-50 via-white to-amber-100 overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-orange-200/30 to-orange-300/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-amber-200/30 to-amber-300/20 rounded-full blur-3xl"></div>
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
              <div className="absolute -top-3 -right-3 w-10 h-10 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-full opacity-60 animate-bounce"></div>
              <div className="absolute -bottom-3 -left-3 w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full opacity-70 animate-ping"></div>
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
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-orange-400 to-red-500 rounded-full opacity-80 animate-pulse"></div>
            </div>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full text-white text-sm font-semibold shadow-lg mb-6">
                <GraduationCap className="w-4 h-4 mr-2" />
                Professional Development
              </div>
              <h1 className="text-5xl lg:text-6xl font-black text-slate-900 mb-8 font-montserrat leading-tight">
                Training That Turns Good Agents into <span className="text-transparent bg-gradient-to-r from-orange-500 via-amber-600 to-yellow-600 bg-clip-text">Great Ones</span>
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
                <Card className="h-full border-0 bg-gradient-to-br from-primary/5 to-primary/10 hover:from-primary/10 hover:to-primary/15 transition-all duration-300">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                      <TrendingUp className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">Accelerated Growth</h3>
                    <p className="text-muted-foreground">
                      Fast-track your career with proven strategies and techniques that deliver immediate results.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Card className="h-full border-0 bg-gradient-to-br from-secondary/5 to-secondary/10 hover:from-secondary/10 hover:to-secondary/15 transition-all duration-300">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Users className="h-8 w-8 text-secondary" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">Expert Instructors</h3>
                    <p className="text-muted-foreground">
                      Learn from top-performing agents and industry experts with years of proven success.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Card className="h-full border-0 bg-gradient-to-br from-primary/5 to-primary/10 hover:from-primary/10 hover:to-primary/15 transition-all duration-300">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Zap className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">Cutting-Edge Content</h3>
                    <p className="text-muted-foreground">
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

        {/* Current Programs */}
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
                Current <span className="text-primary">Training Programs</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                We're currently running specialized programs designed to accelerate your success
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto"
            >
              <Card className="border-0 bg-gradient-to-r from-primary/10 to-secondary/10">
                <CardContent className="p-8 text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Target className="h-10 w-10 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 font-montserrat">Accountability Program</h3>
                  <p className="text-lg text-muted-foreground mb-6 font-arial leading-relaxed">
                    Our flagship accountability program/course is currently running and helping agents stay focused, 
                    track their progress, and achieve their goals. This program provides structured guidance, 
                    regular check-ins, and proven strategies to boost productivity and results.
                  </p>
                  <Button size="lg" className="bg-primary hover:bg-primary/90">
                    View Training Schedule
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </CardContent>
              </Card>
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
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                      <BookOpen className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Personalized Learning Paths</h3>
                      <p className="text-muted-foreground">AI adapts content based on your learning style, pace, and career goals.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center">
                      <Video className="h-6 w-6 text-secondary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Interactive Simulations</h3>
                      <p className="text-muted-foreground">Practice real-world scenarios with AI-powered role-playing exercises.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center">
                      <Award className="h-6 w-6 text-purple-500" />
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
                <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8">
                  <img 
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="Training Session"
                    className="w-full rounded-lg"
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
                Choose the format that works best for your schedule and learning style
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

        {/* Schedule Preview */}
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
                Upcoming <span className="text-primary">Training Sessions</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Join our next training sessions and accelerate your growth
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
                  title: "Marketing Mastery Bootcamp",
                  date: "March 15, 2024",
                  time: "9:00 AM - 5:00 PM",
                  format: "In-Person",
                  spots: "8 spots left"
                },
                {
                  title: "Pre-Construction Strategies",
                  date: "March 22, 2024",
                  time: "2:00 PM - 4:00 PM",
                  format: "Virtual",
                  spots: "15 spots left"
                },
                {
                  title: "Legal & Compliance Update",
                  date: "March 29, 2024",
                  time: "10:00 AM - 12:00 PM",
                  format: "Virtual",
                  spots: "12 spots left"
                },
                {
                  title: "Mortgage & Finance Workshop",
                  date: "April 5, 2024",
                  time: "1:00 PM - 5:00 PM",
                  format: "In-Person",
                  spots: "5 spots left"
                }
              ].map((session, index) => (
                <motion.div key={index} variants={fadeInUp}>
                  <Card className="border-0 bg-white hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-8">
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="text-xl font-bold">{session.title}</h3>
                        <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                          {session.format}
                        </span>
                      </div>
                      <div className="space-y-2 text-muted-foreground mb-6">
                        <p className="flex items-center">
                          <Clock className="h-4 w-4 mr-2" />
                          {session.date} • {session.time}
                        </p>
                        <p className="text-sm text-green-600 font-medium">{session.spots}</p>
                      </div>
                      <Button className="w-full bg-primary hover:bg-primary/90">
                        Register Now
                      </Button>
                    </CardContent>
                  </Card>
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
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Ready to Elevate Your Skills?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Join our comprehensive training programs and transform your real estate career with expert guidance and cutting-edge tools.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                  View Training Schedule
                </Button>
                <Button size="lg" variant="outline" className="bg-white/10 border-white text-white hover:bg-white hover:text-foreground">
                  Contact Training Team
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