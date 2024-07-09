'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import useTranslation from 'next-translate/useTranslation';
import { Input } from '@nextui-org/react';

export const SearchButton = ({ dbName }: searchButtonProps) => {
  const { t } = useTranslation('common');
  const [keyword, setQuery] = useState('');
  const router = useRouter();

  const submit = (event: any) => {
    if (event.key === 'Enter' && !!keyword.length) {
      switch (dbName) {
        case 'note':
          router.replace(`/note/search?keyword=${keyword}`);
          break;
        case 'works':
          router.replace(`/works/search?keyword=${keyword}`);
          break;
      }
    }
  };

  return (
    <Input
      label={t('component.search_button.label')}
      isClearable
      radius="lg"
      variant="bordered"
      className="max-w-[300px]"
      value={keyword}
      onChange={(e) => setQuery(e.target.value)}
      onKeyDown={submit}
    ></Input>
  );
};
