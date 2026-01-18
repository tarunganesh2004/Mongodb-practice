use("practice_db")

// 1) safe delete deleteOne()
// db.collection.deleteOne({filter})

// example delete one book 
db.books.find().toArray();
db.books.deleteOne(
    {title:"Mongodb basics"}
)

db.books.find(
    {title: "Mongodb basics"}
);

// delete many(deleteMany()) -- deletes all documents matching condition
// delete all books by author TG 
db.books.deleteMany({
    author: "TG"
});


// this is dangerous
// db.books.deleteMany({}); // deletes everything (collection becomes empty, we cant recover)

// delete books cheaper than 200
db.books.deleteMany(
    { price: { $lt: 200 } }
);

// delete using _id (safest way)
db.books.deleteOne({
    _id: ObjectId('696cd0e1f8f0bb0e388b87cb')
})

// 🔹 7. Delete result explanation

// MongoDB returns:

// {
//     acknowledged: true,
//         deletedCount: 1
// }

// Field	Meaning
// acknowledged	MongoDB received request
// deletedCount	Number of documents deleted


// drop collection(extreme)
db.books.drop() // deletes collection,indexes, cannot be undone

// drop database
use("practice_db");
db.dropDatabase() //deletes database 