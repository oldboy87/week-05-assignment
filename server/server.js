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

//TODO: Construct GET route to obtain ALL database data
app.get("/stock", async function (_, res) {
  const query = await db.query(
    `SELECT date_added, item_name, quantity, unity_type, category, subcategory, storage_location, expiry_date, comments FROM inventory;`
  );
  console.log(query);
  res.json(query.rows);
});

//TODO: Construct POST route to post a new item to the database
app.post("/add_item", (req, _) => {
  const addStock = req.body.formValues;
  console.log(addStock);

  const query = db.query(
    `INSERT INTO inventory (item_name, quantity, unity_type, category, subcategory, storage_location, expiry_date, comments) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)`,
    [
      addStock.item_name,
      addStock.quantity,
      addStock.unit_type,
      addStock.category,
      addStock.subcategory,
      addStock.storage_location,
      addStock.expiry_Date,
      addStock.comments,
    ]
  );
  console.log(query);

  _.json({ status: "success", value: addStock });
});

//TODO: Construct a delete route
app.post("/delete_stock", (req, _) => {
  const item_name = req.body.item_name;

  const query = db.query(`DELETE from inventory WHERE item_name=$1`, [
    item_name,
  ]);
  console.log(query);

  _.json({ status: "success", value: item_name });
});

//TODO: Create an Update Stock route
app.post("/update_stock", (req, _) => {
  const newQuantity = req.body.newQuantity;
  const item_name = req.body.item_name;

  const query = db.query(
    `UPDATE inventory SET quantity=$1 WHERE item_name=$2`,
    [newQuantity, item_name]
  );
  console.log(query);

  _.json({ status: "success", value: newQuantity, item_name });
});
