import { useLoaderData } from "react-router-dom";
import MyChartCard from "./MyChartCard";

import '../Products/Products.css'
// import { useState } from "react";

const MyChart = () => {
  const addProducts = useLoaderData();
  // const [updatedUser, setUpdatedUser] = useState([addProducts])

  // const deleteFilter = updatedUser.filter(prod => prod._id !== id);
  // setUpdatedUser(deleteFilter);
  // console.log(addProducts)

  
  return (

    <div className="styleProducts min-h-screen">
      <div className="max-w-[1300px] mx-auto ">
        {
          addProducts.length !== 0 ?
            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 p-4">
              {
                addProducts.map(product => <MyChartCard key={product._id} product={product} addProducts={addProducts}></MyChartCard>)
              }
            </div>
            :
            <p className="text-3xl font-semibold text-center pt-32"><span className="text-orange-500">Opps!!</span><br /> No Data Found.</p>
        }

      </div>
    </div>
  );
};

export default MyChart;