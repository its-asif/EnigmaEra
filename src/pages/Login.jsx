import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "./Shared/Navbar";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import toast, { Toaster } from "react-hot-toast";
import { signInWithPopup, GoogleAuthProvider, getAuth } from "firebase/auth";
import app from "../firebase/firebase.config";


const Login = () => {
    const {signIn} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const provider = new GoogleAuthProvider();

    const auth = getAuth(app);
    const handleGoogleSignIn = () =>{
        signInWithPopup(auth, provider)
        .then((result) => {
            console.log(result.user);
            // ...
        }).catch((error) => {
            console.log(error);
        });
    }

    const handleLogin = e =>{
        e.preventDefault();
        const form = new FormData(e.currentTarget);

        const email = form.get('email');
        const password = form.get('password');
        // console.log(email, password);



        signIn(email, password)
            .then((result) => {
                toast.success("Successfully logged in")
                
                // navigate after login
                navigate( location?.state ? location.state : '/');
            })
            .catch((error) => toast.error("Email or Password didn't matched"));
    }

    return (
        <div className="min-h-[60vh]">
        <Toaster/>
            <div>
                <h2 className="text-4xl my-10 font-bold text-center">Please Login</h2>
                <form className="w-3/4 md:w-1/2 lg:w-1/3 mx-auto" onSubmit={handleLogin}>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="Password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                </form>
                <p className="text-center mt-4">Don't have an account? <Link className="text-blue-600" to="/register">Register</Link></p>
            </div>
            <div>
                <h1 className="text-center text-2xl lg:text-4xl font-bold my-8">--------------OR--------------</h1>

                <div className="text-center">
                    <button 
                    className="btn bg-blue-500 text-white font-bold text-xl"
                    onClick={handleGoogleSignIn}
                    >Continue with Google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;