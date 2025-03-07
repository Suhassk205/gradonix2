"use client";
import { motion } from "motion/react";
import { useState } from "react";
import ButtonInput from "../ButtonInput";

import "@/styles/auth/page.css";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { EmailInput, PasswordInput } from "../AuthInputs";

const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;

const SignIn = () => {
  const router = useRouter();
  const [credentials, setCredentials] = useState({
    user: "",
    password: "",
  });

  const [resData, setResData] = useState({
    success: false,
    error: {
      user: "",
      password: "",
    },
  });
  return (
    <>
      <motion.section className="auth" layout="position">
        <motion.div className="auth-card" layout="size">
          <h1 className="auth-title">Sign In</h1>
          <EmailInput
            label="Email / Username"
            defaultValue={credentials.user}
            onInput={(e) => {
              const value = (e.target as HTMLInputElement).value;
              setCredentials({ ...credentials, user: value });
              setResData({ ...resData, error: { ...resData.error, user: "" } });
            }}
            isDisabled={false}
            errTxt={resData.error.user}
          />

          <PasswordInput
            defaultValue={credentials.password}
            onInput={(e) => {
              const value = (e.target as HTMLInputElement).value;
              setCredentials({ ...credentials, password: value });
              setResData({
                ...resData,
                error: { ...resData.error, password: "" },
              });
            }}
            errTxt={resData.error.password}
          />

          <ButtonInput
            label="Sign In"
            onInput={async () => {
              const signin = await fetch(`${serverUrl}/auth/sign-in`, {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                credentials: "include",
                body: JSON.stringify(credentials),
              });
              const resJson = await signin.json();

              setResData(resJson.resData);
              if ("resRoute" in resJson) {
                router.replace(resJson.resRoute);
              }
            }}
          />
          <div>
            <p className="signup-link">
              Don't have an account?
              <Link href={"/auth/signup"} prefetch>
                Sign Up
              </Link>
            </p>
          </div>
        </motion.div>
      </motion.section>
    </>
  );
};

export default SignIn;
