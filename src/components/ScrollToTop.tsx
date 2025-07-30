import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Function to force scroll to top - can be called programmatically
export const forceScrollToTop = () => {
  document.documentElement.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth',
  });
};

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // For React Router v6 - use document.documentElement.scrollTo
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant', // Use 'smooth' for animated scrolling
    });
  }, [pathname]);

  return null; // This component renders nothing
};

export default ScrollToTop;
