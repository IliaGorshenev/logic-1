export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Курсы логики",
  description: "Курсы логики и критического мышления с профессиональным преподавателем.",
  navItems: [
    {
      label: "Главная",
      href: "/",
    },
    {
      label: "О преподавателе",
      href: "#teacher",
    },
    {
      label: "Программа",
      href: "#program",
    },
    {
      label: "Отзывы",
      href: "#reviews",
    },
    {
      label: "Цены",
      href: "#pricing",
    },
    {
      label: "Контакты",
      href: "#contact",
    },
    {
      label: "FAQ",
      href: "#faq",
    },
  ],
  navMenuItems: [
    {
      label: "Главная",
      href: "/",
    },
    {
      label: "О преподавателе",
      href: "#teacher",
    },
    {
      label: "Программа",
      href: "#program",
    },
    {
      label: "Отзывы",
      href: "#reviews",
    },
    {
      label: "Цены",
      href: "#pricing",
    },
    {
      label: "Контакты",
      href: "#contact",
    },
    {
      label: "FAQ",
      href: "#faq",
    },
  ],
  links: {
    telegram: "https://t.me/your_telegram_username",
    whatsapp: "https://wa.me/your_phone_number",
    email: "mailto:your_email@example.com",
  },
};
