import React from 'react';
import ReactDOM from 'react-dom';
import CompanyDetail from './CompanyDetail';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CompanyDetail company={ { companyName: 'GOOGLE', address: 'colombo', email: 'hr@google.com', contactNumber: '123456' } } />, div);
  ReactDOM.unmountComponentAtNode(div);
});
