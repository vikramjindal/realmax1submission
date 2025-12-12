import React, { useEffect, useRef } from 'react';
import Head from "next/head";
import { GetStaticProps } from "next";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { useJoinUsModal } from '@/contexts/JoinUsModalContext';
import { getEvents, getFeaturedImageUrl, type Event } from "@/lib/wordpress";
import { 
  Calendar,
  MapPin,
  Clock,
  Users,
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

interface EventsProps {
  events: Event[];
}

export default function Events({ events }: EventsProps) {
  const { openModal } = useJoinUsModal();
  const video1Ref = useRef<HTMLVideoElement>(null);
  const video2Ref = useRef<HTMLVideoElement>(null);
  const video3Ref = useRef<HTMLVideoElement>(null);
  
  // Ensure events are arrays
  const safeEvents = Array.isArray(events) ? events : [];

  // Video playback effect
  useEffect(() => {
    const videos = [video1Ref.current, video2Ref.current, video3Ref.current].filter(Boolean) as HTMLVideoElement[];

    async function playAllVideos() {
      for (const video of videos) {
        try {
          if (video && video.readyState >= 2) { // HAVE_CURRENT_DATA or higher
            await video.play();
          } else {
            // Wait for video to be ready
            await new Promise((resolve) => {
              const onCanPlay = () => {
                video.removeEventListener('canplay', onCanPlay);
                resolve(undefined);
              };
              video.addEventListener('canplay', onCanPlay);
              video.load(); // Ensure video loads
            });
            await video.play();
          }
        } catch (error) {
          console.log('Video playback error for', video.id, error);
          // Try to play individually with user interaction fallback
          video.addEventListener('click', () => video.play(), { once: true });
        }
      }
    }

    // Wait a bit for videos to mount
    const timeoutId = setTimeout(() => {
      playAllVideos();
    }, 1500);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.target instanceof HTMLVideoElement) {
            const video = entry.target;
            if (video.paused) {
              video.play().catch((error) => {
                console.log('IntersectionObserver play error:', error);
              });
            }
          }
        });
      },
      { threshold: 0.3 }
    );

    videos.forEach((video) => {
      if (video) {
        observer.observe(video);
        // Also try to play when video is ready
        video.addEventListener('loadeddata', () => {
          if (video.paused) {
            video.play().catch(() => {
              // Autoplay blocked, user will need to click
            });
          }
        }, { once: true });
      }
    });

    return () => {
      clearTimeout(timeoutId);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <Head>
        <title>Events & Networking | REMAX Excellence</title>
        <meta name="description" content="Join our exclusive events, networking opportunities, and industry insights. Connect with top real estate professionals and stay ahead of market trends." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div className="bg-background min-h-screen">
        <Header />
        
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-white via-slate-50 to-white overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-red-200/20 to-pink-300/15 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-blue-200/20 to-indigo-300/15 rounded-full blur-3xl"></div>
          </div>
          
          {/* Creative Floating Balloon Elements */}
          <div className="absolute right-8 top-16 z-10">
            <div className="relative">
              <Image 
                src="/images/company-pin-icon.png" 
                alt="REMAX Balloon" 
                width={80} 
                height={80} 
                className="w-20 h-20 object-contain opacity-80 animate-pulse transform rotate-6"
              />
            </div>
          </div>
          
          <div className="absolute left-8 top-32 z-10">
            <div className="relative">
              <Image 
                src="/images/company-pin-icon.png" 
                alt="REMAX Balloon" 
                width={56} 
                height={56} 
                className="w-14 h-14 object-contain opacity-70 animate-bounce transform -rotate-6"
              />
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
                Connect, Learn, and <span className="text-brand-bright-red">Grow</span>
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
                    autoPlay
                    preload="auto"
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
                    autoPlay
                    preload="auto"
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

              {/* Video 3 - REMAX BBQ */}
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
                    autoPlay
                    preload="auto"
                    poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 600'%3E%3Crect width='400' height='600' fill='%23f3f4f6'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' font-family='Arial' font-size='18' fill='%236b7280'%3EREMAX BBQ Event%3C/text%3E%3C/svg%3E"
                  >
                    <source src="https://dontdelete2005142.kloudbean.com/1761203384_Remax_BBQ.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="text-lg font-bold font-montserrat">REMAX BBQ Event</h3>
                    <p className="text-sm opacity-90">Team building and networking</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

          </div>
        </section>

        {/* Upcoming Events */}
        <section className="relative py-24 bg-gradient-to-br from-white via-slate-50 to-white overflow-hidden">
          {/* Background Decorative Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-20 right-10 w-80 h-80 bg-gradient-to-br from-red-200/20 to-pink-300/15 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 left-10 w-72 h-72 bg-gradient-to-br from-blue-200/20 to-indigo-300/15 rounded-full blur-3xl"></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <div className="inline-block mb-4 px-6 py-2 bg-brand-bright-red/10 rounded-full">
                <span className="text-brand-bright-red font-bold text-sm uppercase tracking-wider">Exclusive Events</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 font-montserrat leading-tight">
                Upcoming <span className="text-brand-bright-red">Events</span>
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto font-arial leading-relaxed">
                Don't miss out on these exclusive opportunities to network and grow your business
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {safeEvents.length > 0 ? (
                safeEvents.map((event, index) => {
                  // Parse HTML content to get plain text description
                  const description = event.content && event.content.rendered
                    ? event.content.rendered.replace(/<[^>]*>/g, '').trim() 
                    : '';
                  
                  return (
                    <motion.div 
                      key={event.id}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                      <Card className="h-full border border-slate-200 bg-white shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2 flex flex-col">
                        <CardHeader className="pb-4">
                          <div className="flex items-center justify-between mb-4">
                            <div className={`px-4 py-2 ${event.event_type_color === 'red' ? 'bg-brand-bright-red' : 'bg-brand-dark-blue'} rounded-full text-white text-sm font-bold shadow-lg`}>
                              {event.event_type || 'Event'}
                            </div>
                            <div className={`flex items-center space-x-2 ${event.event_type_color === 'red' ? 'text-brand-bright-red' : 'text-brand-dark-blue'} font-bold`}>
                              <Users className="w-5 h-5" />
                              <span className="text-base">{event.event_attendees || '0+'}</span>
                            </div>
                          </div>
                          <CardTitle className="text-2xl font-black font-montserrat text-slate-900">
                            {event.title.rendered}
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="pt-0 flex-1 flex flex-col">
                          <p className="text-slate-600 mb-6 font-arial leading-relaxed text-sm flex-grow">
                            {description || 'Join us for this exciting event!'}
                          </p>
                          
                          <div className="space-y-3 mb-6 bg-slate-50 rounded-xl p-4">
                            <div className="flex items-center space-x-3">
                              <div className={`w-8 h-8 ${event.event_type_color === 'red' ? 'bg-brand-bright-red' : 'bg-brand-dark-blue'} rounded-lg flex items-center justify-center shadow-md`}>
                                <Calendar className="w-4 h-4 text-white" />
                              </div>
                              <span className="text-sm font-semibold text-slate-700">{event.event_date || 'TBA'}</span>
                            </div>
                            <div className="flex items-center space-x-3">
                              <div className={`w-8 h-8 ${event.event_type_color === 'red' ? 'bg-brand-bright-red' : 'bg-brand-dark-blue'} rounded-lg flex items-center justify-center shadow-md`}>
                                <Clock className="w-4 h-4 text-white" />
                              </div>
                              <span className="text-sm font-semibold text-slate-700">{event.event_time || 'TBA'}</span>
                            </div>
                            <div className="flex items-center space-x-3">
                              <div className={`w-8 h-8 ${event.event_type_color === 'red' ? 'bg-brand-bright-red' : 'bg-brand-dark-blue'} rounded-lg flex items-center justify-center shadow-md`}>
                                <MapPin className="w-4 h-4 text-white" />
                              </div>
                              <span className="text-sm font-semibold text-slate-700">{event.event_location || 'TBA'}</span>
                            </div>
                          </div>
                          
                          <Button 
                            onClick={openModal}
                            className="w-full bg-brand-bright-red hover:bg-black text-white font-bold py-6 text-base shadow-xl hover:shadow-2xl transition-all duration-300 rounded-xl"
                          >
                            Register Now
                            <ArrowRight className="w-5 h-5 ml-2" />
                          </Button>
                        </CardContent>
                      </Card>
                    </motion.div>
                  );
                })
              ) : (
                // Fallback events if WordPress data is not available
                [
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
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <Card className="h-full border border-slate-200 bg-white shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2 flex flex-col">
                      <CardHeader className="pb-4">
                        <div className="flex items-center justify-between mb-4">
                          <div className={`px-4 py-2 ${event.typeColor === 'red' ? 'bg-brand-bright-red' : 'bg-brand-dark-blue'} rounded-full text-white text-sm font-bold shadow-lg`}>
                            {event.type}
                          </div>
                          <div className={`flex items-center space-x-2 ${event.typeColor === 'red' ? 'text-brand-bright-red' : 'text-brand-dark-blue'} font-bold`}>
                            <Users className="w-5 h-5" />
                            <span className="text-base">{event.attendees}</span>
                          </div>
                        </div>
                        <CardTitle className="text-2xl font-black font-montserrat text-slate-900">
                          {event.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="pt-0 flex-1 flex flex-col">
                        <p className="text-slate-600 mb-6 font-arial leading-relaxed text-sm flex-grow">
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
                          className="w-full bg-brand-bright-red hover:bg-black text-white font-bold py-6 text-base shadow-xl hover:shadow-2xl transition-all duration-300 rounded-xl"
                        >
                          Register Now
                          <ArrowRight className="w-5 h-5 ml-2" />
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))
              )}
            </div>
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
        
        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps<EventsProps> = async () => {
  console.log('🔍 Events Page - WordPress Integration Debug:');
  console.log('WordPress URL:', process.env.NEXT_PUBLIC_WORDPRESS_URL || 'NOT SET');

  try {
    console.log('📡 Fetching events from WordPress...');
    const events = await getEvents().catch(error => {
      console.error('❌ Error fetching events:', error);
      return [];
    });

    console.log('✅ Events fetched:', events.length);

    return {
      props: {
        events
      },
      revalidate: 60 // Revalidate every 60 seconds
    };
  } catch (error) {
    console.error('Error in getStaticProps:', error);
    return {
      props: {
        events: []
      },
      revalidate: 60
    };
  }
};
