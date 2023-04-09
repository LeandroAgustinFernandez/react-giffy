import "./App.css";
import Detail from "./pages/Detail";
import { Link, Route } from "wouter";
import Home from "./pages/Home";
import Search from "./pages/Search";
import StaticContext from "./context/StaticContext";
import { GifsContextProvider } from "./context/GifsContext";

function App() {
  return (
    <StaticContext.Provider
      value={{
        name: "Leandro Fernandez",
        age: 34,
      }}
    >
      <main className="App">
        <section className="App-content">
          <h1>
            <Link to="/">
              <img
                src="https://i.gifer.com/XOsX.gif"
                alt="ducky"
                className="homeIcon"
                height="200px"
              />
            </Link>
          </h1>
          <GifsContextProvider>
            <Route path="/" component={Home} />
            <Route path="/search/:keyword" component={Search} />
            <Route path="/gif/:id" component={Detail} />
          </GifsContextProvider>
        </section>
      </main>
    </StaticContext.Provider>
  );
}

export default App;
