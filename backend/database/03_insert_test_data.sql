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

INSERT INTO exercicios (
    nome,
    grupo_muscular,
    equipamento,
    nivel,
    gif_url
)
VALUES
    ('Supino Reto', 'Peito', 'Barra', 'Intermediário', NULL),
    ('Supino Inclinado', 'Peito', 'Barra', 'Intermediário', NULL),
    ('Crucifixo', 'Peito', 'Halteres', 'Iniciante', NULL),
    ('Puxada Frontal', 'Costas', 'Polia', 'Iniciante', NULL),
    ('Remada Curvada', 'Costas', 'Barra', 'Intermediário', NULL),
    ('Rosca Direta', 'Bíceps', 'Barra', 'Iniciante', NULL),
    ('Rosca Martelo', 'Bíceps', 'Halteres', 'Iniciante', NULL),
    ('Tríceps Pulley', 'Tríceps', 'Polia', 'Iniciante', NULL),
    ('Agachamento Livre', 'Quadríceps', 'Barra', 'Intermediário', NULL),
    ('Leg Press 45°', 'Quadríceps', 'Máquina', 'Iniciante', NULL),
    ('Mesa Flexora', 'Posterior de Coxa', 'Máquina', 'Iniciante', NULL),
    ('Cadeira Extensora', 'Quadríceps', 'Máquina', 'Iniciante', NULL),
    ('Elevação Lateral', 'Ombros', 'Halteres', 'Iniciante', NULL),
    ('Desenvolvimento Militar', 'Ombros', 'Barra', 'Intermediário', NULL),
    ('Panturrilha em Pé', 'Panturrilhas', 'Máquina', 'Iniciante', NULL);