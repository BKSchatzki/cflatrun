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
    <section className="flex flex-col items-center gap-6">
      <h3>Officers</h3>
      <MembersList members={officers} />
      <h3>Members</h3>
      <MembersList members={nonOfficers} />
    </section>
  );
};

const MembersList = ({ members }: { members: Member[] }) => {
  return (
    <ul className="grid w-full max-w-[1280px] grid-cols-1 place-items-center gap-3 lg:grid-cols-3">
      {members.map((member: Member) => (
        <li
          key={member.name}
          className="grid w-full max-w-[426.6667px] grid-cols-12 grid-rows-6 text-balance rounded-md p-6 odd:bg-slate-800 even:bg-slate-900"
        >
          <h4 className="col-span-10 row-span-2 self-end">{member.name}</h4>
          <p className="col-span-2 row-span-2 self-end text-right text-sm text-slate-400">
            {member.classof}
          </p>
          <p className="col-span-10 row-span-4 text-sm text-slate-400">{member.position}</p>
          <p className="col-span-2 row-span-4 text-right text-sm">{member.voicepart}</p>
        </li>
      ))}
    </ul>
  );
};

export default Members;
