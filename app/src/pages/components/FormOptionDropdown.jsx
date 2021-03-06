import styled from 'styled-components';
import { VARIABLES } from '@styles/VARIABLES'

const OptionDropdown = styled.select`
    width: 100%;
    height: 40px;
    background: ${VARIABLES.grey};
    border: none;
    border-radius: 5px;
    color: ${VARIABLES.lightgrey};
`

function FormOptionDropdown(props) {
    return (
        <OptionDropdown>
            {props.children}
        </OptionDropdown>
    )
}

export { FormOptionDropdown }