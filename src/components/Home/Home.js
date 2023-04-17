import React, { useEffect, useState } from 'react';
import { RingLoader } from 'react-spinners';

const Home = () =>
{
    const [ navbar, setNavbar ] = useState( false );

    useEffect( () =>
    {
        setNavbar( true );
        setTimeout( () =>
        {
            setNavbar( false );
        }, 1500 );
    }, [] );
    return (
        <>
            {
                navbar ? ( <div className="loader"><RingLoader color={ "#FD0155" } loading={ navbar } size={ 150 } /> </div> ) : (
                    <div className='flex justify-center items-center' style={ { vh: "95%" } }>
                        <div style={ { width: "40%", height: "10rem", borderRadius: "7px", color: "#000135" } }>
                            <h1 className=' font-extrabold text-4xl text-center'> Welcome To Toshiba International Airlines</h1>
                        </div>
                    </div>
                )
            }
        </>
    );
};

export default Home;