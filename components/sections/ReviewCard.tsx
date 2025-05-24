interface ReviewCardProps {
    name: string;
    rating: number;
    text: string;
  }
  
  export default function ReviewCard({ name, rating, text }: ReviewCardProps) {
    return (
      <div className="p-6 border rounded-large">
        <div className="flex items-center mb-4">
          <div className="w-10 h-10 rounded-full bg-gray-200 mr-3"></div>
          <div>
            <h4 className="font-semibold">{name}</h4>
            <div className="flex text-yellow-400">
              {Array(rating).fill('★').join('')}
            </div>
          </div>
        </div>
        <p>"{text}"</p>
      </div>
    );
  }
