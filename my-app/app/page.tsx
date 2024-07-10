import { Button } from '@nextui-org/react';
import { Content } from '@/components/elements/Content';
import useTranslation from 'next-translate/useTranslation';

export default function Home() {
  const { t } = useTranslation('common');

  return (
    <div className="container mx-auto min-h-screen">
      <main className="flex flex-col gap-4 bg-background items-center justify-center p-8 w-full md:w-5/6 lg:w-4/6 mx-auto">
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
        <div className="flex gap-2 md:gap-8 justify-center">
          <Button
            variant="bordered"
            className="gap-0 font-bold block w-[150px] md:w-[300px] h-[100px] md:h-[220px]"
          >
            <span className="text-umorih m-0 text-2xl md:text-4xl">
              {t('app.top.member.umo')}
            </span>
            <span className="text-2xl md:text-4xl">
              {t('app.top.member.rih')}
            </span>
            <br></br>
            <p className="text-center mt-1">{t('app.top.member.umorih_ja')}</p>
          </Button>
          <Button
            variant="bordered"
            className="gap-0 font-bold block w-[150px] md:w-[300px] h-[100px] md:h-[220px]"
          >
            <span className="text-amaneriy m-0 text-2xl md:text-4xl">
              {t('app.top.member.ama')}
            </span>
            <span className="text-2xl md:text-4xl">
              {t('app.top.member.neriy')}
            </span>
            <br />
            <p className="text-center mt-1">
              {t('app.top.member.amaneriy_ja')}
            </p>
          </Button>
        </div>
      </main>
    </div>
  );
}
