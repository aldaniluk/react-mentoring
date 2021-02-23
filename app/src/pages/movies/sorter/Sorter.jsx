import { SorterListComponent } from './components/layouts/SorterListComponent';
import { SortByText } from './components/SortByText';
import { SorterOption } from './components/SorterOption';

const options = [
    'RELEASE DATE', 'NAME', 'AGE'
]

// TBD
let choosedOption = options[0];

function Sorter() {
    return (
        <SorterListComponent>
            <SortByText /> 
            <SorterOption option={choosedOption} />
        </SorterListComponent>
    );
}

export { Sorter }