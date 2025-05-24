"use client";

import { motion } from 'framer-motion';
import React from 'react';

interface CourseProgramProps {
  title: string;
  description: string;
  topics: string[];
  icon?: React.ReactNode;
  index: number;
}

export default function CourseProgram({ title, description, topics, icon, index }: CourseProgramProps) {
  // Animation variants for list items
  const listVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4
      }
    }
  };

  // Alternate the card layout based on index (left/right)
  const isEven = index % 2 === 0;

  return (
    <div className={`bg-white p-6 rounded-xl shadow-sm ${isEven ? 'border-l-4' : 'border-r-4'} border-primary`}>
      <div className="flex flex-col md:flex-row gap-4 items-start">
        {/* Icon Section */}
        <div className="text-primary p-3 bg-primary-50 rounded-full">
          {icon}
        </div>
        
        {/* Content Section */}
        <div className="flex-1">
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-default-600 mb-4">{description}</p>
          
          <motion.ul 
            className="space-y-2"
            variants={listVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {topics.map((topic, i) => (
              <motion.li 
                key={i} 
                className="flex items-start gap-2"
                variants={itemVariants}
              >
                <span className="text-primary mt-1">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </span>
                <span>{topic}</span>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </div>
  );
}
