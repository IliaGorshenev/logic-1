interface ContactFormProps {
    buttonStyles: (props?: any) => string;
  }
  
  export default function ContactForm({ buttonStyles }: ContactFormProps) {
    return (
      <form className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-1">
            Имя
          </label>
          <input 
            type="text" 
            id="name" 
            className="w-full px-4 py-2 border rounded-md" 
            placeholder="Ваше имя" 
            required 
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-1">
            Email
          </label>
          <input 
            type="email" 
            id="email" 
            className="w-full px-4 py-2 border rounded-md" 
            placeholder="ваш@email.com" 
            required 
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium mb-1">
            Телефон
          </label>
          <input 
            type="tel" 
            id="phone" 
            className="w-full px-4 py-2 border rounded-md" 
            placeholder="+7 (___) ___-__-__" 
          />
        </div>
        <div>
          <label htmlFor="course" className="block text-sm font-medium mb-1">
            Интересующий курс
          </label>
          <select id="course" className="w-full px-4 py-2 border rounded-md">
            <option value="">Выберите курс</option>
            <option value="basic">Базовый курс логики</option>
            <option value="critical">Критическое мышление</option>
            <option value="exam">Подготовка к экзаменам</option>
            <option value="individual">Индивидуальные занятия</option>
            <option value="group">Групповые занятия</option>
          </select>
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-1">
            Сообщение
          </label>
          <textarea 
            id="message" 
            rows={4} 
            className="w-full px-4 py-2 border rounded-md" 
            placeholder="Ваши пожелания или вопросы"
          ></textarea>
        </div>
        <button 
          type="submit" 
          className={buttonStyles({ color: 'primary', radius: 'full', variant: 'shadow', className: 'w-full' })}
        >
          Отправить заявку
        </button>
      </form>
    );
  }
