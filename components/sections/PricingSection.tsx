'use client';

import { Link } from '@heroui/link';
import { motion, Variants } from 'framer-motion';
import PricingCard from './PricingCard';

interface PricingSectionProps {
  // Instead of passing the function directly, we'll pass the pre-generated class strings
  buttonPrimaryClass: string;
  buttonSecondaryClass: string;
  buttonFlatClass: string;
}

export default function PricingSection({ buttonPrimaryClass, buttonSecondaryClass, buttonFlatClass }: PricingSectionProps) {
  const pricingPlans = [
    {
      title: 'Индивидуальные занятия',
      price: '2500 ₽',
      period: 'за 60 минут',
      features: ['Персональная программа', 'Гибкий график', 'Индивидуальный темп', 'Онлайн или очно'],
      isPopular: false,
      buttonClass: buttonSecondaryClass,
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
          <circle cx="12" cy="7" r="4"></circle>
        </svg>
      ),
    },
    {
      title: 'Курс (8 занятий)',
      price: '16000 ₽',
      period: '2000 ₽ за занятие',
      features: ['Структурированная программа', 'Учебные материалы', 'Домашние задания', 'Онлайн или очно'],
      isPopular: true,
      buttonClass: buttonPrimaryClass,
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
          <path d="M2 17l10 5 10-5"></path>
          <path d="M2 12l10 5 10-5"></path>
        </svg>
      ),
    },
    {
      title: 'Групповые занятия',
      price: '1500 ₽',
      period: 'за 90 минут',
      features: ['Малые группы (до 5 человек)', 'Интерактивный формат', 'Учебные материалы', 'Онлайн формат'],
      isPopular: false,
      buttonClass: buttonSecondaryClass,
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      ),
    },
  ];

  // Animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.2,
      },
    },
  };

  const headerVariants: Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <motion.div
      id="pricing"
      className="container px-4 md:px-6 py-12 bg-default-50 rounded-large mt-8"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}>
      <motion.div className="text-center mb-12" variants={headerVariants}>
        <div className="inline-block p-2 bg-primary-100 rounded-full mb-2">
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
            <circle cx="12" cy="12" r="10"></circle>
            <path d="M12 6v6l4 2"></path>
          </svg>
        </div>
        <h2 className="text-2xl font-bold">Тарифы</h2>
        <p className="text-default-600 mt-2 max-w-lg mx-auto">Выберите подходящий формат обучения и начните развивать логическое мышление уже сегодня</p>
      </motion.div>

      <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-6" variants={containerVariants}>
        {pricingPlans.map((plan, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover={{
              y: -8,
              transition: { duration: 0.3 },
            }}>
            <PricingCard
              title={plan.title}
              price={plan.price}
              period={plan.period}
              features={plan.features}
              isPopular={plan.isPopular}
              buttonClass={plan.buttonClass}
              icon={plan.icon}
            />
          </motion.div>
        ))}
      </motion.div>

      <motion.div className="mt-12 text-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 0.8 }}>
        <p className="text-default-600 mb-4">Нужен индивидуальный план обучения? Свяжитесь с нами для обсуждения деталей.</p>
        <Link href="#contact" className={buttonFlatClass}>
          Связаться для консультации
        </Link>
      </motion.div>
    </motion.div>
  );
}
