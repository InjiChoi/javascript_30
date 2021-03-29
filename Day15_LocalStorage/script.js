const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
// const items = [];
const items = JSON.parse(localStorage.getItem('items')) || [];

function addItem(e) {
    e.preventDefault();
    const text = this.querySelector('[name=item]').value;
    const item = {
        text: text, // or just text
        done: false,
    };
    items.push(item);
    populateList(items, itemsList);
    localStorage.setItem('items', JSON.stringify(items)); // JSON.stringify -> "object > string representation"
    this.reset();
}

function populateList(plates = [], platesList) {
    platesList.innerHTML = plates.map((plate, i) => {
        return `
            <li>
                <input type="checkbox" data-index=${i} id="item${i}" 
                        ${plate.done ? 'checked' : ''} />
                <label for="item${i}">${plate.text}</label>
            </li>
        `;
    }).join('');
}

function toggleDone(e) {
    if (!e.target.matches('input')) return; // skip  this unless it's an input (label 출력 제외)
    const el = e.target;
    const index = el.dataset.index;
    items[index].done = !items[index].done;
    localStorage.setItem('items', JSON.stringify(items));
    populateList(items, itemsList);
}

addItems.addEventListener('submit', addItem);

// const checkBoxes = document.querySelectorAll('input');
// checkBoxes.forEach(input => input.addEventListener('click', () => alert('hi')))
itemsList.addEventListener('click', toggleDone);


populateList(items, itemsList)

