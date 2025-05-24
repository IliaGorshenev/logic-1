"use client";

import { motion } from 'framer-motion';
import CourseProgram from "./CourseProgram";

export default function ProgramSection() {
  const courses = [
    {
      title: "Базовый курс логики",
      description: "Идеально подходит для начинающих и тех, кто хочет структурировать свои знания.",
      topics: [
        "Основы формальной логики",
        "Понятия и суждения",
        "Законы логики",
        "Дедуктивные умозаключения",
        "Индуктивные рассуждения",
        "8 занятий по 90 минут"
      ],
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
          <polyline points="2 17 12 22 22 17"></polyline>
          <polyline points="2 12 12 17 22 12"></polyline>
        </svg>
      )
    },
    {
      title: "Критическое мышление",
      description: "Для тех, кто хочет научиться анализировать информацию и принимать обоснованные решения.",
      topics: [
        "Анализ аргументации",
        "Выявление логических ошибок",
        "Оценка достоверности информации",
        "Построение убедительных аргументов",
        "Решение сложных задач",
        "10 занятий по 90 минут"
      ],
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
          <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
        </svg>
      )
    },
    {
      title: "Подготовка к экзаменам",
      description: "Специализированный курс для подготовки к вступительным экзаменам и олимпиадам.",
      topics: [
        "Разбор типовых заданий",
        "Стратегии решения сложных задач",
        "Тренировка скорости мышления",
        "Работа над типичными ошибками",
        "Индивидуальная программа подготовки",
        "Количество занятий определяется индивидуально"
      ],
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path>
          <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
          <line x1="6" y1="1" x2="6" y2="4"></line>
          <line x1="10" y1="1" x2="10" y2="4"></line>
          <line x1="14" y1="1" x2="14" y2="4"></line>
        </svg>
      )
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.3
      }
    }
  };

  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const courseVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div 
      id="program" 
      className="container px-4 md:px-6 py-12 bg-default-50 rounded-large mt-8"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
    >
      <motion.h2 
        className="text-2xl font-bold text-center mb-8"
        variants={headerVariants}
      >
        Программа курсов
      </motion.h2>
      
      <motion.div className="space-y-8">
        {courses.map((course, index) => (
          <motion.div
            key={index}
            variants={courseVariants}
            whileHover={{ 
              scale: 1.01,
              transition: { duration: 0.2 }
            }}
          >
            <CourseProgram 
              title={course.title}
              description={course.description}
              topics={course.topics}
              icon={course.icon}
              index={index}
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
