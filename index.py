from flask import Flask, jsonify
import random
import json

app = Flask(__name__)

with open('ass.json') as f:
    data = json.load(f)

@app.route('/')
def home():
    random_item = random.choice(data)
    return jsonify(random_item)

if __name__ == '__main__':
    app.run(port=3000)