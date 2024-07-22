import useTranslation from 'next-translate/useTranslation';
import { BsTwitterX } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { SiQiita } from 'react-icons/si';

import { Avatar, Button, Link } from '@nextui-org/react';

export const AboutCard = ({ person }: AboutCardProps) => {
  const { t } = useTranslation('common');
  return (
    <div
      id="amaneriy"
      className="border-2 rounded-xl border-black w-full py-12"
    >
      <div className="flex flex-col md:flex-row w-full">
        <div className="w-full md:w-3/6">
          <Avatar
            src={person === 'UMORiH' ? '/Umorih.png' : '/Amaneriy.png'}
            isBordered
            className="w-[180px] md:w-[300px] h-[180px] md:h-[300px] mx-auto bg-transparent"
          />
        </div>
        <div className="w-full md:w-3/6 text-center md:text-start pt-4 md:pt-0">
          <h6 className="text-1xl sm:text-2xl">
            {person === 'UMORiH'
              ? t('app.about.umorih_ja')
              : t('app.about.amaneriy_ja')}
          </h6>
          <h1 className="font-bold">
            {person === 'UMORiH' ? (
              <>
                <span className="text-umorih m-0 text-4xl md:text-6xl lg:text-8xl">
                  {t('app.about.umo')}
                </span>
                <span className="text-4xl md:text-6xl lg:text-8xl">
                  {t('app.about.rih')}
                </span>
              </>
            ) : (
              <>
                <span className="text-amaneriy m-0 text-4xl md:text-6xl lg:text-8xl">
                  {t('app.about.ama')}
                </span>
                <span className="text-4xl md:text-6xl lg:text-8xl">
                  {t('app.about.neriy')}
                </span>
              </>
            )}
          </h1>
          <div className="w-full flex gap-2 pt-4">
            <div className="mx-auto md:mx-0">
              {person === 'UMORiH' ? (
                <>
                  {/* X アイコン */}
                  <Button
                    href="https://twitter.com/umorih_hm"
                    as={Link}
                    target="_blank"
                    isIconOnly
                    radius="full"
                    variant="bordered"
                    className="w-[80px] h-[80px] bg-transparent"
                  >
                    <BsTwitterX size={40} />
                  </Button>

                  {/* Github アイコン */}
                  <Button
                    href="https://github.com/umorih-hm"
                    as={Link}
                    target="_blank"
                    isIconOnly
                    radius="full"
                    variant="bordered"
                    className="w-[80px] h-[80px] bg-transparent"
                  >
                    <FaGithub size={40} />
                  </Button>

                  {/* Qiita アイコン */}
                  <Button
                    href="https://qiita.com/umorih-hm"
                    as={Link}
                    target="_blank"
                    isIconOnly
                    radius="full"
                    variant="bordered"
                    className="w-[80px] h-[80px] bg-transparent"
                  >
                    <SiQiita size={40} />
                  </Button>
                </>
              ) : (
                <>
                  {/* X アイコン */}
                  <Button
                    href="https://twitter.com/mocci_piazza"
                    as={Link}
                    target="_blank"
                    isIconOnly
                    radius="full"
                    variant="bordered"
                    className="w-[80px] h-[80px] bg-transparent"
                  >
                    <BsTwitterX size={40} />
                  </Button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
