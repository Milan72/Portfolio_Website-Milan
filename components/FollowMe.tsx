'use client';

import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { portfolioData } from '@/data/portfolio';

export default function FollowMe() {
  const { contact } = portfolioData;

  const socialLinks = [
    { icon: FaGithub, href: contact.github, label: 'GitHub' },
    { icon: FaLinkedin, href: contact.linkedin, label: 'LinkedIn' },
    { icon: FaEnvelope, href: `mailto:${contact.email}`, label: 'Email' },
  ].filter(link => link.href);

  return (
    <section className="section-padding bg-gray-800/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Follow <span className="text-gradient">Me</span>
          </h2>
          <div className="flex justify-center space-x-6">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-gray-800/50 rounded-lg hover:bg-gray-800 text-gray-400 hover:text-white transition-all"
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.9 }}
                aria-label={label}
              >
                <Icon size={28} />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

