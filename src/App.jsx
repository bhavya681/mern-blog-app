import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import AddPage from "./pages/addPage/AddPage.jsx";
import Home from "./pages/home/Home.jsx";
import Login from "./pages/login/Login.jsx";
import Signup from "./pages/signup/Signup.jsx";
import Profile from "./pages/profile/Profile.jsx";
import UpdatePage from "./pages/updatePage/UpdatePage.jsx";
import NoPage from "./pages/noPage/NoPage.jsx";
import AllNotes from './pages/allNotes/AllNotes.jsx';
import { Toaster } from 'react-hot-toast';

const App = () => {

  return (

    <>

      <Router>

        <Routes>

          <Route path='/' element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
          />

          <Route path='/addpage' element={
            <ProtectedRoute>
              <AddPage />
            </ProtectedRoute>
          } />

          <Route path='/profile' element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          } />

          <Route path='/notes/edit/:id' element={
            <ProtectedRoute>
              <UpdatePage />
            </ProtectedRoute>
          } />

          <Route path='/allnotes' element={<AllNotes />} />

          <Route path='/login' element={<Login />} />

          <Route path='/signup' element={<Signup />} />

          <Route path='/*' element={<NoPage />} />

        </Routes>

        <Toaster />

      </Router>

    </>

  )

}

export default App;

const ProtectedRoute = (props) => {

  const token = localStorage.getItem('token');

  if (token) {

    return props.children

  } else {

    <Navigate path="/login" />

  }
}