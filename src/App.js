
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Resturentlist from './components/Resturentlist';
import Viewrest from './components/Viewrest';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Resturentlist />} />
        <Route path='/view-rest/:id' element={<Viewrest />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
