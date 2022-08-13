export function fetchCart(callback) {
    return fetch("https://www.opendigitalgallery.com/" + "cart.js")
        .then((response) => response.json())
        .then((data) => callback(data))
    //.then(data => { return data });
}

export function fetchCollection(handle, callback) {
    return fetch(
        "https://www.opendigitalgallery.com/" + "collections/" + handle + ".js"
    )
        .then((response) => response.json())
        .then((data) => callback(data))
    //.then(data => { return data });
}

export function _fetchProduct(handle, callback) {
    return fetch(
        "https://www.opendigitalgallery.com/" + "products/" + handle + ".js"
    )
        .then((response) => response.json())
        .then((data) => {console.log("fetchdata", data); callback(data)})
    //.then(data => { return data });
}
export function fetchProduct(handle, callback) {
    return fetch(
        "https://www.opendigitalgallery.com/" + "products/" + handle + ".js"
    )
        .then((response) => response.json())
        .then((data) => {
            console.log("fetchdata", data)
            callback(handle, data)
        })
    //.then(data => { return data });
}