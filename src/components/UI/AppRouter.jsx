import React from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import About from "../../pages/About";
import Tasks from "../../pages/Tasks";
import Error from "../../pages/Error";
import Login from '../../pages/loginPage/Login';


const AppRouter = () => {
    return (
        <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/about" element={<About />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/login" element={<Login />} />
        <Route path="/old-path" element={<Navigate to="/new-path" />} />
        <Route path="*" element={<Error />} /> 
      </Routes>
    );
};

export default AppRouter;