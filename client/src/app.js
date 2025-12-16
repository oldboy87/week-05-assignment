// ** DOM manipulation --> INVENTORY TABLE **
//column header titles
const columnName = [
  "NAME",
  "DATE ADDED",
  "QUANTITY",
  "UNITTYPE",
  "CATEGORY",
  "SUBCATEGORY",
  "LOCATION",
  "EXPIRY DATE",
  "COMMENTS",
];

async function createTable(columns) {
  const itemData = await getData();
  document.getElementById("table-container");
  tableContainer.appendChild(table);

  const table = document.createElement("table");
  console.log(table);
  table.style.border = "1px solid";

  // Create THEAD
  const thead = table.createTHead();
  const headerRow = thead.insertRow();

  columns.forEach((columnName) => {
    const th = document.createElement("th");
    th.textContent = columnName;
    headerRow.appendChild(th);
  });

  // Create TBODY
  const tbody = table.createTBody();
  return { table, tbody };
}

function populateRows(tbody, data) {
  data.forEach((item) => {
    const row = tbody.insertRow();
    const values = [
      item.name,
      item.date_added,
      item.quantity,
      item.unit_type,
      item.category,
      item.subcategory,
      item.location,
      item.expiry_date,
      item.comments,
    ];

    values.forEach((value) => {
      const cell = row.insertCell();
      cell.textContent = value;
    });
  });
}

async function getData(url) {
  const response = await fetch("http://localhost:8080/stock");
  console.log(response);
  const data = await response.json();
  console.log(data);
  return data;
}

createTable();
