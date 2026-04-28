// 1. Create and insert one document
db.apps.insertOne({
  appName: "PhotoEdit Pro",
  developer: "Pixel Labs",
  category: "Photography",
  rating: 4.8,
  downloads: 500000
});

// 2. Insert multiple app records
db.apps.insertMany([
  { appName: "Space Invaders", developer: "RetroArcade", category: "Games", rating: 4.2, downloads: 1200000 },
  { appName: "BudgetTracker", developer: "FinTech Corp", category: "Finance", rating: 4.5, downloads: 85000 },
  { appName: "Racing Rivals", developer: "Speedsters", category: "Games", rating: 4.7, downloads: 3000000 },
  { appName: "FitLife", developer: "HealthHub", category: "Fitness", rating: 3.9, downloads: 450000 },
  { appName: "Battle Royale", developer: "GameGenius", category: "Games", rating: 4.9, downloads: 10000000 },
  { appName: "Chess Master", developer: "BrainyGames", category: "Games", rating: 4.4, downloads: 200000 }
]);

// 3. Retrieve all apps
db.apps.find().pretty();

// 4. Display only appName and developer using projection
db.apps.find({}, { appName: 1, developer: 1, _id: 0 });

// 5. Find Games, sort by rating (descending), and limit to 5
db.apps.find({ category: "Games" })
  .sort({ rating: -1 })
  .limit(5);