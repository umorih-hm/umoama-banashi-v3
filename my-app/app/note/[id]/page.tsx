import { PageByPageId } from '@/components/elements/PageByPageId/PageByPageId';

export default async function Page({ params }: { params: { id: string } }) {
  return <PageByPageId dbName="note" id={params.id}></PageByPageId>;
}
