const BASEURL = import.meta.env.DEV ? "http://localhost:3001/api" : "/api";

export const editUsername = async (newName, id) => {
  console.log("Edit Username Function", newName, id);
  try {
    const res = await fetch(`${BASEURL}/users/edit`, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ username: newName, id: id }),
    });

    const data = await res.json();

    return data;
  } catch (error) {
    console.log(error);
    return;
  }
};
