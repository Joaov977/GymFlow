import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button,
    TextField,
    Stack
} from "@mui/material";

function NovoExercicioModal({
    open,
    onClose
}) {

    return (

        <Dialog
            open={open}
            onClose={onClose}
            fullWidth
            maxWidth="sm"
        >

            <DialogTitle>

                Novo Exercício

            </DialogTitle>

            <DialogContent>

                <Stack
                    spacing={2}
                    sx={{ mt: 1 }}
                >

                    <TextField
                        label="Nome"
                        fullWidth
                    />

                    <TextField
                        label="Grupo Muscular"
                        fullWidth
                    />

                    <TextField
                        label="Equipamento"
                        fullWidth
                    />

                    <TextField
                        label="Nível"
                        fullWidth
                    />

                </Stack>

            </DialogContent>

            <DialogActions>

                <Button onClick={onClose}>

                    Cancelar

                </Button>

                <Button variant="contained">

                    Salvar

                </Button>

            </DialogActions>

        </Dialog>

    );

}

export default NovoExercicioModal;