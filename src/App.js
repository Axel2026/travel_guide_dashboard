import * as React from "react"
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Login from "./components/Login";
import MainPage from "./components/MainPage";
import Attractions from "./components/Attractions";

function App() {
  return (
      <BrowserRouter>
          <React.StrictMode>
              <Routes>
{/*
                  <Route path="/profile/:userid" element={<><Navbar/><Profile/><HotPosts/><NewUsers/></>}/>*/}
                  <Route path="/city/:id" element={<Attractions />}/>
                  <Route path="/" element={<MainPage/>}/>
                  <Route path="/login" element={<Login/>}/>
              </Routes>
          </React.StrictMode>
      </BrowserRouter>
  );
}

export default App;
