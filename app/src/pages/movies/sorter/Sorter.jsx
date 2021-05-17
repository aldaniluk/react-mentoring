import { SorterListComponent } from '@pages/movies/sorter/components/layouts/SorterListComponent';
import { SortByText } from '@pages/movies/sorter/components/SortByText';
import { SorterDropdown } from './components/SorterDropdown'
import { useSelector, connect } from 'react-redux';
import { setSorterOption } from '@store/actionCreators';
import SorterOptions from '@assets/data/SorterOptions';
import { selectedSorterSelector, selectedSorterAscSelector } from '@store/selectors';

function Sorter(props) {
    const selectedOption = useSelector(selectedSorterSelector);
    const asc = useSelector(selectedSorterAscSelector);

    function setSelectedOption(event){
        if(event.clientX == 0 && event.clientY == 0) { //HACK: click is raised twice, when you select option from dropdown. The second click has specified condition 
            let ascNew = selectedOption.id == event.target.value ? !asc : true;
            props.dispatch(setSorterOption(SorterOptions.find(o => o.id == event.target.value), ascNew));
        }
    }

    return (
        <SorterListComponent>
            <SortByText /> 
            <SorterDropdown selectedOption={selectedOption} changeSelected={setSelectedOption} >
                {
                    SorterOptions.map(option => (
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

export default connect()(Sorter)