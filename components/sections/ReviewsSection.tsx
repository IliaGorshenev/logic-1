"use client";

import { motion } from 'framer-motion';
import ReviewCard from "./ReviewCard";

export default function ReviewsSection() {
  const reviews = [
    {
      name: "Анна К.",
      rating: 5,
      text: "Благодаря занятиям с Татьяной я смогла поступить на философский факультет. Её методика преподавания помогла мне не только освоить материал, но и полюбить логику!",
      avatar: "А",
      background: "bg-gradient-to-br from-pink-500 to-rose-500"
    },
    {
      name: "Михаил Д.",
      rating: 5,
      text: "Я всегда считал логику сложным предметом, но Татьяна объясняет всё так просто и понятно, что даже самые сложные темы стали доступными. Очень рекомендую!",
      avatar: "М",
      background: "bg-gradient-to-br from-blue-500 to-cyan-500"
    },
    {
      name: "Екатерина В.",
      rating: 5,
      text: "Курс критического мышления полностью изменил мой подход к анализу информации. Теперь я гораздо увереннее чувствую себя в дискуссиях и при принятии решений.",
      avatar: "Е",
      background: "bg-gradient-to-br from-purple-500 to-violet-500"
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
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

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  // Quote icon for the section header
  const QuoteIcon = () => (
    <svg 
      className="w-8 h-8 text-primary opacity-50 mb-2"
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path>
      <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"></path>
    </svg>
  );

  return (
    <motion.div 
      id="reviews"
      className="container px-4 md:px-6 py-12 mt-8"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <motion.div 
        className="flex flex-col items-center mb-12"
        variants={headerVariants}
      >
        <QuoteIcon />
        <h2 className="text-2xl font-bold text-center">Отзывы учеников</h2>
        <div className="w-16 h-1 bg-primary mt-4 rounded-full"></div>
      </motion.div>
      
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={containerVariants}
      >
        {reviews.map((review, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover={{ 
              scale: 1.03,
              transition: { duration: 0.2 }
            }}
          >
            <ReviewCard 
              name={review.name}
              rating={review.rating}
              text={review.text}
              avatar={review.avatar}
              background={review.background}
              index={index}
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
