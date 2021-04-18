import { Movie } from '@pages/movies/movie';
import { Filter } from '@pages/movies/filter';
import { Sorter } from '@pages/movies/sorter';
import { MoviesComponent } from '@pages/movies/components/layouts/MoviesComponent';
import { FilterSorterTopPanelComponent } from '@pages/movies/components/layouts/FilterSorterTopPanelComponent';
import { MoviesListComponent } from '@pages/movies/components/layouts/MoviesListComponent';
import { MoviesCounter } from '@pages/movies/components/MoviesCounter';
import { GlobalWidthComponent } from '@globalComponents';
import { useEffect } from 'react';
import { getMovies } from '@store/actionCreators';
import { useSelector, connect } from 'react-redux';
import { moviesSelector, selectedFilterSelector, selectedSorterSelector, selectedSorterAscSelector } from '@store/selectors';

function Movies(props) {
    const movies = useSelector(moviesSelector);
    const selectedFilterOption = useSelector(selectedFilterSelector);
    const selectedSorterOption = useSelector(selectedSorterSelector);
    const selectedSorterAsc = useSelector(selectedSorterAscSelector);

    useEffect(() => {
        props.dispatch(getMovies());
    }, [selectedFilterOption, selectedSorterOption, selectedSorterAsc])

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

export default connect()(Movies)