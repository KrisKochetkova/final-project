import React from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import About from "../../pages/about/About";
import Tasks from "../../pages/tasks/Tasks";
import Error from "../../pages/Error/Error";
import Login from '../../pages/loginPage/Login';
import Greeting from '../../pages/greeting/Greeting';
import PrivateRoute from '../../routes/PrivateRoute';
import PublicRoute from '../../routes/PublicRoute';



const AppRouter = () => {
    return (
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/tasks" element={<PrivateRoute><Tasks /></PrivateRoute>} />
          <Route path="/login" element={<PublicRoute><Login /></PublicRoute>} />
          <Route path='/greeting' element={<PrivateRoute><Greeting/></PrivateRoute>} />
          <Route path="/old-path" element={<Navigate to="/new-path" />} />
          <Route path="*" element={<Error />} /> 
      </Routes>
    );
};

export default AppRouter;