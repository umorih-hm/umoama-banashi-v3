import Link from 'next/link';
import NextImage from 'next/image';
import { Button } from '@nextui-org/react';
import useTranslation from 'next-translate/useTranslation';

interface ContentRequest {
  imageSrc: string;
  title: string;
  navigation: string
}

export const Content = ({ imageSrc, title, navigation }: ContentRequest) => {
  const { t } = useTranslation('common');

  return (
    <div>
      <div className='flex gap-12'>
        <div>
          <NextImage
              width="405"
              height="256"
              alt=""
              className="rounded-lg hover:opacity-80"
              src={imageSrc}
            />
          <Button
            radius="full"
            variant='bordered'
            className='block mx-auto mt-2'
          >
            {t('component.button.see_it')}
          </Button>
        </div>
        <div>
          <h1 className='font-bold pb-4'>{title}</h1>
          <p className="whitespace-pre-wrap">{navigation}</p>
        </div>
    </div>
  </div>
  );
};
