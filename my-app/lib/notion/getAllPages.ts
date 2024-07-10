import { notion } from './notion';
import { formatDate } from '@/lib/date';

export async function getAllPages(
  dbName: 'note' | 'works',
  person?: string,
  keyword?: string,
  tag?: string
): Promise<{ postsProperties: NotionPost[]; tags: string[] }> {
  // dbName から databaseId を抽出
  let dataBaseId: string;
  switch (dbName) {
    case 'note':
      dataBaseId = process.env.DATABASE_ID_NOTE ?? '';
      break;
    case 'works':
      dataBaseId = process.env.DATABASE_ID_WORKS ?? '';
      break;
    default:
      dataBaseId = '';
      break;
  }

  const response = await notion.databases.query({
    database_id: dataBaseId,
    sorts: [
      {
        property: 'PublishedDate',
        direction: 'descending',
      },
    ],
    filter: {
      and: [
        {
          property: 'Status',
          select: {
            equals: 'PUBLISH',
          },
        },
        {
          property: 'Person',
          select: {
            equals: person ?? '',
          },
        },
        {
          property: 'Tags',
          multi_select: {
            contains: tag ?? '',
          },
        },
        {
          or: [
            {
              property: 'Title',
              rich_text: {
                contains: keyword ?? '',
              },
            },
            {
              property: 'Summary',
              rich_text: {
                contains: keyword ?? '',
              },
            },
            {
              property: 'Tags',
              multi_select: {
                contains: keyword ?? '',
              },
            },
          ],
        },
      ],
    },
  });

  const posts = response.results;
  const allTags: string[] = [];
  const postsProperties = posts.map((post: any) => {
    // id
    const id = post.id;
    // title
    const title = post.properties.Title.title[0]?.plain_text;
    // subTitle
    const subTitle = post.properties.SubTitle.rich_text[0]?.plain_text ?? '';
    // publishedDate
    const publishedDate = post.properties.PublishedDate.date.start;
    // updatedDate
    const updatedDate = formatDate(
      post.properties.UpdatedDate.last_edited_time,
      'YYYY-MM-DD'
    );
    // image
    const image = post.properties.Image.files[0]?.file.url;
    // tags
    const tags = post.properties.Tags.multi_select.map(
      (item: any) => item.name
    );
    post.properties.Tags.multi_select.forEach((tag: any) =>
      allTags.push(tag.name)
    );
    // person
    const person = post.properties.Person.select.name;

    // プロパティをまとめたオブジェクトを返す
    return {
      id,
      title,
      subTitle,
      publishedDate,
      updatedDate,
      image,
      tags,
      person,
    };
  });

  return {
    postsProperties: postsProperties,
    tags: allTags,
  };
}
