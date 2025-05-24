'use client';

import { Link } from '@heroui/link';
import { motion, Variants } from 'framer-motion';
import React from 'react';

interface PricingCardProps {
  title: string;
  price: string;
  period: string;
  features: string[];
  isPopular?: boolean;
  buttonClass: string; // Changed from buttonStyles function to buttonClass string
  icon?: React.ReactNode;
}

export default function PricingCard({ title, price, period, features, isPopular = false, buttonClass, icon }: PricingCardProps) {
  // Animation variants for features
  const listVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, x: -10 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
      },
    },
  };

  // Pulse animation for the popular badge
  const badgeVariants: Variants = {
    initial: { scale: 1 },
    animate: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        repeatType: 'reverse',
      },
    },
  };

  return (
    <div
      className={`
      bg-white p-6 rounded-xl shadow-md relative 
      ${isPopular ? 'border-2 border-primary ring-4 ring-primary/10' : 'border border-default-200'}
    `}>
      {/* Popular badge */}
      {isPopular && (
        <motion.div
          className="absolute -top-3 -right-3 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full"
          variants={badgeVariants}
          initial="initial"
          animate="animate">
          Популярный
        </motion.div>
      )}

      {/* Icon and title */}
      <div className="flex items-center mb-4">
        <div className={`p-2 rounded-full ${isPopular ? 'bg-primary text-white' : 'bg-primary-100 text-primary'} mr-3`}>{icon}</div>
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>

      {/* Price */}
      <div className="mb-6">
        <div className="flex items-baseline">
          <span className="text-3xl font-bold">{price}</span>
          <span className="text-default-600 ml-2">{period}</span>
        </div>
      </div>

      {/* Features */}
      <motion.ul className="space-y-3 mb-6" variants={listVariants} initial="hidden" animate="visible">
        {features.map((feature, index) => (
          <motion.li key={index} className="flex items-start" variants={itemVariants}>
            <svg className="w-5 h-5 text-primary mt-0.5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
            <span>{feature}</span>
          </motion.li>
        ))}
      </motion.ul>

      {/* Button */}
      <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
        <Link href="#contact" className={buttonClass}>
          Записаться
        </Link>
      </motion.div>
    </div>
  );
}
