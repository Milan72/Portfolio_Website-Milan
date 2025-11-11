'use client';

import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaBrain, FaCube, FaCode } from 'react-icons/fa';
import { HiArrowDown } from 'react-icons/hi';
import { portfolioData } from '@/data/portfolio';
import TypingAnimation from './TypingAnimation';

export default function Hero() {
  const { personal, contact } = portfolioData;

  const socialLinks = [
    { icon: FaGithub, href: contact.github, label: 'GitHub' },
    { icon: FaLinkedin, href: contact.linkedin, label: 'LinkedIn' },
    { icon: FaEnvelope, href: `mailto:${contact.email}`, label: 'Email' },
  ].filter(link => link.href);

  const interestTags = [
    { icon: FaBrain, label: 'Graph Anonymization', gradient: 'from-blue-500 to-blue-600' },
    { icon: FaCube, label: 'Computational Modeling', gradient: 'from-purple-500 to-purple-600' },
    { icon: FaCode, label: 'Software Development', gradient: 'from-green-500 to-green-600' },
  ];

  // Split the title into individual roles for typing animation
  const roles = personal.title.split(' • ');

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-purple-950 to-gray-900" />
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
                          linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)`,
        backgroundSize: '50px 50px'
      }} />
      
      {/* Glowing dots effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-2 h-2 bg-blue-400 rounded-full blur-sm animate-pulse" />
        <div className="absolute top-40 right-32 w-1.5 h-1.5 bg-purple-400 rounded-full blur-sm animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-32 left-1/4 w-1 h-1 bg-green-400 rounded-full blur-sm animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center"
        >
          {/* Name with gradient */}
          <motion.h1
            className="text-6xl md:text-8xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Milan
            </span>{' '}
            <span className="bg-gradient-to-r from-purple-500 to-green-500 bg-clip-text text-transparent">
              Chaulagain
            </span>
          </motion.h1>

          {/* Professional Roles with Typing Animation */}
          <motion.h2
            className="text-xl md:text-2xl text-white mb-8 font-light min-h-[2rem] md:min-h-[2.5rem] flex items-center justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <TypingAnimation
              words={roles}
              typingSpeed={100}
              deletingSpeed={50}
              pauseTime={2000}
              className="text-white"
            />
          </motion.h2>

          {/* Interest Tags */}
          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            {interestTags.map((tag, index) => (
              <motion.div
                key={tag.label}
                className={`px-6 py-3 rounded-full bg-gradient-to-r ${tag.gradient} flex items-center gap-2 text-white font-medium shadow-lg`}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + index * 0.1 }}
              >
                <tag.icon size={18} />
                <span>{tag.label}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Bio Description */}
          <motion.p
            className="text-lg md:text-xl text-white max-w-2xl mx-auto mb-10 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
          >
            {personal.bio}
          </motion.p>

          {/* Social Icons */}
          <motion.div
            className="flex justify-center space-x-6 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
          >
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-400 transition-colors"
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.9 }}
                aria-label={label}
              >
                <Icon size={28} />
              </motion.a>
            ))}
          </motion.div>

          {/* View My Work Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4 }}
            className="mb-20"
          >
            <motion.a
              href="#projects"
              className="inline-flex items-center px-10 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-semibold text-white hover:shadow-lg hover:shadow-purple-500/50 transition-all text-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
            </motion.a>
          </motion.div>

          {/* Scroll to explore */}
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6 }}
          >
            <p className="text-sm text-white/70 mb-2">Scroll to explore</p>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <HiArrowDown size={20} className="text-white/70" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

