import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { Dispatch, SetStateAction } from "react";
import { resObject } from "../types/resObject";

const host = process.env.NEXT_PUBLIC_SERVER_URL;

export const fetchBeta = async (url: string, body: object) => {
  let options: any = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(body),
  };
  try {
    const response = await fetch(`${host}${url}`, options);
    let responseData = await response.json();
    responseData.status = response.status;

    return responseData;
  } catch (error) {
    return { status: 500, resErrMsg: "nextjs" + error };
  }
};

export const handleBetaResponse = (
  res: resObject,
  router: AppRouterInstance,
  setResData: Dispatch<SetStateAction<any>>
) => {
  if (res.status >= 400) {
    console.log("Server Error (" + res.resCode + "): " + res.resErrMsg);
    return;
  } else if (res.status == 200) {
    if ("resRoute" in res && res.resRoute) {
      router.replace(res.resRoute as string);
      return;
    }
    if ("resServerErrDialog" in res && res.resServerErrDialog) {
      alert(res.resServerErrDialog);
      return;
    }
    if ("resData" in res && res.resData) {
      setResData(res.resData);
      return;
    }
  }
};
