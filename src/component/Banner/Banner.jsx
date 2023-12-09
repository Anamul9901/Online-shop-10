import './Banner.css'

const Banner = () => {
    return (
        <div className=" styleBanner ">
            <div className='max-w-[1300px] mx-auto pb-9 lg:h-[91vh] md:flex items-center justify-between px-5 md:px-3 ld:px-0'>
                <div className='flex-1 pt-14 md:pt-0'>
                    <h3 className='lg:text-4xl md:text-3xl text-xl text-orange-600 font-bold '>YOUR</h3>
                    <h2 className='lg:text-7xl md:text-5xl text-4xl font-bold md:pt-2 md:pb-5'>ONE STOP <span className='text-red-500'>SHOP</span></h2>
                    <p className='text-sm'>E-Bazar is your one-stop shop for all your grocery needs. We have 
                        a wide selection of fresh produce, meats, seafood, dairy, and 
                        baked goods, all at affordable prices. Plus, we offer free delivery.</p>
                </div>
                <div className='md:w-[40%] flex-1 pt-10 md:pt-0'>
                    <img src={'https://ciseco-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero-right-2.dc1c84f6.png&w=1080&q=75'} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;