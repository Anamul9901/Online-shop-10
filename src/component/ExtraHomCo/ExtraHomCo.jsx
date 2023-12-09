import './ExtraHomCo.css'

const ExtraHomCo = () => {
    return (
        <div className="styleExtra">
            <div className="lg:h-[60vh] max-w-[1300px] pb-8 mx-auto md:flex justify-center items-center text-white md:text-right text-center lg:px-0 md:px-6 px-2 pt-14">
                <div className='md:flex-1 ml-16'>
                    <div className='w-[30%] flex gap-16'>
                        <img className=' rounded-lg' src={'https://i.ibb.co/XF7q1b3/Alibaba-4.jpg'} alt="" />
                        <img className='rounded-lg' src={'https://i.ibb.co/sqTB1g1/eBay-1.jpg'} alt="" />
                    </div>
                </div>
                <div className='md:flex-1 mt-16 md:mt-0'>
                    <div>
                        <h2 className="lg:text-5xl md:text-4xl text-3xl font-bold">Find Your Perfect Product</h2>
                        <p className='text-sm py-6'>Sign up now to hear about our latest offers, new products, collaborations, all things Noise - straight to your inbox.</p>
                    </div>
                    <div className='flex gap-4 md:justify-end justify-center'>
                        <button className="btn btn-sm bg-[#EC7755] hover:text-[#EC7755]  text-white font-bold">Shop Now</button>
                        <button className="btn btn-sm bg-[#EC7755] hover:text-[#EC7755]  text-white font-bold">Sign Up</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExtraHomCo;