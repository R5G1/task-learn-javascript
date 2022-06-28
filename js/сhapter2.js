// document =============================================================================

document.body.firstElementChild;

document.body.lastElementChild;

document.body.lastElementChild.lastElementChild;

let table = document.body.children[2];
console.log(table.rows.length);

for (let i = 0; i < table.rows.length; i++) {
  let row = table.rows[i];
  row.cells[i].style.backgroundColor = 'red';
} 

// Search =============================================================================


