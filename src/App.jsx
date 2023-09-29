
// import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import MovieDetails from './pages/MovieDetails/MovieDetails';
import MovieList from './Components/Movieslist/MovieList';
import Home from './pages/Home/Home';
import{BrowserRouter as Router,Routes,Route} from "react-router-dom";
// import Header from './Components/headers/Header';

function App() {
  return (
    <div className="App">
        <>
         
            <Router>
              <Header></Header>
                <Routes>
                    <Route index element={<Home></Home>}></Route>
                    <Route path="movie/:id" element={<MovieDetails></MovieDetails>}></Route>
                    <Route path="movies/:type" element={<MovieList></MovieList>}></Route>
                    <Route path="/*" element={<h1>ERROR PAGE</h1>}></Route>
                </Routes>
            </Router>
         
        </>
      </div>

  );
}

export default App;
