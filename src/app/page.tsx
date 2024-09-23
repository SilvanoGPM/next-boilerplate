'use client';

import { Example } from '$components/example';
import { env } from '$env';

export default function Home() {
  console.log('Aqui', env.NEXT_PUBLIC_APP_URL);

  return (
    <main className="flex flex-col items-center justify-center h-screen text-2xl font-bold">
      <Example />
    </main>
  );
}
