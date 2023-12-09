/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import { AiFillStar } from 'react-icons/ai';



const ProductCard = ({ product, pro }) => {
    const { _id, brand, description, image, name, price, ratingq,  } = product;
    // console.log(brand.length)

   

 

    return (

        <div>
            
            {
                pro.id === brand &&
                <div className="card glass bg-orange-100 hover:bg-orange-200 shadow-2xl font-semibold">
                    <figure><img src={image} alt="Shoes" /></figure>
                    <div className="p-4">
                        <h2 className="card-title py-1">{name}</h2>
                        <div className="font-normal">
                        {
                            description.length> 30 && <p>{description.slice(0,30)}...</p>
                        }
                        </div>
                         <div className="flex items-center justify-between">
                         <p className="py-2">Brand: {brand}</p>
                        <p className="">Price: ${price}</p>
                         </div>
                        <p className="flex items-center gap-1">Rating: <span className="text-orange-500 text-xl"> <AiFillStar></AiFillStar></span> {ratingq}</p>
                        <div className="card-actions justify-end py-3">

                           <Link to={`/product/${_id}`}>
                           <button  className="btn btn-sm bg-[#EC7755] hover:text-[#EC7755] text-white font-bold">Details</button>
                           </Link>

                            <Link to={`/update/${_id}`}>
                            <button className="btn btn-sm bg-[#EC7755] hover:text-[#EC7755] text-white font-bold">Update</button>
                            </Link>

                        </div>
                    </div>
                </div>
            }

        </div>
    );
};

export default ProductCard;