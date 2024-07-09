import { SearchPageList } from '@/components/elements/SearchPageList';

export default async function Search({
  searchParams,
}: {
  searchParams: { keyword: string };
}) {
  return (
    <SearchPageList
      dbName="note"
      keyword={searchParams.keyword}
    ></SearchPageList>
  );
}
