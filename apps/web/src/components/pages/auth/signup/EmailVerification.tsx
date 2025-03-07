"use client";
import { fetchAuth, handleAuthResponse } from "@/utils/server/auth";
import { authResData } from "@/utils/types/authResData";
import { motion } from "motion/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { EmailInput } from "../AuthInputs";
import ButtonInput from "../ButtonInput";

const EmailVerification = () => {
  const router = useRouter();
  const [credentials, setCredentials] = useState({
    email: "",
  });
  const [resData, setResData] = useState<authResData>({
    success: false,
    error: {
      email: "",
    },
  });
  useEffect(() => {
    if (resData.success) {
      console.log("email sent");
    }
  }, [resData]);
  return (
    <>
      <motion.section className="auth" layout="position">
        <motion.div className="auth-card" layout="size">
          <h1 className="auth-title">Sign Up</h1>
          <EmailInput
            label="Email"
            defaultValue={credentials.email}
            isDisabled={false}
            onInput={(e) => {
              const value = (e.target as HTMLInputElement).value;
              setCredentials((prev) => ({
                ...prev,
                email: value,
              }));
              setResData((prev) => {
                return {
                  ...prev,
                  error: {
                    ...prev.error,
                    email: "",
                  },
                };
              });
            }}
            errTxt={resData.error.email as string}
          />
          <ButtonInput
            label="Continue"
            onInput={async (e) => {
              const value = (e.target as HTMLInputElement).value;
              setCredentials((prev) => ({
                ...prev,
                email: value,
              }));
              const sendEmail = await fetchAuth("/auth/sign-up/verify", {
                email: credentials.email,
              });

              handleAuthResponse(sendEmail, router, setResData);

              // setResData(resJson.resData);
            }}
          />
          <div>
            <p className="signin-link">
              Have an account already?
              <Link href={"/auth/signin"} prefetch>
                Sign In
              </Link>
            </p>
          </div>
        </motion.div>
      </motion.section>
    </>
  );
};

export default EmailVerification;
