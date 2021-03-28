import { Movie } from '@pages/movies/movie';
import { Filter } from '@pages/movies/filter';
import { Sorter } from '@pages/movies/sorter';
import { MoviesComponent } from '@pages/movies/components/layouts/MoviesComponent';
import { FilterSorterTopPanelComponent } from '@pages/movies/components/layouts/FilterSorterTopPanelComponent';
import { MoviesListComponent } from '@pages/movies/components/layouts/MoviesListComponent';
import { MoviesCounter } from '@pages/movies/components/MoviesCounter';
import { GlobalWidthComponent } from '@globalComponents';
import { useEffect } from 'react';
import { store } from '@store/store';
import { getMovies } from '@store/actionCreators';
import { useSelector } from 'react-redux';

function Movies(props) {
    const movies = useSelector(state => state.movies);
    const selectedFilterOption = useSelector(state => state.filter.selectedOption);
    const selectedSorterOption = useSelector(state => state.sorter.selectedOption);

    useEffect(() => {
        store.dispatch(getMovies(selectedFilterOption, selectedSorterOption));
    }, [selectedFilterOption, selectedSorterOption])

    return (
        <MoviesComponent>
            <GlobalWidthComponent>
                <FilterSorterTopPanelComponent>
                    <Filter />
                    <Sorter />
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