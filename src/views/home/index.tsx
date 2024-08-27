import React from 'react';

import { Example } from '$components/example';

export function HomeView() {
  return (
    <main className="flex flex-col items-center justify-center h-screen text-2xl font-bold">
      <Example />
    </main>
  );
}
