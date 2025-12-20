import { app } from './src/app.js';
import dotenv from 'dotenv';  
import pool from './src/database/db.js'; 
 

dotenv.config();

const PORT = process.env.PORT || 3000;

// (async () => {
//   try {
//     const result = await pool.query("SELECT 1");
//     console.log("✅ DB connected:", result.rowCount);
//   } catch (err) {
//     console.error("❌ DB connection failed", err);
//     process.exit(1); // stop app if DB is required
//   }
// })();

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
}); 

