const form = document.querySelector("#expense-form");
const ExpenseList = document.querySelector("#expense-list");
const totalAmount = document.querySelector("#total-amount");

const expenses = [];
form.addEventListener("submit", (event) => {
  event.preventDefault(); //prevent the form from automatically submiting
  const Expense = document.getElementById("expense-name");
  const Amount = document.getElementById("expense-amount");
  //extract the value of expense and amount input box
  const ExpenseValue = Expense.value.trim();
  const AmountValue = Amount.value.trim();
  console.log(`${ExpenseValue} and ${AmountValue}`);
  additems(ExpenseValue, AmountValue);
  Expense.value = "";
  Amount.value = "";
});

function additems(ExpenseValue, AmountValue) {
  const now = Date.now();
  const items = {
    name: `${ExpenseValue}`,
    value: `${AmountValue}`,
    identity: `${now}`,
  };
  const element = document.createElement("li");
  element.setAttribute("id", `${now}`);
  element.innerHTML = `${ExpenseValue} - $${AmountValue} 
    <button data-id=${now}>Delete</button>`;
  ExpenseList.appendChild(element);
  expenses.push(items);
  totalCalculator();
}
let total = 0;
function totalCalculator() {
  total = 0; //reset the total to 0
  expenses.forEach((item) => {
    const Cvalue = parseInt(item.value);
    total = total + Cvalue;
  });
  console.log(total);

  totalAmount.innerHTML = `${total}`;
}

ExpenseList.addEventListener("click", (event) => {
  console.log(event);
  if (event.target.nodeName === "BUTTON") {
    const id = event.target.dataset.id;
    document.getElementById(id).remove();

    const expenseWithIdentity = expenses.find(
      (expense) => expense.identity === id
    );

    const index = expenses.indexOf(expenseWithIdentity);
    expenses.splice(index, 1); // Remove 1 element at the found index
    

    totalCalculator();
    // if (expenseWithTimestamp) {
    //   console.log(expenseWithTimestamp.name);
    // }
  }
});
console.log(expenses);
