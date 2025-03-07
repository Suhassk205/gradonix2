import EvalDash from "@/components/pages/beta/dashboard/EvalDash";

const dummyTable = [
  {
    title: "test001",
    status: "Queued",
  },
  {
    title: "test002",
    status: "Queued",
  },
  {
    title: "test003",
    status: "Queued",
  },
  {
    title: "test004",
    status: "Queued",
  },
];

const Page = async () => {
  return (
    <>
      <EvalDash />
    </>
  );
};

export default Page;
