import '@/styles/globals.css';
import { Link } from '@heroui/link';
import clsx from 'clsx';
import { Metadata, Viewport } from 'next';

import { Providers } from './providers';

import { Navbar } from '@/components/navbar';
import { fontSans } from '@/config/fonts';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: '/favicon.ico',
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body className={clsx('min-h-screen text-foreground bg-background font-sans antialiased', fontSans.variable)}>
        <Providers themeProps={{ attribute: 'class', defaultTheme: 'dark' }}>
          <div className="relative flex flex-col h-screen">
            <Navbar />
            <main className="container mx-auto max-w-7xl pt-16 px-6 flex-grow">{children}</main>
            <div className="container mx-auto px-4 md:px-6 py-8 mt-8 border-t">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="mb-4 md:mb-0">
                  <h3 className="font-bold text-lg">Курсы логики</h3>
                  <p className="text-sm text-gray-500">© 2024 Все права защищены</p>
                </div>
                <div className="flex gap-4">
                  <Link href="#" className="text-gray-500 hover:text-primary">
                    Telegram
                  </Link>
                  <Link href="#" className="text-gray-500 hover:text-primary">
                    WhatsApp
                  </Link>
                  <Link href="#" className="text-gray-500 hover:text-primary">
                    Email
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
