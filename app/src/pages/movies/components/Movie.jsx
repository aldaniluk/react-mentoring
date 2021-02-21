import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Card = styled.div`
    padding: 30px 20px;
    flex-basis: 33.33%;
    color: #808080;
    &:nth-child(3n+3) {
        padding-right: 0px;
        padding-left: 40px;
    }
    &:nth-child(3n+1) {
        padding-right: 40px;
        padding-left: 0px;
    }
`

const Image = styled.img`
    width: 100%;
`

const NameAgeComponent = styled.div`
    padding: 5px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Name = styled.p`
    font-size: 25px;
`

const Age = styled.div`
    border: 1px solid #808080;
    border-radius: 3px;
    padding: 3px 5px;
`

function Movie(props){
    return (
        <Card>
            <Image src={props.imgSrc} />
            <NameAgeComponent>
                <Name>
                    {props.name}
                </Name>
                <Age>
                    {props.age}
                </Age>
            </NameAgeComponent>
            {props.genre}
        </Card>
    );
}

Movie.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    genre: PropTypes.string.isRequired,
    imgSrc: PropTypes.string.isRequired
}

export { Movie }