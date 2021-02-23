import styled from 'styled-components';

const Button = styled.button`
    border: none;
    border-radius: 5px;
    color: white;
    background: #f65261; 
    width: 170px;
`

function SearchButton(){
    return (
        <Button>
            SEARCH
        </Button>
    );
}

export { SearchButton }