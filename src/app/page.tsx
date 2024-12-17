import Image from 'next/image';
import Link from 'next/link';

import { cn } from '@/lib/utils';

import client from '../../tina/__generated__/client';

export default async function Home() {
  const { data } = await client.queries.postConnection();

  return (
    <div>
      <h1 className={cn(`text-4xl`)}>Posts</h1>
      <div>
        {data.postConnection.edges.map((post) => {
          console.log(post); // Log each post being processed
          return (
            <div key={post.node.id}>
              <Link href={`/posts/${post.node._sys.filename}`}>{post.node.title}</Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
