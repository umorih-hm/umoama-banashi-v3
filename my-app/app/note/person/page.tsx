import { PersonPageList } from '@/components/elements/PersonPageList/PersonPageList';

export default async function Page({
  searchParams,
}: {
  searchParams: { person: string };
}) {
  return (
    <PersonPageList dbName="note" person={searchParams.person}></PersonPageList>
  );
}
