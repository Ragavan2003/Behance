import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import BehanceList from './components/BehanceList';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <div className="main relative overflow-hidden">

    <Header/>
    <div className='behancelist'>
    <BehanceList/>
    </div>
    <Footer/>
    </div>
    </>
  );
}

export default App;