import { SorterListComponent } from '@pages/movies/sorter/components/layouts/SorterListComponent';
import { SortByText } from '@pages/movies/sorter/components/SortByText';
import { SorterDropdown } from './components/SorterDropdown'
import { store } from '@store/store';
import { useSelector } from 'react-redux';
import { setSorterOption } from '@store/actionCreators';

function Sorter() {
    const options = useSelector(state => state.sorter.options);
    const selectedOption = useSelector(state => state.sorter.selectedOption);

    function setSelectedOption(event){
        store.dispatch(setSorterOption(options.find(o => o.id == event.target.value)));
    }

    return (
        <SorterListComponent>
            <SortByText /> 
            <SorterDropdown selectedOption={selectedOption} changeSelected={setSelectedOption} >
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