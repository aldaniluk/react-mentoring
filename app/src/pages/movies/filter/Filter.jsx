import { FilterListComponent } from '@pages/movies/filter/components/layouts/FilterListComponent';
import { FilterOption } from '@pages/movies/filter/components/FilterOption';

const options = [
    'ALL', 'DOCUMENTARY', 'COMEDY', 'HORROR', 'CRIME'
]

// TBD
let selected = option => option == options[0];

function Filter() {    
    return (
        <FilterListComponent>
            {
                options.map(option => (
                    <FilterOption 
                        key={option}
                        option={option}
                        selected={selected(option)} />
                ))
            }
        </FilterListComponent>
    );
}

export { Filter }