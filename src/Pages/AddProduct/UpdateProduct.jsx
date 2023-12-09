import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import './AddProduct.css'



const UpdateProduct = () => {

    const singleProduct = useLoaderData();

    const handleUpdateProduct = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const brand = form.brand.value;
        const image = form.image.value;
        const type = form.type.value;
        const price = form.price.value;
        const description = form.description.value;
        const ratingq = form.ratingq.value;

        const updateProduct = { name, brand, image, type, price, description, ratingq }
        console.log(updateProduct)

        fetch(` https://assignment-10-server-three-rho.vercel.app/product/${singleProduct._id}`,{
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateProduct)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount > 0){
                Swal.fire({
                    icon: 'success',
                    title: '',
                    text: 'Product updated successfully.',
                     
                  })
            }
            else{
                Swal.fire({
                    icon: 'error',
                    title: '',
                    text: 'Please Change any text for update.',
                     
                  })
            }
        })
    }

    return (
      <div className="styleAddProduct h-[91vh]">
          <div className="max-w-[1300px] mx-auto p-3">
            <div className="">
                <h2 className="text-center text-3xl font-bold mb-6 pt-10 pb-6">Update Product</h2>
                <div className="flex justify-center">

                    <form onSubmit={handleUpdateProduct}>
                        <div className="">
                            <div className="md:flex gap-5 mb-5">
                                <div className="w-full">
                                    <h2>Name</h2>
                                    <input type="text" name="name" placeholder="Name" defaultValue={singleProduct.name}
                                        required className="input input-bordered w-full" />
                                </div>
                                <div className="w-full">
                                    <h2>Brand</h2>
                                    <select name="brand" defaultValue={singleProduct.brand}
                                        required className="select select-bordered w-full">
                                        <option disabled selected>Pick Brand</option>
                                        <option>Amazon</option>
                                        <option>Walmart</option>
                                        <option>Alibaba</option>
                                        <option>eBay</option>
                                        <option>Target</option>
                                        <option>Best Buy</option>
                                    </select>
                                </div>
                            </div>

                            <div className="md:flex gap-5  mb-5">
                                <div className="w-full">
                                    <h2>Image URL</h2>
                                    <input type="img" name="image" defaultValue={singleProduct.image} placeholder="Image" className="input input-bordered  w-full" />
                                </div>
                                <div className="w-full">
                                    <h2>Type</h2>
                                    <input type="text" name="type" 
                                    defaultValue={singleProduct.type}
                                    placeholder="Type" className="input input-bordered w-full  " />
                                </div>
                            </div>

                            <div className="flex gap-5 mb-5">
                                <div className="w-full">
                                    <h2>Price</h2>
                                    <input type="text" name="price" 
                                    defaultValue={singleProduct.price}
                                    placeholder="Price" className="input input-bordered w-full  " />
                                </div>
                                <div className="w-full">
                                    <h2>Rating</h2>
                                    <input type="text" name="ratingq" 
                                    defaultValue={singleProduct.ratingq}
                                    placeholder="Rating" className="input input-bordered w-full" />
                                </div>
                            </div>

                            <div className="flex gap-5  mb-5">

                                <div className="w-full">
                                    <h2>Short description</h2>
                                    <input type="text" name="description" 
                                    defaultValue={singleProduct.description}
                                    placeholder="Short description" className="input input-bordered w-full " />
                                </div>
                            </div>
                            <button type="submit" className="btn glass w-full bg-[#feaf659d] font-bold hover:text-[#EC7755]">U p d a t e</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
      </div>
    );
};

export default UpdateProduct;