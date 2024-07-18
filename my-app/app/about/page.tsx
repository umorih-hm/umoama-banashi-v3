import useTranslation from 'next-translate/useTranslation';
import { getAllPages } from '@/lib/notion/getAllPages';
export const revalidate = 60;
import { Button, Link } from '@nextui-org/react';
import { AboutCard } from '@/components/elements/AboutCard';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { PostCard } from '@/components/elements/PostCard';
import { FaArrowRight } from 'react-icons/fa';

export default async function Page() {
  const { t } = useTranslation('common');
  const currentPostsNote = await getAllPages('note');
  const currentWorksNote = await getAllPages('works');

  return (
    <div className="container mx-auto min-h-screen">
      <main className="flex bg-background flex-col justify-center py-4 lg:p-6 w-full mx-auto">
        <h1 className="text-2xl md:text-4xl py-16 font-medium">
          {t('app.about.title')}
        </h1>
        <div className="py-8">
          <AboutCard person="UMORiH"></AboutCard>
        </div>
        <div className="py-8">
          <AboutCard person="AMANERiY"></AboutCard>
        </div>

        {/* WORKS */}
        <h1 className="text-2xl md:text-4xl py-8 font-medium">
          {t('app.works.title')}
        </h1>
        <h1 className="font-bold">{t(`app.works.list.current`)}</h1>
        <ScrollArea className="w-full whitespace-nowrap rounded-md">
          <div className="flex w-max space-x-4 pt-2">
            {currentWorksNote.postsProperties.map(
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
        <Button href="/works" as={Link} variant="light">
          {t('app.about.view_all')}　
          <FaArrowRight size={40} />
        </Button>

        {/* NOTE */}
        <h1 className="text-2xl md:text-4xl py-8 font-medium">
          {t('app.note.title')}
        </h1>
        <h1 className="font-bold">{t(`app.note.list.current`)}</h1>
        <ScrollArea className="w-full whitespace-nowrap rounded-md">
          <div className="flex w-max space-x-4 pt-2">
            {currentPostsNote.postsProperties.map(
              (post: NotionPost, index: number) => (
                <PostCard post={post} index={index} dbName="note" key={index} />
              )
            )}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
        <Button href="/note" as={Link} variant="light">
          {t('app.about.view_all')}　
          <FaArrowRight size={40} />
        </Button>
      </main>
    </div>
  );
}
