import { Movie } from '@pages/movies/movie';
import { Filter } from '@pages/movies/filter';
import { Sorter } from '@pages/movies/sorter';
import { MoviesComponent } from '@pages/movies/components/layouts/MoviesComponent';
import { FilterSorterTopPanelComponent } from '@pages/movies/components/layouts/FilterSorterTopPanelComponent';
import { MoviesListComponent } from '@pages/movies/components/layouts/MoviesListComponent';
import { MoviesCounter } from '@pages/movies/components/MoviesCounter';
import { NoMovieFound } from '@pages/movies/components/NoMovieFound';
import { GlobalWidthComponent } from '@globalComponents';
import { useEffect } from 'react';
import { store } from '@store/store';
import { getMovies } from '@store/actionCreators';
import { useSelector } from 'react-redux';
import { useLocation } from "react-router-dom";

const useQuery = () => new URLSearchParams(useLocation().search);

function Movies(props) {
    const movies = useSelector(state => state.movies);
    const selectedFilterOption = useSelector(state => state.filter.selectedOption);
    const selectedSorterOption = useSelector(state => state.sorter.selectedOption);
    const selectedSorterAsc = useSelector(state => state.sorter.asc);
    const search = useQuery().get('search');

    useEffect(() => {
        store.dispatch(getMovies(search));
    }, [selectedFilterOption, selectedSorterOption, selectedSorterAsc, search])

    return (
        <MoviesComponent>
            <GlobalWidthComponent>
                <FilterSorterTopPanelComponent>
                    <Filter />
                    <Sorter />
                </FilterSorterTopPanelComponent>
                {
                movies.length == 0 
                    ? <NoMovieFound />
                    : <>
                        <MoviesCounter count={movies.length} />
                        <MoviesListComponent>
                        {
                            movies.map(movie => {
                                return (<Movie 
                                    key={movie.id}
                                    movie={movie}
                                />
                            )})
                        }
                        </MoviesListComponent>
                    </>
                }
            </GlobalWidthComponent>
        </MoviesComponent>
    )
}

export { Movies }