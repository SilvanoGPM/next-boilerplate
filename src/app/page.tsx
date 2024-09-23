import { Metadata } from 'next';

import { Example } from '$components/example';
import { env } from '$env';

export const metadata: Metadata = {
  title: 'Home',
};

export default function Home() {
  console.log(env.NEXT_PUBLIC_APP_URL);

  return (
    <main className="flex flex-col items-center justify-center h-screen text-2xl font-bold">
      <Example />
    </main>
  );
}
