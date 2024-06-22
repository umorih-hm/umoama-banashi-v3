import { Button } from "@/components/ui/button";
import useTranslation from 'next-translate/useTranslation';

export default function Home() {
  const { t } = useTranslation('common');

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <Button>{t('app.button.title')}</Button>
      </div>
    </main>
  );
}
