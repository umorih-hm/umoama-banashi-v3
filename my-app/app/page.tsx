import Link from 'next/link';
import NextImage from 'next/image';
import { Button } from '@nextui-org/react';
import { Content } from '../components/elements/Content';
import useTranslation from 'next-translate/useTranslation';

export default function Home() {
  const { t } = useTranslation('common');

  return (
    <div className="container mx-auto min-h-screen">
      <main className="flex bg-background flex-col items-center justify-center p-8 w-full md:w-5/6 lg:w-4/6 mx-auto">
        {/* video */}
        <video src="/logo_mic.mp4" muted loop autoPlay width="200"></video>

        {/* topic */}
        <h1 className="text-md md:text-xl font-bold mb-6">
          {t('app.top.topic')}
        </h1>

        {/* umoama contents */}
        <h1 className="text-md md:text-xl font-bold mb-6">
          {t('app.top.umoama_contents.title')}
        </h1>

        {/* UMOAMA NOTE */}
        <div className="py-4 w-full">
          <Content
            imageSrc="/note.png"
            title={t('app.top.umoama_contents.note.title')}
            navigation={t('app.top.umoama_contents.note.navigation')}
            href="/note"
          />
        </div>

        {/* UMOAMA MAP */}
        <div className="py-4 w-full">
          <Content
            imageSrc="/map.png"
            title={t('app.top.umoama_contents.map.title')}
            navigation={t('app.top.umoama_contents.map.navigation')}
            href="/"
          />
        </div>

        {/* UMOAMA WORKS */}
        <div className="py-4 w-full">
          <Content
            imageSrc="/works.png"
            title={t('app.top.umoama_contents.works.title')}
            navigation={t('app.top.umoama_contents.works.navigation')}
            href="/works"
          />
        </div>

        {/* member */}
        <h1 className="text-md md:text-xl font-bold mb-6">
          {t('app.top.member.title')}
        </h1>
        <div className="flex gap-4 justify-center">
          <Button color="success" variant="bordered">
            {t('app.top.member.umorih')}
          </Button>
          <Button color="danger" variant="bordered">
            {t('app.top.member.amaneriy')}
          </Button>
        </div>
      </main>
    </div>
  );
}
