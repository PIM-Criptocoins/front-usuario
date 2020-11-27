import { query } from "./modules/globalFuncs.js";
  
let localUser = JSON.parse(localStorage.getItem('user'));
const balance = query("#balance");

balance.innerText = `R$${localUser.balance}`;