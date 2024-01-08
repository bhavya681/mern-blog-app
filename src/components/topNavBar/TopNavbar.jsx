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

const TopNavbar = () => {

    const navigate = useNavigate();

    const handleLogout = () => {

        localStorage.clear('token');
        navigate("/login");

    }

    return (

        <>

            <div className='' style={{ backgroundColor: "#F4DDBD", width: "80rem", height: "6rem", margin: "0", padding: "0" }} >

                <nav className='flex justify-start space-x-2 m-0 p-0'>

                    <Link to={"/"} className=' '>
                        <button className='  text-center items-center space-x-2  hover:bg-gray-100 hover:p-2 hover:rounded-xl'>
                            <img className='rounded-3xl my-6' width={40} src={logo} alt="logo" />
                        </button>
                    </Link>

                    <Link to={"/"} className='my-5 mx-2'>
                        <button className='  text-center items-center space-x-2 hover:bg-gray-100 hover:p-2 hover:rounded-xl'>
                            <h1 className='text-xs font-bold'>Home</h1>
                            <IoMdHome size={"18px"} />
                        </button>
                    </Link>

                    <Link to={"/addpage"} className='my-5 mx-2' >
                        <button className='  text-center items-center space-x-2  hover:bg-gray-100 hover:p-2 hover:rounded-xl'>
                            <h1 className='text-xs font-bold'>Add Note</h1>
                            <IoAddCircle size={"18px"} />
                        </button>
                    </Link>

                    <Link to={"/profile"} className='my-5 mx-2'>
                        <button className='  text-center items-center space-x-2  hover:bg-gray-100 hover:p-2 hover:rounded-xl'>
                            <h1 className='text-xs font-bold'>Profile</h1>
                            <CgProfile size={"18px"} />
                        </button>
                    </Link>

                    <Link to={"/allnotes"} className='my-5 mx-2'>
                        <button className='  text-center items-center space-x-2  hover:bg-gray-100 hover:p-2 hover:rounded-xl'>
                            <h1 className='text-xs font-bold'>All Notes</h1>
                            <FcPhotoReel size={"18px"} />
                        </button>
                    </Link>

                    <Link to={"/login"} className='my-5 mx-2'>
                        <button className='  text-center items-center space-x-2  hover:bg-gray-100 hover:p-2 hover:rounded-xl'
                            onClick={handleLogout}
                        >
                            <h1 className='text-xs font-bold'>Logout</h1>
                            <RiLogoutBoxLine size={"18px"} />
                        </button>
                    </Link>


                </nav>

            </div>

        </>

    )

}

export default TopNavbar;