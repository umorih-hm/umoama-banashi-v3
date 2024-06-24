import Link from 'next/link';
import { Navbar, NavbarContent, NavbarItem, Image } from '@nextui-org/react';
import useTranslation from 'next-translate/useTranslation';

export const Footer = () => {
  const { t } = useTranslation('common');

  return (
    <div className="w-full">
      <Navbar className="bg-black ">
        <NavbarContent className="py-4">
          <p className="text-white mx-auto">
            {t('app.layout.footer.copyright')}
          </p>
        </NavbarContent>
      </Navbar>
    </div>
  );
};
