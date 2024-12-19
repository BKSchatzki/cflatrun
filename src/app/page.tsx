import Music from './_sections/Concerts';
import Footer from './_sections/Footer';
import Hero from './_sections/Hero';
import Members from './_sections/Members';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center gap-9 font-[family-name:var(--font-geist-sans)]">
      <main className="row-start-2 flex w-full max-w-[1280px] flex-col items-center gap-[4.5rem] px-3 pb-9 sm:px-6 md:px-12">
        <Hero />
        <Members />
        <Music />
      </main>
      <div className="w-full max-w-[1280px] items-center px-3 pt-12 sm:px-6 md:px-12">
        <Footer />
      </div>
    </div>
  );
}
