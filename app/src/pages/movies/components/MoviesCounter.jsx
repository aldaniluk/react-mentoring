import styled from 'styled-components';
import PropTypes from 'prop-types';

const Text = styled.div`
    color: white;
    margin-top: 35px;
    font-size: 25px;
`

function MoviesCounter(props) {
    return (
        <Text>
            <strong>{props.count}</strong> movies found
        </Text>
    )
}

MoviesCounter.propTypes = {
    count: PropTypes.number.isRequired
}

export { MoviesCounter }