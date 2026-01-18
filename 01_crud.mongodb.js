



use("practice_db")

// Insert
// db.collectionName.insertOne({
// key:value
// })

// db.students.insertOne({
//     name: "Top coder sh",
//     stream: "all",
//     skills: ["all"],
//     year: 2026
// });

// db.books.insertOne({
//     title: "Mongodb basics",
//     price: 300,
//     author: "TG"
// });

// verify insertion
// db.books.find().toArray()

// show collections;

// db.getCollectionNames();

// InsertMany()

// db.collectionName.insertMany([
//     { document1 },
//     { document2 },
//     { document3 }
// ]);


// db.students.insertMany([
//     {
//         name: " Ravi",
//         age: 21,
//         branch: "ECE"
//     },
//     {
//         name: "SH",
//         age: 21,
//         branch: "CSE"
//     },
//     {
//         name: "TG",
//         age: 21,
//         branch: "CSE"
//     }
// ]);

// db.students.find().toArray()

db.books.insertMany([
    {
        title: "Java",
        price: 500
    },
    {
        title: "Python",
        price: 450,
        author: "Top coder sh"
    },
    {
        title: "Mongodb",
        price: 300
    }
]);

db.books.find().toArray();