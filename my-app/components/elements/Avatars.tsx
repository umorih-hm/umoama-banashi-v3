import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';

import { Avatar, Tooltip } from '@nextui-org/react';

export const Avatars = ({ dbName }: AvatarsProps) => {
  const { t } = useTranslation('common');

  const people = [
    {
      name: 'UMORiH',
    },
    {
      name: 'AMANERiY',
    },
  ];

  return (
    <div className="flex lg:flex-col gap-3">
      {people.map((person, index) => {
        return (
          <Tooltip
            content={person.name}
            placement="left"
            color="warning"
            key={index}
          >
            <div className="mx-auto">
              <Link href={`/${dbName}/person?person=${person.name}`}>
                <Avatar
                  src={
                    person.name === 'UMORiH' ? '/Umorih.png' : '/Amaneriy.png'
                  }
                />
              </Link>
            </div>
          </Tooltip>
        );
      })}
    </div>
  );
};
