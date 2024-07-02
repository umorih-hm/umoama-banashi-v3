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
      headingsOffset: 30,
      scrollSmoothOffset: -30,
    });

    // 不要となったtocbotインスタンスを削除
    return () => tocbot.destroy();
  }, []);

  return (
    <div className="sticky top-0 pt-8">
      <div className="toc px-0 pb-8 text-base"></div> {/* 目次の表示部分 */}
    </div>
  );
};
