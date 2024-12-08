var table = JSON.parse(localStorage.getItem("table")) || [
  { producto: "Camiseta mbappe", precio: 23 },
  { producto: "Camiseta messi", precio: 30 },
  { producto: "Camiseta cr7", precio: 430 },
  { producto: "Camiseta moleiro", precio: 50 },
  { producto: "Camiseta maradona", precio: 37 },
]; // If there is no data in localStorage, use the default values

var editingIndex = -1; // This variable helps us know which product we are editing

window.onload = loadEvents;

function loadEvents() {
  document.getElementById("show-table").addEventListener("click", showTable, false);
  document.getElementById("new-product").addEventListener("submit", newProduct, false);
}

function showTable() {
  var bodyTable = document.getElementById("table-elements");
  var allTable = "";

  // Loop through all items in the table and create rows with edit and delete buttons that are modified in the css also but they are not in the html.
  for (var i = 0; i < table.length; i++) {
    allTable += `<tr>
                  <td>${table[i].producto}</td>
                  <td>${table[i].precio}</td>
                  <td><button class="btn btn-warning" onclick="editProduct(${i})">Editar</button></td>
                  <td><button class="btn btn-danger" onclick="deleteProduct(${i})">Eliminar</button></td>
                </tr>`;
  }

  bodyTable.innerHTML = allTable;
}

// Function to add a new product or update an existing one
function newProduct(event) {
  event.preventDefault();
  var producto = document.getElementById("product").value;
  var precio = document.getElementById("price").value;

  // If editingIndex is -1, it means it's a new product, otherwise we edit the existing one
  if (editingIndex === -1) {
    var newProduct = { producto: producto, precio: precio };
    table.push(newProduct);
  } else {
    table[editingIndex].producto = producto;
    table[editingIndex].precio = precio;
    editingIndex = -1; // Clear the editing index
  }

  // Clear the form fields
  document.getElementById("product").value = '';
  document.getElementById("price").value = '';
  
  // Save the updated table in localStorage after any changes
  localStorage.setItem("table", JSON.stringify(table));
  
  // Update the table to reflect the changes
  showTable();
}

// Function to edit a product
function editProduct(index) {
  // Put the product information into the form to edit
  document.getElementById("product").value = table[index].producto;
  document.getElementById("price").value = table[index].precio;

  // Set the editing index to know which product we are editing
  editingIndex = index;
}

// Function to delete a product
function deleteProduct(index) {
  // Remove the product from the table
  table.splice(index, 1);

  // Save the updated table in localStorage
  localStorage.setItem("table", JSON.stringify(table));

  // Update the table to reflect the changes
  showTable();
}
