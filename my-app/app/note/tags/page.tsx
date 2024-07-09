import { TagPageList } from '@/components/elements/TagPageList';

export default async function Tag({
  searchParams,
}: {
  searchParams: { tag: string };
}) {
  return <TagPageList dbName="note" tag={searchParams.tag}></TagPageList>;
}
