import React from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import About from "../../pages/about/About";
import Tasks from "../../pages/tasks/Tasks";
import Error from "../../pages/Error/Error";
import Login from '../../pages/loginPage/Login';
import Greeting from '../../pages/greeting/Greeting';


const AppRouter = () => {
    return (
        <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/about" element={<About />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/login" element={<Login />} />
        <Route path='/greeting' element={<Greeting/>} />
        <Route path="/old-path" element={<Navigate to="/new-path" />} />
        <Route path="*" element={<Error />} /> 
      </Routes>
    );
};

export default AppRouter;