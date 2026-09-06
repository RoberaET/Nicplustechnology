import { motion } from 'framer-motion';

export function NetworkVisual() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-grid opacity-60" />
      
      {/* Radial Gradient overlay — light fade at edges */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#f8fafc_80%)]" />

      {/* Animated network lines */}
      <svg className="absolute w-full h-full opacity-40" xmlns="http://www.w3.org/2000/svg">
        <motion.path
          d="M 100 200 L 300 150 L 500 350 L 800 200"
          fill="transparent"
          stroke="url(#gradientLight)"
          strokeWidth="1.5"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.6 }}
          transition={{ duration: 3, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
        />
        <motion.path
          d="M 300 150 L 400 50 L 600 100 L 500 350"
          fill="transparent"
          stroke="url(#gradientLight)"
          strokeWidth="1.5"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.4 }}
          transition={{ duration: 4, ease: "easeInOut", repeat: Infinity, repeatType: "reverse", delay: 1 }}
        />
        
        {/* Nodes */}
        <circle cx="100" cy="200" r="4" fill="#0284c7" className="animate-pulse" />
        <circle cx="300" cy="150" r="5" fill="#0284c7" />
        <circle cx="500" cy="350" r="4" fill="#0284c7" className="animate-pulse" />
        <circle cx="800" cy="200" r="5" fill="#0284c7" />
        <circle cx="400" cy="50" r="4" fill="#0284c7" />
        <circle cx="600" cy="100" r="4" fill="#0284c7" className="animate-pulse" />

        <defs>
          <linearGradient id="gradientLight" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0284c7" stopOpacity="0.1" />
            <stop offset="50%" stopColor="#0284c7" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#0284c7" stopOpacity="0.1" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
