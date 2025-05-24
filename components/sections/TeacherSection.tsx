'use client';

import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

export default function TeacherSection() {
  // Animation controls
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  // Start animation when section comes into view
  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  // Animation variants
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const imageVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      rotate: -5,
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  return (
    <motion.div ref={ref} initial="hidden" animate={controls} variants={containerVariants} className="container px-4 md:px-6 py-12 bg-default-50 rounded-large mt-12">
      <motion.h2 variants={itemVariants} className="text-2xl font-bold text-center mb-6">
        О преподавателе
      </motion.h2>
      <div className="flex flex-col md:flex-row gap-8 items-center">
        <motion.div variants={imageVariants} className="w-full md:w-1/3">
          <div className="relative mx-auto overflow-hidden rounded-3xl shadow-xl bg-gradient-to-br from-primary-100 to-secondary-100 dark:from-primary-900/30 dark:to-secondary-900/30 p-2 max-w-[280px]">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
              <img
                src="/images/logic-3.jpg"
                alt="Татьяна Ульянова - преподаватель логики"
                sizes="(max-width: 768px) 100vw, 280px"
                className="object-cover w-full h-full"
              />

              {/* Decorative elements */}
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/30 to-transparent opacity-60"></div>

              {/* Highlight border */}
              <div className="absolute inset-0 rounded-2xl ring-2 ring-white/30 ring-opacity-50"></div>

              {/* Decorative dots */}
             
            </div>

            {/* Caption */}
            <div className="absolute bottom-4 left-4 right-4 bg-white/80 dark:bg-black/60 backdrop-blur-sm rounded-xl p-2 text-center">
              <p className="text-sm font-medium text-default-700 dark:text-white">Татьяна Ульянова</p>
              <p className="text-xs text-default-500 dark:text-default-400">Преподаватель логики</p>
            </div>
          </div>
        </motion.div>
        <div className="w-full md:w-2/3">
          <motion.p variants={itemVariants} className="mb-4">
            Татьяна Ульянова — дипломированный специалист по логике и философии, выпускник философского факультета МГУ имени М.В. Ломоносова (с отличием). Специализация
            на кафедре логики позволила ей глубоко освоить основы критического мышления, формальной логики и аргументации, что стало основой преподавательской практики.
          </motion.p>
          <motion.p variants={itemVariants} className="mb-4">
            Более 4 лет работы преподавателем логики помогли Татьяне развить системный подход к обучению. Каждый урок адаптируется под индивидуальные потребности ученика,
            будь то подготовка к экзаменам или решение сложных задач. Знания передаются простым и понятным языком, делая даже сложные темы доступными.
          </motion.p>
          <motion.p variants={itemVariants}>
            Регулярно участвуя в конференциях по логике и философии, Татьяна поддерживает актуальность своих знаний и позволяет оставаться на передовой научных открытий.
            Доклады и обсуждения помогают развивать новые подходы к обучению и поддерживать профессиональный уровень.
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
}
