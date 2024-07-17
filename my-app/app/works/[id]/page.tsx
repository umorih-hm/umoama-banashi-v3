import { PageByPageId } from '@/components/elements/PageByPageId';

export default async function Page({ params }: { params: { id: string } }) {
  return <PageByPageId dbName="works" id={params.id}></PageByPageId>;
}
