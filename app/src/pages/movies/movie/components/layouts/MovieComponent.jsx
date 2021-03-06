import styled from 'styled-components';
import PropTypes from 'prop-types';
import { VARIABLES } from '@styles/VARIABLES'

const Card = styled.div`
    color: ${VARIABLES.lightgrey};
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