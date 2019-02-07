// Helpers/MinistereData.js

export function localiteApi(){
    const url = "http://188.165.237.118:5003/local";
    return fetch(url)
        .then((response) => response.json())
        .catch((error) => console.log(error))
}