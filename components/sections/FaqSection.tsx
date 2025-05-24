'use client';

import { motion } from 'framer-motion';
import FaqItem from './FaqItem';

export default function FaqSection() {
  const faqItems = [
    {
      question: 'Как проходят занятия?',
      answer:
        'Занятия проводятся как онлайн (через Zoom или Skype), так и очно в Москве. Каждое занятие включает теоретическую часть и практические упражнения для закрепления материала.',
    },
    {
      question: 'Нужна ли предварительная подготовка?',
      answer:
        'Для базового курса логики предварительная подготовка не требуется. Для более продвинутых курсов желательно иметь базовые знания логики, но это не обязательно — программа адаптируется под ваш уровень.',
    },
    {
      question: 'Как оплатить занятия?',
      answer: 'Оплата производится перед началом занятий через банковский перевод или электронные платежные системы. Для курсов возможна оплата в рассрочку.',
    },
    {
      question: 'Можно ли отменить или перенести занятие?',
      answer: 'Да, занятие можно перенести при уведомлении не менее чем за 24 часа до его начала. В противном случае занятие считается проведенным.',
    },
    {
      question: 'Предоставляются ли учебные материалы?',
      answer: 'Да, все ученики получают доступ к учебным материалам, презентациям и дополнительным ресурсам для самостоятельного изучения.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  return (
    <motion.div
      id="faq"
      className="container px-4 md:px-6 py-16 mt-12"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}>
      <motion.div className="text-center mb-12" variants={itemVariants}>
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
            <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
            <line x1="12" y1="17" x2="12.01" y2="17"></line>
          </svg>
        </div>
        <h2 className="text-3xl font-bold tracking-tight">Часто задаваемые вопросы</h2>
        <p className="mt-3 text-default-600 max-w-2xl mx-auto">Ответы на самые распространенные вопросы о наших курсах и методике обучения</p>
      </motion.div>

      <motion.div className="max-w-3xl mx-auto bg-white rounded-xl shadow-sm overflow-hidden divide-y divide-default-200" variants={itemVariants}>
        {faqItems.map((item, index) => (
          <motion.div key={index} variants={itemVariants} custom={index} whileHover={{ backgroundColor: 'rgba(0, 0, 0, 0.01)' }}>
            <FaqItem question={item.question} answer={item.answer} />
          </motion.div>
        ))}
      </motion.div>

      <motion.div className="text-center mt-10" variants={itemVariants}>
        <p className="text-default-600">
          Не нашли ответ на свой вопрос?{' '}
          <a href="#contact" className="text-primary font-medium hover:underline">
            Свяжитесь с нами
          </a>
        </p>
      </motion.div>
    </motion.div>
  );
}
