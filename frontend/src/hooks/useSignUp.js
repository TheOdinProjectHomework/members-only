import { useState } from "react"
import toast from "react-hot-toast";

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

            if(!res.success || !data.success) {
                return {
                    success: false,
                    message: data?.message || "Sign up failed",
                };
            }
            toast.success("Account Created Successfully!");
            return data;
        } catch (error) {
            throw new Error(error.message);
            // return null;
        } finally {
            setLoading(false);
        }
    }
    return { signUp, loading };
}

export default useSignUp;