// Helpers/MinistereData.js

export function localiteApi(text){
    const url = "http://188.165.237.118:5003/localite/"+text;
    return fetch(url)
        .then((response) => response.json())
        .catch((error) => console.log(error))
}