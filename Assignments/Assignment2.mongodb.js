// 1. display the passenger PNRNo,source,destination,
// DateOfJourney of those passengers who are travelling in the month of May and at 9AM




// 2. Display total sum of travel fare amount of top 3 transactions arranged based on totalFare



// 3. Generate a ticket id by combining the day part of the travel date, the first letter number of the source and destination, 3 characters of the month of travel(in uppercase),
// the first number in _id and Classes



// 4. display total number of passengers travelling to CHN irrespective of their source


// 5 . Display the most frequent travel destination in May


//6. Display class name in which most of the passengers opted InsuranceOpted


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