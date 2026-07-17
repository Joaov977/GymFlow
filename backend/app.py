from flask import Flask
from flask_cors import CORS
from routes.exercicio_routes import exercicio_bp

app = Flask(__name__)

CORS(app)

app.register_blueprint(exercicio_bp)

@app.route("/status")
def status():
    return {
        "status": "online"
    }

if __name__ == "__main__":
    app.run(debug=True)