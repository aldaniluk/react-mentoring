import styled from 'styled-components';
import PropTypes from 'prop-types';

const Option = styled.div`
    padding: 10px 0;
    margin: 0 10px -3px;
    cursor: pointer;
    border-bottom: ${props => props.selected ? '3px solid #f65261' : 'none'};
    &:nth-child(1) {
        margin-left: 0;
    }
`

function FilterOption(props) {
    return (
        <Option selected={props.selectedOption == props.option} onClick={props.changeSelected}>
            {props.option}
        </Option>
    );
}

FilterOption.propTypes = {
    selectedOption: PropTypes.string.isRequired,
    option: PropTypes.string.isRequired
}

export { FilterOption }