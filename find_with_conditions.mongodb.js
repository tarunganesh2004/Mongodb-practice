use("practice_db");


// 1. basic Idea

// db.collections.find({{condition}})

// example
// equality condition(select students whose stream is cse)
db.students.find({ branch: "CSE" }); 

// number condition

db.students.find({ age: 21 }); // gives students whose ages are 21

// multiple conditions (and )
// students who are cse and age 21
db.students.find({
    branch: "CSE",
    age: 21
});

// comparision operators (mongodb uses operators with $)
// age greater than 20

db.students.find({
    age: { $gt: 20 } // $ gt means greater than 20
});

db.students.find({
    age: { $gte: 21 } // $gte means greater than or equal to 
});

// $lt - less than, $lte - less than or equal to

// range condition(between)
// students aged between 20 and 22

db.students.find({
    age: { $gte: 20, $lte: 22 }
});

// not equal ,$ne
// students not from cse

db.students.find({
    branch: { $ne: "CSE" }
});

// in condition ($in)
// students from ece or cse 
db.students.find({
    branch: { $in: ["CSE", "ECE"] }
});

// Not in ($nin)
db.students.find({
    branch: { $nin: ["CSE", "ECE"] }
});

// OR condition ($or)
// age is 20 or branch is ece 
db.students.find({
    $or: [
        { age: 20 },
        { branch: "ECE" }
    ]
});

// and + or together
// cse students whose age is above 20 or ece students 
db.students.find({
    $or: [
        {
            branch: "CSE",
            age: { $gt: 20 }
        },
        { branch: "ECE" }
    ]
});

// 12 . Match text (String)

db.books.find({
    title: "Mongodb basics"
});

// match only specific fields (projection)
// show only name and branch, hide _id

db.students.find(
    { branch: "CSE" },
    { name: 1, branch: 1, _id: 0 }
);  // 1= show, 0=hide

// 14. Limit results
// show only 2 students 
db.students.find().limit(2);

// sort results
// ascending
db.students.find().sort({ age: 1 })

// descending
db.students.find().sort({ age: -1 })

// examples
// books cheaper than 500
db.books.find({
    price: { $lt: 500 }
});

// books author by TG 
db.books.find(
    { author: "TG" }
);

// books prices betwee 200-400
db.books.find({
    price: { $gte: 200, $lte: 400 }
});