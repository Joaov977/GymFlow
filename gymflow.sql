USE gymflow;

CREATE TABLE alunos (
	id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    idade INT,
    peso DECIMAL(5,2),
    altura DECIMAL (3,2),
    sexo CHAR(1),
    data_cadastro DATE
);

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