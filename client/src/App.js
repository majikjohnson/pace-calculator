import React from 'react';
import './App.css';
import 'typeface-roboto';

import Navbar from './components/layout/Navbar';
import Converter from './components/Converter';

function App() {
	return (
		<div className="App">
			<Navbar />
			<Converter />
		</div>
	);
}

export default App;
