import { useEffect, useState } from "react";
import { useSendOtp } from "src/hooks/auth/useForgetPasswordMutation";
import { useReset } from "src/context/resetCtx";
import { useTranslation } from "react-i18next";

const TimerCountDown = () => {
  const [seconds, setSeconds] = useState(60);
  const [isTimerRunning, setIsTimerRunning] = useState(true);
  const { mutate, isPending } = useSendOtp();
  const { phone } = useReset();
  const { t: forgetPasswordTranslation } = useTranslation("forgetPassword");

  const handleResend = () => {
    mutate(phone);
    setSeconds(60);
    setIsTimerRunning(true);
  };

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isTimerRunning && seconds > 0) {
      interval = setInterval(() => {
        setSeconds((prev) => prev - 1);
      }, 1000);
    }

    if (seconds === 0) {
      setIsTimerRunning(false);
    }

    return () => clearInterval(interval);
  }, [isTimerRunning, seconds]);

  return (
    <div className="justify-start text-center">
      {isTimerRunning ? (
        <span className="text-text-main text-sm font-normal">
          {forgetPasswordTranslation("submitOtp.getNewCode")} {"  "}
          <span className="text-main font-bold">
            00:{seconds.toString().padStart(2, "0")}
          </span>
        </span>
      ) : (
        <button
          onClick={handleResend}
          disabled={isPending}
          className="text-main text-sm font-bold hover:underline"
        >
          {forgetPasswordTranslation("submitOtp.resendCode")}
        </button>
      )}
    </div>
  );
};

export default TimerCountDown;
