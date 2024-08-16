import './App.css';
import TopBar from './TopBar';
import Home from './Home';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TopBar/>
      </header>
      <Home/>
    </div>
  );
}

export default App;
