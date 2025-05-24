'use client';

import { Link } from '@heroui/link';
import { motion } from 'framer-motion';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  buttonPrimaryClass: string;
  buttonSecondaryClass: string;
}

export default function HeroSection({ title, subtitle, buttonPrimaryClass, buttonSecondaryClass }: HeroSectionProps) {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.1, 0.25, 1.0], // Custom easing
      },
    },
  };

  const buttonContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.8, // Delay buttons until after text appears
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
      },
    },
    tap: {
      scale: 0.98,
    },
  };

  return (
    <motion.div className="container px-4 md:px-6 flex flex-col items-center gap-4 text-center py-16" initial="hidden" animate="visible" variants={containerVariants}>
      <motion.h1 className={title} variants={itemVariants}>
        Курсы логики и критического мышления
      </motion.h1>

      <motion.h2 className={`${subtitle} mt-4`} variants={itemVariants}>
        Развивайте логическое мышление с профессиональным преподавателем
      </motion.h2>

      <motion.div className="flex gap-3 mt-4" variants={buttonContainerVariants}>
        <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
          <Link href="#contact" className={buttonPrimaryClass}>
            Записаться на занятие
          </Link>
        </motion.div>

        <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
          <Link href="#program" className={buttonSecondaryClass}>
            Программа курсов
          </Link>
        </motion.div>
      </motion.div>

      {/* Optional decorative element */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: [0, 1, 0.5, 1],
          y: [0, -10, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatType: 'reverse',
          delay: 2,
        }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-primary">
          <path d="M12 5v14"></path>
          <path d="m19 12-7 7-7-7"></path>
        </svg>
      </motion.div>
    </motion.div>
  );
}
