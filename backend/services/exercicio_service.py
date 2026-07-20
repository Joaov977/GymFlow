from repositories.exercicio_repository import listar_exercicios
from repositories.exercicio_repository import criar_exercicio

def cadastrar_exercicio(dados):

    criar_exercicio(

        dados["nome"],

        dados["grupo_muscular"],

        dados["equipamento"],

        dados["nivel"]

    )

def obter_exercicios():

    return listar_exercicios()