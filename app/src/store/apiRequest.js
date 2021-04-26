let apiGet = url => {
    return fetch(url)
        .then(res => res.json());
}

let apiDelete = url => {
    return fetch(url, {
        method: 'DELETE' 
    });
}

let apiAdd = (url, object) => {
    return fetch(url, { 
        method: 'POST', 
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' }, 
        body: JSON.stringify(object) 
    })
}

let apiUpdate = (url, object) => {
    return fetch(url, { 
        method: 'PUT', 
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' }, 
        body: JSON.stringify(object) 
    })
}

export { apiGet, apiDelete, apiAdd, apiUpdate }