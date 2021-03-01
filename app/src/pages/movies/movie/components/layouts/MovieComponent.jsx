import styled from 'styled-components';
import PropTypes from 'prop-types';

const Card = styled.div`
    color: #808080;
    position: relative;
`

function MovieComponent(props) {
    return (
        <Card onMouseOver={props.showEditDelete} onMouseLeave={props.hideEditDelete}>
            {props.children}
        </Card>
    );
}


MovieComponent.propTypes = {
    showEditDelete: PropTypes.func.isRequired,
    hideEditDelete: PropTypes.func.isRequired,
}

export { MovieComponent }