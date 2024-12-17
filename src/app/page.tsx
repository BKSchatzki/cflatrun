import Link from 'next/link';

import membersContent from '@/content/members.md';

type Member = {
  name: string;
  position: string;
  voicepart: string;
  classof: string;
};

export default function Home() {
  const { title, members } = membersContent.attributes;
  const MembersContent = membersContent.react;

  return (
    <div className="grid min-h-screen grid-rows-[20px_1fr_20px] items-center justify-items-center gap-16 p-8 pb-20 font-[family-name:var(--font-geist-sans)] sm:p-20">
      <header className="row-start-1 flex flex-wrap items-center justify-center gap-6">
        Header
      </header>
      <main className="row-start-2 flex w-full flex-col items-center gap-8">
        <h1 className="text-5xl">Hello World</h1>
        <h2 className="text-3xl">{title}</h2>
        <MembersContent />
        <ul className="flex w-1/2 min-w-96 flex-col gap-4">
          {members.map((member: Member) => (
            <li
              key={member.name}
              className="grid grid-cols-12 gap-4"
            >
              <h3 className="col-span-4">{member.name}</h3>
              <p className="col-span-4">{member.position}</p>
              <p className="col-span-2 text-right">{member.voicepart}</p>
              <p className="col-span-2 text-right">{member.classof}</p>
            </li>
          ))}
        </ul>
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
