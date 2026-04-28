// 1. Create an appointments collection and insert one document
db.appointments.insertOne({
  patientName: "Amit Sharma",
  doctor: "Dr. Kumar",
  appointmentDate: "2026-05-10",
  fees: 600,
  status: "Scheduled"
});

// 2. Insert multiple appointment records
db.appointments.insertMany([
  { patientName: "Sara Khan", doctor: "Dr. Verma", appointmentDate: "2026-05-11", fees: 450, status: "Completed" },
  { patientName: "John Doe", doctor: "Dr. Kumar", appointmentDate: "2026-05-12", fees: 350, status: "Pending" },
  { patientName: "Meera Nair", doctor: "Dr. Iyer", appointmentDate: "2026-05-10", fees: 800, status: "Cancelled" },
  { patientName: "Rahul Gupta", doctor: "Dr. Kumar", appointmentDate: "2026-05-14", fees: 250, status: "Scheduled" },
  { patientName: "Lisa Ray", doctor: "Dr. Verma", appointmentDate: "2026-05-15", fees: 1200, status: "Pending" }
]);

// 3. Retrieve appointments where fees are greater than 500
db.appointments.find({ fees: { $gt: 500 } });

// 4. Find appointments with Dr. Kumar where fees are greater than 300
db.appointments.find({ 
  doctor: "Dr. Kumar", 
  fees: { $gt: 300 } 
});

// 5. Status not "Completed", for specific doctors, sorted by fees descending
// Note: You can use $in to specify multiple doctors (e.g., "Dr. Kumar" and "Dr. Verma")
db.appointments.find({
  status: { $ne: "Completed" },
  doctor: { $in: ["Dr. Kumar", "Dr. Verma"] }
}).sort({ fees: -1 });