import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import React from "react";

import "@/styles/auth/layout.css";
import "@/styles/globals.css";

const AuthLayout = async ({ children }: { children: React.ReactNode }) => {
  const cookieStore = await cookies();
  if (cookieStore.has("refresh_token")) {
    redirect("/");
  }
  return (
    <>
      <main>{children}</main>
    </>
  );
};

export default AuthLayout;
