// date format:
// 2025-01-25T18:31:00Z

// $year --> used to extract year
// $month --> month, $dayOfMonth: --> day

// orders after a date 
db.orders.aggregate([
    {
        $match: {
            orderDate: {
                $gte: ISODate("2024-01-01"),
                $lte: ISODate("2024-12-31")
            }
        }
    }
]);
// dateto string 
ex:
db.orders.aggregate([
    {
        $project: {
            orderMonth: {
                $dateToString: { format: "%Y-%m", date: "$orderDate" }
            }
        }
    }
]);

// $dayOfWeek, $week, $hour
db.orders.aggregate([
    {
        $project: {
            dayOfWeek: { $dayOfWeek: "$orderDate" }, // 1=Sun
            week: { $week: "$orderDate" },
            hour: { $hour: "$orderDate" }
        }
    }
]);

// last N days logic (very common)
// orders in last 7days 
db.orders.aggregate([
    {
        $match: {
            orderDate: {
                $gte: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)
            }
        }
    }
]);

// $min/$max dates 
db.orders.aggregate([
    {
        $group: {
            _id: null,
            firstOrder: { $min: "$orderDate" },
            lastOrder: { $max: "$orderDate" }
        }
    }
]);