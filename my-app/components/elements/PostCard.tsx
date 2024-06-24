import Link from 'next/link';
import NextImage from 'next/image';
import { User } from '@nextui-org/react';

export const PostCard = ({ post, index }: PostCardRequest) => {
  return (
    <Link href={`/blog/${post.id}`} key={index}>
      {/* サムネ画像 */}
      <NextImage
        width="200"
        height="100"
        alt={post.title}
        className="object-cover h-2/5 rounded-lg hover:opacity-50"
        src={post.image ? post.image : 'https://placehold.jp/200x150.png'}
      />
      {/* タイトル */}
      <h2 className="font-bold my-2">{post.title}</h2>
      {/* サブブタイトル */}
      <h6 className="mb-2">{post.subTitle}</h6>
      {/* パーソン ・日付*/}
      <User
        name={post.person}
        avatarProps={
          post.person === 'UMORiH'
            ? {
                src: '/Umorih.png',
              }
            : {
                src: '/Amaneriy.png',
              }
        }
        description={`投稿日：${post.date}`}
      />
    </Link>
  );
};
