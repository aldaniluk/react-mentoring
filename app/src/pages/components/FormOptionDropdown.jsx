import styled from 'styled-components';

const OptionDropdown = styled.select`
    width: 100%;
    height: 40px;
    background: #2e2e2e;
    border: none;
    border-radius: 5px;
    color: #5b5b5b;
`

function FormOptionDropdown(props) {
    return (
        <OptionDropdown>
            {props.children}
        </OptionDropdown>
    )
}

export { FormOptionDropdown }