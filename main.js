let myLeads = [];
const inputBtn = document.getElementById('input-btn');
const deleteBtn = document.getElementById('delete-btn');
const inputEl = document.getElementById('input-el');
const listEl = document.getElementById('list-el');
const leadsFromStorage = JSON.parse(localStorage.getItem('myLeads'));

if (leadsFromStorage) {
  renderList(myLeads);
}

deleteBtn.addEventListener('dblclick', () => {
  localStorage.clear();
  myLeads = [];
  renderList(myLeads);
});

inputBtn.addEventListener('click', () => {
  if (inputEl.value !== '') {
    myLeads.push(inputEl.value);
    inputEl.value = '';

    localStorage.setItem('myLeads', JSON.stringify(myLeads));

    renderList(myLeads);
    console.log(leadsFromStorage);
  }
});

function renderList(arr) {
  let listItems = '';

  for (let i = 0; i < myLeads.length; i++) {
    listItems += `
    <li>
      <a href='${arr[i]}' target='_blank'>${arr[i]}
      </a>
    </li>`;
  }

  listEl.innerHTML = listItems;
}
