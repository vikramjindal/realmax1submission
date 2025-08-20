import { useRouter } from 'next/router';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, ChevronDown } from 'lucide-react';
import Image from 'next/image';

const Header = () => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);

  const navItems = [
    { 
      name: 'Buy', 
      href: '/buy',
      megaMenu: {
        title: 'Find Your Dream Home',
        description: 'Discover exclusive properties and pre-construction opportunities',
        sections: [
          {
            title: 'Property Search',
            items: [
              { name: 'Residential', href: '/buy', description: 'Houses, condos, townhomes' },
              { name: 'Pre-Construction', href: '/pre-construction', description: 'New developments' },
              { name: 'Investment', href: '/buy', description: 'Rental properties' }
            ]
          },
          {
            title: 'Resources',
            items: [
              { name: 'Market Reports', href: '/blog', description: 'Latest market insights' },
              { name: 'Buying Guide', href: '/blog', description: 'Step-by-step process' }
            ]
          }
        ]
      }
    },
    { 
      name: 'Sell', 
      href: '/sell',
      megaMenu: {
        title: 'Sell Your Property',
        description: 'Get maximum value with our proven marketing strategies',
        sections: [
          {
            title: 'Selling Services',
            items: [
              { name: 'Property Valuation', href: '/sell', description: 'Free market analysis' },
              { name: 'Marketing Package', href: '/marketing', description: 'Professional promotion' }
            ]
          },
          {
            title: 'Support',
            items: [
              { name: 'Selling Timeline', href: '/sell', description: 'What to expect' },
              { name: 'Documentation', href: '/support', description: 'Required paperwork' }
            ]
          }
        ]
      }
    },
    { 
      name: 'Marketing', 
      href: '/marketing',
      megaMenu: {
        title: 'In-House Marketing Excellence',
        description: 'Fresh, fierce & fearlessly effective marketing services',
        sections: [
          {
            title: 'Services',
            items: [
              { name: 'Custom Design', href: '/marketing', description: 'Flyers & materials' },
              { name: 'Digital Campaigns', href: '/marketing', description: 'Social & email' }
            ]
          },
          {
            title: 'AI Integration',
            items: [
              { name: 'Smart Analytics', href: '/marketing', description: 'Data-driven insights' },
              { name: 'Automated Tools', href: '/marketing', description: '24/7 optimization' }
            ]
          }
        ]
      }
    },
    { 
      name: 'Training', 
      href: '/training',
      megaMenu: {
        title: 'Professional Development',
        description: 'Training that turns good agents into great ones',
        sections: [
          {
            title: 'Programs',
            items: [
              { name: 'Weekly Sessions', href: '/training', description: '3-5 sessions per week' },
              { name: 'Accountability Program', href: '/training', description: 'Currently running' }
            ]
          },
          {
            title: 'Resources',
            items: [
              { name: 'Video Library', href: '/training', description: 'On-demand learning' },
              { name: 'Mentorship', href: '/training', description: 'One-on-one guidance' }
            ]
          }
        ]
      }
    },
    { 
      name: 'Support', 
      href: '/support',
      megaMenu: {
        title: 'Comprehensive Support',
        description: 'Everything you need, all under one roof',
        sections: [
          {
            title: 'Services',
            items: [
              { name: 'Admin Support', href: '/support', description: 'Document handling' },
              { name: 'Mortgage Services', href: '/support', description: 'In-house financing' }
            ]
          },
          {
            title: 'Technology',
            items: [
              { name: 'AI Tools', href: '/support', description: 'Smart automation' },
              { name: '24/7 Support', href: '/support', description: 'Always available' }
            ]
          }
        ]
      }
    },
    { 
      name: 'Events', 
      href: '/events',
      megaMenu: {
        title: 'Community & Events',
        description: 'More than a brokerage—we\'re a community',
        sections: [
          {
            title: 'Upcoming Events',
            items: [
              { name: 'Awards Night', href: '/events', description: 'Annual celebration' },
              { name: 'Training Workshops', href: '/events', description: 'Skill development' }
            ]
          },
          {
            title: 'Community',
            items: [
              { name: 'RE:INVENT Summit', href: '/events', description: 'Innovation showcase' },
              { name: 'Networking', href: '/events', description: 'Connect & grow' }
            ]
          }
        ]
      }
    },
    { 
      name: 'Blog', 
      href: '/blog',
      megaMenu: {
        title: 'Insights & Updates',
        description: 'Stay ahead with our latest insights and market intelligence',
        sections: [
          {
            title: 'Categories',
            items: [
              { name: 'Market Trends', href: '/blog', description: 'Real-time analysis' },
              { name: 'Legal Updates', href: '/blog', description: 'Compliance news' }
            ]
          },
          {
            title: 'Resources',
            items: [
              { name: 'Pre-Construction', href: '/blog', description: 'Development insights' },
              { name: 'Investment Guide', href: '/blog', description: 'Strategy tips' }
            ]
          }
        ]
      }
    }
  ];

  const handleMouseEnter = (itemName: string) => {
    setActiveMegaMenu(itemName);
  };

  const handleMouseLeave = () => {
    setTimeout(() => {
      setActiveMegaMenu(null);
    }, 100);
  };

  const handleMegaMenuMouseEnter = () => {
    setActiveMegaMenu(activeMegaMenu);
  };

  const handleMegaMenuMouseLeave = () => {
    setActiveMegaMenu(null);
  };

  return (
    <header className="w-full bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 border-b-4 border-red-600 sticky top-0 z-50 shadow-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="cursor-pointer transform hover:scale-105 transition-transform duration-200" onClick={() => router.push("/")}>
            <Image 
              src="/images/logo.png" 
              alt="RE/MAX Excellence" 
              width={200} 
              height={80} 
              className="h-16 w-auto"
              priority
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => handleMouseEnter(item.name)}
                onMouseLeave={handleMouseLeave}
              >
                <a
                  href={item.href}
                  className="flex items-center space-x-1 px-4 py-3 text-white hover:text-red-400 transition-all duration-200 font-bold font-montserrat text-sm tracking-wide relative group rounded-lg hover:bg-white/10 hover:shadow-lg"
                >
                  <span>{item.name}</span>
                  <ChevronDown className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
                </a>

                {/* Mega Menu */}
                {activeMegaMenu === item.name && item.megaMenu && (
                  <div 
                    className="absolute top-full left-0 w-[500px] bg-white border-2 border-red-600 rounded-xl shadow-2xl p-6 mt-1"
                    onMouseEnter={handleMegaMenuMouseEnter}
                    onMouseLeave={handleMegaMenuMouseLeave}
                  >
                    <div className="mb-6">
                      <h3 className="text-xl font-bold text-slate-900 mb-2 font-montserrat">
                        {item.megaMenu.title}
                      </h3>
                      <p className="text-slate-600 text-sm font-arial">
                        {item.megaMenu.description}
                      </p>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-6">
                      {item.megaMenu.sections.map((section, index) => (
                        <div key={index}>
                          <h4 className="font-bold text-slate-900 mb-3 font-montserrat text-xs uppercase tracking-wide text-red-600 border-b-2 border-red-200 pb-2">
                            {section.title}
                          </h4>
                          <ul className="space-y-2">
                            {section.items.map((subItem, subIndex) => (
                              <li key={subIndex}>
                                <a
                                  href={subItem.href}
                                  className="flex flex-col p-3 rounded-lg hover:bg-red-50 transition-all duration-200 group border border-transparent hover:border-red-200"
                                >
                                  <span className="font-semibold text-slate-900 group-hover:text-red-600 transition-colors duration-200">
                                    {subItem.name}
                                  </span>
                                  <span className="text-xs text-slate-600 font-arial">
                                    {subItem.description}
                                  </span>
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Desktop CTA Section */}
          <div className="hidden lg:flex items-center">
            <Button className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold px-8 py-3 text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-200 border-2 border-red-500">
              Join Excellence
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-white/10 transition-colors duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} className="text-white" /> : <Menu size={24} className="text-white" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-white/20 bg-slate-800/95 backdrop-blur-sm">
            <nav className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <div key={item.name}>
                  <a
                    href={item.href}
                    className="flex items-center justify-between text-white hover:text-red-400 transition-all duration-200 font-bold py-3 px-4 font-montserrat rounded-lg hover:bg-white/10"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span>{item.name}</span>
                    <ChevronDown className="h-4 w-4 transition-transform duration-200" />
                  </a>
                  
                  {/* Mobile Submenu */}
                  {item.megaMenu && (
                    <div className="ml-4 mt-2 space-y-2 bg-slate-700/50 rounded-lg p-3">
                      {item.megaMenu.sections.map((section, index) => (
                        <div key={index} className="space-y-1">
                          <h4 className="font-bold text-white text-xs uppercase tracking-wide text-red-400 px-3 py-2 border-b border-red-300/30">
                            {section.title}
                          </h4>
                          <ul className="space-y-1">
                            {section.items.map((subItem, subIndex) => (
                              <li key={subIndex}>
                                <a
                                  href={subItem.href}
                                  className="block px-6 py-2 text-sm text-gray-300 hover:text-white transition-all duration-200 rounded-lg hover:bg-white/10"
                                  onClick={() => setIsMenuOpen(false)}
                                >
                                  <div className="font-semibold text-white mb-1">{subItem.name}</div>
                                  <div className="text-xs text-gray-400">{subItem.description}</div>
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              
              <div className="pt-4 border-t border-white/20">
                <Button className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold w-full mx-4 py-3 text-lg shadow-xl">
                  Join Excellence
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;