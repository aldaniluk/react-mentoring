import styled from 'styled-components';

const Button = styled.button`
    border: none;
    border-radius: 5px;
    color: white;
    background: #f65261; 
    width: 150px;
    height: 40px;
`

function ColoredButton(props) {
    return (
        <Button onClick={props.onClick}>
            {props.children}
        </Button>
    )
}

export { ColoredButton }