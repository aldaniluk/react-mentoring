import styled from 'styled-components';
import magnifierIcon from '@assets/imgs/zoom.png';

const ReturnToSearchPanel = styled.div`
    height: 20px;
    width: 20px;
    background: black;
    background-image: url(${magnifierIcon});
    background-size: cover;
    background-position: center center;
    background-color: transparent;
    cursor: pointer;
`

export { ReturnToSearchPanel }