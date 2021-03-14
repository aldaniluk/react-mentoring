import styled from 'styled-components';

const Img = styled.img`
    height: 400px;
    margin-right: 30px;
`

function MovieDetailsImg(props){
    return <Img src={'imgs/'+props.imgSrc} />;
}

export { MovieDetailsImg }