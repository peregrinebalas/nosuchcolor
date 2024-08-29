import './App.css';
import TopBar from './components/TopBar';
import Home from './components/Home';

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
