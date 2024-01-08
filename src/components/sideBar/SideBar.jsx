import React from 'react';
import logo from "../../assets/logo.png";
import logoT from "../../assets/logotext.png";
import logoP from "../../assets/logopic.png";
import { IoMdHome } from "react-icons/io";
import { IoAddCircle } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { RiLogoutBoxLine } from "react-icons/ri";
import { FcPhotoReel } from "react-icons/fc";
import { Link, useNavigate } from 'react-router-dom';

const Sidebar = () => {

    const navigate = useNavigate();

    const handleLogout = () => {

        localStorage.clear('token');
        navigate("/login");

    }

    return (

        <>

            <div style={{ backgroundColor: "#F4DDBD", width: "30rem", height: "60rem", margin: "0", padding: "0" }} >

                <nav className=''>

                    <div className='flex justify-center'>

                        <img className='rounded-3xl m-20' src={logo} alt="logo" />

                    </div>

                    <div className='flex justify-center flex-col gap-8 ml-40'>

                        <Link to={"/"} className='flex flex-center'>
                            <button className='flex flex-center text-center items-center space-x-5 hover:bg-gray-100 hover:p-2 hover:rounded-xl'>
                                <h1 className='text-2xl font-bold'>Home</h1>
                                <IoMdHome size={"38px"} />
                            </button>
                        </Link>

                        <Link to={"/addpage"} className='' >
                            <button className='flex flex-center text-center items-center space-x-5  hover:bg-gray-100 hover:p-2 hover:rounded-xl'>
                                <h1 className='text-2xl font-bold'>Add Note</h1>
                                <IoAddCircle size={"38px"} />
                            </button>
                        </Link>

                        <Link to={"/profile"} className=''>
                            <button className='flex flex-center text-center items-center space-x-5  hover:bg-gray-100 hover:p-2 hover:rounded-xl'>
                                <h1 className='text-2xl font-bold'>Profile</h1>
                                <CgProfile size={"38px"} />
                            </button>
                        </Link>

                        <Link to={"/allnotes"} className=''>
                            <button className='flex flex-center text-center items-center space-x-5  hover:bg-gray-100 hover:p-2 hover:rounded-xl'>
                                <h1 className='text-2xl font-bold'>All Notes</h1>
                                <FcPhotoReel size={"38px"} />
                            </button>
                        </Link>

                        <Link to='/login'>
                            <button onClick={handleLogout} className='flex flex-center text-center items-center space-x-5  hover:bg-gray-100 hover:p-2 hover:rounded-xl'>
                                <h1 className='text-2xl font-bold'>Logout</h1>
                                <RiLogoutBoxLine size={"38px"} />
                            </button>
                        </Link>

                    </div>

                </nav>

            </div>

        </>

    )

}

export default Sidebar