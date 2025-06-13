import {
  createContext,
  useContext,
  useState,
  useCallback,
  ReactNode,
  ChangeEvent,
} from "react";
import { useOrder } from "./orderCtx";

interface Message {
  from: string;
  to: string;
  message: string;
  url: string;
}

interface MessageGiftContextType {
  inputParts: Message;
  submittedParts: Message;
  messageError: string;
  isSubmitted: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onSave: () => boolean;
  onReset: () => void;
  clearError: () => void;
  checkValidation: () => boolean;
  resetInputParts: () => void;
}

const defaultMessage: Message = {
  from: "",
  to: "",
  message: "",
  url: "",
};

const MessageGiftCtx = createContext<MessageGiftContextType | undefined>(
  undefined,
);

export const useMessageGiftCtx = () => {
  const context = useContext(MessageGiftCtx);
  if (!context) {
    throw new Error(
      "useMessageGiftCtx must be used within a MessageGiftProvider",
    );
  }
  return context;
};

export default function MessageGiftProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [inputParts, setInputParts] = useState<Message>(defaultMessage);
  const [submittedParts, setSubmittedParts] = useState<Message>(defaultMessage);
  const [messageError, setMessageError] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const { updateOrder } = useOrder();

  const isValid = inputParts.message.trim().length > 0;

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setInputParts((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const checkValidation = () => {
    if (!isValid) {
      setMessageError("Please enter a message");
      return false;
    }
    return true;
  };

  const onSave = () => {
    if (!checkValidation()) return false;
    setSubmittedParts(inputParts);
    updateOrder({ message: inputParts });
    setIsSubmitted(true);
    return true;
  };

  // Resets everything
  const onReset = () => {
    setInputParts(defaultMessage);
    setSubmittedParts(defaultMessage);
    setMessageError("");
    setIsSubmitted(false);
  };

  const resetInputParts = useCallback(() => {
    setInputParts(submittedParts);
  }, [submittedParts]);

  const clearError = () => setMessageError("");

  return (
    <MessageGiftCtx.Provider
      value={{
        inputParts,
        submittedParts,
        messageError,
        isSubmitted,
        onChange,
        onSave,
        onReset,
        clearError,
        checkValidation,
        resetInputParts,
      }}
    >
      {children}
    </MessageGiftCtx.Provider>
  );
}
