import {
    Card,
    CardContent,
    Typography,
    Stack,
    IconButton
} from "@mui/material";

import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

function ExercicioCard({
    exercicio,
    onEditar,
    onExcluir
}) {

    return (

        <Card
            elevation={4}
            sx={{
                height: "100%",
                borderRadius: 3,
                transition: "0.2s",
                "&:hover": {
                    transform: "translateY(-4px)",
                },
            }}
        >

            <CardContent>

                <Typography variant="h5">

                    💪 {exercicio.nome}

                </Typography>

                <Typography variant="body1">

                    Grupo muscular: {exercicio.grupo_muscular}

                </Typography>

                <Typography variant="body1">

                    Equipamento: {exercicio.equipamento}

                </Typography>

                <Typography variant="body1">

                    Nível: {exercicio.nivel}

                </Typography>

                <Stack
                    direction="row"
                    justifyContent="flex-end"
                    spacing={1}
                    sx={{ mt: 2 }}
                >

                    <IconButton
                        color="primary"
                        onClick={() => onEditar(exercicio)}
                    >

                        <EditIcon />

                    </IconButton>

                    <IconButton
                        color="error"
                        onClick={() => onExcluir(exercicio)}
                    >

                        <DeleteIcon />

                    </IconButton>

                </Stack>

            </CardContent>

        </Card>

    );

}

export default ExercicioCard;