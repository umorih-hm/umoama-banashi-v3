import useTranslation from 'next-translate/useTranslation';
import { getAllPages } from '../../../lib/notion/getAllPages';
export const revalidate = 60;

import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { PostCard } from '../../../components/elements/PostCard';
import { Breadcrumb } from '../../../components/elements/Breadcrumbs';
import { SearchButton } from '../../../components/elements/searchButton';

export default async function Search({ searchParams }: { searchParams: { keyword: string } }) {
  const searchedPosts: NotionPost[] = await getAllPages('note' , '', searchParams.keyword);
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
      title: `${searchParams.keyword}${t('app.search.result')}`,
      href: `/note/search?keyword=${searchParams.keyword}`,
    },
  ]

  return (
    <div className="container mx-auto min-h-screen">
      <main className="flex bg-background flex-col justify-center p-8 lg:w-5/6 mx-auto">
        <div className='flex justify-between pb-8'>
          <div>
            <Breadcrumb links={links} />
          </div>
            <SearchButton dbName='note'/>
          </div>
        {/* 検索キーワード */}
        <h1 className="font-bold">{searchParams.keyword} {t('app.search.result')}</h1>
        <ScrollArea className="w-full whitespace-nowrap rounded-md">
          <div className="flex w-max space-x-4 pt-2">
            {searchedPosts.map((post: NotionPost, index: number) => (
              <PostCard post={post} index={index} dbName='note' key={index} />
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </main>
    </div>
  );
}
