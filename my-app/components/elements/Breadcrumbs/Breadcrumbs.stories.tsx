import { Breadcrumb } from './Breadcrumbs';

export default {
  title: 'Breadcrumbs',
  component: Breadcrumb,
};

const sampleLinks: Breadcrumb[] = [
  {
    title: 'Home',
    href: '/',
  },
  {
    title: 'link1',
    href: `/link1`,
  },
  {
    title: 'link2',
    href: `/link2`,
  },
];

export const links = () => <Breadcrumb links={sampleLinks}></Breadcrumb>;
