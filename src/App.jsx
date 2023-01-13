import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './components/Home'
import Login from './components/Login'
import Contact from './components/Contact'

export default function App() {
  	return (
    	<Router>
			<Routes>
				<Route path="/login" element={<Login />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/" element={<Home />} />
			</Routes>
    	</Router>
  	);
}