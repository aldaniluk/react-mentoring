import styled from 'styled-components';
import img from '@assets/imgs/movies.png';

const HeaderComponent = styled.div`
    padding: 30px 0px;
    background: black;
    background-image:linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9)), url(${img});
    background-size: cover;
    background-position: center center;
`

export { HeaderComponent }