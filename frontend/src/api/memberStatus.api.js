import toast from "react-hot-toast";

const BASEURL = "http://localhost:3001";

export const solvePuzzle = async (id, word) => {
    if(!word) return toast.error("Field required");
    
  try {
    const res = await fetch(`${BASEURL}/users/secret`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, word }),
    });

    const data = await res.json();

    if (!data.success) {
        toast.error(data.message);
        // throw new Error("Login Failed");
    }

    return data;
  } catch (error) {
    return { success: false, error: error.message }
  }
};
