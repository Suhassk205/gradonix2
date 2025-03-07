import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const Page = async () => {
  const cookieStore = await cookies();
  if (cookieStore.has("refresh_token")) {
    redirect("/beta/dashboard");
  }
};
export default Page;
