export const setStorage = (key, data) => {
  if(typeof data === 'object'){
    data = JSON.stringify(data);
  }
  return localStorage.setItem(key, data);
}

export const getStorage = (key) => {
  let data = localStorage.getItem(key);
  try {
    if(typeof JSON.parse(data) === 'object')
      data = JSON.parse(data);
  } catch (err) {
    data = data;
  }
  
  return data;
}

export const removeStorage = (key) => {
  return localStorage.removeItem(key);
}

export const clearStorage = () => {
  return localStorage.clear();
}

