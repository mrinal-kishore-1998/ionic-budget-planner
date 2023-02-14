const reasonInput = document.querySelector('#input-reason');
const reasonAmount = document.querySelector('#input-amount');
const cancelBtn = document.querySelector('#btn-cancel');
const confirmBtn = document.querySelector('#btn-confirm');

const expenseList = document.querySelector('#expense-list');

confirmBtn.addEventListener('click', () => {
  const enterReason = reasonInput.value;
  const enterAmount = reasonAmount.value;

  if (
    enterReason.trim().length <= 0 ||
    enterAmount <= 0 ||
    enterAmount.trim().length <= 0
  ) {
    return;
  }
  // console.log(enterReason, enterAmount);

  const newItem = document.createElement('ion-item');
  newItem.textContent = enterReason + ': $' + enterAmount;
  expenseList.appendChild(newItem);
});
