use("practice_db");

// insert document with array
// db.students.insertOne({
//     name: "Ganesh",
//     skills: ["Java", "Python", "Mongodb"],
//     marks: [80, 85, 90]
// });

// read documents 
db.students.find();


// match array element
// students who know mongodb 
db.students.find({
    skills: "Mongodb"
});

// match multiple values (using $all)
// students who know both java & mongodb
db.students.find({
    skills: { $all: ["Java", "Mongodb"] }
});

// match any one value 
db.students.find({
    skills: { $in: ["Python", "C++"] }
});

// array length ($size)
// students with exactly 2 skills

db.students.find({
    skills: { $size: 2 }
});

// arrays of numbers
db.students.find({
    marks: { $gt: 83 }
});

// update arrays

// 1. add element to array ($push)
// db.students.updateOne(
//     { name: "Ganesh" },
//     { $push: { skills: "NodeJS" } }
// );

// add multiple elements ( using $each)
// db.students.updateOne(
//     { name: "Ganesh" },
//     { $push: { skills: { $each: ["React", "Express"] } } }
// );


// db.students.find({ name: "Ganesh" });


// avoid duplicates ( $addToSet -- adds only if not already present)
// db.students.updateOne(
//     { name: "Ganesh" },
//     { $addToSet: { skills: "Mongodb" } }
// );

// remove array elements

// remove specific value ($pull)
// db.students.updateOne(
//     { name: "Ganesh" },
//     { $pull: { skills: "React" } } // removes all instances of react
// );

// db.students.find({ name: "Ganesh" });

// remove all matching condition
// db.students.updateMany(
//     {},
//     { $pull: { marks: { $lt: 80 } } }
// );

// db.students.find({ name: "Ganesh" });

//update by array index

// db.students.updateOne(
//     { name: "Ganesh" },
//     { $set: { "skills.0": "Core Java" } }
// );

db.students.find({ name: "Ganesh" });

// array of objects
// db.students.insertOne({
//     name: "Tarun",
//     courses: [
//         { name: "MongoDB", duration: 30 },
//         { name: "NodeJS", duration: 25 }
//     ]
// });

// query array of objects ($elemMatch)
// students who have mongodb course with duration>20
db.students.find({
    courses: {
        $elemMatch: {
            name: "MongoDB",
            duration: { $gt: 20 }
        }
    }
}, { _id: 0, name: 1, courses: 1 });

// update array of objects
// increase duration of mongodb course 
db.students.updateOne(
    { "courses.name": "MongoDB" },
    { $inc: { "courses.$.duration": 5 } }
);

// delete array completely
db.students.updateOne(
    { name: "Ganesh" },
    { $unset: { skills: "" } }
);