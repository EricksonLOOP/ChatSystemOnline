import { frame, motion } from "framer-motion";
import { useEffect, useState } from "react";
import * as Stomp from "stompjs";
import SockJS from "sockjs-client";

export default function Chat({ openOrClose, infos }: { openOrClose: boolean, infos: string[] | null }) {
    const [messages, setMessages] = useState<string[]>([]);

    useEffect(() => {
        const socket = new SockJS('http://localhost:8080/ws');
        const stompClient = Stomp.over(socket);
        stompClient.connect({}, (frame) => {
            console.log(`Connected: ${frame}`);
            stompClient.subscribe('topic/public', (messageOutput) => {
                const message = JSON.parse(messageOutput.body);
                setMessages((prevMessage) => [...prevMessage, message.content])
            })
        })
    }, [openOrClose, infos]);



    if (openOrClose && infos) {
        return (
            <motion.section
                className="absolute rounded-[20px] p-3 right-[10px] top-[70px] bg-purple-300 w-[1000px] h-[500px]"
            >
                <header className="bg-white p-1 text-center font-medium rounded-[10px] w-[300px] m-auto">
                    {infos[0] || "sem nome"}
                </header>

                {/* Seção das mensagens */}
                <section className="bg-white w-[100%] h-[300px] mt-10 rounded-[20px] overflow-y-scroll p-4">
                    {messages.length > 0 ? (
                        messages.map((msg, idx) => (
                            <p key={idx} className="bg-purple-200 p-2 my-2 rounded-md">
                                {msg}
                            </p>
                        ))
                    ) : (
                        <p className="text-center">No messages yet.</p>
                    )}
                </section>

                {/* Campo para enviar mensagem */}
                <span className="flex items-center justify-center gap-[10px]">
                    <input type="text" placeholder="Text your message." className="w-[80%] rounded-[100px] p-2 mt-5" />
                    <button type="submit" className="bg-black p-2 text-white font-medium rounded-[10px] mt-4">
                        Send
                    </button>
                </span>
            </motion.section>
        );
    }

    return null;
}
