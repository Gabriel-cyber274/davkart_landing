import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Landing_page from './Landing_page';

function App() {

  return (
    <div className="App">
      {/* <header className="App-header"> */}
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        
        {/* <button className='btn btn-danger'>hello</button>
      </header> */}

      <Routes>
        <Route path='/' element={<Landing_page />} />
        {/* <Route path='/directory' element={<Directorypage />}  /> */}
      </Routes>

    </div>
  );
}

export default App;
