const BASEURL = "http://localhost:3001";

export const logout = async () => {
    try {
        const res = await fetch(`${BASEURL}/logout`, {
            credentials: "include",
        });

        const data = await res.json();
        
        return data;
    } catch (error) {
        // console.log(error);
        return {success: false, error};
    }
}