import ReviewCard from "./ReviewCard";


export default function ReviewsSection() {
  const reviews = [
    {
      name: "Анна К.",
      rating: 5,
      text: "Благодаря занятиям с Татьяной я смогла поступить на философский факультет. Её методика преподавания помогла мне не только освоить материал, но и полюбить логику!"
    },
    {
      name: "Михаил Д.",
      rating: 5,
      text: "Я всегда считал логику сложным предметом, но Татьяна объясняет всё так просто и понятно, что даже самые сложные темы стали доступными. Очень рекомендую!"
    },
    {
      name: "Екатерина В.",
      rating: 5,
      text: "Курс критического мышления полностью изменил мой подход к анализу информации. Теперь я гораздо увереннее чувствую себя в дискуссиях и при принятии решений."
    }
  ];

  return (
    <div className="container px-4 md:px-6 py-12 mt-8">
      <h2 className="text-2xl font-bold text-center mb-8">Отзывы учеников</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reviews.map((review, index) => (
          <ReviewCard 
            key={index}
            name={review.name}
            rating={review.rating}
            text={review.text}
          />
        ))}
      </div>
    </div>
  );
}
