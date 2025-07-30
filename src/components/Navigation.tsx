import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import ScrollingLink from './ScrollingLink';
import { 
  Menu, 
  X, 
  Phone, 
  Calendar, 
  Zap,
  Star,
  Clock
} from 'lucide-react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled 
            ? 'bg-slate-900/95 backdrop-blur-md border-b border-cyan-500/20' 
            : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <ScrollingLink 
              to="/" 
              className="flex items-center space-x-2"
            >
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center">
                <Zap className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                NextLevel
              </span>
            </ScrollingLink>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              <ScrollingLink 
                to="/" 
                className="text-gray-300 hover:text-cyan-400 transition-colors"
              >
                Home
              </ScrollingLink>
              <ScrollingLink 
                to="/services" 
                className="text-gray-300 hover:text-cyan-400 transition-colors"
              >
                Services
              </ScrollingLink>
              <ScrollingLink 
                to="/portfolio" 
                className="text-gray-300 hover:text-cyan-400 transition-colors"
              >
                Portfolio
              </ScrollingLink>
              <ScrollingLink 
                to="/about" 
                className="text-gray-300 hover:text-cyan-400 transition-colors"
              >
                About
              </ScrollingLink>
              
              {/* Trust Indicators */}
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-1">
                  <Star className="h-4 w-4 text-yellow-400" />
                  <span className="text-xs text-gray-400">150+ Projects</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock className="h-4 w-4 text-green-400" />
                  <span className="text-xs text-gray-400">24h Response</span>
                </div>
              </div>

              <Button
                variant="outline"
                size="sm"
                className="border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10"
                asChild
              >
                <a href="tel:+1-555-123-4567">
                  <Phone className="h-4 w-4 mr-2" />
                  Call Now
                </a>
              </Button>
              
              <Button
                size="sm"
                className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600"
                asChild
              >
                <ScrollingLink to="/contact">
                  <Calendar className="h-4 w-4 mr-2" />
                  Free Consultation
                </ScrollingLink>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden text-gray-300 hover:text-cyan-400"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="fixed top-16 left-0 right-0 z-40 lg:hidden bg-slate-900/95 backdrop-blur-md border-b border-cyan-500/20"
          >
            <div className="container mx-auto px-4 py-6 space-y-4">
              <ScrollingLink 
                to="/" 
                className="block py-2 text-lg text-gray-300 hover:text-cyan-400"
              >
                Home
              </ScrollingLink>
              <ScrollingLink 
                to="/services" 
                className="block py-2 text-lg text-gray-300 hover:text-cyan-400"
              >
                Services
              </ScrollingLink>
              <ScrollingLink 
                to="/portfolio" 
                className="block py-2 text-lg text-gray-300 hover:text-cyan-400"
              >
                Portfolio
              </ScrollingLink>
              <ScrollingLink 
                to="/about" 
                className="block py-2 text-lg text-gray-300 hover:text-cyan-400"
              >
                About
              </ScrollingLink>
              
              <div className="pt-4 border-t border-gray-700 space-y-3">
                <Button
                  className="w-full bg-gradient-to-r from-cyan-500 to-purple-500"
                  asChild
                >
                  <ScrollingLink to="/contact">Schedule Free Consultation</ScrollingLink>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="h-16" />
    </>
  );
};

export default Navigation;
