// import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import ProtectedRoute from './components/ProtectedRoute';

import Login from './pages/Login';
import Register from './pages/Register';
import NotFound from './pages/NotFound';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Logout from './pages/Logout';
import TimeTable from './pages/TimeTable';
import MyCourses from './pages/MyCourses';
import Test from './pages/Test';
import PDFSummary from './pages/PDFSummary';


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path="/home" element={<Navigate to="/" replace />} />
          <Route path='/register' element={<Register/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route exact path="/logout" element={<Logout />} />

          <Route element={<ProtectedRoute />}>
            <Route exact path="/my-courses" element={<MyCourses />} />
            <Route exact path="/test" element={<Test />} />
            <Route path='/dashboard' element={<Dashboard/>}/>
          </Route>

          <Route exact path="/pdf-summarize" element={<PDFSummary />} />
          <Route path='*' element={<NotFound/>}/>
        </Routes>
      </Router>
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  )
}

export default App
