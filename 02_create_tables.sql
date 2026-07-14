USE gymflow;

CREATE TABLE alunos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    idade INT,
    peso DECIMAL(5,2),
    altura DECIMAL(3,2),
    sexo CHAR(1),
    data_cadastro DATE
);

CREATE TABLE exercicios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    grupo_muscular VARCHAR(50) NOT NULL,
    equipamento VARCHAR(50),
    nivel VARCHAR(30),
    gif_url VARCHAR(255)
);

CREATE TABLE treinos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    descricao TEXT,
    aluno_ID INT NOT NULL,

    FOREIGN KEY (aluno_id)
        REFERENCES alunos(id)
        ON DELETE CASCADE
);