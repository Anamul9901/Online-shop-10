/* eslint-disable react/prop-types */

import { useState } from "react";
import Swal from "sweetalert2";
import { AiFillStar } from 'react-icons/ai';


const MyChartCard = ({ product, addProducts }) => {
    const { _id, brand, description, image, name, price, ratingq, type } = product;
    
    const [updatedUser, setUpdatedUser] = useState([addProducts])
    console.log(updatedUser);

    const handleDelete = id => {
        console.log(id);
        fetch(` https://assignment-10-server-three-rho.vercel.app/addproduct/${id}`,{
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount > 0){
                // console.log(data)
                Swal.fire({
                    icon: 'success',
                    title: '',
                    text: 'Product delete successfully.',
                
                })
                
                const deleteFilter = updatedUser.filter(prod => prod._id !== id);
                setUpdatedUser(deleteFilter);
            }
               
            
        })
    }

    return (
        <div>
            <div>
               
                 <div className="card glass bg-orange-100 hover:bg-orange-200 shadow-2xl font-semibold">
                 <figure><img src={image} alt="Shoes" /></figure>
                 <div className="card-body">
                     <h2 className="card-title">{name}</h2>
                     <p className="font-normal">{description}</p>
                     <div className="flex justify-between items-center py-2">
                     <p className="flex items-center gap-1"><span >Pride:</span> <AiFillStar className="text-orange-500 text-xl"></AiFillStar> ${price}</p>
                     <p>Brand: {brand}</p>
                     </div>
                     <p>Tupe: {type}</p>
                     <p>Rating: {ratingq}</p>
                     <div className="card-actions justify-end">
                         <button onClick={() => handleDelete(_id)} className="btn btn-sm bg-[#EC7755] hover:text-[#EC7755] text-white font-bold">Delete</button>

                     </div>
                 </div>
             </div> 
            </div>
        </div>
    );
};

export default MyChartCard;