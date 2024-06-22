import { notion } from './notion';

export async function getPageInfo(pageId: string): Promise<NotionPost> {
  const response = await notion.pages.retrieve({ page_id: pageId });
  const post = response.properties;

  // id
  const id = post.id;
  // title
  const title = post.Title.title[0]?.plain_text;
  // subTitle
  const subTitle = post.SubTitle.rich_text[0]?.plain_text;
  // date
  const date = post.Date.date.start;
  // image
  const image = post.Image.files[0]?.file.url;
  // tags
  const tags = post.Tags.multi_select.map((item: any) => item.name);
  // person
  const person = post.Person.select.name;

  // プロパティをまとめたオブジェクトを返す
  return { id, title, subTitle, date, image, tags, person };
}
