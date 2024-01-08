import React, { useContext, useEffect, useState } from 'react'
import Layout from '../../components/layout/Layout'
import myContext from '../../context/data/myContext';

function Profile() {

  const { myAllnotes } = useContext(myContext);

  const [user, setUser] = useState([]);

  const userData = async () => {

    const res = await fetch("http://localhost:4000/api/auth/getuser", {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem('token')
      }
    });

    const userData = await res.json();

    setUser(userData);

  }

  useEffect(()=>{

    userData();

  },[])

  return (
    <>

      <Layout>

        <div className='' style={{ backgroundColor: "#A3A2A0", width: "100rem", marginLeft: "12rem", height: "100rem" }}>

          <h1 className='text-4xl font-bold underline text-center m-10'>Profile</h1>

          <div className='flex justify-center font-bold gap-4 mt-20 flex-col text-center items-center'>

            <img className=" w-30 " src="https://cdn-icons-png.flaticon.com/128/149/149071.png" alt="img" />

            <h1 className='font-bold text-3xl'>Name: {user.name}</h1>

            <h2 className='font-bold text-3xl '>Email Address: {user.email}</h2>

            <h1 className='font-bold text-3xl'>Total Notes Created: {myAllnotes.length} </h1>

          </div>

        </div>

      </Layout>

    </>
  )
}

export default Profile