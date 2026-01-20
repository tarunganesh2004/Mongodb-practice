const { manufacturers } = require("googleapis/build/src/apis/manufacturers");

use("product")

// display based on criteria
db.prod.find({
    manufacturer: "apple"
});

// for existence check
// db.prod.find(
//     { colors: { $exists: true } },{_id:0,prodid:1,prodname:1}
// );

// for embedded subdocuments
// db.prod.find(
//     { "categories.main": "electronics" }
// );

// $eq To retrieve the names of the products that falls under the 'smartphones' sub category:
db.prod.find(
    { "categories.sub": { $eq: "smartphones" } },
    { _id: 0, prodname: 1 }
);

// to retrieve the product whose price is less than 25000
db.prod.find(
    { price: { $lt: 25000 } },
    { _id: 0, prodname: 1 }
);

// ne , to Retrieve the documents that have values other than 'electronics' for the main category:
db.prod.find(
    { "categories.main": { $ne: "electronics" } },
    { _id: 0, prodname: 1 }
);

// array operators

db.prod.find(
    { colors: ["white", "black"] }
);

// match specifying the number of elements
// get documents which have only 2 colors
db.prod.find(
    { colors: { $size: 2 } }
);

//match specified array items 
db.prod.find(
    { colors: { $all: ["white", "gold"] } }
);

// match one or more array elements satisfying the criteria($elemMatch)
// Retrieve the documents where revisedYears array field contains atleast one element that is both greater than
// '2015' and less than or equal to '2017':

db.prod.find(
    { revisedYears: { $elemMatch: { $gt: 2015, $lte: 2017 } } }
);

// $and
// Retrieve the details of the 'smartphones' whose price is less than '25000'[inclusive]:
db.prod.find(
    {
        $and: [
            { "categories.sub": "smartphones" },
            { price: { $lte: 25000 } }
        ]
    }
);

// or
// Retrieve the details of the products whose price is greater than or equal to '80000' or products whose manufacturer is 'apple':
db.prod.find(
    {
        $or: [
            { price: { $gte: 80000 } },
            { manufacturer: "apple" }
        ]
    }
);

// not
// retrieve products where the isbn value is not equal to 23434554
db.prod.find(
    { ISBN: { $not: { $eq: 2343454 } } }
);