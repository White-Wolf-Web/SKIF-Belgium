import logo from '../ASSETS/IMAGES/logo/logoSkifB3.webp'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p style={{marginTop:"55px"}}>
          Bienvenu sur le site SKIF Belgium
        </p>
     
      </header>
    </div>
  );
}

export default App;
