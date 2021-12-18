import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
const employee={
  name:'Albert',
  id:'00004352',
  appointment:'10:00 AM (17-12-20121)',
  email:'albert@gmail.com',
  phone:9876543210,
  status:'In progress',
  door:'Mark',
  time:'10:30(18-12-2021)',
  profileImg: 'https://www.w3schools.com/howto/img_avatar.png',
  description:'A reliable and dependable employee is a trusted one. Reliability is an important factor in knowing that the job will get done and it will get done well.'

}
ReactDOM.render(
  <React.StrictMode>
    <App  employee={employee}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();