'use client';

import { Link } from '@heroui/link';
import { button as buttonStyles } from '@heroui/theme';
import type { ISourceOptions } from '@tsparticles/engine';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  buttonPrimaryClass: string;
  buttonSecondaryClass: string;
}

export default function HeroSection({ title, subtitle, buttonPrimaryClass, buttonSecondaryClass }: HeroSectionProps) {
  const [init, setInit] = useState(false);
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Initialize particles engine once
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });

    // Set mounted to true after component mounts to avoid hydration mismatch
    setMounted(true);
  }, []);

  // Determine if dark mode is active
  const isDarkMode = mounted && (theme === 'dark' || resolvedTheme === 'dark');

  // Dynamically set particle options based on theme
  const particlesOptions: ISourceOptions = {
    fullScreen: { enable: false },
    background: {
      color: {
        value: isDarkMode ? '#000000' : '#ffffff',
      },
    },
    fpsLimit: 60,
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: 'grab',
        },
      },
      modes: {
        grab: {
          distance: 200,
          links: {
            opacity: 0.7,
            color: isDarkMode ? '#ffffff' : '#000000',
          },
        },
      },
    },
    particles: {
      color: {
        value: isDarkMode ? ['#ffffff', '#cccccc', '#aaaaaa'] : ['#000000', '#333333', '#555555'],
      },
      links: {
        color: isDarkMode ? '#ffffff' : '#000000',
        distance: 290,
        enable: true,
        opacity: 0.4,
        width: 1,
      },
      collisions: {
        enable: true,
      },
      move: {
        direction: 'none',
        enable: true,
        outModes: {
          default: 'bounce',
        },
        random: true,
        speed: 1,
        straight: false,
      },
      number: {
        density: {
          enable: true,
        },
        value: 80,
      },
      opacity: {
        value: 0.5,
      },
      shape: {
        type: 'circle',
      },
      size: {
        value: { min: 1, max: 3 },
      },
      twinkle: {
        particles: {
          enable: true,
          frequency: 0.05,
          opacity: 1,
        },
      },
    },
    detectRetina: true,
  };

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
    <div className="relative min-h-[100vh] w-full">
      {/* Particles Background */}
      <div
        style={{ minHeight: '100vh', height: 'auto', minWidth: '100vw', left: '50%', right: '50%', marginLeft: '-50vw', marginRight: '-50vw', position: 'absolute' }}
        className="z-0 overflow-hidden bg-gradient-to-b from-white to-gray-900">
        {init && <Particles id="tsparticles" options={particlesOptions} className="absolute inset-0 w-full min-h-full" />}
        {/* <div className="absolute inset-0 bg-black/30 z-[2]"></div> */}
      </div>

      {/* Content */}
      <motion.div
        className="container relative z-10 px-4 md:px-6 flex flex-col items-center gap-4 text-center py-16 h-full min-h-[90vh] justify-center"
        initial="hidden"
        animate="visible"
        variants={containerVariants}>
        <motion.h1 className={`${title} text-black dark:text-white`} variants={itemVariants}>
          Курсы логики и критического мышления
        </motion.h1>

        <motion.h2 className={`${subtitle} mt-4 text-gray-800 dark:text-gray-200`} variants={itemVariants}>
          Развивайте логическое мышление с профессиональным преподавателем
        </motion.h2>

        <motion.div className="flex gap-3 mt-6" variants={buttonContainerVariants}>
          <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
            <Link
              href="#contact"
              className={buttonStyles({
                color: 'primary',
                variant: 'shadow',
                size: 'lg',
                class: 'w-full sm:w-auto',
              })}>
              Записаться на занятие
            </Link>
          </motion.div>

          <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
            <Link
              href="#program"
              className={buttonStyles({
                color: 'default',
                variant: 'bordered',
                size: 'lg',
                class: isDarkMode ? 'w-full sm:w-auto border-white/70 text-white hover:bg-white/10' : 'w-full sm:w-auto border-black/70 text-black hover:bg-black/5',
              })}>
              Программа курсов
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
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
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 hidden md:block">
        <div className="w-8 h-12 border-2 border-black/50 dark:border-white/50 rounded-full flex justify-center">
          <motion.div
            className="w-1.5 h-3 bg-black/80 dark:bg-white/80 rounded-full mt-2"
            animate={{
              y: [0, 8, 0],
              opacity: [0.8, 0.2, 0.8],
            }}
            transition={{
              repeat: Infinity,
              duration: 1.5,
            }}
          />
        </div>
      </motion.div>
    </div>
  );
}
