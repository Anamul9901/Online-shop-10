/* eslint-disable react/prop-types */
// import { Link } from "react-router-dom";
import BrandCards from "./BrandCards";
import './Brands.css'



const Brands = ({ brandCards }) => {
    return (
        <div className="styleBrands">
            <div className="max-w-[1300px] pb-10 mx-auto lg:h-[70vh] md:h-[65vh]">
            <div className="flex justify-center p-6">
                <div className="text-center">
                    <h2 className="text-4xl font-bold pb-12 pt-8">BRANDS PRODUCT</h2>
                    <div className="grid md:grid-cols-3 grid-cols-2 gap-6">
                        {
                            brandCards.map(cards => <BrandCards key={cards._id} cards={cards}></BrandCards>)
                        }
                    </div>
                    
                    {/* <div className="btn">
                        <Link to='/brandadd' >
                            <button>Add Brand</button>
                        </Link>
                    </div> */}
                </div>
            </div>
        </div>
        </div>
    );
};

export default Brands;