import React from 'react';

import {
  Caveat,
  Dancing_Script,
} from 'next/font/google';
import path from 'path';

import { getDataFromDirectory } from '@/utils/graymatter';

const dancingScript = Dancing_Script({
  subsets: ['latin'],
});

const caveat = Caveat({
  subsets: ['latin'],
});

const membersDirectory = path.join(process.cwd(), 'src/content/members');

interface MemberData {
  name: string;
  classof: string;
  voicepart: string;
  position?: string;
  portrait?: string;
  iscurrent: boolean;
}
type Member = MemberData;

const Members = () => {
  const allMembersData = getDataFromDirectory<MemberData>(membersDirectory);
  const sortedCurrentMembers: Member[] = allMembersData
    .filter((member: Member) => member.iscurrent)
    .sort((a: Member, b: Member) => +a.classof - +b.classof);
  const officers: Member[] = sortedCurrentMembers.filter((member: Member) => member.position);
  const nonOfficers: Member[] = sortedCurrentMembers.filter((member: Member) => !member.position);

  return (
    <section
      id="members"
      className="flex w-full scroll-m-16 flex-col items-center gap-3"
    >
      <MembersSubsection
        heading="Officers"
        members={officers}
        image="/uploads/officers.png"
        delayDurationClass="motion-delay-200"
      />
      <MembersSubsection
        heading="Members"
        members={nonOfficers}
        image="/uploads/outside-union.png"
        delayDurationClass="motion-delay-300"
      />
    </section>
  );
};

const MembersSubsection = ({
  heading,
  members,
  image,
  delayDurationClass,
}: {
  heading: string;
  members: Member[];
  image: string;
  delayDurationClass: string;
}) => {
  return (
    <div
      className={`motion-preset-blur-right-lg w-full rounded-md motion-delay-200 ${delayDurationClass}`}
    >
      <h2 className={caveat.className}>{heading}</h2>
      <MembersList
        members={members}
        image={image}
      />
    </div>
  );
};

const MembersList = ({ members, image }: { members: Member[]; image: string }) => {
  return (
    <ul className="relative z-10 grid w-full max-w-[1280px] grid-cols-1 place-items-center gap-3 rounded-t-none border-t-2 border-cflatyellow bg-gradient-to-b from-slate-950 to-indigo-950 p-3 sm:grid-cols-2 lg:grid-cols-3">
      <img
        src={image}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 size-full -translate-x-1/2 -translate-y-1/2 object-cover opacity-10 blur-sm"
      />
      {members.map((member: Member) => (
        <li
          key={member.name}
          className={`motion-preset-blur-left-lg flex min-h-24 w-full justify-between text-balance rounded-md px-6 py-3 transition-all duration-300 motion-delay-[400ms] odd:bg-slate-800/25 even:bg-slate-950/25 hover:odd:-rotate-1 hover:odd:bg-slate-950/25 hover:even:rotate-1 hover:even:bg-slate-800/25`}
        >
          <div className="flex flex-col">
            <h3 className={`text-2xl ${dancingScript.className}`}>{member.name}</h3>
            <div className="flex flex-col pt-1 text-sm">
              <p className="text-sm text-slate-400">{member.position}</p>
              <p className="flex gap-2">
                <span className="text-slate-400">{member.classof}</span>
                <span className={caveat.className}>{member.voicepart}</span>
              </p>
            </div>
          </div>
          <img
            src={member.portrait || 'member-icon-default-round.webp'}
            alt={`Portrait of ${member.name}`}
            className="size-[4.5rem] rounded-full object-cover"
          />
        </li>
      ))}
    </ul>
  );
};

export default Members;
