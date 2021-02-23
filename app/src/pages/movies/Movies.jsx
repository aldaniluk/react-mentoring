import { Movie } from './components/Movie';
import { Filter } from './filter/Filter';
import { Sorter } from './sorter/Sorter';
import { MoviesComponent } from './components/layouts/MoviesComponent';
import { FilterSorterTopPanelComponent } from './components/layouts/FilterSorterTopPanelComponent';
import { MoviesListComponent } from './components/layouts/MoviesListComponent';
import { MoviesCounter } from './components/MoviesCounter';

let movies = [
    {
        name: 'Memento',
        imgSrc: './movies/memento.jpg',
        genre: 'Thriller, Detective',
        age: 2000
    },
    {
        name: '1408',
        imgSrc: './movies/1408.jpg',
        genre: 'Horror, Thriller',
        age: 2007
    },
    {
        name: 'Titanic',
        imgSrc: './movies/titanic.jpg',
        genre: 'Romance, Drama',
        age: 1997
    },
    {
        name: 'Breaking Bad',
        imgSrc: './movies/breaking_bad.jpg',
        genre: 'Crime',
        age: 2008
    },
    {
        name: 'Over the Garden Wall',
        imgSrc: './movies/over_the_garden_wall.jpg',
        genre: 'Adventure',
        age: 2014
    }
]

function Movies() {
    return (
        <MoviesComponent>
            <FilterSorterTopPanelComponent>
                <Filter />
                <Sorter />
            </FilterSorterTopPanelComponent>
            <MoviesCounter count={movies.length} />
            <MoviesListComponent>
            {
                movies.map(movie => (
                    <Movie 
                        key={movie.name}
                        name={movie.name}
                        imgSrc={movie.imgSrc}
                        genre={movie.genre}
                        age={movie.age}
                    />
                ))
            }
            </MoviesListComponent>
        </MoviesComponent>
    )
}

export { Movies }