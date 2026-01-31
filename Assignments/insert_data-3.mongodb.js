// use("assignment");


db.orders1.insertMany(
    [
        {
            "_id": 1,
            "date": "2020-01-01",
            "first_name": "Amit",
            "last_name": "Kumar",
            "gender": "Male",
            "email": "amit.kumar@infosys.com",
            "items": [
                { "item_name": "Veg Biryani", "category": "Main Course", "price": 180, "quantity": 2 },
                { "item_name": "Gulab Jamun", "category": "Dessert", "price": 60, "quantity": 2 }
            ],
            "amount": 480,
            "payment": "Debit Card"
        },
        {
            "_id": 2,
            "date": "2020-01-02",
            "first_name": "Priya",
            "last_name": "Sharma",
            "gender": "Female",
            "email": "priya.sharma@infosys.com",
            "items": [
                { "item_name": "Paneer Butter Masala", "category": "Main Course", "price": 220, "quantity": 1 },
                { "item_name": "Butter Naan", "category": "Main Course", "price": 40, "quantity": 3 }
            ],
            "amount": 340,
            "payment": "Credit Card"
        },
        {
            "_id": 3,
            "date": "2020-01-03",
            "first_name": "Ravi",
            "last_name": "Teja",
            "gender": "Male",
            "email": "ravi.teja@infosys.com",
            "items": [
                { "item_name": "Chicken Biryani", "category": "Main Course", "price": 250, "quantity": 1 },
                { "item_name": "Coke", "category": "Beverage", "price": 50, "quantity": 1 }
            ],
            "amount": 300,
            "payment": "UPI"
        },
        {
            "_id": 4,
            "date": "2020-01-04",
            "first_name": "Sneha",
            "last_name": "Reddy",
            "gender": "Female",
            "email": "sneha.reddy@infosys.com",
            "items": [
                { "item_name": "North Indian Thali", "category": "Main Course", "price": 200, "quantity": 1 },
                { "item_name": "Ice Cream", "category": "Dessert", "price": 90, "quantity": 1 }
            ],
            "amount": 290,
            "payment": "Cash"
        },
        {
            "_id": 5,
            "date": "2020-01-05",
            "first_name": "Arjun",
            "last_name": "Patel",
            "gender": "Male",
            "email": "arjun.patel@infosys.com",
            "items": [
                { "item_name": "Masala Dosa", "category": "Main Course", "price": 90, "quantity": 2 },
                { "item_name": "Filter Coffee", "category": "Beverage", "price": 40, "quantity": 1 }
            ],
            "amount": 220,
            "payment": "UPI"
        },
        {
            "_id": 6,
            "date": "2020-01-06",
            "first_name": "Kiran",
            "last_name": "Das",
            "gender": "Male",
            "email": "kiran.das@infosys.com",
            "items": [
                { "item_name": "Veg Fried Rice", "category": "Main Course", "price": 160, "quantity": 2 }
            ],
            "amount": 320,
            "payment": "Debit Card"
        },
        {
            "_id": 7,
            "date": "2020-01-07",
            "first_name": "Anjali",
            "last_name": "Mehta",
            "gender": "Female",
            "email": "anjali.mehta@infosys.com",
            "items": [
                { "item_name": "Pasta", "category": "Main Course", "price": 200, "quantity": 1 },
                { "item_name": "Brownie", "category": "Dessert", "price": 120, "quantity": 1 }
            ],
            "amount": 320,
            "payment": "Credit Card"
        },
        {
            "_id": 8,
            "date": "2020-01-08",
            "first_name": "Suresh",
            "last_name": "Naik",
            "gender": "Male",
            "email": "suresh.naik@infosys.com",
            "items": [
                { "item_name": "South Indian Thali", "category": "Main Course", "price": 180, "quantity": 2 }
            ],
            "amount": 360,
            "payment": "Cash"
        },
        {
            "_id": 9,
            "date": "2020-01-09",
            "first_name": "Divya",
            "last_name": "Iyer",
            "gender": "Female",
            "email": "divya.iyer@infosys.com",
            "items": [
                { "item_name": "Idli Vada", "category": "Main Course", "price": 70, "quantity": 3 }
            ],
            "amount": 210,
            "payment": "UPI"
        },
        {
            "_id": 10,
            "date": "2020-01-10",
            "first_name": "Manoj",
            "last_name": "Verma",
            "gender": "Male",
            "email": "manoj.verma@infosys.com",
            "items": [
                { "item_name": "Chicken Curry", "category": "Main Course", "price": 240, "quantity": 1 },
                { "item_name": "Roti", "category": "Main Course", "price": 20, "quantity": 4 }
            ],
            "amount": 320,
            "payment": "Debit Card"
        },
        {
            "_id": 11,
            "date": "2020-01-11",
            "first_name": "Nisha",
            "last_name": "Kapoor",
            "gender": "Female",
            "email": "nisha.kapoor@infosys.com",
            "items": [
                { "item_name": "Veg Burger", "category": "Fast Food", "price": 120, "quantity": 2 }
            ],
            "amount": 240,
            "payment": "UPI"
        },
        {
            "_id": 12,
            "date": "2020-01-12",
            "first_name": "Rahul",
            "last_name": "Singh",
            "gender": "Male",
            "email": "rahul.singh@infosys.com",
            "items": [
                { "item_name": "Fish Curry", "category": "Main Course", "price": 260, "quantity": 1 }
            ],
            "amount": 260,
            "payment": "Cash"
        },
        {
            "_id": 13,
            "date": "2020-01-13",
            "first_name": "Meena",
            "last_name": "Joshi",
            "gender": "Female",
            "email": "meena.joshi@infosys.com",
            "items": [
                { "item_name": "Veg Thali", "category": "Main Course", "price": 190, "quantity": 1 }
            ],
            "amount": 190,
            "payment": "Debit Card"
        },
        {
            "_id": 14,
            "date": "2020-01-14",
            "first_name": "Vikram",
            "last_name": "Rao",
            "gender": "Male",
            "email": "vikram.rao@infosys.com",
            "items": [
                { "item_name": "Mutton Biryani", "category": "Main Course", "price": 320, "quantity": 1 }
            ],
            "amount": 320,
            "payment": "Credit Card"
        },
        {
            "_id": 15,
            "date": "2020-01-15",
            "first_name": "Pooja",
            "last_name": "Malhotra",
            "gender": "Female",
            "email": "pooja.malhotra@infosys.com",
            "items": [
                { "item_name": "Salad", "category": "Starter", "price": 100, "quantity": 2 }
            ],
            "amount": 200,
            "payment": "UPI"
        },
        {
            "_id": 16,
            "date": "2020-01-16",
            "first_name": "Jayasakthiram",
            "last_name": "N",
            "gender": "Male",
            "email": "jayasakthiram.n@infosys.com",
            "items": [
                { "item_name": "North Indian Thali", "category": "Main Course", "price": 131, "quantity": 3 },
                { "item_name": "Choco Fest Roll Ice Cream", "category": "Dessert", "price": 150, "quantity": 1 }
            ],
            "amount": 543,
            "payment": "Debit Card"
        },
        {
            "_id": 17,
            "date": "2020-01-17",
            "first_name": "Sanjay",
            "last_name": "Gupta",
            "gender": "Male",
            "email": "sanjay.gupta@infosys.com",
            "items": [
                { "item_name": "Rajma Chawal", "category": "Main Course", "price": 160, "quantity": 2 }
            ],
            "amount": 320,
            "payment": "Cash"
        },

        {
            "_id": 18,
            "date": "2020-01-18",
            "first_name": "Rohit",
            "last_name": "Agarwal",
            "gender": "Male",
            "email": "rohit.agarwal@infosys.com",
            "items": [
                { "item_name": "Chicken Fried Rice", "category": "Main Course", "price": 190, "quantity": 2 }
            ],
            "amount": 380,
            "payment": "Debit Card"
        },
        {
            "_id": 19,
            "date": "2020-01-19",
            "first_name": "Kavya",
            "last_name": "Menon",
            "gender": "Female",
            "email": "kavya.menon@infosys.com",
            "items": [
                { "item_name": "Veg Wrap", "category": "Fast Food", "price": 140, "quantity": 2 }
            ],
            "amount": 280,
            "payment": "UPI"
        },
        {
            "_id": 20,
            "date": "2020-01-20",
            "first_name": "Anand",
            "last_name": "Mishra",
            "gender": "Male",
            "email": "anand.mishra@infosys.com",
            "items": [
                { "item_name": "Paneer Tikka", "category": "Starter", "price": 210, "quantity": 1 },
                { "item_name": "Butter Roti", "category": "Main Course", "price": 25, "quantity": 4 }
            ],
            "amount": 310,
            "payment": "Credit Card"
        },
        {
            "_id": 21,
            "date": "2020-01-21",
            "first_name": "Swathi",
            "last_name": "Rao",
            "gender": "Female",
            "email": "swathi.rao@infosys.com",
            "items": [
                { "item_name": "Curd Rice", "category": "Main Course", "price": 120, "quantity": 2 }
            ],
            "amount": 240,
            "payment": "Cash"
        },
        {
            "_id": 22,
            "date": "2020-01-22",
            "first_name": "Deepak",
            "last_name": "Yadav",
            "gender": "Male",
            "email": "deepak.yadav@infosys.com",
            "items": [
                { "item_name": "Egg Curry", "category": "Main Course", "price": 180, "quantity": 1 },
                { "item_name": "Jeera Rice", "category": "Main Course", "price": 130, "quantity": 1 }
            ],
            "amount": 310,
            "payment": "Debit Card"
        },
        {
            "_id": 23,
            "date": "2020-01-23",
            "first_name": "Aishwarya",
            "last_name": "Kulkarni",
            "gender": "Female",
            "email": "aishwarya.kulkarni@infosys.com",
            "items": [
                { "item_name": "Pav Bhaji", "category": "Fast Food", "price": 150, "quantity": 2 }
            ],
            "amount": 300,
            "payment": "UPI"
        },
        {
            "_id": 24,
            "date": "2020-01-24",
            "first_name": "Harsha",
            "last_name": "Vardhan",
            "gender": "Male",
            "email": "harsha.vardhan@infosys.com",
            "items": [
                { "item_name": "Chicken Shawarma", "category": "Fast Food", "price": 170, "quantity": 2 }
            ],
            "amount": 340,
            "payment": "Credit Card"
        },
        {
            "_id": 25,
            "date": "2020-01-25",
            "first_name": "Lavanya",
            "last_name": "Srinivas",
            "gender": "Female",
            "email": "lavanya.srinivas@infosys.com",
            "items": [
                { "item_name": "Upma", "category": "Main Course", "price": 80, "quantity": 2 },
                { "item_name": "Tea", "category": "Beverage", "price": 30, "quantity": 1 }
            ],
            "amount": 190,
            "payment": "Cash"
        },
        {
            "_id": 26,
            "date": "2020-01-26",
            "first_name": "Siddharth",
            "last_name": "Bansal",
            "gender": "Male",
            "email": "siddharth.bansal@infosys.com",
            "items": [
                { "item_name": "Cheese Pizza", "category": "Fast Food", "price": 300, "quantity": 1 }
            ],
            "amount": 300,
            "payment": "Debit Card"
        },
        {
            "_id": 27,
            "date": "2020-01-27",
            "first_name": "Neha",
            "last_name": "Arora",
            "gender": "Female",
            "email": "neha.arora@infosys.com",
            "items": [
                { "item_name": "Veg Momos", "category": "Fast Food", "price": 120, "quantity": 2 }
            ],
            "amount": 240,
            "payment": "UPI"
        },
        {
            "_id": 28,
            "date": "2020-01-28",
            "first_name": "Nitin",
            "last_name": "Chopra",
            "gender": "Male",
            "email": "nitin.chopra@infosys.com",
            "items": [
                { "item_name": "Butter Chicken", "category": "Main Course", "price": 280, "quantity": 1 },
                { "item_name": "Naan", "category": "Main Course", "price": 40, "quantity": 2 }
            ],
            "amount": 360,
            "payment": "Credit Card"
        },
        {
            "_id": 29,
            "date": "2020-01-29",
            "first_name": "Bhavya",
            "last_name": "Jain",
            "gender": "Female",
            "email": "bhavya.jain@infosys.com",
            "items": [
                { "item_name": "Veg Sandwich", "category": "Fast Food", "price": 90, "quantity": 2 }
            ],
            "amount": 180,
            "payment": "Cash"
        },
        {
            "_id": 30,
            "date": "2020-01-30",
            "first_name": "Ashok",
            "last_name": "Nair",
            "gender": "Male",
            "email": "ashok.nair@infosys.com",
            "items": [
                { "item_name": "Kerala Meals", "category": "Main Course", "price": 200, "quantity": 1 }
            ],
            "amount": 200,
            "payment": "Debit Card"
        },
        {
            "_id": 31,
            "date": "2020-01-31",
            "first_name": "Ritika",
            "last_name": "Ghosh",
            "gender": "Female",
            "email": "ritika.ghosh@infosys.com",
            "items": [
                { "item_name": "Chocolate Pastry", "category": "Dessert", "price": 110, "quantity": 2 }
            ],
            "amount": 220,
            "payment": "UPI"
        },
        {
            "_id": 32,
            "date": "2020-02-01",
            "first_name": "Varun",
            "last_name": "Khanna",
            "gender": "Male",
            "email": "varun.khanna@infosys.com",
            "items": [
                { "item_name": "Tandoori Chicken", "category": "Main Course", "price": 320, "quantity": 1 }
            ],
            "amount": 320,
            "payment": "Credit Card"
        },
        {
            "_id": 33,
            "date": "2020-02-02",
            "first_name": "Pallavi",
            "last_name": "Deshpande",
            "gender": "Female",
            "email": "pallavi.deshpande@infosys.com",
            "items": [
                { "item_name": "Veg Pulao", "category": "Main Course", "price": 160, "quantity": 2 }
            ],
            "amount": 320,
            "payment": "Debit Card"
        },
        {
            "_id": 34,
            "date": "2020-02-03",
            "first_name": "Gaurav",
            "last_name": "Saxena",
            "gender": "Male",
            "email": "gaurav.saxena@infosys.com",
            "items": [
                { "item_name": "Chole Bhature", "category": "Main Course", "price": 170, "quantity": 2 }
            ],
            "amount": 340,
            "payment": "Cash"
        },

        {
            "_id": 35,
            "date": "2020-02-04",
            "first_name": "Ramesh",
            "last_name": "Pandey",
            "gender": "Male",
            "email": "ramesh.pandey@infosys.com",
            "items": [
                { "item_name": "Veg Korma", "category": "Main Course", "price": 180, "quantity": 2 }
            ],
            "amount": 360,
            "payment": "Debit Card"
        },
        {
            "_id": 36,
            "date": "2020-02-05",
            "first_name": "Sunita",
            "last_name": "Mishra",
            "gender": "Female",
            "email": "sunita.mishra@infosys.com",
            "items": [
                { "item_name": "Poha", "category": "Main Course", "price": 70, "quantity": 2 },
                { "item_name": "Coffee", "category": "Beverage", "price": 40, "quantity": 1 }
            ],
            "amount": 180,
            "payment": "UPI"
        },
        {
            "_id": 37,
            "date": "2020-02-06",
            "first_name": "Karthik",
            "last_name": "Shetty",
            "gender": "Male",
            "email": "karthik.shetty@infosys.com",
            "items": [
                { "item_name": "Chicken 65", "category": "Starter", "price": 220, "quantity": 1 }
            ],
            "amount": 220,
            "payment": "Credit Card"
        },
        {
            "_id": 38,
            "date": "2020-02-07",
            "first_name": "Anusha",
            "last_name": "Raman",
            "gender": "Female",
            "email": "anusha.raman@infosys.com",
            "items": [
                { "item_name": "Veg Noodles", "category": "Main Course", "price": 150, "quantity": 2 }
            ],
            "amount": 300,
            "payment": "Cash"
        },
        {
            "_id": 39,
            "date": "2020-02-08",
            "first_name": "Mohit",
            "last_name": "Bhatia",
            "gender": "Male",
            "email": "mohit.bhatia@infosys.com",
            "items": [
                { "item_name": "Chettinad Chicken", "category": "Main Course", "price": 290, "quantity": 1 },
                { "item_name": "Rice", "category": "Main Course", "price": 90, "quantity": 1 }
            ],
            "amount": 380,
            "payment": "Debit Card"
        },
        {
            "_id": 40,
            "date": "2020-02-09",
            "first_name": "Shilpa",
            "last_name": "Kale",
            "gender": "Female",
            "email": "shilpa.kale@infosys.com",
            "items": [
                { "item_name": "Veg Manchurian", "category": "Starter", "price": 160, "quantity": 2 }
            ],
            "amount": 320,
            "payment": "UPI"
        },
        {
            "_id": 41,
            "date": "2020-02-10",
            "first_name": "Ajay",
            "last_name": "Malik",
            "gender": "Male",
            "email": "ajay.malik@infosys.com",
            "items": [
                { "item_name": "Dal Tadka", "category": "Main Course", "price": 140, "quantity": 2 },
                { "item_name": "Jeera Rice", "category": "Main Course", "price": 130, "quantity": 1 }
            ],
            "amount": 410,
            "payment": "Credit Card"
        },
        {
            "_id": 42,
            "date": "2020-02-11",
            "first_name": "Keerthi",
            "last_name": "S",
            "gender": "Female",
            "email": "keerthi.s@infosys.com",
            "items": [
                { "item_name": "Rava Dosa", "category": "Main Course", "price": 110, "quantity": 2 }
            ],
            "amount": 220,
            "payment": "Cash"
        },
        {
            "_id": 43,
            "date": "2020-02-12",
            "first_name": "Vinay",
            "last_name": "Hegde",
            "gender": "Male",
            "email": "vinay.hegde@infosys.com",
            "items": [
                { "item_name": "Seafood Platter", "category": "Main Course", "price": 420, "quantity": 1 }
            ],
            "amount": 420,
            "payment": "Debit Card"
        },
        {
            "_id": 44,
            "date": "2020-02-13",
            "first_name": "Sowmya",
            "last_name": "R",
            "gender": "Female",
            "email": "sowmya.r@infosys.com",
            "items": [
                { "item_name": "Veg Cutlet", "category": "Starter", "price": 90, "quantity": 2 },
                { "item_name": "Tea", "category": "Beverage", "price": 30, "quantity": 1 }
            ],
            "amount": 210,
            "payment": "UPI"
        },
        {
            "_id": 45,
            "date": "2020-02-14",
            "first_name": "Prakash",
            "last_name": "Iyer",
            "gender": "Male",
            "email": "prakash.iyer@infosys.com",
            "items": [
                { "item_name": "Sambar Rice", "category": "Main Course", "price": 140, "quantity": 2 }
            ],
            "amount": 280,
            "payment": "Cash"
        },
        {
            "_id": 46,
            "date": "2020-02-15",
            "first_name": "Tanvi",
            "last_name": "Kulkarni",
            "gender": "Female",
            "email": "tanvi.kulkarni@infosys.com",
            "items": [
                { "item_name": "Fruit Salad", "category": "Dessert", "price": 130, "quantity": 2 }
            ],
            "amount": 260,
            "payment": "Debit Card"
        },
        {
            "_id": 47,
            "date": "2020-02-16",
            "first_name": "Naveen",
            "last_name": "Chandra",
            "gender": "Male",
            "email": "naveen.chandra@infosys.com",
            "items": [
                { "item_name": "Hyderabadi Biryani", "category": "Main Course", "price": 280, "quantity": 1 }
            ],
            "amount": 280,
            "payment": "Credit Card"
        },
        {
            "_id": 48,
            "date": "2020-02-17",
            "first_name": "Aparna",
            "last_name": "Nair",
            "gender": "Female",
            "email": "aparna.nair@infosys.com",
            "items": [
                { "item_name": "Appam & Stew", "category": "Main Course", "price": 200, "quantity": 1 }
            ],
            "amount": 200,
            "payment": "UPI"
        },
        {
            "_id": 49,
            "date": "2020-02-18",
            "first_name": "Kunal",
            "last_name": "Mehra",
            "gender": "Male",
            "email": "kunal.mehra@infosys.com",
            "items": [
                { "item_name": "Grilled Sandwich", "category": "Fast Food", "price": 120, "quantity": 2 }
            ],
            "amount": 240,
            "payment": "Cash"
        },
        {
            "_id": 50,
            "date": "2020-02-19",
            "first_name": "Shruti",
            "last_name": "Bose",
            "gender": "Female",
            "email": "shruti.bose@infosys.com",
            "items": [
                { "item_name": "Veg Lasagna", "category": "Main Course", "price": 260, "quantity": 1 },
                { "item_name": "Garlic Bread", "category": "Starter", "price": 90, "quantity": 1 }
            ],
            "amount": 350,
            "payment": "Debit Card"
        }
    ]

);