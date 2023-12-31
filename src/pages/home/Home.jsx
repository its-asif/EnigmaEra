
import { Link, useLoaderData } from "react-router-dom";
import Footer from "../Shared/Footer";
import Navbar from "../Shared/Navbar";
import Slider from "./Slider";
import Review from "./Review";
import UpcomingEvents from "./UpcomingEvents";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';



const Home = () => {

    useEffect(() => {
        AOS.init();
      }, [])

    const cardData = useLoaderData();

    return (
        <div>
            <Slider/>    

            {/* Services */}
            <div data-aos="fade-right" data-aos-duration="1000">
                <h1 className="text-center mt-20 my-5 text-4xl md:text-6xl font-bold">Our Services</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 content-evenly mx-10 lg:mx-20 gap-10">    
                {
                    cardData.map(card => 
                        <>
                        <div className="card  bg-base-100 shadow-xl ">
                        <figure><img src={card.img} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{card.name}</h2>
                            <p>{card.description.slice(0,100)}.....</p> 
                            <p className="font-semibold mt-3">Service Charge: ${card.price}</p> 
                            
                            <div className="card-actions justify-end ">
                                <Link to={`/news/${card.id}`}
                                className="text-blue-700 font-bold"><button className="btn btn-ghost hover:btn-ghost">Read More...</button></Link>
                            </div>
                        </div>
                        </div>
                        </>
                    )
                }
                </div>
            </div>

            <UpcomingEvents/>

            <Review/>

        </div>
    );
};

export default Home;