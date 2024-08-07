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
      isDisabled: true,
    },
    {
      title: t('app.layout.note'),
      to: '/note',
      isDisabled: false,
    },
    {
      title: t('app.layout.map'),
      to: '/',
      isDisabled: true,
    },
    {
      title: t('app.layout.works'),
      to: '/works',
      isDisabled: false,
    },
    {
      title: t('app.layout.about'),
      to: '/about',
      isDisabled: false,
    },
    {
      title: t('app.layout.contact'),
      to: '/',
      isDisabled: true,
    },
  ];

  return (
    <div>
      <Navbar isBordered className="bg-background py-6">
        <div className="flex flex-col mx-auto">
          <NavbarContent className="mx-auto">
            <Link href="/">
              <Image width={200} alt="NextUI hero Image" src="/logo.svg" />
            </Link>
          </NavbarContent>
          <NavbarContent className="gap-4 pt-2">
            {header.map((item, index) => {
              return (
                <NavbarItem key={index}>
                  <Link
                    href={item.to}
                    isDisabled={item.isDisabled}
                    className="text-sm sm:text-base"
                  >
                    {item.title}
                  </Link>
                </NavbarItem>
              );
            })}
          </NavbarContent>
        </div>
      </Navbar>
    </div>
  );
};
