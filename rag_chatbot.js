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


// ---------------------------------------------------------
// SUBJECT MAP
// ---------------------------------------------------------
const SUBJECT_MAP = {
  os: {
    keywords: ["os", "operating system", "deadlock", "scheduling", "paging"],
    youtubeKeywords: {
      general: "operating systems tutorial",
      deadlock: "deadlock in operating systems",
      scheduling: "CPU scheduling algorithms",
      paging: "paging in OS memory management",
      synchronization: "process synchronization",
    },
    modules: {
      1: ["system structure", "os structure", "system calls", "os services"],
      2: ["process scheduling", "threads", "multithreading"],
      3: ["synchronization", "semaphore", "deadlock", "critical section"],
      4: ["memory management", "paging", "segmentation", "thrashing"],
      5: ["file system", "directory", "disk scheduling", "protection"],
    },
  },

  dsa: {
    keywords: ["dsa", "data structures", "stack", "queue", "trees", "graphs"],
    youtubeKeywords: {
      general: "data structures and algorithms",
      stack: "stack data structure tutorial",
      queue: "queue data structure",
      trees: "binary tree tutorial",
      graphs: "graph algorithms tutorial",
      "linked list": "linked list implementation",
    },
    modules: {
      1: ["arrays", "stacks", "postfix", "prefix", "polish notation"],
      2: ["queues", "circular queue", "priority queue", "recursion"],
      3: ["linked list", "dll", "sll", "circular linked", "garbage collection"],
      4: ["trees", "binary tree", "tree traversal", "bst"],
      5: ["graphs", "bfs", "dfs", "hashing", "collision", "rehashing"],
    },
  },

  ddco: {
    keywords: ["ddco", "digital logic", "logic gates", "microprocessor"],
    youtubeKeywords: {
      general: "digital design and computer organization",
      "logic gates": "logic gates tutorial",
      "boolean algebra": "boolean algebra simplification",
      "flip flop": "flip flops in digital electronics",
      microprocessor: "8086 microprocessor tutorial",
    },
    modules: {
      1: ["boolean algebra", "kmap", "nand", "nor", "verilog"],
      2: [
        "adder",
        "subtractor",
        "encoder",
        "decoder",
        "multiplexer",
        "flip flop",
      ],
      3: ["processor", "instruction", "addressing modes"],
      4: ["io devices", "interrupts", "dma", "cache memory"],
      5: ["pipeline", "alu", "register transfer"],
    },
  },

  maths: {
    keywords: [
      "math",
      "mathematics",
      "probability",
      "statistics",
      "regression",
    ],
    youtubeKeywords: {
      general: "probability and statistics",
      probability: "probability distribution tutorial",
      regression: "linear regression explained",
      "hypothesis testing": "hypothesis testing statistics",
      "chi square": "chi square test tutorial",
    },
    modules: {
      1: ["probability distribution", "random variable", "binomial", "poisson"],
      2: ["joint probability", "markov chain"],
      3: ["sampling", "standard error", "hypothesis testing"],
      4: ["t test", "chi square", "f distribution"],
      5: ["correlation", "regression", "least squares"],
    },
  },
};



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