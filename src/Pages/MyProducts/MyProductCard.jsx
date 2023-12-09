/* eslint-disable react/prop-types */
 

const MyProductCard = ({product}) => {
    const { brand, description, image, name, price, ratingq, type } = product;
    return (
        <div>
             <div className="card bg-base-100 shadow-xl">
                    <figure><img src={image} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{name}</h2>
                        <p>{description}</p>
                        <p>{price}</p>
                        <p>{brand}</p>
                        <p>{type}</p>
                        <p>{ratingq}</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Update</button>
                            <button className="btn btn-primary">Delete</button>
                            
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default MyProductCard;