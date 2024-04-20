let myLeads = ['good lead', 'perfect job', 'juice cleanse'];
const inputBtn = document.getElementById('input-btn');
const inputEl = document.getElementById('input-el');
const listEl = document.getElementById('list-el');

inputBtn.addEventListener('click', () => {
  if (inputEl.value !== '') {
    myLeads.push(inputEl.value);
    inputEl.value = '';

    for (let i = 0; i < myLeads.length; i++) {
      listEl.innerHTML += `<li>${myLeads[i]}</li>`;
    }
  }
});
