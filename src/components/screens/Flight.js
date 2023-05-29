import React, { useEffect, useState } from 'react';
import { RingLoader } from 'react-spinners';

const Flight = () =>
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
                    <>
                        <section className="container my-32">
                            <h1 className="text-center" style={ { fontWeight: "bolder", fontSize: "2rem" } }>Flight Information</h1>
                            <h3 style={ { fontWeight: "bolder", fontSize: "1rem" } }>History of Biman Flight</h3>
                            <p>Youngest flight in South Asia
                                Immediately after the independence, Biman Bangladesh Airlines started its journey on 4th January 1972 with
                                a DC-3 aircraft. After procuring two F-27s, Biman finally took-off on 7th March 1972 with domestic flights
                                to Chittagong and Sylhet from its base at Dhaka. Shortly after, a Boeing 707 aircraft joined the airline’s
                                fleet, allowing Biman to begin international flights. By end of the Seventies, Biman had a fleet of 8 F27
                                and 5 Boeing 707 to serve domestic and international destinations.</p>
                            <p>The Eighties was the new era of building Biman fleet with new Fokker 28-4000 in 1981, wide-bodied three
                                DC10-30s joined in 1983, one new DC10-30 joined in 1989. In early 1990, Biman phased out its aging F27 and
                                purchased two new ATPs to serve domestic and some regional destinations. In 1996 Biman also purchased two
                                new Airbus 310-300 from Airbus Company and phased out its ATPs in 2004.</p>
                            <h3 style={ { fontWeight: "bolder" } }>About-Image</h3>
                            <p>In order to modernize Biman fleet with new generation aircraft, Biman signed two agreements with Boeing in
                                April and May 2008 for purchasing new generation 4 X 777-300ER, 4 X 787-8 and 2 X 737-800 aircraft. Four
                                777-300ER aircraft joined Biman fleet in October/November 2011, February 2014 and 21 March 2014. Two
                                737-800s aircraft joined Biman fleet in November/December 2015. Three Boeing 787-8 aircraft joined Biman
                                fleet in August/December 2018 and August 2019. On 16 May 2019, 5th Boeing 737-800 arrives to join Biman
                                fleet. 6th Boeing 737-800 arrives to join Biman fleet in June 30, 2019. Fourth new 787-8 aircraft delivered
                                by Boeing on September 2019</p>
                            <p>The first of the three Dash-8 planes purchased based on G2G agreement between the Governments of Bangladesh
                                and Canada was added to the fleet on 26 December 2020 and the second & third are respectively on 24 February
                                2021 & 05 March 2021.</p>
                            <p> At present, the total number of aircraft in the fleet is 21. Of these, four are Boeing 777-300 ER, four are
                                Boeing 787-8, two are Boeing 787-9, six are Boeing 737 and five are Dash 8-400 aircraft.</p>
                        </section>
                    </>
                )
            }
        </>
    );
};

export default Flight;