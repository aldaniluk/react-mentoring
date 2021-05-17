import styled from 'styled-components';

const Img = styled.img`
    height: 400px;
    margin-right: 30px;
`

function MovieDetailsImg(props){
    return <Img src={props.poster_path} />;
}

export { MovieDetailsImg }