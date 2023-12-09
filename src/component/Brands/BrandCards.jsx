/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const BrandCards = ({ cards }) => {
    const { name, image } = cards;
    return (
        <div>
            <Link to={`/products/${name}`}>

                <div className="card glass shadow-2xl hover:bg-orange-300 bg-orange-200">
                    <figure><img className="md:w-40 w-20 h-14 md:h-20 p-2 pt-5" src={image} alt="Shoes" /></figure>
                    <div className=" pb-6">
                        <h2 className="card-title flex justify-center">{name}</h2>
                    </div>
                </div>

            </Link>


        </div>
    );
};

export default BrandCards;