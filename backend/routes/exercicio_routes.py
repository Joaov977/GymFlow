from flask import Blueprint, jsonify
from services.exercicio_service import obter_exercicios

exercicio_bp = Blueprint("exercicios", __name__)


@exercicio_bp.route("/exercicios", methods=["GET"])
def listar():

    exercicios = obter_exercicios()

    return jsonify(exercicios)