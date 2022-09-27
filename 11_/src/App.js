import { Route, Routes } from 'react-router-dom';
import Wrapper from './pages/Wrapper';
import Header from './pages/Header';
import Main from './pages/Main';
import Sub01 from './pages/Sub01';
import Sub02 from './pages/Sub02';
import Sub03 from './pages/Sub03';
import Sub04 from './pages/Sud04';
import Footer from './pages/Footer';
import './css/basic.scss'


const App = () => {
  return (
    <Wrapper>
      <Header />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/sub01' element={<Sub01 />} />
        <Route path='/sub02' element={<Sub02 />} />
        <Route path='/sub03' element={<Sub03 />} />
        <Route path='/sub04' element={<Sub04 />} />
      </Routes>
      <Footer />
    </Wrapper>
  );
}

export default App;