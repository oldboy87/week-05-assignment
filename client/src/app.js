console.log("Hello World!");

//!temp button
const addItemButton = document.getElementById("add");

// TODO: Create the modal and the form once the button has been clicked
function add() {
  // const submitSound = document.createElement("audio");
  // submitSound.src = "client/public/audio/add-popup-swoosh.wav";
  // submitSound.volume = 0.5;
  // submitSound.play();

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
}

function createForm(outerSection) {
  //construct section for form to nest in
  const formSection = document.createElement("section");
  formSection.id = "formSection";
  formSection.className = "formSection";

  //construct the form to add item
  const addItemForm = document.createElement("form");

  //add in the inputs and labels for form
  const itemNameLabel = document.createElement("label");
  itemNameLabel.htmlFor = "item_name";
  itemNameLabel.textContent = "Item Name: ";
  const itemNameInput = document.createElement("input");
  itemNameInput.name = "item_name";
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

  const unitSizeLabel = document.createElement("label");
  unitSizeLabel.htmlFor = "unit_size";
  unitSizeLabel.textContent = "Unit Size: ";
  const unitSizeInput = document.createElement("input");
  unitSizeInput.name = "unit_size";
  unitSizeInput.placeholder = "0";
  unitSizeInput.type = "number";
  unitSizeInput.min = "1";
  unitSizeInput.required = true;
  addItemForm.appendChild(unitSizeLabel);
  addItemForm.appendChild(unitSizeInput);

  const unitTypeLabel = document.createElement("label");
  unitTypeLabel.htmlFor = "unit_type";
  unitTypeLabel.textContent = "Unit Type: ";
  const unitTypeInput = document.createElement("select");
  unitTypeInput.name = "unit_type";
  unitTypeInput.required = true;
  unitTypeInput.placeholder = "unit";
  const unitTypePlaceholder = document.createElement("option");
  unitTypePlaceholder.value = "";
  unitTypePlaceholder.disabled = true;
  unitTypePlaceholder.textContent = "Select Option";
  unitTypePlaceholder.selected = true;
  unitTypePlaceholder.hidden = true;
  const optG = document.createElement("option");
  optG.value = "G";
  optG.text = "grams";
  const optKG = document.createElement("option");
  optKG.value = "KG";
  optKG.text = "kilograms";
  const optML = document.createElement("option");
  optML.value = "ML";
  optML.text = "mililetres";
  const optL = document.createElement("option");
  optL.value = "L";
  optL.text = "litres";
  unitTypeInput.appendChild(unitTypePlaceholder);
  unitTypeInput.appendChild(optG);
  unitTypeInput.appendChild(optKG);
  unitTypeInput.appendChild(optML);
  unitTypeInput.appendChild(optL);

  addItemForm.appendChild(unitTypeLabel);
  addItemForm.appendChild(unitTypeInput);

  const categoryLabel = document.createElement("label");
  categoryLabel.htmlFor = "category";
  categoryLabel.textContent = "Category: ";
  const categoryInput = document.createElement("select");
  categoryInput.name = "category";
  categoryInput.required = true;
  const categoryPlaceholder = document.createElement("option");
  categoryPlaceholder.value = "";
  categoryPlaceholder.disabled = true;
  categoryPlaceholder.textContent = "Select Option";
  categoryPlaceholder.selected = true;
  categoryPlaceholder.hidden = true;
  const optC1 = document.createElement("option");
  optC1.value = "Beverages";
  optC1.text = "Beverages";
  const optC2 = document.createElement("option");
  optC2.value = "Dry Goods";
  optC2.text = "Dry Goods";
  const optC3 = document.createElement("option");
  optC3.value = "Perishable";
  optC3.text = "Perishable";
  const optC4 = document.createElement("option");
  optC4.value = "Canned Goods";
  optC4.text = "Canned Goods";
  const optC5 = document.createElement("option");
  optC5.value = "Cleaning Supplies";
  optC5.text = "Cleaning Supplies";
  const optC6 = document.createElement("option");
  optC6.value = "Personal Hygiene";
  optC6.text = "Personal Hygiene";
  categoryInput.appendChild(categoryPlaceholder);
  categoryInput.appendChild(optC1);
  categoryInput.appendChild(optC2);
  categoryInput.appendChild(optC3);
  categoryInput.appendChild(optC4);
  categoryInput.appendChild(optC5);
  categoryInput.appendChild(optC6);
  addItemForm.appendChild(categoryLabel);
  addItemForm.appendChild(categoryInput);

  //! Requires some additional specificity that we don't have at the moment
  // const subcategoryLabel = document.createElement("label");
  // subcategoryLabel.htmlFor = "subcategory";
  // subcategoryLabel.textContent = "Subcategory: ";
  // const subcategoryInput = document.createElement("select");
  // subcategoryInput.name = "subcategory";
  // // subcategoryInput.required = true;
  // const subcategoryPlaceholder = document.createElement("option");
  // subcategoryPlaceholder.value = "";
  // subcategoryPlaceholder.disabled = true;
  // subcategoryPlaceholder.textContent = "Select Option";
  // subcategoryPlaceholder.selected = true;
  // subcategoryPlaceholder.hidden = true;
  // const optSC = document.createElement("option");
  // optSC.value = " ";
  // optSC.text = " ";
  // const optSC2 = document.createElement("option");
  // optSC2.value = " ";
  // optSC2.text = " ";
  // const optSC3 = document.createElement("option");
  // optSC3.value = " ";
  // optSC3.text = " ";
  // const optSC4 = document.createElement("option");
  // optSC4.value = " ";
  // optSC4.text = " ";
  // const optSC5 = document.createElement("option");
  // optSC5.value = "";
  // optSC5.text = "";
  // subcategoryInput.appendChild(subcategoryPlaceholder);
  // subcategoryInput.appendChild(optSC);
  // subcategoryInput.appendChild(optSC2);
  // subcategoryInput.appendChild(optSC3);
  // subcategoryInput.appendChild(optSC4);
  // subcategoryInput.appendChild(optSC5);
  // addItemForm.appendChild(subcategoryLabel);
  // addItemForm.appendChild(subcategoryInput);

  const storageLocationLabel = document.createElement("label");
  storageLocationLabel.htmlFor = "storage_location";
  storageLocationLabel.textContent = "Storage Location: ";
  const storageLocationInput = document.createElement("select");
  storageLocationInput.name = "storage_location";
  storageLocationInput.required = true;
  const storagePlaceholder = document.createElement("option");
  storagePlaceholder.value = "";
  storagePlaceholder.disabled = true;
  storagePlaceholder.textContent = "Select Option";
  storagePlaceholder.selected = true;
  storagePlaceholder.hidden = true;
  const optPantry = document.createElement("option");
  optPantry.value = "Pantry";
  optPantry.text = "Pantry";
  const optDisposables = document.createElement("option");
  optDisposables.value = "Disposables";
  optDisposables.text = "Disposables";
  const optFridge = document.createElement("option");
  optFridge.value = "Fridge";
  optFridge.text = "Fridge";
  const optFreezer = document.createElement("option");
  optFreezer.value = "Freezer";
  optFreezer.text = "Freezer";
  const optOther = document.createElement("option");
  optOther.value = "Other";
  optOther.text = "Other";
  storageLocationInput.appendChild(storagePlaceholder);
  storageLocationInput.appendChild(optPantry);
  storageLocationInput.appendChild(optDisposables);
  storageLocationInput.appendChild(optFridge);
  storageLocationInput.appendChild(optFreezer);
  storageLocationInput.appendChild(optOther);
  addItemForm.appendChild(storageLocationLabel);
  addItemForm.appendChild(storageLocationInput);

  const expiryDateLabel = document.createElement("label");
  expiryDateLabel.htmlFor = "expiry_date";
  expiryDateLabel.textContent = "Expiry Date: ";
  const expiryDateInput = document.createElement("input");
  expiryDateInput.type = "date";
  expiryDateInput.name = "expiry_date";
  expiryDateInput.pattern = "y{4}-m{2}-d{2}";
  expiryDateInput.required = true;
  addItemForm.appendChild(expiryDateLabel);
  addItemForm.appendChild(expiryDateInput);

  const commentsLabel = document.createElement("label");
  commentsLabel.htmlFor = "comments";
  commentsLabel.textContent = "Additional Comments: ";
  const commentsInput = document.createElement("textarea");
  commentsInput.maxLength = 1000;
  commentsInput.name = "comments";
  commentsInput.placeholder = "max 1000 characters";
  addItemForm.appendChild(commentsLabel);
  addItemForm.appendChild(commentsInput);

  const submitForm = document.createElement("button");
  submitForm.type = "submit";
  submitForm.textContent = "Submit";
  addItemForm.appendChild(submitForm);

  //append form to form section
  formSection.appendChild(addItemForm);

  outerSection.appendChild(formSection);

  addItemForm.addEventListener("submit", handleAddNewItemFormSubmit);

  //TODO construct form handler to send completed form data to database
  async function handleAddNewItemFormSubmit(event) {
    //closes modal and clears form for next user
    addItemModal.style.display = "none";

    event.preventDefault();
    const formDataTemplate = new FormData(addItemForm);
    const formValues = Object.fromEntries(formDataTemplate);

    //sound on click
    //   const submitSound = document.createElement("audio");
    //   submitSound.src = "client/public/assets/audio/add-popup-swoosh.wav";
    //   submitSound.volume = 0.5;
    //   submitSound.play();

    // this is to see our posted data
    console.log(
      `${formValues.item_name} ${formValues.quantity} ${formValues.unit_size} ${formValues.unit_type} ${formValues.category} ${formValues.storage_location} ${formValues.expiry_date} ${formValues.comments}`
    );

    // fetch the POST server route
    fetch("https://pantrypal-server-yyp8.onrender.com/add_item", {
      // fetch("http://localhost:8080/add_item", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ formValues }),
    });
  }
}

//TODO: ============ Tom's code ===================

//functions for all possible button interactions goes here:
function donate() {
  alert("To donation page");
}

const databaseValues = await getData();
console.log("Database Values:");
console.log(databaseValues);
console.log(databaseValues.length);

const foundItems = [];

//TODO: Need to clear previous search entries

function search() {
  let flag = false;
  //   const searchvalue = document.getElementById("search").value;

  //! inserted code
  const tableContainer = document.getElementById("inventory-table"); //======rory// fixed container reference

  tableContainer.innerHTML = null;
  //! code insert ended

  const searchvalue = document.querySelector(".searchbar").value;
  console.log("Searchbar input:");
  console.log(searchvalue);
  for (let i = 0; i < databaseValues.length; i++) {
    console.log("current datasbase value:");
    console.log(databaseValues[i].item_name);
    if (searchvalue === databaseValues[i].item_name) {
      flag = true;
      foundItems[i] = databaseValues[i];
    } else {
    }
    console.log("foundItems:");
    console.log(foundItems);
  }
  if (flag == true) {
    alert("Item was found");
    createTable(columnName);
  } else {
    alert("No such item was found");
  }
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

function createSearchBar() {
  const container = document.getElementById("search");
  const searchbar = document.createElement("input");
  searchbar.setAttribute("id", "search");
  searchbar.setAttribute("class", "searchbar");
  searchbar.setAttribute("placeholder", "Search inventory...");
  container.appendChild(searchbar);
}

function createButton(id, func) {
  //TODO: container needs to be assigned to div with corresponding id. For testing purposes, this is in the body.
  const container = document.getElementById(id);
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

const searchbar = createSearchBar();
loopButtons(pageloadButtons);

//TODO =============END Tom's Code ==================

//! ---------------------------------- NENE START /rory edit---------------------------------- //
console.log("Inventory table loading..."); //======rory// replaced Promise

// ** DOM manipulation --> INVENTORY TABLE **
//column header titles
const columnName = [
  "NAME",
  "DATE ADDED",
  "QUANTITY",
  "UNITSIZE",
  "UNITTYPE",
  "CATEGORY",
  "SUBCATEGORY",
  "LOCATION",
  "EXPIRY DATE",
  "COMMENTS",
];

function createTable(columns) {
  const itemData = foundItems;
  const tableContainer = document.getElementById("inventory-table"); //======rory// fixed container reference

  tableContainer.innerHTML = ""; //==========================================rory/

  const table = document.createElement("table");
  console.log(table);
  table.style.border = "1px solid black";
  table.style.width = "100%";

  tableContainer.appendChild(table); //======rory// (removed duplicate)

  // Create THEAD
  const thead = table.createTHead();
  const headerRow = thead.insertRow();

  columns.forEach((columnName) => {
    const th = document.createElement("th");
    th.textContent = columnName;
    th.style.border = "1px solid black";
    th.style.padding = "8px";
    headerRow.appendChild(th);
  });

  // Create TBODY
  const tbody = table.createTBody();

  populateRows(tbody, itemData); //======populate the table===rory//
}

function populateRows(tbody, data) {
  data.forEach((item) => {
    const row = tbody.insertRow();

    const values = [
      item.item_name, //===============rory//
      item.date_added,
      item.quantity,
      item.unit_size,
      item.unit_type,
      item.category,
      item.subcategory,
      item.storage_location, //===============================rory//
      item.expiry_date,
      item.comments,
    ];

    values.forEach((value) => {
      const cell = row.insertCell();
      cell.textContent = value ?? ""; //===================================rory// prevents "undefined"
      cell.style.border = "1px solid black";
      cell.style.padding = "6px";
    });
  });
}

async function getData() {
  //=========rory// removed unused param
  const response = await fetch(
    "https://pantrypal-server-yyp8.onrender.com/stock"
    // "http://localhost:8080/stock"
  );
  console.log(response);
  const data = await response.json();
  console.log(data);
  return data;
}

createTable(columnName); //======rory// pass column headers

//! ---------------------------------- NENE END ---------------------------------- //
