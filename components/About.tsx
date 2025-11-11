'use client';

import { motion } from 'framer-motion';
import { portfolioData } from '@/data/portfolio';

export default function About() {
  const { personal } = portfolioData;

  return (
    <section id="about" className="section-padding bg-gray-800/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto" />
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h3 className="text-2xl font-semibold mb-4 text-gradient">{personal.name}</h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              {personal.bio}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

