from flask import Flask, request, jsonify
from pymongo import MongoClient
from werkzeug.security import generate_password_hash
import certifi

app = Flask(__name__)

# MongoDB connection setup
mongo_uri = "mongodb+srv://Skill_swap_user:Skillswap123@skillswap.yrklhmk.mongodb.net/SkillswapDB?retryWrites=true&w=majority"
client = MongoClient(mongo_uri, tlsCAFile=certifi.where())
db = client.SkillswapDB
collection = db.users  # Assuming you want to store users in a 'users' collection

@app.route('/register', methods=['POST'])
def register():
    # Extract the data from the request
    data = request.json
    first_name = data.get('first_name')
    last_name = data.get('last_name')
    zip_code = data.get('zip_code')
    phone_number = data.get('phone_number')
    username = data.get('username')
    password = data.get('password')
    
    # Simple validation to ensure all fields are provided
    if not all([first_name, last_name, zip_code, phone_number, username, password]):
        return jsonify({'error': 'Missing required fields'}), 400

    # Check if the user already exists
    if collection.find_one({'username': username}):
        return jsonify({'error': 'Username already exists'}), 409

    # Hash the password for security
    hashed_password = generate_password_hash(password)

    # Insert the new user into the database
    try:
        result = collection.insert_one({
            'first_name': first_name,
            'last_name': last_name,
            'zip_code': zip_code,
            'phone_number': phone_number,
            'username': username,
            'password': hashed_password  # Store the hashed password
        })
        return jsonify({'message': 'User registered successfully', 'user_id': str(result.inserted_id)}), 201
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
