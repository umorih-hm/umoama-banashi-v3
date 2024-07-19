import Link from 'next/link';
import NextImage from 'next/image';
import useTranslation from 'next-translate/useTranslation';

export const Content = ({
  imageSrc,
  title,
  navigation,
  href,
}: ContentProps) => {
  const { t } = useTranslation('common');

  return (
    <div>
      <div className="sm:flex sm:gap-12">
        <div>
          <Link href={href}>
            <NextImage
              width="405"
              height="256"
              alt=""
              className="block mx-auto rounded-lg hover:opacity-80"
              src={imageSrc}
              unoptimized
            />
          </Link>
        </div>
        <div className="mt-2 sm:m-0">
          <h1 className="font-bold pb-2">{title}</h1>
          <p className="whitespace-pre-wrap">{navigation}</p>
        </div>
      </div>
    </div>
  );
};
