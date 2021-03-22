import styled from 'styled-components';
import PropTypes from 'prop-types';
import { VARIABLES } from '@styles/VARIABLES'
import { useCallback } from 'react';

const Option = styled.div`
    padding: 10px 0;
    margin: 0 10px -3px;
    cursor: pointer;
    border-bottom: ${props => props.isSelected ? '3px solid ' + VARIABLES.red : 'none'};
    &:nth-child(1) {
        margin-left: 0;
    }
`

function FilterOption(props) {
    const handleChangeSelected = useCallback(() => props.changeSelected(props.option), [props.changeSelected, props.option]);

    return (
        <Option isSelected={props.isSelected} onClick={handleChangeSelected}>
            {props.option.name}
        </Option>
    );
}

FilterOption.propTypes = {
    option: PropTypes.shape({
        name: PropTypes.string.isRequired,
    }).isRequired,
    isSelected: PropTypes.bool.isRequired,
}

export { FilterOption }