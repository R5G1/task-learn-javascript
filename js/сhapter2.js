// document =============================================================================

document.body.firstElementChild;

document.body.lastElementChild;

document.body.lastElementChild.lastElementChild;

let table = document.body.children[2];

for (let i = 0; i < table.rows.length; i++) {
  let row = table.rows[i];
  row.cells[i].style.backgroundColor = 'red';
} 

// document Attributes and properties =============================================================================

let elem = document.querySelector('[data-widget-name]');

// console.log(elem.dataset.widgetName);


let link = document.querySelector('a');

link.style.color = 'orange';