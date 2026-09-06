import { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import { Cookie, X } from 'lucide-react';

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('nic_cookie_consent');
    if (!consent) {
      // Small delay for better UX
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('nic_cookie_consent', 'accepted');
    closeBanner();
  };

  const handleDecline = () => {
    localStorage.setItem('nic_cookie_consent', 'declined');
    closeBanner();
  };

  const closeBanner = () => {
    setIsFading(true);
    setTimeout(() => {
      setIsVisible(false);
    }, 300); // Matches transition duration
  };

  if (!isVisible) return null;

  return (
    <div 
      className={`fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 transition-transform duration-300 ease-in-out ${
        isFading ? 'translate-y-full' : 'translate-y-0'
      }`}
    >
      <div className="max-w-4xl mx-auto bg-surface border border-border shadow-2xl rounded-2xl p-6 md:p-8 flex flex-col md:flex-row gap-6 items-start md:items-center justify-between relative">
        <button 
          onClick={closeBanner}
          className="absolute top-4 right-4 text-text-muted hover:text-text-main transition-colors p-1 rounded-full hover:bg-surfaceHover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          aria-label="Close cookie banner"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="flex-1 flex gap-4 items-start">
          <div className="bg-primary/10 p-3 rounded-full shrink-0 hidden sm:block">
            <Cookie className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-text-main mb-2">We value your privacy</h3>
            <p className="text-sm text-text-muted leading-relaxed mb-2">
              We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. 
              By clicking "Accept All", you consent to our use of cookies.
            </p>
            <Link 
              to="/cookies" 
              className="text-sm text-primary font-medium hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
              onClick={closeBanner}
            >
              Read our Cookie Policy
            </Link>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0">
          <Button 
            variant="outline" 
            onClick={handleDecline}
            className="w-full sm:w-auto text-xs sm:text-sm"
          >
            Decline Optional
          </Button>
          <Button 
            variant="primary" 
            onClick={handleAccept}
            className="w-full sm:w-auto text-xs sm:text-sm"
          >
            Accept All
          </Button>
        </div>
      </div>
    </div>
  );
}
