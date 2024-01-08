import React, { useContext, useEffect } from 'react';
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";
import myContext from '../../context/data/myContext';
import { Link } from 'react-router-dom';

const NoteCard = () => {

    const { myAllnotes, Loading, fetchallNotes, deleteNote } = useContext(myContext);

    useEffect(() => {
        fetchallNotes();
    }, [])

    return (

        <>

            <div className=' text-center' style={{ backgroundColor: "#A7A7A8", marginLeft: "10rem", width: "101rem", height: "500rem" }}>

                {Loading ?
                    (<>
                        <div className=''>
                            <img className='w-14 py-20' src="https://i.gifer.com/ZZ5H.gif" alt="" />
                        </div>
                    </>)
                    :
                    (<>
                        <h1 className='text-3xl m-5 underline font-bold text-center '>Your Notes</h1>

                        {
                            myAllnotes.length > 0 ? myAllnotes.map((notes) => (
                                <>
                                    <div key={notes.id} style={{ backgroundColor: "#CCCAC6" }} className='card mt-40 mx-80 border h-[33rem] rounded-xl w-[60rem]'>

                                        <main>

                                            <h1 className='text-xl py-2 font-bold my-2'>{notes.title}</h1>

                                            <img style={{ borderRadius: "54px", marginLeft: "66px" }} className='px-80 m-5 items-center rounded-lg text-center' src={notes.image} alt='post' />

                                            <p>{notes.description.slice(80)}</p>

                                            <div className='flex justify-between'>

                                                <h2 className='bg-gray-100 rounded-xl text-center p-3 cursor-pointer m-3 hover:bg-gray-100'>
                                                    {notes.tag}
                                                </h2>

                                                <b className='flex m-3 space-x-6'>

                                                    <Link to={`/notes/edit/${notes._id}`}>
                                                        <FiEdit className='cursor-pointer' size={36} />
                                                    </Link>

                                                    <button onClick={() => { deleteNote(notes._id) }}>
                                                        <RiDeleteBin6Line className='cursor-pointer' size={36} />
                                                    </button>


                                                </b>

                                            </div>

                                        </main>

                                    </div>

                                </>
                            ))

                                : (<>


                                    <h1>No Notes Found</h1>

                                </>)
                        }

                    </>)}
            </div>

        </>

    )

}

export default NoteCard










