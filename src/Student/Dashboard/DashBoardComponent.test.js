import React from 'react';
import ReactDOM from 'react-dom';
import DashBoarComponent from './DashBoardComponent';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<DashBoarComponent />, div);
  ReactDOM.unmountComponentAtNode(div);
});
