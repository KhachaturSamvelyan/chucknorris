export const getLocalStorage = (key: string)=> {
    const data = localStorage.getItem(key);
    if(data){
        return JSON.parse(data)
    } else {
       return []
    }

}

export const setLocalStorage = (key: string, data: any) => {
    localStorage.setItem(key, JSON.stringify(data));
}
