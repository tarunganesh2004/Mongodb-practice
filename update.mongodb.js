
use("practice_db");
// Mongo db never updates without a filter
// updateOne()
// syntax

// db.collection.updateOne(
//     { filter },
//     {update}
// )

// update one document
// change price of one book to 600
db.books.updateOne(
    { title: "Mongodb basics" },
    { $set: { price: 600 } }
);

// dont do this
// db.books.updateOne(
//     { title: "Mongodb basics" },
//     {price: 400}
// ) // this replaces entire document removing other fields


// updateMany()
// increase price to 400 for all books by TG

// display
db.books.find(
    { author: "TG" }
);
// update 
db.books.updateMany(
    { author: "TG" },
    { $set: { price: 400 } }
); // all matching documents get updated 

db.books.find(
    { author: "TG" }
);

// increment / decrement values( $inc)

// increase price by 50
db.books.updateOne(
    { title: "Mongodb basics" },
    { $inc: { price: 50 } }
); // updates one doc , if we use many it updates for all matching fileds 

db.books.find(
    { title:"Mongodb basics" }
);

// add a new field while updating
// add published Year
db.books.updateOne(
    { title: "Mongodb basics" },
    { $set: { publishedYear: 2024 } }
);

db.books.find(
    { title: "Mongodb basics" }
);

// rename a field($rename)
// change author to writer
db.books.updateMany(
    {},
    { $rename: { author: "writer" } }
);

db.books.find().toArray();

// remove a field ( $unset )
// remove published year

db.books.updateOne(
    { title: "Mongodb basics" },
    { $unset: { publishedYear: "" } }
);

db.books.find(
    { title: "Mongodb basics" }
);

// update using conditions
// increase price by 100 for books cheaper than 400

db.books.updateMany(
    { price: { $lt: 400 } },
    { $inc: { price: 100 } }
);

db.books.find().toArray();


// update + insert
// if book exists update, if not insert new document

db.books.updateOne(
    { title: "Advanced Mongodb" }.
    { $set: { price: 500, author: "TG" } },
    { upsert: true }
);

db.books.find(
    { title: "Advanced Mongodb" }
);

db.books.find().toArray();

db.books.updateOne(
    { title: "Mongodb basics " },
    { $inc: { price: 20 } }
);
