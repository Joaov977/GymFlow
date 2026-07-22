import { useState, useEffect } from "react";

import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button,
    TextField,
    Stack
} from "@mui/material";

import { criarExercicio } from "../../services/api";

function NovoExercicioModal({
    open,
    onClose,
    atualizarLista,
    exercicio
}) {

    const [nome, setNome] = useState("");
    const [grupoMuscular, setGrupoMuscular] = useState("");
    const [equipamento, setEquipamento] = useState("");
    const [nivel, setNivel] = useState("");

    useEffect(() => {

        if (exercicio) {

            setNome(exercicio.nome);

            setGrupoMuscular(exercicio.grupo_muscular);

            setEquipamento(exercicio.equipamento);

            setNivel(exercicio.nivel);

        } else {

            setNome("");

            setGrupoMuscular("");

            setEquipamento("");

            setNivel("");

        }

    }, [exercicio]);

    async function salvar() {

        try {

            await criarExercicio({

                nome,

                grupo_muscular: grupoMuscular,

                equipamento,

                nivel

            });

            setNome("");
            setGrupoMuscular("");
            setEquipamento("");
            setNivel("");

            atualizarLista();

            onClose();

        } catch (erro) {

            console.error(erro);

            alert("Erro ao cadastrar exercício.");

        }

    }

    return (

        <Dialog
            open={open}
            onClose={onClose}
            fullWidth
            maxWidth="sm"
        >

            <DialogTitle>

                {exercicio ? "Editar Exercício" : "Novo Exercício"}

            </DialogTitle>

            <DialogContent>

                <Stack
                    spacing={2}
                    sx={{ mt: 2 }}
                >

                    <TextField
                        label="Nome"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                        fullWidth
                    />

                    <TextField
                        label="Grupo Muscular"
                        value={grupoMuscular}
                        onChange={(e) => setGrupoMuscular(e.target.value)}
                        fullWidth
                    />

                    <TextField
                        label="Equipamento"
                        value={equipamento}
                        onChange={(e) => setEquipamento(e.target.value)}
                        fullWidth
                    />

                    <TextField
                        label="Nível"
                        value={nivel}
                        onChange={(e) => setNivel(e.target.value)}
                        fullWidth
                    />

                </Stack>

            </DialogContent>

            <DialogActions>

                <Button onClick={onClose}>
                    Cancelar
                </Button>

                <Button
                    variant="contained"
                    onClick={salvar}
                >
                    {exercicio ? "Atualizar" : "Salvar"}
                </Button>

            </DialogActions>

        </Dialog>

    );

}

export default NovoExercicioModal;