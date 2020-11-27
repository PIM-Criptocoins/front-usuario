import { query, verificateUsers } from "./modules/globalFuncs.js";

console.log(verificateUsers());
function validateCredentials(email, password){
  let verificate = false;
  
  verificateUsers().forEach(user => {
    console.log(user);
    if(email === user.email && password === user.password){
      localStorage.setItem('user', JSON.stringify(user));
      verificate = true;
    }
  });

  return verificate;
}

function login(email, password) {
  let verificate = validateCredentials(email, password);

  if(verificate){
    window.open("/home", "_self");
  } else {
    alert("email inválido ou senha inválido");
  }
}

const submit = query("#submit");
submit.addEventListener("click", () => {
  const email = query("#email");
  const password = query("#password");
  login(email.value, password.value);
});