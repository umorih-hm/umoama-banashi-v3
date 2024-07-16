interface NotionPost {
  id: string;
  title: string;
  subTitle: string;
  publishedDate: string;
  updatedDate: string;
  image: string;
  images?: string[];
  tags: string[];
  person: string;
}
