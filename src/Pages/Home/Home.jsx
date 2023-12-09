import { useLoaderData } from "react-router-dom";
import Banner from "../../component/Banner/Banner";
import Brands from "../../component/Brands/Brands";
import Footer from "../../component/Footer/Footer";
import ExtraHomCo from "../../component/ExtraHomCo/ExtraHomCo";
import OurPartners from "../../component/OurPartners/OurPartners";



const Home = () => {
    const brandCards = useLoaderData();

    // console.log(brandCards)
    return (
        <div>
            <Banner />
            <Brands brandCards={brandCards} />
            <ExtraHomCo />
            <OurPartners />
            <Footer />
        </div>
    );
};

export default Home;