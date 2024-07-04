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
        <div>
          <Button
            href={`/${dbName}`}
            as={Link}
            radius="full"
            variant="bordered"
          >
            {t('component.side_bar.all')}
          </Button>
        </div>
        {currentPosts.tags.map(
          (tag: string, index: number) => (
            <div key={index}>
              <Button
                href={`/${dbName}/tags?tag=${tag}`}
                as={Link}
                radius="full"
                variant="bordered"
              >
                {tag}
              </Button>
            </div>
          )
        )}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
};
