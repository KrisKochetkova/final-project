
import React from "react";
import './styles/App.css'
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/UI/AppRouter";
import { UserProvider } from "./context/userContext";



function App() {
 return (
  <UserProvider>
      <BrowserRouter>
        <AppRouter/>
      </BrowserRouter>
  </UserProvider>
 

 )
}

export default App;


