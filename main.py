from flask import Flask, jsonify, request

app = Flask(__name__)

@app.route('api/ass.json', methods=['GET'])
def ReturnJSON():
    if request.method == 'GET':
        data = {
            "url": "",
            "param": "ass"
        }
        return jsonify(data)

if __name__ == '__main__':
    app.run(debug=True)
