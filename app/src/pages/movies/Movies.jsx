import { Movie } from '@pages/movies/movie';
import { Filter } from '@pages/movies/filter';
import { Sorter } from '@pages/movies/sorter';
import { MoviesComponent } from '@pages/movies/components/layouts/MoviesComponent';
import { FilterSorterTopPanelComponent } from '@pages/movies/components/layouts/FilterSorterTopPanelComponent';
import { MoviesListComponent } from '@pages/movies/components/layouts/MoviesListComponent';
import { MoviesCounter } from '@pages/movies/components/MoviesCounter';
import { GlobalWidthComponent } from '@globalComponents';
import moviesFromJson from '@assets/data/movies';
import { useState, useEffect } from 'react';

function Movies(props) {
    const [movies, setMovies] = useState([]);
    const [selectedFilterOption, setSelectedFilterOption] = useState(null);
    const [selectedSorterOption, setSelectedSorterOption] = useState(null);

    useEffect(() => {
        Promise
            .resolve(moviesFromJson)
            .then(movies => {
                var allMovies = [...movies]; //creates new array! hack for correct setMovies hook work
                var filteredMovies = filterMovies(allMovies);
                var sortedMovies = sortMovies(filteredMovies);
                setMovies(sortedMovies);
            })
    }, [selectedFilterOption, selectedSorterOption])

    function filterMovies(allMovies){
        if(selectedFilterOption && selectedFilterOption.name.toLowerCase() !== 'all'){
            return allMovies.filter(m => m.genre.toLowerCase() === selectedFilterOption.name.toLowerCase());
        }

        return allMovies;
    }

    function sortMovies(filteredMovies){
        if(selectedSorterOption){
            var field = selectedSorterOption.field;
            
            return filteredMovies.sort((a, b) => {
                if(a[field] < b[field]) return -1;
                if(a[field] > b[field]) return 1;
                return 0;
            });
        }

        return filteredMovies;
    }

    return (
        <MoviesComponent>
            <GlobalWidthComponent>
                <FilterSorterTopPanelComponent>
                    <Filter changeSelectedOption={setSelectedFilterOption} />
                    <Sorter changeSelectedOption={setSelectedSorterOption} />
                </FilterSorterTopPanelComponent>
                <MoviesCounter count={movies.length} />
                <MoviesListComponent>
                {
                    movies.map(movie => {
                        return (<Movie 
                            key={movie.id}
                            movie={movie}
                            showMovieDetails={props.showMovieDetails}
                        />
                    )})
                }
                </MoviesListComponent>
            </GlobalWidthComponent>
        </MoviesComponent>
    )
}

export { Movies }