"use client";
import "@/styles/auth/page.css";
import { MouseEventHandler } from "react";

const ButtonInput = ({
  label,
  onInput,
}: {
  label: string;
  onInput: MouseEventHandler<HTMLButtonElement>;
}) => {
  return (
    <>
      <button type="button" onClick={onInput}>
        {label}
      </button>
    </>
  );
};

export default ButtonInput;
