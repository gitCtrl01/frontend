export function SetItem({ key, value }) {
  localStorage.setItem(key, value);
}

export function GetItem(key){
  return localStorage.getItem(key)
}