import toast, { Toaster } from "react-hot-toast";
import { useLoaderData, useParams } from "react-router-dom";


const CardDetails = () => {
    const {id} = useParams()
    const cardData = useLoaderData();
    console.log(cardData[id])
    const {name, img, description, price} = cardData[id];

    return (
        <div>
            <Toaster/>
            <div className="hero min-h-screen ">
            <div className="hero-content flex-col lg:w-1/2">
                <img src={img} className="w-full rounded-lg" />
                <div>
                <h1 className="text-4xl font-bold text-center mt-5">{name}</h1>
                <p className="pt-6 text-justify">{description}</p>
                <p className="py-2 text-xl font-semibold">Our Service Charge : ${price}</p>
                <div className="text-right"><button className="btn btn-error text-white text-lg font-bold"
                    onClick={() =>{
                        toast('We will soon contact you!',
                        {
                            icon: '👏',
                            style: {
                            borderRadius: '10px',
                            background: '#333',
                            color: '#fff',
                            },
                        }
                    );
                    }}
                >Order Service</button></div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default CardDetails;