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

// !THE BELOW REQUIRES SOME DATA TO BE ADDED TO MATCH WITH THE DATABASE

//TODO: Construct GET route to obtain ALL database data
app.get("/stock", async function (_, res) {
  const query = await db.query(
    `SELECT col1, col2, col3, col4, col5 FROM ${databaseName};`
  );
  console.log(query);
  res.json(query.rows);
});

//TODO: Construct POST route to post a new item to the database
app.post("/add", (req, _) => {
  const addStock = req.body.formValues;
  console.log(addStock);

  const query = db.query(
    `INSERT INTO ${databaseName} (col1, col2, col3, col4, col5) VALUES ($1, $2, $3, $4)`,
    [addStock.col1, addStock.col2, addStock.col3, addStock.col4, addStock.col5]
  );
  console.log(query);

  _.json({ status: "success", value: addStock });
});
