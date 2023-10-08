import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { getAuth } from "firebase/auth";


const Navbar = () => {
    const {user, logOut} = useContext(AuthContext);
    


    const navlinks = (
        <>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/login">Login</NavLink></li>
        </>)

    const handleSignOut = () =>{
    logOut()
        .then()
        .catch()
    }

    return (
        <div>
            <div className="navbar bg-base-100 lg:px-20 md:px-5">
                <div className="navbar-start">
                    <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navlinks}
                    </ul>
                    </div>
                    <a className="font-bold text-xl md:text-4xl">Enigma Era</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navlinks}
                    </ul>
                </div>
                <div className="navbar-end">
                {
                    user ? 
                    <>
                        <p className="text-md font-bold">{user.displayName}</p>
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar mx-3">
                            <div className="w-10 rounded-full">
                                <img src="https://plus.unsplash.com/premium_photo-1661634872659-fc4ccdecc5cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80" />
                            </div>
                        </label>
                        <button className="btn" onClick={handleSignOut}>LogOut</button>
                    </>
                    :
                    <Link to="/login">
                        <button className="btn">Login</button>
                    </Link>
                }
                </div>
            </div>
        </div>
    );
};

export default Navbar;