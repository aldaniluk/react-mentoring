export default class Movie {
    constructor(title, release_date, poster_path, genres, overview, runtime){
        this.title = title;
        this.release_date = release_date;
        this.poster_path = poster_path;
        this.genres = genres;
        this.overview = overview;
        this.runtime = runtime;
    }
}