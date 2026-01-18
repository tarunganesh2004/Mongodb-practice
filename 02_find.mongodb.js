// read data using find()
// this is the select of mongodb

use("practice_db")

// syntax db.collectionName.find()

db.books.find().toArray();