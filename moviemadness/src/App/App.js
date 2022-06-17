import './App.css';
import Fetch from "../Fetch/"
import Movie from "../Movie/"
import Search from "../Search"


function App() {
  return (
    <div className="App">
    <h1>Welcome to Movie Madness!!</h1>
    <Search />
    <Movie />
    </div>
  );
}

export default App;
