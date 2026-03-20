import { useState } from "react";

const useLogin = () => {
    const [loading, setLoading] = useState(false);

    const login = async (username, password) => {
        if(!username || !password) {
            alert("All fields required");
            return;
        };

        setLoading(true);

        try {
            const res = await fetch(`http://localhost:3001/login`, {
                method: "POST", 
                headers: { "Content-Type" : "application/json" },
                credentials: "include",
                body: JSON.stringify({ username, password })
            });

            const data = await res.json();

            if(!data.success) {
                // console.log("Login Failed");
                throw new Error("Login Failed");
            }

            localStorage.setItem("user", JSON.stringify(data));
            // console.log(data.user);
            return data;
        } catch (error) {
            console.log(error);
            return null;
        } finally {
            setLoading(false);
        }
    }
    return { loading, login };
}

export default useLogin;