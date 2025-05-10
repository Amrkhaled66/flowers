import { getItem, setItem, removeItem } from "src/utils/localStorage";
import Register from "src/types/auth/User";

const setUser = (user: Register) => setItem("user", user);
const setToken = (token: string) => setItem("token", token);
const clearToken = () => removeItem("token");
const clearUser = () => removeItem("user");
const getToken = (): string | null => getItem("token");
const getUser = (): Register | null => getItem("user");

export { setUser, setToken, clearToken, clearUser, getToken, getUser };
