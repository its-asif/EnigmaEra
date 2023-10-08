import { Outlet } from "react-router-dom";


const Roots = () => {
    return (
        <div className="lg:mx-20">
            <Outlet/>
        </div>
    );
};

export default Roots;