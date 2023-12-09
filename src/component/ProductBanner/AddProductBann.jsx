import Swal from "sweetalert2";


const AddProductBann = () => {

    const handleAddproBan = e =>{
        e.preventDefault();
        const form = e.target;
        const brand = form.brand.value;
        const image = form.image.value;
        const addProductBann = {brand, image};
        console.log(addProductBann);
        form.reset();

        fetch(' https://assignment-10-server-three-rho.vercel.app/addproductbann',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addProductBann)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            if (data.acknowledged) {
                Swal.fire({
                    icon: 'success',
                    title: '',
                    text: 'Product added successfully.',
                     
                  })
            }
        })
    }

    return (
        <div className="max-w-[1300px] mx-auto mt-16 p-3">
        <div className="">
            <h2 className="text-center text-2xl font-semibold mb-6">Add Product</h2>
            <div className="flex justify-center">
                <form onSubmit={handleAddproBan}>
                    <div className="">
                        <div className="md:flex gap-5 mb-5">
                            
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
                            <div className="w-full">
                                <h2>Image URL</h2>
                                <input type="img" name="image" placeholder="Image" className="input input-bordered  w-full" />
                            </div>
                        </div>
                        <button type="submit" className="btn w-full">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    );
};

export default AddProductBann;