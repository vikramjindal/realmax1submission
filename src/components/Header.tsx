import { useRouter } from 'next/router';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, ChevronDown } from 'lucide-react';
import Image from 'next/image';
import { useJoinUsModal } from '@/contexts/JoinUsModalContext';

const Header = () => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);
  const { openModal } = useJoinUsModal();

  const navItems = [
    { name: 'Marketing', href: '/marketing' },
    { name: 'Training', href: '/training' },
    { name: 'Pre Con', href: '/pre-construction' },
    { name: 'Events', href: '/events' },
    { name: 'Blog', href: '/blog' },
    { name: 'About', href: '/about-us' },
    { name: 'Contact', href: '/contact-us' }
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
    <header className="w-full bg-gradient-to-r from-brand-dark-blue via-brand-dark-blue to-brand-dark-blue border-b-4 border-brand-bright-red sticky top-0 z-50 shadow-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="cursor-pointer transform hover:scale-105 transition-transform duration-200" onClick={() => router.push("/")}>
            <Image
              src="/images/logo.png"
              alt="RE/MAX Excellence Logo"
              width={200}
              height={80}
              className="h-16 w-auto"
              priority
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-white hover:text-brand-bright-red transition-all duration-200 font-bold text-sm"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Desktop CTA Section */}
          <div className="hidden lg:flex items-center">
            <Button 
              onClick={openModal}
              className="bg-brand-bright-red hover:bg-brand-dark-red text-white font-bold px-6 py-2 text-sm rounded"
            >
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
          <div className="lg:hidden py-4 border-t border-white/20 bg-brand-dark-blue/95 backdrop-blur-sm">
            <nav className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-white hover:text-brand-bright-red transition-all duration-200 font-bold py-3 px-4 rounded-lg hover:bg-white/10"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              
              <div className="pt-4 border-t border-white/20">
                <Button 
                  onClick={() => {
                    openModal();
                    setIsMenuOpen(false);
                  }}
                  className="bg-brand-bright-red hover:bg-brand-dark-red text-white font-bold w-full mx-4 py-3 text-lg"
                >
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