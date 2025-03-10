import { app } from "./app.js";
import connectDB from "./db/index.js";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB()
    .then(() => {
        console.log("✅ MongoDB Connected Successfully!");

        // Start the server
        const PORT = process.env.PORT || 3001;
        app.listen(PORT, () => {
            console.log(`🚀 Server running on port ${PORT}`);
        });
    })
    .catch((error) => {
        console.error("❌ FAILED TO CONNECT DB!!!", error);
        process.exit(1); // Exit the process if DB connection fails
    });

// Global error handling
app.on("error", (error) => {
    console.error("❌ SERVER ERROR: ", error);
});
