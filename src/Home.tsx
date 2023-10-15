import logo from './logo.svg';


export default function Home() {
    return (
        <div className="App-home">

        <img src={logo} className="App-logo" alt="logo" />
            <a
            className="App-link"
            href="https://github.com/peregrinebalas"
            target="_blank"
            rel="noopener noreferrer"
        >
            GitHub
        </a>
        </div>
    );
  }