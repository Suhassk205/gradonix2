import ResultPage from "@/components/pages/beta/dashboard/eval/ResultPage";

const Page = async ({ params }: { params: Promise<{ title: string }> }) => {
  const { title } = await params;
  return (
    <>
      <ResultPage title={title} />
    </>
  );
};
export default Page;
