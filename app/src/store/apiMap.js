const globalUrl = 'http://localhost:4000';

let getMoviesUrl = (filter, sorter, asc) => {
    let url = globalUrl + '/movies';

    filter = filter.toLowerCase();
    if(isFilterExists(filter)){
        url += `?filter=${filter}`;
    }

    sorter = sorter.toLowerCase();
    if(isSorterExists(sorter)){
        let sortOrder = asc ? 'asc' : 'desc';
        url += (isFilterExists(filter) ? '&' : '?') + `sortBy=${sorter}&sortOrder=${sortOrder}`;
    }

    return url;
}

let isFilterExists = filter => filter && filter != 'all';
let isSorterExists = sorter => sorter;

let deleteMovieUrl = id => globalUrl + `/movies/${id}`;

let addMovieUrl = () => globalUrl + '/movies';

let updateMovieUrl = () => globalUrl + '/movies';

export { getMoviesUrl, deleteMovieUrl, addMovieUrl, updateMovieUrl }