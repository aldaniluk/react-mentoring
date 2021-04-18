const globalUrl = 'http://localhost:4000';

let getMoviesUrl = (filter, sorter, asc, search) => {
    let url = globalUrl + '/movies';
    let useQuestion = true;

    filter = filter.toLowerCase();
    if(filter && filter != 'all'){
        url += `?filter=${filter}`;
        useQuestion = false;
    }

    sorter = sorter.toLowerCase();
    if(sorter){
        let sortOrder = asc ? 'asc' : 'desc';
        url += (useQuestion ? '?' : '&') + `sortBy=${sorter}&sortOrder=${sortOrder}`;
        useQuestion = false;
    }

    if(search){
        url += (useQuestion ? '?' : '&') + `search=${search}&searchBy=title`;
    }

    return url;
}

let getMovieUrl = id => globalUrl + `/movies/${id}`;

let deleteMovieUrl = id => globalUrl + `/movies/${id}`;

let addMovieUrl = () => globalUrl + '/movies';

let updateMovieUrl = () => globalUrl + '/movies';

export { getMoviesUrl, getMovieUrl, deleteMovieUrl, addMovieUrl, updateMovieUrl }