const BASEURL = import.meta.env.DEV ? "http://localhost:3001/api" : "/api";

export const logout = async () => {
  try {
    const res = await fetch(`${BASEURL}/logout`, {
      credentials: "include",
    });

    const data = await res.json();

    return data;
  } catch (error) {
    // console.log(error);
    return { success: false, error };
  }
};
