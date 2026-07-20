import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

// Setup correct paths
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middlewares
app.use(cors());
app.use(express.json());

// Serve files statically
app.use("/files", express.static(filesPath));

// Root endpoint
app.get("/", (req, res) => {
  res.send("File server running");
});

// Start server
app.listen(PORT, () => {
  console.log(`File server running at http://localhost:${PORT}`);
});
