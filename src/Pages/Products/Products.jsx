import { useLoaderData, useParams } from "react-router-dom";
import ProductCard from "./ProductCard";
import './Products.css'
import PfoductBanner from "./PfoductBanner";


const Products = () => {
    const products = useLoaderData();
    const pro = useParams();
    // console.log(pro);
   
    console.log(products)
    return (
     <div className="styleProducts">
         <div className="max-w-[1300px] mx-auto min-h-screen">
             
             <div>
                <div>
                    {
                        products.map(productBann => <PfoductBanner key={productBann._id} productBann={productBann} pro={pro}></PfoductBanner>)
                    }
                </div>
             <div>
               {
                   pro.id === 'Best Buy' && <p className="text-3xl font-semibold text-center pt-20"><span className="text-orange-500">Best Buy</span> have no Products right now!!</p>
               } 
               </div>
               <div>
                <h2 className="text-3xl font-bold text-center py-12"><span className="text-red-500">{pro.id}</span> Product</h2>
               </div>
                <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 p-4">
                {
                   products.map(product=> <ProductCard key={product._id} product={product} pro={pro}></ProductCard>)
                }
                
                
                


                



                
                </div>
             </div>
               
                  
           </div>
     </div>
    );
};

export default Products;