import useTranslation from 'next-translate/useTranslation';
import { getAllPages } from '@/lib/notion/getAllPages';
export const revalidate = 60;

import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { PostCard } from '../PostCard/PostCard';
import { Breadcrumb } from '../Breadcrumbs/Breadcrumbs';
import { SearchButton } from '../SearchButton/SearchButton';
import { SideBar } from '../SideBar/SideBar';

export const PersonPageList = async ({
  dbName,
  person,
}: PersonPageListProps) => {
  const posts = await getAllPages(dbName, person);
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
      title: person,
      href: `/${dbName}/person`,
    },
  ];

  return (
    <div className="container mx-auto min-h-screen">
      <main className="flex bg-background flex-col justify-center py-4 lg:p-6 w-full mx-auto">
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="w-full lg:w-1/12">
            <SideBar dbName={dbName} activeTag="ALL" activePerson={person} />
          </div>
          <div className="w-full lg:w-11/12">
            <div className="flex justify-between pb-4">
              <div>
                <Breadcrumb links={links} />
              </div>
              <SearchButton dbName={dbName} />
            </div>
            {/* 投稿一覧 */}
            <h1 className="font-bold">{t(`app.${dbName}.list.current`)}</h1>
            <ScrollArea className="w-full whitespace-nowrap rounded-md">
              <div className="flex w-max space-x-4 pt-2">
                {posts.postsProperties.map(
                  (post: NotionPost, index: number) => (
                    <PostCard
                      post={post}
                      index={index}
                      dbName={dbName}
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
};
