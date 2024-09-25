import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { use } from "framer-motion/client";

const LoginForm = () => {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const CreateUser = async (e) => {
        e.preventDefault(); // Previne o comportamento padrão do formulário

        try {
            const req = await axios.post("http://localhost:8080/api/user/login", {
                name: name,
                password: password,
            });

            // Se a requisição for bem-sucedida, redirecione o usuário
            if (req.status === 200) {
                navigate("/dashboard", { state: { use: req.data } }); // Altere para a rota desejada após login
            }
        } catch (error) {
            console.error("Error creating user:", error);
            // Aqui você pode adicionar lógica para mostrar uma mensagem de erro ao usuário
        }
    };

    return (
        <div className="h-screen flex flex-col items-center justify-center bg-gray-200">
            <form onSubmit={CreateUser} className="p-6 shadow-2xl rounded-lg flex flex-col items-center justify-center bg-gray-100">
                <h2 className="font-medium">Welcome to Chat!</h2>
                <label htmlFor="userName" className="flex flex-col justify-center items-start mt-4">
                    Username:
                    <input
                        type="text"
                        id="userName"
                        className="p-2 border border-blue-200 rounded-lg"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Username"
                    />
                </label>
                <label htmlFor="password" className="flex flex-col justify-center items-start mt-4">
                    Password:
                    <input
                        type="password"
                        id="password"
                        className="p-2 border border-blue-200 rounded-lg"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                    />
                </label>
                <button type="submit" className="bg-blue-500 p-2 text-white font-medium mt-4 rounded-lg">LOGIN</button>
                <a href="#" className="text-sm text-purple-400">Create an account.</a>
            </form>
        </div>
    );
};

export default LoginForm;
