import { Link } from "react-router-dom";
import '../AddProduct/AddProduct.css'
 

const ErrorPage = () => {
    return (
       <div className="styleAddProduct">
        <div className="h-[100vh]">
        <div className="text-center pt-32 ">
            <h2 className="text-3xl font-bold mb-5"><span className="text-orange-500">Opps!!</span> <br />Data not found</h2>
            <Link to='/'>
            <button className="btn glass btn-sm bg-[#feaf659d] text-gray-500 font-bold hover:text-[#EC7755]">Back Home</button>
            </Link>
        </div>
        </div>
       </div>
    );
};

export default ErrorPage;