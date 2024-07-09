import Link from 'next/link';
import NextImage from 'next/image';
import { User, Tooltip } from '@nextui-org/react';
import useTranslation from 'next-translate/useTranslation';

export const PostCard = ({ post, index, dbName }: PostCardProps) => {
  const { t } = useTranslation('common');

  return (
    <Tooltip
      content={
        <div className="px-1 py-2">
          <div className="text-small text-white font-bold">
            {t('component.post_card.sub_title')}
          </div>
          <div className="text-tiny text-white">{post.subTitle}</div>
        </div>
      }
      isDisabled={!post.subTitle}
      color="success"
    >
      {/* サブブタイトル */}
      <Link href={`/${dbName}/${post.id}`} key={index}>
        {/* サムネ画像 */}
        <NextImage
          width="200"
          height="100"
          alt={post.title}
          className="object-cover h-2/5 rounded-lg hover:opacity-50"
          src={post.image ? post.image : 'https://placehold.jp/200x150.png'}
          unoptimized
        />
        {/* タイトル */}
        <div className="max-w-[200px] text-wrap">
          <h3 className="font-bold my-2">{post.title}</h3>
        </div>
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
    </Tooltip>
  );
};
