// document =============================================================================

document.body.firstElementChild;

document.body.lastElementChild;

document.body.lastElementChild.lastElementChild;

function colourChange() {
  let table = document.body.children[2];

  for (let i = 0; i < table.rows.length; i++) {
    let row = table.rows[i];
    row.cells[i].style.backgroundColor = 'red';
  }
}

// colourChange();

// document Attributes and properties =============================================================================

let elem = document.querySelector('[data-widget-name]');

// console.log(elem.dataset.widgetName);

let link = document.querySelector('a');

link.style.color = 'orange';

// Changing a document =============================================================================

function clear(elem) {
  elem.innerHTML = '';
}

function createEl() {
  let ulCreate = document.createElement('ul');
  document.body.append(ulCreate);
  while (true) {
    let data = prompt('Введите текст для элемента списка', '');

    if (!data) {
      break;
    }

    let li = document.createElement('li');
    li.textContent = data;
    ulCreate.append(li);
  }
}

// createEl()
function createElement() {
  let container = document.getElementById('container');
  let data = {
    Рыбы: {
      форель: {},
      лосось: {},
    },

    Деревья: {
      Огромные: {
        секвойя: {},
        дуб: {},
      },
      Цветковые: {
        яблоня: {},
        магнолия: {},
      },
    },
  };

  function createTree(container, obj) {
    container.innerHTML = createTreeText(obj);
  }

  function createTreeText(obj) {
    let li = '';
    let ul;
    for (let key in obj) {
      li += '<li>' + key + createTreeText(obj[key]) + '</li>';
    }
    if (li) {
      ul = '<ul>' + li + '</ul>';
    }
    return ul || '';
  }

  createTree(container, data);
}

// createElement();

function createList() {
  let lis = document.getElementsByTagName('li');

  for (let li of lis) {
    let descendantsCount = li.getElementsByTagName('li').length;
    if (!descendantsCount) continue;

    li.firstChild.data += ' [' + descendantsCount + ']';
  }
}
//  createList()

let timerId;
function update() {
  let clock = document.getElementById('clockup');
  let date = new Date(); // (*)
  let hours = date.getHours();
  if (hours < 10) hours = '0' + hours;
  clock.children[0].innerHTML = hours;

  let minutes = date.getMinutes();
  if (minutes < 10) minutes = '0' + minutes;
  clock.children[1].innerHTML = minutes;

  let seconds = date.getSeconds();
  if (seconds < 10) seconds = '0' + seconds;
  clock.children[2].innerHTML = seconds;
}

function clockStart() {
  timerId = setInterval(update, 1000);
  update();
}
// clockStart();

one.insertAdjacentHTML('afterend', '<li>2</li><li>3</li>');

function makeSort() {
  let tableSort = document.getElementById('table-sort');

  let sortedRows = Array.from(tableSort.rows)
    .slice(1)
    .sort((rowA, rowB) =>
      rowA.cells[0].innerHTML > rowB.cells[0].innerHTML ? 1 : -1
    );

  tableSort.tBodies[0].append(...sortedRows);
}
// makeSort();

// document Styles and classes =============================================================================

function showNotification({ top = 0, right = 0, className, html }) {
  let notification = document.createElement('div');
  notification.className = 'notification';
  if (className) {
    notification.classList.add(className);
  }
  notification.style.position = 'absolute';
  notification.style.top = top + 'px';
  notification.style.right = right + 'px';

  notification.innerHTML = html;
  document.body.append(notification);

  setTimeout(() => notification.remove(), 1500);
}

// let i = 1;
// setInterval(() => {
//   showNotification({
//     top: 10,
//     right: 10,
//     html: 'Hello ' + i++,
//     className: 'welcome',
//   });
// }, 1000);
