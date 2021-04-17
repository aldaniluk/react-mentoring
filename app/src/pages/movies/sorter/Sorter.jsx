import { SorterListComponent } from '@pages/movies/sorter/components/layouts/SorterListComponent';
import { SortByText } from '@pages/movies/sorter/components/SortByText';
import { SorterDropdown } from './components/SorterDropdown'
import optionsFromJson from '@assets/data/sortBy.json'
import { useState, useEffect } from 'react';

function Sorter(props) {
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

    function changeSelected(event){
        setSelectedOption(options.find(o => o.id == event.target.value));
    }

    return (
        <SorterListComponent>
            <SortByText /> 
            <SorterDropdown selectedOption={selectedOption} changeSelected={changeSelected} >
                {
                    options.map(option => (
                            <option key={option.id} value={option.id}>
                                {option.name}
                            </option>   
                        )
                    )
                }
            </SorterDropdown>
        </SorterListComponent>
    );
}

export { Sorter }