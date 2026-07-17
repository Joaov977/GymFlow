import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { buscarExercicios } from "../services/api";

function Dashboard() {
    const [exercicios, setExercicios] = useState([]);

    useEffect(() => {
        carregarExercicios();
    }, []);

    async function carregarExercicios() {
        try {

            const dados = await buscarExercicios();

            console.log(dados);

            setExercicios(dados);

        } catch (erro) {

            console.error(erro);

        }
    }

        return (
        <>
            <Navbar />

            <main>
                <h1>Bem-vindo ao GymFlow</h1>

                <h2>Exercícios</h2>

                <ul>
                    {exercicios.map((exercicio) => (
                        <li key={exercicio.id}>
                            {exercicio.nome}
                        </li>
                    ))}
                </ul>
            </main>
        </>
    );
}

export default Dashboard;