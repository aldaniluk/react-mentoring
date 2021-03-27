import { SorterListComponent } from '@pages/movies/sorter/components/layouts/SorterListComponent';
import { SortByText } from '@pages/movies/sorter/components/SortByText';
import { SorterDropdown } from './components/SorterDropdown'
import optionsFromJson from '@assets/data/sortBy.json'
import React from 'react';

class Sorter extends React.Component {
    state = {
        options: [],
        selectedOption: null
    }

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

    render() {
        return (
            <SorterListComponent>
                <SortByText /> 
                <SorterDropdown selectedOption={this.state.selectedOption?.name ?? ''} >
                    {
                        this.state.options.map(option => (
                                <option key={option.id} 
                                    value={option.name} 
                                    onClick={this.changeSelected}>
                                        {option.name}
                                </option>   
                            )
                        )
                    }
                </SorterDropdown>
            </SorterListComponent>
        );
    }
}

export { Sorter }