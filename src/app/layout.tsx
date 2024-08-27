import { Metadata } from 'next';
import NextTopLoader from 'nextjs-toploader';
import { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Next Boilerplate',
  description: 'Boilerplate for NextJS projects',

  themeColor: '#FFFFFFF',

  manifest: '/manifest.json',

  icons: [
    { rel: 'shortcut icon', url: '/favicon.ico' },
    { rel: 'apple-touch-icon', url: '/apple-touch-icon.png' },
  ],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <NextTopLoader color="green" />

        {children}
      </body>
    </html>
  );
}
