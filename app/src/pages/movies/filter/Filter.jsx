import { FilterListComponent } from '@pages/movies/filter/components/layouts/FilterListComponent';
import { FilterOption } from '@pages/movies/filter/components/FilterOption';
import options from '@assets/data/genres.json'
import React from 'react';

class Filter extends React.Component {    
    state = {
        selectedOption: options[0]
    };

    changeSelected = option => {
        this.setState({
            selectedOption: option
        });
    }

    render(){
        return (
            <FilterListComponent>
                {
                    options.map(option => (
                        <FilterOption 
                            key={option.id}
                            option={option.name}
                            selectedOption={this.state.selectedOption.name}
                            changeSelected={this.changeSelected.bind(this, option)}
                        />
                    ))
                }
            </FilterListComponent>
        );
    }
}

export { Filter }