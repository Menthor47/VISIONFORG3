import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { forceScrollToTop } from './ScrollToTop';

interface ScrollingLinkProps {
  to: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const ScrollingLink: React.FC<ScrollingLinkProps> = ({ 
  to, 
  children, 
  className = '', 
  onClick 
}) => {
  const location = useLocation();

  const handleClick = () => {
    // Always scroll to top, regardless of current page
    forceScrollToTop();
    
    // Call any additional onClick handler
    if (onClick) {
      onClick();
    }
  };

  return (
    <Link 
      to={to} 
      className={className}
      onClick={handleClick}
    >
      {children}
    </Link>
  );
};

export default ScrollingLink;
