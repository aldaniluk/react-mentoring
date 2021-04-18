const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
const intRegex = /^([0-9]*)$/;
    
export const formValidator = (values, genres) => {
    const errors = {};

    validateTitle(values.title, errors);
    validateReleaseDate(values.releaseDate, errors);
    validateUrl(values.url, errors);
    validateGenres(values.genres, genres, errors);
    validateOverview(values.overview, errors);
    validateRuntime(values.runtime, errors);

    return errors;
}

function validateTitle(title, errors){
    if(!title) {
        errors.title = 'Title is required';
    }
}

function validateReleaseDate(releaseDate, errors){
    if(!releaseDate) {
        errors.releaseDate = 'Release date is required';
    }
    else if(!releaseDate.match(dateRegex)) {
        errors.releaseDate = 'Release date must be in format yyyy-mm-dd';
    }
}

function validateUrl(url, errors){
    if(!url) {
        errors.url = 'Url is required';
    }
    else if(!url.includes('http')) {
        errors.url = 'Url is incorrect';
    }
}

function validateGenres(genres, correctGenres, errors){
    if(!genres) {
        errors.genres = 'Genres is required';
    }
    else if(!genres.split(',').map(g => g.toUpperCase()).every(g => correctGenres.some(gg => gg.name == g))) {
        errors.genres = 'Some of genres are incorrect';
    }
}

function validateOverview(overview, errors){
    if(!overview) {
        errors.overview = 'Overview is required';
    }
}

function validateRuntime(runtime, errors){
    if(!runtime) {
        errors.runtime = 'Runtime is required';
    }
    else if(!runtime.match(intRegex)) {
        errors.runtime = 'Runtime must be an integer';
    }
    else if(Number.parseInt(runtime) === 0) {
        errors.runtime = 'Runtime must be greated that 0';
    }
}