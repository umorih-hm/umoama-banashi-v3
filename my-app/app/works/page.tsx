import useTranslation from 'next-translate/useTranslation';
import { getAllPages } from '../../lib/notion/getAllPages';
export const revalidate = 60;

import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { PostCard } from '../../components/elements/PostCard';
import { Breadcrumb } from '../../components/elements/Breadcrumbs';
import { SearchButton } from '../../components/elements/searchButton';
import { SideBar } from '../../components/elements/SideBar'

export default async function Home() {
  const currentPosts = await getAllPages('works');
  const umorihPosts = await getAllPages('works', 'UMORiH');
  const amaneriyPosts = await getAllPages('works', 'AMANERiY');
  const { t } = useTranslation('common');
  const links: Breadcrumb[] = [
    {
      title: t('app.layout.home'),
      href: '/',
    },
    {
      title: t('app.layout.works'),
      href: '/works',
    },
  ];

  return (
    <div className="container mx-auto min-h-screen">
      <main className="flex bg-background flex-col justify-center py-4 lg:p-6 w-full mx-auto">
        <div className='flex flex-col lg:flex-row gap-12'>
          <div className='w-full lg:w-1/12'>
            <SideBar dbName='works'/>
          </div>
          <div className='w-full lg:w-11/12'>
            <div className="flex justify-between pb-4">
              <div>
                <Breadcrumb links={links} />
              </div>
              <SearchButton dbName="works" />
            </div>
          {/* 最新の投稿 */}
          <h1 className="font-bold">{t('app.works.list.current')}</h1>
          <ScrollArea className="w-full whitespace-nowrap rounded-md">
            <div className="flex w-max space-x-4 pt-2">
              {currentPosts.postsProperties.map(
                (post: NotionPost, index: number) => (
                  <PostCard
                    post={post}
                    index={index}
                    dbName="works"
                    key={index}
                  />
                )
              )}
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>

          {/* UMORiHの投稿 */}
          <h1 className="font-bold">{t('app.works.list.umorih')}</h1>
          <ScrollArea className="w-full whitespace-nowrap rounded-md">
            <div className="flex w-max space-x-4 pt-2">
              {umorihPosts.postsProperties.map(
                (post: NotionPost, index: number) => (
                  <PostCard
                    post={post}
                    index={index}
                    dbName="works"
                    key={index}
                  />
                )
              )}
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>

          {/* AMANERiYの投稿 */}
          <h1 className="font-bold">{t('app.works.list.amaneriy')}</h1>
          <ScrollArea className="w-full whitespace-nowrap rounded-md">
            <div className="flex w-max space-x-4 pt-2">
              {amaneriyPosts.postsProperties.map(
                (post: NotionPost, index: number) => (
                  <PostCard
                    post={post}
                    index={index}
                    dbName="works"
                    key={index}
                  />
                )
              )}
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
          </div>
        </div>
      </main>
    </div>
  );
}
