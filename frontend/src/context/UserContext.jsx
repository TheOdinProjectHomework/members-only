import { createContext, useContext, useEffect, useState } from "react";

export const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export default function UserProvider ({ children }) {
      const BASEURL = import.meta.env.DEV
        ? "http://localhost:3001/api"
        : "https://members-only-g0et.onrender.com";
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const res = await fetch(`${BASEURL}/api/me`, {
                    credentials: "include",
                });

                const data = await res.json();
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