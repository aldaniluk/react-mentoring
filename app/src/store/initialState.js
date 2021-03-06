import FilterOptions from '@assets/data/FilterOptions';
import SorterOptions from '@assets/data/SorterOptions';

const initialState = {
    movies: [],
    movie: null,
    filter: {
        selectedOption: FilterOptions[0]
    },
    sorter: {
        selectedOption: SorterOptions[0], 
        asc: true
    },
};

export { initialState }