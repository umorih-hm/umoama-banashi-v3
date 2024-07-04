import { Link, Button } from '@nextui-org/react';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { getAllPages } from '../../lib/notion/getAllPages';
import useTranslation from 'next-translate/useTranslation';

interface SideBarRequest {
  dbName: 'note' | 'works';
}

export const SideBar = async ({ dbName }: SideBarRequest) => {
  const currentPosts = await getAllPages(dbName);
  const { t } = useTranslation('common');

  return (
    <ScrollArea className="w-full whitespace-nowrap rounded-md">
      <div className='flex md:flex-col gap-1'>
        <Button
          href={`/${dbName}`}
          as={Link}
          radius="lg"
          variant="light"
          color="primary"
          className='border-2 border-slate-200 md:border-0'
        >
          {t('component.side_bar.all')}
        </Button>
        {currentPosts.tags.map(
          (tag: string, index: number) => (
            <Button
              key={index}
              href={`/${dbName}/tags?tag=${tag}`}
              as={Link}
              radius="lg"
              variant="light"
              color="primary"
              className='border-2 border-slate-200 md:border-0'
            >
              {tag}
            </Button>
          )
        )}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
};
