import { query } from "./modules/globalFuncs.js";

const localUser = JSON.parse(localStorage.getItem('user'));

function deposited () {
  const deposit = query("#deposit");
  
  let value = parseInt(deposit.value);
  let localBalance = parseInt(localUser.balance);
  let totalDeposit = (localBalance + value);
  totalDeposit = totalDeposit.toFixed(2);

  const user = {
    "name": localUser.name,
    "email": localUser.email,
    "cpf": localUser.cpf,
    "dateOfBirth": localUser.dateOfBirth,
    "password": localUser.password,
    "balance": totalDeposit,
    "coins": [
      {
        "coin": localUser.coins[0].coin,
        "amount": localUser.coins[0].amount,
        "code": localUser.coins[0].code,
        "price": localUser.coins[0].price
      },
      {
        "coin": localUser.coins[1].coin,
        "amount": localUser.coins[1].amount,
        "code": localUser.coins[1].code,
        "price": localUser.coins[1].price
      },
      {
        "coin": localUser.coins[2].coin,
        "amount": localUser.coins[2].amount,
        "code": localUser.coins[2].code,
        "price": localUser.coins[2].price
      },
      {
        "coin": localUser.coins[3].coin,
        "amount": localUser.coins[3].amount,
        "code": localUser.coins[3].code,
        "price": localUser.coins[3].price
      },
      {
        "coin": localUser.coins[4].coin,
        "amount": localUser.coins[4].amount,
        "code": localUser.coins[4].code,
        "price": localUser.coins[4].price
      }
    ]
  }

  if(value < 100){
    alert("o mínimo para ser depositado de R$100");
  } else {
    alert("Valor depositado com sucesso")
    localStorage.setItem('user', JSON.stringify(user));   
  }
}

const submit = query("#submit");
submit.addEventListener("click", () => {
  deposited();
});

const balance = query("#balance");
balance.innerText = localUser.balance;
