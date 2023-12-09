import Swal from "sweetalert2";
import './AddProduct.css'


const AddProduct = () => {

    const handleAddProduct = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const brand = form.brand.value;
        const image = form.image.value;
        const type = form.type.value;
        const price = form.price.value;
        const description = form.description.value;
        const ratingq = form.ratingq.value;

        // console.log(name, brand, image, type, price, rating);
        const newProduct = { name, brand, image, type, price, description, ratingq }
        console.log(newProduct)
        form.reset();

        fetch(' https://assignment-10-server-three-rho.vercel.app/addproduct', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    Swal.fire({
                        icon: 'success',
                        title: '',
                        text: 'Product added successfully.',

                    })
                }
                else {
                    Swal.fire({
                        icon: 'error',
                        title: '',
                        text: 'Please Change any text for update.',

                    })
                }
            })
    }

    return (
        <div className="styleAddProduct  min-h-screen">
            <div className="max-w-[1300px] mx-auto  p-3">
                <div className="ard shadow-2x">
                    <h2 className="text-center text-3xl font-bold mb-6 pt-10 pb-6">Add Your New Product</h2>
                    <div className="flex justify-center">
                        <form onSubmit={handleAddProduct}>
                            <div className="">
                                <div className="md:flex gap-5 mb-5">
                                    <div className="w-full">
                                        <h2>Name</h2>
                                        <input type="text" name="name" placeholder="Name"
                                            required className="input input-bordered w-full" />
                                    </div>
                                    <div className="w-full">
                                        <h2>Brand</h2>
                                        <select name="brand"
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
                                        <input type="img" name="image" placeholder="Image" 
                                        required
                                        className="input input-bordered  w-full" />
                                    </div>
                                    <div className="w-full">
                                        <h2>Type</h2>
                                        <input type="text" name="type" placeholder="Type" className="input input-bordered w-full  " />
                                    </div>
                                </div>

                                <div className="flex gap-5 mb-5">
                                    <div className="w-full">
                                        <h2>Price</h2>
                                        <input type="text" name="price" required placeholder="Price" className="input input-bordered w-full  " />
                                    </div>
                                    <div className="w-full">
                                        <h2>Rating</h2>
                                        <input type="text" name="ratingq" placeholder="Rating" className="input input-bordered w-full" />
                                    </div>
                                </div>

                                <div className="flex gap-5  mb-5">

                                    <div className="w-full">
                                        <h2>Short description</h2>
                                        <input type="text" name="description" placeholder="Short description" className="input input-bordered w-full " />
                                    </div>
                                </div>
                                <button type="submit" className="btn glass w-full bg-[#feaf659d] font-bold hover:text-[#EC7755]">S u b m i t</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;