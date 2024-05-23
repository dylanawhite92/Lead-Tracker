let myLeads = [];
const inputBtn = document.getElementById('input-btn');
const deleteBtn = document.getElementById('delete-btn');
const inputEl = document.getElementById('input-el');
const listEl = document.getElementById('list-el');
const leadsFromStorage = JSON.parse(localStorage.getItem('myLeads'));

if (leadsFromStorage) {
  renderLeads();
}

deleteBtn.addEventListener('dblclick', () => {
  localStorage.clear();
  myLeads = [];
  renderLeads();
});

inputBtn.addEventListener('click', () => {
  if (inputEl.value !== '') {
    myLeads.push(inputEl.value);
    inputEl.value = '';

    localStorage.setItem('myLeads', JSON.stringify(myLeads));

    renderLeads();
    console.log(leadsFromStorage);
  }
});

function renderLeads() {
  let listItems = '';

  for (let i = 0; i < myLeads.length; i++) {
    listItems += `
    <li>
      <a href='${myLeads[i]}' target='_blank'>${myLeads[i]}
      </a>
    </li>`;
  }

  listEl.innerHTML = listItems;
}
