import { Movie } from '@pages/movies/components/Movie';
import { Filter } from '@pages/movies/filter';
import { Sorter } from '@pages/movies/sorter';
import { MoviesComponent } from '@pages/movies/components/layouts/MoviesComponent';
import { FilterSorterTopPanelComponent } from '@pages/movies/components/layouts/FilterSorterTopPanelComponent';
import { MoviesListComponent } from '@pages/movies/components/layouts/MoviesListComponent';
import { MoviesCounter } from '@pages/movies/components/MoviesCounter';

let movies = [
    {
        id: 1,
        name: 'Memento',
        imgSrc: './movies/memento.jpg',
        genre: 'Thriller, Detective',
        age: 2000
    },
    {
        id: 2,
        name: '1408',
        imgSrc: './movies/1408.jpg',
        genre: 'Horror, Thriller',
        age: 2007
    },
    {
        id: 3,
        name: 'Titanic',
        imgSrc: './movies/titanic.jpg',
        genre: 'Romance, Drama',
        age: 1997
    },
    {
        id: 4,
        name: 'Breaking Bad',
        imgSrc: './movies/breaking_bad.jpg',
        genre: 'Crime',
        age: 2008
    },
    {
        id: 5,
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
                        key={movie.id}
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