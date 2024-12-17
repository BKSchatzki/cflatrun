import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';

// import { PostData } from './types'; // Import your type

// example if using typescript: this is based on the post schema we created in the config.yml

export interface MemberData {
  name: string;
  classof: string;
  voicepart: string;
  position?: string;
  bio?: string;
  image?: string;
  iscurrent: boolean;
}

const membersDirectory = path.join(process.cwd(), 'src/content/members');

export function getMembersData(): MemberData[] {
  const fileNames = fs.readdirSync(membersDirectory);
  const allMembersData = fileNames.map((fileName) => {
    const fullPath = path.join(membersDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data } = matter(fileContents);

    return {
      ...data,
    } as MemberData;
  });

  return allMembersData;
}

// export function getAllPostIds() {
//   const fileNames = fs.readdirSync(postsDirectory);
//   return fileNames.map((fileName) => ({
//     params: {
//       slug: fileName.replace(/\.md$/, ''), // Removing .md extension
//     },
//   }));
// }

// export function getPostData(slug: string): PostData {
//   const fullPath = path.join(postsDirectory, `${slug}.md`);
//   const fileContents = fs.readFileSync(fullPath, 'utf8');
//   const matterResult = matter(fileContents);

//   return {
//     slug,
//     ...matterResult.data,
//     date:
//       matterResult.data.date instanceof Date
//         ? new Date(matterResult.data.date).toISOString()
//         : matterResult.data.date,
//     body: matterResult.content,
//   } as PostData;
// }
