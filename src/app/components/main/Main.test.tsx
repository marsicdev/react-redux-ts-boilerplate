import * as React from 'react';
import * as ReactDOM from 'react-dom';

import Main from './Main';

it('renders without crashing', () => {
    const containerDiv = document.createElement('div');
    ReactDOM.render(
        <Main />,
        containerDiv
    );
});
