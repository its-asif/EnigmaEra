import { Link } from "react-router-dom";
import Navbar from "./Shared/Navbar";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { getAuth, updateProfile } from "firebase/auth";
import toast, { Toaster } from "react-hot-toast";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import app from "../firebase/firebase.config";


const Register = () => {
    const { createUser, setUser } = useContext(AuthContext);
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


    const handleRegister = e =>{
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        
        const name = form.get('name');
        const photo = form.get('photo');
        const email = form.get('email');
        const password = form.get('password');
        // console.log(name, photo, email, password);

        const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])(.{6,})$/;
        if (!passwordRegex.test(password)) {
            toast.error("Password must contain at least 6 characters, 1 capital letter, and 1 special character.")
            // You can display an error message to the user
            return;
        }

        // create user
        createUser(email,password, name, photo)
            .then(res => {
                toast.success("Successfully Registered")
                // const user = res.user;
                // console.log(user);
                
            })
            .catch( err => console.log(err));

            // const auth = getAuth();
            // console.log("hello", auth.currentUser);
        
    }

    return (
        <div>
            <Toaster/>

            <div>
                <h2 className="text-4xl my-10 font-bold text-center">Please Register</h2>
                <form className="w-3/4 md:w-1/2 lg:w-1/3 mx-auto" onSubmit={handleRegister}>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="url" name="photo" placeholder="Photo URL" className="input input-bordered" required />
                    </div>
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
                        <button className="btn btn-primary">Register</button>
                    </div>
                </form>
                <p className="text-center mt-4">Already have an account? <Link className="text-blue-600" to="/Login">Login</Link></p>
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


export default Register;