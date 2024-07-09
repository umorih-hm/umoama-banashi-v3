type = 'note' | 'works';

interface Breadcrumb {
  title: string;
  href: string;
}

interface BreadcrumbsProps {
  links: Breadcrumb[];
}

interface ContentProps {
  imageSrc: string;
  title: string;
  navigation: string;
  href: string;
}

interface PageProps {
  dbName: dbName;
  id: string;
}

interface PageListProps {
  dbName: dbName;
}

interface PostCardProps {
  post: NotionPost;
  index: number;
  dbName: dbName;
}

interface searchButtonProps {
  dbName: dbName;
}

interface SearchPageListProps {
  dbName: dbName;
  keyword: string;
}

interface TagPageListProps {
  dbName: dbNames;
  tag: string;
}

interface SideBarProps {
  dbName: dbNames;
  activeTag: string;
}
