import { useEffect, useState } from "react";

import Navbar from "../components/Navbar";
import ExercicioList from "../components/exercicios/ExercicioList";
import NovoExercicioModal from "../components/exercicios/NovoExercicioModal";

import { buscarExercicios } from "../services/api";

import {
    Container,
    Typography,
    Button,
    Stack
} from "@mui/material";

import AddIcon from "@mui/icons-material/Add";

function Dashboard() {

    const [exercicios, setExercicios] = useState([]);

    const [modalAberto, setModalAberto] = useState(false);

    useEffect(() => {

        carregarExercicios();

    }, []);

    async function carregarExercicios() {

        try {

            const dados = await buscarExercicios();

            setExercicios(dados);

        } catch (erro) {

            console.error(erro);

        }

    }

    return (

        <>

            <Navbar />

            <Container maxWidth="lg" sx={{ mt: 5 }}>

                <Typography
                    variant="h3"
                    gutterBottom
                >

                    Bem-vindo ao GymFlow

                </Typography>

                <Typography
                    color="text.secondary"
                    sx={{ mb: 3 }}
                >

                    Gerencie seus exercícios.

                </Typography>

                <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                    sx={{ mb: 3 }}
                >

                    <Typography variant="h5">

                        Exercícios

                    </Typography>

                    <Button
                        variant="contained"
                        startIcon={<AddIcon />}
                        onClick={() => setModalAberto(true)}
                    >

                        Novo Exercício

                    </Button>

                </Stack>

                <ExercicioList exercicios={exercicios} />

                <NovoExercicioModal
                    open={modalAberto}
                    onClose={() => setModalAberto(false)}
                />

            </Container>

        </>

    );

}

export default Dashboard;