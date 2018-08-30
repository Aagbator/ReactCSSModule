import React from 'react';
import ReactDOM from 'react-dom';
import Naviagation from './Naviagation';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Naviagation />, div);
    ReactDOM.unmountComponentAtNode(div);
});
