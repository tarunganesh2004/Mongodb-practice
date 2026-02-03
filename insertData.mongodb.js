// use("test");
db.students.insertMany([
    {
        StudentID: "S001",
        Name: "Alice Wonderland",
        Branch: "Computer Science",
        Semester: 1,
        CGPA: 8.7,
        CoCurrAct: ["Coding Club", "Eco Club", "Sports"],
        Backlogs: { "1": 2, "2": 0 }
    },
    {
        StudentID: "S002",
        Name: "Bob Thebuilder",
        Branch: "Mechanical Engineering",
        Semester: 1,
        CGPA: 7.9,
        CoCurrAct: ["Robotics Club"],
        Backlogs: { "1": 3, "2": 1 }
    },
    {
        StudentID: "S003",
        Name: "Charlie Chaplin",
        Branch: "Electrical Engineering",
        Semester: 2,
        CGPA: 9.2,
        CoCurrAct: ["Drama Club", "Music Club"],
        Backlogs: { "1": 0, "2": 0 }
    },
    {
        StudentID: "S004",
        Name: "Diana Prince",
        Branch: "Civil Engineering",
        Semester: 1,
        CGPA: 8.1,
        CoCurrAct: ["Eco Club", "Community Service"],
        Backlogs: { "1": 2, "2": 1 }
    },
    {
        StudentID: "S005",
        Name: "Eve Harrington",
        Branch: "Information Technology",
        Semester: 2,
        CGPA: 8.5,
        CoCurrAct: ["Coding Club", "Research Aid", "Tech Fest"],
        Backlogs: { "1": 1, "2": 0 }
    },
    {
        StudentID: "S006",
        Name: "Frankenstein Monster",
        Branch: "Chemical Engineering",
        Semester: 2,
        CGPA: 7.1,
        CoCurrAct: ["Coding Club"],
        Backlogs: { "1": 1, "2": 2 }
    },
    {
        StudentID: "S007",
        Name: "Grace Hopper",
        Branch: "Computer Applications",
        Semester: 1,
        CGPA: 9.5,
        CoCurrAct: ["Coding Club", "Research Aid"],
        Backlogs: { "1": 0, "2": 0 }
    },
    {
        StudentID: "S008",
        Name: "Harry Potter",
        Branch: "Mechanical Engineering",
        Semester: 1,
        CGPA: 7.0,
        CoCurrAct: ["Quidditch Club", "Magic Club", "Coding Club"],
        Backlogs: { "1": 2, "2": 0 }
    },
    {
        StudentID: "S009",
        Name: "Ivy Queen",
        Branch: "Civil Engineering",
        Semester: 3,
        CGPA: 8.0,
        CoCurrAct: ["Eco Club"],
        Backlogs: { "1": 4, "2": 2 }
    },
    {
        StudentID: "S010",
        Name: "Jack Sparrow",
        Branch: "Marine Engineering",
        Semester: 1,
        CGPA: 7.8,
        CoCurrAct: ["Sailing Club", "Coding Club"],
        Backlogs: { "1": 2, "2": 1 }
    }
])
