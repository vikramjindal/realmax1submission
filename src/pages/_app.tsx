import type { AppProps } from 'next/app'
import '../styles/globals.css';
import { Toaster } from "@/components/ui/toaster"
import { useEffect, useState } from 'react';
import { JoinUsModalProvider } from '@/contexts/JoinUsModalContext';
import JoinUsModal from '@/components/JoinUsModal';
import { useJoinUsModal } from '@/contexts/JoinUsModalContext';

function AppContent({ Component, pageProps }: AppProps) {
  const { isOpen, closeModal } = useJoinUsModal();
  
  return (
    <div className="min-h-screen">
      <Component {...pageProps} />
      <Toaster />
      <JoinUsModal isOpen={isOpen} onClose={closeModal} />
    </div>
  );
}

export default function App(props: AppProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Get the color-scheme value from :root
    const root = document.documentElement;
    const computedStyle = getComputedStyle(root);
    const colorScheme = computedStyle.getPropertyValue('--mode').trim().replace(/"/g, '');
    if (colorScheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.add('light');
    }
    setMounted(true);
  }, []);

  return (
    <JoinUsModalProvider>
      {mounted && <AppContent {...props} />}
    </JoinUsModalProvider>
  )
}