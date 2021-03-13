import { Movie } from '@pages/movies/movie/Movie';
import { Filter } from '@pages/movies/filter';
import { Sorter } from '@pages/movies/sorter';
import { MoviesComponent } from '@pages/movies/components/layouts/MoviesComponent';
import { FilterSorterTopPanelComponent } from '@pages/movies/components/layouts/FilterSorterTopPanelComponent';
import { MoviesListComponent } from '@pages/movies/components/layouts/MoviesListComponent';
import { MoviesCounter } from '@pages/movies/components/MoviesCounter';
import { GlobalWidthComponent } from '@globalComponents';
import moviesFromJson from '@assets/data/movies';
import React from 'react';

class Movies extends React.Component {
    state = {
        movies: []
    }

    componentDidMount(){
        Promise.resolve(moviesFromJson)
            .then(movies => this.setState({ movies }))
    }

    render() {
        return (
            <MoviesComponent>
                <GlobalWidthComponent>
                    <FilterSorterTopPanelComponent>
                        <Filter />
                        <Sorter />
                    </FilterSorterTopPanelComponent>
                    <MoviesCounter count={this.state.movies.length} />
                    <MoviesListComponent>
                    {
                        this.state.movies.map(movie => (
                            <Movie 
                                key={movie.id}
                                movie={movie}
                            />
                        ))
                    }
                    </MoviesListComponent>
                    
                </GlobalWidthComponent>
            </MoviesComponent>
        )
    }
}

export { Movies }