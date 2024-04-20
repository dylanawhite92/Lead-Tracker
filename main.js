const inputBtn = document.getElementById('input-btn');
const inputEl = document.getElementById('input-el');
let myLeads = ['good lead', 'perfect job', 'juice cleanse'];

inputBtn.addEventListener('click', () => {
  if (inputEl.value !== '') {
    myLeads.push(inputEl.value);
    inputEl.value = '';

    for (let i = 0; i < myLeads.length; i++) {
      console.log(myLeads[i]);
    }
  }
});
