import useTranslation from 'next-translate/useTranslation';
import 'zenn-content-css';
import { Toc } from '../../../components/elements/toc';
import Script from 'next/script';

import { getPageInfo } from '../../../lib/notion/getPage';
import { getPageContent } from '../../../lib/notion/getPageContent';
import { Breadcrumb } from '../../../components/elements/Breadcrumbs';
import NextImage from 'next/image';
import { Image, User } from '@nextui-org/react';

export default async function Page({ params }: { params: { id: string } }) {
  const htmlContent: any = await getPageContent(params.id);
  const post = await getPageInfo(params.id);
  const { t } = useTranslation('common');
  const links: Breadcrumb[] = [
    {
      title: t('app.layout.home'),
      href: '/',
    },
    {
      title: t('app.layout.note'),
      href: '/note',
    },
    {
      title: post.person,
      href: '#',
    },
    {
      title: post.title,
      href: `/note/${post.id}`,
    },
  ];

  return (
    <>
      <Script
        src="https://embed.zenn.studio/js/listen-embed-event.js"
        strategy="afterInteractive"
      />
      <div className="pt-8 pb-2 px-8 w-full md:w-5/6 mx-auto">
        <Breadcrumb links={links} />
      </div>
      <div className="container-xl flex bg-background min-h-screen flex-col items-center justify-center p-8 w-full md:w-5/6 mx-auto">
        <div className="h-[300px] relative w-full mb-4">
          {/* サムネ画像 */}
          <NextImage
            fill
            alt={post.title}
            className="rounded-lg object-contain"
            src={post.image ? post.image : 'https://placehold.jp/200x150.png'}
          />
        </div>
        {/* タイトル */}
        <h1 className="text-2xl mb-4">{post.title}</h1>
        {/* パーソン ・日付*/}
        <div>
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
        </div>
        <div className="flex flex-col-reverse lg:flex-row justify-between gap-6 w-full pt-4">
          <div
            className="znc mx-auto content w-full lg:w-9/12"
            dangerouslySetInnerHTML={{
              __html: htmlContent,
            }}
          />
          <div className="block w-full lg:w-3/12">
            <Toc></Toc>
          </div>
        </div>
      </div>
    </>
  );
}
