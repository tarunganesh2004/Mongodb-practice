
```sh

db.collection.aggregate([
    { stage1 },
    { stage2 },
    { stage3 }
])

3️⃣ MOST IMPORTANT: Order of Stages(Interview Question)
✅ GENERAL & BEST ORDER
$match  →  $unwind  →  $group  →  $project  →  $sort  →  $limit

Why this order ?

    Filter early → improves performance

Unwind before grouping

Group before calculating

Project near the end

Sort & limit last

⚠️ You can change order, but this is best practice

Requirement	Use
Filter rows	$match
Break arrays	$unwind
Group & calculate	$group
Rename / select fields	$project
Order results	$sort
Top N results	$limit
Count	$sum: 1
Total	$sum
Average	$avg
Multiply	$multiply

🔹 $multiply

Used inside $project or $group

totalCost: { $multiply: ["$price", "$quantity"] }

```