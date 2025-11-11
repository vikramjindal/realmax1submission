import React from "react";
import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { useJoinUsModal } from '@/contexts/JoinUsModalContext';
import { 
  Calendar,
  User,
  Clock,
  Share2
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

export default function Blog() {
  const { openModal } = useJoinUsModal();
  const recentPosts = [
    {
      id: 1,
      title: "The Future of Real Estate: AI and Market Predictions",
      excerpt: "Discover how artificial intelligence is revolutionizing property valuation and market analysis in 2024. Learn about the latest AI tools that are helping agents make data-driven decisions and provide better service to their clients.",
      category: "Market Trends",
      author: "Sarah Chen",
      date: "March 15, 2024",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "New Ontario Real Estate Regulations: What Agents Need to Know",
      excerpt: "A comprehensive guide to the latest regulatory changes affecting real estate professionals in Ontario. Stay compliant and informed about new disclosure requirements, licensing updates, and professional standards.",
      category: "Legal Updates",
      author: "Michael Rodriguez",
      date: "March 12, 2024",
      readTime: "8 min read"
    },
    {
      id: 3,
      title: "Social Media Marketing Strategies That Actually Work",
      excerpt: "Proven tactics to boost your real estate social media presence and generate quality leads. Discover the best platforms, content types, and posting schedules for maximum engagement and conversions.",
      category: "Marketing",
      author: "Jennifer Park",
      date: "March 10, 2024",
      readTime: "6 min read"
    },
    {
      id: 4,
      title: "Pre-Construction Investment: Timing the Market Right",
      excerpt: "Learn when and how to invest in pre-construction properties for maximum returns. Understand market cycles, developer incentives, and how to identify the best opportunities before they're gone.",
      category: "Pre-Construction",
      author: "David Kim",
      date: "March 8, 2024",
      readTime: "7 min read"
    },
    {
      id: 5,
      title: "Building Your Personal Brand as a Real Estate Agent",
      excerpt: "Essential steps to establish yourself as a trusted authority in your local market. From creating a unique value proposition to developing a consistent online presence that attracts ideal clients.",
      category: "Marketing",
      author: "Lisa Thompson",
      date: "March 5, 2024",
      readTime: "4 min read"
    },
    {
      id: 6,
      title: "Understanding Mortgage Rate Trends in 2024",
      excerpt: "What current rate changes mean for buyers and sellers in today's market. Get insights on Bank of Canada decisions, inflation impacts, and strategies to help your clients navigate financing options.",
      category: "Market Trends",
      author: "Robert Wilson",
      date: "March 3, 2024",
      readTime: "5 min read"
    },
    {
      id: 7,
      title: "Mastering the Art of Open House Events",
      excerpt: "Transform your open houses from basic showings to unforgettable experiences that generate leads and close deals. Learn staging secrets, visitor engagement tactics, and follow-up strategies that convert.",
      category: "Marketing",
      author: "Amanda Foster",
      date: "March 1, 2024",
      readTime: "6 min read"
    },
    {
      id: 8,
      title: "Navigating Multiple Offers: A Complete Guide",
      excerpt: "Expert strategies for representing both buyers and sellers in competitive bidding situations. Understand escalation clauses, presentation timing, and negotiation techniques that win deals.",
      category: "Legal Updates",
      author: "James Patterson",
      date: "February 28, 2024",
      readTime: "9 min read"
    },
    {
      id: 9,
      title: "Toronto's Condo Market: Q1 2024 Analysis",
      excerpt: "In-depth analysis of Toronto's condo market performance, including price trends, inventory levels, and neighborhood highlights. See which areas are outperforming and where opportunities lie.",
      category: "Market Trends",
      author: "Emily Zhang",
      date: "February 25, 2024",
      readTime: "10 min read"
    },
    {
      id: 10,
      title: "Building a Referral Network That Grows Your Business",
      excerpt: "Proven strategies to create and nurture a referral network that consistently sends you quality clients. Learn how to build relationships with other professionals and turn past clients into brand ambassadors.",
      category: "Marketing",
      author: "Kevin Martinez",
      date: "February 22, 2024",
      readTime: "5 min read"
    },
    {
      id: 11,
      title: "First-Time Home Buyer Programs in Ontario",
      excerpt: "Complete guide to government programs, grants, and incentives available to first-time buyers in Ontario. Help your clients maximize their purchasing power and understand qualification requirements.",
      category: "Legal Updates",
      author: "Rachel Green",
      date: "February 20, 2024",
      readTime: "7 min read"
    },
    {
      id: 12,
      title: "Luxury Real Estate Marketing: Selling High-End Properties",
      excerpt: "Specialized strategies for marketing luxury properties to affluent buyers. From high-end photography and videography to private showings and international marketing tactics.",
      category: "Marketing",
      author: "Victoria Sterling",
      date: "February 18, 2024",
      readTime: "8 min read"
    }
  ];

  return (
    <>
      <Head>
        <title>Real Estate Blog | RE/MAX Excellence</title>
        <meta name="description" content="Insights that keep you ahead. Expert advice on market trends, legal updates, marketing practices, and pre-construction opportunities." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div className="bg-background min-h-screen">
        <Header />
        
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-teal-50 via-white to-cyan-100 overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-teal-200/30 to-teal-300/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-cyan-200/30 to-cyan-300/20 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-purple-200/20 to-purple-300/10 rounded-full blur-3xl"></div>
          </div>
          
          {/* Creative Floating Balloon Elements */}
          <div className="absolute right-8 top-16 z-10">
            <div className="relative">
              <Image 
                src="/images/company-pin-icon.png" 
                alt="RE/MAX Balloon" 
                width={64} 
                height={64} 
                className="w-16 h-16 object-contain opacity-80 animate-pulse transform rotate-6"
              />
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-60 animate-bounce"></div>
              <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full opacity-70 animate-ping"></div>
            </div>
          </div>
          
          <div className="absolute left-8 top-32 z-10">
            <div className="relative">
              <Image 
                src="/images/company-pin-icon.png" 
                alt="RE/MAX Balloon" 
                width={48} 
                height={48} 
                className="w-12 h-12 object-contain opacity-70 animate-bounce transform -rotate-6"
              />
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full opacity-80 animate-pulse"></div>
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
                Insights That Keep You <span className="text-transparent bg-gradient-to-r from-teal-500 via-cyan-600 to-blue-600 bg-clip-text">Ahead</span>
              </h1>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto font-arial leading-relaxed">
                Stay informed with expert insights, market analysis, and practical advice from Ontario's fastest-growing real estate brokerage.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Recent Posts & Sidebar */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Recent Posts */}
              <div className="lg:col-span-2">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="mb-12"
                >
                  <h2 className="text-3xl font-bold text-foreground mb-8">Recent Posts</h2>
                </motion.div>

                <motion.div 
                  variants={staggerContainer}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  className="space-y-8"
                >
                  {recentPosts.map((post, index) => (
                    <motion.div key={post.id} variants={fadeInUp}>
                      <Link href={`/blog/${post.id}`}>
                        <Card className="border-0 bg-white hover:shadow-lg transition-all duration-300 group cursor-pointer">
                          <CardContent className="p-8">
                            <div className="flex items-start justify-between mb-4">
                              <span className="bg-secondary/10 text-secondary px-3 py-1 rounded-full text-sm font-medium">
                                {post.category}
                              </span>
                              <Button 
                                size="sm" 
                                className="bg-brand-bright-red hover:bg-brand-dark-red text-white font-bold"
                                onClick={(e) => {
                                  e.preventDefault();
                                  e.stopPropagation();
                                  // Share functionality
                                }}
                              >
                                <Share2 className="h-4 w-4" />
                              </Button>
                            </div>
                            
                            <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                              {post.title}
                            </h3>
                            <p className="text-muted-foreground mb-4">
                              {post.excerpt}
                            </p>
                            
                            <div className="flex items-center justify-between">
                              <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                                <div className="flex items-center">
                                  <User className="h-4 w-4 mr-1" />
                                  {post.author}
                                </div>
                                <div className="flex items-center">
                                  <Calendar className="h-4 w-4 mr-1" />
                                  {post.date}
                                </div>
                                <div className="flex items-center">
                                  <Clock className="h-4 w-4 mr-1" />
                                  {post.readTime}
                                </div>
                              </div>
                              <Button 
                                size="sm" 
                                className="bg-brand-bright-red hover:bg-brand-dark-red text-white font-bold"
                              >
                                Read Article
                              </Button>
                            </div>
                          </CardContent>
                        </Card>
                      </Link>
                    </motion.div>
                  ))}
                </motion.div>

                <div className="text-center mt-12">
                  <Button onClick={openModal} size="lg" className="bg-brand-bright-red hover:bg-brand-dark-red text-white font-bold">
                    Load More Articles
                  </Button>
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="space-y-8"
                >
                  {/* Newsletter Signup */}
                  <Card className="border-0 bg-gradient-to-br from-primary/5 to-secondary/5">
                    <CardContent className="p-8">
                      <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
                      <p className="text-muted-foreground mb-6">
                        Get the latest insights delivered to your inbox weekly.
                      </p>
                      <div className="space-y-4">
                        <Input placeholder="Your email address" />
                        <Button onClick={openModal} className="w-full bg-brand-bright-red hover:bg-brand-dark-red text-white font-bold">
                          Subscribe
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Popular Tags */}
                  <Card className="border-0 bg-white">
                    <CardContent className="p-8">
                      <h3 className="text-xl font-bold mb-6">Popular Tags</h3>
                      <div className="flex flex-wrap gap-2">
                        {[
                          "Real Estate", "Market Analysis", "Investment", "Legal", 
                          "Marketing", "Technology", "Pre-Construction", "Trends",
                          "Ontario", "Toronto", "Mississauga", "Brampton"
                        ].map((tag, index) => (
                          <span 
                            key={index}
                            className="bg-muted text-muted-foreground px-3 py-1 rounded-full text-sm hover:bg-primary hover:text-primary-foreground cursor-pointer transition-colors"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  {/* Recent Comments */}
                  <Card className="border-0 bg-white">
                    <CardContent className="p-8">
                      <h3 className="text-xl font-bold mb-6">Recent Comments</h3>
                      <div className="space-y-4">
                        {[
                          { author: "John Smith", comment: "Great insights on market trends!", article: "AI and Market Predictions" },
                          { author: "Mary Johnson", comment: "Very helpful legal update.", article: "Ontario Regulations" },
                          { author: "David Lee", comment: "These marketing tips work!", article: "Social Media Strategies" }
                        ].map((comment, index) => (
                          <div 
                            key={index} 
                            className="border-b border-border pb-4 last:border-b-0"
                          >
                            <p className="text-sm text-muted-foreground mb-1">
                              <span className="font-medium text-foreground">{comment.author}</span> on
                            </p>
                            <p className="text-sm font-medium text-primary mb-2">{comment.article}</p>
                            <p className="text-sm text-muted-foreground">"{comment.comment}"</p>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
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
                <Button onClick={openModal} size="lg" className="bg-brand-bright-red hover:bg-brand-dark-red text-white font-bold px-8 py-4 text-xl">
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