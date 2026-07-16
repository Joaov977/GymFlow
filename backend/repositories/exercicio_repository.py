from config.database import conectar


def listar_exercicios():

    conexao = conectar()

    cursor = conexao.cursor(dictionary=True)

    cursor.execute("""
        SELECT *
        FROM exercicios
    """)

    exercicios = cursor.fetchall()

    conexao.close()

    return exercicios