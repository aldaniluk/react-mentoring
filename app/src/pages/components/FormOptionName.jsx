import styled from 'styled-components';
import { VARIABLES } from '@styles/VARIABLES'

const OptionName = styled.div`
    margin-top: 20px;
    color: ${VARIABLES.red};
`

function FormOptionName(props) {
    return (
        <OptionName>
            {props.children}
        </OptionName>
    )
}

export { FormOptionName }