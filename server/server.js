import express from "express";
import cors from "cors";
import { db } from "./dbConnection.js";

const app = express();

//config cors and express:
app.use(cors());
app.use(express.json());

//port:
const PORT = 8080;

app.listen(PORT, function () {
  console.log(`Server is running in port ${PORT}`);
});

// root route:
app.get("/", (req, res) => {
  res.json({ message: "Root route" });
});
