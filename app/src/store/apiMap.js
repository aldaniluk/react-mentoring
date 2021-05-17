const globalUrl = 'http://localhost:4000';

let getMoviesUrl = (filter, sorter, asc, search) => {
    let url = globalUrl + '/movies';

    filter = filter.toLowerCase();
    if(filter && filter != 'all'){
        url += getBinder(url) + `filter=${filter}`;
    }

    sorter = sorter.toLowerCase();
    if(sorter){
        let sortOrder = asc ? 'asc' : 'desc';
        url += getBinder(url) + `sortBy=${sorter}&sortOrder=${sortOrder}`;
    }

    if(search){
        url += getBinder(url) + `search=${search}&searchBy=title`;
    }

    return url;
}

let getBinder = url => url.includes('?') ? '&' : '?';

let getMovieUrl = id => globalUrl + `/movies/${id}`;

let deleteMovieUrl = id => globalUrl + `/movies/${id}`;

let addMovieUrl = () => globalUrl + '/movies';

let updateMovieUrl = () => globalUrl + '/movies';

export { getMoviesUrl, getMovieUrl, deleteMovieUrl, addMovieUrl, updateMovieUrl }