USE gymflow;

SELECT * FROM alunos;

SELECT * FROM exercicios;

WHERE grupo_muscular = 'Peito';

SELECT
    alunos.nome AS aluno,
    treinos.nome AS treino
FROM treinos
INNER JOIN alunos
ON treinos.aluno_id = alunos.id;