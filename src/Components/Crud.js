import React, { useState } from 'react';

const Crud = () => {
  const [code, setCode] = useState('');
  const [name, setName] = useState('');
  const [department, setDepartment] = useState('');
  const [salary, setSalary] = useState('');
  const [employees, setEmployees] = useState([]);

  const saveEmployee = () => {
    const newEmployee = {
      code: code,
      name: name,
      department: department,
      salary: salary,
    };
    setEmployees([...employees, newEmployee]);
    setCode('');
    setName('');
    setDepartment('');
    setSalary('');
  };

  const deleteEmployee = (index) => {
    let newEmployees = [...employees];
    newEmployees.splice(index, 1);
    setEmployees(newEmployees);
  };

  const editEmployee = (index) => {
    const employee = employees[index];
    setCode(employee.code);
    setName(employee.name);
    setDepartment(employee.department);
    setSalary(employee.salary);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Employee Management</h1>
      <div style={styles.form}>
        <label>Employee Code:</label>
        <input
          type="text"
          placeholder="Enter Employee Code"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          style={styles.input}
        />
        <label>Employee Name:</label>
        <input
          type="text"
          placeholder="Enter Employee Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={styles.input}
        />
        <label>Employee Department:</label>
        <input
          type="text"
          placeholder="Enter Employee Department"
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
          style={styles.input}
        />
        <label>Employee Salary:</label>
        <input
          type="text"
          placeholder="Enter Employee Salary"
          value={salary}
          onChange={(e) => setSalary(e.target.value)}
          style={styles.input}
        />
        <button onClick={saveEmployee} style={styles.button}>
          Save Employee
        </button>
      </div>

      <h2 style={styles.subHeader}>Employee List</h2>
      <table style={styles.table}>
        <thead>
          <tr>
            <th>Code</th>
            <th>Name</th>
            <th>Department</th>
            <th>Salary</th>
            <th>Action</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee, index) => (
            <tr key={index}>
              <td>{employee.code}</td>
              <td>{employee.name}</td>
              <td>{employee.department}</td>
              <td>{employee.salary}</td>
              <td>
                <button
                  onClick={() => deleteEmployee(index)}
                  style={styles.deleteButton}
                >
                  Delete
                </button>
              </td>
              <td>
                <button
                  onClick={() => editEmployee(index)}
                  style={styles.editButton}
                >
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <h2 style={styles.footer}>Total Employees: {employees.length}</h2>
    </div>
  );
};

const styles = {
    '@keyframes backgroundGradient': {
      '0%': { backgroundPosition: '0% 50%' },
      '50%': { backgroundPosition: '100% 50%' },
      '100%': { backgroundPosition: '0% 50%' },
    },
  
    container: {
      fontFamily: 'Arial, sans-serif',
      padding: '20px',
      maxWidth: '800px',
      margin: '0 auto',
      background: 'linear-gradient(-45deg, #f0f0f0, #e0e0ff, #f9f9f9, #e6f7ff)',
      backgroundSize: '400% 400%',
      animation: 'backgroundGradient 15s ease infinite',
      borderRadius: '8px',
      boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)',
      display: 'flex',
      flexDirection: 'column',
      gap: '20px',
    },
  
    header: {
      textAlign: 'center',
      color: '#333',
      fontSize: '2rem',
      background: 'linear-gradient(90deg, #4CAF50, #2196F3)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      animation: 'pulse 2s infinite',
    },
  
    subHeader: {
      textAlign: 'center',
      color: '#555',
      fontSize: '1.2rem',
    },
  
    form: {
      display: 'flex',
      flexDirection: 'column',
      gap: '10px',
      marginBottom: '20px',
    },
  
    input: {
      padding: '10px',
      width: '100%',
      borderRadius: '4px',
      border: '1px solid #ccc',
      transition: 'border 0.3s ease',
    },
  
    button: {
      padding: '10px 20px',
      backgroundColor: '#4CAF50',
      color: 'white',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease',
      alignSelf: 'flex-start',
    },
  
    buttonHover: {
      backgroundColor: '#45a049',
    },
  
    table: {
      width: '100%',
      borderCollapse: 'collapse',
      backgroundColor: '#fff',
      boxShadow: '0 2px 6px rgba(0, 0, 0, 0.05)',
      borderRadius: '8px',
      overflow: 'hidden',
    },
  
    th: {
      backgroundColor: '#2196F3',
      color: 'white',
      padding: '12px',
      textAlign: 'left',
    },
  
    td: {
      padding: '10px',
      borderBottom: '1px solid #ddd',
      transition: 'background-color 0.3s ease',
    },
  
    rowHover: {
      backgroundColor: '#f1f1f1',
    },
  
    deleteButton: {
      backgroundColor: '#f44336',
      color: 'white',
      border: 'none',
      padding: '5px 10px',
      borderRadius: '4px',
      cursor: 'pointer',
      transition: 'opacity 0.3s',
    },
  
    editButton: {
      backgroundColor: '#2196F3',
      color: 'white',
      border: 'none',
      padding: '5px 10px',
      borderRadius: '4px',
      cursor: 'pointer',
      transition: 'opacity 0.3s',
    },
  
    footer: {
      textAlign: 'center',
      color: '#777',
      fontSize: '0.9rem',
      marginTop: '20px',
    },
  
    // Media Query for responsiveness
    '@media (max-width: 600px)': {
      container: {
        padding: '15px',
      },
      header: {
        fontSize: '1.5rem',
      },
      input: {
        fontSize: '0.9rem',
      },
      button: {
        fontSize: '0.9rem',
        padding: '8px 16px',
      },
      th: {
        fontSize: '0.9rem',
      },
      td: {
        fontSize: '0.9rem',
      },
    },
  
    // Optional: animation keyframes
    '@keyframes pulse': {
      '0%': { opacity: 1 },
      '50%': { opacity: 0.7 },
      '100%': { opacity: 1 },
    },
  };
  


export default Crud;