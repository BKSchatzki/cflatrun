import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';

export function getDataFromDirectory<T>(directory: string): T[] {
  const allData: T[] = [];
  const filePaths = fs.readdirSync(directory);

  filePaths.forEach((filePath) => {
    const fullPath = path.join(directory, filePath);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data } = matter(fileContents);
    allData.push({
      ...data,
    } as T);
  });

  return allData;
}

export function getDataFromFile<T>(filePath: string): T {
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data } = matter(fileContents);
  return { ...data } as T;
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
