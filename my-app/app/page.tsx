import { Button } from "@nextui-org/react";
import useTranslation from 'next-translate/useTranslation';

export default function Home() {
  const { t } = useTranslation('common');

  return (
    <div className="container mx-auto min-h-screen">
      <main className="flex bg-background flex-col items-center justify-center p-8 lg:w-5/6 mx-auto">

        {/* video */}
        <video src="/logo_mic.mp4" muted loop autoPlay width="200"></video>

        {/* topic */}
        <h1 className="text-md md:text-xl font-bold mb-6">{t('app.top.topic')}</h1>

        {/* umoama contents */}
        <h1 className="text-md md:text-xl font-bold mb-6">{t('app.top.umoama_contents')}</h1>

        {/* member */}
        <h1 className="text-md md:text-xl font-bold mb-6">{t('app.top.member.title')}</h1>
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
