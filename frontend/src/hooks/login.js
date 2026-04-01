import { useState } from "react";
import toast from "react-hot-toast";
import { useUser } from "../context/UserContext";

const useLogin = () => {
    const { setUser } = useUser();

    const BASEURL = import.meta.env.DEV
      ? "http://localhost:3001"
      : "https://members-only-g0et.onrender.com";
    
    const [loading, setLoading] = useState(false);

    const login = async (username, password) => {
        if(!username || !password) {
            toast.error("All fields required");
            return;
        };

        setLoading(true);

        try {
            const res = await fetch(`${BASEURL}/login`, {
                method: "POST", 
                headers: { "Content-Type" : "application/json" },
                credentials: "include",
                body: JSON.stringify({ username, password })
            });

            const data = await res.json();

            if(!data.success) {
                toast.error(data.message);
            }

            setUser(data.user);        
            localStorage.setItem("user", JSON.stringify(data));
            return data;
        } catch (error) {
            toast.error(error.message);
            return null;
        } finally {
            setLoading(false);
        }
    }
    return { loading, login };
}

export default useLogin;