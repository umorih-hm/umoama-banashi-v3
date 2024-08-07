import { notion } from './notion';
import { NotionToMarkdown } from 'notion-to-md';
import lib from 'zenn-markdown-html';
import { JSDOM } from 'jsdom';

const n2m = new NotionToMarkdown({ notionClient: notion });

export async function getPageContent(pageId: string) {
  const mdblocks = await n2m.pageToMarkdown(pageId, 2);

  for (let i = 0; i < mdblocks.length; ++i) {
    // type が embed の場合、
    if ((mdblocks[i].type = 'embed')) {
      if (mdblocks[i].parent.indexOf('twitter') !== -1) {
        mdblocks[i].parent = mdblocks[i].parent.replace('[embed]', '@[tweet]');
      } else if (mdblocks[i].parent.indexOf('maps') !== -1) {
        mdblocks[i].parent = mdblocks[i].parent.replace('[embed]', '@[gist]');
      }
    }

    // type が bookmark の場合、
    if ((mdblocks[i].type = 'bookmark')) {
      mdblocks[i].parent = mdblocks[i].parent.replace('[bookmark]', '@[card]');
    }
    // type が video の場合、
    if ((mdblocks[i].type = 'video')) {
      mdblocks[i].parent = mdblocks[i].parent.replace('[video]', '@[youtube]');
    }
  }
  const response = n2m.toMarkdownString(mdblocks);

  const markdownToHtml = lib.default ? lib.default : lib;
  const content = markdownToHtml(response.parent, {
    embedOrigin: 'https://embed.zenn.studio',
    customEmbed: {
      gist(url) {
        return `
        <iframe id="googleMap" src="${url}" width="600" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      `;
      },
    },
  });

  return content;
}
