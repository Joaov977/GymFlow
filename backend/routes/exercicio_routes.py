from flask import Blueprint, jsonify, request

from services.exercicio_service import (
    obter_exercicios,
    cadastrar_exercicio
)

exercicio_bp = Blueprint("exercicios", __name__)


@exercicio_bp.route("/exercicios", methods=["GET"])
def listar():

    exercicios = obter_exercicios()

    return jsonify(exercicios)


@exercicio_bp.route("/exercicios", methods=["POST"])
def criar():

    dados = request.json

    cadastrar_exercicio(dados)

    return jsonify({
        "mensagem": "Exercício cadastrado com sucesso!"
    }), 201