from pymongo import MongoClient
import certifi
from flask import Flask, request, jsonify

app = Flask(__name__)

# Connection string with the password directly included
mongo_uri = "mongodb+srv://Skill_swap_user:Skillswap123@skillswap.yrklhmk.mongodb.net/SkillswapDB?retryWrites=true&w=majority"

# Create a MongoClient to the MongoDB cluster
client = MongoClient(mongo_uri, tlsCAFile=certifi.where())

# Select the database
db = client.SkillswapDB

# Select the collection within the database
collection = db.SkillswapCollection

# Document to insert
document = {"name": "John Doe", "skills": ["Python", "MongoDB"], "location": "Internet"}

# Insert the document into the collection
insert_result = collection.insert_one(document)

# Print the ID of the new document
print(f"Document inserted with ID: {insert_result.inserted_id}")


@app.route("/new-user")
def users():
    return {"first": "Erin", "Last": "Kramer", "Zip": "87956", "Number": "888-888-8888", "About": "Hello", "Skills": ["Plumbing", "Electricity", "Dusting"], "Username": "erink", "Password":"pass"}
    

# @app.route('/new-user',methods=['POST'])
# def createUser():
#     id=collection.insert_one({
#         'first-name':request.json['name'],
#         'number': request.json['number']
#     })
#     return


if __name__ == "__main__":
    app.run(debug=True)
