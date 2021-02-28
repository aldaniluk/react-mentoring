import styled from 'styled-components';

const Button = styled.button`
    border: 2px solid #f65261;
    border-radius: 5px;
    color: #f65261;
    background: none; 
    width: 150px;
    height: 40px;
`

function TransparentButton(props) {
    return (
        <Button onClick={props.onClick}>
            {props.children}
        </Button>
    )
}

export { TransparentButton }