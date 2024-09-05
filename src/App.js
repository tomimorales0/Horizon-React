import React from "react";
import {Routes, Route} from 'react-router-dom';
import MainPage from './components/main';
import './App.css';
import Header from "./components/header";
import MainContent from "./components/main";
import Footer from "./components/footer";
import Sidebar from "./components/aside";

function App() {
  return (
    <div className="App">
      <Header/>
      <Sidebar/>
      <MainContent/>
      <Footer/>
    </div>
  );
}

export default App;

/* function App() {
	return (
		<RouterProvider router={router}/>
	);
}

export default App;*/