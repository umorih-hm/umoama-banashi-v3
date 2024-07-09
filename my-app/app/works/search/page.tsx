import { SearchPageList } from '@/components/elements/SearchPageList';

export default async function Search({
  searchParams,
}: {
  searchParams: { keyword: string };
}) {
  return (
    <SearchPageList
      dbName="works"
      keyword={searchParams.keyword}
    ></SearchPageList>
  );
}
