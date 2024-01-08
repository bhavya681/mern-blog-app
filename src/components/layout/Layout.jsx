import React from 'react';
import TopNavbar from '../topnavbar/TopNavbar';
import Sidebar from '../sidebar/Sidebar';

const Layout = (props) => {

    return (

        <div>

            <div className='lg:hidden'>

                <TopNavbar />

            </div>

            <div className='max-h-screen flex'>

                <nav className='w-72 flex-none ... hidden md:block'>

                    <Sidebar />

                </nav>

                <main className='flex-1 min-w-0 overflow-auto ...'>

                   <div className='flex justify-center'>

                   {props.children}

                   </div>

                </main>

            </div>

        </div>

    )

}

export default Layout