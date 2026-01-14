import { motion } from 'framer-motion';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

export function Footer() {
  const colorVariants = {
    cyan: {
      hoverBorder: 'hover:border-cyan-400/50',
      hoverText: 'hover:text-cyan-400',
      bgGlow: 'bg-cyan-400/20',
      glowColor: 'rgba(34, 211, 238, 0.8)'
    },
    red: {
      hoverBorder: 'hover:border-red-400/50',
      hoverText: 'hover:text-red-400',
      bgGlow: 'bg-red-400/20',
      glowColor: 'rgba(239, 68, 68, 0.8)'
    }
  };

  return (
    <footer className="relative bg-[#0b0b0d] border-t border-white/10">
      {/* Top Glowing Divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
        style={{ boxShadow: '0 0 20px rgba(34, 211, 238, 0.5)' }}
      />

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <motion.h3
              className="text-4xl font-black mb-4"
              style={{
                background: 'linear-gradient(to right, #ffffff, #22d3ee)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
              whileHover={{ scale: 1.05 }}
            >
              JUJUTSU KAISEN
            </motion.h3>
            <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
              Enter the dark world of cursed energy, where sorcerers battle malevolent spirits 
              to protect humanity from supernatural threats.
            </p>
            <div className="flex items-center gap-2 text-sm">
              <div className="w-2 h-2 bg-red-600 rounded-full animate-pulse"
                style={{ boxShadow: '0 0 10px rgba(239, 68, 68, 0.8)' }}
              />
              <span className="text-gray-500 italic">"The world is shaped by curses."</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4 tracking-wider">EXPLORE</h4>
            <ul className="space-y-3">
              {['Characters', 'Story', 'Gallery', 'Manga', 'Anime'].map((link) => (
                <li key={link}>
                  <motion.a
                    href="#"
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 flex items-center gap-2 group"
                    whileHover={{ x: 5 }}
                  >
                    <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                      style={{ boxShadow: '0 0 8px rgba(34, 211, 238, 0.8)' }}
                    />
                    {link}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          {/* Community */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4 tracking-wider">COMMUNITY</h4>
            <ul className="space-y-3">
              {['Forums', 'Fan Art', 'Theories', 'News', 'Events'].map((link) => (
                <li key={link}>
                  <motion.a
                    href="#"
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 flex items-center gap-2 group"
                    whileHover={{ x: 5 }}
                  >
                    <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                      style={{ boxShadow: '0 0 8px rgba(34, 211, 238, 0.8)' }}
                    />
                    {link}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 mb-8">
          {[
            { Icon: Facebook, color: 'cyan', glowColor: 'rgba(34, 211, 238, 0.6)' },
            { Icon: Twitter, color: 'cyan', glowColor: 'rgba(34, 211, 238, 0.6)' },
            { Icon: Instagram, color: 'red', glowColor: 'rgba(239, 68, 68, 0.6)' },
            { Icon: Youtube, color: 'red', glowColor: 'rgba(239, 68, 68, 0.6)' }
          ].map(({ Icon, color, glowColor }, index) => (
            <motion.a
              key={index}
              href="#"
              className="p-3 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 group"
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.95 }}
              style={{
                borderColor: color === 'cyan' ? 'rgba(34, 211, 238, 0.5)' : 'rgba(239, 68, 68, 0.5)'
              }}
            >
              <Icon 
                className="w-5 h-5 text-gray-400 transition-colors duration-300"
                style={{
                  color: color === 'cyan' ? '#06b6d4' : '#ef4444'
                }}
              />
              <motion.div
                className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300"
                style={{ 
                  background: color === 'cyan' 
                    ? 'rgba(34, 211, 238, 0.2)' 
                    : 'rgba(239, 68, 68, 0.2)',
                  boxShadow: `0 0 20px ${glowColor}`
                }}
              />
            </motion.a>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © 2026 Jujutsu Kaisen. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((link) => (
                <motion.a
                  key={link}
                  href="#"
                  className="text-gray-500 hover:text-cyan-400 transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                >
                  {link}
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl -z-10" />
        <div className="absolute top-0 right-0 w-64 h-64 bg-red-500/5 rounded-full blur-3xl -z-10" />
      </div>
    </footer>
  );
}