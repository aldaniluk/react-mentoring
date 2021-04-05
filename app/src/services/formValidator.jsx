export const formValidator = (values, genres) => {
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    const intRegex = /^([0-9]*)$/;
    const errors = {};

    if(!values.title) errors.title = 'Title is required';
    
    if(!values.releaseDate) errors.releaseDate = 'Release date is required';
    else if(!values.releaseDate.match(dateRegex)) errors.releaseDate = 'Release date must be in format yyyy-mm-dd';

    if(!values.url) errors.url = 'Url is required';
    else if(!values.url.includes('http')) errors.url = 'Url is incorrect';

    if(!values.genres) errors.genres = 'Genres is required';
    else if(!values.genres.split(',').map(g => g.toUpperCase()).every(g => genres.some(gg => gg.name == g))) errors.genres = 'Some of genres are incorrect';

    if(!values.overview) errors.overview = 'Overview is required';

    if(!values.runtime) errors.runtime = 'Runtime is required';
    else if(!values.runtime.match(intRegex)) errors.runtime = 'Runtime must be an integer';
    else if(Number.parseInt(values.runtime) === 0) errors.runtime = 'Runtime must be greated that 0';

    return errors;
}