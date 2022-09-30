import "./App.css";
import Dictionary from "./Dictionary";

//Documentation
//API link: https://dictionaryapi.dev/

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <div className="welcome-title">I am hungry</div>
          <main>
            <Dictionary />
          </main>
        </div>
      </header>
      <footer className="git-link">
        <a href="https://github.com/ClauCruz/react-dictionary">Open-source</a>
        <span> dictionary coded by Clau Cruz</span>
      </footer>
    </div>
  );
}

export default App;
