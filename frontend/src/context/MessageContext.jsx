import { useState } from "react";
import { createContext, useContext } from "react";
import { useUser } from "./UserContext";

export const MessageContext = createContext();

export const useMessage = () => useContext(MessageContext);

export const MessageProvider = ({ children }) => {
    const BASEURL = "http://localhost:3001";

    const [msgs, setMsgs] = useState([]);
    const [loading, setLoading] = useState(false);
    const [myData, setMyData] = useState([]);
    const { user } = useUser();
    
    const getAllMsgs = async () => {
        try {
            setLoading(true);
            const req = await fetch(`${BASEURL}/messages`);
            const res = await req.json();
            if(!req.status) return req;
            setMsgs(res.data);
        } catch (error) {
            console.log(error);
            return;
        } finally {
            setLoading(false);
        }
    }

    const getMyMsgs = async (userId) => {
        try {
            setLoading(true);
            const req = await fetch(`${BASEURL}/messages/me/${userId}`);
            const res = await req.json();
            if(!res.success) return;
            setMyData(res.data);
        } catch (error) {
            console.log(error);
            return;
        } finally {
            setLoading(false);
        }
    }

    const postMessage = async (msgData) => {
        try {
            const res = await fetch(`${BASEURL}/messages/add`, {
                method: "POST",
                headers: { "Content-type": "application/json"},
                body: JSON.stringify(msgData)
            });

            const data = await res.json();

            if(!data.success) throw new Error("Error posting message");

            return data;
        } catch (error) {
            console.log(error);
            return;
        }
    }

    return (
        <MessageContext.Provider value={{ msgs, getAllMsgs, loading, getMyMsgs, myData, postMessage }}>{children}</MessageContext.Provider>
    )
}