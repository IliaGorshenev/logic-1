import React from 'react';

interface AdvantageCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

export default function AdvantageCard({ title, description, icon }: AdvantageCardProps) {
  return (
    <div className="bg-default-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
      {icon && (
        <div className="mb-4 text-primary">
          {icon}
        </div>
      )}
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-default-600">{description}</p>
    </div>
  );
}
