import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import PublicRoutes from './Components/Route';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <PublicRoutes/>
    </div>
  );
}

export default App;
