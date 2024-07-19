'use client';

import { useState } from 'react';
import NextImage from 'next/image';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import useTranslation from 'next-translate/useTranslation';
import { SelectableImagesProps } from '@/types/umoama';

export const SelectableImages = ({ post }: SelectableImagesProps) => {
  const { t } = useTranslation('common');
  const [currentImage, setState] = useState('');

  const SelectableImages = (imageUrl: string) => {
    setState(imageUrl);
  };

  return (
    <div className="flex flex-col lg:flex-row w-full mb-4">
      <div className="w-2/12"></div>
      {/* 大画像 */}
      <div className="w-full lg:w-8/12 relative h-[300px]">
        <NextImage
          fill
          alt={post.title}
          className="rounded-lg object-contain"
          src={currentImage ? currentImage : post.image}
          unoptimized
        />
      </div>

      {/* 小画像郡 */}
      <div className="w-full lg:w-2/12 lg:h-[300px]">
        <ScrollArea className="w-full whitespace-nowrap rounded-md lg:h-full">
          <div className="flex flex-row lg:flex-col lg:h-full gap-2 w-max mx-auto mt-2">
            {post.images?.map((imageUrl: string, index: number) => (
              <div key={index} className="my-auto">
                <NextImage
                  width="100"
                  height="60"
                  alt={post.title}
                  className="rounded-lg hover:opacity-50"
                  src={imageUrl ? imageUrl : 'https://placehold.jp/200x150.png'}
                  unoptimized
                  onClick={(e) => SelectableImages(imageUrl)}
                />
              </div>
            ))}
          </div>
          <ScrollBar orientation="horizontal" forceMount />
        </ScrollArea>
      </div>
    </div>
  );
};
