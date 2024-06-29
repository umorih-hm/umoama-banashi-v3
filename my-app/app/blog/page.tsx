import useTranslation from 'next-translate/useTranslation';
import { getAllPages } from '../../lib/notion/getAllPages';
export const revalidate = 60;

import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { PostCard } from '../../components/elements/PostCard';
import { Breadcrumb } from '../../components/elements/Breadcrumbs';

export default async function Home() {
  const currentPosts: NotionPost[] = await getAllPages();
  const umorihPosts: NotionPost[] = await getAllPages('UMORiH');
  const amaneriyPosts: NotionPost[] = await getAllPages('AMANERiY');
  const { t } = useTranslation('common');
  const links: Breadcrumb[] = [
    {
      title: t('app.layout.home'),
      href: '/',
    },
    {
      title: t('app.layout.blog'),
      href: '/blog',
    },
  ]

  return (
    <div className="container mx-auto min-h-screen">
      <main className="flex bg-background flex-col justify-center p-8 lg:w-5/6 mx-auto">
        <div className="pb-8">
          <Breadcrumb links={links} />
        </div>
        {/* 最新の投稿 */}
        <h1 className="font-bold">{t('app.blog.list.current')}</h1>
        <ScrollArea className="w-full whitespace-nowrap rounded-md">
          <div className="flex w-max space-x-4 pt-2">
            {currentPosts.map((post: NotionPost, index: number) => (
              <PostCard post={post} index={index} key={index} />
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>

        {/* UMORiHの投稿 */}
        <h1 className="font-bold">{t('app.blog.list.umorih')}</h1>
        <ScrollArea className="w-full whitespace-nowrap rounded-md">
          <div className="flex w-max space-x-4 pt-2">
            {umorihPosts.map((post: NotionPost, index: number) => (
              <PostCard post={post} index={index} key={index} />
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>

        {/* AMANERiYの投稿 */}
        <h1 className="font-bold">{t('app.blog.list.amaneriy')}</h1>
        <ScrollArea className="w-full whitespace-nowrap rounded-md">
          <div className="flex w-max space-x-4 pt-2">
            {amaneriyPosts.map((post: NotionPost, index: number) => (
              <PostCard post={post} index={index} key={index} />
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </main>
    </div>
  );
}
