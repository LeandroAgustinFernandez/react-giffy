// import "./App.css";
import "./sass/main.sass";
import { Link, Route } from "wouter";
import { GifsContextProvider } from "./context/GifsContext";
import Detail from "./pages/Detail";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <section className="giffy">
        <h1 className="giffy-title">
          <Link to="/" className="">
            Gif Search
          </Link>
        </h1>
        <GifsContextProvider>
          <Route path="/" component={Home} />
          <Route path="/search/:keyword/:rating?" component={Search} />
          <Route path="/gif/:id" component={Detail} />
        </GifsContextProvider>
        <Footer />
      </section>
      
    </>
  );
}

export default App;
