/* eslint-disable react/prop-types */


const PfoductBanner = ({ productBann, pro }) => {
    const {  image, name, type, price } = productBann;
    // console.log(productBann)
    console.log(pro.id)

    return (
        <div>
            {
                pro.id === name && <div>


                    <div className="carousel w-full">
                        <div id="slide1" className="carousel-item relative w-full">
                            <img src={image} className="w-full" />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide4" className="btn btn-circle">❮</a>
                                <a href="#slide2" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                        <div id="slide2" className="carousel-item relative w-full">
                            <img src={type} className="w-full" />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide1" className="btn btn-circle">❮</a>
                                <a href="#slide3" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                        <div id="slide3" className="carousel-item relative w-full">
                            <img src={price} className="w-full" />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide2" className="btn btn-circle">❮</a>
                                <a href="#slide1" className="btn btn-circle">❯</a>
                            </div>
                            


                        </div>
                       
                    </div>

                </div>

            }
        </div>
    );
};

export default PfoductBanner;