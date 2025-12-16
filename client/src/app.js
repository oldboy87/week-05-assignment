console.log("Hello World!");

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
