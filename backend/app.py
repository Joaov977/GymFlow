from flask import Flask
from routes.exercicio_routes import exercicio_bp

app = Flask(__name__)

app.register_blueprint(exercicio_bp)


@app.route("/status")
def status():
    return {
        "status": "online"
    }


if __name__ == "__main__":
    app.run(debug=True)