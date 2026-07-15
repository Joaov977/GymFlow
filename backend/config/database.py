import mysql.connector

def conectar():

    conexao = mysql.connector.connect(
        host="localhost",
        user="root",
        password="24681jvcm",
        database="gymflow"
    )

    return conexao

if __name__ == "__main__":
    conexao = conectar()

    if conexao.is_connected():
        print("Conectado ao MySQL com sucesso!")

    conexao.close()