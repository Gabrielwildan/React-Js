import logo from './logo.svg';
import './App.css';
import Kontak from './pages/Kontak';
import Nav from './pages/Nav';
import Sejarah from './pages/Sejarah';
import Tentang from './pages/Tentang';
import Home from './pages/Home';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Siswa from './pages/Siswa';
import Menu from './pages/Menu';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} exact />
          <Route path='/kontak' element={<Kontak />} />
          <Route path='/sejarah' element={<Sejarah />} />
          <Route path='/tentang' element={<Tentang />} />
          <Route path='/siswa' element={<Siswa />} />
          <Route path='/menu' element={<Menu />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
