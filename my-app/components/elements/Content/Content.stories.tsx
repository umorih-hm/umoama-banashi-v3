import { Content } from './Content';

export default {
  title: 'Content',
  component: Content,
};

export const Note = () => (
  <Content
    imageSrc="/note.png"
    title="note"
    navigation="これは note の Content です。"
    href="/note"
  />
);
