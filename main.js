let myLeads = ['good lead', 'perfect job', 'juice cleanse'];
const inputBtn = document.getElementById('input-btn');
const inputEl = document.getElementById('input-el');
const listEl = document.getElementById('list-el');

inputBtn.addEventListener('click', () => {
  if (inputEl.value !== '') {
    myLeads.push(inputEl.value);
    inputEl.value = '';
    renderLeads();
  }
});

function renderLeads() {
  let listItems = '';

  for (let i = 0; i < myLeads.length; i++) {
    listItems += `<a
    href='${myLeads[i]}'
    target='_blank'
    rel='noopener noreferrer'><li>${myLeads[i]}</a></li>`;
  }

  listEl.innerHTML = listItems;
}
