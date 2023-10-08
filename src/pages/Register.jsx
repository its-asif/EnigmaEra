import { Link } from "react-router-dom";
import Navbar from "./Shared/Navbar";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { getAuth, updateProfile } from "firebase/auth";


const Register = () => {
    const { createUser } = useContext(AuthContext);

    const handleRegister = e =>{
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        
        const name = form.get('name');
        const photo = form.get('photo');
        const email = form.get('email');
        const password = form.get('password');
        // console.log(name, photo, email, password);


        // create user
        createUser(email,password, name, photo)
            .then(res => {
                // const user = res.user;
                // console.log(user);
                
            })
            .catch( err => console.log(err));

            // const auth = getAuth();
            // console.log("hello", auth.currentUser);
        
    }

    return (
        <div>
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
        </div>
    );
};


export default Register;