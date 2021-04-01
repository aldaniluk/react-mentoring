import { SorterListComponent } from '@pages/movies/sorter/components/layouts/SorterListComponent';
import { SortByText } from '@pages/movies/sorter/components/SortByText';
import { SorterDropdown } from './components/SorterDropdown'
import { store } from '@store/store';
import { useSelector } from 'react-redux';
import { setSorterOption } from '@store/actionCreators';

function Sorter() {
    const options = useSelector(state => state.sorter.options);
    const selectedOption = useSelector(state => state.sorter.selectedOption);
    const asc = useSelector(state => state.sorter.asc);

    function setSelectedOption(event){
        if(event.clientX == 0 && event.clientY == 0) { //HACK: click is raised twice, when you select option from dropdown. The second click has specified condition 
            var ascNew = selectedOption.id == event.target.value ? !asc : true;
            store.dispatch(setSorterOption(options.find(o => o.id == event.target.value), ascNew));
        }
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