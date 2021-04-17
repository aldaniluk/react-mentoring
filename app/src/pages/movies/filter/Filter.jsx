import { FilterListComponent } from '@pages/movies/filter/components/layouts/FilterListComponent';
import { FilterOption } from '@pages/movies/filter/components/FilterOption';
import optionsFromJson from '@assets/data/genres.json'
import { useState, useEffect } from 'react';

function Filter(props) {    
    const [options, setOptions] = useState([]);
    const [selectedOption, setSelectedOption] = useState(null);
    
    useEffect(() => {
        Promise
            .resolve(optionsFromJson)
            .then(options => {
                setOptions(options);
                setSelectedOption(options[0]);
            });
    }, []);

    useEffect(() => {
        props.changeSelectedOption(selectedOption);
    }, [selectedOption]);

    return (
        <FilterListComponent>
            {
                options.map(option => (
                    <FilterOption 
                        key={option.id}
                        option={option}
                        isSelected={option === selectedOption}
                        changeSelected={setSelectedOption}
                    />
                ))
            }
        </FilterListComponent>
    );
}

export { Filter }