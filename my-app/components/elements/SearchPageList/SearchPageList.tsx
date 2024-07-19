import useTranslation from 'next-translate/useTranslation';
import { getAllPages } from '@/lib/notion/getAllPages';
export const revalidate = 60;

import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { PostCard } from '@/components/elements/PostCard/PostCard';
import { Breadcrumb } from '@/components/elements/Breadcrumbs/Breadcrumbs';
import { SearchButton } from '@/components/elements/SearchButton/SearchButton';
import { SideBar } from '@/components/elements/SideBar/SideBar';

export const SearchPageList = async ({
  dbName,
  keyword,
}: SearchPageListProps) => {
  const searchedPosts = await getAllPages(dbName, '', keyword);
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
      title: `${keyword}${t('app.search.result')}`,
      href: `/${dbName}/search?keyword=${keyword}`,
    },
  ];

  return (
    <div className="container mx-auto min-h-screen">
      <main className="flex bg-background flex-col justify-center py-4 lg:p-6 w-full mx-auto">
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="w-full lg:w-1/12">
            <SideBar dbName={dbName} activeTag="" activePerson="" />
          </div>
          {/* ハッシュタグ */}
          <div className="w-full lg:w-11/12">
            <div className="flex justify-between pb-8">
              <div>
                <Breadcrumb links={links} />
              </div>
              <SearchButton dbName={dbName} />
            </div>
            {/* 検索キーワード */}
            <h1 className="font-bold">
              {keyword} {t('app.search.result')}
            </h1>
            <ScrollArea className="w-full whitespace-nowrap rounded-md">
              <div className="flex w-max space-x-4 pt-2">
                {searchedPosts.postsProperties.map(
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
