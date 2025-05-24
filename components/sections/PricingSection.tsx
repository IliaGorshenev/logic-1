import { Link } from '@heroui/link';
import PricingCard from './PricingCard';


interface PricingSectionProps {
  buttonStyles: (props?: any) => string;
}

export default function PricingSection({ buttonStyles }: PricingSectionProps) {
  const pricingPlans = [
    {
      title: "Индивидуальные занятия",
      price: "2500 ₽",
      period: "за 60 минут",
      features: [
        "Персональная программа",
        "Гибкий график",
        "Индивидуальный темп",
        "Онлайн или очно"
      ],
      isPopular: false
    },
    {
      title: "Курс (8 занятий)",
      price: "16000 ₽",
      period: "2000 ₽ за занятие",
      features: [
        "Структурированная программа",
        "Учебные материалы",
        "Домашние задания",
        "Онлайн или очно"
      ],
      isPopular: true
    },
    {
      title: "Групповые занятия",
      price: "1500 ₽",
      period: "за 90 минут",
      features: [
        "Малые группы (до 5 человек)",
        "Интерактивный формат",
        "Учебные материалы",
        "Онлайн формат"
      ],
      isPopular: false
    }
  ];

  return (
    <div className="container px-4 md:px-6 py-12 bg-default-50 rounded-large mt-8">
      <h2 className="text-2xl font-bold text-center mb-8">Тарифы</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {pricingPlans.map((plan, index) => (
          <PricingCard 
            key={index}
            title={plan.title}
            price={plan.price}
            period={plan.period}
            features={plan.features}
            isPopular={plan.isPopular}
            buttonStyles={buttonStyles}
          />
        ))}
      </div>
    </div>
  );
}
