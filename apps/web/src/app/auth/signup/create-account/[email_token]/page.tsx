import CreateAccount from "@/components/pages/auth/signup/CreateAccount";
import { notFound } from "next/navigation";

import "@/styles/auth/page.css";
import { verifyJWTtoken } from "@/utils/services/jwtServices";

const Page = async ({
  params,
}: {
  params: Promise<{ email_token: string }>;
}) => {
  let email: string = "";
  const { email_token } = await params;
  const decoded: object | boolean = verifyJWTtoken(email_token) as
    | object
    | boolean;

  if (typeof decoded === "object" && "email" in decoded) {
    email = decoded.email as string;
  } else {
    notFound();
  }
  return (
    <>
      <CreateAccount email={email} />
    </>
  );
};
export default Page;
