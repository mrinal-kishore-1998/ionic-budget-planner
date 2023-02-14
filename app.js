const reasonInput = document.querySelector('#input-reason');
const reasonAmount = document.querySelector('#input-amount');
const cancelBtn = document.querySelector('#btn-cancel');
const confirmBtn = document.querySelector('#btn-confirm');

const expenseList = document.querySelector('#expense-list');
const totalExpenses = document.querySelector('#total-expenses');

let totalAmount = 0;

const clear = () => {
  reasonInput.value = '';
  reasonAmount.value = '';
};

confirmBtn.addEventListener('click', () => {
  const enterReason = reasonInput.value;
  const enterAmount = reasonAmount.value;

  if (
    enterReason.trim().length <= 0 ||
    enterAmount <= 0 ||
    enterAmount.trim().length <= 0
  ) {
    alert('Invalid input');
    return;
  }

  const newItem = document.createElement('ion-item');
  newItem.textContent = enterReason + ': ₹' + enterAmount;
  expenseList.appendChild(newItem);

  totalAmount += +enterAmount;
  totalExpenses.textContent = totalAmount;

  clear();
});

cancelBtn.addEventListener('click', clear);
