import React, { useContext, useEffect } from 'react';
import Layout from "../../components/layout/Layout.jsx";
import { CgProfile } from "react-icons/cg";
import myContext from '../../context/data/myContext.jsx';

const AllNotes = () => {

  const {Loading, fetchNotes, allnotes} = useContext(myContext);

  useEffect(() => {

    fetchNotes();

  }, [])

  return (

    <>
      <Layout>

        {
          Loading
            ?
            (<>
              <div className=''>
                <img className='w-14 py-20' src="https://i.gifer.com/ZZ5H.gif" alt="" />
              </div>
            </>)
            :
            (
              <>

                <div className=' text-center' style={{ backgroundColor: "#A7A7A8", marginLeft: "10rem", width: "101rem", height: "5000rem" }}>

                  <h1 className='text-3xl m-5 underline font-bold text-center '>All Notes</h1>

                  {
                    allnotes.length > 0 ?
                      allnotes.map((notes) => (
                        <>

                          <div key={notes.id} style={{ backgroundColor: "#CCCAC6" }} className='card mt-40 mx-80 border h-[36rem] rounded-3xl w-[60rem]'>

                            <main>

                              <h1 className='text-3xl py-2 font-bold my-2'>{notes.title}</h1>

                              <img style={{ borderRadius: "54px", marginLeft: "66px" }} className='px-80 m-5 items-center rounded-lg text-center' src={notes.image} alt='post' />

                              <p>{notes.description.slice(80)}</p>

                              <div className='flex justify-between'>

                                <h2 className='bg-gray-100 rounded-xl text-center p-3 cursor-pointer m-3 hover:bg-gray-100'>{notes.tag}</h2>

                                <b className='flex m-5 space-x-6'>

                                  <CgProfile size={"43px"} />

                                  <h2 className='text-center text-lg my-1'>Posted By {notes?.user}</h2>

                                </b>
                              </div>

                            </main>

                          </div>


                        </>
                      ))
                      :
                      (
                        <>
                          <h1>No Notes Found</h1>
                        </>
                      )
                  }

                </div>
              </>
            )
        }
      </Layout>

    </>

  )

}

export default AllNotes;