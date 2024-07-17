import { SelectableImages } from '@/components/elements/SelectableImages';
type dbName = 'note' | 'works';
type people = 'UMORiH' | 'AMANERiY';

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

interface PersonPageListProps {
  dbName: dbName;
  person: string;
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
  activePerson: string;
}

interface AvatarsProps {
  dbName: dbNames;
  activePerson: string;
}

interface SelectableImagesProps {
  post: NotionPost;
}

interface AboutCardProps {
  person: people;
}
