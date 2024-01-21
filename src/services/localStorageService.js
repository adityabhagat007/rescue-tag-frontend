
const localStorage =window.localStorage;
export const setLocalStorageItem = (key,value) =>{
    localStorage.setItem(key , JSON.stringify(value));
}

export const getLocalStorageItem = (key)=>{
    if(localStorage.getItem(key)){
        return JSON.parse(localStorage.getItem(key));
    }
    return null;
}