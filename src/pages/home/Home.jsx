import React from 'react';
import Layout from "../../components/layout/Layout.jsx";
import NoteCard from "../../components/noteCard/NoteCard.jsx";
import AddPage from '../addPage/AddPage.jsx';
import Profile from '../profile/Profile.jsx';
import AllNotes from '../allNotes/AllNotes.jsx';

const Home = () => {

  return (

    <>

      <Layout >

    <NoteCard/>

      </Layout>

    </>

  )

}

export default Home