import { PostCard } from './PostCard';

export default {
  title: 'PostCard',
  component: PostCard,
};

const postUmorih = {
  id: '1',
  title: 'PostCard sample1',
  subTitle: 'sample1 です。',
  publishedDate: '2024-06-24',
  updatedDate: '2024-07-10',
  image: '/note.png',
  tags: [''],
  person: 'UMORiH',
};

const postAmaneriy = {
  id: '2',
  title: 'PostCard sample2',
  subTitle: 'sample2 です。',
  publishedDate: '2024-06-24',
  updatedDate: '2024-07-10',
  image: '/note.png',
  tags: [''],
  person: 'AMANERiY',
};

export const Umorih = () => (
  <PostCard post={postUmorih} index="1" dbName="note" />
);
export const Amaneriy = () => (
  <PostCard post={postAmaneriy} index="2" dbName="note" />
);
