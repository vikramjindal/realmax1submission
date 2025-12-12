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
  if (!WORDPRESS_API_URL) {
    throw new Error('NEXT_PUBLIC_WORDPRESS_URL is not set in environment variables');
  }

  try {
    const url = `${WORDPRESS_API_URL}${endpoint}`;
    console.log(`📡 Fetching: ${url}`);
    
    const response = await fetch(url, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error(`❌ WordPress API error (${response.status}):`, errorText);
      throw new Error(`WordPress API error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    console.log(`✅ Fetched from ${endpoint}:`, Array.isArray(data) ? `${data.length} items` : 'object');
    return data;
  } catch (error) {
    console.error(`❌ Error fetching from WordPress: ${endpoint}`, error);
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

export interface MarketingMaterial {
  id: number;
  title: {
    rendered: string;
  };
  marketing_image_url: string;
  marketing_order: number;
  featured_media: number;
  _embedded?: {
    'wp:featuredmedia'?: Array<{
      source_url: string;
      alt_text: string;
    }>;
  };
}

export interface Event {
  id: number;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  event_date: string;
  event_time: string;
  event_location: string;
  event_attendees: string;
  event_type: string;
  event_type_color: string;
  event_order: number;
  featured_media: number;
  _embedded?: {
    'wp:featuredmedia'?: Array<{
      source_url: string;
      alt_text: string;
    }>;
  };
}

export interface PastEvent {
  id: number;
  title: {
    rendered: string;
  };
  past_event_date: string;
  past_event_attendees: string;
  past_event_highlights: string[];
  past_event_order: number;
  featured_media: number;
  _embedded?: {
    'wp:featuredmedia'?: Array<{
      source_url: string;
      alt_text: string;
    }>;
  };
}

export interface TrainingMaterial {
  id: number;
  title: {
    rendered: string;
  };
  training_image_url: string;
  training_order: number;
  featured_media: number;
  _embedded?: {
    'wp:featuredmedia'?: Array<{
      source_url: string;
      alt_text: string;
    }>;
  };
}

export interface MarketingService {
  id: number;
  title: {
    rendered: string;
  };
  service_media_type: string; // 'image' or 'video'
  service_media_url: string;
  service_order: number;
  featured_media: number;
  _embedded?: {
    'wp:featuredmedia'?: Array<{
      source_url: string;
      alt_text: string;
    }>;
  };
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
  // WordPress REST API doesn't support orderby=meta_value_num for custom post types by default
  // Fetch all agents and sort client-side
  const agents = await fetchFromWordPress(
    `/wp-json/wp/v2/agents?_embed&per_page=100&status=publish&orderby=date&order=asc`
  );
  
  // Sort by agent_order meta field client-side
  return agents.sort((a, b) => {
    const orderA = a.agent_order || 0;
    const orderB = b.agent_order || 0;
    return orderA - orderB;
  });
}

// Team Members
export async function getTeamMembers(): Promise<TeamMember[]> {
  // Fetch all team members and sort client-side
  const members = await fetchFromWordPress(
    `/wp-json/wp/v2/team-members?_embed&per_page=100&status=publish&orderby=date&order=asc`
  );
  
  // Sort by team_order meta field client-side
  return members.sort((a, b) => {
    const orderA = a.team_order || 0;
    const orderB = b.team_order || 0;
    return orderA - orderB;
  });
}

// Testimonials
export async function getTestimonials(): Promise<Testimonial[]> {
  // Fetch all testimonials and sort client-side
  const testimonials = await fetchFromWordPress(
    `/wp-json/wp/v2/testimonials?_embed&per_page=100&status=publish&orderby=date&order=asc`
  );
  
  // Sort by testimonial_order meta field client-side
  return testimonials.sort((a, b) => {
    const orderA = a.testimonial_order || 0;
    const orderB = b.testimonial_order || 0;
    return orderA - orderB;
  });
}

// Hero Section
export async function getHeroSection(): Promise<HeroSection> {
  return fetchFromWordPress('/wp-json/remax/v1/hero');
}

// Page Sections
export async function getHomepageSections(): Promise<PageSection[]> {
  return fetchFromWordPress('/wp-json/remax/v1/homepage-sections');
}

// Marketing Materials
export async function getMarketingMaterials(): Promise<MarketingMaterial[]> {
  // Fetch all marketing materials and sort client-side
  const materials = await fetchFromWordPress(
    `/wp-json/wp/v2/marketing-materials?_embed&per_page=100&status=publish&orderby=date&order=asc`
  );
  
  // Sort by marketing_order meta field client-side
  return materials.sort((a, b) => {
    const orderA = a.marketing_order || 0;
    const orderB = b.marketing_order || 0;
    return orderA - orderB;
  });
}

// Events
export async function getEvents(): Promise<Event[]> {
  // Fetch all events and sort client-side
  const events = await fetchFromWordPress(
    `/wp-json/wp/v2/events?_embed&per_page=100&status=publish&orderby=date&order=asc`
  );
  
  // Sort by event_order meta field client-side
  return events.sort((a, b) => {
    const orderA = a.event_order || 0;
    const orderB = b.event_order || 0;
    return orderA - orderB;
  });
}

// Past Events
export async function getPastEvents(): Promise<PastEvent[]> {
  // Fetch all past events and sort client-side
  const pastEvents = await fetchFromWordPress(
    `/wp-json/wp/v2/past-events?_embed&per_page=100&status=publish&orderby=date&order=asc`
  );
  
  // Sort by past_event_order meta field client-side
  return pastEvents.sort((a, b) => {
    const orderA = a.past_event_order || 0;
    const orderB = b.past_event_order || 0;
    return orderA - orderB;
  });
}

// Helper function to get featured image URL
export function getFeaturedImageUrl(post: WordPressPost | Agent | TeamMember | MarketingMaterial | Event | PastEvent | TrainingMaterial): string | null {
  if (post._embedded?.['wp:featuredmedia']?.[0]?.source_url) {
    return post._embedded['wp:featuredmedia'][0].source_url;
  }
  return null;
}

// Helper function to get marketing material image URL (checks custom URL first, then featured image)
export function getMarketingImageUrl(material: MarketingMaterial): string | null {
  // If custom image URL is set, use it
  if (material.marketing_image_url) {
    return material.marketing_image_url;
  }
  // Otherwise use featured image
  return getFeaturedImageUrl(material);
}

// Helper function to get training material image URL (checks custom URL first, then featured image)
export function getTrainingImageUrl(material: TrainingMaterial): string | null {
  // If custom image URL is set, use it
  if (material.training_image_url) {
    return material.training_image_url;
  }
  // Otherwise use featured image
  return getFeaturedImageUrl(material);
}

// Marketing Services
export async function getMarketingServices(): Promise<MarketingService[]> {
  // Fetch all marketing services and sort client-side
  const services = await fetchFromWordPress(
    `/wp-json/wp/v2/marketing-services?_embed&per_page=100&status=publish&orderby=date&order=asc`
  );
  
  // Sort by service_order meta field client-side
  return services.sort((a, b) => {
    const orderA = a.service_order || 0;
    const orderB = b.service_order || 0;
    return orderA - orderB;
  });
}

// Helper function to get marketing service media URL
export function getMarketingServiceMediaUrl(service: MarketingService): string | null {
  // If custom media URL is set, use it
  if (service.service_media_url) {
    return service.service_media_url;
  }
  // For images, use featured image as fallback
  if (service.service_media_type === 'image') {
    return getFeaturedImageUrl(service);
  }
  // For videos, return null if no URL is set
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

