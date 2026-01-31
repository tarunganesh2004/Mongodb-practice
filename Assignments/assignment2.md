```sh

// 1. display the passenger PNRNo,source,destination,
// DateOfJourney of those passengers who are travelling in the month of May and at 9AM
db.railways.aggregate([
    {
        // here date is stored as string 
        // so we use regex 
        $match: {
            DateOfJourney: {
                $regex: /^09:00.*May/i
                // ^09:00 means starts at 9.00am
                // .* means anystring in middle
                // Month is May , i is case Insensitve
        }
    } },
    {
        $project: {
            _id: 0, PNRNO: 1, "TravelLocation.Source": 1, "TravelLocation.Destination": 1
        }
    }
]);



// 2. Display total sum of travel fare amount of top 3 transactions arranged based on totalFare
db.railways.find();
db.railways.aggregate([
    { $sort: { TotalFare: -1 } },
    { $limit: 3 },
    {
        $group: {
            _id: null, TotalSumFare: { $sum: "$TotalFare" }
        }
    },
    {
        $project: {
            _id: 0, TotalSumFare: 1
        }
    }

]);


// 3. Generate a ticket id by combining the day part of the travel date,
// the first letter number of the source and destination,
// 3 characters of the month of travel(in uppercase),
// the first number in _id and Classes
// to get , we use {$substr:["$TravelLocation.Source",<startIndex>,<length>]}
// 11:00 12/May/2019
db.railways.aggregate([{
    // project 
    $project: {
        _id: 0,
        TicketID:{
        $concat: [
            // day part 
            { $substr: ["$DateOfJourney", 6, 2] }, // day is at 6th idx,
            //1st letter number of source and destination 
            { $substr: ["$TravelLocation.Source", 0, 1] },
            { $substr: ["$TravelLocation.Destination", 0, 1] },
            // 3 characters of month in upperCase 
            { $toUpper: { $substr: ["$DateOfJourney", 9, 3] } },
            // first number in _id and classes
            // now _id is not a string and its number ,so we convert to string 
                // { $toString: "$_id" },
                // instead of above
                { $substr: [{ $toString: "$_id" }, 0, 1] },
            // class
            "$Classes"
        ]
    }
    }
}
]);




// 4. display total number of passengers travelling to CHN irrespective of their source
db.railways.aggregate([
    { $match: { "TravelLocation.Destination": "CHN" } },
    { $group: { _id: null, TotalPassengers: { $sum: "$TotalNumberOfPassengers" } } },
    { $project: { _id: 0, TotalPassengers: 1 } }
]);

db.railways.find();
// 5 . Display the most frequent travel destination in May
db.railways.aggregate([
    {
        $match: {
            DateOfJourney: {
                $regex: /.*May/i
            }
        }
    },
    { $group: { _id: "$TravelLocation.Destination", count: { $sum: 1 } } },
    { $sort: { count: -1 } },
    { $limit: 1 },
    {
        $project: {
            _id: 0, Destination: "$_id"
        }
    }
]);


//6. Display class name in which most of the passengers opted InsuranceOpted
db.railways.aggregate([
    { $match: { InsuranceOpted: "Yes" } },
    { $group: { _id: "$Classes", TotalPassengers: { $sum: "$TotalNumberOfPassengers" } } },
    
    { $sort: { TotalPassengers: -1 } },
    { $limit: 1 },
    {
        $project: {
            _id: 0, Class: "$_id"
        }
    }
]);


// 7. display average ticket fare, maximum ticket fare,minimum ticket fare for each class

db.railways.find();

db.railways.aggregate([
    { $group: { _id: "$Classes", avgTicketFare: { $avg: "$TotalFare" }, maxTicketFare: { $max: "$TotalFare" }, minimumTicketFare: { $min: "$TotalFare" } } }
]);

// if it is asked per passenger
// totalFare/ number of passengers

db.railways.aggregate([
    {
        $group: {
            _id: "$Classes",
            avgFare: { $avg: { $divide: ["$TotalFare", "$TotalNumberOfPassengers"] } },
            maxFarePerPassenger: {
                $max: {
                    $divide: ["$TotalFare", "$TotalNumberOfPassengers"]
                }
            },
            minFarePerPassenger: {
                $min: {
                    $divide: ["$TotalFare", "$TotalNumberOfPassengers"]
                }
            }
        
        }
    }
]);

```