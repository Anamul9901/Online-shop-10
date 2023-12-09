import { useLoaderData, useParams } from "react-router-dom";
import MyProductCard from "./MyProductCard";


const MyProducts = () => {

    const myProducts = useLoaderData();
    const myPro = useParams();

    console.log(myPro);
    return (
        <div>
            <h2>my chart product</h2>
            {
                myProducts.map(product => <MyProductCard key={product._id} product={product}></MyProductCard>)
            }
        </div>
    );
};

export default MyProducts;