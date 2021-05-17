let apiGetMovies = url => {
    return fetch(url)
        .then(res => res.json());
}

let apiDeleteMovie = url => {
    return fetch(url, {
        method: 'DELETE' 
    });
}

let apiAddMovie = (url, movie) => {
    return fetch(url, { 
        method: 'POST', 
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' }, 
        body: JSON.stringify(movie) 
    })
}

let apiUpdateMovie = (url, movie) => {
    return fetch(url, { 
        method: 'PUT', 
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' }, 
        body: JSON.stringify(movie) 
    })
}

export { apiGetMovies, apiDeleteMovie, apiAddMovie, apiUpdateMovie }