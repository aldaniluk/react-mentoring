import styled from 'styled-components';
import { VARIABLES } from '@styles/VARIABLES'

const OptionInput = styled.input`
    width: 100%;
    background: ${VARIABLES.grey};
    color: ${VARIABLES.lightgrey};
    border: none;
    border-radius: 5px;
    height: 40px;
`

function FormOptionInput(props) {
    return (
        <OptionInput placeholder={props.placeholder} value={props.value}>
            {props.children}
        </OptionInput>
    )
}

export { FormOptionInput }