import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { FcGoogle } from 'react-icons/fc';

 

const DerectLogin = () => {
    const {googleSignIn} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const handleGoogleLogIn = () =>{
        googleSignIn()
        .then(res => {
            console.log(res.user);
            navigate(location?.state ? location.state : '/')
            // alert('Log In successfully');
            Swal.fire({
                icon: 'success',
                title: '',
                text: 'Log In successfully.',
                 
              })
        })
        .catch(err => {
            console.error(err);
            // alert('Opps!')
            Swal.fire({
                icon: 'error',
                title: '',
                text: 'Oppd! There is a problem!',
                 
              })
        })
    }
    return (
        <div>
            <h2 className='text-center mt-6 mb-2'>Sign in with another account</h2>
            <div className=" flex justify-center text-2xl">
                <button onClick={handleGoogleLogIn}><FcGoogle></FcGoogle></button>
            </div>
        </div>
    );
};

export default DerectLogin;