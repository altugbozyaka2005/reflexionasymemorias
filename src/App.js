import './App.css';
import logo from './assets/RYM-logo.png'

function App() {
  return (
    <>
      <nav className='navbar'>
        <div className='logo-container'>
          <img src={logo} alt="RYM-logo" width="100" />
        <h1>RYM</h1>
        </div>
        <h2>Redacciones</h2>
        <h2>Mision</h2>
        <h2>Contacto</h2>
        <h2>Chat</h2>
        <h3>Daniel is the CEO of RYM</h3>
      </nav>

    </>
  );
}

export default App;
