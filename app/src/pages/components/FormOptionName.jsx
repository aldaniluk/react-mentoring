import styled from 'styled-components';

const OptionName = styled.div`
    margin-top: 20px;
    color: #f65261;
`

function FormOptionName(props) {
    return (
        <OptionName>
            {props.children}
        </OptionName>
    )
}

export { FormOptionName }