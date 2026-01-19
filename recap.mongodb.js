use("college_db");

// db.students.insertOne({
//     name: "Temp"
// });

db.getCollectionNames();

// used to show database 
db.adminCommand({ listDatabases: 1 });

// db.students.insertMany([
//     { name: "Tarun", age: 21, branch: "ECE", isActive: true },
//     { name: "Ganesh", age: 22, branch: "CSE", isActive: false },
//     { name: "Sri Hari", age: 23, branch: "MTECH", isActive: true }
// ]);

// insert without age
// db.students.insertOne({
//     name: "NoAge", branch: "CSE"
// });


// read
db.students.find();

// branch=CSE 
db.students.find({ branch: "CSE" });

// only particular columns 
db.students.find({ branch: { $exists: true } }, { name: 1, branch: 1 });// prints branch documents that are not null

// age>20
db.students.find({ age: { $gt: 21 } });

// age between 18 & 22
db.students.find({
    age: { $gte: 18, $lte: 22 }
});

// not cse 
db.students.find({
    branch: { $ne: "CSE" }
});

db.students.find({
    branch: {
        $ne: "CSE",
        $exists: true // select documents where branch is present
    }
});

// cse or ece 
db.students.find({
    branch: { $in: ["CSE", "ECE"] }
});

// show name and branch only 
db.students.find(
    {}, { name: 1, branch: 1, _id: 0 }
);

/// sort by age(asc)
db.students.find().sort({ age: 1 });

// limit 2
db.students.find().limit(2);


// update
