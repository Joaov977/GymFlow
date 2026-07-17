const API_URL = "http://127.0.0.1:5000";

export async function buscarExercicios() {
    const resposta = await fetch(`${API_URL}/exercicios`);

    if (!resposta.ok) {
        throw new Error("Erro ao buscar exercícios.");
    }

    return await resposta.json();
}