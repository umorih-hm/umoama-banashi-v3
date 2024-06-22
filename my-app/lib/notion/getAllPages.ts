import { notion } from './notion';

export async function getAllPages(): Promise<NotionPost[]> {
  const response = await notion.databases.query({
    database_id: process.env.DATABASE_ID,
    sorts: [
      {
        property: 'Date',
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
      ],
    },
  });

  const posts = response.results;
  const postsProperties = posts.map((post: any) => {
    // id
    const id = post.id;
    // title
    const title = post.properties.Title.title[0]?.plain_text;
    // subTitle
    const subTitle = post.properties.SubTitle.rich_text[0]?.plain_text;
    // date
    const date = post.properties.Date.date.start;
    // image
    const image = post.properties.Image.files[0]?.file.url;
    // tags
    const tags = post.properties.Tags.multi_select.map(
      (item: any) => item.name
    );
    // person
    const person = post.properties.Person.select.name;

    // プロパティをまとめたオブジェクトを返す
    return { id, title, subTitle, date, image, tags, person };
  });

  return postsProperties;
}