import React from 'react';

import { Merriweather } from 'next/font/google';
import path from 'path';

import {
  getDataFromDirectory,
  getDataFromFile,
} from '@/utils/graymatter';

export const revalidate = 60;

const membersDirectory = path.join(process.cwd(), 'src/content/members');
const officersPath = path.join(process.cwd(), 'src/content/sitecontent/officerssection.md');
const membersPath = path.join(process.cwd(), 'src/content/sitecontent/memberssection.md');

const merriweather = Merriweather({
  style: ['normal', 'italic'],
  subsets: ['latin'],
  weight: ['300', '400', '700', '900'],
});

interface MemberData {
  name: string;
  classof: string;
  major?: string;
  voicepart: string;
  position?: string;
  portrait?: string;
  iscurrent: boolean;
}
type Member = MemberData;

interface OfficersSection {
  officersheading: string;
  officerssubheading?: string;
  officersdescription?: string;
  bgimage?: string;
}

interface MembersSection {
  membersheading: string;
  memberssubheading?: string;
  membersdescription?: string;
  bgimage?: string;
}

const Members = () => {
  const officersSection: OfficersSection = getDataFromFile<OfficersSection>(officersPath);
  const membersSection: MembersSection = getDataFromFile<MembersSection>(membersPath);

  const allMembersData = getDataFromDirectory<MemberData>(membersDirectory);
  const sortedCurrentMembers: Member[] = allMembersData
    .filter((member: Member) => member.iscurrent)
    .sort((a: Member, b: Member) => +a.classof - +b.classof);
  const officers: Member[] = sortedCurrentMembers.filter((member: Member) => member.position);
  const sortedOfficers: Member[] = officers.sort((a, b) => {
    const priorityMap = {
      president: 0,
      'vice president': 1,
      'music director': 2,
      'assistant music director': 3,
    };
    const aPriority = priorityMap[a.position?.toLowerCase() as keyof typeof priorityMap] ?? 100;
    const bPriority = priorityMap[b.position?.toLowerCase() as keyof typeof priorityMap] ?? 100;
    return aPriority - bPriority;
  });
  const nonOfficers: Member[] = sortedCurrentMembers.filter((member: Member) => !member.position);

  return (
    <section
      id="members"
      className="flex w-full scroll-m-16 flex-col items-center gap-3"
    >
      <MembersSubsection
        heading={officersSection.officersheading}
        members={sortedOfficers}
        image={officersSection.bgimage || 'uploads/officers.png'}
        delayDurationClass="motion-delay-200"
      />
      <MembersSubsection
        heading={membersSection.membersheading}
        members={nonOfficers}
        image={membersSection.bgimage || 'uploads/outside-union.png'}
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
      <h2 className={merriweather.className}>{heading}</h2>
      <MembersList
        members={members}
        image={image}
      />
    </div>
  );
};

const MembersList = ({ members, image }: { members: Member[]; image: string }) => {
  return (
    <ul className="relative z-10 grid w-full max-w-[1280px] grid-cols-1 place-items-center gap-3 rounded-t-none border-t-2 border-cflatyellow bg-gradient-to-b from-slate-950 to-indigo-950 p-3 max-sm:px-1.5 sm:grid-cols-2 lg:grid-cols-3">
      <img
        src={image}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 size-full -translate-x-1/2 -translate-y-1/2 object-cover opacity-10 blur-sm"
      />
      {members.map((member: Member) => (
        <li
          key={member.name}
          className={`motion-preset-blur-left-lg flex h-full min-h-24 w-full justify-between gap-2 text-balance rounded-md px-6 py-3 transition-all duration-300 motion-delay-[400ms] odd:bg-slate-800/25 even:bg-slate-950/25 hover:odd:-rotate-1 hover:odd:bg-slate-950/25 hover:even:rotate-1 hover:even:bg-slate-800/25 max-sm:px-3`}
        >
          <div className="flex flex-col gap-2">
            <div>
              <h3 className={`text-2xl ${merriweather.className}`}>{member.name}</h3>
              <p className="text-sm">{member.position}</p>
            </div>
            <div className="flex flex-col text-sm">
              <p className="text-slate-400">{member.voicepart}</p>
              <p className="flex gap-2">
                <span className="text-slate-400">{member.classof}</span>
                <span className="text-slate-400">{member.major || 'Undecided'}</span>
              </p>
            </div>
          </div>
          <img
            src={member.portrait || 'member-icon-default-round.webp'}
            alt={`Portrait of ${member.name}`}
            className="motion-preset-blur-right-lg size-28 rounded-full border-[9px] border-cflatdarkblue object-cover motion-delay-700"
          />
        </li>
      ))}
    </ul>
  );
};

export default Members;
