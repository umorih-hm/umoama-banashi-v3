import Link from 'next/link';
import { Image, User } from '@nextui-org/react';

export const PostCard = ({ post, index }: PostCardRequest) => {
  return (
    <Link href={`/blog/${post.id}`} key={index}>
      {/* サムネ画像 */}
      <Image
        radius="md"
        width="200"
        height="150"
        alt={post.title}
        isZoomed
        className="object-fit"
        src={post.image ? post.image : 'https://placehold.jp/200x150.png'}
      />
      {/* タイトル */}
      <h2 className="text-sm sm:text-md md:text-lg font-bold mb-2">
        {post.title}
      </h2>
      {/* サブブタイトル */}
      <h3 className="text-sm sm:text-md md:text-lg mb-2">
        {post.subTitle}
      </h3>
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
