import React, { useContext, useState } from 'react'
import Layout from '../../components/layout/Layout'
import myContext from '../../context/data/myContext';

const AddPage = () => {

  const { title, setTitle, image, setImage, description, setDescription, tag, setTag, addNote } = useContext(myContext);

  return (

    <>

      <Layout>

        <div className='' style={{ backgroundColor: "#D2CBBF", width: "100rem", height: "100rem", marginLeft: "12rem" }}>

          <h1 className='text-3xl font-bold text-center m-5 underline'>Add Note</h1>

          <div style={{ backgroundColor: "#D2CBBF", marginTop: "10rem", boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px", padding: "10px", borderRadius: "30px" }}
            className='flex flex-col gap-8 w-46 m-20'>

            <form className='flex flex-col gap-8 p-10'>

              <input type='text' name={title} value={title} onChange={(e)=>{setTitle(e.target.value)}}  className='rounded-lg h-10 p-4' placeholder='Enter Title' />

              <input type='text' name={image} value={image} onChange={(e)=>{setImage(e.target.value)}} className='rounded-lg h-10 p-4' placeholder='Enter Your Image Link' />

              <input type='text' name={tag} value={tag} onChange={(e)=>{setTag(e.target.value)}} className='rounded-lg h-10 p-4' placeholder='Enter Your Tags' />

              <textarea type='text' name={description} value={description}    cols="30" rows="10" onChange={(e)=>{setDescription(e.target.value)}} className='rounded-lg h-10 p-4' placeholder='Enter Description' ></textarea>

              <button type='submit' onClick={addNote} className='bg-black text-white text-xl p-2 rounded-lg hover:bg-gray-600'>
                Add Note
              </button>

            </form>

          </div>

        </div>

      </Layout>

    </>

  )

}

export default AddPage