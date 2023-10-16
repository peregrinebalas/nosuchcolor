import logo from './logo.svg';


export default function Home() {
    return (
        <div className="App-home">
        <h3 style={{color: "white"}}>About Me</h3>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <div>
        <a
            className="App-link"
            href="https://github.com/peregrinebalas"
            target="_blank"
            rel="noopener noreferrer"
        >
            GitHub
        </a>
        </div>
        <div>
       
        <a
            className="App-link"
            href="https://www.linkedin.com/in/peregrine-balas/"
            target="_blank"
            rel="noopener noreferrer"
        >
            LinkedIn
        </a>
        </div>
        <div>

        <a
            className="App-link"
            href="https://www.instagram.com/peregram_/"
            target="_blank"
            rel="noopener noreferrer"
        >
            Instagram
        </a>
        </div>
        <div>

        <a
            className="App-link"
            href="https://www.facebook.com/peregrine.balas"
            target="_blank"
            rel="noopener noreferrer"
        >
            Facebook
        </a>
        </div>
        </div>
    );
  }