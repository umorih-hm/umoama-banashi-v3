import useTranslation from 'next-translate/useTranslation';
import { getAllPages } from '../../lib/notion/getAllPages';
export const revalidate = 60;

import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { PostCard } from './PostCard';
import { Breadcrumb } from './Breadcrumbs';
import { SearchButton } from './searchButton';
import { SideBar } from './SideBar';

interface TagPageListProps {
  dbName: 'note' | 'works';
  tag: string;
}

export const TagPageList = async ({ dbName, tag }: TagPageListProps) => {
  const searchedPosts = await getAllPages(dbName, '', '', tag);
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
      title: `# ${tag}`,
      href: `/${dbName}/tags?tag=${tag}`,
    },
  ];

  return (
    <div className="container mx-auto min-h-screen">
      <main className="flex bg-background flex-col justify-center py-4 lg:p-6 w-full mx-auto">
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="w-full lg:w-1/12">
            <SideBar dbName={dbName} activeTag={tag} />
          </div>
          {/* ハッシュタグ */}
          <div className="w-full lg:w-11/12">
            <div className="flex justify-between pb-8">
              <div>
                <Breadcrumb links={links} />
              </div>
              <SearchButton dbName={dbName} />
            </div>
            <h1 className="font-bold"># {tag}</h1>
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
