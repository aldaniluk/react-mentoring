import React from 'react';
import { FilterListComponent } from './components/layouts/FilterListComponent';
import { FilterOption } from './components/FilterOption';

let options = [
    'ALL', 'DOCUMENTARY', 'COMEDY', 'HORROR', 'CRIME'
]

// TBD
let choosed = option => option == options[0];

function Filter() {    
    return (
        <FilterListComponent>
            {
                options.map(option => (
                    <FilterOption 
                        key={option}
                        option={option}
                        choosed={choosed(option)} />
                ))
            }
        </FilterListComponent>
    );
}

export { Filter }