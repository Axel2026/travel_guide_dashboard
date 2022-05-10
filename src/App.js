import * as React from "react"
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Login from "./components/Login";
import MainPage from "./components/MainPage";
import Attractions from "./components/Attractions";
import AddNew from "./components/AddNew";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
      <BrowserRouter>
          <React.StrictMode>
              <Routes>
                  <Route path="/city/:id" element={<Attractions />}/>
                  <Route path="/" element={<MainPage/>}/>
                  <Route path="/login" element={<Login/>}/>
                  <Route path="/add/:type" element={<AddNew/>}/>
              </Routes>
          </React.StrictMode>
      </BrowserRouter>
  );
}

export default App;
