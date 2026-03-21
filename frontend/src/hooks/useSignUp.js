import { useState } from "react"

const useSignUp = () => {
    const [loading, setLoading] = useState(false);

    const signUp = async (userData) => {
        const { firstName, lastName, userName, email, password } = userData;

        setLoading(true);
        try {
            const res = await fetch(`http://localhost:3001/sign-up`, {
              method: "POST",
              headers: { "Content-Type": "application/json" },
            //   credentials: "include",
              body: JSON.stringify({ firstName, lastName, username: userName, email, password }),
            });

            const data = await res.json();

            if(!res.ok || !data.success) {
                return {
                    success: false,
                    message: data?.message || "Sign up failed",
                };
                // throw new Error("Sign Up Failed");
            }
            console.log("ACCOUNT CREATED!");
            return data;
        } catch (error) {
            console.log(error);
            return null;
        } finally {
            setLoading(false);
        }
    }
    return { signUp, loading };
}

export default useSignUp;