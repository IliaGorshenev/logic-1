import { Link } from '@heroui/link';

interface PricingCardProps {
  title: string;
  price: string;
  period: string;
  features: string[];
  isPopular: boolean;
  buttonStyles: (props?: any) => string;
}

export default function PricingCard({ 
  title, 
  price, 
  period, 
  features, 
  isPopular, 
  buttonStyles 
}: PricingCardProps) {
  return (
    <div className={`p-6 ${isPopular ? 'border-2 border-primary' : 'border'} rounded-large bg-white relative`}>
      {isPopular && (
        <div className="absolute top-0 right-0 bg-primary text-white px-3 py-1 text-sm rounded-bl-lg rounded-tr-lg">
          Популярный
        </div>
      )}
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-3xl font-bold mb-4">{price}</p>
      <p className="text-gray-500 mb-4">{period}</p>
      <ul className="space-y-2 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <span className="mr-2 text-green-500">✓</span>
            {feature}
          </li>
        ))}
      </ul>
      <Link 
        href="#contact" 
        className={buttonStyles({ color: 'primary', radius: 'full', variant: 'shadow', className: 'w-full' })}
      >
        Записаться
      </Link>
    </div>
  );
}
