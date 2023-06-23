import React, { useEffect, useState } from 'react';
import { RingLoader } from 'react-spinners';
import { FaFacebookSquare, FaLinkedinIn, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";
import mapIcon from '../../source/map.jpg';

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

                    <div>
                        <h1 className="text-center my-5" style={ { fontSize: "2rem", fontWeight: "bolder", color: "gray" } }>We're Ready, Let's Talk.</h1>
                        <div className="container text-center">
                            <div className="row">
                                <div className="col-md-4 ">
                                    <div className="text-center my-2">
                                        <h2 style={ { fontSize: "1.1rem", fontWeight: "bolder" } }>OUR LOCATION</h2>
                                        <p>55-Avenue-Gulshan-2, Dhaka-#1212, Bangladesh</p>
                                        <p>Phone:01916284176 (<small>Dr Abdulah</small>)</p>
                                        <p>tel: 0248814363</p>
                                        <p>Monday-Friday 9:00-19:00</p>
                                    </div> <br />

                                    <br />
                                    <div className="text-center my-2">
                                        <h2 style={ { fontSize: "1.1rem", fontWeight: "bolder" } }>Head Office</h2>
                                        <p>Mainato City,Tokyo-japan</p>
                                        <p>Phone:81-36-45-46-22</p>
                                        <p>Fax: 8130-364522</p>
                                    </div>


                                </div>
                                <div className="col-md-4">
                                    <div className="text-center my-2">
                                        <h2 style={ { fontSize: "1.1rem", fontWeight: "bolder" } }>MORE INFORMATION</h2>
                                        <p>01759-177 208</p>
                                        <p>toshibaairlinesinternational@gmail.com</p>
                                    </div> <br />
                                    <div className="text-center my-2">
                                        <h2 style={ { fontSize: "1.1rem", fontWeight: "bolder" } }>Headquarters</h2>
                                        <p>1-1,Shibaura 1-chome,Minato-ku,Tokyo 105-8001,japan</p>
                                        <p>Tel: +81-3-3457-4511</p>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="text-center my-2">
                                        <h2 style={ { fontSize: "1.1rem", fontWeight: "bolder" } }>Social Media</h2>
                                        <div className="d-flex text-center">
                                            <a style={ { fontSize: "3rem", color: "red", margin: "2px auto" } } href="https://www.youtube.com" target='_blank' rel="noreferrer">
                                                <FaYoutube />
                                            </a>

                                            <a style={ { fontSize: "3rem", color: "#1877F2", margin: "2px auto" } } href="https://www.facebook.com" target='_blank' rel="noreferrer">
                                                <FaFacebookSquare />
                                            </a>

                                            <a style={ { fontSize: "3rem", color: " #0A66C2", margin: "2px auto" } } href="https://www.linkedin.com" target='_blank' rel="noreferrer">
                                                <FaLinkedinIn />
                                            </a>

                                            <a style={ { fontSize: "3rem", color: "#1D9BF0", margin: "2px auto" } } href="https://www.twitter.com" target='_blank' rel="noreferrer">
                                                <FaTwitter />
                                            </a>

                                            <a style={ { fontSize: "3rem", color: " #D300C5", margin: "2px auto" } } href="https://www.instagram.com" target='_blank' rel="noreferrer">
                                                <FaInstagram />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='container'>
                            <img src={ mapIcon } className="w-100 rounded" alt="" />
                        </div>
                    </div>
                )
            }
        </>
    );
};

export default Contact;