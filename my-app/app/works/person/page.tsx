import { PersonPageList } from '@/components/elements/PersonPageList/PersonPageList';

export default async function Page({
  searchParams,
}: {
  searchParams: { person: string };
}) {
  return (
    <PersonPageList
      dbName="works"
      person={searchParams.person}
    ></PersonPageList>
  );
}
