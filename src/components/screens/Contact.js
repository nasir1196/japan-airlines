import React, { useEffect, useState } from 'react';
import { RingLoader } from 'react-spinners';

const Contact = () =>
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
                        <div style={ { width: "70%", height: "30rem", color: "white", borderRadius: "7px", display: "flex", justifyContent: "center", alignItems: "center", background: "gray" } }>
                            <div>
                                <h1 className='font-extrabold text-4xl text-center'> <span style={ { color: "#000135" } } >Country Director:</span> Dr. Abdullah </h1>
                                <h1 className='font-extrabold text-4xl text-center'> <span style={ { color: "#000135" } }>Email:</span> toshibaairlinesinternational@gmail.com </h1>
                                <h1 className='font-extrabold text-4xl text-center'> <span style={ { color: "#000135" } }>Mobile:</span> 01916284176 </h1>
                            </div>
                        </div>
                    </div>
                )
            }
        </>
    );
};

export default Contact;