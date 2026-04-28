// 1. Create collection and insert sample documents
db.songs.insertMany([
  { songName: "Blinding Lights", artist: "The Weeknd", plays: 3000000000, likes: 25000000, genre: "Pop" },
  { songName: "Bohemian Rhapsody", artist: "Queen", plays: 2000000000, likes: 15000000, genre: "Rock" },
  { songName: "Shape of You", artist: "Ed Sheeran", plays: 3500000000, likes: 30000000, genre: "Pop" },
  { songName: "Stairway to Heaven", artist: "Led Zeppelin", plays: 800000000, likes: 7000000, genre: "Rock" },
  { songName: "Blue World", artist: "Mac Miller", plays: 500000000, likes: 4000000, genre: "Hip-Hop" }
]);

// 2. Create a single-field index on songName
db.songs.createIndex({ songName: 1 });

// 3. Create a compound index on genre (ascending) and plays (descending)
db.songs.createIndex({ genre: 1, plays: -1 });

// 4. Use explain() to analyze a query filtering by genre
// This helps verify if the index is being used (look for IXSCAN)
db.songs.find({ genre: "Rock" }).explain("executionStats");

// 5. Verification: List all indexes created on the collection
db.songs.getIndexes();