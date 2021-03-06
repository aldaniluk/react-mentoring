import styled from 'styled-components';
import arrow from '@assets/imgs/arrow.png'
import PropTypes from 'prop-types';
import { VARIABLES } from '@styles/VARIABLES'

const Dropdown = styled.select`
    border: none;
    background: ${VARIABLES.darkgrey};
    border: none;
    color: white;
    padding: 0 10px;
    appearance: none;
    background-image: url(${arrow});
    background-repeat: no-repeat;
    background-position-x: 100%;
    background-position-y: 30%;
    padding-right: 20px;
    outline: none;
    cursor: pointer;
`

function SorterDropdown(props) {
    return (
        <Dropdown defaultValue={props.selectedOption?.id} onClick={props.changeSelected}>
            {props.children}
        </Dropdown>
    );
}

SorterDropdown.propTypes = {
    selectedOption: PropTypes.object
}

export { SorterDropdown }