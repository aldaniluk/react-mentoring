import styled from 'styled-components';

const Input = styled.input`
    background: rgba(255, 255, 255, 0.2); 
    border: none;
    border-radius: 4px;
    height: 40px;
    flex-grow: 1;
    margin-right: 10px;
`

function SearchInput(){
    return (
        <Input placeholder='What do you want to watch?' />
    );
}

export { SearchInput }