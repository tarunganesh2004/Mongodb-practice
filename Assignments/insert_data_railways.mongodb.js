// use("assignments");

db.railways.insertMany([
    {
        _id: 1,
        PNRNO: 6706543,
        TravelLocation: { Source: "MUM", Destination: "CHN" },
        TotalNumberOfPassengers: 5,
        DateOfJourney: "11:00 12/May/2019",
        TotalFare: 3000,
        InsuranceOpted: "Yes",
        Classes: "SL"
    },
    {
        _id: 2,
        PNRNO: 6706541,
        TravelLocation: { Source: "MUM", Destination: "BNG" },
        TotalNumberOfPassengers: 3,
        DateOfJourney: "10:00 12/May/2019",
        TotalFare: 1800,
        InsuranceOpted: "Yes",
        Classes: "2S"
    },
    {
        _id: 3,
        PNRNO: 6706542,
        TravelLocation: { Source: "MYS", Destination: "CHN" },
        TotalNumberOfPassengers: 5,
        DateOfJourney: "09:00 12/May/2019",
        TotalFare: 1200,
        InsuranceOpted: "No",
        Classes: "SL"
    },
    {
        _id: 4,
        PNRNO: 6706544,
        TravelLocation: { Source: "DEL", Destination: "MUM" },
        TotalNumberOfPassengers: 2,
        DateOfJourney: "15:30 13/May/2019",
        TotalFare: 2500,
        InsuranceOpted: "Yes",
        Classes: "3A"
    },
    {
        _id: 5,
        PNRNO: 6706545,
        TravelLocation: { Source: "CHN", Destination: "KOL" },
        TotalNumberOfPassengers: 4,
        DateOfJourney: "08:45 14/May/2019",
        TotalFare: 3200,
        InsuranceOpted: "No",
        Classes: "2A"
    },
    {
        _id: 6,
        PNRNO: 6706546,
        TravelLocation: { Source: "BNG", Destination: "HYD" },
        TotalNumberOfPassengers: 6,
        DateOfJourney: "22:15 14/May/2019",
        TotalFare: 2100,
        InsuranceOpted: "Yes",
        Classes: "SL"
    },
    {
        _id: 7,
        PNRNO: 6706547,
        TravelLocation: { Source: "MUM", Destination: "DEL" },
        TotalNumberOfPassengers: 1,
        DateOfJourney: "06:00 15/May/2019",
        TotalFare: 1500,
        InsuranceOpted: "No",
        Classes: "CC"
    },
    {
        _id: 8,
        PNRNO: 6706548,
        TravelLocation: { Source: "HYD", Destination: "CHN" },
        TotalNumberOfPassengers: 3,
        DateOfJourney: "18:40 15/May/2019",
        TotalFare: 1900,
        InsuranceOpted: "Yes",
        Classes: "3A"
    }
])
