import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import './Navber.css'
import { MdDarkMode } from 'react-icons/md';


const Navber = () => {

    function toggleMode() {
        const body = document.body;

        if (body.classList.contains('dark-mode')) {
            // Switch to Light Mode
            body.classList.remove('dark-mode');
        } else {
            // Switch to Dark Mode
            body.classList.add('dark-mode');
        }
    }

    // Apply Light Mode by default
    document.body.classList.add('light-mode');




    const { user, signOutFromAll } = useContext(AuthContext);

    const handleSignOut = () => {
        signOutFromAll()
            .then()
            .catch()
    }

    const navItem = <>
        <ul className="md:flex">
            <li>
                <NavLink
                    to='/'
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? 'text-[#54575C] underline font-black md:text-xl ' : "text-[#EC7755] font-bold md:text-xl"
                    }>Home</NavLink>
            </li>
            <li>
                <NavLink
                    to='/addproduct'
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? 'text-[#54575C] underline font-black md:text-xl ' : "text-[#EC7755] font-bold md:text-xl"
                    }>Add Product</NavLink>
            </li>
            <li>
                <NavLink
                    to='/mycart'
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? 'text-[#54575C] underline font-black md:text-xl ' : "text-[#EC7755] font-bold md:text-xl"
                    }>My Cart</NavLink>
            </li>
        </ul>
    </>

    return (
        <div className=" bg-[#fc9f61b5] ">
            <nav className=" navbar max-w-[1300px] mx-auto lg:px-0 px-2 md:px-4 ">
                <div className="navbar-start">
                    <div className="dropdown ">
                        <label tabIndex={0} className="btn btn-ghost md:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navItem}
                        </ul>
                    </div>
                    <div className="flex items-center gap-2">
                        <img src={'https://i.ibb.co/4VLrBFh/assignment10-Logo.png'} alt="" />

                    </div>
                </div>
                <div className="navbar-center hidden md:flex">
                    <ul className="menu  menu-horizontal px-1">
                        {navItem}
                    </ul>
                </div>
                <div className="navbar-end">

                    {
                        user ?
                            <div className="flex items-center">
                                <span className="text-xs md:text-lg font-bold">{user?.displayName}</span>
                                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        <img src={user?.photoURL} />
                                    </div>
                                </label>



                                <div className="lg:flex items-center">
                                    <button onClick={handleSignOut} className="btn btn-sm bg-[#EC7755] hover:text-[#ffaa90] text-white font-bold">Sign Out</button>

                                    <div className="flex justify-center  ">
                                        <div className="text-xl">
                                            <MdDarkMode />
                                        </div>
                                        <input onClick={toggleMode} type="checkbox" className="toggle toggle-sm ml-1" />
                                    </div>
                                </div>
                            </div>
                            :
                            <div className="lg:flex items-center">
                                <Link to='/signup'>
                                    <button className="btn btn-sm bg-[#EC7755] hover:text-[#ffaa90] text-white font-bold">Sign In</button>
                                </Link>
                                <div className="flex justify-center  ">
                                    <div className="text-xl">
                                        <MdDarkMode />
                                    </div>
                                    <input onClick={toggleMode} type="checkbox" className="toggle toggle-sm ml-1" />
                                </div>
                            </div>


                    }

                    {/* <button onClick={toggleMode}>Toggle Mode</button> */}

                </div>


            </nav>
        </div>
    );
};

export default Navber;