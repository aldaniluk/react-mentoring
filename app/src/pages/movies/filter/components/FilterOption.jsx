import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Option = styled.div`
    padding: 10px 0;
    margin: 0 10px;
    cursor: pointer;
    border-bottom: ${props => props.choosed ? '3px solid #f65261' : 'none'};
    &:nth-child(1) {
        margin-left: 0;
    }
`

function FilterOption(props) {
    return (
        <Option choosed={props.choosed}>
            {props.option}
        </Option>
    );
}

FilterOption.propTypes = {
    choosed: PropTypes.bool.isRequired,
    option: PropTypes.string.isRequired
}

export { FilterOption }