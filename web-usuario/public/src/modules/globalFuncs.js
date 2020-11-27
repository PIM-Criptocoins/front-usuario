import { users } from "./Users.js";

export function query (tag) {
  return document.querySelector(tag)
}

export function queryAll (tag) {
  return document.querySelectorAll(tag);
}

export function create (tag){
  return document.createElement(tag);
}

export function queryAddChild(contener, child){
  return query(contener).appendChild(child);
}

export function verificateUsers(){
  const localUsers = JSON.parse(localStorage.getItem('users'));
  if(localUsers){
    return localUsers;
  } else {
    return users;
  }

}



