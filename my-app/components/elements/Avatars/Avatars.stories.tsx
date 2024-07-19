import { Avatars } from './Avatars';

export default {
  title: 'Avatars',
  component: Avatars,
};

export const Umorih_Note = () => (
  <Avatars dbName="note" activePerson="UMORiH"></Avatars>
);
export const Amaneriy_Note = () => (
  <Avatars dbName="note" activePerson="AMANERiY"></Avatars>
);
export const Umorih_Works = () => (
  <Avatars dbName="works" activePerson="UMORiH"></Avatars>
);
export const Amaneriy_Works = () => (
  <Avatars dbName="works" activePerson="AMANERiY"></Avatars>
);
