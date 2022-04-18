import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Shared/Header/Header';
import Home from './components/Pages/Home/Home/Home';
import Services from './components/Pages/Home/Services/Services';
import Footer from './components/Shared/Footer/Footer';
import Login from './components/Pages/Login/Login/Login';
import Register from './components/Pages/Login/Register/Register';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/login " element={<Login />} />
        <Route path="/register " element={<Register />} />
      </Routes>
      <Footer> </Footer>
    </div>
  );
}

export default App;
