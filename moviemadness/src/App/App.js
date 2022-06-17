import './App.css';
import Fetch, { MovieFetch } from "../Fetch/"
import Movie from "../Movie/"
import Search from "../Search"


function App() {
  MovieFetch();
  return (
    <div className="App">
    <h1>Welcome to Movie Madness!!</h1>
    <Search />
    <Movie />
    </div>
  );
}

export default App;
