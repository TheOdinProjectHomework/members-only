import { createContext, useContext, useEffect, useState } from "react";

export const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export default function UserProvider ({ children }) {
    const BASEURL = import.meta.env.VITE_DEV === "development"
        ? "http://localhost:3001"
        : "https://members-only-g0et.onrender.com";

    console.log(BASEURL);
    
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUser = async () => {
            console.log("fetching me");
            try {
                const res = await fetch(`${BASEURL}/me`, {
                // const res = await fetch(`/me`, {
                    credentials: "include",
                });

                if(!res.ok) {
                    setUser(null);
                    console.log(res)
                    return;
                }

                const data = await res.json();
                console.log("something wrong in me")
                setUser(data.user);
            } catch (error) {
                console.log("Error fetching user", error);
            } finally {
                setLoading(false);
            }
        };

        fetchUser();
    }, []);

    return (
        <UserContext.Provider value={{ user, setUser, loading }}
        >{children}
        </UserContext.Provider>
    )
}