import React from 'react';

function HelloFunctionalWithCreateElement(){
    return React.createElement(
        'h1',
        null,
        'Hello from Functional Component with CreateElement!'
    );
}

export default HelloFunctionalWithCreateElement;