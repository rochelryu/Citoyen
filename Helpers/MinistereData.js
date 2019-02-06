// Helpers/MinistereData.js

export function getMinisteresFromApi(){
    const url = "http://188.165.237.118:5003/mini";
    return fetch(url)
        .then((response) => response.json())
        .catch((error) => console.log(error))
}