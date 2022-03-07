import Header from "./components/Header/Header";
import { Routes, Route } from 'react-router-dom';
import Home from "./components/Home/Home";
import Favorites from "./components/Favorites/Favorites";
import CategoryPage from "./components/CategoryPage/CategoryPage";


function App() {
  return (
    <>
      <Header/>
      <Routes>  
        <Route path="/" element={<Home/>}/>
        <Route path="/favorites" element={<Favorites/>}/>
        <Route path="/category/:categoryName"  element={<CategoryPage/>}/>
      </Routes>
    </>
  );
}

export default App;
