$("#inputPrice").mask("000.000.000.000.000,00", { reverse: true });


let products = [
  {
    id: 1,
    name: "Smartphone X Pro",
    description:
      "Smartphone com tela de 6.5 polegadas, câmera tripla e 128GB de armazenamento.",
    price: 2999.99,
    category: 1,
    promotion: true,
    new: true,
  },
  {
    id: 2,
    name: "Notebook Ultra",
    description: "Notebook com processador Intel i7, 16GB de RAM e 512GB SSD.",
    price: 4999.99,
    category: 2,
    promotion: false,
    new: false,
  },
  {
    id: 3,
    name: "Câmera Digital 4K",
    description:
      "Câmera digital com capacidade de gravação em 4K e zoom óptico de 30x.",
    price: 2199.99,
    category: 3,
    promotion: false,
    new: true,
  },
];
var categories = [
  {
    id: 1,
    name: "Eletrônicos",
  },
  {
    id: 2,
    name: "Computadores",
  },
  {
    id: 3,
    name: "Câmeras",
  },
];
loadProducts();

function save(){
  console.log('dando certo')
  let priceValue = document.getElementById("inputPrice").value.replace(/[^\d,]/g, '').replace(',', '.');
  let priceNumber = parseFloat(priceValue);

  let prod = {
    id: products.length+1,
    name: document.getElementById("inputName").value,
    description: document.getElementById("inputDescription").value,
    price: document.getElementById("inputPrice").value,
    category: document.getElementById("selectCategory").value,
    promotion: document.getElementById("checkBoxPromotion").checked,
    new: document.getElementById("checkBoxNewProduct").checked,
  }
  addNewRow(prod)
  products.push(prod)
  document.getElementById("formProduct").reset()
}

function loadProducts() {
  for (let prod of products) {
    addNewRow(prod);
  }
}

function addNewRow(prod) {
  var table = document.getElementById("productsTable");
  const newRow = table.insertRow();

  let idNode = document.createTextNode(prod.id);
  newRow.insertCell().appendChild(idNode);

  let nameNode = document.createTextNode(prod.name);
  newRow.insertCell().appendChild(nameNode);

  let descriptionNode = document.createTextNode(prod.description);
  var cell = newRow.insertCell()
  cell.className="d-none d-md-table-cell"
  cell.appendChild(descriptionNode);

  var formatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
});
  let priceNode = document.createTextNode(formatter.format(prod.price));
  newRow.insertCell().appendChild(priceNode);

  let categoryNode = document.createTextNode(
    categories[prod.category - 1].name
  );
  newRow.insertCell().appendChild(categoryNode);

  var options = "";
  if (prod.promotion) {
    options = '<span class="badge bg-success">P</span> ';
  }
  if (prod.new) {
    options += '<span class="badge bg-primary">L</span> ';
  }
  cell = newRow.insertCell()
  cell.className = 'd-none d-md-table-cell'
  cell.innerHTML = options;

}

