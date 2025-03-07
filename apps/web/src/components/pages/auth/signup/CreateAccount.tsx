"use client";
import { motion } from "motion/react";
import { useState } from "react";

import { fetchAuth, handleAuthResponse } from "@/utils/server/auth";
import { authResData } from "@/utils/types/authResData";
import { useRouter } from "next/navigation";
import { EmailInput, PasswordInput } from "../AuthInputs";
import ButtonInput from "../ButtonInput";

const CreateAccount = ({ email }: { email: string }) => {
  const router = useRouter();
  const [credentials, setCredentials] = useState({
    username: "",
    email: email,
    password: "",
  });
  const [resData, setResData] = useState<authResData>({
    success: false,
    error: {
      username: "",
      email: "",
      password: "",
    },
  });
  return (
    <>
      <motion.section className="auth" layout="position">
        <motion.div className="auth-card" layout="size">
          <h1 className="auth-title">Create Account</h1>
          <EmailInput
            label="Username"
            defaultValue={credentials.username}
            isDisabled={false}
            onInput={(e) => {
              const value = (e.target as HTMLInputElement).value;
              setCredentials({ ...credentials, username: value });
              setResData({
                ...resData,
                error: { ...resData.error, username: "" },
              });
            }}
            errTxt={resData.error.username as string}
          />

          <EmailInput
            label="Email"
            defaultValue={credentials.email}
            isDisabled={true}
            errTxt={resData.error.email as string}
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
            errTxt={resData.error.password as string}
          />
          <ButtonInput
            label="Create"
            onInput={async () => {
              const res = await fetchAuth("/auth/sign-up/create", credentials);

              console.log(res);
              handleAuthResponse(res, router, setResData);
            }}
          />
        </motion.div>
      </motion.section>
    </>
  );
};

export default CreateAccount;
