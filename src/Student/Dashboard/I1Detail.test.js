import React from 'react';
import ReactDOM from 'react-dom';
import I1Detail from './I1Detail';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<I1Detail  i={{
      studentID: 'it16061712',
      studentName: 'Gigarthan',
      email: 'it@my.sliit.lk',
      mobile: '071235646454',
      address : 'colombo',
      cgpa: 3.65,
      semester: 2,
      year: 3
  }} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
