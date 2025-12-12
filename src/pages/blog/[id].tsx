import React from "react";
import Head from "next/head";
import { GetStaticProps, GetStaticPaths } from "next";
import Link from "next/link";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { useJoinUsModal } from '@/contexts/JoinUsModalContext';
import { getBlogPosts, getBlogPost, getFeaturedImageUrl, type WordPressPost } from "@/lib/wordpress";
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

interface BlogPostProps {
  post: WordPressPost;
  relatedPosts: WordPressPost[];
}

export default function BlogPost({ post, relatedPosts }: BlogPostProps) {
  const { openModal } = useJoinUsModal();
  
  if (!post) {
    return (
      <>
        <Head>
          <title>Blog Post Not Found | REMAX Excellence</title>
        </Head>
        <Header />
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Blog Post Not Found</h1>
            <Link href="/blog">
              <Button className="bg-brand-bright-red hover:bg-black text-white font-bold">
                Back to Blog
              </Button>
            </Link>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  // Helper functions
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  const getCategory = (post: WordPressPost) => {
    if (post._embedded?.['wp:term']?.[0]?.[0]?.name) {
      return post._embedded['wp:term'][0][0].name;
    }
    return 'General';
  };

  const getAuthor = (post: WordPressPost) => {
    if (post._embedded?.author?.[0]?.name) {
      return post._embedded.author[0].name;
    }
    return 'REMAX Excellence';
  };

  const getReadTime = (content: string) => {
    const words = content.replace(/<[^>]*>/g, '').split(/\s+/).length;
    const minutes = Math.ceil(words / 200);
    return `${minutes} min read`;
  };

  const postImage = getFeaturedImageUrl(post) || 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80';

  return (
    <>
      <Head>
        <title>{post.title.rendered} | REMAX Excellence Blog</title>
        <meta name="description" content={post.excerpt.rendered.replace(/<[^>]*>/g, '').substring(0, 160)} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div className="bg-background min-h-screen">
        <Header />
        
        {/* Hero Image */}
        <div className="relative h-96 w-full">
          <img 
            src={postImage} 
            alt={post.title.rendered}
            className="w-full h-full object-cover"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80';
            }}
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
              {getCategory(post)}
            </span>
          </div>

          {/* Title */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-black text-foreground mb-6 font-montserrat leading-tight"
          >
            {post.title.rendered}
          </motion.h1>

          {/* Meta Information */}
          <div className="flex flex-wrap items-center gap-6 text-muted-foreground mb-8 pb-8 border-b">
            <div className="flex items-center">
              <User className="h-5 w-5 mr-2" />
              <span className="font-medium">{getAuthor(post)}</span>
            </div>
            <div className="flex items-center">
              <Calendar className="h-5 w-5 mr-2" />
              <span>{formatDate(post.date)}</span>
            </div>
            <div className="flex items-center">
              <Clock className="h-5 w-5 mr-2" />
              <span>{getReadTime(post.content.rendered)}</span>
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
            dangerouslySetInnerHTML={{ __html: post.content.rendered }}
          />

          {/* CTA Section */}
          <div className="mt-12 p-8 bg-gradient-to-r from-brand-bright-red/10 to-brand-dark-red/10 rounded-2xl">
            <h3 className="text-2xl font-bold mb-4 font-montserrat">Ready to Join REMAX Excellence?</h3>
            <p className="text-muted-foreground mb-6">
              Become part of one of the youngest, fastest-growing real estate brokerages and take your career to the next level.
            </p>
            <Button onClick={openModal} className="bg-brand-bright-red hover:bg-black text-white font-bold">
              Join Our Team
            </Button>
          </div>
        </article>

        {/* Related Posts */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-12 font-montserrat">Related Articles</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {relatedPosts.length > 0 ? relatedPosts.slice(0, 3).map((relatedPost) => {
                const relatedImage = getFeaturedImageUrl(relatedPost) || 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80';
                const relatedCategory = relatedPost._embedded?.['wp:term']?.[0]?.[0]?.name || 'General';
                const relatedExcerpt = relatedPost.excerpt.rendered.replace(/<[^>]*>/g, '').substring(0, 150) + '...';
                
                return (
                  <Link key={relatedPost.id} href={`/blog/${relatedPost.slug}`}>
                    <Card className="h-full overflow-hidden border-0 bg-white hover:shadow-lg transition-all duration-300 cursor-pointer">
                      <div className="relative h-48">
                        <img 
                          src={relatedImage} 
                          alt={relatedPost.title.rendered}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.src = 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80';
                          }}
                        />
                      </div>
                      <CardContent className="p-6">
                        <span className="text-sm text-primary font-semibold">{relatedCategory}</span>
                        <h3 className="text-xl font-bold mt-2 mb-3 line-clamp-2">
                          {relatedPost.title.rendered}
                        </h3>
                        <p className="text-muted-foreground text-sm line-clamp-2">
                          {relatedExcerpt}
                        </p>
                      </CardContent>
                    </Card>
                  </Link>
                );
              }) : (
                <p className="text-muted-foreground">No related posts available.</p>
              )}
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  console.log('🔍 Blog Post - Generating static paths...');
  
  try {
    const posts = await getBlogPosts(100, 1).catch(error => {
      console.error('❌ Error fetching posts for paths:', error);
      return [];
    });

    const paths = posts.map((post) => ({
      params: { id: post.slug },
    }));

    console.log('✅ Generated paths for', paths.length, 'posts');

    return {
      paths,
      fallback: 'blocking', // Generate pages on-demand if not found
    };
  } catch (error) {
    console.error('Error in getStaticPaths:', error);
    return {
      paths: [],
      fallback: 'blocking',
    };
  }
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.id as string;

  if (!slug) {
    return {
      notFound: true,
    };
  }

  console.log('🔍 Blog Post - Fetching post:', slug);

  try {
    const post = await getBlogPost(slug).catch(error => {
      console.error('❌ Error fetching post:', error);
      return null;
    });

    if (!post) {
      return {
        notFound: true,
      };
    }

    // Get related posts (same category or recent posts)
    const allPosts = await getBlogPosts(20, 1).catch(() => []);
    const relatedPosts = allPosts
      .filter(p => p.id !== post.id)
      .slice(0, 3);

    console.log('✅ Post fetched:', post.title.rendered);
    console.log('✅ Related posts:', relatedPosts.length);

    return {
      props: {
        post,
        relatedPosts,
      },
      revalidate: 60, // Revalidate every 60 seconds
    };
  } catch (error) {
    console.error('Error in getStaticProps:', error);
    return {
      notFound: true,
    };
  }
};

