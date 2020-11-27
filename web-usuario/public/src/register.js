import { query, verificateUsers } from "./modules/globalFuncs.js";
import { users } from "./modules/Users.js";

const name = query("#name");
const email = query("#email");
const confirmEmail = query("#confirmEmail");
const cpf = query("#CPF");
const date = query("#date");
const password = query("#password");
const confirmPassword = query("#confirmPassword");
const submit = query("#submit");

async function addUsers(user){
  await users.push(user);
  localStorage.setItem('users', JSON.stringify(users));
  localStorage.setItem('user', JSON.stringify(user));
}

function validade(){
  let verificate = undefined;

  verificateUsers().every(user => {
    verificate = false;

    if(name.value.length < 3 ){
      return alert("Coloque seu nome completo");
    }
    else if(email.value.length === 0){
      return alert("Coloque seu email");
    }
    else if(email.value != confirmEmail.value){
      return alert("email incorreto. Confirme seu email");
    }
    else if(email.value === user.email){
      return alert("Já existe um usuário com esse email");
    }
    else if(cpf.value === user.cpf || cpf.value.length < 14){
      return alert("Já existe um usuário com esse cpf ou está faltando caracteres");
    }
    else if(password.value != confirmPassword.value || password.value.length < 6){
      return alert(`senha incorreta, confime sua senha ela deve ter mais de 6 caracteres e corresponder ao "Confirme a senha"`);
    } else {
      verificate = true;
    }
  });
  
  return verificate;
}

submit.addEventListener("click", ()=>{
  if(validade()){
    const user = {
      "name": name.value,
      "email": email.value,
      "cpf": cpf.value,
      "dateOfBirth": date.value,
      "password": password.value,
      "balance": 0,
      "coins": [
        {
          "coin": "Bitcoin",
          "amount": 0,
          "code": "79102-320",
          "price": 10305236
        },
        {
          "coin": "BinanceCoin",
          "amount": 0,
          "code": "45066-672",
          "price": 19134
        },
        {
          "coin": "Litecoin",
          "amount": 0,
          "code": "58088-020",
          "price": 47984
        },
        {
          "coin": "Ethereum",
          "amount": 0,
          "code": "59138-602",
          "price": 323633
        },
        {
          "coin": "Stellar",
          "amount": 0,
          "code": "68376-041",
          "price": 74
        }
      ]
    }
    addUsers(user);
    window.open("/home", "_self");
  }
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