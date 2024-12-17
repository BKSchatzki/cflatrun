import Link from 'next/link';

import Members from './_sections/Members';

export default function Home() {
  return (
    <div className="grid min-h-screen grid-rows-[20px_1fr_20px] items-center justify-items-center gap-16 p-8 pb-20 font-[family-name:var(--font-geist-sans)] sm:p-20">
      <header className="row-start-1 flex flex-wrap items-center justify-center gap-6">
        Header
      </header>
      <main className="row-start-2 flex w-full flex-col gap-8">
        <Members />
      </main>
      <footer className="row-start-3 flex flex-wrap items-center justify-center gap-6">
        <Link
          href="/admin/index.html"
          className="bg-indigo-400 p-4 font-semibold text-background hover:underline"
        >
          Admin
        </Link>
      </footer>
    </div>
  );
}
