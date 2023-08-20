import { ReactNode } from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Next Boilerplate',
  description: 'Boilerplate for NextJS projects',

  themeColor: '#FFFFFF',

  manifest: '/manifest.json',

  icons: [
    { rel: 'shortcut icon', url: '/favicon.ico' },
    { rel: 'apple-touch-icon', url: '/apple-touch-icon.png' },
  ],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
