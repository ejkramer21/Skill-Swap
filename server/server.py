from pymongo import MongoClient
import certifi

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
