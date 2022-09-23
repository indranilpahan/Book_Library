import React from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Header from "./Myelement/Header";
import About from "./Myelement/About";
import Addbook from "./Myelement/Addbook";
import Footer from "./Myelement/Footer";
import './App.css';
import logo from './logo.jpg';

function App() {

	return (
		
		<>
    <div className="mylogo" >

            <h3 >My Library</h3>
			{/* Logo image */}
			<img src={logo} className="imglogo" /> 
          </div>
			<BrowserRouter>
				<div style={{
					display: "flex",
					background: 'darkmagenta',
					padding: '5px 0 5px 5px',
					fontSize: '20px'
				}}>
					{/* Style & active link */}
					<div style={{ margin: '10px' }}>
						<NavLink to="/" style={({ isActive }) => ({
							color: isActive ? 'greenyellow' : 'white' })}>
							Home
						</NavLink>
					</div>
          <div style={{ margin: '10px' }}>
						<NavLink to="/addbook" style={({ isActive }) => ({
							color: isActive ? 'greenyellow' : 'white' })}>
							Add Book
						</NavLink>
					</div>
					<div style={{ margin: '10px' }}>
						<NavLink to="/about" style={({ isActive }) => ({
							color: isActive ? 'greenyellow' : 'white' })}>
							About
						</NavLink>
					</div>
					
				</div>
				{/* click to lood page use react */}
				<Routes>
					<Route exact path="/" element={<Header />} />     
					<Route exact path="/about" element={<About />} />
					<Route exact path="/addbook" element={<Addbook />} />
				</Routes>
			</BrowserRouter>
			<Footer />
		</>
	);

}

export default App;
