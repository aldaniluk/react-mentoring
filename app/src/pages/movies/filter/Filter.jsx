import { FilterListComponent } from '@pages/movies/filter/components/layouts/FilterListComponent';
import { FilterOption } from '@pages/movies/filter/components/FilterOption';
import optionsFromJson from '@assets/data/genres.json'
import React from 'react';

class Filter extends React.Component {    
    state = {
        options: [],
        selectedOption: null
    };

    componentDidMount(){
        Promise.resolve(optionsFromJson)
            .then(options => this.setState({
                options: options,
                selectedOption: options[0]
            }))
    }

    changeSelected = option => {
        this.setState({
            selectedOption: option
        });
    }

    isSelected = option => option === this.state.selectedOption;

    render(){
        return (
            <FilterListComponent>
                {
                    this.state.options.map(option => (
                        <FilterOption 
                            key={option.id}
                            option={option}
                            isSelected={this.isSelected(option)}
                            changeSelected={this.changeSelected}
                        />
                    ))
                }
            </FilterListComponent>
        );
    }
}

export { Filter }