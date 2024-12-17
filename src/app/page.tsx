import Link from 'next/link';

import {
  getMembersData,
  MemberData,
} from '@/utils/graymatter';

type Member = MemberData;

export default async function Home() {
  const allMembersData = await getMembersData();
  const members: Member[] = allMembersData;

  return (
    <div className="grid min-h-screen grid-rows-[20px_1fr_20px] items-center justify-items-center gap-16 p-8 pb-20 font-[family-name:var(--font-geist-sans)] sm:p-20">
      <header className="row-start-1 flex flex-wrap items-center justify-center gap-6">
        Header
      </header>
      <main className="row-start-2 flex w-full flex-col items-center gap-8">
        <h2 className="text-3xl">Members</h2>
        <ul className="grid w-full min-w-96 max-w-[1024px] grid-cols-3 gap-12">
          {members.map(
            (member: Member) =>
              member.iscurrent &&
              member.position && (
                <li
                  key={member.name}
                  className="flex flex-col gap-4 rounded-xl border p-8"
                >
                  <div className="flex w-full justify-between">
                    <h3>{member.name}</h3>
                    <div className="flex gap-4">
                      <p>{member.voicepart}</p>
                      <p>{member.classof}</p>
                    </div>
                  </div>
                  <p className="text-end">{member.position || '-'}</p>
                </li>
              )
          )}
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
