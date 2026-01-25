// grouping multiple columns
// use("practice_db");
// 1. for each region+segment find total orders,total profits

db.orders.find();
db.orders.aggregate([
    {
        $group: {
            _id: {
                region: "$customer.region",
                segment: "$customer.segment"
            },
            totalOrders: { $sum: 1 },
            totalProfit: { $sum: "$profit" }
        }
    },
    {
        $project:
        {
            _id: 0,
            region: "$_id.region",
            segment: "$_id.segment",
            totalOrders: 1,
            totalProfit: 1
        }
    }
]);

// 2. for each customer+region find
// total profit, only include customers whose total profit>1000

db.orders.aggregate([
    {
        $group: {
            _id: {
                name: "$customer.name",
                region: "$customer.region"
            },
            totalProfit: { $sum: "$profit" }
        }
    },
    { $match: { totalProfit: { $gt: 1000 } } },
    {
        $project: {
            _id: 0,
            name: "$_id.name",
            region: "$_id.region",
            totalProfit: 1
        }
    }
]);

// 3. for each month+region calculate
// average profit(sort by average profit descending)

db.orders.aggregate([
    {
        $group: {
            _id: {
                month: { $month: "$orderDate" },
                region: "$customer.region"
            },
            avgProfit: { $avg: "$profit" }
        }
    },
    { $sort: { avgProfit: -1 } },
    {
        $project: {
            _id: 0,
            month: "$_id.month",
            region: "$_id.region",
            avgProfit: 1
        }
    }
]);

