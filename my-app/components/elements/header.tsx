import {
  Navbar,
  NavbarContent,
  NavbarItem,
  Image,
  Link,
} from '@nextui-org/react';
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
      title: t('app.layout.note'),
      to: '/note',
    },
    {
      title: t('app.layout.map'),
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
  ];

  return (
    <div>
      <Navbar isBordered className="bg-background py-2">
        <NavbarContent className="mx-auto ">
          <Link href="/">
            <Image width={200} alt="NextUI hero Image" src="/logo.svg" />
          </Link>
        </NavbarContent>
        <NavbarContent className="gap-4 mx-auto">
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
