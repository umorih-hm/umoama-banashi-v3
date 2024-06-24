import Link from 'next/link';
import { Navbar, NavbarContent, NavbarItem, Image } from '@nextui-org/react';
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
    <div>
      <Navbar
        isBordered
        shouldHideOnScroll
        className="bg-background flex flex-col py-2"
      >
        <NavbarContent className="mx-auto">
          <Link href="/">
            <Image width={200} alt="NextUI hero Image" src="/logo.svg" />
          </Link>
        </NavbarContent>
        <NavbarContent className="gap-4 mx-auto mb-2">
          {header.map((item, index) => {
            return (
              <NavbarItem key={index}>
                <Link href={item.to}>{item.title}</Link>
              </NavbarItem>
            );
          })}
        </NavbarContent>
      </Navbar>
    </div>
  );
};
