import Grid from "@mui/material/Grid";
import ExercicioCard from "./ExercicioCard";

function ExercicioList({ exercicios }) {
    return (
        <Grid container spacing={3}>
            {exercicios.map((exercicio) => (
                <Grid
                    key={exercicio.id}
                    size={{ xs: 12, md: 6 }}
                >
                    <ExercicioCard exercicio={exercicio} />
                </Grid>
            ))}
        </Grid>
    );
}

export default ExercicioList;