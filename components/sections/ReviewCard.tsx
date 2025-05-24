'use client';

import { motion } from 'framer-motion';

interface ReviewCardProps {
  name: string;
  rating: number;
  text: string;
  avatar?: string;
  background?: string;
  index?: number;
}

export default function ReviewCard({ name, rating, text, avatar, background = 'bg-primary', index = 0 }: ReviewCardProps) {
  // Animation for the quote marks
  const quoteVariants = {
    initial: { opacity: 0, scale: 0 },
    animate: {
      opacity: 0.2,
      scale: 1,
      transition: {
        delay: 0.3 + index * 0.1,
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  // Generate stars based on rating
  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <motion.span
          key={i}
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 0.5 + i * 0.1 },
          }}
          className={i < rating ? 'text-yellow-500' : 'text-gray-300'}>
          <svg className="w-5 h-5 inline" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
          </svg>
        </motion.span>,
      );
    }
    return stars;
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-md relative overflow-hidden">
      {/* Quote mark in background */}
      <motion.div className="absolute top-4 right-4 text-4xl text-gray-100 z-0" initial="initial" animate="animate" variants={quoteVariants}>
        <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
      </motion.div>

      <div className="flex items-center mb-4 relative z-10">
        {/* Avatar */}
        <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-medium ${background} mr-3`}>{avatar}</div>

        <div>
          <h3 className="font-semibold">{name}</h3>
          <div className="flex">{renderStars()}</div>
        </div>
      </div>

      <motion.p
        className="text-default-600 relative z-10"
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 0.4, duration: 0.6 },
        }}>
        "{text}"
      </motion.p>
    </div>
  );
}
