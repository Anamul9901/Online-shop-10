import { useLoaderData } from "react-router-dom";
import ProductBannerCard from "./ProductBannerCard";

 
 
 const ProductBanner = () => {
    const productBann = useLoaderData();
    // const pro = useParams();
    // console.log(pro);
    return (
        <div>
            <h2>banner 3</h2>
            {
                productBann.map(banner => <ProductBannerCard key={banner._id}banner={banner}></ProductBannerCard>)
            }
        </div>
    );
 };
 
 export default ProductBanner;