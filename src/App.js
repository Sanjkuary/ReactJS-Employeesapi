import './App.css';
import Header from './components/Header';
// import Footer from './components/Footer';
import React, { useState, useEffect } from 'react';

function App() {
  const [state, setState] = useState(1);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getData() {
      setLoading(true);
      const response = await fetch(`https://hub.dummyapis.com/employee?noofRecords=${state}&idStarts=1001`);
      const result = await response.json();
      setData(result);
      setLoading(false);
      console.log(result);
    }
    getData();
    document.title = `(${state}) Employees`;
  }, [state]);

  return (
    <div className="App">
      <Header />
      <button className="increment-button" onClick={() => setState(state + 1)}>
        Click me {state}
      </button>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="data-container">
          <div className="data-header">
            <h4>Serial No</h4>
            <h4>ID</h4>
            <h4>First Name</h4>
            <h4>Last Name</h4>
            <h4>Email</h4>
            <h4>Contact Number</h4>
          </div>
          {data.map(({ id, firstName, lastName, email, contactNumber }, index) => (
            <div className="data-row" key={id}>
              <h4>{index + 1}</h4>
              <h4>{id}</h4>
              <h4>{firstName}</h4>
              <h4>{lastName}</h4>
              <h4>{email}</h4>
              <h4>{contactNumber}</h4>
            </div>
          ))}
        </div>
      )}
      {/* <Footer /> */}
    </div>
  );
}

export default App;
