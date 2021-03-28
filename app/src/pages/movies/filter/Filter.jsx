import { FilterListComponent } from '@pages/movies/filter/components/layouts/FilterListComponent';
import { FilterOption } from '@pages/movies/filter/components/FilterOption';
import { store } from '@store/store';
import { setFilterOption } from '@store/actionCreators';
import { useSelector } from 'react-redux';

function Filter() {    
    const options = useSelector(state => state.filter.options);
    const selectedOption = useSelector(state => state.filter.selectedOption);

    function setSelectedOption(option){
        store.dispatch(setFilterOption(option));
    }

    return (
        <FilterListComponent>
            {
                options.map(option => (
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

export { Filter }