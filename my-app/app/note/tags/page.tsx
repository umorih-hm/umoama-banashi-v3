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
    'note',
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
      title: t('app.layout.note'),
      href: '/note',
    },
    {
      title: `# ${searchParams.tag}`,
      href: `/note/tags?tag=${searchParams.tag}`,
    },
  ];

  return (
    <div className="container mx-auto min-h-screen">
      <main className="flex bg-background flex-col justify-center py-4 md:p-6 w-full mx-auto">
        <div className='flex flex-col md:flex-row gap-12'>
          <div className='w-full md:w-1/12'>
            <SideBar dbName='note'/>
          </div>
        {/* ハッシュタグ */}
          <div className='w-full md:w-11/12'>
            <div className="flex justify-between pb-8">
              <div>
                <Breadcrumb links={links} />
              </div>
              <SearchButton dbName="note" />
            </div>
            <h1 className="font-bold"># {searchParams.tag}</h1>
            <ScrollArea className="w-full whitespace-nowrap rounded-md">
              <div className="flex w-max space-x-4 pt-2">
                {searchedPosts.postsProperties.map((post: NotionPost, index: number) => (
                  <PostCard post={post} index={index} dbName="note" key={index} />
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
