
const Slider = () => {
    return (
        <div>
            <div className="carousel w-full lg:h-[80vh]">
            <div id="slide1" className="carousel-item  w-full relative">
                <div className="absolute w-full h-full top-0 left-0 px-10  bg-black bg-opacity-60 flex">
                    <div className="text-white flex flex-col mx-auto justify-center text-center">
                        <h1 className="text-4xl md:text-8xl font-bold"> Unlock Your Potential </h1>    
                        <p className="text-gray-300 font-semibold md:text-2xl "> Dive into Tech Workshops with Experts. </p>
                    </div>    
                </div>
                <img src="https://i.ibb.co/p1Jgm51/4.jpg" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide3" className="btn btn-circle">❮</a> 
                <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div> 
            <div id="slide2" className="carousel-item relative w-full">
                <div className="absolute w-full h-full top-0 left-0 px-10  bg-black bg-opacity-60 flex">
                    <div className="text-white flex flex-col mx-auto justify-center text-center">
                        <h1 className="text-4xl md:text-8xl font-bold"> Connect, Collaborate, Innovate </h1>    
                        <p className="text-gray-300 font-semibold md:text-2xl "> Join Our Tech Networking Events! </p>
                    </div>    
                </div>
                {/* <p className="text-4xl">Unleash the Future: Tech and Gaming Events Like Never Before!</p> */}
                <img src="https://i.ibb.co/ZVP4Kgr/2.jpg" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide1" className="btn btn-circle">❮</a> 
                <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div> 
            <div id="slide3" className="carousel-item relative w-full">
                <div className="absolute w-full h-full top-0 left-0 px-10  bg-black bg-opacity-60 flex">
                    <div className="text-white flex flex-col mx-auto justify-center text-center">
                        <h1 className="text-4xl md:text-8xl font-bold"> Unleash the Future </h1>    
                        <p className="text-gray-300 font-semibold md:text-2xl "> Tech and Gaming Events Like Never Before! </p>
                    </div>    
                </div>
                <img src="https://i.ibb.co/6s7dhZN/6.jpg" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide2" className="btn btn-circle">❮</a> 
                <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div> 
            </div>            
        </div>
    );
};

export default Slider;