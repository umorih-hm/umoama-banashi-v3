'use client';

import { useEffect } from 'react';
import tocbot from 'tocbot';

export const Toc = () => {
  // 見出しへの id 付与
  const headingAddIds = () => {
    const targetContainer = document.querySelector('.contBody');
    if (!targetContainer) {
      return;
    }
    const targetHeadings = targetContainer.querySelectorAll('h2, h3');
    [].forEach.call(targetHeadings, (targetHeading: HTMLElement) => {
      const id = targetHeading.textContent;
      if (!targetHeading.getAttribute('id')) {
        targetHeading.setAttribute('id', String(id));
      }
    });
  };

  useEffect(() => {
    headingAddIds();
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

  return (
    <div>
      <nav className="toc" />;
    </div>
  );
};
