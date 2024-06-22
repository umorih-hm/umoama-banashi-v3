import Link from "next/link"
import Image from "next/image"
import useTranslation from 'next-translate/useTranslation';

export const Header = () => {
  const { t } = useTranslation('common');

  // ヘッダーコンテンツ
  const header = [
    {
      title: t('app.layout.news'),
      to: '/',
    },
    {
      title: t('app.layout.learn'),
      to: '/',
    },
    {
      title: t('app.layout.gourmet'),
      to: '/',
    },
    {
      title: t('app.layout.walk'),
      to: '/',
    },
    {
      title: t('app.layout.about'),
      to: '/',
    },
    {
      title: t('app.layout.contact'),
      to: '/',
    },
    {
      title: t('app.layout.blog'),
      to: '/blog',
    },
  ];


  return (
    <header className="flex flex-col items-center justify-between p-4 border-b">
      <div className="flex items-center gap-2 mb-2 text-lg font-semibold">
        <Link href="/" className="flex items-center gap-2" prefetch={false}>
          <Image width={200} height="200" alt="NextUI hero Image" src="/logo.svg" />
        </Link>
      </div>
      <nav className="hidden md:flex items-center gap-6">
        {header.map((item) => {
          return (
              <Link href={item.to} className="text-slate-500">{item.title}</Link>
          );
        })}
      </nav>
    </header>
  )
}