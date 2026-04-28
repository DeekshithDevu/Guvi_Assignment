// 1. Create collection and insert one booking document
db.bookings.insertOne({
  userName: "Karthik",
  event: "Music Fest 2026",
  tickets: 2,
  price: 2500,
  status: "Pending"
});

// 2. Insert multiple booking records
db.bookings.insertMany([
  { userName: "Ananya", event: "Tech Summit", tickets: 1, price: 1500, status: "Pending" },
  { userName: "Rahul", event: "Stand-up Comedy", tickets: 3, price: 1200, status: "Confirmed" },
  { userName: "Sita", event: "Art Workshop", tickets: 0, price: 500, status: "Cancelled" },
  { userName: "Vikram", event: "IPL Match", tickets: 4, price: 5000, status: "Pending" },
  { userName: "Priya", event: "Film Premiere", tickets: 2, price: 3000, status: "Pending" }
]);

// 3. Update the status of user "Karthik" to "Confirmed"
db.bookings.updateOne(
  { userName: "Karthik" },
  { $set: { status: "Confirmed" } }
);

// 4. Update all bookings where status is "Pending" to "Confirmed"
db.bookings.updateMany(
  { status: "Pending" },
  { $set: { status: "Confirmed" } }
);

// 5. Delete bookings where tickets are less than 1
db.bookings.deleteMany({ tickets: { $lt: 1 } });

// Retrieve bookings where price is greater than 2000
db.bookings.find({ price: { $gt: 2000 } }).pretty();