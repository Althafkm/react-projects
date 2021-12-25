import './App.css';

function App(props) {
  const {employee}=props;
  return (
    <div className="App">
      <div className='head'>
        <div  className='btn1'>
          <button className='btn11' type='submit' value='<'> {'<'}</button>
        </div>
        <div className='name-id'>
          <h3 style={{margin:'2px'}}><strong>{employee.name}</strong></h3>
          <p  style={{margin:'2px'}}>{employee.id}</p>
        </div>
        <div  className='btn2'>
          <button className='btn22' type='submit'>Print</button>
        </div>
      </div>
      <div className='customer-info'>
        <p><strong>Appointment : </strong>{employee.appointment}</p>
        <p><strong>Email : </strong>{employee.email}</p>
        <p><strong>Phone : </strong>{employee.phone}</p>


      </div>
      <div className='order-info'>
      <div  className='status'>
          <h3>Status</h3>
          <ul>
            <li>{employee.status}</li>
          </ul>
        </div>
        <div className='door'>
          <h3>Door</h3>
          <p>{employee.door}</p>
        </div>
        <div  className='time'>
        <h3>Time</h3>
        <p>{employee.time} </p>
        </div>
      </div>
      <div className='product-list'>
        <div className='check'>
          <input type='checkbox'/>
        </div>
        <div className='profile-pic'>
            <img src={employee.profileImg} alt='profile' />
        </div>
        <div className='description'>
          <h3>Description</h3>
          <p>{employee.description} </p>

        </div>
        <div  className='btn3'>
          <button className='btn11' type='submit' value='<'> {'>'}</button>
        </div>

      </div>
    </div>
  );
}

export default App;
