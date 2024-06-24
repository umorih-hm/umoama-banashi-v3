'use client';

import { useEffect } from 'react';
import tocbot from 'tocbot';

export const Toc = () => {
  useEffect(() => {
    tocbot.init({
      tocSelector: '.toc', //　目次を追加する class 名
      contentSelector: '.content', // 目次を取得するコンテンツの class 名
      headingSelector: 'h1, h2, h3', // 目次として取得する見出しタグ
      headingsOffset: 70,
      scrollSmoothOffset: -70,
    });

    // 不要となったtocbotインスタンスを削除
    return () => tocbot.destroy();
  }, []);

  return <nav className="toc" />;
};
