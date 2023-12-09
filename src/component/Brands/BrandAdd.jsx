
const BrandAdd = () => {

    const handleBrandAdd = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const image = form.image.value;
        // console.log(name, image);
        const newBrand = { name, image }
        console.log(newBrand)

        //data sent to setver
        fetch(' https://assignment-10-server-three-rho.vercel.app/brands', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newBrand)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })

    }

    return (
        <div>
            <h2>brand added</h2>
            <form onSubmit={handleBrandAdd}>
                <div className=" mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Brand Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="name" placeholder="Brand Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Brand Image URL</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="image" placeholder="URL" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <button type="submit" className="btn">Brand Add</button>
                </div>
            </form>
        </div>
    );
};

export default BrandAdd;