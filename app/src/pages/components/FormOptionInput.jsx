import styled from 'styled-components';

const OptionInput = styled.input`
    width: 100%;
    background: #2e2e2e;
    border: none;
    border-radius: 5px;
    height: 40px;
`

function FormOptionInput(props) {
    return (
        <OptionInput placeholder={props.placeholder}>
            {props.children}
        </OptionInput>
    )
}

export { FormOptionInput }