USE gymflow;

INSERT INTO alunos (
    nome,
    idade,
    peso,
    altura,
    sexo,
    data_cadastro
)
VALUES (
    'João Vitor',
    22,
    93.00,
    1.95,
    'M',
    CURDATE()
);