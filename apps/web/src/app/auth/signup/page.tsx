import EmailVerification from "@/components/pages/auth/signup/EmailVerification";
import { Metadata } from "next";

import "@/styles/auth/page.css";

export const metadata: Metadata = {
  title: "Signup to Gradonix",
  description: "Get started with Gradonix",
};
const Page = () => {
  return (
    <>
      <EmailVerification />
    </>
  );
};
export default Page;
