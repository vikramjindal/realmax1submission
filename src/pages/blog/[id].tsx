import React from "react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { useJoinUsModal } from '@/contexts/JoinUsModalContext';
import { 
  Calendar,
  User,
  Clock,
  ArrowLeft,
  Share2,
  Facebook,
  Twitter,
  Linkedin
} from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "The Future of Real Estate: AI and Market Predictions",
    excerpt: "Discover how artificial intelligence is revolutionizing property valuation and market analysis in 2024.",
    content: `
      <p>Artificial intelligence is transforming the real estate industry in unprecedented ways. From property valuation to market trend analysis, AI is helping agents and brokers make more informed decisions and provide better service to their clients.</p>
      
      <h2>The Rise of AI in Real Estate</h2>
      <p>In 2024, AI-powered tools have become essential for real estate professionals. These tools can analyze vast amounts of data to provide accurate property valuations, predict market trends, and identify the best investment opportunities.</p>
      
      <h2>Key Benefits of AI for Real Estate Agents</h2>
      <ul>
        <li><strong>Accurate Property Valuations:</strong> AI algorithms can analyze comparable sales, market trends, and property features to provide precise valuations.</li>
        <li><strong>Market Trend Predictions:</strong> Machine learning models can identify emerging trends before they become obvious to the human eye.</li>
        <li><strong>Lead Generation:</strong> AI can help identify potential buyers and sellers based on behavior patterns and data analysis.</li>
        <li><strong>Automated Marketing:</strong> AI tools can create personalized marketing campaigns that resonate with specific target audiences.</li>
      </ul>
      
      <h2>AI Tools Every Agent Should Know</h2>
      <p>There are several AI-powered platforms that have become game-changers for real estate professionals:</p>
      <ul>
        <li>Predictive analytics platforms for market forecasting</li>
        <li>AI-powered CRM systems that prioritize leads</li>
        <li>Virtual staging and property visualization tools</li>
        <li>Chatbots for 24/7 client communication</li>
      </ul>
      
      <h2>The Future Ahead</h2>
      <p>As AI technology continues to evolve, we can expect even more sophisticated tools that will further streamline the real estate process. Agents who embrace these technologies now will be well-positioned to lead the industry in the years to come.</p>
      
      <p>The key is not to fear AI, but to learn how to leverage it effectively. Those who master these tools will provide unparalleled value to their clients and build thriving businesses in the AI-powered future of real estate.</p>
    `,
    category: "Market Trends",
    author: "Sarah Chen",
    date: "March 15, 2024",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: 2,
    title: "New Ontario Real Estate Regulations: What Agents Need to Know",
    excerpt: "A comprehensive guide to the latest regulatory changes affecting real estate professionals in Ontario.",
    content: `
      <p>Ontario's real estate landscape is evolving with new regulations that every agent must understand. These changes are designed to protect consumers and ensure higher standards of professional practice.</p>
      
      <h2>Key Regulatory Updates</h2>
      <p>The Real Estate Council of Ontario (RECO) has introduced several important changes that affect how agents conduct business in 2024.</p>
      
      <h2>Enhanced Disclosure Requirements</h2>
      <p>Agents are now required to provide more detailed disclosures about property conditions, market conditions, and potential conflicts of interest. This includes:</p>
      <ul>
        <li>Detailed property history reports</li>
        <li>Market analysis documentation</li>
        <li>Clear disclosure of representation relationships</li>
        <li>Enhanced form requirements for all transactions</li>
      </ul>
      
      <h2>Professional Standards Updates</h2>
      <p>New professional standards emphasize ethical conduct and client-first service. Agents must now:</p>
      <ul>
        <li>Complete additional continuing education hours</li>
        <li>Maintain higher errors and omissions insurance coverage</li>
        <li>Follow stricter guidelines for advertising and marketing</li>
        <li>Adhere to new data protection and privacy requirements</li>
      </ul>
      
      <h2>Impact on Daily Practice</h2>
      <p>These regulations affect everyday transactions in several ways. Agents need to allow more time for paperwork, maintain better records, and ensure all communications are documented properly.</p>
      
      <h2>Staying Compliant</h2>
      <p>To ensure full compliance with these new regulations:</p>
      <ul>
        <li>Attend all required training sessions</li>
        <li>Update your forms and templates</li>
        <li>Review your insurance coverage</li>
        <li>Implement proper record-keeping systems</li>
      </ul>
      
      <p>While these changes may seem burdensome at first, they ultimately protect both agents and clients, creating a more professional and trustworthy real estate industry.</p>
    `,
    category: "Legal Updates",
    author: "Michael Rodriguez",
    date: "March 12, 2024",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
  },
  // Add more blog posts here...
];

export default function BlogPost() {
  const router = useRouter();
  const { id } = router.query;
  const { openModal } = useJoinUsModal();
  
  const post = blogPosts.find(p => p.id === Number(id));

  if (!post) {
    return (
      <>
        <Head>
          <title>Blog Post Not Found | RE/MAX Excellence</title>
        </Head>
        <Header />
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Blog Post Not Found</h1>
            <Link href="/blog">
              <Button className="bg-brand-bright-red hover:bg-brand-dark-red text-white font-bold">
                Back to Blog
              </Button>
            </Link>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Head>
        <title>{post.title} | RE/MAX Excellence Blog</title>
        <meta name="description" content={post.excerpt} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div className="bg-background min-h-screen">
        <Header />
        
        {/* Hero Image */}
        <div className="relative h-96 w-full">
          <img 
            src={post.image} 
            alt={post.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        </div>

        {/* Article Content */}
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Back Button */}
          <Link href="/blog">
            <Button variant="ghost" className="mb-8 hover:text-brand-bright-red">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Blog
            </Button>
          </Link>

          {/* Category Badge */}
          <div className="mb-4">
            <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold">
              {post.category}
            </span>
          </div>

          {/* Title */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-black text-foreground mb-6 font-montserrat leading-tight"
          >
            {post.title}
          </motion.h1>

          {/* Meta Information */}
          <div className="flex flex-wrap items-center gap-6 text-muted-foreground mb-8 pb-8 border-b">
            <div className="flex items-center">
              <User className="h-5 w-5 mr-2" />
              <span className="font-medium">{post.author}</span>
            </div>
            <div className="flex items-center">
              <Calendar className="h-5 w-5 mr-2" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center">
              <Clock className="h-5 w-5 mr-2" />
              <span>{post.readTime}</span>
            </div>
          </div>

          {/* Share Buttons */}
          <div className="flex items-center gap-4 mb-8">
            <span className="text-sm font-semibold text-muted-foreground">Share:</span>
            <Button size="sm" variant="outline" className="hover:bg-blue-600 hover:text-white hover:border-blue-600">
              <Facebook className="h-4 w-4" />
            </Button>
            <Button size="sm" variant="outline" className="hover:bg-blue-400 hover:text-white hover:border-blue-400">
              <Twitter className="h-4 w-4" />
            </Button>
            <Button size="sm" variant="outline" className="hover:bg-blue-700 hover:text-white hover:border-blue-700">
              <Linkedin className="h-4 w-4" />
            </Button>
            <Button size="sm" variant="outline">
              <Share2 className="h-4 w-4" />
            </Button>
          </div>

          {/* Article Content */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="prose prose-lg max-w-none font-arial"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* CTA Section */}
          <div className="mt-12 p-8 bg-gradient-to-r from-brand-bright-red/10 to-brand-dark-red/10 rounded-2xl">
            <h3 className="text-2xl font-bold mb-4 font-montserrat">Ready to Join RE/MAX Excellence?</h3>
            <p className="text-muted-foreground mb-6">
              Become part of one of the youngest, fastest-growing real estate brokerages and take your career to the next level.
            </p>
            <Button onClick={openModal} className="bg-brand-bright-red hover:bg-brand-dark-red text-white font-bold">
              Join Our Team
            </Button>
          </div>
        </article>

        {/* Related Posts */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-12 font-montserrat">Related Articles</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {blogPosts
                .filter(p => p.id !== post.id)
                .slice(0, 3)
                .map((relatedPost) => (
                  <Link key={relatedPost.id} href={`/blog/${relatedPost.id}`}>
                    <Card className="h-full overflow-hidden border-0 bg-white hover:shadow-lg transition-all duration-300 cursor-pointer">
                      <div className="relative h-48">
                        <img 
                          src={relatedPost.image} 
                          alt={relatedPost.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <CardContent className="p-6">
                        <span className="text-sm text-primary font-semibold">{relatedPost.category}</span>
                        <h3 className="text-xl font-bold mt-2 mb-3 line-clamp-2">
                          {relatedPost.title}
                        </h3>
                        <p className="text-muted-foreground text-sm line-clamp-2">
                          {relatedPost.excerpt}
                        </p>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </>
  );
}

