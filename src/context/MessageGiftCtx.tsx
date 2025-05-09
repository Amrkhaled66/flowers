import { createContext, useContext, useState, ReactNode } from "react";

const MessageGiftCtx = createContext({} as any);
export const useMessageGiftCtx = () => useContext(MessageGiftCtx);

export default function MessageGiftProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [messageParts, setMessageParts] = useState<{
    from: string;
    to: string;
    message: string;
  }>({
    from: "",
    to: "",
    message: "",
  });
  const [isValid, setIsValid] = useState(false);

  const onSave = () => {
    setIsValid(() => messageParts.message.length > 0);
  };

  const onChange = (e: any) => {
    console.log(e);
    setMessageParts({
      ...messageParts,
      [e.target.name]: e.target.value,
    });
  };

  const onReset = () => {
    setMessageParts({
      from: "",
      to: "",
      message: "",
    });
  };

  return (
    <MessageGiftCtx.Provider
      value={{
        onSave,
        isValid,
        messageParts,
        onChange,
        onReset,
      }}
    >
      {children}
    </MessageGiftCtx.Provider>
  );
}
