import { notion } from './notion';
import { formatDate } from '@/lib/date';

export async function getPageInfo(pageId: string): Promise<NotionPost> {
  const response = await notion.pages.retrieve({ page_id: pageId });
  const post = response.properties;

  // id
  const id = post.id;
  // title
  const title = post.Title.title[0]?.plain_text;
  // subTitle
  const subTitle = post.SubTitle.rich_text[0]?.plain_text ?? '';
  // publishedDate
  const publishedDate = post.PublishedDate.date.start;
  // updatedDate
  const updatedDate = formatDate(
    post.UpdatedDate.last_edited_time,
    'YYYY-MM-DD'
  );
  // image
  const image = post.Image.files[0]?.file.url;
  // images
  const images = post.Image.files.map((item: any) => item.file.url);
  // tags
  const tags = post.Tags.multi_select.map((item: any) => item.name);
  // person
  const person = post.Person.select.name;

  // プロパティをまとめたオブジェクトを返す
  return {
    id,
    title,
    subTitle,
    publishedDate,
    updatedDate,
    image,
    images,
    tags,
    person,
  };
}
