/**
 * WordPress API Utility Functions
 * 
 * This file contains functions to fetch data from WordPress REST API
 */

const WORDPRESS_API_URL = process.env.NEXT_PUBLIC_WORDPRESS_URL || '';

if (!WORDPRESS_API_URL) {
  console.warn('NEXT_PUBLIC_WORDPRESS_URL is not set in environment variables');
}

// Helper function to fetch from WordPress API
async function fetchFromWordPress(endpoint: string, options: RequestInit = {}) {
  try {
    const url = `${WORDPRESS_API_URL}${endpoint}`;
    const response = await fetch(url, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
    });

    if (!response.ok) {
      throw new Error(`WordPress API error: ${response.status} ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error(`Error fetching from WordPress: ${endpoint}`, error);
    throw error;
  }
}

// Types
export interface WordPressPost {
  id: number;
  date: string;
  slug: string;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  featured_media: number;
  _embedded?: {
    'wp:featuredmedia'?: Array<{
      source_url: string;
      alt_text: string;
    }>;
    'wp:term'?: Array<any>;
    author?: Array<{
      name: string;
      slug: string;
    }>;
  };
}

export interface Agent {
  id: number;
  title: {
    rendered: string;
  };
  agent_name: string;
  agent_order: number;
  featured_media: number;
  _embedded?: {
    'wp:featuredmedia'?: Array<{
      source_url: string;
      alt_text: string;
    }>;
  };
}

export interface TeamMember {
  id: number;
  title: {
    rendered: string;
  };
  team_role: string;
  team_phone: string | null;
  team_email: string;
  team_instagram: string | null;
  team_linkedin: string | null;
  team_order: number;
  featured_media: number;
  _embedded?: {
    'wp:featuredmedia'?: Array<{
      source_url: string;
      alt_text: string;
    }>;
  };
}

export interface Testimonial {
  id: number;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  testimonial_role: string;
  testimonial_rating: number;
  testimonial_order: number;
}

export interface HeroSection {
  title: string;
  subtitle: string;
  description: string;
  stats_text: string;
  stats_subtext: string;
  background_image: string;
  cta_text: string;
}

export interface PageSection {
  id: number;
  title: string;
  content: string;
  type: string;
  subtitle: string;
  featured_image: string | null;
}

// Blog Posts
export async function getBlogPosts(perPage: number = 10, page: number = 1): Promise<WordPressPost[]> {
  return fetchFromWordPress(
    `/wp-json/wp/v2/posts?_embed&per_page=${perPage}&page=${page}&status=publish`
  );
}

export async function getBlogPost(slug: string): Promise<WordPressPost> {
  const posts = await fetchFromWordPress(
    `/wp-json/wp/v2/posts?slug=${slug}&_embed&status=publish`
  );
  return posts[0];
}

export async function getBlogPostById(id: number): Promise<WordPressPost> {
  return fetchFromWordPress(`/wp-json/wp/v2/posts/${id}?_embed`);
}

// Agents (Carousel)
export async function getAgents(): Promise<Agent[]> {
  const agents = await fetchFromWordPress(
    `/wp-json/wp/v2/agents?_embed&per_page=100&status=publish&orderby=meta_value_num&meta_key=_remax_agent_order&order=asc`
  );
  return agents;
}

// Team Members
export async function getTeamMembers(): Promise<TeamMember[]> {
  const members = await fetchFromWordPress(
    `/wp-json/wp/v2/team-members?_embed&per_page=100&status=publish&orderby=meta_value_num&meta_key=_remax_team_order&order=asc`
  );
  return members;
}

// Testimonials
export async function getTestimonials(): Promise<Testimonial[]> {
  const testimonials = await fetchFromWordPress(
    `/wp-json/wp/v2/testimonials?_embed&per_page=100&status=publish&orderby=meta_value_num&meta_key=_remax_testimonial_order&order=asc`
  );
  return testimonials;
}

// Hero Section
export async function getHeroSection(): Promise<HeroSection> {
  return fetchFromWordPress('/wp-json/remax/v1/hero');
}

// Page Sections
export async function getHomepageSections(): Promise<PageSection[]> {
  return fetchFromWordPress('/wp-json/remax/v1/homepage-sections');
}

// Helper function to get featured image URL
export function getFeaturedImageUrl(post: WordPressPost | Agent | TeamMember): string | null {
  if (post._embedded?.['wp:featuredmedia']?.[0]?.source_url) {
    return post._embedded['wp:featuredmedia'][0].source_url;
  }
  return null;
}

// Helper function to get featured image alt text
export function getFeaturedImageAlt(post: WordPressPost | Agent | TeamMember): string {
  return post._embedded?.['wp:featuredmedia']?.[0]?.alt_text || '';
}

// Helper function to format date
export function formatWordPressDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

