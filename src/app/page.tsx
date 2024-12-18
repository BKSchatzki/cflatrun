import Link from 'next/link';

import Music from './_sections/Concerts';
import Hero from './_sections/Hero';
import Members from './_sections/Members';

export default function Home() {
  return (
    <div className="grid min-h-screen grid-rows-[20px_1fr_20px] items-center justify-items-center gap-16 px-2 font-[family-name:var(--font-geist-sans)] sm:px-20">
      <header></header>
      <main className="row-start-2 flex w-full max-w-[calc(1280px)] flex-col items-center gap-[4.5rem]">
        <Hero />
        <Members />
        <Music />
        <Link
          href="/admin/index.html"
          className="self-start rounded-md bg-indigo-400 px-4 py-2 font-semibold text-background hover:underline"
        >
          Admin
        </Link>
      </main>
      <footer></footer>
    </div>
  );
}
