interface NotionPost {
  id: string;
  title: string;
  subTitle: string;
  date: string;
  image: string;
  tags: string[];
  person: string;
}

interface PostCardRequest {
  post: NotionPost;
  index: number;
}
