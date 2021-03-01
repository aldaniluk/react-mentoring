import { SorterListComponent } from '@pages/movies/sorter/components/layouts/SorterListComponent';
import { SortByText } from '@pages/movies/sorter/components/SortByText';
import { SorterDropdown } from './components/SorterDropdown'
import options from '@assets/data/sortBy.json'
import React from 'react';

class Sorter extends React.Component {
    state = {
        selectedOption: options[0]
    }

    changeSelected = option => {
        this.setState({
            selectedOption: option
        });
    }

    render() {
        return (
            <SorterListComponent>
                <SortByText /> 
                <SorterDropdown selectedOption={this.state.selectedOption.name} >
                    {
                        options.map(option => 
                            <option key={option.id} 
                                value={option.name} 
                                onClick={this.changeSelected}>
                                    {option.name}
                            </option>   
                        )
                    }
                </SorterDropdown>
            </SorterListComponent>
        );
    }
}

export { Sorter }