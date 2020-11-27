import { query, create, queryAddChild } from "./modules/globalFuncs.js";

const localUser = JSON.parse(localStorage.getItem('user'));
console.log(localUser);

localUser.coins.forEach(coin => {
  const option = create("option");
  queryAddChild("#coins", option);
  option.value = coin.coin;
});

const coin = query("#coin");
const sellPrice = query("#sell-price");
let price = 0;

const balance = query("#balance");
balance.innerText = localUser.balance;

coin.addEventListener("change", () => {
  switch (coin.value) {
    case localUser.coins[0].coin:
      price = localUser.coins[0].price;
      break;
    case localUser.coins[1].coin:
      price = localUser.coins[1].price;    
      break;
    case localUser.coins[2].coin:
      price = localUser.coins[2].price;
      break;  
    case localUser.coins[3].coin:
      price = localUser.coins[3].price;
      break;
    case localUser.coins[4].coin:
      price = localUser.coins[4].price;
      break;
  }

  sellPrice.value = price;
});

const amount = query("#amount");
amount.addEventListener("change", () => {
  let coinPrice = parseInt(price);
  let coinAmount = parseInt(amount.value);
  let totalPrice = (coinPrice * coinAmount);

  sellPrice.value = totalPrice;
});

const submit = query("#submit");
submit.addEventListener("click", () =>{
  if(coin.value.lenght === 0){
    return alert("Selecione uma moeda para compra");
  } else if(amount.value <= 0){
    return alert("Selecione uma quantidade válida de criptomoedas");
  } else {
    const totalBalance = localUser.balance - sellPrice.value;
    let intAmount = parseInt(amount.value); 
    let totalAmount = null;
    let user = null;
    
    switch (coin.value) {
      case localUser.coins[0].coin:
        totalAmount = (localUser.coins[0].amount - intAmount);
        user = {
          "name": localUser.name,
          "email": localUser.email,
          "cpf": localUser.cpf,
          "dateOfBirth": localUser.dateOfBirth,
          "password": localUser.password,
          "balance": totalBalance,
          "coins": [
            {
              "coin": localUser.coins[0].coin,
              "amount": totalAmount,
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

        break;
      case localUser.coins[1].coin:
        totalAmount = (localUser.coins[1].amount - intAmount);
        user = {
          "name": localUser.name,
          "email": localUser.email,
          "cpf": localUser.cpf,
          "dateOfBirth": localUser.dateOfBirth,
          "password": localUser.password,
          "balance": totalBalance,
          "coins": [
            {
              "coin": localUser.coins[0].coin,
              "amount": localUser.coins[0].amount,
              "code": localUser.coins[0].code,
              "price": localUser.coins[0].price
            },
            {
              "coin": localUser.coins[1].coin,
              "amount": totalAmount,
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

        break;
      case localUser.coins[2].coin:
        totalAmount = (localUser.coins[2].amount - intAmount);
        user = {
          "name": localUser.name,
          "email": localUser.email,
          "cpf": localUser.cpf,
          "dateOfBirth": localUser.dateOfBirth,
          "password": localUser.password,
          "balance": totalBalance,
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
              "amount": totalAmount,
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
        
        break;  
      case localUser.coins[3].coin:
        totalAmount = (localUser.coins[3].amount - intAmount);
        user = {
          "name": localUser.name,
          "email": localUser.email,
          "cpf": localUser.cpf,
          "dateOfBirth": localUser.dateOfBirth,
          "password": localUser.password,
          "balance": totalBalance,
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
              "amount": totalAmount,
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

        break;
      case localUser.coins[4].coin:
        totalAmount = (localUser.coins[4].amount - intAmount);
        user = {
          "name": localUser.name,
          "email": localUser.email,
          "cpf": localUser.cpf,
          "dateOfBirth": localUser.dateOfBirth,
          "password": localUser.password,
          "balance": totalBalance,
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
            },+
            +
            +
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
              "amount": totalAmount,
              "code": localUser.coins[4].code,
              "price": localUser.coins[4].price
            }
          ]
        }

        break;
    }

    console.log(user);

    if(totalAmount < 0){
      alert("Você não tem mais criptomoedas suficientes para vender");
    }
    else if(user){
      localStorage.setItem('user', JSON.stringify(user));   
    }else{
      alert("Ocorreu um erro");
    }
  }
});