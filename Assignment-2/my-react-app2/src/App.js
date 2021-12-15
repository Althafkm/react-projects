
import './App.css';
const employee = {
  name: 'Tom',
  location: 'New York',
  bloodGroup: 'B+',
  age: 28,
  profileImg: 'https://www.w3schools.com/howto/img_avatar.png'
       }
  

function App() {
  return (
    <div className='mainpage'>
      <img className='profilePic' src={employee.profileImg} alt='profile-pic' placeholder='profile'/>
      <h1 className='name'>{employee.name} </h1>
      <h6>Location</h6>
      <h5>{employee.location}</h5>
      <h6>Blood group</h6>
      <h5>{employee.bloodGroup}</h5>
      <h6>Age</h6>
      <h5>{employee.age}</h5>
  </div>
  );
}

export default App;
