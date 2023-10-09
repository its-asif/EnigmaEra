

const Review = () => {
    return (
        <div>
            <h1 className="text-center mt-20 my-5 text-4xl md:text-6xl font-bold">Review</h1>

            <div class="carousel w-full">
                <div id="slide6" class="carousel-item relative w-full h-96  my-20">
                <div className="card w-96 bg-neutral text-neutral-content mx-auto">
                    <div className=" my-auto mx-8 ">
                        <p className='text-justify'>"Attended their tech meetup and had a blast. Great networking opportunities and insightful discussions."</p>
                        <h2 className="font-bold mt-5 text-right">- John Doe</h2>
                    </div>
                </div>
                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide8" class="btn btn-circle">❮</a> 
                    <a href="#slide7" class="btn btn-circle">❯</a>
                    </div>
                </div> 


                <div id="slide7" class="carousel-item relative w-full h-96  my-20">
                <div className="card w-96 bg-neutral text-neutral-content mx-auto">
                    <div className=" my-auto mx-8 ">
                        <p className='text-justify'>"Joined their coding sprint, and it was a bit intense for a beginner like me. Nonetheless, I learned a lot and had fun!"</p>
                        <h2 className="font-bold mt-5 text-right">- Bob Johnson</h2>
                    </div>
                </div>
                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide6" class="btn btn-circle">❮</a> 
                    <a href="#slide8" class="btn btn-circle">❯</a>
                    </div>
                </div> 


                <div id="slide8" class="carousel-item relative w-full h-96  my-20">
                <div className="card w-96 bg-neutral text-neutral-content mx-auto">
                    <div className=" my-auto mx-8 ">
                        <p className='text-justify'>"Tech workshops are very informative. The presenters are experts in their field, and the hands-on activities help solidify the concepts."</p>
                        <h2 className="font-bold mt-5 text-right">- Alice Williams</h2>
                    </div>
                </div>
                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide7" class="btn btn-circle">❮</a> 
                    <a href="#slide6" class="btn btn-circle">❯</a>
                    </div>
                </div> 
            </div>
        </div>
    );
};

export default Review;