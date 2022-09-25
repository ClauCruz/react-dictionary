import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <main>
            <Dictionary />
          </main>
        </div>
      </header>
      <footer>
        <a href="#">Open-source</a>
        <span> dictionary coded by Clau Cruz</span>
      </footer>
    </div>
  );
}

export default App;
