import React from 'react';
import { Button } from '@/components/ui/button';
import { useJoinUsModal } from '@/contexts/JoinUsModalContext';
import { ButtonProps } from '@/components/ui/button';

interface JoinButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  size?: 'default' | 'sm' | 'lg' | 'icon';
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';
}

const JoinButton: React.FC<JoinButtonProps> = ({ children, className, size, variant, ...props }) => {
  const { openModal } = useJoinUsModal();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    openModal();
  };

  return (
    <Button
      onClick={handleClick}
      className={className}
      size={size}
      variant={variant}
      {...props}
    >
      {children}
    </Button>
  );
};

export default JoinButton;

