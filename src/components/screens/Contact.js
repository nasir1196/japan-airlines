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
                            <div className='font-extrabold laptop:text-4xl text-center sm:text-sm'>
                                <h1 > <span style={ { color: "#000135" } } >Country Director:</span> Dr. Abdullah </h1>
                                <h1 > <span style={ { color: "#000135" } }>Email:</span> toshibaairlinesinternational@gmail.com </h1>
                                <h1> <span style={ { color: "#000135" } }>Mobile:</span> 01916284176 </h1>
                                <h1> <span style={ { color: "#000135" } }>Address:</span> Avenue-55 Gulshan-2 Dhaka-1216 </h1>

                                <h1> <span style={ { color: "#000135" } }>Our Corporate Office</span> </h1>

                            </div>
                        </div>
                    </div>
                )
            }
        </>
    );
};

export default Contact;