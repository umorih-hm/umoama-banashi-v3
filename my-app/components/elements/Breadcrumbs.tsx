'use client';

import {
  Breadcrumbs,
  BreadcrumbItem,
} from '@nextui-org/react';

interface BreadcrumbsProps {
  links: Breadcrumb[];
}

export const Breadcrumb = ({links} : BreadcrumbsProps) => {
  return (
    <Breadcrumbs size='lg'>
      {links.map((item, index) => {
        return (
          <BreadcrumbItem key={index} href={item.href}>{item.title}</BreadcrumbItem>
        );
      })}
    </Breadcrumbs>
  );
};
