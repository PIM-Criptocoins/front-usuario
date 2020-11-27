import { query } from "./modules/globalFuncs.js";

const localUser = JSON.parse(localStorage.getItem('user'));

function rescue () {
  const rescued = query("#rescued");
  const banco = query("#banco");
  const agency = query("#agency");
  const account = query("#account");
  const cpf = query("#CPF");
  const name = query("#name");

  let value = parseInt(rescued.value);
  let balance = parseInt(localUser.balance);
  let totalRescued = (balance - value);

  if(banco.value.length < 3){
    return alert("Insira um nome de conta válido");
  }
  else if(agency.value.length === 0){
    return alert("Insira uma agencia");
  }
  else if(account.value.length === 0){
    return alert("Insira uma conta");
  }
  else if(cpf < 14){
    return alert("Insira um CPF válido");
  }
  else if(name.value.length < 3){
    return alert("Insira o nome completo");
  }
  else if(rescued.value.length === 0){
    return alert("Insira um valor a ser regatado");
  }
  else if(value < 100){
    alert("o mínimo para ser resgatado de R$100");
  }
  else if(totalRescued < 0){
    return alert("o valor a ser resgatado não pode ser maior que seu saldo na plataforma");
  } else {
    const user = {
      "name": localUser.name,
      "email": localUser.email,
      "cpf": localUser.cpf,
      "dateOfBirth": localUser.dateOfBirth,
      "password": localUser.password,
      "balance": totalRescued,
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

    alert("Valor resgatado com sucesso")
    localStorage.setItem('user', JSON.stringify(user));     
  }
}

const balance = query("#balance");
balance.innerText = localUser.balance;

const submit = query("#submit");
submit.addEventListener("click", () => {
  rescue();
});



query("#CPF").addEventListener("input", function() {
  var i = query("#CPF").value.length;
  var str = query("#CPF").value
  if (isNaN(Number(str.charAt(i-1)))) {
    query("#CPF").value = str.substr(0, i-1)
  }
});

document.addEventListener('keydown', function(event) { 
  if(event.keyCode != 46 && event.keyCode != 8){
  var i = query("#CPF").value.length;
  if (i === 3 || i === 7)
    query("#CPF").value = query("#CPF").value + ".";
  else if (i === 11) 
    query("#CPF").value = query("#CPF").value + "-";
  }
});