import React from "react";
import Head from "next/head";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { 
  BookOpen, 
  TrendingUp, 
  Scale, 
  Target,
  Calendar,
  User,
  ArrowRight,
  Search,
  Tag,
  Clock,
  Eye,
  MessageCircle,
  Share2,
  FileText
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
  const featuredPosts = [
    {
      id: 1,
      title: "The Future of Real Estate: AI and Market Predictions",
      excerpt: "Discover how artificial intelligence is revolutionizing property valuation and market analysis in 2024.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Market Trends",
      author: "Sarah Chen",
      date: "March 15, 2024",
      readTime: "5 min read",
      views: "2.1k",
      comments: 24
    },
    {
      id: 2,
      title: "New Ontario Real Estate Regulations: What Agents Need to Know",
      excerpt: "A comprehensive guide to the latest regulatory changes affecting real estate professionals in Ontario.",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Legal Updates",
      author: "Michael Rodriguez",
      date: "March 12, 2024",
      readTime: "8 min read",
      views: "1.8k",
      comments: 18
    },
    {
      id: 3,
      title: "Social Media Marketing Strategies That Actually Work",
      excerpt: "Proven tactics to boost your real estate social media presence and generate quality leads.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Marketing Practices",
      author: "Jennifer Park",
      date: "March 10, 2024",
      readTime: "6 min read",
      views: "3.2k",
      comments: 31
    }
  ];

  const recentPosts = [
    {
      id: 4,
      title: "Pre-Construction Investment: Timing the Market Right",
      excerpt: "Learn when and how to invest in pre-construction properties for maximum returns.",
      category: "Pre-Construction",
      author: "David Kim",
      date: "March 8, 2024",
      readTime: "7 min read"
    },
    {
      id: 5,
      title: "Building Your Personal Brand as a Real Estate Agent",
      excerpt: "Essential steps to establish yourself as a trusted authority in your local market.",
      category: "Marketing Practices",
      author: "Lisa Thompson",
      date: "March 5, 2024",
      readTime: "4 min read"
    },
    {
      id: 6,
      title: "Understanding Mortgage Rate Trends in 2024",
      excerpt: "What current rate changes mean for buyers and sellers in today's market.",
      category: "Market Trends",
      author: "Robert Wilson",
      date: "March 3, 2024",
      readTime: "5 min read"
    }
  ];

  const categories = [
    { name: "Market Trends", count: 24, color: "primary" },
    { name: "Legal Updates", count: 18, color: "secondary" },
    { name: "Marketing Practices", count: 32, color: "purple-500" },
    { name: "Pre-Construction", count: 15, color: "blue-500" }
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
                src="/images/ballon.png" 
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
                src="/images/ballon.png" 
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
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-teal-500 to-teal-600 rounded-full text-white text-sm font-semibold shadow-lg mb-6">
                <FileText className="w-4 h-4 mr-2" />
                Expert Insights & Analysis
              </div>
              <h1 className="text-5xl lg:text-6xl font-black text-slate-900 mb-8 font-montserrat leading-tight">
                Insights That Keep You <span className="text-transparent bg-gradient-to-r from-teal-500 via-cyan-600 to-blue-600 bg-clip-text">Ahead</span>
              </h1>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8 font-arial leading-relaxed">
                Stay informed with expert insights, market analysis, and practical advice from Ontario's fastest-growing real estate brokerage.
              </p>
              
              {/* Search Bar */}
              <div className="max-w-2xl mx-auto">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input 
                    placeholder="Search articles, topics, or keywords..."
                    className="pl-12 h-14 text-lg"
                  />
                  <Button className="absolute right-2 top-2 h-10 bg-primary hover:bg-primary/90">
                    Search
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Categories Section */}
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
                Explore by <span className="text-primary">Category</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Find the content that matters most to your business
              </p>
            </motion.div>

            <motion.div 
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {categories.map((category, index) => (
                <motion.div key={index} variants={fadeInUp}>
                  <Card className="h-full border-0 bg-white hover:shadow-lg transition-all duration-300 group cursor-pointer">
                    <CardContent className="p-8 text-center">
                      <div className={`w-16 h-16 bg-${category.color}/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform`}>
                        {category.name === "Market Trends" && <TrendingUp className={`h-8 w-8 text-${category.color}`} />}
                        {category.name === "Legal Updates" && <Scale className={`h-8 w-8 text-${category.color}`} />}
                        {category.name === "Marketing Practices" && <Target className={`h-8 w-8 text-${category.color}`} />}
                        {category.name === "Pre-Construction" && <BookOpen className={`h-8 w-8 text-${category.color}`} />}
                      </div>
                      <h3 className="text-xl font-bold mb-2">{category.name}</h3>
                      <p className="text-muted-foreground text-sm">{category.count} articles</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Featured Posts */}
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
                Featured Articles
              </h2>
              <p className="text-xl text-muted-foreground">
                Our most popular and impactful content
              </p>
            </motion.div>

            <motion.div 
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid lg:grid-cols-3 gap-8"
            >
              {featuredPosts.map((post, index) => (
                <motion.div key={post.id} variants={fadeInUp}>
                  <Card className="h-full overflow-hidden border-0 bg-white hover:shadow-lg transition-all duration-300 group">
                    <div className="relative">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                          {post.category}
                        </span>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-muted-foreground mb-4 text-sm">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center">
                            <User className="h-4 w-4 mr-1" />
                            {post.author}
                          </div>
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-1" />
                            {post.date}
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 mr-1" />
                            {post.readTime}
                          </div>
                          <div className="flex items-center">
                            <Eye className="h-4 w-4 mr-1" />
                            {post.views}
                          </div>
                          <div className="flex items-center">
                            <MessageCircle className="h-4 w-4 mr-1" />
                            {post.comments}
                          </div>
                        </div>
                        <Button variant="ghost" size="sm" className="text-primary hover:text-primary/80">
                          Read More
                          <ArrowRight className="h-4 w-4 ml-1" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
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
                      <Card className="border-0 bg-white hover:shadow-lg transition-all duration-300 group">
                        <CardContent className="p-8">
                          <div className="flex items-start justify-between mb-4">
                            <span className="bg-secondary/10 text-secondary px-3 py-1 rounded-full text-sm font-medium">
                              {post.category}
                            </span>
                            <Button variant="ghost" size="sm">
                              <Share2 className="h-4 w-4" />
                            </Button>
                          </div>
                          
                          <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors cursor-pointer">
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
                            <Button variant="outline" size="sm" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                              Read Article
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </motion.div>

                <div className="text-center mt-12">
                  <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
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
                        <Button className="w-full bg-primary hover:bg-primary/90">
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
                          <div key={index} className="border-b border-border pb-4 last:border-b-0">
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
        <section className="py-20 bg-gradient-to-r from-primary to-secondary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Ready to Join the Conversation?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Connect with Ontario's most dynamic real estate community and stay ahead of industry trends.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                  Join Our Community
                </Button>
                <Button size="lg" variant="outline" className="bg-white/10 border-white text-white hover:bg-white hover:text-foreground">
                  Subscribe to Newsletter
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