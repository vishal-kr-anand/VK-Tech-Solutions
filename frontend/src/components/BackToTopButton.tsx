import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

export default function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 420);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      type="button"
      className={`back-to-top-btn${isVisible ? ' back-to-top-visible' : ''}`}
      aria-label="Scroll to top"
      onClick={scrollToTop}
    >
      <span className="back-to-top-shine" aria-hidden="true" />
      <ArrowUp size={24} strokeWidth={3} aria-hidden="true" />
    </button>
  );
}
