import styled from 'styled-components';
import PropTypes from 'prop-types';
import { VARIABLES } from '@styles/VARIABLES'

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
    border: 1px solid ${VARIABLES.lightgrey};
    border-radius: 3px;
    padding: 3px 5px;
`

function MovieDescription(props) {
    return (
        <>
            <NameAgeComponent>
                <Name>{props.title}</Name>
                <Age>{props.release_date.substring(0, 4)}</Age>
            </NameAgeComponent>
            {props.genres.join()}
        </>
    );
}

MovieDescription.propTypes = {
    title: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
    genres: PropTypes.array.isRequired,
}

export { MovieDescription }