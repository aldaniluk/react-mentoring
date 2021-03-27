import { SorterListComponent } from '@pages/movies/sorter/components/layouts/SorterListComponent';
import { SortByText } from '@pages/movies/sorter/components/SortByText';
import { SorterOption } from '@pages/movies/sorter/components/SorterOption';

const options = [
    'RELEASE DATE', 'NAME', 'AGE'
]

// TBD
let selectedOption = options[0];

function Sorter() {
    return (
        <SorterListComponent>
            <SortByText /> 
            <SorterOption option={selectedOption} />
        </SorterListComponent>
    );
}

export { Sorter }