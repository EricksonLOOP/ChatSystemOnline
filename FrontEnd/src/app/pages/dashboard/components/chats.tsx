import axios from "axios";
import { useEffect, useState } from "react";

export default function Chats({ setarInfos }: { setarInfos: (name: string, id: string) => void }) {
    const [data, setData] = useState<string[][]>([]);
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const req = await axios.get("http://localhost:8080/api/user/getusers");
                setData(req.data);
            } catch (error) {
                console.error("Error fetching users:", error);
            }
        };
        fetchUsers();
    }, []);

    return (
        <aside id="chats" className="rounded-lg flex flex-col justify-center items-center p-4 mt-2 ml-2 bg-purple-300 max-w-[200px]">
            <h3
                className="cursor-pointer flex mt-3 rounded-lg items-center justify-center p-4 text-white font-bold bg-purple-500 w-[150px] h-[30px] text-center mb-3"
                onClick={() => setarInfos("Public", "")}
            >
                Public
            </h3>

            <h3 className="flex mt-3 rounded-lg items-center justify-center p-4 text-white font-bold bg-purple-500 w-[150px] h-[30px] text-center mb-3">
                Friends
            </h3>
            {data.length > 0 ? (
                data.map((user, idx) => (
                    <span
                        key={idx}
                        className="text-center bg-white font-medium p-2 rounded-lg cursor-pointer w-[100px]"
                        onClick={() => setarInfos(user[0], user[1])}
                    >
                        <p>{user[0]}</p>
                    </span>
                ))
            ) : (
                <p>No users found.</p>
            )}
        </aside>
    );
}
