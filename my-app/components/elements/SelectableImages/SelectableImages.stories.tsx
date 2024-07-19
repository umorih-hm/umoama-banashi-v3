import { SelectableImages } from './SelectableImages';

export default {
  title: 'SelectableImages',
  component: SelectableImages,
};

const post = {
  id: '1',
  title: '',
  subTitle: '',
  publishedDate: '2024-06-24',
  updatedDate: '2024-07-16',
  image: '/note.png',
  images: ['/note.png', '/map.png', '/works.png'],
  tags: [],
  person: 'UMORiH',
};

export const Base = () => <SelectableImages post={post} />;
