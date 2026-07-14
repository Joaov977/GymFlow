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

CREATE TABLE treino_exercicios (
    id INT AUTO_INCREMENT PRIMARY KEY,

    treino_id INT NOT NULL,
    exercicio_id INT NOT NULL,

    series INT NOT NULL,
    repeticoes INT NOT NULL,
    carga DECIMAL(5,2),

    FOREIGN KEY (treino_id)
        REFERENCES treinos(id)
        ON DELETE CASCADE,

    FOREIGN KEY (exercicio_id)
        REFERENCES exercicios(id)   
);

CREATE TABLE historico_execucoes (
    id INT AUTO_INCREMENT PRIMARY KEY,

    treino_exercicio_id INT NOT NULL,

    data_execucao DATETIME NOT NULL,

    carga_real DECIMAL(5,2),

    repeticoes_realizadas INT,

    observacoes TEXT,

    FOREIGN KEY (treino_exercicio_id)
        REFERENCES treino_exercicios(id)
        ON DELETE CASCADE
);