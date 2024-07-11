import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';

import { Avatar, Tooltip } from '@nextui-org/react';

export const Avatars = ({ dbName, activePerson }: AvatarsProps) => {
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
    <div className="flex lg:flex-col gap-3 py-1">
      {people.map((person, index) => {
        return (
          <Tooltip
            content={person.name}
            placement="left"
            color="warning"
            key={index}
            className="text-white"
          >
            <div className="mx-auto hover:opacity-50">
              <Link href={`/${dbName}/person?person=${person.name}`}>
                <Avatar
                  src={
                    person.name === 'UMORiH' ? '/Umorih.png' : '/Amaneriy.png'
                  }
                  isBordered={activePerson === person.name ? true : false}
                  color={activePerson === person.name ? 'success' : undefined}
                  className="bg-slate-300"
                />
              </Link>
            </div>
          </Tooltip>
        );
      })}
    </div>
  );
};
