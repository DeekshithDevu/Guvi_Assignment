// 1. Create a telecom collection and insert sample documents
db.telecom.insertMany([
  { plan: "Unlimited Data", region: "North", users: 1500, revenue: 45000 },
  { plan: "Basic Talk", region: "South", users: 800, revenue: 12000 },
  { plan: "Family Plan", region: "North", users: 2000, revenue: 80000 },
  { plan: "Unlimited Data", region: "West", users: 1200, revenue: 36000 },
  { plan: "Premium 5G", region: "East", users: 500, revenue: 55000 },
  { plan: "Family Plan", region: "South", users: 1100, revenue: 44000 },
  { plan: "Basic Talk", region: "North", users: 300, revenue: 4500 }
]);

// 2. Calculate the total revenue
// We use _id: null to aggregate the entire collection into one result
db.telecom.aggregate([
  { $group: { _id: null, totalRevenue: { $sum: "$revenue" } } }
]);

// 3. Find the average number of users per region
db.telecom.aggregate([
  { $group: { _id: "$region", avgUsers: { $avg: "$users" } } }
]);

// 4. Group data by plan and count users
// We sum the "users" field for each plan type
db.telecom.aggregate([
  { $group: { _id: "$plan", totalUsers: { $sum: "$users" } } }
]);

// 5. Filter revenue > 50000, group by plan, and get top 3 by revenue
db.telecom.aggregate([
  // Filter records first to optimize performance
  { $match: { revenue: { $gt: 50000 } } },
  
  // Group by plan to sum their revenues
  { $group: { _id: "$plan", planRevenue: { $sum: "$revenue" } } },
  
  // Sort by revenue in descending order
  { $sort: { planRevenue: -1 } },
  
  // Limit to top 3
  { $limit: 3 }
]);