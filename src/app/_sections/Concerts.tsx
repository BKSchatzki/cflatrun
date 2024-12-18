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
    <section className="w-full rounded-md bg-gradient-to-b from-slate-950 to-yellow-950">
      <h2>Recent Concerts</h2>
      <ConcertsList concerts={sortedConcerts} />
    </section>
  );
};

const ConcertsList = ({ concerts }: { concerts: Concert[] }) => {
  return (
    <ul className="relative z-10 grid w-full max-w-[1280px] grid-cols-1 place-items-center gap-3 border-t-2 border-amber-300 p-3 sm:grid-cols-2 lg:grid-cols-3">
      <img
        src="/uploads/suspenders-concert.png"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 size-full -translate-x-1/2 -translate-y-1/2 object-cover opacity-10 blur-sm"
      />
      {[...concerts, ...concerts, ...concerts, ...concerts, ...concerts].map(
        (concert: Concert, index: number) => (
          <li
            key={index || concert.concertname}
            className="scrollbar-thin scrollbar-thumb-cflatyellow flex max-h-[36rem] w-full flex-col gap-3 overflow-y-scroll text-balance rounded-md p-6 transition-all duration-300 odd:bg-slate-800/25 even:bg-slate-950/25 hover:odd:-rotate-1 hover:odd:bg-slate-950/25 hover:even:rotate-1 hover:even:bg-slate-800/25"
          >
            <div className="border-b pb-1.5">
              <h3 className="">{concert.concertname}</h3>
              <p className="text-slate-400">
                {concert.semester} {concert.year}
              </p>
            </div>
            <ul className="flex flex-col gap-3">
              {concert.songs.map((song: Song, index: number) => (
                <li key={index || song.title}>
                  <h4>{song.title}</h4>
                  <p className="flex flex-col text-sm text-slate-400">
                    <span>opb. {song.opb}</span>
                    <span>arr. {song.arranger}</span>
                    <span>{song.soloist && `solo. ${song.soloist}`}</span>
                    <span>{song.vocalpercussion && `perc. ${song.vocalpercussion}`}</span>
                  </p>
                </li>
              ))}
            </ul>
          </li>
        )
      )}
    </ul>
  );
};

export default Concerts;
