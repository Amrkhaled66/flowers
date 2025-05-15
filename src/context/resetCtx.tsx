import { useContext, createContext, useState } from "react";

const ResetContext = createContext({} as any);

export default function ResetProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [phone, setPhone] = useState("");
  const [token, setToken] = useState("");

  return (
    <ResetContext.Provider
      value={{
        phone,
        setPhone,
        token,
        setToken,
      }}
    >
      {children}
    </ResetContext.Provider>
  );
}
export const useReset = () => useContext(ResetContext);
