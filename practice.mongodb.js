db.users.find().pretty()

// show collections
// project

db.practice.find(
    {},
    {"courses.courseName":1,_id:0}
)

// project single element from array
// $elemMatch
db.users.find(
    {},
    { courses: { $elemMatch: { completed: true } }, _id: 0 }
)

db.users.find({
    courses: {
        $elemMatch: {
            courseName: "MongoDB",
            completed: true
        }
    }
});

// $elemMatch is used to match elements in array

// if we want subfield in array
// ex: "address.coordinates.0"

// in $and and $or we can use any nu,ber of conditions
db.users.find({
    isActive: true,
    $or: [
        { cgpa: { $gt: 9 } },
        { "extraInfo.scholarship": true },
        { age: { $lt: 20 } }
    ]
});

// $in --> matches any one 
db.users.find({
    coCurricular: { $in: ["sports", "ncc", "coding"] }
})

db.users.find({
    "address.city": { $in: ["Bangalore", "Mysore", "Delhi"] }
})

// $nin 
db.users.find({
    "address.city": { $nin: ["Bangalore", "Mysore"] }
})

// $exists
// finds document where scholarship field exists
db.users.find({
    "extraInfo.scholarship": { $exists: true }
})

// coCurricular: ["sports", "ncc", "coding", "music"]

// courses: [
//     { courseId: "C101", courseName: "MongoDB", completed: true, score: 90 },
//     { courseId: "C102", courseName: "Python", completed: false, score: 85 }
// ]

// $all --> means must contain everything 
db.users.find({
    coCurricular: { $all: ["sports", "coding"] } // order doesnt matter, extra elements allowed
})

// array
// $push
// add element(dupliates allowed)
db.users.updateOne(
    { userId: "U1001" },
    { $push: { coCurricular: "dance" } }
) // adds at end

// we can add multiple values using $each 
db.users.updateOne(
    { userId: "U1001" },
    { $push: { coCurricular: { $each: ["art", "sleep"] } } }
);

// $addToSet --> same as push but add only if not present
// { multiple values
// $addToSet: {
//     coCurricular: { $each: ["sports", "dance"] }
// }
// }

// $pop : remove by position
//remove last element 
{ $pop: { coCurricularL: 1 } }
// remove first element 
{ $pop: { coCurricular: -1 } }


// $pull --> remove by value (or remove by condition)
{ $pull: { coCurricular: "ncc" } }

// remove multiple values 
{ $pull: { coCurricular: { $in: ["sports", "music"] } } }

// $pullAll --> remove exact list 
{ $pullAll: { coCurricular: ["sports", "music"] } }

// $elemMatch
// used to ensure same object 
db.users.find({
    courses: {
        $elemMatch: {
            courseName: "MongoDB",
            completed: true
        }
    }
})

// updateOne , we can update multiple fields with one updateOne 
db.users.updateOne(
    { userId: "U1001" },
    {
        $set: {
            cgpa: 9.1,
            isActive: false,
            age: 22
        }
    }
)

// update a sub-sub field inside array object
// courses: [
//     { courseName: "MongoDB", completed: false, score: 90 }
// ]

// update first matched element -- positional $ 
db.users.updateOne(
    { "courses.courseName": "MongoDB" },
    { $set: { "courses.$.completed": true } }
)

// update element at start of array
// $push +$position 
db.users.updateOne(
    { userId: "U1001" },
    {
        $push: { // push is for default end , $position is for index 
            coCurricular: {
                $each: ["yoga"], // we can multiple also here
                $position: 0
            }
        }
    }
)

// upsert -- update+insert
// If document exists → update
// If document does NOT exist → insert new document


// regex
{
    $or: [
        { name: { $regex: "^A" } },
        { name: { $regex: "^T" } }
    ]
}

// name doesnot start with T
db.users.find({
    name: { $not: { $regex: "^T" } }
})

db.practice.find();

// aggregations
db.practice.aggregate([

    { $project: { _id: "$userId", NumOfCoCur: { $size: "$coCurricular" } } },
    {$match:{NumOfCoCur:{$gt:2}}},
    { $sort: { _id: 1 } }
    
]);

db.practice.aggregate([
    {
        $group: {
            _id: {
                userid: "$userId",
                email:"$email"
            },
            uniqueCustomers:{$addToSet:"$customerName"}
    }}
])
