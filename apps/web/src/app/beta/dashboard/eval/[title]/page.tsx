import { redirect } from "next/navigation";

const Page = async ({ params }: { params: Promise<{ title: string }> }) => {
  const { title } = await params;
  return redirect(`/beta/dashboard/eval/${title}/view`);
};
export default Page;
