/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'assets.co.dev',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
            {
              protocol: 'https',
              hostname: 'dontdelete2005142.kloudbean.com',
              port: '',
              pathname: '/**',
            },
            {
              protocol: 'https',
              hostname: 'play-lh.googleusercontent.com',
              port: '',
              pathname: '/**',
            },
            {
              protocol: 'https',
              hostname: 'd1uevawj71pji9.cloudfront.net',
              port: '',
              pathname: '/**',
            },
            {
              protocol: 'https',
              hostname: 'encrypted-tbn0.gstatic.com',
              port: '',
              pathname: '/**',
            },
            {
              protocol: 'https',
              hostname: 'images-eds-ssl.xboxlive.com',
              port: '',
              pathname: '/**',
            },
            {
              protocol: 'https',
              hostname: 'cdn.dribbble.com',
              port: '',
              pathname: '/**',
            },
            {
              protocol: 'https',
              hostname: 'i.pinimg.com',
              port: '',
              pathname: '/**',
            },
    ],
  },
  webpack: (config, context) => {
    config.optimization.minimize = process.env.NEXT_PUBLIC_CO_DEV_ENV !== "preview";
    return config;
  }
};

export default nextConfig;
