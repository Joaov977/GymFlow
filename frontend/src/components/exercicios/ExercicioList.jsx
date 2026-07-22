import Grid from "@mui/material/Grid";
import ExercicioCard from "./ExercicioCard";

function ExercicioList({
    exercicios,
    onEditar,
    onExcluir
}) {

    return (

        <Grid container spacing={3}>

            {exercicios.map((exercicio) => (

                <Grid
                    key={exercicio.id}
                    size={{ xs: 12, md: 6 }}
                >

                    <ExercicioCard
                        exercicio={exercicio}
                        onEditar={onEditar}
                        onExcluir={onExcluir}
                    />

                </Grid>

            ))}

        </Grid>

    );

}

export default ExercicioList;