import styled from 'styled-components';
import PropTypes from 'prop-types';

const Option = styled.div`
    padding-left: 15px;
    &:after {
        content: '▾';
        color: #f65261;
        padding: 3px;
        cursor: pointer;
    }
`

function SorterOption(props) {
    return (
        <Option>
            {props.option}
        </Option>
    );
}

SorterOption.propTypes = {
    option: PropTypes.string.isRequired
}

export { SorterOption }