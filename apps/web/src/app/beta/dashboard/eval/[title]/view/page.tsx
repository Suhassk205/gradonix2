import DetailView from "@/components/pages/beta/dashboard/eval/DetailView";

const Page = async ({ params }: { params: Promise<{ title: string }> }) => {
  const { title } = await params;
  return (
    <>
      <DetailView title={title} />
    </>
  );
};
export default Page;
