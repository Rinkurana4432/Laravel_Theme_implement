import logo from './logo.svg';
import './App.css';



import {
  BrowserRouter as Router,
  Routes,
  Route,
  Redirect, Link
} from "react-router-dom";
import styled from 'styled-components';


import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import About from "./components/About";
import Clients from "./components/Clients";
import Ourservice from "./components/Ourservice";
import Projects from "./components/Project";
import Contact from "./components/Contact";


function App() {
	 
	
    return (
      
           <div className="App">
		   <Header/>
		   <Router>
		   <Routes>
			<Route path="/" element={<Home />} />
			<Route path="/about" element={<About />} />
			<Route path="/Ourservice" element={<Ourservice />} />
			<Route path="/clients" element={<Clients />} />
			<Route path="/projects" element={<Projects />} />
			<Route path="/Contact" element={<Contact />} />
		  </Routes>
		  </Router>
		<Footer/>
           </div>
    
   );
  
 
}

export default App;
