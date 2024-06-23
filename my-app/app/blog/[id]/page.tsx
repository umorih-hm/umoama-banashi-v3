
import 'zenn-content-css';
import Script from 'next/script'

import { getPageInfo } from '../../../lib/notion/getPage';
import { getPageContent } from '../../../lib/notion/getPageContent';
import { Image, User } from '@nextui-org/react';

export default async function Page({ params }: { params: { id: string } }) {
  const pageContents: any = await getPageContent(params.id);
  const htmlContent = pageContents.props.content;
  const post = await getPageInfo(params.id);

  return (
    <>
      <Script src="https://embed.zenn.studio/js/listen-embed-event.js" strategy="afterInteractive"/>
      <div className="container-xl flex bg-background min-h-screen flex-col items-center justify-center p-16 lg:w-5/6 mx-auto">
        {/* サムネ画像 */}
        <Image
          radius="lg"
          alt={post.title}
          src={post.image ? post.image : 'https://placehold.jp/200x150.png'}
        />
        {/* タイトル */}
        <h1 className="text-2xl">{post.title}</h1>
        {/* パーソン ・日付*/}
        <div className="items-start">
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
        <div
          className="znc mx-auto"
          dangerouslySetInnerHTML={{
            __html: htmlContent,
          }}
        />
      </div>
    </>
  );
}
