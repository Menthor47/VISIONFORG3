import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface PerformanceMetrics {
  lcp: number;
  fid: number;
  cls: number;
  ttfb: number;
}

const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show in development or when explicitly enabled
    const isDev = import.meta.env.DEV;
    const showInProd = localStorage.getItem('show-performance') === 'true';
    
    if (isDev || showInProd) {
      setIsVisible(true);
      
      // Simple performance tracking
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          if (entry.entryType === 'largest-contentful-paint') {
            setMetrics(prev => ({ ...prev, lcp: entry.startTime } as PerformanceMetrics));
          }
        });
      });
      
      observer.observe({ entryTypes: ['largest-contentful-paint'] });
      
      return () => observer.disconnect();
    }

    // Keyboard shortcut to toggle (Ctrl/Cmd + Shift + P)
    const handleKeyPress = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'P') {
        const newState = !isVisible;
        setIsVisible(newState);
        localStorage.setItem('show-performance', newState.toString());
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 0, x: 300 }}
      animate={{ opacity: 1, x: 0 }}
      className="fixed bottom-4 right-4 z-50 bg-slate-900/95 backdrop-blur-md border border-cyan-500/20 rounded-lg p-4 shadow-xl text-xs text-white"
    >
      <div className="flex items-center justify-between mb-2">
        <span className="font-bold text-cyan-400">Performance</span>
        <button
          onClick={() => setIsVisible(false)}
          className="text-gray-400 hover:text-white"
        >
          ✕
        </button>
      </div>
      <div className="space-y-1">
        <div>LCP: {metrics?.lcp ? `${Math.round(metrics.lcp)}ms` : 'measuring...'}</div>
        <div className="text-xs text-gray-400 mt-2">
          Press Ctrl+Shift+P to toggle
        </div>
      </div>
    </motion.div>
  );
};

export default PerformanceMonitor;
