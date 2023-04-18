import React, { useEffect, useState } from 'react';
import { RingLoader } from 'react-spinners';

const Notice = () =>
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
                    <></>
                )
            }
        </>
    );
};

export default Notice;