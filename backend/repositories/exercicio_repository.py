from config.database import conectar
from flask import Blueprint, jsonify, request

def criar_exercicio(nome, grupo_muscular, equipamento, nivel):

    conexao = conectar()

    cursor = conexao.cursor()

    cursor.execute("""
        INSERT INTO exercicios
        (nome, grupo_muscular, equipamento, nivel)

        VALUES (%s, %s, %s, %s)
    """, (
        nome,
        grupo_muscular,
        equipamento,
        nivel
    ))

    conexao.commit()

    conexao.close()

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