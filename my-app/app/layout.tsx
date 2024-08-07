import type { Metadata } from 'next';
import { Providers } from './uiProvider';
import { Zen_Kaku_Gothic_New } from 'next/font/google';
import './globals.css';

import { Header } from '@/components/elements/Header/Header';
import { Footer } from '@/components/elements/Footer/Footer';

const ZenKakuGothicNew = Zen_Kaku_Gothic_New({
  display: 'swap',
  weight: ['300', '400', '500', '700', '900'],
  preload: false,
});

export const metadata: Metadata = {
  title: 'UMOAMA ばなし',
  description: 'UMORiH と AMANERiY による UMOAMA ばなし',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={ZenKakuGothicNew.className}>
        <Providers>
          <Header></Header>
        </Providers>
        <Providers>{children}</Providers>
        <Footer></Footer>
      </body>
    </html>
  );
}
