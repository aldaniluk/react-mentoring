import styled from 'styled-components';
import PropTypes from 'prop-types';

const Options = styled.div`
    position: absolute;
    right: 5px;
    top: 5px;
`

const Option = styled.button`
    padding: 5px;
    margin: 5px;
    background: transparent;
    color: #f65261;
    border: 1px solid #f65261;
    border-radius: 5px;
    :hover {
        background: #f65261;
        color: white;
    }
`

// temporarily instead of 3 dots icon
function EditDeleteOptions(props) {
    if(!props.show){
        return null;
    }

    return (
        <Options show={props.show}>
            <Option onClick={props.openEditMovie}>Edit</Option>
            <Option onClick={props.openDeleteMovie}>Delete</Option>
        </Options>
    );
}

EditDeleteOptions.propTypes = {
    show: PropTypes.bool.isRequired,
    openEditMovie: PropTypes.func.isRequired,
    openDeleteMovie: PropTypes.func.isRequired,
}

export { EditDeleteOptions }