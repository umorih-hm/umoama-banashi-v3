import { Link, Button, Divider } from '@nextui-org/react';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { getAllPages } from '@/lib/notion/getAllPages';
import useTranslation from 'next-translate/useTranslation';
import { Avatars } from '../Avatars/Avatars';

export const SideBar = async ({
  dbName,
  activeTag,
  activePerson,
}: SideBarProps) => {
  const currentPosts = await getAllPages(dbName);
  const { t } = useTranslation('common');

  return (
    <ScrollArea className="w-full whitespace-nowrap rounded-md">
      <Avatars dbName={dbName} activePerson={activePerson}></Avatars>
      <Divider className="my-3" />
      <div className="flex lg:flex-col gap-1">
        <Button
          href={`/${dbName}`}
          as={Link}
          radius="lg"
          variant="light"
          color="primary"
          className={`font-semibold border-2 border-slate-200 lg:border-0 ${
            activeTag === 'ALL' ? 'text-green-500' : ''
          }`}
        >
          {t('component.side_bar.all')}
        </Button>
        {currentPosts.tags.map((tag: string, index: number) => (
          <Button
            key={index}
            href={`/${dbName}/tags?tag=${tag}`}
            as={Link}
            radius="lg"
            variant="light"
            color="primary"
            className={`font-semibold border-2 border-slate-200 lg:border-0 ${
              activeTag === tag ? 'text-green-500' : ''
            }`}
          >
            {tag}
          </Button>
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
};
