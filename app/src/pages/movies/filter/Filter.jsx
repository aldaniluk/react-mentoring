import { FilterListComponent } from '@pages/movies/filter/components/layouts/FilterListComponent';
import { FilterOption } from '@pages/movies/filter/components/FilterOption';
import { setFilterOption } from '@store/actionCreators';
import { useSelector, connect } from 'react-redux';
import FilterOptions from '@assets/data/FilterOptions';
import { selectedFilterSelector } from '@store/selectors';

function Filter(props) {    
    const selectedOption = useSelector(selectedFilterSelector);

    function setSelectedOption(option){
        props.dispatch(setFilterOption(option));
    }

    return (
        <FilterListComponent>
            {
                FilterOptions.map(option => (
                    <FilterOption 
                        key={option.id}
                        option={option}
                        isSelected={option === selectedOption}
                        changeSelected={() => setSelectedOption(option)}
                    />
                ))
            }
        </FilterListComponent>
    );
}

export default connect()(Filter)