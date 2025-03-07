import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const Layout = async ({ children }: { children: React.ReactNode }) => {
  const cookieStore = await cookies();
  if (!cookieStore.has("refresh_token")) {
    redirect("/auth");
  }
  return (
    <>
      <main>{children}</main>
    </>
  );
};
export default Layout;
