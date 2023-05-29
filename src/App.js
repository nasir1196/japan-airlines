import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Flight from './components/screens/Flight';
import Vacation from './components/screens/Vacation';
import Home from './components/Home/Home';
import { useState } from 'react';
import { useEffect } from 'react';
import Contact from './components/screens/Contact';
import Notice from './components/screens/Notice';
import About from './components/screens/About';
import runway from "./source/video/runway.mp4";
import Privacy from './components/screens/Privacy';
import Terms from './components/screens/Terms';



function App ()
{
  const [ loading, setLoading ] = useState( false );
  useEffect( () =>
  {
    setLoading( true );
    setTimeout( () =>
    {
      setLoading( false );
    }, 18000 );
  }, [] );
  const date = new Date();
  const getYear = date.getFullYear();


  return (
    <BrowserRouter>
      {
        loading ? ( <div className="facing">
          <div className='sky'>
            {/* <img src={ plane } alt="" /> */ }
            <video autoPlay loop muted
              style={ {
                width: "100%",
                objectFit: "cover",
                height: "100%"
              } }
            >
              <source src={ runway } type="video/mp4" />
            </video>
          </div>
        </div> ) : (
          <>
            <div >
              <Navbar />
              <Routes>
                <Route exact path="/" element={ <Home /> } />
                <Route exact path="/flight" element={ <Flight /> } />
                <Route exact path="/notice" element={ <Notice /> } />
                <Route exact path="/vacation" element={ <Vacation /> } />
                <Route exact path="/about" element={ <About /> } />
                <Route exact path="/contact" element={ <Contact /> } />
                <Route exact path="/privacy-policy" element={ <Privacy /> } />
                <Route exact path="/terms-condition" element={ <Terms /> } />
              </Routes>
            </div>
            <div className='bg-gray-300 p-2'>
              <p className='text-center'>Copyright&copy; Toshiba-Airlines All Rights Reserved { getYear } <Link className="hover:bg-red-600" style={ { color: "blue" } } to="privacy-policy">Privacy-policy</Link> <Link className="hover:bg-red-600" style={ { color: "blue" } } to="terms-condition">Terms & Condition</Link></p>
            </div>
          </>
        )
      }
    </BrowserRouter>
  );
}

export default App;
