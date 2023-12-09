import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import './Products.css'
import { AiFillStar } from 'react-icons/ai';


const ProductDetails = () => {

    const details = useLoaderData();
    console.log(details);
    const { brand, description, image, name, price, ratingq, type } = details;

    const detail = {brand, description, image, name, price, ratingq, type};
    console.log(detail);

    const handleAddToCart = () => {
        fetch(' https://assignment-10-server-three-rho.vercel.app/addproduct', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(detail)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    Swal.fire({
                        icon: 'success',
                        title: '',
                        text: 'Product added successfully.',

                    })
                }
            })
    }


    return (
       <div className="styleProducts flex h-[91vh]">
       
    <div className="h-[80vh] md:h-[60vh] pt-10 flex items-center">
    <div   className=" card glass md:flex-row rounded-xl w-[70%]   shadow-1xl max-w-[1300px] mx-auto ">
                <div className="  md:w-2/5 w-2/2 shrink-0 overflow-hidden rounded-xl rounded-r-none ">
                    <img
                        src={image}
                        alt="image"
                        className="h-full w-full object-cover rounded-md md:rounded-none"
                    />
                </div>
                <div className="p-4 font-semibold">
                     

                    <div className="">
                        <h4 className="md:text-2xl text-xl font-semibold">
                        {name}
                            
                        </h4>
                    </div>
                     
                    <p className="font-normal">{description}</p>
                   <div className="flex justify-between pr-5 py-2">
                   <p>Pride: ${price}</p>
                    <p>Brand: {brand}</p>
                   </div>
                   <div className="flex justify-between pr-5 py-2">
                   <p>Type: {type}</p>
                    <p className="flex items-center gap-1"><span>Rating:</span> <AiFillStar className="text-xl text-orange-500"/> {ratingq}</p>
                   </div>
                   
                    <div className="card-actions justify-end flex pt-6 pr-5">
                        <button onClick={handleAddToCart} className="btn btn-sm bg-[#EC7755] hover:text-[#EC7755] text-white font-bold ">Add to Cart</button>
                    </div>
                   
                
                </div>
            </div>
    </div>
       </div>
    );
};

export default ProductDetails;