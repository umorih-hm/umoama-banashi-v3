import useTranslation from 'next-translate/useTranslation';
import { getAllPages } from '../../../lib/notion/getAllPages';
export const revalidate = 60;

import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { PostCard } from '../../../components/elements/PostCard';
import { Breadcrumb } from '../../../components/elements/Breadcrumbs';
import { SearchButton } from '../../../components/elements/searchButton';
import { SideBar } from '../../../components/elements/SideBar'

export default async function Tag({
  searchParams,
}: {
  searchParams: { tag: string };
}) {
  const searchedPosts = await getAllPages(
    'works',
    '',
    '',
    searchParams.tag
  );
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
    {
      title: `# ${searchParams.tag}`,
      href: `/works/tags?tag=${searchParams.tag}`,
    },
  ];

  return (
    <div className="container mx-auto min-h-screen">
      <main className="flex bg-background flex-col justify-center py-4 lg:p-6 w-full mx-auto">
        <div className='flex flex-col lg:flex-row gap-12'>
          <div className='w-full lg:w-1/12'>
            <SideBar dbName='works' activeTag={searchParams.tag}/>
          </div>
          {/* ハッシュタグ */}
          <div className='w-full lg:w-11/12'>
            <h1 className="font-bold"># {searchParams.tag}</h1>
            <ScrollArea className="w-full whitespace-nowrap rounded-md">
              <div className="flex w-max space-x-4 pt-2">
                {searchedPosts.postsProperties.map((post: NotionPost, index: number) => (
                  <PostCard post={post} index={index} dbName="works" key={index} />
                ))}
              </div>
              <ScrollBar orientation="horizontal" />
            </ScrollArea>
          </div>
        </div>
      </main>
    </div>
  );
}
