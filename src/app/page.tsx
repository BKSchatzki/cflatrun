import Concerts from './_sections/Concerts';
import Footer from './_sections/Footer';
import Hero from './_sections/Hero';
import Members from './_sections/Members';

export default function Home() {
  return (
    <div className="bg-dots motion-preset-focus-lg flex min-h-screen flex-col items-center font-[family-name:var(--font-geist-sans)]">
      <main className="flex w-full max-w-[1280px] flex-col items-center gap-3 px-3 pb-3 sm:px-6 md:px-12">
        <Hero />
        <Members />
        <Concerts />
      </main>
      <Footer />
    </div>
  );
}
