import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";

dotenv.config();

const app = express();

// Resolve __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware
app.use(cors());
app.use(express.json());

// Serve frontend
app.use(express.static(path.join(__dirname, "rag_project_frontend")));

// Health check
app.get("/health", (req, res) => {
    res.json({
        status: "ok",
        message: "Backend is running",
        timestamp: new Date().toISOString()
    });
});

// Test route
app.get("/", (req, res) => {
    res.json({
        message: "Welcome to Yoru Chatbot Backend"
    });
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});