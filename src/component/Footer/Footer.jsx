import { Link } from "react-router-dom";


const Footer = () => {
    return (
        <div className="">
            <footer className="w-full bg-gray-800 p-8 ">
                <div className="max-w-[1300px]  mx-auto">
                    <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12    text-center md:justify-between text-white">
                        <div className="">
                            <img src={`https://i.ibb.co/161dhbQ/Anamul.jpg`} alt="logo-ct" className="w-10 rounded-3xl ml-8" />
                            <p>Anamul Haque</p>
                        </div>
                        <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
                            <li>
                                <Link
                                    href="#"
                                    className="block font-sans text-base font-normal leading-relaxed text-blue-gray-900 antialiased transition-colors hover:text-[#EC7755] focus:text-[#EC7755]"
                                >
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#"
                                    className="block font-sans text-base font-normal leading-relaxed text-blue-gray-900 antialiased transition-colors hover:text-[#EC7755] focus:text-[#EC7755]"
                                >
                                    License
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#"
                                    className="block font-sans text-base font-normal leading-relaxed text-blue-gray-900 antialiased transition-colors hover:text-[#EC7755] focus:text-[#EC7755]"
                                >
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <hr className="my-8 border-blue-gray-50" />
                    <p className="block text-center   text-slate-400 pb-4">
                        <small>Thank for visiting</small>
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;