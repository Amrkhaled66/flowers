import { useAuth } from "src/context/authCtx"
import { Navigate } from "react-router";
import { ReactNode } from "react";
const VerifiedAccount = ({ children }: { children: ReactNode }) => {
    const { authData: { user } } = useAuth();
    if (user?.verified) {
        return <Navigate to="/" />
    }
    return  children 
}

export default VerifiedAccount