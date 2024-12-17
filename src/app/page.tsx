import Link from 'next/link';

import {
  getMembersData,
  MemberData,
} from '@/utils/graymatter';

type Member = MemberData;

export const getStaticProps = async () => {
  const allMembersData = getMembersData();
  return {
    props: {
      members: allMembersData,
    },
  };
};

export default function Home({ members }: { members: Member[] }) {
  return (
    <div className="grid min-h-screen grid-rows-[20px_1fr_20px] items-center justify-items-center gap-16 p-8 pb-20 font-[family-name:var(--font-geist-sans)] sm:p-20">
      <header className="row-start-1 flex flex-wrap items-center justify-center gap-6">
        Header
      </header>
      <main className="row-start-2 flex w-full flex-col items-center gap-8">
        <h2 className="text-3xl">Members</h2>
        <ul className="flex w-1/2 min-w-96 flex-col gap-12">
          {members.map(
            (member: Member) =>
              member.iscurrent && (
                <li
                  key={member.name}
                  className="flex flex-col gap-4"
                >
                  <h3>{member.name}</h3>
                  <p>{member.classof}</p>
                  <p>{member.voicepart}</p>
                  <p>{member.position}</p>
                  <p>{member.bio}</p>
                  <img
                    src={member.image}
                    alt={member.name}
                  />
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
