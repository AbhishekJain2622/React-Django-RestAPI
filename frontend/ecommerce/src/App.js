import './App.css';
import Header from './components/Header';
import { Container } from 'react-bootstrap';
import Footer from './components/Footer';
import './bootstrap.min.css';
import HomeScreen from './components/screens/HomeScreen';
import RegisterScreen from './components/screens/RegisterScreen';
import LoginScreen from './components/screens/LoginScreen';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductScreen from './components/screens/ProductScreen';
import CartScreen from './components/screens/CartScreen'


function App() {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <Routes>
            <Route path='/' element={<HomeScreen />} />
            <Route path='/product/:id?' element={<ProductScreen />} />
            <Route path='/register' element={<RegisterScreen />} />
            <Route path='/login' element={<LoginScreen />} />
            <Route path="/cart/:id?" element={<CartScreen/>}  />
          </Routes>
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;