import React, { useEffect, useState } from 'react';
import { RingLoader } from 'react-spinners';
import banner from "../../source/plane-large.png";
import gallery1 from '../../source/gallery/gallery1.jpg';
import gallery2 from '../../source/gallery/gallery2.jpg';
import gallery3 from '../../source/gallery/gallery3.jpg';
import gallery4 from '../../source/gallery/gallery4.jpg';
import gallery5 from '../../source/gallery/gallery5.jpg';
import gallery6 from '../../source/gallery/gallery6.jpg';
import best from '../../source/best.png';
import fluid from '../../source/fluid.jpg';
import journey from '../../source/journy.PNG';
import last1 from '../../source/last1.jpeg';
import last2 from '../../source/last2.jpeg';
import { Link } from 'react-router-dom';
import { imgData } from './data';
import crew1 from "../../source/crew/1.jpg";
import crew2 from "../../source/crew/2.jpg";
import crew3 from "../../source/crew/3.jpg";


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
                    <div >
                        <div className='marquee'>
                            <p>Welcome to Toshiba Airlines. To get the best of your adventure you just need to
                                leave and go where you like. We are waiting for you.</p>
                        </div>

                        <div className="home-banner">
                            <div className='container'>
                                <div className="row">
                                    <div className="col-md-4 my-24">
                                        <h1 className='text-3xl font-bold text-slate-50'>Where <br /> Do You Want To</h1>
                                        <h1 className='text-5xl font-extrabold my-3 text-red-600'>Explore</h1>
                                        <p className='py-3 font-bold'>To get the best of your adventure you just need to leave and go where you like. We are waiting for you.</p>
                                        <button className="btn btn-danger my-2 text-slate-100">
                                            Get started Now
                                        </button>
                                    </div>
                                    <div className="col-md-8 my-16">
                                        <img src={ banner } alt="Banner Cover" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="container m-16">
                            <div className='container' style={ { border: "2px dotted gray", borderRadius: "7px" } }>
                                <div className="d-flex m-3">
                                    <Link className="mx-3" to="/book-flight">BOOK YOUR FLIGHT</Link>
                                    <Link className="mx-3" to="/manage-booking">MANAGE YOUR BOOKING</Link>
                                    <Link className="mx-3" to="/online-checkIn">ONLINE CHECK-IN</Link>
                                    <Link className="mx-3" to="/flight-status">FLIGHT STATUS</Link>
                                </div>
                                <div style={ { border: "1px dotted gray", borderRadius: "7px" } }></div>
                                <div className='my-2'>
                                    <h1 className="text-2xl font-bold my-3">where are you flying</h1>
                                    <p>Everything you need to know about your journey during Covid-19. Check guidelines </p>
                                </div>
                            </div>
                        </div>

                        {/* Fly Biman  */ }
                        <div className="container">
                            <div className="mt-10 text-center">
                                <h1 className="text-2xl font-extrabold text-orange-700">why fly Biman?</h1>
                            </div>
                            <div className="container my-4">
                                <div className="row">
                                    <div className="col-md-3">
                                        <h1 className="text-2xl font-extrabold text-gray-400">Fly in safe</h1>
                                        <p className="my-2">6 Safety Rating in 7</p>
                                    </div>
                                    <div className="col-md-3">
                                        <h1 className="text-2xl font-extrabold text-gray-400">Youngest Fleet</h1>
                                        <p className="my-2">Brand New Dreamliners</p>
                                    </div>
                                    <div className="col-md-3">
                                        <h1 className="text-2xl font-extrabold text-gray-400">Great Fare</h1>
                                        <p className="my-2">Maximum Benefit</p>
                                    </div>
                                    <div className="col-md-3">
                                        <h1 className="text-2xl font-extrabold text-gray-400">Fly in comfort</h1>
                                        <p className="my-2">Unpretentious Luxury</p>
                                    </div>
                                </div>

                                <div className="row my-10">
                                    <div className="col-md-6">
                                        <div className="" ></div>
                                        <img src={ crew1 } alt="" />
                                    </div>
                                    <div className="col-md-6 mt-20">
                                        <h2 className='text-center text-orange-700 m-2  text-2xl font-bold'>Toshiba Airlines</h2>
                                        <hr />
                                        <ul className='text-center align-middle '>
                                            <li>Our Mission is safe flying with Cheap Cost</li>
                                            <li>Our Tradition is quality service providing </li>
                                            <li>We are Following Fully digitalization </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="row my-10">

                                    <div className="col-md-6 mt-20">
                                        <h2 className='text-center text-orange-700 m-2  text-2xl font-bold'>Toshiba Airlines</h2>
                                        <hr />
                                        <ul className='text-center align-middle '>
                                            <li>Our Mission is safe flying with Cheap Cost</li>
                                            <li>Our Tradition is quality service providing </li>
                                            <li>We are Following Fully digitalization </li>
                                        </ul>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="" ></div>
                                        <img src={ best } alt="" />
                                    </div>
                                </div>
                                <div className="row my-10">
                                    <div className="col-md-6">
                                        <div className="" ></div>
                                        <img src={ crew2 } alt="" />
                                    </div>
                                    <div className="col-md-6 mt-20">
                                        <h2 className='text-center text-orange-700 m-2  text-2xl font-bold'>Toshiba Airlines</h2>
                                        <hr />
                                        <ul className='text-center align-middle '>
                                            <li>Our Mission is safe flying with Cheap Cost</li>
                                            <li>Our Tradition is quality service providing </li>
                                            <li>We are Following Fully digitalization </li>
                                        </ul>
                                    </div>

                                </div>
                                <div className="row my-10">

                                    <div className="col-md-6 mt-20">
                                        <h2 className='text-center text-orange-700 m-2  text-2xl font-bold'>Toshiba Airlines</h2>
                                        <hr />
                                        <ul className='text-center align-middle '>
                                            <li>Our Mission is safe flying with Cheap Cost</li>
                                            <li>Our Tradition is quality service providing </li>
                                            <li>We are Following Fully digitalization </li>
                                        </ul>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="" ></div>
                                        <img src={ crew3 } alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>


                        <section className="container-fluid my-24">
                            <div className="row">
                                <div className="col">
                                    <img className="img-fluid" src={ fluid } alt="" />
                                </div>
                            </div>
                        </section>

                        <section>
                            <div className="container my-5">
                                <div className="row">
                                    <div className="col my-5">
                                        <h2 className="text-blue-900 text-3xl font-bold my-5">Your journey <br />our responsibility</h2>
                                        <p className='py-3'>Cubilia vestibulum interdum nisl a parturient a auctor vestibulum taciti vel bibendum tempor
                                            adipiscing suspendisse posuere libero penatibus lorem at interdum tristique iaculis redosan
                                            condimentum a ac rutrum mollis consectetur.
                                        </p>
                                        <p className='py-3'>
                                            Aenean nascetur vehicula egestas a adipiscing a est egestas suspendisse parturient diam
                                            adipiscing mattis elementum velit pulvinar.
                                        </p>
                                        <div className="d-flex">
                                            <div className="d-flex">
                                                <img src="" alt="" />
                                                <div>
                                                    <h2>Protection</h2>
                                                    <p>from Covid-19 virus</p>
                                                </div>
                                            </div>
                                            <div className="d-flex">
                                                <img src="" alt="" />
                                                <div>
                                                    <h2>Protection</h2>
                                                    <p>from Covid-19 virus</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <img className="img-fluid" src={ journey } alt="" />
                                    </div>
                                </div>
                            </div>
                        </section>


                        <section className="text-center py-16">
                            <h1 className='text-3xl font-bold text-gray-500'>Toshiba Airlines</h1>
                            <h3>Providing Hospitality the Correct Way</h3>
                        </section>


                        <section className="container text-center">
                            <h1 className='text-4xl font-extrabold py-5 text-gray-600'>Start planning your <span className="text-danger">Next Trip</span> </h1>
                            <p className='text-gray-700'>Thinking of travelling somewhere soon in Bangladesh? Here are some options to help you get started.</p>
                            <div className="my-3">
                                <div className="my-3">
                                    <div className="row row-cols-1 row-cols-md-3 g-4">
                                        {
                                            imgData.map( ( pic ) => (
                                                <div key={ pic.title } className="col my-4 font-extrabold">
                                                    <div className="card h-100">
                                                        <img src={ pic.pic } className="card-img-top" alt="..." />
                                                    </div>
                                                    <div className="card-body">
                                                        <h5 className="card-title py-2">{ pic.title }</h5>
                                                    </div>
                                                </div>
                                            ) )
                                        }
                                    </div>
                                </div>
                            </div>
                        </section>


                        <section>
                            <div className="container text-center my-5">

                                <div className="my-16">
                                    <h1 className='text-3xl font-bold mt-14 p-2' style={ { color: "#FF4387" } }>
                                        Safety measures for airlines flying to Bangladesh
                                    </h1>
                                    <p className='text-gray-600'> Airlines flying to Bangladesh have enacted additional safety measures and adjusted policies <br /> to
                                        better accommodate travelers. Policies vary by airline. </p>
                                    <div className="row my-10">
                                        <div className="col">
                                            <img className="img-fluid" src={ last1 } alt="" />
                                        </div>
                                        <div className="col">
                                            <img className="img-fluid" src={ last2 } alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section className="container my-5">
                            <hr className="my-5" />
                        </section>

                        <section>

                            <div className="container text-center">
                                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3">
                                    <div className="col">
                                        <div className="text-center">
                                            <img src="img/output-onlinepngtools.png" alt="" />
                                            <h2>Fly in safe</h2>
                                            <p>6 Safety Rating in 7</p>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="text-center">
                                            <img src="img/output-onlinepngtools.png" alt="" />
                                            <h2>Youngest Fleet</h2>
                                            <p>Brand New Dreamliners</p>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="text-center">
                                            <img src="img/output-onlinepngtools.png" alt="" />
                                            <h2>Great Fare</h2>
                                            <p>Maximum Benefit</p>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="text-center">
                                            <img src="img/output-onlinepngtools.png" alt="" />
                                            <h2>Fly in comfort</h2>
                                            <p>Unpretentious Luxury</p>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="text-center">
                                            <img src="img/output-onlinepngtools.png" alt="" />
                                            <h2>Fly in comfort</h2>
                                            <p>Unpretentious Luxury</p>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </section>
                        {/* Gallery section  */ }
                        <div>
                            <div className="text-center m-5 mt-16">
                                <h1 className='text-2xl font-bold'>Photo Gallery</h1>
                            </div>
                            <hr />
                            <div className='container my-5'>
                                <div id="carouselExample" className="carousel slide">
                                    <div className="carousel-inner">
                                        <div className="carousel-item active">
                                            <img src={ gallery1 } className="d-block w-100 h-100" alt="..." />
                                        </div>
                                        <div className="carousel-item">
                                            <img src={ gallery2 } className="d-block w-100 h-100" alt="..." />
                                        </div>
                                        <div className="carousel-item">
                                            <img src={ gallery3 } className="d-block w-100 h-100" alt="..." />
                                        </div>
                                        <div className="carousel-item">
                                            <img src={ gallery4 } className="d-block w-100 h-100" alt="..." />
                                        </div>
                                        <div className="carousel-item">
                                            <img src={ gallery5 } className="d-block w-100 h-100" alt="..." />
                                        </div>
                                        <div className="carousel-item">
                                            <img src={ gallery6 } className="d-block w-100 h-100" alt="..." />
                                        </div>
                                    </div>
                                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span className="visually-hidden">Previous</span>
                                    </button>
                                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span className="visually-hidden">Next</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        </>
    );
};

export default Home;