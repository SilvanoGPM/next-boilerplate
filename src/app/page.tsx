import { Metadata } from 'next';

import { HomeView } from '$views/home';

export const metadata: Metadata = {
  title: 'Home',
};

export default function Home() {
  return <HomeView />;
}
