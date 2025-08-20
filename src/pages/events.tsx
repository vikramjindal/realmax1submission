import React from "react";
import Head from "next/head";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { 
  Calendar,
  MapPin,
  Clock,
  Users,
  Star,
  ArrowRight,
  Video,
  Award,
  TrendingUp,
  Zap
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

export default function Events() {
  return (
    <>
      <Head>
        <title>Events & Networking | RE/MAX Excellence</title>
        <meta name="description" content="Join our exclusive events, networking opportunities, and industry insights. Connect with top real estate professionals and stay ahead of market trends." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div className="bg-background min-h-screen">
        <Header />
        
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-red-50 via-white to-orange-100 overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-red-200/30 to-red-300/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-orange-200/30 to-orange-300/20 rounded-full blur-3xl"></div>
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
              <div className="absolute -top-3 -right-3 w-10 h-10 bg-gradient-to-br from-orange-400 to-yellow-500 rounded-full opacity-60 animate-bounce"></div>
              <div className="absolute -bottom-3 -left-3 w-8 h-8 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-full opacity-70 animate-ping"></div>
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
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full opacity-80 animate-pulse"></div>
            </div>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-red-500 to-red-600 rounded-full text-white text-sm font-semibold shadow-lg mb-6">
                <Calendar className="w-4 h-4 mr-2" />
                Exclusive Events & Networking
              </div>
              <h1 className="text-5xl lg:text-6xl font-black text-slate-900 mb-8 font-montserrat leading-tight">
                Connect, Learn, and <span className="text-transparent bg-gradient-to-r from-red-500 via-orange-600 to-yellow-600 bg-clip-text">Grow</span>
              </h1>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8 font-arial leading-relaxed">
                Join our exclusive events, networking opportunities, and industry insights. Connect with top real estate professionals and stay ahead of market trends.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Upcoming Events */}
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
                Upcoming <span className="text-primary">Events</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-arial">
                Don't miss out on these exclusive opportunities to network and grow your business
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
                  title: "Monthly Networking Mixer",
                  date: "December 15, 2024",
                  time: "6:00 PM - 9:00 PM",
                  location: "Downtown Toronto",
                  attendees: "50+",
                  type: "Networking",
                  description: "Connect with fellow agents, share success stories, and build lasting relationships in a relaxed, social setting."
                },
                {
                  title: "Market Trends Workshop",
                  date: "December 20, 2024",
                  time: "10:00 AM - 2:00 PM",
                  location: "Virtual Event",
                  attendees: "100+",
                  type: "Education",
                  description: "Deep dive into current market trends, investment opportunities, and strategies for success in 2025."
                },
                {
                  title: "Agent Success Summit",
                  date: "January 10, 2025",
                  time: "9:00 AM - 5:00 PM",
                  location: "Mississauga Conference Centre",
                  attendees: "200+",
                  type: "Conference",
                  description: "Our biggest event of the year featuring industry leaders, breakout sessions, and exclusive networking opportunities."
                }
              ].map((event, index) => (
                <motion.div key={index} variants={fadeInUp}>
                  <Card className="h-full border-0 bg-gradient-to-br from-primary/5 to-primary/10 hover:from-primary/10 hover:to-primary/15 transition-all duration-300 group hover:shadow-xl">
                    <CardHeader className="pb-4">
                      <div className="flex items-center justify-between mb-4">
                        <div className="px-3 py-1 bg-primary/20 rounded-full text-primary text-sm font-semibold">
                          {event.type}
                        </div>
                        <div className="flex items-center space-x-1 text-muted-foreground">
                          <Users className="w-4 h-4" />
                          <span className="text-sm">{event.attendees}</span>
                        </div>
                      </div>
                      <CardTitle className="text-xl font-bold font-montserrat group-hover:text-primary transition-colors duration-300">
                        {event.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <p className="text-muted-foreground mb-6 font-arial leading-relaxed">
                        {event.description}
                      </p>
                      
                      <div className="space-y-3 mb-6">
                        <div className="flex items-center space-x-3">
                          <Calendar className="w-4 h-4 text-primary" />
                          <span className="text-sm text-muted-foreground">{event.date}</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Clock className="w-4 h-4 text-primary" />
                          <span className="text-sm text-muted-foreground">{event.time}</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <MapPin className="w-4 h-4 text-primary" />
                          <span className="text-sm text-muted-foreground">{event.location}</span>
                        </div>
                      </div>
                      
                      <Button className="w-full bg-primary hover:bg-primary/90 group-hover:bg-primary transition-colors duration-300">
                        Register Now
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Past Events Highlights */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 font-montserrat">
                Event <span className="text-primary">Highlights</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-arial">
                Take a look at some of our most successful events and the impact they've had
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
                  title: "Fall Networking Gala",
                  date: "October 2024",
                  attendees: "150+",
                  highlights: ["Keynote from industry leader", "Speed networking sessions", "Award ceremony", "Live entertainment"],
                  image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                },
                {
                  title: "Summer Training Bootcamp",
                  date: "August 2024",
                  attendees: "75+",
                  highlights: ["Intensive 3-day program", "Hands-on workshops", "Certification completion", "Mentor matching"],
                  image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                }
              ].map((event, index) => (
                <motion.div key={index} variants={fadeInUp}>
                  <Card className="border-0 shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-300">
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={event.image} 
                        alt={event.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      <div className="absolute bottom-4 left-4 text-white">
                        <h3 className="text-xl font-bold font-montserrat">{event.title}</h3>
                        <p className="text-sm opacity-90">{event.date} • {event.attendees} attendees</p>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <h4 className="font-semibold text-foreground mb-4 font-montserrat">Event Highlights:</h4>
                      <ul className="space-y-2">
                        {event.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-center space-x-2 text-sm text-muted-foreground">
                            <Star className="w-4 h-4 text-primary flex-shrink-0" />
                            <span>{highlight}</span>
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
                Ready to Join Our Events?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto font-arial">
                Stay connected with the latest events, networking opportunities, and industry insights.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="outline" className="bg-white/10 border-white text-white hover:bg-white hover:text-primary">
                  View All Events
                </Button>
                <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                  Subscribe to Updates
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
        
        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}
