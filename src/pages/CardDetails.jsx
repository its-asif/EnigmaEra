import { useLoaderData, useParams } from "react-router-dom";


const CardDetails = () => {
    const {id} = useParams()
    const cardData = useLoaderData();
    console.log(cardData[id])
    const {name, img, description, price} = cardData[id];

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:w-1/2">
                <img src={img} className="w-full rounded-lg shadow-2xl" />
                <div>
                <h1 className="text-4xl font-bold text-center mt-5">{name}</h1>
                <p className="pt-6 text-justify">{description}</p>
                <p className="py-2 text-xl font-semibold">Our Service Charge : ${price}</p>
                <div className="text-right"><button className="btn btn-error text-white text-lg font-bold">Order Service</button></div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default CardDetails;