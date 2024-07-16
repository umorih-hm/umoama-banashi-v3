import useTranslation from 'next-translate/useTranslation';
import 'zenn-content-css';
import { Toc } from '@/components/elements/Toc';
import Script from 'next/script';

import { getPageInfo } from '@/lib/notion/getPage';
import { getPageContent } from '@/lib/notion/getPageContent';
import { Breadcrumb } from '@/components/elements/Breadcrumbs';
import { SelectableImages } from '@/components/elements/SelectableImages';
import { User } from '@nextui-org/react';

export const PageByPageId = async ({ dbName, id }: PageProps) => {
  const htmlContent: any = await getPageContent(id);
  const post = await getPageInfo(id);
  const { t } = useTranslation('common');
  const links: Breadcrumb[] = [
    {
      title: t('app.layout.home'),
      href: '/',
    },
    {
      title: t(`app.layout.${dbName}`),
      href: `/${dbName}`,
    },
    {
      title: post.person,
      href: '#',
    },
    {
      title: post.title,
      href: `/${dbName}/${post.id}`,
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
        {/* サムネ画像 */}
        <SelectableImages post={post} />
        {/* タイトル */}
        <h1 className="text-2xl my-4">{post.title}</h1>
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
            description={`投稿日：${post.publishedDate}　最終更新日：${post.updatedDate}\n`}
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
};
