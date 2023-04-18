import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Flight from './components/screens/Flight';
import Vacation from './components/screens/Vacation';
import Home from './components/Home/Home';
import { useState } from 'react';
import { useEffect } from 'react';
import plane from "./source/plane.png";
import Contact from './components/screens/Contact';
import Notice from './components/screens/Notice';
import About from './components/screens/About';



function App ()
{
  const [ loading, setLoading ] = useState( false );
  useEffect( () =>
  {
    setLoading( true );
    setTimeout( () =>
    {
      setLoading( false );
    }, 7500 );
  }, [] );
  const date = new Date();
  const getYear = date.getFullYear();

  return (
    <BrowserRouter>
      {
        loading ? ( <div className="facing">
          <div className='sky'>
            <img src={ plane } alt="" />
          </div>
        </div> ) : (
          <>
            <div className="main-body">
              <Navbar />
              <Routes>
                <Route exact path="/" element={ <Home /> } />
                <Route exact path="/flight" element={ <Flight /> } />
                <Route exact path="/notice" element={ <Notice /> } />
                <Route exact path="/vacation" element={ <Vacation /> } />
                <Route exact path="/about" element={ <About /> } />
                <Route exact path="/contact" element={ <Contact /> } />
              </Routes>
            </div>
            <div className='bg-gray-300 p-2'>
              <p className='text-center'>Copyright&copy; Toshiba-Airlines All Rights Reserved { getYear }</p>
            </div>
          </>
        )
      }
    </BrowserRouter>
  );
}

export default App;
