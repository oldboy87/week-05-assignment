console.log("Hello World!");

//!temp button
const addItemButton = document.getElementById("add");

// TODO: Create the modal and the form once the button has been clicked
addItemButton.addEventListener("click", () => {
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
  itemNameLabel.htmlFor = "item_name";
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
  unitTypeLabel.htmlFor = "unit_type";
  unitTypeLabel.textContent = "Unit Type: ";
  const unitTypeInput = document.createElement("select");
  unitTypeInput.name = "unit-type";
  unitTypeInput.required = true;
  unitTypeInput.placeholder = "unit";
  const unitTypePlaceholder = document.createElement("option");
  unitTypePlaceholder.value = "";
  unitTypePlaceholder.disabled = true;
  unitTypePlaceholder.textContent = "Select Option";
  unitTypePlaceholder.selected = true;
  unitTypePlaceholder.hidden = true;
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
  unitTypeInput.appendChild(unitTypePlaceholder);
  unitTypeInput.appendChild(optG);
  unitTypeInput.appendChild(optKG);
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
  const categoryPlaceholder = document.createElement("option");
  categoryPlaceholder.value = "";
  categoryPlaceholder.disabled = true;
  categoryPlaceholder.textContent = "Select Option";
  categoryPlaceholder.selected = true;
  categoryPlaceholder.hidden = true;
  const optC1 = document.createElement("option");
  optC1.value = "beverages";
  optC1.text = "Beverages";
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
  categoryInput.appendChild(categoryPlaceholder);
  categoryInput.appendChild(optC1);
  categoryInput.appendChild(optC2);
  categoryInput.appendChild(optC3);
  categoryInput.appendChild(optC4);
  categoryInput.appendChild(optC5);
  addItemForm.appendChild(categoryLabel);
  addItemForm.appendChild(categoryInput);

  const subcategoryLabel = document.createElement("label");
  subcategoryLabel.htmlFor = "subcategory";
  subcategoryLabel.textContent = "Subcategory: ";
  const subcategoryInput = document.createElement("select");
  subcategoryInput.name = "subcategory";
  subcategoryInput.required = true;
  const subcategoryPlaceholder = document.createElement("option");
  subcategoryPlaceholder.value = "";
  subcategoryPlaceholder.disabled = true;
  subcategoryPlaceholder.textContent = "Select Option";
  subcategoryPlaceholder.selected = true;
  subcategoryPlaceholder.hidden = true;
  const optSC = document.createElement("option");
  optSC.value = "can drinks";
  optSC.text = "Can Drinks";
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
  subcategoryInput.appendChild(subcategoryPlaceholder);
  subcategoryInput.appendChild(optSC);
  subcategoryInput.appendChild(optSC2);
  subcategoryInput.appendChild(optSC3);
  subcategoryInput.appendChild(optSC4);
  subcategoryInput.appendChild(optSC5);
  addItemForm.appendChild(subcategoryLabel);
  addItemForm.appendChild(subcategoryInput);

  const storageLocationLabel = document.createElement("label");
  storageLocationLabel.htmlFor = "storage-location";
  storageLocationLabel.textContent = "Storage Location: ";
  const storageLocationInput = document.createElement("select");
  storageLocationInput.name = "storage-location";
  storageLocationInput.required = true;
  const storagePlaceholder = document.createElement("option");
  storagePlaceholder.value = "";
  storagePlaceholder.disabled = true;
  storagePlaceholder.textContent = "Select Option";
  storagePlaceholder.selected = true;
  storagePlaceholder.hidden = true;
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
  storageLocationInput.appendChild(storagePlaceholder);
  storageLocationInput.appendChild(optPantry);
  storageLocationInput.appendChild(optDisposables);
  storageLocationInput.appendChild(optFridge);
  storageLocationInput.appendChild(optFreezer);
  storageLocationInput.appendChild(optOther);
  addItemForm.appendChild(storageLocationLabel);
  addItemForm.appendChild(storageLocationInput);

  const expiryDateLabel = document.createElement("label");
  expiryDateLabel.htmlFor = "date";
  expiryDateLabel.textContent = "Expiry Date: ";
  const expiryDateInput = document.createElement("input");
  expiryDateInput.type = "date";
  expiryDateInput.name = "date";
  expiryDateInput.pattern = "d{4}-d{2}-d{2}";
  expiryDateInput.required = true;
  addItemForm.appendChild(expiryDateLabel);
  addItemForm.appendChild(expiryDateInput);

  const commentsLabel = document.createElement("label");
  commentsLabel.htmlFor = "text";
  commentsLabel.textContent = "Additional Comments: ";
  const commentsInput = document.createElement("textarea");
  commentsInput.maxLength = 1000;

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
}

//! ---------------------------------- NENE START ---------------------------------- //
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
  const tableContainer = document.getElementById("inventory-table");

  const table = document.createElement("table");
  console.log(table);
  table.style.border = "1px solid";

  tableContainer.appendChild(table);
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

createTable(columnName);

//! ---------------------------------- NENE END ---------------------------------- //

//TODO: ============ Tom's code ===================

//THIS IS A TEST ARRAY OF OBJECTS FOR TESTING SEARCH FUNTIONALITY
const people = [
  {
    name: "Fred",
    job: "builder",
  },
  {
    name: "Frump",
    job: "builder",
  },
  {
    name: "Flodd",
    job: "builder",
  },
  {
    name: "Flap",
    job: "builder",
  },
  {
    name: "Bill",
    job: "builder",
  },
  {
    name: "Bran",
    job: "builder",
  },
  {
    name: "Bronn",
    job: "builder",
  },
  {
    name: "Steve",
    job: "builder",
  },
  {
    name: "Sam",
    job: "builder",
  },
];

//functions for all possible button interactions goes here:
function donate() {
  alert("To donation page");
}
function search() {
  let flag = false;
  const dudeSearch = document.getElementById("searchbar").value;
  console.log("dudesearch:");
  console.log(dudeSearch);
  for (let i = 0; i < people.length; i++) {
    if (dudeSearch === people[i].name) {
      flag = true;
    } else {
    }
  }
  if (flag == true) {
    alert("Dude was found");
  } else {
    alert("No such dude was found");
  }
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

loopButtons(pageloadButtons);

//TODO =============END Tom's Code ==================
