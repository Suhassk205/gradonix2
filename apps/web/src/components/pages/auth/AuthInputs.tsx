import { AnimatePresence, motion } from "motion/react";
import { FormEventHandler } from "react";
import { FaCircleExclamation } from "react-icons/fa6";

interface EmailInputProps {
  label: string;
  defaultValue: string;
  errTxt: string;
  isDisabled: boolean;
  onInput?: FormEventHandler<HTMLInputElement>;
}
interface PasswordInputProps {
  defaultValue: string;
  onInput: FormEventHandler<HTMLInputElement>;
  errTxt: string;
}

export const EmailInput = ({
  label,
  defaultValue,
  errTxt,
  isDisabled,
  onInput,
}: EmailInputProps) => {
  return (
    <>
      <input
        className="email-input"
        type="text"
        placeholder={label}
        defaultValue={defaultValue}
        onInput={onInput}
        disabled={isDisabled}
      />
      <AnimatePresence mode="popLayout">
        {errTxt ? (
          <motion.div
            className="auth-err-msg"
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <FaCircleExclamation />
            <p>{errTxt}</p>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
};

export const PasswordInput = ({
  defaultValue,
  onInput,
  errTxt,
}: PasswordInputProps) => {
  return (
    <>
      <input
        className="password-input"
        type="text"
        placeholder="Password"
        defaultValue={defaultValue}
        onInput={onInput}
      />
      <AnimatePresence mode="popLayout">
        {errTxt ? (
          <motion.div
            className="auth-err-msg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <FaCircleExclamation />
            <p>{errTxt}</p>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
};
