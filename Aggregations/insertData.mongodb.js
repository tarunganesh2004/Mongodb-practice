// @ts-nocheck
// use practice_db;

db.orders.insertMany([
    {
        orderId: 1,
        customer: { id: "C1", name: "Amit", segment: "Corporate", region: "East" },
        items: [
            { product: "Laptop", category: "Electronics", subCategory: "Computers", price: 55000, quantity: 1 },
            { product: "Mouse", category: "Electronics", subCategory: "Accessories", price: 700, quantity: 2 }
        ],
        payment: { mode: "Card", status: "Paid" },
        orderDate: ISODate("2024-01-05"),
        profit: 8200
    },
    {
        orderId: 2,
        customer: { id: "C2", name: "Neha", segment: "Consumer", region: "West" },
        items: [
            { product: "Chair", category: "Furniture", subCategory: "Office Chairs", price: 4500, quantity: 2 }
        ],
        payment: { mode: "UPI", status: "Paid" },
        orderDate: ISODate("2024-01-06"),
        profit: 1200
    },
    {
        orderId: 3,
        customer: { id: "C3", name: "Rahul", segment: "Home Office", region: "South" },
        items: [
            { product: "Table", category: "Furniture", subCategory: "Tables", price: 8000, quantity: 1 },
            { product: "Lamp", category: "Furniture", subCategory: "Lighting", price: 1200, quantity: 1 }
        ],
        payment: { mode: "COD", status: "Pending" },
        orderDate: ISODate("2024-01-07"),
        profit: 2100
    },
    {
        orderId: 4,
        customer: { id: "C1", name: "Amit", segment: "Corporate", region: "East" },
        items: [
            { product: "Printer", category: "Electronics", subCategory: "Office", price: 15000, quantity: 1 }
        ],
        payment: { mode: "Card", status: "Paid" },
        orderDate: ISODate("2024-01-08"),
        profit: 3200
    },
    {
        orderId: 5,
        customer: { id: "C4", name: "Sneha", segment: "Consumer", region: "North" },
        items: [
            { product: "Phone", category: "Electronics", subCategory: "Mobiles", price: 30000, quantity: 1 },
            { product: "Earphones", category: "Electronics", subCategory: "Accessories", price: 1500, quantity: 1 }
        ],
        payment: { mode: "UPI", status: "Paid" },
        orderDate: ISODate("2024-01-09"),
        profit: 5400
    },

    // ---- repeat pattern, varied data ----
    {
        orderId: 6,
        customer: { id: "C5", name: "Vikas", segment: "Corporate", region: "West" },
        items: [{ product: "Desk", category: "Furniture", subCategory: "Tables", price: 12000, quantity: 1 }],
        payment: { mode: "Card", status: "Paid" },
        orderDate: ISODate("2024-01-10"),
        profit: 2800
    },
    {
        orderId: 7,
        customer: { id: "C6", name: "Pooja", segment: "Consumer", region: "East" },
        items: [{ product: "Monitor", category: "Electronics", subCategory: "Computers", price: 18000, quantity: 1 }],
        payment: { mode: "UPI", status: "Paid" },
        orderDate: ISODate("2024-01-11"),
        profit: 3600
    },
    {
        orderId: 8,
        customer: { id: "C7", name: "Ravi", segment: "Home Office", region: "South" },
        items: [
            { product: "Keyboard", category: "Electronics", subCategory: "Accessories", price: 1200, quantity: 1 },
            { product: "Mouse", category: "Electronics", subCategory: "Accessories", price: 700, quantity: 1 }
        ],
        payment: { mode: "COD", status: "Cancelled" },
        orderDate: ISODate("2024-01-12"),
        profit: -300
    },
    {
        orderId: 9,
        customer: { id: "C8", name: "Anil", segment: "Corporate", region: "North" },
        items: [{ product: "Router", category: "Electronics", subCategory: "Networking", price: 4000, quantity: 2 }],
        payment: { mode: "Card", status: "Paid" },
        orderDate: ISODate("2024-01-13"),
        profit: 1500
    },
    {
        orderId: 10,
        customer: { id: "C9", name: "Kiran", segment: "Consumer", region: "West" },
        items: [{ product: "Book Shelf", category: "Furniture", subCategory: "Storage", price: 9000, quantity: 1 }],
        payment: { mode: "UPI", status: "Paid" },
        orderDate: ISODate("2024-01-14"),
        profit: 2100
    },
    {
        orderId: 11,
        customer: { id: "C10", name: "Manoj", segment: "Corporate", region: "South" },
        items: [
            { product: "Laptop", category: "Electronics", subCategory: "Computers", price: 52000, quantity: 1 }
        ],
        payment: { mode: "Card", status: "Paid" },
        orderDate: ISODate("2024-01-15"),
        profit: 7500
    },
    {
        orderId: 12,
        customer: { id: "C2", name: "Neha", segment: "Consumer", region: "West" },
        items: [
            { product: "Phone", category: "Electronics", subCategory: "Mobiles", price: 28000, quantity: 1 }
        ],
        payment: { mode: "UPI", status: "Paid" },
        orderDate: ISODate("2024-01-16"),
        profit: 4300
    },
    {
        orderId: 13,
        customer: { id: "C11", name: "Arjun", segment: "Home Office", region: "East" },
        items: [
            { product: "Desk", category: "Furniture", subCategory: "Tables", price: 11000, quantity: 1 },
            { product: "Chair", category: "Furniture", subCategory: "Office Chairs", price: 4800, quantity: 1 }
        ],
        payment: { mode: "COD", status: "Paid" },
        orderDate: ISODate("2024-01-17"),
        profit: 2600
    },
    {
        orderId: 14,
        customer: { id: "C12", name: "Kavya", segment: "Consumer", region: "North" },
        items: [
            { product: "Lamp", category: "Furniture", subCategory: "Lighting", price: 1500, quantity: 2 }
        ],
        payment: { mode: "UPI", status: "Paid" },
        orderDate: ISODate("2024-01-18"),
        profit: 800
    },
    {
        orderId: 15,
        customer: { id: "C5", name: "Vikas", segment: "Corporate", region: "West" },
        items: [
            { product: "Router", category: "Electronics", subCategory: "Networking", price: 4200, quantity: 3 }
        ],
        payment: { mode: "Card", status: "Paid" },
        orderDate: ISODate("2024-01-19"),
        profit: 2100
    },
    {
        orderId: 16,
        customer: { id: "C13", name: "Suresh", segment: "Consumer", region: "South" },
        items: [
            { product: "Monitor", category: "Electronics", subCategory: "Computers", price: 17500, quantity: 1 },
            { product: "Keyboard", category: "Electronics", subCategory: "Accessories", price: 1200, quantity: 1 }
        ],
        payment: { mode: "UPI", status: "Paid" },
        orderDate: ISODate("2024-01-20"),
        profit: 3200
    },
    {
        orderId: 17,
        customer: { id: "C14", name: "Deepak", segment: "Corporate", region: "East" },
        items: [
            { product: "Printer", category: "Electronics", subCategory: "Office", price: 14500, quantity: 1 }
        ],
        payment: { mode: "Card", status: "Paid" },
        orderDate: ISODate("2024-01-21"),
        profit: 2900
    },
    {
        orderId: 18,
        customer: { id: "C6", name: "Pooja", segment: "Consumer", region: "East" },
        items: [
            { product: "Mouse", category: "Electronics", subCategory: "Accessories", price: 700, quantity: 2 }
        ],
        payment: { mode: "COD", status: "Cancelled" },
        orderDate: ISODate("2024-01-22"),
        profit: -200
    },
    {
        orderId: 19,
        customer: { id: "C15", name: "Rohit", segment: "Home Office", region: "North" },
        items: [
            { product: "Book Shelf", category: "Furniture", subCategory: "Storage", price: 9200, quantity: 1 }
        ],
        payment: { mode: "UPI", status: "Paid" },
        orderDate: ISODate("2024-01-23"),
        profit: 1900
    },
    {
        orderId: 20,
        customer: { id: "C16", name: "Nikhil", segment: "Corporate", region: "South" },
        items: [
            { product: "Server Rack", category: "Electronics", subCategory: "Infrastructure", price: 65000, quantity: 1 }
        ],
        payment: { mode: "Card", status: "Paid" },
        orderDate: ISODate("2024-01-24"),
        profit: 10200
    },
    {
        orderId: 21,
        customer: { id: "C1", name: "Amit", segment: "Corporate", region: "East" },
        items: [
            { product: "Monitor", category: "Electronics", subCategory: "Computers", price: 17000, quantity: 1 }
        ],
        payment: { mode: "UPI", status: "Paid" },
        orderDate: ISODate("2024-01-25"),
        profit: 3400
    },
    {
        orderId: 22,
        customer: { id: "C17", name: "Bhavya", segment: "Consumer", region: "West" },
        items: [
            { product: "Table", category: "Furniture", subCategory: "Tables", price: 7800, quantity: 1 }
        ],
        payment: { mode: "COD", status: "Paid" },
        orderDate: ISODate("2024-01-26"),
        profit: 1400
    },
    {
        orderId: 23,
        customer: { id: "C18", name: "Harsha", segment: "Home Office", region: "South" },
        items: [
            { product: "Phone", category: "Electronics", subCategory: "Mobiles", price: 32000, quantity: 1 }
        ],
        payment: { mode: "Card", status: "Paid" },
        orderDate: ISODate("2024-01-27"),
        profit: 5100
    },
    {
        orderId: 24,
        customer: { id: "C19", name: "Swathi", segment: "Consumer", region: "North" },
        items: [
            { product: "Earphones", category: "Electronics", subCategory: "Accessories", price: 1800, quantity: 2 }
        ],
        payment: { mode: "UPI", status: "Paid" },
        orderDate: ISODate("2024-01-28"),
        profit: 900
    },
    {
        orderId: 25,
        customer: { id: "C20", name: "Pranav", segment: "Corporate", region: "West" },
        items: [
            { product: "Conference Table", category: "Furniture", subCategory: "Tables", price: 45000, quantity: 1 }
        ],
        payment: { mode: "Card", status: "Paid" },
        orderDate: ISODate("2024-01-29"),
        profit: 8700
    },
    {
        orderId: 26,
        customer: { id: "C21", name: "Isha", segment: "Consumer", region: "East" },
        items: [
            { product: "Lamp", category: "Furniture", subCategory: "Lighting", price: 1300, quantity: 1 }
        ],
        payment: { mode: "UPI", status: "Paid" },
        orderDate: ISODate("2024-01-30"),
        profit: 500
    },
    {
        orderId: 27,
        customer: { id: "C22", name: "Aditya", segment: "Corporate", region: "North" },
        items: [
            { product: "Firewall", category: "Electronics", subCategory: "Networking", price: 58000, quantity: 1 }
        ],
        payment: { mode: "Card", status: "Paid" },
        orderDate: ISODate("2024-02-01"),
        profit: 9200
    },
    {
        orderId: 28,
        customer: { id: "C23", name: "Meena", segment: "Home Office", region: "West" },
        items: [
            { product: "Desk", category: "Furniture", subCategory: "Tables", price: 10500, quantity: 1 }
        ],
        payment: { mode: "COD", status: "Paid" },
        orderDate: ISODate("2024-02-02"),
        profit: 1800
    },
    {
        orderId: 29,
        customer: { id: "C24", name: "Varun", segment: "Consumer", region: "South" },
        items: [
            { product: "Keyboard", category: "Electronics", subCategory: "Accessories", price: 1400, quantity: 1 }
        ],
        payment: { mode: "UPI", status: "Paid" },
        orderDate: ISODate("2024-02-03"),
        profit: 600
    },
    {
        orderId: 30,
        customer: { id: "C25", name: "Lakshmi", segment: "Corporate", region: "East" },
        items: [
            { product: "UPS", category: "Electronics", subCategory: "Power", price: 22000, quantity: 1 }
        ],
        payment: { mode: "Card", status: "Paid" },
        orderDate: ISODate("2024-02-04"),
        profit: 4100
    }

]);

