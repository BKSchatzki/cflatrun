import React from 'react';

import path from 'path';

import { getDataFromDirectory } from '@/utils/graymatter';

const concertsDirectory = path.join(process.cwd(), 'src/content/concerts');

interface SongData {
  title: string;
  opb: string;
  arranger: string;
  soloist?: string;
  vocalpercussion?: string;
}
type Song = SongData;

interface ConcertData {
  concertname: string;
  year: number;
  semester: string;
  songs: SongData[];
}
type Concert = ConcertData;

const Concerts = () => {
  const allMusicData = getDataFromDirectory<ConcertData>(concertsDirectory);
  const sortedConcerts: Concert[] = allMusicData
    .sort((a: Concert, b: Concert) => +b.semester - +a.semester)
    .sort((a: Concert, b: Concert) => a.year - b.year);

  return (
    <section className="flex w-full flex-col items-center gap-6">
      <h3>Concerts</h3>
      <ConcertsList concert={sortedConcerts} />
    </section>
  );
};

const ConcertsList = ({ concert }: { concert: Concert[] }) => {
  return (
    <ul className="grid w-full max-w-[1280px] grid-cols-1 place-items-center gap-3">
      {concert.map((concert: Concert) => (
        <li
          key={concert.concertname}
          className="grid w-full grid-cols-12 text-balance rounded-md p-6 odd:bg-slate-800 even:bg-slate-900"
        >
          <h4 className="col-span-10 self-end">{concert.concertname}</h4>
          <p className="col-span-2 self-end text-right text-sm text-slate-400">
            {concert.semester} {concert.year}
          </p>
          {/* <p className="col-span-10 row-span-4 text-sm text-slate-400">{concert.position}</p>
          <p className="col-span-2 row-span-4 text-right text-sm">{concert.voicepart}</p> */}
          <ul className="col-span-12">
            {concert.songs.map((song: Song) => (
              <li
                key={song.title}
                className="flex w-full justify-between"
              >
                <p>{song.title}</p>
                <p>{song.opb}</p>
                <p>{song.arranger}</p>
                <p>{song.soloist}</p>
                <p>{song.vocalpercussion}</p>
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
};

export default Concerts;
