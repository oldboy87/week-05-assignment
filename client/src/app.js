console.log("Hello World!");

//!temp button
const addItemButton = document.createElement("button");
addItemButton.textContent = "add item";
document.body.appendChild(addItemButton);

//const addItemButton = document.getElementById("add");

// TODO: Create the modal and the form once the button has been clicked
addItemButton.addEventListener("click", () => {
  const submitSound = document.createElement("audio");
  submitSound.src = "client/public/audio/add-popup-swoosh.wav";
  submitSound.volume = 0.5;
  submitSound.play();

  //construct modal
  const addItemModal = document.createElement("div");
  addItemModal.id = "addItemModal";
  addItemModal.className = "addItemModal";
  addItemModal.style.display = "block";
  //append modal to body
  document.body.appendChild(addItemModal);
  //construct section for form to nest in
  const outerSection = document.createElement("section");
  outerSection.id = "outerSection";
  outerSection.className = "outerSection";
  //append form section to modal
  addItemModal.appendChild(outerSection);
  //construct close feature
  const closeModal = document.createElement("span");
  closeModal.id = "close";
  closeModal.className = "close";
  closeModal.textContent = "❌";
  //apend close to form section
  outerSection.appendChild(closeModal);

  //call function to create form and parse through the section of the modal in which we want to append the form
  createForm(outerSection);

  //close modal with span
  closeModal.addEventListener("click", () => {
    addItemModal.style.display = "none";
  });

  window.addEventListener("click", (event) => {
    if (event.target === addItemModal) {
      addItemModal.style.display = "none";
    }
  });
});

function createForm(outerSection) {
  //construct section for form to nest in
  const formSection = document.createElement("section");
  formSection.id = "formSection";
  formSection.className = "formSection";

  //construct the form to add item
  const addItemForm = document.createElement("form");

  //add in the inputs and labels for form
  const itemNameLabel = document.createElement("label");
  itemNameLabel.htmlFor = "item-name";
  itemNameLabel.textContent = "Item Name: ";
  const itemNameInput = document.createElement("input");
  itemNameInput.name = "item-name";
  itemNameInput.type = "text";
  itemNameInput.placeholder = "e.g. bread";
  itemNameInput.required = true;
  addItemForm.appendChild(itemNameLabel);
  addItemForm.appendChild(itemNameInput);

  const quantityLabel = document.createElement("label");
  quantityLabel.htmlFor = "quantity";
  quantityLabel.textContent = "Quantity: ";
  const quantityInput = document.createElement("input");
  quantityInput.name = "quantity";
  quantityInput.placeholder = "0";
  quantityInput.type = "number";
  quantityInput.min = "1";
  quantityInput.required = true;
  addItemForm.appendChild(quantityLabel);
  addItemForm.appendChild(quantityInput);

  const unitTypeLabel = document.createElement("label");
  unitTypeLabel.htmlFor = "unit-type";
  unitTypeLabel.textContent = "Unit Type: ";
  const unitTypeInput = document.createElement("select");
  unitTypeInput.name = "unit-type";
  unitTypeInput.required = true;
  unitTypeInput.placeholder = "unit";
  const optG = document.createElement("option");
  optG.value = "grams";
  optG.text = "grams";
  const optKG = document.createElement("option");
  optKG.value = "kilograms";
  optKG.text = "kilograms";
  const optML = document.createElement("option");
  optML.value = "mililetres";
  optML.text = "mililetres";
  const optL = document.createElement("option");
  optL.value = "litres";
  optL.text = "litres";
  const optItems = document.createElement("option");
  optItems.value = "items";
  optItems.text = "items";
  unitTypeInput.appendChild(optG);
  unitTypeInput.appendChild(disposables);
  unitTypeInput.appendChild(optML);
  unitTypeInput.appendChild(optL);
  unitTypeInput.appendChild(optItems);
  addItemForm.appendChild(unitTypeLabel);
  addItemForm.appendChild(unitTypeInput);

  const categoryLabel = document.createElement("label");
  categoryLabel.htmlFor = "category";
  categoryLabel.textContent = "Category: ";
  const categoryInput = document.createElement("select");
  categoryInput.name = "category";
  categoryInput.required = true;
  const optC1 = document.createElement("option");
  optC1.value = " ";
  optC1.text = " ";
  const optC2 = document.createElement("option");
  optC2.value = " ";
  optC2.text = " ";
  const optC3 = document.createElement("option");
  optC3.value = " ";
  optC3.text = " ";
  const optC4 = document.createElement("option");
  optC4.value = " ";
  optC4.text = " ";
  const optC5 = document.createElement("option");
  optC5.value = " ";
  optC5.text = " ";
  unitTypeInput.appendChild(optC1);
  unitTypeInput.appendChild(optC2);
  unitTypeInput.appendChild(optC3);
  unitTypeInput.appendChild(optC4);
  unitTypeInput.appendChild(optC5);
  addItemForm.appendChild(unitTypeLabel);
  addItemForm.appendChild(unitTypeInput);

  const subcategoryLabel = document.createElement("label");
  const subcategoryInput = document.createElement("input");
  const optSC = document.createElement("option");
  optSC.value = " ";
  optSC.text = " ";
  const optSC2 = document.createElement("option");
  optSC2.value = " ";
  optSC2.text = " ";
  const optSC3 = document.createElement("option");
  optSC3.value = " ";
  optSC3.text = " ";
  const optSC4 = document.createElement("option");
  optSC4.value = " ";
  optSC4.text = " ";
  const optSC5 = document.createElement("option");
  optSC5.value = " ";
  optSC5.text = " ";
  unitTypeInput.appendChild(optSC);
  unitTypeInput.appendChild(optSC2);
  unitTypeInput.appendChild(optSC3);
  unitTypeInput.appendChild(optSC4);
  unitTypeInput.appendChild(optSC5);
  addItemForm.appendChild(unitTypeLabel);
  addItemForm.appendChild(unitTypeInput);

  addItemForm.appendChild(subcategoryLabel);
  addItemForm.appendChild(subcategoryInput);

  const storageLocationLabel = document.createElement("label");
  const storageLocationInput = document.createElement("input");
  const optPantry = document.createElement("option");
  optPantry.value = "pantry";
  optPantry.text = "Pantry";
  const optDisposables = document.createElement("option");
  optDisposables.value = "disposables";
  optDisposables.text = "Disposables";
  const optFridge = document.createElement("option");
  optFridge.value = "Fridge";
  optFridge.text = "Fridge";
  const optFreezer = document.createElement("option");
  optFreezer.value = "freezer";
  optFreezer.text = "Freezer";
  const optOther = document.createElement("option");
  optOther.value = "optOther";
  optOther.text = "Other";
  storageLocationInput.appendChild(optPantry);
  storageLocationInput.appendChild(optDisposables);
  storageLocationInput.appendChild(optFridge);
  storageLocationInput.appendChild(optFreezer);
  storageLocationInput.appendChild(optOther);
  addItemForm.appendChild(storageLocationLabel);
  addItemForm.appendChild(storageLocationInput);

  const expiryDateLabel = document.createElement("label");
  expiryDateLabel.htmlFor = "date";
  expiryDateLabel.textContent = "Enter a date (YYYY-MM-DD)";
  const expiryDateInput = document.createElement("input");
  expiryDateInput.type = "date";
  expiryDateInput.name = "date";
  expiryDateInput.pattern = "d{4}-d{2}-d{2}";
  expiryDateInput.required = true;
  addItemForm.appendChild(storageLocationLabel);
  addItemForm.appendChild(storageLocationInput);

  const commentsLabel = document.createElement("label");
  commentsLabel.htmlFor = "text";
  commentsLabel.textContent = "Additional Comments: ";
  const commentsInput = document.createElement("textarea");
  commentsInput.maxLength = 1000;

  addItemForm.appendChild(commentsLabel);
  addItemForm.appendChild(commentsInput);

  //append form to form section
  formSection.appendChild(addItemForm);

  outerSection.appendChild(formSection);

  addItemForm.addEventListener("submit", handleAddNewItemFormSubmit);
}

async function handleAddNewItemFormSubmit(event) {
  event.preventDefault();
  const formDataTemplate = new FormData(addItemForm);
  const formValues = Object.fromEntries(formDataTemplate);

  //sound on click
  //   const submitSound = document.createElement("audio");
  //   submitSound.src = "";
  //   submitSound.volume = 0.5;
  //   submitSound.play();

  // this is to see our posted data
  console.log(
    `${formValues.item_name} ${formValues.quantity} ${formValues.unit_type} ${formValues.category} ${formValues.subcategory}${formValues.storage_location}${formValues.expiry_Date} ${formValues.comments}`
  );

  // fetch the POST server route
  fetch("http://localhost:8080/add_item", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ formValues }),
  });

  //TODO: clear form and close modal on submit - no need to make a new one
}

//functions for all possible button interactions goes here:
function donate() {
  alert("To donation page");
}
function search() {
  alert("Perform search");
}
function add() {
  alert("Add entry to table");
}
function edit() {
  alert("Edit entry");
}
function filter() {
  alert("Filter data");
}

//all buttons that need to be displayed and working when loading a new session goes in this array:
const pageloadButtons = [
  {
    id: "donate",
    func: donate,
  },
  {
    id: "search",
    func: search,
  },
  {
    id: "add",
    func: add,
  },
  {
    id: "edit",
    func: edit,
  },
  {
    id: "filter",
    func: filter,
  },
];

//buttons added to the page with DOM will be added here:
//TODO: Need to consider if there will only be one set of new buttons displayed at any given time. If so, this array of objects can be emptied and re-populated. If not, can be additive (and items removed )
const dynamicButtons = [
  {
    id: "donate",
    func: donate,
  },
  {
    id: "search",
    func: search,
  },
  {
    id: "add",
    func: add,
  },
  {
    id: "edit",
    func: edit,
  },
  {
    id: "filter",
    func: filter,
  },
];

console.log(pageloadButtons);

console.log(pageloadButtons[0]);

console.log(pageloadButtons.length);

function createButton(id, func) {
  //TODO: container needs to be assigned to div with corresponding id. For testing purposes, this is in the body.
  const container = document.body;
  const button = document.createElement("button");
  button.setAttribute("class", "button");
  button.setAttribute("id", id);
  button.addEventListener("click", func);
  button.innerHTML = id;
  container.appendChild(button);
}

function loopButtons(pageloadButtons) {
  for (let i = 0; i <= pageloadButtons.length - 1; i++) {
    const id = pageloadButtons[i].id;
    const func = pageloadButtons[i].func;
    console.log(id);
    console.log(func);
    console.log(i);
    createButton(id, func);
  }
}

loopButtons(pageloadButtons);

//TODO: Testing search functionality:

const userCardTemplate = document.querySelector("[data-user-template]");
const userCardContainer = document.querySelector("[data-user-cards-container]");
const searchInput = document.querySelector("[data-search]");

let users = [];

searchInput.addEventListener("input", (e) => {
  const value = e.target.value.toLowerCase();
  users.forEach((user) => {
    const isVisible =
      user.name.toLowerCase().includes(value) ||
      user.email.toLowerCase().includes(value);
    user.element.classList.toggle("hide", !isVisible);
  });
});

// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((res) => res.json())
//   .then((data) => {
//     users = data.map((user) => {
//       const card = userCardTemplate.content.cloneNode(true).children[0];
//       const header = card.querySelector("[data-header]");
//       const body = card.querySelector("[data-body]");
//       header.textContent = user.name;
//       body.textContent = user.email;
//       userCardContainer.append(card);
//       return { name: user.name, email: user.email, element: card };
//     });
//   });

async function getData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  return data;
}

console.log(getData());
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
