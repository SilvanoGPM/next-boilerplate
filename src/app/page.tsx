import { Metadata } from 'next';

import { Example } from '$components/example';

export const metadata: Metadata = {
  title: 'Home',
};

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center h-screen text-2xl font-bold">
      <Example />
    </main>
  );
}
