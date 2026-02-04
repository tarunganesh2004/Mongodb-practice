use("newTest");

// db.students.insertMany([
//     {
//         sid: "S001",
//         name: "Alice",
//         dept: "CSE",
//         city: "Bangalore",
//         semester: 5,
//         marks: [78, 85, 90],
//         skills: ["Java", "MongoDB", "Python"],
//         activities: [
//             { type: "sports", level: "college" },
//             { type: "coding", level: "national" }
//         ]
//     },
//     {
//         sid: "S002",
//         name: "Bob",
//         dept: "ECE",
//         city: "Hyderabad",
//         semester: 5,
//         marks: [65, 72, 80],
//         skills: ["C", "Python"],
//         activities: [
//             { type: "sports", level: "state" }
//         ]
//     },
//     {
//         sid: "S003",
//         name: "Charlie",
//         dept: "CSE",
//         city: "Bangalore",
//         semester: 7,
//         marks: [88, 92, 95],
//         skills: ["Java", "MongoDB"],
//         activities: [
//             { type: "coding", level: "international" }
//         ]
//     }
// ]);



db.students.aggregate([
    { $match: { semester: 5 } },
    {
        $project: {
            _id:0,
            Name: "$name", Dept: "$dept",
            skillCount: { $size: "$skills" }
        }
    },
    { $match: { skillCount: { $gt: 2 } } }, 
    { $sort: { skillCount: -1 } }
]);

db.students.find();
db.students.aggregate([
    { $match: { "activities.type": "coding" } },
    {
        $group: {
            _id: "$dept", uniqueCity: { $addToSet: "$city" }
        }
    },

    {
        $project: {
            _id: 0,
            Dept: "$_id",
            uniqueCity: 1
        }
    }
]);

// 3
db.students.aggregate([
    { $unwind: "$marks" },
    {
        $group: {
            _id: {
                sid: "$sid",
                Name:"$name"
            },
            avgMarks:{$avg:"$marks"}
        }
    },
    {$sort: { avgMarks: -1 } },
    {$project:{_id:0,Name:"$_id.Name",avgMarks:1}}
])

// 5.
db.students.aggregate([
    { $unwind: { "$activities"} },
    { $match: { "activities.level": { $ne: "college" } } },
    {
        $group: {
            _id: "$activities.type",
            count: { $sum: 1 }
        }
    },
    {
        $project: {
            _id: 0,
            activityType: "$_id",
            count: 1
        }
    }
    
]);

// 4. 
db.students.aggregate([
    { $match: { skills: { $all: ["Python", "Java"] } } },
    {
        $group: {
            _id: {
                dept: "$dept",
                city: "$city"
            },
            totalStudents: { $sum: 1 }
        }
    },
    {
        $sort: {
            "_id.dept": 1,
            totalStudents: -1
        }
    },
]);