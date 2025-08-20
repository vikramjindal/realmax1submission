import React from 'react';
import Image from 'next/image';

interface LogoProps {
  variant?: 'horizontal' | 'vertical';
  theme?: 'light' | 'dark';
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ 
  variant = 'horizontal', 
  theme = 'light',
  className = '' 
}) => {
  // Select appropriate logo based on variant and theme
  const getLogoSrc = () => {
    if (variant === 'horizontal') {
      return 'https://assets.co.dev/910e4b67-1d47-4112-8d57-8a5231718f2f/remax-excellence-colour-h-8190674.png';
    } else {
      return 'https://assets.co.dev/910e4b67-1d47-4112-8d57-8a5231718f2f/remax-excellence-black-v-aee0818.png';
    }
  };

  const logoSrc = getLogoSrc();
  
  return (
    <div className={`flex items-center ${className}`}>
      <Image
        src={logoSrc}
        alt="RE/MAX Excellence - Each Office Independently Owned and Operated"
        width={variant === 'horizontal' ? 200 : 120}
        height={variant === 'horizontal' ? 60 : 80}
        className="h-auto w-auto max-h-12 md:max-h-14"
        priority
        style={{
          filter: theme === 'dark' ? 'brightness(0) invert(1)' : 'none'
        }}
      />
    </div>
  );
};

export default Logo;
