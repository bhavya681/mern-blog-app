import React, { useContext, useEffect, useState } from 'react';
import Layout from "../../components/layout/Layout.jsx";
import { useNavigate, useParams } from 'react-router-dom';
import myContext from '../../context/data/myContext.jsx';
import toast from 'react-hot-toast';

const UpdatePage = () => {

  const navigate=useNavigate();
  const { id } = useParams();

  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [tag, setTag] = useState("");

  const getNotesById = async () => {

    const res = await fetch(`http://localhost:/notes/notes/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem('token')
      }
    });

    const data = await res.json();

    setTitle(data?.title);
    setImage(data?.image);
    setDescription(data?.description);
    setTag(data?.tag);

  }

  useEffect(() => {
    getNotesById()
  }, [id])

  const update = async () => {

    const res = await fetch(`http://localhost:4000/api/notes/updatenote/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem('token')
      },
      body: JSON.stringify({ title, image, description, tag })
    });

    const data = await res.json();

    if (data.success) {

      toast.success(data.success);
      navigate("/")

    } else {

      toast.error(data.error);

    }


  }

  return (

    <>

      <Layout>

        <div className='' style={{ backgroundColor: "#D2CBBF", width: "100rem", height: "100rem", marginLeft: "12rem" }}>

          <h1 className='text-3xl font-bold text-center m-5 underline'>Update Note</h1>

          <div style={{ backgroundColor: "#D2CBBF", marginTop: "10rem", boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px", padding: "10px", borderRadius: "30px" }}
            className='flex flex-col gap-8 w-46 m-20'>

            <form className='flex flex-col gap-8 p-10'>

              <input type='text' value={title} onChange={(e) => { setTitle(e.target.value) }} className='rounded-lg h-10 p-4' placeholder='Enter Title' />

              <input type='text' value={image} onChange={(e) => { setImage(e.target.value) }} className='rounded-lg h-10 p-4' placeholder='Enter Your Image Link' />

              <input type='text' value={tag} onChange={(e) => { setTag(e.target.value) }} className='rounded-lg h-10 p-4' placeholder='Enter Your Tags' />

              <input type='text' value={description} onChange={(e) => { setDescription(e.target.value) }} className='rounded-lg h-10 p-4' placeholder='Enter Description' />

              <button type='submit' onClick={update} className='bg-black text-white text-xl p-2 rounded-lg hover:bg-gray-600'>
                Update Note
              </button>

            </form>

          </div>

        </div>

      </Layout>

    </>

  )

}

export default UpdatePage;