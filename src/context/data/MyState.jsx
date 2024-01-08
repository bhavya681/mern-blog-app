import React, { useState } from 'react';
import myContext from './myContext.jsx';
import toast from 'react-hot-toast';
import { useParams } from 'react-router-dom';

const MyState = (props) => {

    const [Loading, setLoading] = useState(false);
    const [myAllnotes, setMyAllnotes] = useState([]);
    const [allnotes, setAllnotes] = useState([]);

    const fetchallNotes = async () => {

        try {

            setLoading(true);

            const res = await fetch("http://localhost:4000/api/notes/fetchallnotes", {
                method: "GET",
                headers: {
                    'Content-Type': "application/json",
                    'auth-token': localStorage.getItem("token")
                }
            });

            const data = await res.json();

            setMyAllnotes(data);

            // if (data.success) {

            //     toast.success(data.success);

            // } else {

            //     toast.error(data.error);

            // }

            setLoading(false);

        } catch (error) {

            setLoading(false);
            console.log(error);

        }

    }

    const fetchNotes = async () => {

        try {

            setLoading(true)

            const res = await fetch("http://localhost:4000/api/notes/fetchnotes", {
                method: "GET",
                headers: {
                    'Content-Type': "application/json"
                }
            });

            const data = await res.json();

            setAllnotes(data);

            // if (data.success) {

            //     toast.success(data.success);

            // } else {

            //     toast.error(data.error);

            // }

            setLoading(false);

        } catch (error) {

            setLoading(false);
            console.log(error)

        }

    }

    const [title, setTitle] = useState("");
    const [image, setImage] = useState("");
    const [description, setDescription] = useState("");
    const [tag, setTag] = useState("");

    const addNote = async () => {

        try {

            const res = await fetch("http://localhost:4000/api/notes/addnote", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'auth-token': localStorage.getItem('token')
                },
                body: JSON.stringify({ title, image, description, tag })
            });

            const noteData = await res.json();

            fetchallNotes();

            if (noteData.success) {

                toast.success(noteData.success);

            } else {

                toast.error(noteData.error);

            }

            setTitle("");
            setImage("");
            setDescription("");
            setTag("");

        } catch (error) {

            console.log(error);

        }

    };

    const deleteNote = async (id) => {

        try {

            const res = await fetch(`http://localhost:4000/api/notes/deletenote/${id}`, {
                method: "DELETE",
                headers: {
                    'Content-Type': 'application/json',
                    'auth-token': localStorage.getItem('token')
                }
            });

            const noteData = await res.json();

            fetchallNotes();

            if (noteData.success) {

                toast.success(noteData.success);

            } else {

                toast.error(noteData.error);

            }

        } catch (error) {

            console.log(error);


        }

    }

    return (

        <>

            <myContext.Provider value={{
                myAllnotes, allnotes,
                Loading,
                fetchallNotes, fetchNotes,
                title, setTitle, image, setImage, description, setDescription, tag, setTag,
                addNote,
                deleteNote,
            }}>

                {props.children}

            </myContext.Provider>

        </>

    )
}

export default MyState