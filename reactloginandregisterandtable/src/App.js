import React, { Component } from 'react';
//import ReactDOM from 'react-dom/client';
import './index.css'; 
import Pagination from 'react-bootstrap/Pagination';

import 'bootstrap/dist/css/bootstrap.min.css';

class Fruits extends Component {
  render() {
    
    return (
      <>
       <div style={{ display: 'flex', justifyContent: 'space-evenly'}}>
        <LoginForm/>
        <RegisterForm/>
        
      </div>
      <div style={{padding:'30px'}}>
      <Table/>
      </div>
      </>
    );
  }
}

class LoginForm extends Component {
  login() {
    const username = document.getElementById('newUsername').value;
    const password = document.getElementById('Password').value;
    if (username && password) {
      window.location.href = 'Table';
    } else {
      alert('Please enter both username and password.');
    }
  }

  render() {
    return (
      <form id="registerForm">
        <h2 style={{ textAlign: 'center' }}>LOGIN</h2><br />
        <div style={{ display: 'grid', justifyContent: 'space-evenly',border:'10px solid',  padding: '10px 10px 10px 15px' }}>
          <div style={{ borderStyle: 'ridge', padding: '40px' }}>
            <label htmlFor="newUsername">Username:</label>
            <input type="text" id="newUsername" name="newUsername" required /><br /><br />
            <label htmlFor="Password">Password:</label>
            <input type="password" id="Password" name="Password" required /><br /><br />
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <button type="button" onClick={() => this.login()}>Login</button>
            </div>
          </div>
        </div>
      </form>

    );
  }
}

class RegisterForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      country: '',
      agree: false,
    };
  }

  handleChange = (event) => {
    const { id, value, type, checked } = event.target;
    this.setState({
      [id]: type === 'checkbox' ? checked : value,
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    
    const { name, password, confirmPassword, country, agree } = this.state;

    if (!name || !password || !confirmPassword || !country || !agree) {
      alert('All fields must be filled out and agree to conditions must be checked.');
      return;
    }

    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    alert('Registration successful!');
  }

  render() {
    return (
    <>

      <form id="regform" onSubmit={this.handleSubmit}> 
               <h2 style={{ textAlign: 'center' }}>Register</h2><br />
      <div style={{ display: 'grid', justifyContent: 'space-evenly',border:'10px solid',  padding: '20px' }}>
                <div style={{ borderStyle: 'ridge', padding: '20px' }}>
       <label htmlFor="name">Enter name:</label>
        <input type="text" id="name" name="name" value={this.state.name} onChange={this.handleChange} required /><br />
        
        <label htmlFor="email">Enter email id:</label>
        <input type="email" id="email" name="email" value={this.state.email} onChange={this.handleChange} required /><br />
        
        <label htmlFor="password">Enter password:</label>
        <input id="password" type="password" name="password" value={this.state.password} onChange={this.handleChange} required /><br />
        
        <label htmlFor="confirmPassword">Confirm password:</label>
        <input id="confirmPassword" type="password" name="confirmPassword" value={this.state.confirmPassword} onChange={this.handleChange} required /><br />
        
        <label htmlFor="country">Choose country:</label>
        <select id="country" name="country" value={this.state.country} onChange={this.handleChange} required>
          <option value="">Select a country</option>
          <option value="spain">Spain</option>
          <option value="argentina">Argentina</option>
          <option value="brazil">Brazil</option>
          <option value="england">England</option>
          <option value="italy">Italy</option>
          <option value="germany">Germany</option>
        </select><br />
        
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <label>Choose password protection:</label>
          <input type="radio" name="passwordProtection" value="yes" id="passwordYes" onChange={this.handleChange} />
          <label htmlFor="passwordYes">Yes</label>
          <input type="radio" name="passwordProtection" value="no" id="passwordNo" onChange={this.handleChange} />
          <label htmlFor="passwordNo">No</label><br />
        </div>
        
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <input type="checkbox" id="agree" name="agree" checked={this.state.agree} onChange={this.handleChange} />
          <label htmlFor="agree">Agree to all conditions</label><br />
        </div> <br />
        <div style={{ display: 'flex', justifyContent: 'center' }}>
        <input type="submit" value="Register" /><br /> </div>
        </div>
        </div>
      </form>
      </>
    );
  }
}



class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timer: 60,
      currentPage: 1,
      itemsPerPage: 5,
      employees: [
        { empid: 1, empname: 'Sashi', age: 19, email: 'sashi@gmail.com', address: 'Guntur', salary: 97000 },
        { empid: 2, empname: 'John', age: 28, email: 'john@example.com', address: 'New York', salary: 55000 },
        { empid: 3, empname: 'Anna', age: 22, email: 'anna@example.com', address: 'London', salary: 45000 },
        { empid: 4, empname: 'Mike', age: 35, email: 'mike@example.com', address: 'Sydney', salary: 67000 },
        { empid: 5, empname: 'Sara', age: 30, email: 'sara@example.com', address: 'Toronto', salary: 60000 },
        { empid: 6, empname: 'Tom', age: 25, email: 'tom@example.com', address: 'Berlin', salary: 52000 },
        { empid: 7, empname: 'Emily', age: 27, email: 'emily@example.com', address: 'Paris', salary: 55000 },
        { empid: 8, empname: 'Jack', age: 40, email: 'jack@example.com', address: 'Dubai', salary: 70000 },
        { empid: 9, empname: 'Olivia', age: 32, email: 'olivia@example.com', address: 'Mumbai', salary: 65000 },
        { empid: 10, empname: 'Liam', age: 26, email: 'liam@example.com', address: 'Singapore', salary: 58000 },
        { empid: 11, empname: 'Sophia', age: 29, email: 'sophia@example.com', address: 'Hong Kong', salary: 62000 },
        { empid: 12, empname: 'Noah', age: 33, email: 'noah@example.com', address: 'Tokyo', salary: 70000 },
        { empid: 13, empname: 'Ava', age: 24, email: 'ava@example.com', address: 'Seoul', salary: 53000 },
        { empid: 14, empname: 'Mason', age: 31, email: 'mason@example.com', address: 'Los Angeles', salary: 65000 },
        { empid: 15, empname: 'Isabella', age: 23, email: 'isabella@example.com', address: 'San Francisco', salary: 54000 }
      ]
    };
  }

  componentDidMount() {
    this.startTimer();
  }

  startTimer() {
    this.interval = setInterval(() => {
      this.setState(prevState => {
        if (prevState.timer <= 0) {
          clearInterval(this.interval);
          alert('Time is up!');
          this.logout();
          return { timer: 0 };
        }
        return { timer: prevState.timer - 1 };
      });
    }, 1000);
  }

  logout = () => {
    clearInterval(this.interval);
    // Example logout functionality; replace with actual logic
    alert('Logging out...');
  }

  editRow = (index) => {
    const updatedEmployees = [...this.state.employees];
    updatedEmployees[index].isEditing = !updatedEmployees[index].isEditing;
    this.setState({ employees: updatedEmployees });
  }

  deleteRow = (index) => {
    const updatedEmployees = this.state.employees.filter((_, i) => i !== index);
    this.setState({ employees: updatedEmployees });
  }

  handleChange = (index, field, value) => {
    const updatedEmployees = [...this.state.employees];
    updatedEmployees[index][field] = value;
    this.setState({ employees: updatedEmployees });
  }

  handlePageChange = (pageNumber) => {
    this.setState({ currentPage: pageNumber });
  }

  render() {
    const { timer, employees, currentPage, itemsPerPage } = this.state;
    const totalPages = Math.ceil(employees.length / itemsPerPage);
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = employees.slice(indexOfFirstItem, indexOfLastItem);

    return (
      <div>
        <div style={{ display: 'flex', justifyContent: 'flex-end', padding: '10px 0', background: 'plum' }}>
          <span id="time" style={{ height: '30px', background: 'orangered', color: 'white', padding: '5px' }}>
            {Math.floor(timer / 60).toString().padStart(2, '0')}:{(timer % 60).toString().padStart(2, '0')}
          </span>&nbsp;&nbsp;
          <button type="button" onClick={this.logout} style={{ height: '30px', background: 'skyblue', color: 'white' }}>
            <i className="fa fa-sign-out" aria-hidden="true"></i> Logout
          </button>
        </div>
        <div style={{ display: 'grid', justifyContent: 'center', padding: '20px' }}>
          <h1 style={{ textAlign: 'center' }}>Employee Details</h1>
<table border="1" style={{ width: '100%', textAlign: 'center', backgroundColor: 'pink' }}>
            <thead style={{ background:'pink'}}>
              <tr>
                <th>Empid</th>
                <th>Emp Name</th>
                <th>Age</th>
                <th>Email</th>
                <th>Address</th>
                <th>Salary</th>
                <th>Options</th>
              </tr>
            </thead>
            <tbody>
              {currentItems.map((employee, index) => (
                <tr key={employee.empid}>
                  <td><input type="number" value={employee.empid} readOnly /></td>
                  <td>
                    <input
                      type="text"
                      value={employee.empname}
                      readOnly={!employee.isEditing}
                      onChange={(e) => this.handleChange(index, 'empname', e.target.value)}
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      value={employee.age}
                      readOnly={!employee.isEditing}
                      onChange={(e) => this.handleChange(index, 'age', e.target.value)}
                    />
                  </td>
                  <td>
                    <input
                      type="email"
                      value={employee.email}
                      readOnly={!employee.isEditing}
                      onChange={(e) => this.handleChange(index, 'email', e.target.value)}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      value={employee.address}
                      readOnly={!employee.isEditing}
                      onChange={(e) => this.handleChange(index, 'address', e.target.value)}
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      value={employee.salary}
                      readOnly={!employee.isEditing}
                      onChange={(e) => this.handleChange(index, 'salary', e.target.value)}
                    />
                  </td>
                  <td>
                    <button onClick={() => this.editRow(index)} style={{ color: 'skyblue' }}>
                      {employee.isEditing ? 'Save' : 'Edit'}
                    </button>
                    <button onClick={() => this.deleteRow(index)} style={{ color: 'skyblue' }}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <Pagination style={{ marginTop: '20px', textAlign: 'center' }}>
            <Pagination.First onClick={() => this.handlePageChange(1)} />
            <Pagination.Prev
              onClick={() => this.handlePageChange(Math.max(currentPage - 1, 1))}
            />
            {[...Array(totalPages).keys()].map(number => (
              <Pagination.Item
                key={number + 1}
                active={number + 1 === currentPage}
                onClick={() => this.handlePageChange(number + 1)}
              >
                {number + 1}
              </Pagination.Item>
            ))}
            <Pagination.Next
              onClick={() => this.handlePageChange(Math.min(currentPage + 1, totalPages))}
            />
            <Pagination.Last onClick={() => this.handlePageChange(totalPages)} />
          </Pagination>
        </div>
      </div>
    );
  }
}



export default Fruits;




