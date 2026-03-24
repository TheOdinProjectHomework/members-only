import { useState } from "react";
import { createContext, useContext } from "react";
import { useUser } from "./UserContext";

export const MessageContext = createContext();

export const useMessage = () => useContext(MessageContext);

export const MessageProvider = ({ children }) => {
    const [msgs, setMsgs] = useState([]);
    const [loading, setLoading] = useState(false);
    const [myData, setMyData] = useState([]);
    const { user } = useUser();
    
    const getAllMsgs = async () => {
        try {
            setLoading(true);
            const req = await fetch(`http://localhost:3001/messages`);
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
            const req = await fetch(`http://localhost:3001/messages/me/${userId}`);
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

    return (
        <MessageContext.Provider value={{ msgs, getAllMsgs, loading, getMyMsgs, myData }}>{children}</MessageContext.Provider>
    )
}