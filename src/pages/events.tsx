import React, { useEffect, useRef } from "react";
import Head from "next/head";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { useJoinUsModal } from '@/contexts/JoinUsModalContext';
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
  Zap,
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

export default function Events() {
  const { openModal } = useJoinUsModal();
  const video1Ref = useRef<HTMLVideoElement>(null);
  const video2Ref = useRef<HTMLVideoElement>(null);
  const video3Ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const playAllVideos = async () => {
      try {
        // Wait a bit for the videos to load
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Play all videos simultaneously
        const playPromises = [
          video1Ref.current?.play(),
          video2Ref.current?.play(),
          video3Ref.current?.play()
        ].filter(Boolean);

        await Promise.all(playPromises);
        console.log('All videos started playing');
      } catch (error) {
        console.log('Some videos may not have started:', error);
        // Fallback: try to play each video individually
        video1Ref.current?.play().catch(e => console.log('Video 1 error:', e));
        video2Ref.current?.play().catch(e => console.log('Video 2 error:', e));
        video3Ref.current?.play().catch(e => console.log('Video 3 error:', e));
      }
    };

    // Play videos when component mounts
    playAllVideos();

    // Also try to play when videos come into view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            playAllVideos();
          }
        });
      },
      { threshold: 0.5 }
    );

    // Observe all video elements
    if (video1Ref.current) observer.observe(video1Ref.current);
    if (video2Ref.current) observer.observe(video2Ref.current);
    if (video3Ref.current) observer.observe(video3Ref.current);

    return () => {
      observer.disconnect();
    };
  }, []);

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
                src="/images/company-pin-icon.png" 
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
                src="/images/company-pin-icon.png" 
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
              <h1 className="text-5xl lg:text-6xl font-black text-slate-900 mb-8 font-montserrat leading-tight">
                Connect, Learn, and <span className="text-transparent bg-gradient-to-r from-brand-bright-red via-brand-dark-red to-brand-medium-blue bg-clip-text">Grow</span>
              </h1>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8 font-arial leading-relaxed">
                Join our exclusive events, networking opportunities, and industry insights. Connect with top real estate professionals and stay ahead of market trends.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Video Reels Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 font-montserrat">
                Event <span className="text-primary">Moments</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-arial">
                Experience the energy and excitement of our events through these highlights
              </p>
            </motion.div>

            <motion.div 
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
            >
              {/* Video 1 - IMG_3416 */}
              <motion.div variants={fadeInUp} className="group">
                <div className="relative bg-black rounded-2xl overflow-hidden shadow-xl transition-all duration-300">
                  <video 
                    ref={video1Ref}
                    id="video1"
                    className="w-full h-[400px] md:h-[500px] lg:h-[600px] object-cover"
                    controls
                    muted
                    loop
                    playsInline
                    poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 600'%3E%3Crect width='400' height='600' fill='%23f3f4f6'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' font-family='Arial' font-size='18' fill='%236b7280'%3ENetworking Event%3C/text%3E%3C/svg%3E"
                  >
                    <source src="https://dontdelete2005142.kloudbean.com/1761257463_1761203384_IMG_3416%20(1).mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="text-lg font-bold font-montserrat">Networking Event</h3>
                    <p className="text-sm opacity-90">Professional connections</p>
                  </div>
                </div>
              </motion.div>

              {/* Video 2 - IMG_5203 */}
              <motion.div variants={fadeInUp} className="group">
                <div className="relative bg-black rounded-2xl overflow-hidden shadow-xl transition-all duration-300">
                  <video 
                    ref={video2Ref}
                    id="video2"
                    className="w-full h-[400px] md:h-[500px] lg:h-[600px] object-cover"
                    controls
                    muted
                    loop
                    playsInline
                    poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 600'%3E%3Crect width='400' height='600' fill='%23f3f4f6'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' font-family='Arial' font-size='18' fill='%236b7280'%3EEvent Highlights%3C/text%3E%3C/svg%3E"
                  >
                    <source src="https://dontdelete2005142.kloudbean.com/1761203384_IMG_5203%20(1).MP4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="text-lg font-bold font-montserrat">Event Highlights</h3>
                    <p className="text-sm opacity-90">Behind the scenes moments</p>
                  </div>
                </div>
              </motion.div>

              {/* Video 3 - RE/MAX BBQ */}
              <motion.div variants={fadeInUp} className="group md:col-span-2 lg:col-span-1">
                <div className="relative bg-black rounded-2xl overflow-hidden shadow-xl transition-all duration-300">
                  <video 
                    ref={video3Ref}
                    id="video3"
                    className="w-full h-[400px] md:h-[500px] lg:h-[600px] object-cover"
                    controls
                    muted
                    loop
                    playsInline
                    poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 600'%3E%3Crect width='400' height='600' fill='%23f3f4f6'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' font-family='Arial' font-size='18' fill='%236b7280'%3EREMAX BBQ Event%3C/text%3E%3C/svg%3E"
                  >
                    <source src="https://dontdelete2005142.kloudbean.com/1761203384_Remax_BBQ.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="text-lg font-bold font-montserrat">RE/MAX BBQ Event</h3>
                    <p className="text-sm opacity-90">Team building and networking</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

          </div>
        </section>

        {/* Upcoming Events */}
        <section className="relative py-24 bg-gradient-to-br from-slate-50 via-white to-red-50 overflow-hidden">
          {/* Background Decorative Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-brand-bright-red/10 to-brand-dark-red/5 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-br from-brand-dark-blue/10 to-brand-medium-blue/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-gradient-to-br from-brand-bright-red/5 to-transparent rounded-full blur-2xl"></div>
          </div>

          {/* Floating Sparkle Decorations */}
          <div className="absolute top-32 right-1/4 animate-bounce" style={{ animationDuration: '3s' }}>
            <Sparkles className="w-8 h-8 text-brand-bright-red/30" />
          </div>
          <div className="absolute bottom-32 left-1/4 animate-bounce" style={{ animationDuration: '4s', animationDelay: '1s' }}>
            <Sparkles className="w-6 h-6 text-brand-dark-blue/30" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <div className="inline-block mb-4 px-6 py-2 bg-gradient-to-r from-brand-bright-red/10 to-brand-dark-red/10 rounded-full">
                <span className="text-brand-bright-red font-bold text-sm uppercase tracking-wider">Exclusive Events</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 font-montserrat leading-tight">
                Upcoming <span className="text-transparent bg-gradient-to-r from-brand-bright-red via-brand-dark-red to-brand-medium-blue bg-clip-text">Events</span>
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto font-arial leading-relaxed">
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
                  typeColor: "red",
                  description: "Connect with fellow agents, share success stories, and build lasting relationships in a relaxed, social setting."
                },
                {
                  title: "Market Trends Workshop",
                  date: "December 20, 2024",
                  time: "10:00 AM - 2:00 PM",
                  location: "Virtual Event",
                  attendees: "100+",
                  type: "Education",
                  typeColor: "blue",
                  description: "Deep dive into current market trends, investment opportunities, and strategies for success in 2025."
                },
                {
                  title: "Agent Success Summit",
                  date: "January 10, 2025",
                  time: "9:00 AM - 5:00 PM",
                  location: "Mississauga Conference Centre",
                  attendees: "200+",
                  type: "Conference",
                  typeColor: "red",
                  description: "Our biggest event of the year featuring industry leaders, breakout sessions, and exclusive networking opportunities."
                }
              ].map((event, index) => (
                <motion.div 
                  key={index} 
                  variants={fadeInUp}
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="relative h-full border-2 border-transparent bg-white hover:border-brand-bright-red/20 hover:shadow-2xl transition-all duration-500 group overflow-hidden">
                    {/* Decorative corner gradient */}
                    <div className={`absolute top-0 right-0 w-32 h-32 ${event.typeColor === 'red' ? 'bg-gradient-to-br from-brand-bright-red/10 to-transparent' : 'bg-gradient-to-br from-brand-dark-blue/10 to-transparent'} rounded-bl-[100px] transition-all duration-500 group-hover:w-40 group-hover:h-40`}></div>
                    
                    {/* Shine effect on hover */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/0 to-transparent group-hover:via-white/20 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>

                    <CardHeader className="pb-4 relative z-10">
                      <div className="flex items-center justify-between mb-4">
                        <div className={`px-4 py-2 ${event.typeColor === 'red' ? 'bg-gradient-to-r from-brand-bright-red to-brand-dark-red' : 'bg-gradient-to-r from-brand-dark-blue to-brand-medium-blue'} rounded-full text-white text-sm font-bold shadow-lg transform group-hover:scale-110 transition-transform duration-300`}>
                          {event.type}
                        </div>
                        <div className={`flex items-center space-x-2 ${event.typeColor === 'red' ? 'text-brand-bright-red' : 'text-brand-dark-blue'} font-bold`}>
                          <Users className="w-5 h-5" />
                          <span className="text-base">{event.attendees}</span>
                        </div>
                      </div>
                      <CardTitle className={`text-2xl font-black font-montserrat ${event.typeColor === 'red' ? 'group-hover:text-brand-bright-red' : 'group-hover:text-brand-dark-blue'} transition-colors duration-300`}>
                        {event.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0 relative z-10">
                      <p className="text-slate-600 mb-6 font-arial leading-relaxed text-sm">
                        {event.description}
                      </p>
                      
                      <div className="space-y-3 mb-6 bg-slate-50 rounded-xl p-4">
                        <div className="flex items-center space-x-3">
                          <div className={`w-8 h-8 ${event.typeColor === 'red' ? 'bg-brand-bright-red' : 'bg-brand-dark-blue'} rounded-lg flex items-center justify-center shadow-md`}>
                            <Calendar className="w-4 h-4 text-white" />
                          </div>
                          <span className="text-sm font-semibold text-slate-700">{event.date}</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className={`w-8 h-8 ${event.typeColor === 'red' ? 'bg-brand-bright-red' : 'bg-brand-dark-blue'} rounded-lg flex items-center justify-center shadow-md`}>
                            <Clock className="w-4 h-4 text-white" />
                          </div>
                          <span className="text-sm font-semibold text-slate-700">{event.time}</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className={`w-8 h-8 ${event.typeColor === 'red' ? 'bg-brand-bright-red' : 'bg-brand-dark-blue'} rounded-lg flex items-center justify-center shadow-md`}>
                            <MapPin className="w-4 h-4 text-white" />
                          </div>
                          <span className="text-sm font-semibold text-slate-700">{event.location}</span>
                        </div>
                      </div>
                      
                      <Button 
                        onClick={openModal}
                        className="w-full bg-brand-bright-red hover:bg-brand-dark-red text-white font-bold py-6 text-base shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 rounded-xl"
                      >
                        Register Now
                        <ArrowRight className="w-5 h-5 ml-2" />
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
        
        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}
