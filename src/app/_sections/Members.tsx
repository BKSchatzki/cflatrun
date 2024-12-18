import React from 'react';

import path from 'path';

import { getDataFromDirectory } from '@/utils/graymatter';

const membersDirectory = path.join(process.cwd(), 'src/content/members');

interface MemberData {
  name: string;
  classof: string;
  voicepart: string;
  position?: string;
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
    <section className="flex w-full flex-col items-center gap-9">
      <MembersSubsection
        heading="Officers"
        members={officers}
      />
      <MembersSubsection
        heading="Members"
        members={nonOfficers}
      />
    </section>
  );
};

const MembersSubsection = ({ heading, members }: { heading: string; members: Member[] }) => {
  return (
    <div className="w-full rounded-md bg-gradient-to-b from-slate-950 to-slate-800">
      <h2>{heading}</h2>
      <MembersList members={members} />
    </div>
  );
};

const MembersList = ({ members }: { members: Member[] }) => {
  return (
    <ul className="grid w-full max-w-[1280px] grid-cols-1 place-items-center gap-3 border-t-2 border-amber-300 p-3 sm:grid-cols-2 lg:grid-cols-3">
      {members.map((member: Member) => (
        <li
          key={member.name}
          className="flex h-full min-h-24 w-full flex-col text-balance rounded-md px-6 py-3 odd:bg-slate-800 even:bg-slate-900"
        >
          <h3 className="text-xl">{member.name}</h3>
          <div className="flex h-full flex-col pt-1 text-sm">
            <p className="text-sm text-slate-400">{member.position}</p>
            <p className="flex gap-2">
              <span className="text-slate-400">{member.classof}</span>
              <span>{member.voicepart}</span>
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Members;
