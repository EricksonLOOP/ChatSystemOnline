import { useLocation } from "react-router-dom";
import Header from "./components/header";
import Chats from "./components/chats";
import Chat from "./components/chat";
import { useState } from "react";

const Dashboard = () => {
    const location = useLocation();
    const [openOrClose, setOpenOrClose] = useState(false);
    const [infos, setInfos] = useState<string[] | null>(null);
    const userData = location.state.use;

    const setarInfos = (name: string, id: string) => {
        console.log("fui executado");
        setInfos([name, id]);
        setOpenOrClose(true);
    };

    return (
        <div>
            <Header name={userData.name} />
            <div className="flex">
                <Chats setarInfos={setarInfos} />
                <Chat openOrClose={openOrClose} infos={infos} />
            </div>
        </div>
    );
}

export default Dashboard;
